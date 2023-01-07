import { Status } from './enum';
import { ISneaker, IUser } from './interface';
export const intialState = {
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
};

export const initSneaker: ISneaker = {
  _id: '',
  name: '',
  description: '',
  price: 0,
  image: ''
};

export const initUser: IUser = {
  _id: '',
  isAdmin: false,
  firstname: '',
  lastname: ''
};
