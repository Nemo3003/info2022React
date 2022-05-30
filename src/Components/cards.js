import './cards.css';
const Cards = (props) => {
    
    return (
        <div className="cards">
        <div className="cards__item">
            <div className="image">
                <img src={props.src} alt={props.alt} className="image-crd"/>
            </div>
            <div className="cards_title">
            <h2>{props.title}</h2>
            </div>
            <div className="cards_p">
            <p>{props.text}</p>
            </div>
            <div className="cards_l">
                <button className='btncard'>{props.btncard}</button>
            </div>
        </div>
        </div>
    );
}
export default Cards;