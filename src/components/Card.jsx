
import React from 'react';

const Card = ({ image, header, subheader, link }) => {
  return (
    <div className="max-w-xs mx-auto text-center">
      <img src={image} alt="Card" className="w-full h-48 object-cover rounded-lg" />
      <h3 className="text-blue-500 mt-4 text-lg">{header}</h3>
      <p className="text-gray-800 mt-2">{subheader}</p>
    </div>
  );
};

export default Card;
