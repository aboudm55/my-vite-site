import React,{useRef} from 'react'
import "./Header.css"
import { hero_image,logo ,hero_image2} from '../../assets'
import { Link } from 'react-scroll'
import Achievement from '../Achievement'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Header = () => {
  const container = useRef(null);
  useGSAP(()=>{
    const timeline = gsap.timeline({delay:1,stagger:1});
    timeline
    .fromTo(
      ".image__container",
      {scale:.5,opacity:0,y:150},
      {scale:1,ease:'sine.in',opacity:1,y:0}
    )
    .from(
      ".title",
      {opacity:0,y:-30}
    )
    .from(
      ".description",
      {opacity:0,y:-30}
    )
    .from(
      ".buttons__container",
      {opacity:0,y:40}
    )
  },{scope:container})
  return (
    <header id='header' ref={container}>
      <div className="container full__height">
        <div className="row">
          <div className="column">
            <h1 className="title">
            Supplying Quality, {" "}
              <span className="g-text">Creating Reality</span>
            </h1>
            <p className="text__muted description"style={{ textAlign: 'justify' }}>
            Friomer is a Ghana-based company with over five years of experience specializing in the import and distribution of frozen fish and poultry. We source our products from a diverse range of countries, including Mauritania, Morocco, Oman, Argentina, Ecuador, Brazil, the United States, and others.

Our mission is to consistently satisfy our customers by providing high-quality products. We maintain strong, long-term partnerships with our suppliers, allowing us to adapt to various market needs and dynamics.

At Friomer, we take pride in delivering on our promises and meeting deadlines. Our reputation is built on reliability, and we remain committed to upholding that trust every step of the way
            </p>
            <div className="buttons__container">
              <Link to="services" smooth={true} className="btn">Our Services</Link>
              <Link to="contact" smooth={true} className="btn btn__primary">Learn More</Link>
            </div>
          </div>
          <div className="column">
            <div className="image__container">
              <img src={hero_image2} alt="" />
            </div>
          </div>
        </div>
        <Achievement/>
      </div>
    </header>
  )
}

export default Header
