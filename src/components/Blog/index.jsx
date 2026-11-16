// import React,{useRef} from 'react'
// import "./Blog.css"
// import { blogs } from '../../data'
// import {BsCalendar2Date} from 'react-icons/bs'
// import { MdOutlineThumbUpOffAlt } from 'react-icons/md'
// import { FaRegCommentDots } from 'react-icons/fa'
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'
// import ScrollTrigger from "gsap/dist/ScrollTrigger"
// gsap.registerPlugin(ScrollTrigger)

// const Blog = () => {
//   const container = useRef(null)
//   useGSAP(()=>{
//     const timeline = gsap.timeline({
//       delay:.5,
//       scrollTrigger:{
//         trigger:container.current,
//         start:"20% bottom",
//         end:"bottom top",
//       }
//     })
//     timeline
//     .from(
//       ".title",
//       {y:-50,opacity:0}
//     )
//     .from(
//       ".sub__title",
//       {y:-50,opacity:0}
//     )
//     .fromTo(
//       ".blog__card",
//       {y:100,opacity:0},
//       {opacity:1,stagger:.5,y:0}
//     )
    
//   },{scope:container})

//   return (
//     <section id='blog' ref={container}>
//       <div className="container">
//         <h1 className="title">
//           <span className="g-text">Recent Blog Posts</span>
//         </h1>
//         <h3 className="sub__title" style={{color:"#0f8956"}} >Explore our articles</h3>
//         <div className="blogs__container">
//           {
//             blogs.map((blog,index)=>(
//               <div className="blog__card" key={index}>
//                 <p className="category">{blog.category}</p>
//                 <div className="picture">
//                   <img src={blog.image} alt="" />
//                 </div>
//                 <div className="details">
//                   <h3>{blog.title}</h3>
                 
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Blog
import React, { useRef, useState } from 'react'
import './Blog.css'
import { blogs } from '../../data'
import { BsCalendar2Date } from 'react-icons/bs'
import { MdOutlineThumbUpOffAlt } from 'react-icons/md'
import { FaRegCommentDots } from 'react-icons/fa'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Blog = () => {
  const container = useRef(null)
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = (blog) => {
    setSelectedBlog(blog)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setSelectedBlog(null)
    setShowModal(false)
  }

  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: container.current,
        start: '20% bottom',
        end: 'bottom top',
      },
    })
    timeline
      .from('.title', { y: -50, opacity: 0 })
      .from('.sub__title', { y: -50, opacity: 0 })
      .fromTo('.blog__card', { y: 100, opacity: 0 }, { opacity: 1, stagger: 0.5, y: 0 })
  }, { scope: container })

  return (
    <section id='blog' ref={container}>
      <div className='container'>
        <h1 className='title'>
          <span className='g-text'>Recent Blog Posts</span>
        </h1>
        <h3 className='sub__title' style={{ color: '#0f8956' }}>Explore our articles</h3>
        <div className='blogs__container'>
          {blogs.map((blog, index) => (
            <div className='blog__card' key={index} onClick={() => handleOpenModal(blog)}>
              <p className='category'>{blog.category}</p>
              <div className='picture'>
                <img src={blog.image} alt='' />
              </div>
              <div className='details'>
                <h3>{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedBlog && (
        <div className='blog__modal'>
          <div className='modal__content'>
            <button className='close__btn' onClick={handleCloseModal}>×</button>
         
            <div className='modal__text' dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
            <div className='modal__meta'>
              <span><BsCalendar2Date /> {selectedBlog.date.toDateString()}</span>
              <span><MdOutlineThumbUpOffAlt /> {selectedBlog.likeCount}</span>
           
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Blog
