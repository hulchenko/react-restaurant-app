import React from 'react';
import { uuid } from 'uuidv4';

const Form = ({ editing, form, reviews, setEditing, setForm, setReviews }) => {
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

  const handleUpdate = (event) => {
    event.preventDefault();
    setEditing(false);
    const updatedReviews = reviews.map((review) =>
      review.id === form.id ? form : review
    );
    setReviews(updatedReviews);
    setForm({
      restaurant: '',
      review: '',
      id: uuid(),
    });
  };

  return (
    <form className="form" onSubmit={editing ? handleUpdate : handleSubmit}>
      <h2>Write a Review</h2>
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
      <button type="submit">{editing ? 'Update' : 'Submit'}</button>
    </form>
  );
};

export default Form;
