import { getAllUser } from 'src/API/user-service';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import Loading from 'src/components/Loading/Loading';
import { IUser } from 'src/store/interface';
import moment from 'moment';

const User = () => {
  const navigate = useNavigate();
  const { loading } = useContext(GlobalContextProvider);
  const [users, setUsers] = useState<IUser[]>([]);
  const getAllUsers = async () => {
    try {
      const res = await getAllUser();
      setUsers(res);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <React.Fragment>
      {!loading ? (
        <Loading />
      ) : (
        <div className="container-xl">
          <div className="text-center mt-4 p-3">
            <button className="btn btn-outline-danger" onClick={() => navigate('/user/add')}>
              Add user
            </button>
          </div>
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row"></div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Date Created</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="cursor-pointer">
                  {users.map((user, index) => (
                    <tr key={index} onClick={() => navigate('/user/details', { state: { user } })}>
                      <td>{index + 1}</td>
                      <td>{`${user.firstname} ${user.lastname}`}</td>
                      <td>{moment(user.createdAt?.toString()).format('MM-DD-YYYY')}</td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default User;
