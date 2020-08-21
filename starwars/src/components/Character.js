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
  font-family: 'Audiowide', cursive;
  letter-spacing: 2px;
  margin: 1rem;
  font-weight: bold;
  font-size: 1rem;
  width:100%;
  transition: all .2s ease-in-out;
  &:hover {
        transform: scale(1.1);
    }
`;

const Detail = styled.div`
    /* width: 500%; */
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    width:100%;
    border-bottom: 1px solid black;
`;

const DetailsContainer = styled.div`
    width: 90%;
    padding-bottom: 1rem;
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
        <Card onClick={() => handleClick() }>
            <h2> 
                {charData.name} 
                {/* <span> {showDetails ? ' ' : ' '} </span>  */}
            </h2>
            <p>{showDetails ? '-' : '+'} </p>
            {showDetails && (
                <DetailsContainer>
                    <Detail>
                        <p>Birth Year: </p>
                        <p>{charData.birth_year}</p>
                    </Detail>
                    <Detail>
                        <p>Mass: </p>
                        <p>{charData.mass}</p>
                    </Detail>
                    <Detail>
                        <p>Height: </p>
                        <p>{charData.height}</p>
                    </Detail>
                    <Detail>
                        <p>Eye Color: </p>
                        <p>{charData.eye_color}</p>
                    </Detail>
                    <Detail>
                        <p>Hair Color: </p>
                        <p>{charData.hair_color}</p>
                    </Detail>
                    <Detail>
                        <p>Gender: </p>
                        <p>{charData.gender}</p>
                    </Detail>
                </DetailsContainer>
            )}
        </Card>
    );
}