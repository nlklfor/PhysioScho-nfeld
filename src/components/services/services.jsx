import Card from "./card";
import './style.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import image from '../../assets/swiper.png';
import {Navigation} from "swiper/modules";

function Services() {

    const cardInfo = [
        {
            img: `${image}`,
            title: 'Physiotherapy',
            subtitle: 'We\'ll get you fit again for everyday life',
            description: 'A very important area of physiotherapy is physiotherapy . The aim of physiotherapy is to restore the ability to move and function, as well as to maintain and promote health.'
        }, {
            img: `${image}`,
            title: 'Physiotherapy',
            subtitle: 'We\'ll get you fit again for everyday life',
            description: 'A very important area of physiotherapy is physiotherapy . The aim of physiotherapy is to restore the ability to move and function, as well as to maintain and promote health.'
        }, {
            img: `${image}`,
            title: 'Physiotherapy',
            subtitle: 'We\'ll get you fit again for everyday life',
            description: 'A very important area of physiotherapy is physiotherapy . The aim of physiotherapy is to restore the ability to move and function, as well as to maintain and promote health.'
        }, {
            img: `${image}`,
            title: 'Physiotherapy',
            subtitle: 'We\'ll get you fit again for everyday life',
            description: 'A very important area of physiotherapy is physiotherapy . The aim of physiotherapy is to restore the ability to move and function, as well as to maintain and promote health.'
        }, {
            img: `${image}`,
            title: 'Physiotherapy',
            subtitle: 'We\'ll get you fit again for everyday life',
            description: 'A very important area of physiotherapy is physiotherapy . The aim of physiotherapy is to restore the ability to move and function, as well as to maintain and promote health.'
        }, {
            img: `${image}`,
            title: 'Physiotherapy',
            subtitle: 'We\'ll get you fit again for everyday life',
            description: 'A very important area of physiotherapy is physiotherapy . The aim of physiotherapy is to restore the ability to move and function, as well as to maintain and promote health.'
        }, {
            img: `${image}`,
            title: 'Physiotherapy',
            subtitle: 'We\'ll get you fit again for everyday life',
            description: 'A very important area of physiotherapy is physiotherapy . The aim of physiotherapy is to restore the ability to move and function, as well as to maintain and promote health.'
        }, {
            img: `${image}`,
            title: 'Physiotherapy',
            subtitle: 'We\'ll get you fit again for everyday life',
            description: 'A very important area of physiotherapy is physiotherapy . The aim of physiotherapy is to restore the ability to move and function, as well as to maintain and promote health.'
        },]


    return (
        <>
            <h1 className={'services-title'} id={'sectionServices'}>Physiotherapy services</h1>
            <Swiper
                slidesPerView={4} navigation={true} modules={[Navigation]}>
                <section className={'section-services'}>
                    {cardInfo.map(card => {
                        return (
                            <SwiperSlide>
                                <div className={'card-wrapper'}>
                                    <Card title={card.title} subtitle={card.subtitle} description={card.description}
                                          img={card.img}/>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </section>
            </Swiper>

        </>
    )

}

export default Services;