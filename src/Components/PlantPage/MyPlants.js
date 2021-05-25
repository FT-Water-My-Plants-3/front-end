import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar.js';
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';
import Plant from './Plant'
import AddPlant from '../AddPlant.js';

//this page will render all of the users plant cards. 
//There should be an add plant button.

const MyPlants = () => {
  
    const [myPlants, setMyPlants] = useState([]);
    const [add, setAdd] =useState(false);
    const user_id = localStorage.getItem('user_id');



    useEffect( () => {
      // needed to set a function that handled the axios.get for it to render a .map of the array
        // const data = () => {
        axiosWithAuth()
            .get(`/users/${user_id}/plants`)
            .then( res => {
                setMyPlants( res.data );
            })
            .catch( err => console.error( "darn... nothing: ", err) );
        // data();
        }, 
    [] );

    const onClickAdd = (e) =>{
        setAdd(!add);
    }

  return (
    <div>
        <h1>My Plants</h1>
    { add ? (
        <AddPlant setAdd={setAdd} myPlants={myPlants} setMyPlants={setMyPlants} user_id={user_id}/> )
        : null}
        { add ? null : (<button onClick={onClickAdd}>Add Plant</button>) }
        {myPlants.map(plant=>
            <Plant plant={plant} setMyPlants={setMyPlants} myPlants={myPlants}/>)}
    </div>
);
};

export default MyPlants;