import React from 'react';

const Featured = ({match}) => {
  let name = match.params.name;
  let topic = match.params.topic;

  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>Introducing <strong>{topic}</strong>, a teacher who loves teaching courses about <strong></strong>!</p>
    </div>
  );
}

export default Featured;
