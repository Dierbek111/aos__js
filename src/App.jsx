import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Имитация загрузки 3 секунды

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && <Hero />}
    </>
  );
};

export default App;