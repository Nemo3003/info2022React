import "./cards.css"

export default function Search(){
    return (
        <div className="search">
            <input type="text" placeholder="Search" className="search__input"/>
            <button className="search__button">
                Buscar
            </button>
        </div>
    );
}