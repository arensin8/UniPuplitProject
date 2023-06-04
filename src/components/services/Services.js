import React, { useState } from 'react';
import css from './Services.module.css'
import { servicesData } from '../../data/services';
// import { ProductsData } from '../../data/products';
import {useAutoAnimate} from '@formkit/auto-animate/react'

const Services = () => {

    const [parent] = useAutoAnimate()
    const [MenuData , setMenuData] = useState(servicesData);

    const filter = (type) => {
        setMenuData(servicesData.filter((service) => service.type === type))
    }

    return (
        <div className={css.container}>
            <h1>what you will learn</h1>

            <div className={css.services} data-aos="fade-right">
                <ul className={css.menu}>
                    <li onClick={() => setMenuData(servicesData)}>All</li>
                    <li onClick={() => filter('front end')}>Front-End</li>
                    <li onClick={() => filter('back end')}>Back-End</li>
                    <li onClick={() => filter('cloud')}>Cloud</li>
                </ul>

                <div className={css.list} ref={parent}>
                    {MenuData.map((service,i) => (
                        <div className={css.service}>
                            <span >{service.i}</span>
                            <span>{service.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;