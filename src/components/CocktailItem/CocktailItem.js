import React from "react";
import { Button, Card } from "react-bootstrap";

const CocktailItem = ({ cocktail, showCocktail }) => {
  return (
    <div className="d-inline-block mt-5">
        <Card style={{ width: "18rem" , marginRight : 20}} >
        <Card.Img variant="top" src={cocktail.imgSrc} alt={cocktail.name} />
        <Card.Body>
          <Card.Title>{cocktail.name}</Card.Title>
          <Card.Text>{cocktail.desc}</Card.Text>
          <Button variant="primary" onClick={() => showCocktail(cocktail.name)}>Click Me !</Button>
        </Card.Body>
      </Card>
    </div>
      
  
  );
};

export default CocktailItem;
