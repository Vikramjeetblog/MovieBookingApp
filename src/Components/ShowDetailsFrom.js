import React from 'react';
import '../Styles/ShowDetails.css';

const ShowDetailsForm = ({ formData, handleInputChange, handleFormSubmit, bookingSuccess }) => {
  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="additionalInfo">Additional Info</label>
            <textarea
              className="form-control"
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button type="submit" className="btn btn-primary" style={{marginTop:"30px;"}}>
              Book Ticket
            </button>
            {bookingSuccess && (
              <div className="alert alert-success ml-1" role="alert">
                Ticket booked successfully! Redirecting to the success screen...
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShowDetailsForm;
