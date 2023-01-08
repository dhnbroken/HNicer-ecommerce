/* eslint-disable @typescript-eslint/no-unused-vars */
import { ISignUpData, IUser } from 'src/store/interface';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signup } from 'src/API/auth-service';
import { updateUserInformation } from 'src/API/user-service';

const schema = yup
  .object({
    username: yup.string().max(20).required(),
    password: yup.string().min(6).max(20).required()
  })
  .required();

const UserAdd = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<IUser & ISignUpData>({
    resolver: yupResolver(schema)
  });

  const updateUser = async (id: string, data: IUser) => {
    try {
      const res = await updateUserInformation(id, data);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const formSubmitHandler: SubmitHandler<IUser & ISignUpData> = (data: IUser & ISignUpData) => {
    signup({
      username: data.username,
      password: data.password,
      firstname: data.firstname,
      lastname: data.lastname
    }).then((res) => {
      updateUser(res.data.user._id, data).then(() => navigate('/user'));
    });
  };

  return (
    <div className="container my-5">
      <div className="row gutters">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <form className="card-body" onSubmit={handleSubmit(formSubmitHandler)}>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mb-2 text-primary">Account Details</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter username"
                      {...register('username')}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      {...register('password')}
                    />
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mb-2 text-primary">Personal Details</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter first name"
                      {...register('firstname')}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter last name"
                      {...register('lastname')}
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
                      placeholder="Enter City"
                      {...register('city')}
                    />
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text-right">
                    <button type="button" className="btn btn-secondary me-3" onClick={() => navigate('/user')}>
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAdd;
