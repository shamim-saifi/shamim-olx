import React, { useEffect, useState } from 'react'
import HomeCard from "./HomeCard";
import './Home.css'


import firstcard1 from '../../Img/firstcard1.webp'
import firstcard2 from '../../Img/firstcard2.webp'
import firstcard3 from '../../Img/firstcard3.webp'
import firstcard4 from '../../Img/firstcard4.webp'

import secondcard5 from '../../Img/secondcard5.webp'
import secondcard6 from '../../Img/secondcard6.webp'
import secondcard7 from '../../Img/secondcard7.webp'
import secondcard8 from '../../Img/secondcard8.webp'
import secondcard9 from '../../Img/secondcard9.webp'
import secondcard10 from '../../Img/secondcard10.webp'
import secondcard11 from '../../Img/secondcard11.webp'
import secondcard12 from '../../Img/secondcard12.webp'
import secondcard13 from '../../Img/secondcard13.webp'
import secondcard14 from '../../Img/secondcard14.webp'
import secondcard15 from '../../Img/secondcard15.webp'
import secondcard16 from '../../Img/secondcard16.webp'
import secondcard17 from '../../Img/secondcard17.webp'
import secondcard18 from '../../Img/secondcard18.webp'
import secondcard19 from '../../Img/secondcard19.webp'
import secondcard20 from '../../Img/secondcard20.webp'

import { Link } from 'react-router-dom';
import { BiArrowToTop } from 'react-icons/bi';
import { RiAdminFill } from 'react-icons/ri';



const Home = () => {

  const [show, setShow] = useState(false)
  const [admin, setAdmin] = useState(false)

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  const showBtnHandler = () => {
    let myHidden = 300;
    const winHeight = document.documentElement.scrollTop;
    if (winHeight > myHidden) {
      setShow(true)
      setAdmin(true)
    }
    else {
      setShow(false)
      setAdmin(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', showBtnHandler)
    return () => {
      window.removeEventListener('scroll', showBtnHandler);
    }
  }, [])


  return (
    <>
      {/* it will show only four card . (view more)=link for new page of card */}
      <div className='Home'>
        <div className='cardHeading'>
          <h1>Based on your last search</h1>
          <p><Link to='/'>View more</Link></p>
        </div>
        <div className='FirstCardContainer'>

          <HomeCard
            img={firstcard1}
            price='₹ 6,79,000'
            name='Skoda Rapid 1.6 MPI Active, 2015, Petrol'
            location='HRBR LAYOUT, BENGALURU'
            day='JUL 24'
          />

          <HomeCard
            img={firstcard2}
            price='₹ 8,999'
            name='IPhone 11 refurbished phone'
            location='VRINDAVAN, MATHURA'
            day='JUL 24'
          />

          <HomeCard
            img={firstcard3}
            price='₹ 29,999'
            name='Urgent sell new phone purchase'
            location='SAMUDRAPUR, MAHARASHTRA'
            day='TODAY'
          />

          <HomeCard
            img={firstcard4}
            price='₹ 18,000'
            name='IPhone 11 refurbished phone'
            location='SAMUDRAPUR, MAHARASHTRA'
            day='TODAY'
          />

        </div>
      </div>

      {
        show ?
          <button id='scrollBtn' onClick={moveToTop} ><BiArrowToTop /></button>
          : null
      }
      {
        admin ? <Link id='shamim' onClick={moveToTop} to={'https://shamim-saifi.vercel.app'} target='_blank'  ><RiAdminFill /></Link>
          : null
      }


      {/* second contaianer for card and it will show all card */} 
      <div className='secondWrapper'>

        <h1>Fresh recommendations</h1>


        <div className='secondCardContainer'>
          <HomeCard
            img={firstcard1}
            price='₹ 18,000'
            name='IPhone 11 refurbished phone'
            location='SAMUDRAPUR, MAHARASHTRA'
            day='TODAY'
          />
          <HomeCard
            img={secondcard5}
            price='₹ 2,75,000 '
            name='Maruti Suzuki Alto 800 2012-2016 CNG LXI, 2016, CNG & Hybrids'
            location='KALKAJI, DELHI'
            day='TODAY'
          />
          <HomeCard
            img={secondcard6}
            price='₹ 4,39,999'
            name='Hyundai Grand i10 Sportz 1.2 VTVT, 2016, Petrol'
            location='PREET VIHAR, DELHI'
            day='TODAY'
          />
          <HomeCard
            img={secondcard7}
            price='₹ 5,000'
            name='Series 8 ultra new model'
            location='SAMUDRAPUR, MAHARASHTRA'
            day='JUL 27'
          />
          <HomeCard
            img={secondcard8}
            price='₹ 12,500'
            name='iPhone. 13 128 GB'
            location='SAMUDRAPUR, MAHARASHTRA'
            day='TODAY'
          />
          <HomeCard
            img={secondcard9}
            price='₹ 1,001'
            name='COD AVAILABLE ONLy'
            location='SAMUDRAPUR, MAHARASHTRA'
            day='JUL 25'
          />
          <HomeCard
            img={secondcard10}
            price='₹ 19,999'
            name='iPhone. 13. Pro Max'
            location='SAMUDRAPUR, MAHARASHTRA'
            day='TODAY'
          />
          <HomeCard
            img={secondcard11}
            price='₹ 40,000'
            name='Boundary Wall Pre-Cast & Poles Manufacturing Unit for Rent'
            location='SAMUDRAPUR, MAHARASHTRA'
            day='JUL 10'
          />
          <HomeCard
            img={secondcard12}
            price='₹ 4,999'
            name='Low Price Best Home Cinema Wifi Smart HD LED Projector USB HDMI SD AUX'
            location='SAMUDRAPUR, MAHARASHTRA'
            day='YESTERDAY'
          />
          <HomeCard
            img={secondcard13}
            price='₹ 1,600'
            name='Antique brass sundail compass writch watch with leather strip'
            location='SAMUDRAPUR, MAHARASHTRA'
            day='TODAY'
          />
          <HomeCard
            img={secondcard14}
            price='₹ 5,999'
            name='3000 LUMENS YOUTUBE WIFI SMART FULL HD VIDEO PROJECTOR HDMI USB AV AUX'
            location='SAMUDRAPUR, MAHARASHTRA'
            day='YESTERDAY'
          />
          <HomeCard
            img={secondcard15}
            price='₹ 2,500'
            name='Series 8 combo available'
            location='SAMUDRAPUR, MAHARASHTRA'
            day='YESTERDAY'
          />
          <HomeCard
            img={secondcard16}
            price='₹ 3,500'
            name='RD5 projector 3D 4K wifi smart youtube live tv usb hdmi 145 inch size'
            location='SAMUDRAPUR, MAHARASHTRA'
            day='2 DAYS AGO'
          />
          <HomeCard
            img={secondcard17}
            price='₹ 2,500'
            name='Series & ultra new model available'
            location='SAMUDRAPUR, MAHARASHTRA'
            day='YESTERDAY'
          />
          <HomeCard
            img={secondcard18}
            price='₹ 1,999'
            name='We have new collection smart watches online order booking'
            location='SAMUDRAPUR, MAHARASHTRA'
            day='3 DAYS AGO'
          />
          <HomeCard
            img={secondcard19}
            price='₹ 4,000'
            name='Antique Solid Brass Majara Telephone Collectible Working Telephon'
            location='SAMUDRAPUR, MAHARASHTRA'
            day='3 DAYS AGO'
          />
          <HomeCard
            img={secondcard20}
            price='₹ 2,199'
            name='Google Speaker With Wireless charging'
            location='SAMUDRAPUR, MAHARASHTRA'
            day='3 DAYS AGO'
          />

        </div>
      </div>

      <div className='loadMore'>
        <button>Load More</button>
      </div>

    </>
  )
}

export default Home