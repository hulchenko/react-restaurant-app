import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const ReviewItem = ({ handleDelete, handleEdit, review }) => {
  return (
    <div className="reviewItem">
      <h3>{review.restaurant}</h3>
      <p>{review.review}</p>
      <div>
        <button onClick={() => handleDelete(review.id)}>
          <FaTrash />
        </button>
      </div>
      <div>
        <button onClick={() => handleEdit(review.id)}>
          <FaEdit />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
