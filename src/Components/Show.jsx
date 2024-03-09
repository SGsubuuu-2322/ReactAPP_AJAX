// import React from 'react'

import axios from "../utils/Axios";
import { useEffect, useState } from "react";

const Show = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("/products")
      .then((products) => {
        console.log(products);
        setData(products.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <button
        onClick={getData}
        className="px-3 py-2 text-xl font-semibold bg-red-500 rounded-md"
      >
        Get Data
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

export default Show;
