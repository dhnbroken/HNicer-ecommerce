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
  sneakers: [],
  isViewAll: false,
  clients: [],
  getClients: () => {},
  setIsViewAll: () => {},
  getSneakers: () => {},
  getTodo: () => {},
  setTodo: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  changeStatusTodo: () => {}
};
