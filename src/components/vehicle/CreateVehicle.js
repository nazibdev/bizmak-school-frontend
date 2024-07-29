import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import ZoomClass from "../portal/ZoomClass";

const CreateVehicle = () => {
  const [vehicle, setVehicle] = useState({
    type: "",
    model: "",
    year: "",
    buyingPrice: "",
    sellingPrice:""
  });
  const navigate = useHistory();

  const handleChange = e => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/vehicle/api/v1/vehicles", vehicle);
      console.log(res.data);
      navigate.push('/createOption')
    } catch (error) {
      console.error(error);
    }
  };

  const ZoomClass = async () => {
    try {
      navigate.push('/zoom');
      // <a href='/vehicle'></a>
    } catch (error) {
      console.error(error);
    }
  };

  const vehicleList = async (vehicle) => {
    try {
      navigate.push('/createOption');
      // <a href='/vehicle'></a>
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <h1>Create New Vehicle Record</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="type">type:</label>
        <input
          type="text"
          name="type"
          id="type"
          value={vehicle.type}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          name="model"
          id="model"
          value={vehicle.model}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="text"
          name="year"
          id="year"
          value={vehicle.year}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="buyingPrice">Buying Price:</label>
        <input
          type="text"
          name="buyingPrice"
          id="buyingPrice"
          value={vehicle.buyingPrice}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="sellingPrice">Selling Price:</label>
        <input
          type="text"
          name="sellingPrice"
          id="sellingPrice"
          value={vehicle.sellingPrice}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create Vehicle</button>
    </form>
    <button onClick={vehicleList}>Vehicle List</button>
    <button onClick={ZoomClass}>Zoom Class</button>
    </div>
  );
};

export default CreateVehicle;