import { initUser } from 'src/store/constants';
import { Status } from 'src/store/enum';

export const TodoContext = {
  state: {
    job: {
      id: 0,
      status: Status.PENDING,
      title: '',
      completed: false,
      deadline: ''
    },
    jobs: [],
    setEdit: false,
    editId: 0,
    editDeadline: ''
  },
  userId: '',
  userInfo: initUser,
  sneakers: [],
  isViewAll: false,
  clients: [],
  loading: false,
  setLoading: () => {},
  getClients: () => {},
  setIsViewAll: () => {},
  setSneakers: () => {},
  getSneakers: () => {},
  getUserInfo: () => {},
  getTodo: () => {},
  setTodo: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  changeStatusTodo: () => {},
  cart: [],
  setCart: () => {},
  getUserCart: () => {},
  removeCartItem: (id: string) => {},
  bills: [],
  setBills: () => {},
  getBills: () => {},
  isEdit: false,
  setIsEdit: () => {}
};
