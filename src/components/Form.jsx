/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
  const [userName, setUserName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${userName}`)
      .then((response) => {
        props.onSubmit(response.data);
        setUserName('');
      });
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} placeholder="Github Username" requires />
      <button type="submit">Add card</button>
    </form>
  );
};


export default Form;
