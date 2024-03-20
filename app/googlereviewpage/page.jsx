"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const GoogleReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const placeId = "@6.8411355,79.9980461,17z"; // Replace with the actual Place ID
  const apiKey = ""; // Replace with your Google Places API key

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await axios.get(
          `/api/googlereview?placeId=${placeId}&apiKey=${apiKey}`
        );
        const data = response.data;
        setReviews(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }

    fetchReviews();
  }, []);

  return (
    <div>
      <h1>Google Reviews</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {reviews.map((review, index) => (
            <div key={index}>
              <p>Name: {review.author_name}</p>
              <p>Rating: {review.rating}</p>
              <p>Text: {review.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GoogleReviewsPage;
