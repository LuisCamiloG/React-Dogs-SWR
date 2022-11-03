import '../Styles/Cards.css'

function Card(props) {

    return (
        <div className='container'>
            <div className='div-foto'>
                <img src={props.id} alt="" className='img-form' />
            </div>
            <div className='div-text'>
                <h4>Dog</h4>
                <button className='buttom-form' onClick={() => { window.location.reload() }}>Next</button>
            </div>
        </div>
    )

}
export default Card