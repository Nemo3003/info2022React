import './navbar.css';

export default function Navbar(){
    return <nav className="navigation">
        <a href="/" className="site-title">Home</a>
        <ul>
            <li><a href="/">Home</a></li>
            <li> <a href='/practice'>Practice</a></li>
            <li> <a href='/primero'>Primera Etapa</a></li>
            <li><a href='/segundo'>Segunda Etapa</a></li>
            <li><a href='/tercero'>Tercera Etapa</a></li>
        </ul>
    </nav>
}