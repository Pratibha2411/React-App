import React from 'react';
import './faqs.css';
import Google from '../../assets/google.png';

const Faqs = () => {
  return (
//     <div classNameName='container'>
//       {/* <!-- faq --> */}
// <section id="faq" className="faq">
//   <div className="container">
//     <div className="row text-center">
//       <h1 className="display-3 fw-bold text-uppercase">FAQ</h1>
//     </div>
// {/* <!-- accordient --> */}
// <div className="row mt-4">
//   <div className="col-md-12">
//     <div className="accordion accordion-flush" id="accordionFlushExample">
//       {/* <!-- 1 --> */}
//       <div className="accordion-item shadow mb-3">
//         <h2 className="accordion-header" id="flush-headingOne">
//           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
//             Accordion Item #1
//           </button>
//         </h2>
//         <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
//           <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
//         </div>
//       </div>
//       {/* <!-- 2 --> */}
//       <div className="accordion-item shadow mb-3">
//         <h2 className="accordion-header" id="flush-headingTwo">
//           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
//             Accordion Item #2
//           </button>
//         </h2>
//         <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
//           <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
//         </div>
//       </div>
//       {/* <!-- 3 --> */}
//       <div className="accordion-item shadow mb-3">
//         <h2 className="accordion-header" id="flush-headingThree">
//           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
//             Accordion Item #3
//           </button>
//         </h2>
//         <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
//           <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
//         </div>
//       </div>
//       {/* <!-- 4 --> */}
//       <div className="accordion-item shadow mb-3">
//         <h2 className="accordion-header" id="flush-headingfour">
//           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
//             Accordion Item #3
//           </button>
//         </h2>
//         <div id="flush-collapsefour" className="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
//           <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//   </div>
// </section>
//     </div>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Google} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Google} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Google} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden btn-info">Next</span>
  </button>
</div>
  )
}

export default Faqs