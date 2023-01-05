import { ActionKind } from './enum';
// Types
export interface ILoginData {
  username: string;
  password: string;
}

export interface ISignUpData {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
}

// Interface
export interface ISneaker {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface ISneakerData {
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface IClient {
  id: number;
  name: string;
  avatarPath: string;
  comment: string;
}

export interface IUser {
  _id: number;
  firstname: string;
  lastname: string;
  isAdmin: boolean;
  avatar?: string;
  email?: string;
  phone?: string;
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  description?: string;
  webSiteUrl?: string;
}

export interface ICart {
  _id?: string;
  userId: string | null;
  productId: string;
  productImage: string;
  productName: string;
  productTags: string;
  productPrice: number;
  productSize: number;
  quantity: number;
}

export interface IBillData {
  firstname: string;
  lastname: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  email: string;
  phoneNumber: string;
  cart: ICart[];
  totalPrice: number;
  createAt?: string;
  status?: string;
}

export type TaskAction = Get | Set | Add | Update | Delete | ChangeStatus;

export interface Get {
  type: ActionKind.GETJOB;
  payload: TaskInfoAPI[];
}

export interface Actions {
  type: string;
  payload: TaskInfoAPI;
}

export interface Set extends Actions {
  type: ActionKind.SETJOB;
}

export interface Add extends Actions {
  type: ActionKind.ADDJOB;
}

export interface Update extends Actions {
  type: ActionKind.UPDATEJOB;
}

export interface ChangeStatus extends Actions {
  type: ActionKind.CHANGESTATUS;
}

export interface Delete {
  type: ActionKind.DELETEJOB;
  payload: number;
}

export interface TaskInfoAPI {
  id: number;
  title: string;
  completed: boolean;
  status: string;
  deadline: string;
}

export interface TaskState {
  job: TaskInfoAPI;
  jobs: TaskInfoAPI[];
  setEdit: boolean;
}

export interface Props {
  taskAPI: TaskInfoAPI[];
  count: number;
  pending: number;
}

export interface PropsProvider {
  children: React.ReactNode;
}
