import React, { useRef } from 'react';
import './Store.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {
  barracuda, bonito, dentex, hake, horseMackerel, lichia, mackerel, pargo,
  redFish, sardine, sardinellaAurita, sardinellaEba, seaBream, tunaJpeg, yellowTail,store1,store2,store3,store4,store5,store6,store7,store8
} from '../../assets';

gsap.registerPlugin(ScrollTrigger);

// const fishImages = [
//   barracuda, bonito, dentex, hake, horseMackerel,
//   lichia, mackerel, pargo, redFish, sardine,
//   sardinellaAurita, sardinellaEba, seaBream, tunaJpeg, yellowTail
// ];
const fishImages = [
store1,store2,store3,store4,store5,store6,store7,store8
];

const Store = () => {
  const container = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
        end: "bottom top",
      },
    });

    timeline
      .from(".title", { y: -50, opacity: 0 })
      .from(".sub__title", { y: -50, opacity: 0 })
      .fromTo(".gallery__image", { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.3 });
  }, { scope: container });

  return (
    <section id="store" ref={container}>
      <div className="store__wrapper">
        <h1 className="title">Our <span className="g-text">Store</span></h1>
        <h3 className="sub__title" style={{ color: "#0f8956" }}>
          Freshly preserved fish, delivered with quality
        </h3>

        <div className="gallery__grid">
          {fishImages.map((img, index) => (
            <img src={img} alt={`fish-${index}`} className="gallery__image" key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Store;
