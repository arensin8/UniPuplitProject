import React from 'react';
import css from './Hero.module.css';
import HeroImg from '../../assets/hero.svg';
import {BsArrowRight} from 'react-icons/bs'

const Hero = () => {
    return (
        <div className={css.container}>

            {/* left side */}
            <div className={css.h_sides}>
                <span className={css.text1}>ՏՏ Ամբիոն</span>

                <div className={css.text2} data-aos="fade-right">
                    <span>Տարբեր մասնաճյուղեր</span>
                    {" "}
                    <span>յբո ֆդօիփհո ֆւոդց օո դցգիւ ոիհս ցիոեգս ցօիոգյ սցրւգոկյկկ ցիգ ւիկգ</span>
                </div>
            </div>

            {/* middle side of hero */}
            <div className={css.wrapper}>
                <div className={css.blueCircle}></div>
                <img src={HeroImg} alt=""  data-aos="fade-up"/>
                <div className={css.signupbtn} data-aos="fade-right">
                    <div className={css.Signup}>
                        <span>Sign up to give latest news</span>
                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span data-aos="fade-left">100k+</span>
                    <span>Yearly students</span>
                </div>
                <div className={css.traffic}>
                    <span>700k+</span>
                    <span>Graduated students</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;