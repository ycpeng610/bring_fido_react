import React from "react";
import "../Styles/Services.css";

const Services = ({ items }) => {
  return (
    <section class="second ctr">
      <h2>
        Explore over 500,000 places to stay, play, and <br />
        eat with your dog.
      </h2>

      <section class="cards">
        {items.map((blog) => {
          console.log(blog);
          const { id, title, img, desc } = blog;
          return (
            <div class="card">
              <div class="image-container">
                <img src={img} alt={title} />
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </section>
      <button type="submit">Browser Pet-Friendly Hotels</button>
    </section>
  );
};

export default Services;
