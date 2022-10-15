/* eslint-disable import/no-unresolved */
import Pet from "../Pet";

import React from "react";

const Results = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (
        <h1>No pets are found!</h1>
      ) : (
        pets.map(({ name, animal, breed, id, images, city, state }) => (
          <Pet
            name={name}
            animal={animal}
            breed={breed}
            key={id}
            images={images}
            location={(city, state)}
            id={id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
