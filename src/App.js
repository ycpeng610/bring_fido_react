import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import { blogs, services } from "./data";

function App() {
  // console.log(blogs);
  const [blogItems, setBlogItems] = useState(blogs);
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Services items={services} />
        <Blog items={blogItems} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
