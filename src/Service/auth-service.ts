import { TLoginData } from 'src/store/interface';
import axios from 'axios';
import { setUserSession } from 'src/utils/Common/Common';

export const login = async ({ emailAddress, password }: TLoginData) => {
  return await axios
    .post('http://localhost:4000/users/signin', {
      username: emailAddress,
      password
    })
    .then((res) => {
      setUserSession(res.data.token, res.data.user);
      return res;
    });
};
