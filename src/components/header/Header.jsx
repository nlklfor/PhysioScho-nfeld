import './style.css'
import logo from '../../assets/Logo.png'
import phone from '../../assets/phone.svg'
import {Link} from "react-router-dom";
import AboutUs from "../aboutUs/aboutUs";

function Header() {
    return (
        <>
            <header className={'header'}>
                <section className={'header-section'}>
                    <img src={logo} alt={'logo'}/>
                    <ul className={'header-nav'}>
                        <li className={'header-item'}>
                            About us
                        </li>
                        <li className={'header-item'}>
                            How you can find us
                        </li>
                        <li className={'header-item'}>
                            Service
                        </li>
                        <li className={'header-item'}>
                            Practice
                        </li>
                        <li className={'header-item'}>
                            Contacts
                        </li>
                        <li className={'header-item'}>
                            Career
                        </li>
                        <li className={'header-item'}>
                            Reviews
                        </li>
                        <li className={'header-item'}>
                            <button className={'header-button'}>
                                <img src={phone} alt={'phone'} className={'phone-img'}/>
                                <a className={'phone-link'} href="tel:08964913555">089 - 649 135 55</a>
                            </button>
                        </li>
                    </ul>
                </section>
            </header>
        </>

    )
}

export default Header;