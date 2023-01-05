import { GlobalContextProvider } from 'src/Context/GlobalContext';
import React, { useContext, useEffect } from 'react';
import './Bill.scss';
import Loading from 'src/components/Loading/Loading';
import moment from 'moment';

const Bill = () => {
  const { getBills, bills, loading, setLoading } = useContext(GlobalContextProvider);
  useEffect(() => {
    setLoading(false);
    getBills();
  }, []);
  console.log(bills);
  return (
    <React.Fragment>
      {!loading ? (
        <Loading />
      ) : (
        <div className="container-xl">
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
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bills.map((bill, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{`${bill.firstname} ${bill.lastname}`}</td>
                      <td>{moment(bill.createAt?.toString()).format('MM-DD-YYYY')}</td>
                      <td>{`$${bill.totalPrice}`}</td>
                      <td>{bill.status}</td>
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

export default Bill;
