import React from 'react'
import video from '../assets/famvid.mp4'
import video1 from '../assets/storyvid.mp4'
import toon from '../assets/toonlady.png'
import dura from '../assets/durapic.png'
import hang from '../assets/hanger.png'

export default function Store() {
  return (
   <>
   <div className="hero min-h-screen" 

   >
    <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
  <source src= {video} type="video/mp4" />
</video>

  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">

<div className="card w-96 glass ">
  <div className="card-body">
    <h2 className="card-title mb-5">Embrace Tranquility Every Day.
Discover Your Perfect Hammock.</h2>
    {/* <p>Discover tranquility amidst chaos. Explore our curated collection at [Your Hammock Store] to find the perfect hammock that complements your relaxation style. Whether it's basking in sunlight or stargazing, our premium hammocks promise unparalleled comfort and an escape from the ordinary.

Unwind in luxury whenever you wish. Choose from our selection and make every day a cherished escape into serenity.

Redefined relaxation awaits.</p> */}
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Find your hammock today</button>
    </div>
  </div>
</div>

  </div>
</div>

<div className='category bg-orange-100 p-7  '>
    <div className=' '>
    <h4 className=' font-extralight text-blue-500'>YOU FINALLY FOUND IT</h4>

    <h1 className=' font-extrabold  text-blue-950'>The relaxation you've been yarning for...</h1>

    </div>

    <div className='flex justify-between mt-5'>

        <div> 
            <img src= {toon} alt="" /> 
            <h6>UNBELIEVABLE COMFORT</h6>
            <p>Picture yourself being gently cradled by a hundred cashmere teddy bears. 
                This hammock is even better.</p>
             </div>
        <div>  
            <img src= {dura} alt="" className=' '/> 
            <h6>UNBEATABLE PERFORMANCE</h6>
            <p>Superstrong for sharing. Weather safe for outdoor living. 
                No-flip design for ultimate peace of mind.</p>
            </div>
        <div>  
            <img src= {hang} alt="" className=' h-48 w-48'/> 
            <h6>UNPARALLELED CRAFT</h6>
            <p>Comfort this cozy doesn’t come from a factory!
                 Each 100% handwoven hammock is signed by the woman who made it.</p>
            </div>


    </div>
 

</div>

<div className=' bg-slate-50 p-10'>
    <h1> You're going to feel incredible </h1>

    <video autoPlay muted loop style={{ width: '70%', height: '100%', objectFit: 'cover' }}>
  <source src= {video1} type="video/mp4" />
</video>

</div>



   
   </>
  )
}
