import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ShowDetailsForm from './ShowDetailsFrom';
import '../Styles/ShowDetails.css';




 export default function ShowDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    additionalInfo: '',
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
        setFormData((prevFormData) => ({
          ...prevFormData,
          movieName: response.data.name, // Pre-populate movie name
        }));
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetails();
  }, [id]);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formData.email.trim() === '' || formData.phone.trim() === '') {
      // Email or phone is empty, display an error or take appropriate action
      alert('Email and phone are required!');
      return;
    }

    setBookingSuccess(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate(`/ticket-details/${id}`, { state: { formData } }); // Redirect to the "TicketDetails" component with the show ID and form data
    } catch (error) {
      console.error('Error while booking ticket:', error);
    }
  };

  return (
    <div className="container">
      <h1>Show Details</h1>
      {show ? (
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{show.name}</h2>
                <p className="card-text">{show.summary}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <ShowDetailsForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
              bookingSuccess={bookingSuccess}
            />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};


