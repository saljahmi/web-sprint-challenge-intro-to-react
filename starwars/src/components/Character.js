// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
  background-color: rgb(59, 68, 77, 0.7);
  box-sizing: border-box;
  padding: 0.5rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Star Jedi', arial;
  margin: 1rem;
  font-weight: bold;
  font-size: 1rem;
`;

const Detail = styled.div`
    width: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
                <div className= "details-container">
                    <Detail>
                        <p>Birth Year: </p>
                        <p>{charData.birth_year}</p>
                    </Detail>
                    <Detail>
                        <p>Mass: </p>
                        <p>{charData.birth_year}</p>
                    </Detail>
                    <Detail>
                        <p>Height: </p>
                        <p>{charData.birth_year}</p>
                    </Detail>
                    <Detail>
                        <p>Eye Color: </p>
                        <p>{charData.birth_year}</p>
                    </Detail>
                    <Detail>
                        <p>Hair Color: </p>
                        <p>{charData.birth_year}</p>
                    </Detail>
                    <Detail>
                        <p>Gender: </p>
                        <p>{charData.birth_year}</p>
                    </Detail>
                </div>
            )}
        </Card>
    );
}