import React, { useState } from "react";
import './Roadmap.css'
import Header from "../../components/header/Header";
import { servicesData } from "../../data/services";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Footer from "../../components/Footer/Footer";

const Roadmap = () => {
    const [MenuData , setMenuData] = useState(servicesData);
    const [parent] = useAutoAnimate()
    const filter = (type) => {
        setMenuData(servicesData.filter((service) => service.type === type))
    }
  return (
    <>
    <Header />
    <section class="timeline">
      <div class="line"></div>

      <div class="timeline-items">
        <div class="timeline-item" data-aos="fade-up">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>Front-End</h3>
            <p>
              Front-end ծրագրավորողը ստեղծում է կայքեր և հավելվածներ՝
              օգտագործելով վեբ լեզուները, ինչպիսիք են HTML-ը, CSS-ը և
              JavaScript-ը, որոնք թույլ են տալիս օգտվողներին մուտք գործել կայք
              կամ հավելված և շփվել դրանց հետ: Երբ այցելում եք կայք, դիզայնի
              տարրերը, որոնք տեսնում եք, ստեղծվել են ճակատային ծրագրավորողի
              կողմից:
            </p>
          </div>
        </div>
        <div class="timeline-item" data-aos="fade-up">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>Back-End</h3>
            <p>
              Back-end ծրագրավորողներն այն փորձագետներն են, ովքեր կառուցում և
              պահպանում են մեխանիզմներ, որոնք մշակում են տվյալները և կատարում
              գործողություններ կայքերում: Ի տարբերություն Frontend
              ծրագրավորողների, ովքեր վերահսկում են այն ամենը, ինչ դուք կարող եք
              տեսնել վեբկայքում, Backend ծրագրավորողները ներգրավված են տվյալների
              պահպանման, անվտանգության և սերվերի կողմից այլ գործառույթներում,
              որոնք դուք չեք կարող տեսնել:
            </p>
          </div>
        </div>
        <div class="timeline-item" data-aos="fade-up">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>Cloud</h3>
            <p>
              Ընդհանրապես, ծրագրավորողները մասնագետներ են, ովքեր կառուցում և
              նախագծում են օգտակար կայքեր, ծրագրեր, հավելվածներ և այլն՝ սկզբից,
              կամ կաղապարների և նախապես սահմանված ռեսուրսների օգնությամբ։
              Պրոֆեսիոնալ Cloud Developer-ը նա է, ով ստեղծում է համակարգչային
              հավելվածներ և ծրագրեր: Cloud-ի մասնագետները կարող են օգտագործել
              նույն ծրագրակազմն ու գործիքները՝ դրանք ստեղծելու համար, ինչպես ՏՏ
              մյուս մշակողները: Այնուամենայնիվ, ռեսուրսները, որոնք օգտագործվում
              են այս մասնագետների կողմից, վերցված են cloud-based հարթակից:
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className='container1'>
            <h1>what you will learn</h1>

            <div className='services' data-aos="fade-right">
                <ul className='menu'>
                    <li onClick={() => setMenuData(servicesData)}>All</li>
                    <li onClick={() => filter('front end')}>Front-End</li>
                    <li onClick={() => filter('back end')}>Back-End</li>
                    <li onClick={() => filter('cloud')}>Cloud</li>
                </ul>

                <div className='list' ref={parent}>
                    {MenuData.map((service,i) => (
                        <div className='service'>
                            <span >{service.i}</span>
                            <span>{service.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <Footer />
    </>
  );
};

export default Roadmap;
