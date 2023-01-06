/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TaskInfoAPI, TaskState, PropsProvider, ISneaker, IClient, IUser, ICart, IBillData } from 'src/store/interface';
import React, { createContext, useReducer, useState } from 'react';
import taskReducer from 'src/store/reducer';
import { initUser, intialState } from 'src/store/constants';
import * as actions from 'src/store/actions';
import { TodoContext } from './TodoContext';
import { getClient } from 'src/Service/sneaker-service';
import { getAllSneaker } from 'src/API/sneaker-service';
import { getCurrentUserInfomation } from 'src/API/user-service';
import { deleteCart, getCartAll } from 'src/API/cart-service';
import { getAllBill } from 'src/API/bill-service';

export interface GlobalContext {
  state: TaskState;
  getTodo: (jobs: TaskInfoAPI[]) => void;
  setTodo: (payload: TaskInfoAPI) => void;
  addTodo: (payload: TaskInfoAPI) => void;
  deleteTodo: (payload: number) => void;
  updateTodo: (payload: TaskInfoAPI) => void;
  changeStatusTodo: (payload: TaskInfoAPI) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  sneakers: ISneaker[];
  setSneakers: (sneakers: ISneaker[]) => void;
  getSneakers: () => void;
  clients: IClient[];
  getClients: () => void;
  getUserInfo: () => void;
  isViewAll: boolean;
  userInfo: IUser;
  setIsViewAll: (isViewAll: boolean) => void;
  cart: ICart[];
  setCart: (cart: ICart[]) => void;
  getUserCart: () => void;
  removeCartItem: (id: string) => void;
  bills: IBillData[];
  setBills: (bills: IBillData[]) => void;
  getBills: () => void;
}

export const GlobalContextProvider = createContext<GlobalContext>(TodoContext);
export const GlobalStoreContext = ({ children }: PropsProvider) => {
  const [sneakers, setSneakers] = useState<ISneaker[]>([]);
  const [clients, setClients] = useState<IClient[]>([]);
  const [userInfo, setUserInfo] = useState<IUser>(initUser);
  const [cart, setCart] = useState<ICart[]>([]);
  const [bills, setBills] = useState<IBillData[]>([]);

  const [isViewAll, setIsViewAll] = useState(false);

  const [loading, setLoading] = useState(false);

  const [state, dispatch] = useReducer(taskReducer, intialState);
  const getTodo = (jobs: TaskInfoAPI[]) => dispatch(actions.getTodoApi(jobs));
  const setTodo = (payload: TaskInfoAPI) => dispatch(actions.setTodoInput(payload));
  const addTodo = (payload: TaskInfoAPI) => dispatch(actions.addTodoInput(payload));
  const deleteTodo = (payload: number) => dispatch(actions.deleteTodoInput(payload));
  const updateTodo = (payload: TaskInfoAPI) => dispatch(actions.updateTodoInput(payload));
  const changeStatusTodo = (payload: TaskInfoAPI) => dispatch(actions.changeStatus(payload));

  const userId = sessionStorage.getItem('userId');
  const getSneakers = async () => {
    try {
      const res = await getAllSneaker();
      setSneakers(res);
      setLoading(true);
    } catch (err) {}
  };

  const getClients = async () => {
    try {
      const res = await getClient();
      setClients(res);
      setLoading(true);
    } catch (err) {}
  };

  const getUserInfo = async () => {
    try {
      if (userId) {
        const res = await getCurrentUserInfomation(userId);
        setUserInfo(res);
        setLoading(true);
      }
    } catch (err) {}
  };

  const getUserCart = async () => {
    try {
      if (userId) {
        const res = await getCartAll(userId);
        setCart(res);
        setLoading(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeCartItem = (id: string) => {
    try {
      deleteCart(id);
    } catch (err) {
      console.log(err);
    }
  };

  const getBills = async () => {
    try {
      const res = await getAllBill();
      setBills(res);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  const valueContext = {
    state,
    sneakers,
    clients,
    userInfo,
    isViewAll,
    setIsViewAll,
    setSneakers,
    getTodo,
    setTodo,
    addTodo,
    deleteTodo,
    updateTodo,
    getSneakers,
    getClients,
    getUserInfo,
    loading,
    setLoading,
    changeStatusTodo,
    cart,
    setCart,
    getUserCart,
    removeCartItem,
    getBills,
    bills,
    setBills
  };
  return <GlobalContextProvider.Provider value={valueContext}>{children}</GlobalContextProvider.Provider>;
};
