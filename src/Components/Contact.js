import React from 'react';
import './Contact.css'; // Optional: for adding styles

const stores = [
  {
    id: 1,
    name: "Store A",
    address: "123 Main St, City A, Country A",
    phone: "+123-456-7890",
    email: "storea@example.com",
    hours: "Mon-Fri: 9 AM - 6 PM",
  },
  {
    id: 2,
    name: "Store B",
    address: "456 Side St, City B, Country B",
    phone: "+321-654-0987",
    email: "storeb@example.com",
    hours: "Mon-Fri: 10 AM - 5 PM",
  },
  {
    id: 3,
    name: "Store C",
    address: "789 Market St, City C, Country C",
    phone: "+987-654-3210",
    email: "storec@example.com",
    hours: "Mon-Sat: 8 AM - 8 PM",
  },
];

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to contact one of our stores below or use the form at the bottom of the page.</p>
      
      <div className="stores-list">
        {stores.map((store) => (
          <div key={store.id} className="store">
            <h2>{store.name}</h2>
            <p><strong>Address:</strong> {store.address}</p>
            <p><strong>Phone:</strong> {store.phone}</p>
            <p><strong>Email:</strong> <a href={`mailto:${store.email}`}>{store.email}</a></p>
            <p><strong>Operating Hours:</strong> {store.hours}</p>
          </div>
        ))}
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
