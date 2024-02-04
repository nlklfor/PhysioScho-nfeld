import './style.css'
import check from '../../assets/check-mark.svg'

function AboutUs() {

    const advList = [
        {img: check, title: 'Fast and flexible appointment'},
        {img: check, title: 'Private and general insurance'},
        {img: check, title: 'Professional and competent stuff'},
        {img: check, title: 'High privacy due to closed rooms'},
        {img: check, title: 'Our therapists speak: German, English, Croatian, Russian'},
    ]
    return (
        <>
            <section className={'aboutUs-section'}>
                <article className={'description-article'}>
                    <h2 className={'description-title'}>
                        About Us
                    </h2>
                    <p className={'description-desc'}>
                        Hello and welcome to our physiotherapy practice in Munich. We specialize in physiotherapy,
                        wellness, professional personal training and other special treatments related to modern
                        physiotherapy. Our friendly team will accompany you on your way to recovery after an injury or
                        illness, true to the motto: We will get you fit again. You will find our practice in the heart
                        of Munich, directly on the town hall square.
                    </p>
                    <button className={'description-button'}>
                        Make an appointment
                    </button>
                </article>
                <article className={'advantages-article'}>
                    <h2 className={'advantages-title'}>
                        Your advantages with us
                    </h2>
                    <ul className={'advantages-list'}>
                        {advList.map(item => {
                            return (
                                <li className={'advantages-list_item'}>
                                    <img src={item.img} alt={'check'}/>
                                    <p className={'advantages-list_spec'}>
                                        {item.title}
                                    </p>
                                </li>
                            )
                        })}
                    </ul>
                </article>
            </section>
        </>
    )
}

export default AboutUs;