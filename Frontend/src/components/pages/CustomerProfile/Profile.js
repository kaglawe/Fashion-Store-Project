import React from 'react';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={require('./images/kid.jpg').default} alt="Profile" />
      </div>
      <div className="profile-details">
        <h2>John Doe</h2>
        <p>Email: johndoe@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Saved Address: 123 Main St, City, Country</p>
      </div>
      <div className="order-history">
        <h3>Order History</h3>
        <ul>
          <li>Order #001 - Date: 2023-08-20</li>
          <li>Order #002 - Date: 2023-08-15</li>
          <li>Order #003 - Date: 2023-08-10</li>
          {/* Add more order items */}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
