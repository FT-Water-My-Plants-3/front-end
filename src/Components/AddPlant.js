import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import StyledForm from '../StyledForm';
import '../Modal.css';

const AddPlant = ({ setAdd, myPlants, setMyPlants, user_id }) => {
  const { push } = useHistory();

  const [addPlant, setAddPlant] = useState({
    nickname: "",
    species: "",
    h2o_frequency: "",
    image: null
  });

  const handleChange = (e) => {
    setAddPlant({
      ...addPlant,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .post(`/plants/user/${user_id}`, addPlant)
    .then(res=>{
      // setMyPlants(res.data);
      push(`/myplants`);
      setAdd(false)
    })
    .catch(err=>{
      console.log(err);
    })
  }

  const handleCancel = (e) => {
    setAdd(false)
  }

  const { nickname, species, h2o_frequency, image } = addPlant

  return (
      <StyledForm onSubmit={handleSubmit}>
        <h1>Add plant</h1>
        <label>Nickname:
          <input
            name="nickname"
            type="text"          
            value={nickname}
            onChange={handleChange}
          />
        </label>
        <label>Species:
          <input
            name="species"
            type="text"
            value={species}
            onChange={handleChange}
          />
        </label>
        <label>Water Frequency (in days):
          <input
            name="h2o_frequency"
            type="number"
            value={h2o_frequency}
            onChange={handleChange}
          />
        </label>
        <label>Image (URL):
          <input
            name="image"
            type="text"
            value={image}
            onChange={handleChange}
          />
        </label>
        <button id='add-button' onClick={handleSubmit}>Add Plant</button>
        <button id='cancel-button' onClick={handleCancel}>Cancel</button>
      </StyledForm>
  );
}

export default AddPlant;