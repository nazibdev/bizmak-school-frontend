import React from "react";

const Vehicle = ({ id, type, model, year, price }) => {
  return (
    <div>
      <h2>Vehicles List</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Model</th>
            <th>Year</th>
            <th>Buy Price</th>
            <th>Sell Price</th>
          </tr>
        </thead>
        <tbody>
          <tr key={id}>
            <td>{type}</td>
            <td>{model}</td>
            <td>{year}</td>
            <td>{price.buyingPrice || "price n/a"}</td>
            <td>{price.sellingPrice || "N/A"}</td>
          </tr>
          {/* <input type='button' >Delete</input> */}
        </tbody>
      </table>

      {/* <h3>Vehicle Information</h3>
      <p>ID</p>
      <p>Type: {type || "N/A"}</p>
      <p>Model: {model}</p>
      <p>Year: {year}</p>
      <h4>Price Information</h4>
      <p>Price ID: {price.price_id || "N/A"}</p>
      <p>Buying Price: {price.buyingPrice || "N/A"}</p>
      <p>Selling Price: {price.sellingPrice || "N/A"}</p> */}
    </div>
  );
};

export default Vehicle;
