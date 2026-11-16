import React,{useRef} from 'react'
import "./About.css"
import { about_image,about_image2,building_1,building_2,building_3 , about_image3,about_image4,about_image5,proj12,store3,bg} from '../../assets'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-scroll'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const container = useRef(null)
  useGSAP(()=>{
    const timeline = gsap.timeline({
      delay:.5,
      scrollTrigger:{
        trigger:container.current,
        start:"20% bottom",
        end:"bottom top",
      }
    })
    timeline
    .from(
      ".company__photo",
      {x:-50,opacity:0}
    )
    .from(
      ".title",
      {y:-50,opacity:0}
    )
    .from(
      ".sub__title",
      {y:-50,opacity:0}
    )
    .from(
      ".box",
      {x:50,opacity:0,stagger:.5}
    )
    .from(
      ".description",
      {y:50,opacity:0}
    )
    .from(
      ".group",
      {y:50,opacity:0}
    )
    .from(
      ".buttons__container",
      {y:50,opacity:0}
    )
  },{scope:container})
  return (
    <section id='about' ref={container}>
      <div className="containertwo">
         <div className="column company__photo">
          <img src={bg} alt="Friomer" />
         </div>
         <div className="column">
         <h1 className="title">
  <span className="g-text">About Us</span>
</h1>
<h3 className="sub__title" style={{ color: "#0f8956" }}>
  Serving you with quality frozen fish & poultry since 2018.
</h3>

          <div className="company__media__container">
            <div className="box">
              <img src={about_image3} alt="" />
            </div>
            <div className="box">
              <img src={about_image4} alt="" />
            </div>
            <div className="box">
              <img src={proj12} alt="" />
            </div>
          </div>
          <p className="text__muted description" style={{textAlign:"justify"}}>
          At Friomer, we’ve been serving the Ghanaian market for over five years with top-quality frozen fish and poultry. Our products come from trusted partners around the world — from Mauritania, Morocco, and Oman to Argentina, Ecuador, Brazil, the U.S., and more.

We’re all about quality, consistency, and making sure our customers are happy. Thanks to strong relationships with our suppliers, we stay flexible and keep up with the changing needs of the market.

We’re proud of our reputation for reliability — delivering what we promise, when we promise it.

Looking Ahead

As we continue to grow, our vision is to expand both our supplier network and our market reach. We aim to build new partnerships across more countries, while strengthening our presence in Ghana and exploring opportunities in neighboring West African markets.

Our goal is to keep evolving, stay competitive, and bring even more value to our customers — always with the same commitment to quality and reliability.
          </p>
          <div className="group">

<div className="row">
  <div className="icon__container">
    <FaCheck />
  </div>
  <div className="details">
    <p className="text__muted">Products</p>
    <h3>Guaranteed Freshness</h3>
  </div>
</div>

<div className="row">
  <div className="icon__container">
    <FaCheck />
  </div>
  <div className="details">
    <p className="text__muted">Global</p>
    <h3>Sourcing</h3>
  </div>
</div>

<div className="row">
  <div className="icon__container">
    <FaCheck />
  </div>
  <div className="details">
    <p className="text__muted">Reliable</p>
    <h3>Delivery</h3>
  </div>
</div>

<div className="row">
  <div className="icon__container">
    <FaCheck />
  </div>
  <div className="details">
    <p className="text__muted">Dedicated</p>
    <h3>Customer Support</h3>
  </div>
</div>

</div>

          <div className="buttons__container">
            <Link to="project" smooth={true} className="btn">Explore</Link>
            <Link to="contact" smooth={true} className="btn btn__primary">Get a quote</Link>
          </div>
         </div>
      </div>
    </section>
  )
}

export default About
