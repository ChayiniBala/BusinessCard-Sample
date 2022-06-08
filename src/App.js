import React from 'react'
import Info from './Contents/Info'
import About from './Contents/About'
import Interests from './Contents/Interests'
import Footer from './Contents/Footer'

export default function FirstApp(){
    return(
        <div className='container'>
        <Info/>
        <About/>
        <Interests/>
        <Footer/>
        </div>
    );
}


