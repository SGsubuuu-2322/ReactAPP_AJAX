// import React from 'react'
import axios from "axios";

const App = () => {
  const getData = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((products) => console.log(products))
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
    </div>
  );
};

export default App;
