import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className='home-container'>
          <div className='laptop-deatils'>
             <h2 className='frist'>Your next Laptop</h2>
             <h2 className='second'>Your best  Laptop</h2>
             <p>MacBook  is completely transformed by the power of Apple-designed M1 chip.<br/> Up to 3.5x faster CPU, 5x faster graphics, and 18 hours of battery life.</p>
              
              <button className='button'>Live demo</button>
          </div>
          <div className='laptop-img'>
          <img src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80" alt="" />
          </div>
        </div>
    );
};

export default Home;