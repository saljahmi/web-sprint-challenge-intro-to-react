// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.li`
  list-style: none;
  background-color: darkseagreen;
  box-sizing: border-box;
  padding: 0.5rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Character({ endpoint }) {
    const [charData, setCharData] = useState({});
    const [showDetails, setShowDetails] = useState(false);
  
    const handleClick = () => {
      setShowDetails(!showDetails);
    };
  
    useEffect(() => {
      axios
        .get(endpoint)
        .then((res) => {
          setCharData(res.data);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }, [endpoint]);

    return (
        <Card onClick={() => handleClick()}>
            <h2>{charData.name}</h2>
            {showDetails && (
                <div>
                    <p>Birth Year: {charData.birth_year}</p>
                    <p>Mass: {charData.mass}</p>
                    <p>Height: {charData.height}</p>
                    <p>Eye Color: {charData.eye_color}</p>
                    <p>Hair Color: {charData.hair_color}</p>
                    <p>Gender: {charData.gender}</p>
                </div>
            )}
        </Card>
    );
}