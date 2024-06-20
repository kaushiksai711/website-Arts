import React from 'react';
import './styles.css';
function SellForm() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    
    // Retrieve form data
    const title = document.getElementById('title').value;
    const artist = document.getElementById('Artist').value;
    const description = document.getElementById('Description').value;
    const price = document.getElementById('Price').value;
    const type = document.querySelector('input[name="art_or_craft"]:checked').value;
    const file = document.getElementById('inputGroupFile04').files[0].name; // Assuming you want to handle file upload
    
    // Display confirmation box
    const confirmation = window.confirm('Are you sure you want to submit this data?');
    
    // If user confirms, proceed with submission
    if (confirmation) {
      // Perform your submission logic here
      // For example, you can use fetch API to send the form data to your server
      // Once submission is successful, you can display a success message to the user
      alert('Form submitted successfully!');
    } else {
      // If user cancels, do nothing or provide feedback
      alert('Form submission canceled.');
    }
  };

  return (
    <div id="data-to-sell" className="card" style={{ margin: 'auto', alignSelf: 'center', width: '1000px' }}>
      <form id="sell-form" onSubmit={handleSubmit}>
        <div className="card-body" style={{ backgroundColor: 'antiquewhite' }}>
          <label htmlFor="title">Title<br />
            <input type="text" id="title" required /></label><br />
          <label htmlFor="Artist">Artist<br />
            <input type="text" id="Artist" required /></label><br />
          <label htmlFor="Description">Description<br />
            <input type="text" required id="Description" /></label><br />
          <label htmlFor="Price">Price<br />
            <input type="text" required id="Price" /></label><br />
          <label htmlFor="art_or_craft">
            Art <input type="radio" id="art_or_craft_art" name="art_or_craft" />
            Craft <input type="radio" id="art_or_craft_craft" name="art_or_craft" />
          </label><br />
          <div className="input-group">
            <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
          </div>
          <label htmlFor="submit">
            <input type="submit" id="submit" />
          </label><br />
        </div>
      </form>
    </div>
  );
}

export default SellForm;
