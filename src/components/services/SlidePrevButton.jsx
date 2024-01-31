// some-inner-component.jsx
import { React } from 'react';
import { useSwiper } from 'swiper/react';
import arrow from "../../assets/arrow-swipe.svg";
import './style.css';

export default function SlidePrevButton() {
    const swiper = useSwiper();

    return (
        <img className={'arrow-prev'} alt={'arrow'} src={arrow} onClick={() => swiper.slidePrev()}/>
    );
}