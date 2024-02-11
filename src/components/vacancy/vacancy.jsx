import './style.css'
import back from '../../assets/pros-arrow.svg'
import upload from '../../assets/Upload.svg'

function Vacancy() {
    return (
        <main className={'vacancy'}>
            <div className={'back'}>
                <a href={'#!'} className={'button-back'}>
                    <img className={'arrow-back'} alt={'back'} src={back}/>
                    Back
                </a>
            </div>
            <h1 className={'vacancy-title'}>Apply for a job <br/>
                Start your career with us
            </h1>
            <section className={'section-apply'}>
                <h2 className={'section-title'}>Apply now!</h2>
                <form className={'apply-form'} method={'post'}>
                    <input id={'input-apply'} type={'text'} placeholder={'Your name'} required/>
                    <input id={'input-apply'} type={'text'} placeholder={'Your surname'}/>
                    <input id={'input-apply'} type={'text'} placeholder={'Your number'} required/>
                    <input id={'input-apply'} type={'email'} placeholder={'Your email'} required/>
                    <textarea placeholder={'Message'}/>
                    <label className="input-file">
                        <input type="file" required/>
                        Upload your CV
                        <img alt={'upload'} src={upload} className={'upload'}/>
                    </label>
                    <input type={'submit'} value={'Send'} className={'apply-send'}/>
                </form>
            </section>
        </main>
    )
}

export default Vacancy;