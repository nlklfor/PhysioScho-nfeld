import './style.css'
import logoFooter from '../../assets/Logo-footer.png';
import phone from '../../assets/phone.svg';
import clock from '../../assets/clock.svg';
import map from '../../assets/map.svg';

function Footer() {
    return (
        <footer className={'footer'}>
            <section className={'section-footer'}>
                <div className={'section-logo'}>
                    <img src={logoFooter} alt={'logo-footer'}/>
                    <div className={'section-logo-links'}>
                        <a href={'!#'} className={'imprint'} id={'logo-link'}>
                            Imprint
                        </a>
                        <a href={'!#'} className={'data-protection'} id={'logo-link'}>
                            Data protection
                        </a>
                    </div>
                </div>
                <ul className={'footer-nav'}>
                    <li className={'footer-item'}>
                        <img src={phone} alt={'phone'} id={'footer-img'} />
                        <p className={'phone-link'}>Contact <br/>
                            Tel: <strong><a href="tel:08964913555">089 - 649 135 55</a></strong><br/>
                            E-Mail: <strong><a
                                href="mailto:physiocar.info@gmail.com">physiocar.info@gmail.com</a></strong>
                        </p>
                    </li>
                    <li className={'footer-item'}>
                        <img src={clock} alt={'clock'} id={'footer-img'} />
                        <p className={'working-hours'}>Working hours<br/>
                            Mo - Do: 8:00 - 20:00<br/>
                            Fr: 8:00 - 16:00
                        </p>
                    </li>
                    <li className={'footer-item'}>
                        <img src={map} alt={'map'} id={'footer-img'} />
                        <p className={'map'}>Address<br/>
                            Grünwalder Str. 34<br/>
                            81547 München
                        </p>
                    </li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;