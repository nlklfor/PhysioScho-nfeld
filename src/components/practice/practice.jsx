
import './style.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import image from '../../assets/swiper.png';

function Practice() {

    const practiceImgs = [
        {
            img: `${image}`
        },
        {
            img: `${image}`
        },
        {
            img: `${image}`
        },
        {
            img: `${image}`
        },
        {
            img: `${image}`
        },
        {
            img: `${image}`
        }
    ]


    return (
        <>
            <h1 className={'practice-title'}>Our Practice in Munich</h1>
            <Swiper
                slidesPerView={4}>
                <section className={'section-services'}>
                    {practiceImgs.map(card => {
                        return (
                            <SwiperSlide>
                                <img src={image} alt={'practice-img'}/>
                            </SwiperSlide>
                        )
                    })}

                </section>
            </Swiper>

        </>
    )

}

export default Practice;