import './style.css'
import logo from '../../assets/Logo.png'
import phone from '../../assets/phone.svg'

export const scrollToTarget = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    }
};

function Header() {

    return (
        <>
            <header className={'header'} id={'sectionTop'}>
                <section className={'header-section'}>
                    <img src={logo} className={'header-logo'} alt={'logo'}
                         onClick={() => scrollToTarget('sectionTop')}/>
                    <ul className={'header-nav'}>
                        <li className={'header-item'} onClick={() => scrollToTarget('sectionAbout')}>
                            About us
                        </li>
                        <li className={'header-item'} onClick={() => scrollToTarget('sectionMap')}>
                            How you can find us
                        </li>
                        <li className={'header-item'} onClick={() => scrollToTarget('sectionServices')}>
                            Service
                        </li>
                        <li className={'header-item'} onClick={() => scrollToTarget('sectionPractice')}>
                            Practice
                        </li>
                        <li className={'header-item'} onClick={() => scrollToTarget('sectionContacts')}>
                            Contacts
                        </li>
                        <li className={'header-item'} onClick={() => scrollToTarget('sectionCareer')}>
                            Career
                        </li>
                        <li className={'header-item'} onClick={() => scrollToTarget('sectionReviews')}>
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