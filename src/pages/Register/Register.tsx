import React, { useEffect, useState } from 'react';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { ISignUpData } from 'src/store/interface';
import { signup } from 'src/API/auth-service';

import './Register.scss';
import { toast } from 'react-toastify';
import { toastMsg } from 'src/store/toast';
const schema = yup
  .object({
    username: yup.string().max(20).required(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
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
      toast.success('Success', toastMsg);
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
                  <p className="text-danger">{errors.username?.message}</p>
                </div>
                <div className="form-outline mb-3">
                  <input
                    type="text"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="First name"
                    {...register('firstname')}
                  />
                  <p className="text-danger">{errors.firstname?.message}</p>
                </div>
                <div className="form-outline mb-3">
                  <input
                    type="text"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Last name"
                    {...register('lastname')}
                  />
                  <p className="text-danger">{errors.lastname?.message}</p>
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
                  <p className="text-danger">{errors.password?.message}</p>
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
