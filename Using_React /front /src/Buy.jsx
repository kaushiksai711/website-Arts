import React, { useEffect } from 'react';
import './styles.css';
function Products() {
  useEffect(() => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'));
        const item = { name, price };
        cartItems.push(item);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert('The Item has been added to your shopping cart!')
      });
    });
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <>
      <div className="container" id="A">
        <h2>Arts</h2>
        <div className="row">
          <div className="col-lg-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuegml2H6Ac-L1198jEVP0SeY_MhAmCCdqBw&usqp=CAU" width="720" className="img-fluid" alt="Art Image" />
          </div>
          <div className="col-lg-8">
            <table className='table'>
              <tbody>
                <tr>
                  <th>Title</th>
                  <td>Snowy Leopard</td>
                </tr>
                <tr>
                  <th>Artist</th>
                  <td>Earth</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>A lonely snow leopard in a vast world.</td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>$1000</td>
                </tr>
              </tbody>
            </table>
            <button className="add-to-cart" data-name="Art Piece snow lep" data-price="1000">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="container" id="A">
        <h2>Crafts</h2>
        <div className="row">
          <div className="col-lg-4">
            <img src="https://w0.peakpx.com/wallpaper/330/433/HD-wallpaper-beautiful-nature-flowers-beauty-art-nature-paintings.jpg" width="720" className="img-fluid" alt="Art Image" />
          </div>
          <div className="col-lg-8">
            <table className="table">
              <tbody>
                <tr>
                  <th>Title</th>
                  <td>Flower Bag</td>
                </tr>
                <tr>
                  <th>Artist</th>
                  <td>Earth</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>A set of flowers made using ribbons.</td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>$1000</td>
                </tr>
              </tbody>
            </table>
            <button className="add-to-cart" data-name="Art Piece 2" data-price="1000">Add to Cart</button>
          </div>
        </div>
      </div>
      <a href="cart.html">View Cart</a>
    </>
  );
}

export default Products;
