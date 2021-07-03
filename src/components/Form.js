import React, { useState } from 'react';
import { uuid } from 'uuidv4';
const Form = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    restaurant: '',
    review: '',
    id: uuid(),
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent page from reloading on click
    setReviews([...reviews, form]);
    setForm({
      restaurant: '',
      review: '',
      id: uuid(),
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h5>Write a Review:</h5>
      <label htmlFor="restaurant">Restaurant: </label>
      <input
        onChange={handleChange}
        value={form.restaurant}
        type="text"
        placeholder="Restaurant name"
        id="restaurant"
        name="restaurant"
      />
      <label htmlFor="restaurant">Review: </label>
      <textarea
        onChange={handleChange}
        value={form.review}
        type="text"
        placeholder="Share your thoughts"
        id="review"
        name="review"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
