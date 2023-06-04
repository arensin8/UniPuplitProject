import React from 'react';
import css from './Virtual.module.css';
import shade from '../../assets/shade.png';
import ReactCompareImage from 'react-compare-image';
import Virtual1 from '../../assets/virtual2.jpg'
import Virtual2 from '../../assets/virtual1.jpg'

const Virtual = () => {
    return (
        <div className={css.virtual}>

            <div className={css.left}>
                <span>Virtual try-on</span>
                <span>Mez het amen inchy lav e!!</span>
                <span>Try now!</span>
                <img src={shade} alt="shade"/>
            </div>

            <div className={css.right} data-aos="fade-left">
                <div className={css.wrapper}>
                    <ReactCompareImage leftImage={Virtual1} rightImage={Virtual2} className={css.rightImage}/>
                </div>
            </div>
        </div>
    );
};

export default Virtual;