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
  userInfo: initUser,
  sneakers: [],
  isViewAll: false,
  clients: [],
  loading: false,
  setLoading: () => {},
  getClients: () => {},
  setIsViewAll: () => {},
  getSneakers: () => {},
  getUserInfo: () => {},
  getTodo: () => {},
  setTodo: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  changeStatusTodo: () => {}
};