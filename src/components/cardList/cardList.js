import React from 'react';
import Card from './card/card';

const CardList = ({ robots }) => {
  const cardsArray = robots.map((robot, index) => {
    return (
      <Card key={index} id={robot.id} name={robot.name} email={robot.email} />
    );
  });

  return <div>{cardsArray}</div>;
};

export default CardList;
