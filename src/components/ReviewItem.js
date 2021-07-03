import React from 'react';

const ReviewItem = ({ review }) => {
  return (
    <div className="reviewItem">
      <h3>{review.restaurant}</h3>
      <p>{review.review}</p>
    </div>
  );
};

export default ReviewItem;
