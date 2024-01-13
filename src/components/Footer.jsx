import React from 'react'
import Img from '../assets/footerimg.jpg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>

<footer className="footer p-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white ">

    <div>

    </div>
<form class="w-full md:w-1/2 lg:w-1/3 px-4 py-2">
    <header className="footer-title">
🌟 Hammock Haven Newsletter 🌟</header> 
    <p className="text-sm text-center md:text-left">
    
Join our Hammock Haven newsletter for exclusive updates, 
hammock hacks & special offers! Elevate your relaxation game with us. 
Subscribe below to start your hammock adventure!
    </p>
   
    <fieldset className="form-control w-80 mt-10"> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item text-blue-700" /> 

        <button class="btn btn-primary join-item bg-gradient-to-r from-blue-500 to-blue-500 hover:to-green-500 transition duration-300 ease-in-out">Hang with us</button>
      </div>
    </fieldset>
  </form>


  <nav className=''>
    <header className="footer-title">SERVICES</header> 
    <a className="link link-hover">Hammock Sales</a>
    <a className="link link-hover">Customization</a>
    <a className="link link-hover">Installation Services</a>
    <a className="link link-hover">Repair amd Maintenance</a>
    <a className="link link-hover">Warranty amd Support</a>
  </nav> 
  <nav>
    <header className="footer-title">HAMMOCK CONCIERGE</header> 
    <a className="link link-hover">FAQs</a>
    <a className="link link-hover">Compare Hammocks</a>
    <a className="link link-hover">Customize your Hammock</a>
    <a className="link link-hover">Shipping + Returns</a>
    <a className="link link-hover">Ask for help</a>
  </nav> 
  <nav>
    <header className="footer-title">GET TO KNOW US</header> 
    <a className="link link-hover">Our Story</a>
    <a className="link link-hover">Gallery</a>
    <a className="link link-hover">Impact + Sustainability</a>
    <a className="link link-hover">Join Us</a>
    <a className="link link-hover">Press Inquires</a>
    <a className="link link-hover">Wholesale</a>

    <nav className="flex gap-5  ">
    <a><svg xmlns="http://www.w3.org/2000/svg" width="44" height="24" viewBox="0 0 24 24" className="fill-current bg-white rounded-full text-gray-400"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
    </a>
    <a><svg xmlns="http://www.w3.org/2000/svg" width="44" height="24" viewBox="0 0 24 24" className="fill-current bg-white rounded-full text-gray-400"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
    <a><svg xmlns="http://www.w3.org/2000/svg" width="44" height="24" viewBox="0 0 24 24" className="fill-current bg-white rounded-full text-gray-400"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
  </nav>
  </nav> 


</footer>

<footer className="footer flex justify-between text-white items-center p-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">

    <img src= {Img} alt="" className=' h-60' />

    <div className=" flex justify-between p-8"> 
  

   <Link to="/privacy-policy"> Privacy Policy</Link>
   
   <Link to="/terms-conditions"> Terms & Conditions</Link>

    </div>
  <aside className="items-center grid-flow-col
">
    <p>Copyright © 2023 HangEase Haven.Co, LLC - All right reserved</p>
  </aside> 

</footer>

    </>
  )
}
