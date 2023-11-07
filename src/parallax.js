// import { useEffect } from "react";
// import gsap from "gsap";
// import { Observer } from "gsap/all";
// import "./App.css";

// import image1 from "./4.jpeg";
// import image2 from "./5.jpeg";
// import image3 from "./6.jpeg";
// import Virtual from "./components/virtual/Virtual";
// import Testimonial from "./components/Testimonials/Testimonial";
// import Accordion from "./components/accordion/Accordion";
// import Hero from "./components/Hero/Hero";
// import Header from "./components/header/Header";
// import Slider from "./components/Slider/Slider";
// import Services from "./components/services/Services";
// import Students from "./components/Students/Students";
// import Footer from "./components/Footer/Footer";
// import BackToTop from "./components/backtotop/BackToTop";
// import ChatIcon from "./components/chatbot/ChatIcon";

// const gsapInit = () => {
//   gsap.registerPlugin(Observer);

//   let sections = document.querySelectorAll("section"),
//     images = document.querySelectorAll(".bg"),
//     outerWrappers = gsap.utils.toArray(".outer"),
//     innerWrappers = gsap.utils.toArray(".inner"),
//     currentIndex = -1,
//     wrap = gsap.utils.wrap(0, sections.length),
//     animating;

//   gsap.set(outerWrappers, { yPercent: 100 });
//   gsap.set(innerWrappers, { yPercent: -100 });

//   const gotoSection = (index, direction) => {
//     index = wrap(index);
//     animating = true;
//     let fromTop = direction === -1,
//       dFactor = fromTop ? -1 : 1,
//       tl = gsap.timeline({
//         defaults: { duration: 1.25, ease: "power1.inOut" },
//         onComplete: () => (animating = false),
//       });
//     if (currentIndex >= 0) {
//       gsap.set(sections[currentIndex], { zIndex: 0 });
//       tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
//         sections[currentIndex],
//         { autoAlpha: 0 },
//       );
//     }
//     gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
//     tl.fromTo(
//       [outerWrappers[index], innerWrappers[index]],
//       { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
//       { yPercent: 0 },
//       0,
//     ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

//     currentIndex = index;
//   };

//   Observer.create({
//     type: "wheel,touch,pointer",
//     wheelSpeed: -1,
//     onDown: () => !animating && gotoSection(currentIndex - 1, -1),
//     onUp: () => !animating && gotoSection(currentIndex + 1, 1),
//     tolerance: 10,
//     preventDefault: true,
//   });

//   gotoSection(0, 1);
// };

// // const sections = [
// //   { component: <Hero />, image: image1 },
// //   { component: <Slider />, image: image1 },
// //   { component: <Virtual />, image: image2 },
// //   { component: <Services />, image: image3 },
// //   { component: <Testimonial />, image: image1 },
// //   { component: <Accordion />, image: image2 },
// //   { component: <Footer />, image: image3 },
// // ];

// export const Parallax = () => {
//   useEffect(() => {
//     gsapInit();
//   }, []);

//   return sections.map((section) => (
//     <>
//       <Header />
//       <BackToTop />
//       <ChatIcon />
//       <section>
//         <div className="outer">
//           <div className="inner">
//             <div
//               className="bg one"
//               style={{ backgroundImage: `url(${section.image})` }}
//             >
//               {section.component}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   ));
// };
