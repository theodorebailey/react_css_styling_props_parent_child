import React from 'react'

const Year = () => {
    const name = "shaily";
    const currentDate = new Date();
    const year = currentDate.getFullYear();


    return ( 
        <>
        <div>
            <h1>My Favourite Foods</h1>
            <ul>
            <li>Bacon</li>
            <li>Noodles</li>
            <li>Jamon</li>
            </ul>
        </div>
        <div>
            <p>Created by {name}</p>
            <p>Copyright {year}</p>
        </div>
  </>
);
}
export default Year;