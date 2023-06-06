import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Styles/Showlist.css'

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className="container">
      <h1>Show List</h1>
      <div className="row">
        {shows.map((show) => (
          <div className="col-sm-6" key={show.show.id}>
            <div className="card">
              <img src={show.show.image.medium} alt={show.show.name} className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">{show.show.name}</h3>
                <p className="card-text">Language: {show.show.language}</p>
                <p className="card-text">Genres: {show.show.genres.join(', ')}</p>
                <Link to={`/show/${show.show.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
