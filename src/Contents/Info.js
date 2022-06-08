import React from 'react'


export default function Info(){
    return(
    <div className = 'info-div'>
        <div className="img-container">
       <img className='profile-img' src='https://i.pinimg.com/originals/51/57/46/515746322e21be8c90454face0e328b6.png' alt='profile-pic'/></div>
    <div className="details-container">
       <h1>Chayini Bala</h1>
       <h3>Frontend Developer</h3>
       <p>from Sri Lanka</p>
       <button className='info-btn'>Portfolio</button>
       <button className='info-btn'>Blogs</button>
       </div>
    </div>
);
}


