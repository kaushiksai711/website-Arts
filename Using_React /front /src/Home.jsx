import React from 'react';
import painter from './painter.jpeg'
import tree from './treee.jpg'
import tree2 from './tree2.jpg'
import craft from './crafts.jpg'
import './styles.css';
function Home() {
  return (
    <main>
      <div className="container">
        {/* Carousel */}
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://img.freepik.com/free-photo/abstract-nature-illustration-tree-backdrop-watercolor-painted-image-generated-by-ai_188544-15564.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={tree} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={tree2} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <section id="about">
        <h2>About Us</h2>
        <img src={painter} alt="Product 0" className="centered-image" />
        <p>Welcome to our world of creativity! We are passionate about arts and crafts and love sharing our ideas and creations with you.</p>
      </section>
      <section id="featured-products">
        <h2>Featured Products</h2>
        <div className="products-container">
          <div className="product">
            <img src="https://i.pinimg.com/736x/ed/33/fc/ed33fcd394618cf99365427439dc993c.jpg" alt="Product 1" className="centered-image" />
            <div className="product-info">
              <h3>Handmade Jewelry</h3>
              <p>Explore our beautiful collection of handmade jewelry crafted with love and care by skilled artisans.</p>
            </div>
          </div>
          <div className="product">
            <img src="https://5.imimg.com/data5/WR/TB/QD/SELLER-84221941/nature-painting.jpg" alt="Product 2" className="centered-image" />
            <div className="product-info">
              <h3>Paintings</h3>
              <p>Discover stunning paintings that will add a touch of color and elegance to your living space.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Add more sections as needed */}
      <section id="craft-ideas">
        <h2>Craft Ideas</h2>
        <div className="craft">
          <img className="centered-image" src={craft} height='300px' alt="Craft Idea 2" />
          <h3>Handmade Greeting Cards</h3>
          <p>Get inspired to make personalized greeting cards for your loved ones with our creative ideas.</p>
        </div>
        {/* Add more craft ideas as needed */}
      </section>
    <footer>
      <p>&copy; 2024 Arts and Crafts World. All rights reserved.</p>
    </footer>
    </main>
  );
}

export default Home;
