import './style.css'
import mail from '../../assets/mail.svg'
import pointer from '../../assets/pointer.svg'
import phone from '../../assets/phone-mobil.svg'
import whatsapp from '../../assets/whatsapp.svg'

function ContactUs() {
    return (
        <main className={'contactUs'} id={'sectionContacts'}>
            <h1 className={'contactUs-title'}>
                Contact Us
            </h1>
            <article className={'article-contact'}>
                {/*<h2 className={'article-subtitle'}>*/}
                {/*    Please use one of the suggested contact possibilities*/}
                {/*</h2>*/}
                <section className={'section-form'}>
                    <form className={'form'} method={'post'}>
                        <input id={'input-form'} type={"text"} placeholder={`Your name`} required/>
                        <input id={'input-form'} type={"email"} placeholder={`Your email`} required/>
                        <input id={'input-form'} type={"tel"} placeholder={`Your phone number`} required/>
                        <textarea id={'textarea-form'} placeholder={'Message'}/>
                        <div className={'form-policy'}>
                            <input id={'input-checkbox'} type={"checkbox"} required/>
                            <p className={'policy-title'}>I agree all statements in <a className={'policy-term'}
                                                                                       href={'!#'}>term of service</a>
                            </p>
                        </div>
                        <input type={'submit'} className={'section-button-send'} value={'Send'}/>
                    </form>
                </section>
                <section className={'section-info'}>
                    <h2 className={'info-time'}>
                        Opening hours: <strong>Mo - Th: 8:00 - 20:00
                        Fr: 8:00 - 16:00</strong>
                    </h2>
                    <ul className={'info-btn-list'}>
                        <li className={'info-btn-item'}>
                            <img alt={'address'} src={pointer}/>
                            <button id={'info-button'} >Grünwalder Str. 34, 81547 München, Germany</button>
                        </li>
                        <li className={'info-btn-item'}>
                            <img alt={'phone'} src={phone}/>
                            <button id={'info-button'}>089 - 649 135 55</button>
                        </li>
                        <li className={'info-btn-item'}>
                            <img alt={'whatsapp'} src={whatsapp}/>
                            <button id={'info-button'}>0152 598 770 88</button>
                        </li>
                        <li className={'info-btn-item'}>
                            <img alt={'mail'} src={mail}/>
                            <button id={'info-button'}>physiocar.info@gmail.com</button>
                        </li>
                    </ul>
                </section>
            </article>
        </main>
    )
}

export default ContactUs;
