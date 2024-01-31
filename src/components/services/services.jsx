import Card from "./card";
import './style.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import SlidePrevButton from "./SlidePrevButton";
import SlideNextButton from "./SlideNextButton";
import image from '../../assets/swiper.png';

function Services() {

    const cardInfo = [
        {
            img: `${image}`, title: 'Physiotherapy', subtitle: 'We\'ll get you fit again for everyday life', description: 'A very important area of physiotherapy is physiotherapy . The aim of physiotherapy is to restore the ability to move and function, as well as to maintain and promote health.'
        }, {
            img: `${image}`, title: 'Physiotherapy', subtitle: 'We\'ll get you fit again for everyday life', description: 'A very important area of physiotherapy is physiotherapy . The aim of physiotherapy is to restore the ability to move and function, as well as to maintain and promote health.'
        }, {
            img: `${image}`, title: 'Physiotherapy', subtitle: 'We\'ll get you fit again for everyday life', description: 'A very important area of physiotherapy is physiotherapy . The aim of physiotherapy is to restore the ability to move and function, as well as to maintain and promote health.'
        }, {
            img: `${image}`, title: 'Physiotherapy', subtitle: 'We\'ll get you fit again for everyday life', description: 'A very important area of physiotherapy is physiotherapy . The aim of physiotherapy is to restore the ability to move and function, as well as to maintain and promote health.'
        }, {
            img: `${image}`, title: 'Physiotherapy', subtitle: 'We\'ll get you fit again for everyday life', description: 'A very important area of physiotherapy is physiotherapy . The aim of physiotherapy is to restore the ability to move and function, as well as to maintain and promote health.'
        }, {
            img: `${image}`, title: 'Physiotherapy', subtitle: 'We\'ll get you fit again for everyday life', description: 'A very important area of physiotherapy is physiotherapy . The aim of physiotherapy is to restore the ability to move and function, as well as to maintain and promote health.'
        }, {
            img: `${image}`, title: 'Physiotherapy', subtitle: 'We\'ll get you fit again for everyday life', description: 'A very important area of physiotherapy is physiotherapy . The aim of physiotherapy is to restore the ability to move and function, as well as to maintain and promote health.'
        }, {
            img: `${image}`, title: 'Physiotherapy', subtitle: 'We\'ll get you fit again for everyday life', description: 'A very important area of physiotherapy is physiotherapy . The aim of physiotherapy is to restore the ability to move and function, as well as to maintain and promote health.'
        },]


    return (
        <>
            <h1 className={'services-title'}>Physiotherapy services</h1>
            <Swiper
                slidesPerView={4}>
                <SlidePrevButton/>
                <section className={'section-services'}>
                    {cardInfo.map(card => {
                        return (
                            <SwiperSlide>
                                <Card title={card.title} subtitle={card.subtitle} description={card.description}
                                      img={card.img}/>
                            </SwiperSlide>
                        )
                    })}

                </section>
                <SlideNextButton/>
            </Swiper>

        </>
    )

}

export default Services;