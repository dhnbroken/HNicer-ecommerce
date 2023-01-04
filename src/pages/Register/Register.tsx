/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { ISignUpData } from 'src/store/interface';
import { signup } from 'src/API/auth-service';

import './Register.scss';
const schema = yup
  .object({
    username: yup.string().max(20).required(),
    password: yup.string().min(6).max(20).required()
  })
  .required();

const Register = () => {
  const navigate: NavigateFunction = useNavigate();
  const [hide, setHide] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<ISignUpData>({
    resolver: yupResolver(schema)
  });

  const formSubmitHandler: SubmitHandler<ISignUpData> = (data: ISignUpData) => {
    signup({
      username: data.username,
      password: data.password,
      firstname: data.firstname,
      lastname: data.lastname
    }).then(() => {
      sessionStorage.removeItem('isRegister');
      navigate('/login');
    });
  };

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      navigate('/home');
    }
  }, [sessionStorage.getItem('token')]);
  return (
    <React.Fragment>
      <section className="mb-5">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form action="" onSubmit={handleSubmit(formSubmitHandler)}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <FontAwesomeIcon icon={faFacebook} />
                  </button>

                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>

                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    {...register('username')}
                  />
                </div>
                <div className="form-outline mb-3">
                  <input
                    type="text"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="First name"
                    {...register('firstname')}
                  />
                </div>
                <div className="form-outline mb-3">
                  <input
                    type="text"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Last name"
                    {...register('lastname')}
                  />
                </div>

                <div className="form-outline mb-3">
                  <FontAwesomeIcon
                    icon={hide ? faEyeSlash : faEye}
                    size="lg"
                    className="icon-btn position-absolute mt-3 ml-490"
                    onClick={() => setHide(!hide)}
                  />
                  <input
                    type={hide ? 'text' : 'password'}
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    {...register('password')}
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label">Remember me</label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Register
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Already have an account?{' '}
                    <Link to="/login" onClick={() => sessionStorage.removeItem('isRegister')} className="link-danger">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Register;