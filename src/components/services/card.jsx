import './style.css'
function Card(props) {
    return(
            <main className={'card'}>
                <section className={'section-card'}>
                    <img src={props.img} alt={'card'}/>
                </section>
                <section className={'card-desc'}>
                    <h2 className={'card-title'}>
                        {props.title}
                    </h2>
                    <h3 className={'card-subtitle'}>
                        {props.subtitle}
                    </h3>
                    <p className={'card-description'}>
                        {props.description}
                    </p>
                </section>
            </main>
    )
}

export default Card;