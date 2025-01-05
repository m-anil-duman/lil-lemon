// src/components/TextImageBox/TextImageBox.js
import React from 'react';
import Image from 'next/image';
import './TextImageBox.css';

const TextImageBox = ({ text, image, reverse }) => {
  return (
    <article className={`text-image-box ${reverse ? 'reverse' : ''}`}>
      <div className="text-content">
        <p>{text}</p>
      </div>
      <div className="image-content">
        <Image
          src={image} // Path to image in the public folder
          alt="Text related visual"
          width={400} // Adjust dimensions as needed
          height={300}
        />
      </div>
    </article>
  );
};

export default TextImageBox;
