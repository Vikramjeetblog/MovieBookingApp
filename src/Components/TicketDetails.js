import React from 'react';
import { useLocation } from 'react-router-dom';
import "../Styles/TicketDetails.css";

const TicketDetails = () => {
  const location = useLocation();
  const formData = location.state?.formData;

  return (
    <div className="ticket-details-container">
      <h1 className='heading'>Ticket Details</h1>
      <div className="ticket-details-card">
        <div className="ticket-details-card-body">
          <h2 className="ticket-details-card-title">Ticket Confirmation</h2>
          <p className="ticket-details-card-text">Movie Name: {formData?.movieName}</p>
          <p className="ticket-details-card-text">Email: {formData?.email}</p>
          <p className="ticket-details-card-text">Phone: {formData?.phone}</p>
          <p className="ticket-details-card-text">Additional Info: {formData?.additionalInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
