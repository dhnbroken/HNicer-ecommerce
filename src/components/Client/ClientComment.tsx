import { IClient } from 'src/store/interface';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

interface Props {
  client: IClient;
}

const ClientComment: React.FC<Props> = (props) => {
  const { client } = props;
  return (
    <div className="box">
      <div className="img-box">
        <img src={'http://localhost:5000/images/def-avatar.png'} alt="" width="111" height="111" />
      </div>
      <div className="detail-box">
        <div className="client_info">
          <div className="client_name">
            <h5>{client.name}</h5>
            <h6>Customer</h6>
          </div>
          <FontAwesomeIcon icon={faQuoteLeft} />
        </div>
        <p>{client.comment}</p>
      </div>
    </div>
  );
};

export default ClientComment;
