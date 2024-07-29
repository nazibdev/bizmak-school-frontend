import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Vehicle from './Vehicle';
import { useHistory } from 'react-router-dom';

function VehiclesList() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useHistory();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:8080/vehicle/api/v1/vehicles');
        console.log(response.data);
        setVehicles(response.data);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
        setError(true);
      }
    };

    fetchVehicles();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error has occurred.</p>;
  }

  const handleCreateVehicle = async (vehicle) => {
    try {
      navigate.push('/createv');
      // <a href='/vehicle'></a>
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    
    axios.delete('http://localhost:8080/vehicle/api/v1/vehicles/'+ id)
      .then(res => {
        setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <div>
      <h2>Vehicle List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Model</th>
            <th>Year</th>
            <th>Buying Price</th>
            <th>Selling Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map(vehicle => (
            <tr key={vehicle.id}>
              {/* <td>{vehicle.id}</td> */}
              <td>{vehicle.model}</td>
              <td>{vehicle.year}</td>
              <td>{vehicle.type}</td>
              <td>{vehicle.price.buyingPrice || "price n/a"}</td>
              <td>{vehicle.price.sellingPrice || "N/A"}</td>
              <td>
                <button onClick={() => handleDelete(vehicle.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleCreateVehicle}>Create Vehicle</button> 
    </div>



//     <div>
//       {/* <h2>Vehicles</h2> */}
//       {vehicles.map(vehicle => (
//         <Vehicle key={vehicle.id} {...vehicle} />
        
        
//         // <input type="button">Delete</input>
//       ))}

// 
//     </div>
  );
};

export default VehiclesList;