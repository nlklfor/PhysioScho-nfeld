import './style.css'
function Map() {
    return (
        <section className={'location-section'}>
            <h1 className={'location-title'}>
                How you can find us?
            </h1>
            <h3 className={'location-subtitle'}>
                <strong>How to reach us by public transport:</strong> <strong>U1</strong> Station: Wettersteinplatz   |  Tram, <strong>Line 25</strong> Station: Kurzstraße
            </h3>
            <article className={'map-article'}>
                <iframe
                    className={'map-frame'}
                    title={'map'}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.195689028208!2d11.568528676849798!3d48.10646065332623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf10ec350e5d%3A0xf63392c54cdd9aac!2sPhysioSch%C3%B6nfeld!5e0!3m2!1suk!2sch!4v1706453211240!5m2!1suk!2sch"
                    width="1000" height="600" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </article>
        </section>
    )
}

export default Map;