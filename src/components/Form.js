import React from 'react';
import { uuid } from 'uuidv4';

const Form = ({ form, reviews, setForm, setReviews }) => {
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
    <form className="form" onSubmit={handleSubmit}>
      <h5>Write a Review:</h5>
      <label htmlFor="restaurant">
        <b>Restaurant: </b>
      </label>
      <input
        onChange={handleChange}
        value={form.restaurant}
        type="text"
        placeholder="Restaurant name"
        id="restaurant"
        name="restaurant"
      />
      <label htmlFor="restaurant">
        <b>Review: </b>
      </label>
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
