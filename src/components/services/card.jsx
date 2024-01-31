import './style.css'
function Card(props) {
    return(
            <main className={'card'}>
                <section className={'section-card'}>
                    <img src={props.img} alt={'card'}/>
                </section>
                <section className={'section-desc'}>
                    <h2 className={'section-title'}>
                        {props.title}
                    </h2>
                    <h3 className={'section-subtitle'}>
                        {props.subtitle}
                    </h3>
                    <p className={'section-description'}>
                        {props.description}
                    </p>
                </section>
            </main>
    )
}

export default Card;