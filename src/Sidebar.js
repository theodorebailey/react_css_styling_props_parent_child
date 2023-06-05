import React from 'react';
import './style.css';

const Sidebar = (props) => {
    return (
        <div>
          <ul style={props.styles}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      );
}
 
export default Sidebar;