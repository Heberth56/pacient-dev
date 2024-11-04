import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/example");
  };
  return (
    <div>
      Home
      <button onClick={handleNavigate}>Navegar Home</button>
    </div>
  );
};

export default Home;
