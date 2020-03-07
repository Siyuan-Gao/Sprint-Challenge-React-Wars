import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWars from "./StarWars";
import { Container, Row } from "reactstrap";

function CardAPI() {
  // Add your function name here
  const [fighter, setFighter] = useState([]);
  useEffect(() => {
    axios
      .get(" https://swapi.co/api/people ") 
      .then(res => {
        console.log("https://swapi.co/api/people ", res.data); // This will print out a message
        setFighter(res.data.results);
      })
      .catch(error => {
        console.log("Whoops go back, thats an error!", error);
      });
  }, []);

  console.log(fighter);

  return (
    <Container>
      <Row>
        {fighter.map(e => {
          return <StarWars name={e.name} 
          height={e.height} 
          hair_color={e.hair_color} 
          birth_year={e.birth_year}
          key={e.name} />;
        })}
      </Row>
    </Container>
  ); //This is make sure to show something on the screen
}
export default CardAPI;
