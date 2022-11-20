import { Status } from './enum';
import { ISneaker } from './interface';
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
  id: 0,
  name: '',
  description: '',
  price: 0,
  image: ''
};
