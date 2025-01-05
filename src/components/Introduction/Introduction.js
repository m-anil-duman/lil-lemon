// src/components/Introduction/Introduction.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component
import './Introduction.css';

const Introduction = ({
  title,
  subtitle,
  description,
  image,
  reverse = false,
  type_for_description = 'p',
  button_text,
  button_path,
}) => {
  const renderDescription = () => {
    switch (type_for_description) {
      case 'p':
        return <p className="text-white">{description}</p>;
      case 'h3':
        return <h3 className="text-white">{description}</h3>;
      default:
        return null;
    }
  };

  const renderButton = () =>
    button_path && button_text && (
      <div>
        <Link href={button_path}>
          <button className="page_top_button">{button_text}</button>
        </Link>
      </div>
    );

  return (
    <section
      className={`section mb-15 page-top-section-left ${reverse ? '' : ''}`}
    >
      <div className="container page-top-container">
        {!reverse && (
          <Image
            className={`page-main-image top-section-page-image-margin ${
              !reverse ? 'top-section-page-image-no-margin' : ''
            }`}
            src={image} // Path from the public folder
            alt="restaurant introduction"
            width={600} // Replace with appropriate dimensions
            height={400} // Replace with appropriate dimensions
            priority // Ensures this image is loaded quickly
          />
        )}
        <div className="page_top_box">
          <h1 className="text-yellow">{title}</h1>
          {subtitle && <h2 className="text-white">{subtitle}</h2>}
          {renderDescription()}
          {renderButton()}
        </div>
        {reverse && (
          <Image
            className={`page-main-image top-section-page-image-margin ${
              !reverse ? 'top-section-page-image-no-margin' : ''
            }`}
            src={image} // Path from the public folder
            alt="restaurant introduction"
            width={600} // Replace with appropriate dimensions
            height={400} // Replace with appropriate dimensions
            priority
          />
        )}
      </div>
    </section>
  );
};

export default Introduction;
