// import React from 'react'

import { useEffect, useState } from "react";

const Services = () => {
  const [first, setFirst] = useState("This is normal data...");
  const [second, setSecond] = useState("This is important data...");
  useEffect(() => {
    console.log("Component created successfully...");

    return () => {
      console.log("Component deleted successfully");
    };
  }, [second]);
  return (
    <div>
      <h1>{first}</h1>
      <button
        onClick={() => setFirst("Normal data has been changed...")}
        className="px-3 py-2 text-xl font-semibold bg-red-500 rounded-md mb-4"
      >
        Change Normal Data
      </button>

      <h1>{second}</h1>
      <button
        onClick={() => setSecond("Important data has been changed...")}
        className="px-3 py-2 text-xl font-semibold bg-red-500 rounded-md"
      >
        Change Normal Data
      </button>
    </div>
  );
};

export default Services;
