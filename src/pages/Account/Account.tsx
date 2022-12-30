import Loading from 'src/components/Loading/Loading';
import React, { useEffect, useContext } from 'react';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import './Account.scss';

const Account = () => {
  const { getUserInfo, userInfo, setLoading, loading } = useContext(GlobalContextProvider);

  useEffect(() => {
    getUserInfo();
    setLoading(false);
  }, []);

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
                        <img src={userInfo.avatar} alt="Maxwell Admin" />
                      </div>
                      <h5 className="user-name">{`${userInfo.firstName} ${userInfo.lastName}`}</h5>
                      <h6 className="user-email">{userInfo.email}</h6>
                    </div>
                    <div className="about">
                      <h5>About</h5>
                      <p>{userInfo.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-2 text-primary">Personal Details</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          placeholder="Enter full name"
                          defaultValue={`${userInfo.firstName} ${userInfo.lastName}`}
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
                          defaultValue={userInfo.phone}
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label>Website URL</label>
                        <input
                          type="url"
                          className="form-control"
                          id="website"
                          defaultValue={userInfo.webSiteUrl}
                          placeholder="Website url"
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
                        <label>Street</label>
                        <input
                          type="name"
                          className="form-control"
                          id="Street"
                          defaultValue={userInfo.street}
                          placeholder="Enter Street"
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
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label>State</label>
                        <input
                          type="text"
                          className="form-control"
                          id="sTate"
                          defaultValue={userInfo.state}
                          placeholder="Enter State"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label>Zip Code</label>
                        <input
                          type="text"
                          className="form-control"
                          id="zIp"
                          defaultValue={userInfo.zipCode}
                          placeholder="Zip Code"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="text-right">
                        <button type="button" id="submit" name="submit" className="btn btn-secondary me-3">
                          Cancel
                        </button>
                        <button type="button" id="submit" name="submit" className="btn btn-primary">
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
