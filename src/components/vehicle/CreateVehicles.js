import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CreateVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useHistory();

  const fetchVehicles = async () => {
    try {
      const response = await axios.get('http://localhost:8080/vehicle/api/v1/vehicles');
      setVehicles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateVehicle = async (vehicle) => {
    try {
      const response = await axios.post('http://localhost:8080/vehicle/api/v1/vehicles', vehicle);
      setVehicles([...vehicles, response.data]);
      navigate.push('/createv');
      // <a href='/vehicle'></a>
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <div>
      <button onClick={handleCreateVehicle}>Create Vehicle</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Model</th>
            <th>Year</th>
            <th>Buying Price</th>
            <th>Selling Price</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map(vehicle => (
            <tr key={vehicle.id}>
              <td>{vehicle.id}</td>
              <td>{vehicle.type}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.year}</td>
              <td>{vehicle.price.buyingPrice}</td>
              <td>{vehicle.price.sellingPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreateVehicles;
