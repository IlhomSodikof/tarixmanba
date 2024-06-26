// import React from 'react'

// export default function Modal() {
//   return (
//     <div class="container">
//       <h1 class="display-4 text-center mb-4">Sample Modal</h1>

//       <div class="row mb-4">
//         <div class="col text-center">
//           <a href="#" class="btn btn-lg btn-primary" data-toggle="modal" data-target="#largeModal">Click to open Modal</a>
//         </div>
//       </div>

//       {/* <!-- modal --> */}
//       <div class="modal fade" id="largeModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
//         <div class="modal-dialog modal-lg">
//           <div class="modal-content">
//             <div class="modal-body">
//               {/* <!-- carousel --> */}
//               <div id='carouselExampleIndicators' class='carousel slide' data-ride='carousel'>
//                 <ol class='carousel-indicators'>
//                   <li data-target='#carouselExampleIndicators' data-slide-to='0' class='active'></li>
//                   <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
//                   <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
//                 </ol>
//                 <div class='carousel-inner'>
//                   <div class='carousel-item active'>
//                     <img class='img-size' src='https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1391&q=80' alt='First slide' />
//                   </div>
//                   <div class='carousel-item'>
//                     <img class='img-size' src='https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='Second slide' />
//                   </div>
//                   <div class='carousel-item'>
//                     <img class='img-size' src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='Second slide' />
//                   </div>
//                 </div>
//                 <a class='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>
//                   <span class='carousel-control-prev-icon' aria-hidden='true'></span>
//                   <span class='sr-only'>Previous</span>
//                 </a>
//                 <a class='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'>
//                   <span class='carousel-control-next-icon' aria-hidden='true'></span>
//                   <span class='sr-only'>Next</span>
//                 </a>
//               </div>
//             </div>
//             <div class="modal-footer">
//               <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   )
// }



// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cube';
// import 'swiper/css/pagination';

// // import './styles.css';

// // import required modules
// import { EffectCube, Pagination } from 'swiper/modules';

// export default function Modal() {
// return (
//     <div className='car-car'>
//       <Swiper
//         effect={'cube'}
//         grabCursor={true}
//         cubeEffect={{
//           shadow: true,
//           slideShadows: true,
//           shadowOffset: 20,
//           shadowScale: 0.94,
//         }}
//         pagination={true}
//         modules={[EffectCube, Pagination]}
//         className="mySwiper1"
//       >
//         <SwiperSlide>
//           <h1>123232</h1>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <h1>fsdfdf</h1>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </div>

//   );
// };

