import React, { useState } from 'react'
import foot from '../../Img/foot.webp'
import googel1 from '../../Img/gp.webp'
import googel2 from '../../Img/app.webp'
import './Footer.css'
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlinePlayCircle, } from 'react-icons/ai'

const Footer = () => {

  const [key, setKey] = useState()
  const [show1, setShow1] = useState(true)
  const [show2, setShow2] = useState(true)
  const [show3, setShow3] = useState(true)
  const [show4, setShow4] = useState(true)

  const showHandler = (i) => {
    setKey(i)
    setShow1(false)
  }
  const domHandler4 = () => {
    var x = document.getElementById('showList4')
    if (x.style.display === 'none') {
      x.style.display = 'flex'
    } else {
      x.style.display = 'none'
    }
  }
  const domHandler3 = () => {
    var x = document.getElementById('showList3')
    if (x.style.display === 'none') {
      x.style.display = 'flex'
    } else {
      x.style.display = 'none'
    }
  }
  const domHandler2 = () => {
    var x = document.getElementById('showList2')
    if (x.style.display === 'none') {
      x.style.display = 'flex'
    } else {
      x.style.display = 'none'
    }
  }
  const domHandler1 = () => {
    var x = document.getElementById('showList1')
    if (x.style.display === 'none') {
      x.style.display = 'flex'
    } else {
      x.style.display = 'none'
    }
  }
  return (
    <>
      <div className='FirstFooter'>
        <div>
          <img src={foot} alt="foot" />
        </div>
        <div id='FirstFooterHeading'>
          <h1>TRY THE OLX APP</h1>
          <p>Buy, sell and find just about anything using the app on your mobile.</p>
        </div>
        <div>
          <p>GET YOUR APP TODAY</p>
          <div id='google'>
            <img src={googel1} alt="google" />
            <img src={googel2} alt="google" />
          </div>
        </div>
      </div>

      {/* second footer of links and manu */}
      <div className='secondFooter'>
        <div className='manu'>
          <p onClick={domHandler1} >POPULAR LOCATIONS</p>

          <div className='manuList' id='showList1'>
            <a href="#">Kolkata</a>
            <a href="#">Mumbai</a>
            <a href="#">Chennai</a>
            <a href="#">Pune</a>
          </div>

        </div>

        <div className='manu'>
          <p onClick={domHandler2}  >TRENDING LOCATIONS</p>

          <div className='manuList' id='showList2'>
            <a href="#">Bhubaneshwar</a>
            <a href="#">Hyderabad</a>
            <a href="#">Chandigarh</a>
            <a href="#">Nashik</a>
          </div>


        </div>
        <div className='manu'>
          <p onClick={domHandler3}>ABOUT US</p>

          <div className='manuList' id='showList3'>
            <a href="#">About OLX Group</a>
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
            <a href="#">OLXPeople</a>
            <a href="#">Waah Jobs</a>
          </div>


        </div>
        <div className='manu'>
          <p onClick={domHandler4} >OLX</p>
          <div className='manuList' id='showList4'>
            <a href="#">Help</a>
            <a href="#">Sitemap</a>
            <a href="#">Legal & Privacy information</a>
            <a href="#">Blog</a>
            <a href="#">OLX Autos Sell Car</a>
            <a href="#">Vulnerability Disclosure Program</a>
          </div>

        </div>
        <div className='social'>
          <p>FOLLOW US</p>
          <div id='icons'>
            <a href="#"><AiOutlineInstagram /></a>
            <a href="#"><AiFillFacebook /></a>
            <a href="#"><AiOutlineTwitter /></a>
            <a href="#"><AiOutlinePlayCircle /></a>
          </div>
          <div id='google2' >
            <img src={googel1} alt="googel1" />
            <img src={googel2} alt="googel2" />
          </div>
        </div>
      </div>

      {/* Third footer */}
      {/* <div className='thirdFooter'>
        <div>
          <p>Other countries</p>
          <p>Indonesia - Pakistan - South Africa</p>
        </div>
        <div>
          <p>All rights reserved © 2006-2023 OLX</p>
        </div>
      </div> */}
    </>
  )
}

export default Footer