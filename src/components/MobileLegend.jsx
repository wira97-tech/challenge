import React, { useState, useEffect } from "react";

const MobileLegendsHeroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.dazelpro.com/mobile-legends/hero"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data from API:", data);

        // Assuming data is an object with hero properties
        setHeroes(Object.values(data));

        setLoading(false);
      } catch (error) {
        console.error("Error fetching or processing data:", error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("Heroes:", heroes);

  return (
    <div>
      <h1>Mobile Legends Heroes</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {heroes.map((hero) => (
            <li key={hero.hero_id}>
              <img src={hero.hero_avatar} alt={`${hero.hero_name} Avatar`} />
              <strong>{hero.hero_name}</strong> - {hero.hero_role}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileLegendsHeroes;
