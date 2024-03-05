import './style.css';
import salary from '../../assets/salary.svg';
import refund from '../../assets/refund.svg';
import bonus from '../../assets/bonus.svg';
import vacation from '../../assets/vacation.svg';
import car from '../../assets/car.svg';
import hour from '../../assets/working-hours.svg';
import location from '../../assets/location.svg';
import intervals from '../../assets/intervals.svg';
import arrow from '../../assets/pros-arrow.svg';
import {Link} from "react-router-dom";


function Conditions() {

    const prosList = [
        {img: location, description: 'Attractive location (5 minutes walk from U1 Wettersteinplatz, good parking)'},
        {img: refund, description: 'Refund for further education, driving licence and moving'},
        {img: bonus, description: 'Bonus for employee recruitment'},
        {img: vacation, description: '28 days/year vocation'},
        {img: car, description: 'Work car for home visits'},
        {img: hour, description: 'Flexible working hours that are tailored to your life'},
        {img: salary, description: 'Above average salary'},
        {img: intervals, description: '25-minute intervals'},

    ]

    return (
        <main className={'conditions'} id={'sectionCareer'}>
            <h1 className={'conditions-title'}>
                We are looking for a candidates
            </h1>
            <section className={'section-pros'}>
                <h2 className={'pros-title'}>We offer you the best condition for your career</h2>
                <ul className={'pros-list'}>
                    {prosList.map(item => {
                        return (
                            <li className={'pros-list-item'}>
                                <img className={'pros-icon'} alt={'pros-icon'} src={item.img}/>
                                <p className={'section-description'}>{item.description}</p>
                            </li>
                        )
                    })}
                </ul>
                <Link to={'job'} className={'section-button'}>Apply for a job<img alt={'button-arrow'} src={arrow}
                                                                                  className={'button-arrow'}/></Link>
            </section>
        </main>
    )

}

export default Conditions;