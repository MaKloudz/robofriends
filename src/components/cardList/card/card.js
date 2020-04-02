import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className='bg-light-green dib br3 ma3 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200x200`} alt='robots' />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
