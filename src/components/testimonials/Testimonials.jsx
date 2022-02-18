import React, {useEffect, useState} from 'react';
import './Testimonials.scss'
import Card from "./Card";
import {getTestimonials} from "../../helper/api";

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    (async () => {
      setTestimonials(await getTestimonials());
    })();
  }, []);

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {testimonials && testimonials.map((testimonial) => {
          return <Card {...testimonial} key={testimonial.id}/>
        })}
      </div>

    </div>
  );
};

export default Testimonials;