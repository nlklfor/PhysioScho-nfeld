import './style.css'
import check from '../../assets/check-mark.svg'

function AboutUs() {
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
                <article className={'pros-article'}>
                    <h2 className={'pros-title'}>
                        Your advantages with us
                    </h2>
                    <ul className={'pros-list'}>
                        <li className={'pros-list_item'}>
                            <img src={check} alt={'check'}/>
                            <p className={'pros-list_spec'}>
                                Fast and flexible appointment
                            </p>
                        </li>
                        <li className={'pros-list_item'}>
                            <img src={check} alt={'check'}/>
                            <p className={'pros-list_spec'}>
                                Private and general insurance
                            </p>
                        </li>
                        <li className={'pros-list_item'}>
                            <img src={check} alt={'check'}/>
                            <p className={'pros-list_spec'}>
                                Professional and competent stuff
                            </p>
                        </li>
                        <li className={'pros-list_item'}>
                            <img src={check} alt={'check'}/>
                            <p className={'pros-list_spec'}>
                                High privacy due to closed rooms
                            </p>
                        </li>
                        <li className={'pros-list_item'}>
                            <img src={check} alt={'check'}/>
                            <p className={'pros-list_spec'}>
                                Our therapists speak:<br/>
                                German, English, Croatian, Russian
                            </p>
                        </li>
                    </ul>
                </article>
            </section>
        </>
    )
}

export default AboutUs;