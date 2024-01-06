import React, { useState } from 'react';

const CreateListingContainer = () => {
  const [formData, setFormData] = useState({
    /*
  name: String,
  price: Number,
  model: String,
  make: String,
  year: Number,
  color: String,
    */
    name: '',
    price: '',
    model: '',
    make: '',
    year: 0,
    color: '',
    image: null

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'year' ? parseInt(value, 10) : value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your logic to send a POST request with formData
    const postData = new FormData();
    postData.append('name', formData.name);
    postData.append('price', formData.price);
    postData.append('model', formData.model);
    postData.append('make', formData.make);
    postData.append('year', formData.year);
    postData.append('image', formData.image);

    // Example using fetch
    fetch('http://localhost:3000/api/car', {
      method: 'POST',
      body: postData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
          Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
          Price:
        <input type="text" name="price" value={formData.price} onChange={handleChange} />
      </label>
      <br />
      <label>
      Model:
        <input type="text" name="model" value={formData.model} onChange={handleChange} />
      </label>
      <br />
      <label>
      Make:
        <input type="text" name="make" value={formData.make} onChange={handleChange} />
      </label>
      <br />
      <label>
      Year:
        <input type="text" name="year" value={formData.year} onChange={handleChange} />
      </label>
      <br />
      <label>
      Color:
        <input type="text" name="color" value={formData.color} onChange={handleChange} />
      </label>
      <br />
      <label>
      Image:
        <input type="file" name="image" onChange={handleFileChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateListingContainer;
