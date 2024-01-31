
import { React } from 'react';
import { useSwiper } from 'swiper/react';
import arrow from '../../assets/arrow-swipe.svg';
import './style.css';

export default function SlideNextButton() {
    const swiper = useSwiper();

    return (
        <img className={'arrow-next'} alt={'arrow'} src={arrow} onClick={() => swiper.slideNext()} />
    );
}