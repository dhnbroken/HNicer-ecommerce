/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TaskInfoAPI, TaskState, PropsProvider, ISneaker, IClient, IUser } from 'src/store/interface';
import React, { createContext, useReducer, useState } from 'react';
import taskReducer from 'src/store/reducer';
import { initUser, intialState } from 'src/store/constants';
import * as actions from 'src/store/actions';
import { TodoContext } from './TodoContext';
import { getAllSneaker, getClient } from 'src/Service/sneaker-service';
import { getCurrentUserInfo } from 'src/Service/userInfo-service';

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
  getSneakers: () => void;
  clients: IClient[];
  getClients: () => void;
  getUserInfo: () => void;
  isViewAll: boolean;
  userInfo: IUser;
  setIsViewAll: (isViewAll: boolean) => void;
}

export const GlobalContextProvider = createContext<GlobalContext>(TodoContext);
export const GlobalStoreContext = ({ children }: PropsProvider) => {
  const [sneakers, setSneakers] = useState<ISneaker[]>([]);
  const [clients, setClients] = useState<IClient[]>([]);
  const [userInfo, setUserInfo] = useState<IUser>(initUser);

  const [isViewAll, setIsViewAll] = useState(false);

  const [loading, setLoading] = useState(false);

  const [state, dispatch] = useReducer(taskReducer, intialState);
  const getTodo = (jobs: TaskInfoAPI[]) => dispatch(actions.getTodoApi(jobs));
  const setTodo = (payload: TaskInfoAPI) => dispatch(actions.setTodoInput(payload));
  const addTodo = (payload: TaskInfoAPI) => dispatch(actions.addTodoInput(payload));
  const deleteTodo = (payload: number) => dispatch(actions.deleteTodoInput(payload));
  const updateTodo = (payload: TaskInfoAPI) => dispatch(actions.updateTodoInput(payload));
  const changeStatusTodo = (payload: TaskInfoAPI) => dispatch(actions.changeStatus(payload));

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
      const res = await getCurrentUserInfo();
      setUserInfo(res[0]);
      setLoading(true);
    } catch (err) {}
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
    changeStatusTodo
  };
  return <GlobalContextProvider.Provider value={valueContext}>{children}</GlobalContextProvider.Provider>;
};
