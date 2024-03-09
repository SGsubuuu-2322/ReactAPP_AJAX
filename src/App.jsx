// import React from 'react'
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((products) => {
        console.log(products);
        setData(products.data);
      })
      .catch((err) => console.log(err));
  };
  const addData = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .post(api, {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
      .then((product) => console.log(product))
      .catch((err) => console.log(err));
  };
  return (
    <div className="text-3xl font-semibold mt-5 ml-5">
      <button
        onClick={getData}
        className="px-3 py-2 text-xl font-semibold bg-red-500 rounded-md"
      >
        Get Data
      </button>
      <br />
      <br />
      <button
        onClick={addData}
        className="px-3 py-2 text-xl font-semibold bg-red-500 rounded-md"
      >
        Add Data
      </button>
      <hr className="my-10" />
      <ul>
        {data.length > 0 ? (
          data.map((item, index) => (
            <li key={index} className="p-4 bg-red-200 rounded-md mb-3 w-1/4">
              Product Name:{item.title}
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </div>
  );
};

export default App;
