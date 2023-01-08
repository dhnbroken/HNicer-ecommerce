import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import Loading from 'src/components/Loading/Loading';
import { deleteUserInformation } from 'src/API/user-service';

const BillDetails: React.FC = () => {
  const location = useLocation();
  const { user } = location.state;
  const { loading } = useContext(GlobalContextProvider);
  const navigate = useNavigate();

  const serverPublic = 'http://localhost:5000/images/';
  const deleteUser = async () => {
    try {
      await deleteUserInformation(user._id);
    } catch (err) {}
  };

  const handleRemoveUser = () => {
    deleteUser().then(() => navigate('/user'));
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
                        <img src={user.avatar ?? serverPublic + 'seo-title.jpg'} alt="Avatar" />
                      </div>
                      <h5 className="user-name">{`${user.firstname} ${user.lastname}`}</h5>
                      <h6 className="user-email">{user.email}</h6>
                      {user.isAdmin && <h6 className="text-danger">Role: Admin</h6>}
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
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          placeholder="Enter full name"
                          defaultValue={`${user.firstname} ${user.lastname}`}
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
                          defaultValue={user.email}
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
                          defaultValue={user.phoneNumber}
                          placeholder="Enter phone number"
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
                          defaultValue={user.addressLine1}
                          placeholder="Address Line 1"
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
                          defaultValue={user.addressLine2}
                          placeholder="Address Line 2"
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
                          defaultValue={user.city}
                          placeholder="Enter City"
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
                        <button type="button" className="btn btn-primary" onClick={() => handleRemoveUser()}>
                          Remove
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

export default BillDetails;
