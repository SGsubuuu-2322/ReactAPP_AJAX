// import React from 'react'

import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    console.log("Component created successfully...");

    return () => {
      console.log("Component deleted successfully");
    };
  });
  return <div>Services</div>;
};

export default Services;
