import React from "react";
import "../Styles/Services.css";

const Services = ({ items }) => {
  return (
    <section className="second ctr">
      <h2>
        Explore over 500,000 places to stay, play, and <br />
        eat with your dog.
      </h2>

      <section className="cards">
        {items.map((blog) => {
          console.log(blog);
          const { id, title, image, desc } = blog;
          return (
            <div className="card" key={id}>
              <div className="image-container">
                <img src={require("../images/" + image)} alt={title} />
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
