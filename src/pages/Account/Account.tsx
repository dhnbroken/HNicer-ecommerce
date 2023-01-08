/* eslint-disable @typescript-eslint/no-unused-vars */
import Loading from 'src/components/Loading/Loading';
import React, { useEffect, useContext } from 'react';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import './Account.scss';
import { useNavigate } from 'react-router-dom';
import { updateUserInformation } from 'src/API/user-service';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUser } from 'src/store/interface';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  email: yup.string().email(),
  phoneNumber: yup.string().max(10)
});

const Account = () => {
  const { userInfo, setLoading, loading, getUserInfo } = useContext(GlobalContextProvider);
  const serverPublic = 'http://localhost:5000/images/';
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(false);
    getUserInfo();
  }, []);
  console.log(userInfo);

  const updateUser = async (data: IUser) => {
    try {
      const res = await updateUserInformation(userInfo._id, data);
      return res;
    } catch (err) {
      console.log(err);
    }
  };
  const handleLogOut = () => {
    sessionStorage.clear();
    navigate('/login');
    setLoading(false);
  };

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<IUser>({
    resolver: yupResolver(schema)
  });

  const formSubmitHandler: SubmitHandler<IUser> = (data: IUser) => {
    updateUser(data);
  };

  return (
    <React.Fragment>
      {loading ? (
        <div className="container my-5">
          <div className="row gutters">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="account-settings">
                    <div className="user-profile">
                      <div className="user-avatar">
                        <img src={userInfo.avatar ?? serverPublic + 'seo-title.jpg'} alt="Avatar" />
                      </div>
                      <h5 className="user-name">{`${userInfo.firstname} ${userInfo.lastname}`}</h5>
                      <h6 className="user-email">{userInfo.email}</h6>
                      {userInfo.isAdmin && <h6 className="text-danger">Role: Admin</h6>}
                    </div>
                    <div className="about">
                      <h5>About</h5>
                      <p>{!userInfo.isAdmin ? userInfo.description : "I'm Admin of this page"}</p>
                    </div>
                  </div>
                  {userInfo.isAdmin && (
                    <button className="btn btn-outline-info mb-3 w-100" onClick={() => navigate('/bill')}>
                      Bill
                    </button>
                  )}
                  <button className="btn btn-outline-danger mb-3 w-100" onClick={handleLogOut}>
                    Log Out
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <form className="card-body" onSubmit={handleSubmit(formSubmitHandler)}>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-2 text-primary">Personal Details</h6>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          placeholder="Enter full name"
                          defaultValue={`${userInfo.firstname} ${userInfo.lastname}`}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="eMail"
                          defaultValue={userInfo.email}
                          placeholder="Enter email address"
                          {...register('email')}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          defaultValue={userInfo.phoneNumber}
                          placeholder="Enter phone number"
                          {...register('phoneNumber')}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mt-3 mb-2 text-primary">Address</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label>Address Line 1</label>
                        <input
                          type="name"
                          className="form-control"
                          id="Street"
                          defaultValue={userInfo.addressLine1}
                          placeholder="Address Line 1"
                          {...register('addressLine1')}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label>Address Line 2</label>
                        <input
                          type="text"
                          className="form-control"
                          id="sTate"
                          defaultValue={userInfo.addressLine2}
                          placeholder="Address Line 2"
                          {...register('addressLine2')}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label>City</label>
                        <input
                          type="name"
                          className="form-control"
                          id="ciTy"
                          defaultValue={userInfo.city}
                          placeholder="Enter City"
                          {...register('city')}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="text-right">
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          className="btn btn-secondary me-3"
                          onClick={() => navigate('/home')}
                        >
                          Cancel
                        </button>
                        <button type="submit" id="submit" name="submit" className="btn btn-primary">
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  );
};

export default Account;
