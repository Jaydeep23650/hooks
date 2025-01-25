import React from 'react'; 
import './App.css'
import Left from './Components/Left';
import Right from './Components/RIght';

import './style.css'
import image1 from './pic/download1.jpg'
import image2 from './pic/download2.jpg'
import image3 from './pic/download3.jpeg'
import image4 from './pic/download4.jpg'
import image5 from './pic/download5.jpg'
import image6 from './pic/download6.jpg'
import { useState } from 'react'




// const  arr=[]

function App() {
   const arr=[image1,image2,image3,image4,image5,image6];
  const [index,setIndex]=useState(0);
  const arr2=['red','blue','green','yellow','pink','orange'];
  function change(){
   
    setIndex((prev)=>(prev+1)%arr.length);

    
     
    }

  return (
    <>
     <div className='container'>
        <div className='box' style={{ backgroundImage: `url(${arr[index]})`, backgroundSize: 'cover', backgroundPosition: 'center',objectFit:'cover', height:'400px', width: '400px' }}>
          <Left></Left>
        </div>
        <div className='box' style={{ backgroundColor: arr2[index], height:'400px', width: '400px' }}>
          <Right></Right>
        </div>
        <div >
          <button className='buttons' style={{ backgroundColor: 'pink' }} onClick={change}>Click Me</button>
        </div>
     </div>
     
    </>
  )
}

export default App
