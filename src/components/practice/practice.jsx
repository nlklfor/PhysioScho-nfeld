
import './style.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCards, EffectCoverflow, Pagination} from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import practice from '../../assets/practice.png';
import practice2 from '../../assets/practice2.jpg';
import practice3 from '../../assets/practice3.jpg';
import practice4 from '../../assets/practice4.jpg';
import practice5 from '../../assets/practice5.jpg';
import practice6 from '../../assets/practice6.jpg';
import practice7 from '../../assets/practice7.jpg';
import practice8 from '../../assets/practice8.jpg';



function Practice() {

    const practiceImgs = [
        {
            img: `${practice}`
        },
        {
            img: `${practice2}`
        },
        {
            img: `${practice3}`
        },
        {
            img: `${practice4}`
        },
        {
            img: `${practice5}`
        },
        {
            img: `${practice6}`
        },
        {
            img: `${practice7}`
        },
        {
            img: `${practice8}`
        }
    ]


    return (
        <>
            <h1 className={'practice-title'}>Our Practice in Munich</h1>
            <Swiper
                modules={[EffectCards, Pagination]}
                pagination={{ clickable: true }}
                effect={'cards'}
                >
                <section className={'section-practice'}>
                    {practiceImgs.map(card => {
                        return (
                            <SwiperSlide>
                                <div className={'slider-wrapper'}>
                                    <img className={'swiper-practice'} src={card.img} alt={'practice-img'}/>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </section>
            </Swiper>

        </>
    )

}

export default Practice;