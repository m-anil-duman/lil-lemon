"use client";

import React from "react";
import Introduction from "@/components/Introduction/Introduction";
import TextImageBox from "@/components/TextImageBox/TextImageBox";
import image from "../../../public/assets/restaurantchefB.jpg";
import image2 from "../../../public/assets/restaurant.jpg";
import image3 from "../../../public/assets/Mario and Adrian A.jpg";
import "./about.css";

const About = () => {
  const aboutArticlePara = {
    FirstPara: `Little Lemon, we believe that the heart of every great meal lies in 
    the harmony of flavors, the warmth of tradition, and the joy of sharing. 
    Our culinary journey began with a deep appreciation for the Mediterranean's 
    rich tapestry of tastes and cultures. From the sun-drenched coasts of Greece 
    to the bustling spice markets of Turkey, we've embarked on a voyage to bring you a 
    dining experience that is not just about food but a celebration of life, love, 
    and connection. Our kitchen is a melting pot of family recipes passed down through 
    generations, combined with a modern twist that caters to the diverse and evolving 
    palates of our cherished guests. Our commitment to using fresh, locally-sourced 
    ingredients and time-honored cooking techniques ensures that each dish that 
    leaves our kitchen is a piece of art, a reflection of the Mediterranean's spirit. 
    Whether you're joining us for a cozy dinner, a celebration, or a casual gathering 
    with friends, we invite you to embark on a culinary adventure with us and savor 
    the flavors of our heritage, for each meal at Little Lemon tells a story - 
    a story of tradition, passion, and the timeless beauty of the Mediterranean.`,
    SecondPara: `In the heart of Chicago, Illinois, where the city's rich tapestry of cultures 
    converge, there stands a family-owned restaurant that has been a labor of love 
    for two brothers, Mario and Adrian. These two Italian siblings embarked on a 
    culinary journey, fueled by their passion for tradition and the desire to share the 
    vibrant flavors of the Mediterranean. Born into a family where food was a way of life, 
    their roots run deep in Italian heritage, but their curiosity led them to explore 
    the diverse tastes of Greece and Turkey. The result is a restaurant that serves up a 
    delectable fusion of Italian, Greek, and Turkish cuisine, where each dish is a 
    celebration of their shared experiences and a testament to their commitment to 
    quality and authenticity. At the heart of the bustling city, this family-owned gem is 
    a testament to the power of tradition, family, and the universal language of exceptional food. 
    Welcome to our culinary haven, where the flavors of the Mediterranean come to life 
    in the heart of Chicago.`,
  };

  return (
    <section className="mainSection">
      <Introduction
        title="Welcome to Our Restaurant"
        subtitle="Best place to enjoy delicious meals."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna."
        image={image}
        type_for_description="h3"
      />
      <div className="container">
        <section className="specials-section">
          <TextImageBox text={aboutArticlePara.FirstPara} image={image3} reverse={false} />
          <TextImageBox text={aboutArticlePara.SecondPara} image={image2} reverse={true} />
        </section>
        <article className="text-center mb-20">
          <h1>Come Visit Us!</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47508.64556214609!2d-87.6881836!3d41.9081167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d3f4f1910a1%3A0xbf748b410ff0084f!2sLemon!5e0!3m2!1sen!2sin!4v1698260125102!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          />
        </article>
      </div>
    </section>
  );
};

export default About;
