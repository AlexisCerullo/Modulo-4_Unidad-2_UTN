import { Link } from "react-router-dom"
import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return (
       <div className="color-nav">
            <div className="holder">
                <header>
                    <Link href="/"><img src="img/snes-controller.png" alt="Logo" /></Link>

                    <h1>Game Dev Studio</h1>
                </header>
                <nav>
                    <ul>
                        <Link to="/" className="borde-izquierdo">
                            <li>Inicio</li>
                        </Link>
                        <Link to="/juegos">
                            <li>Juegos</li>
                        </Link>
                        <Link to="/nosotros">
                            <li>Nosotros</li>
                        </Link>
                        <Link to="/blog">
                            <li>Blog</li>
                        </Link>
                        <Link to="/empleos">
                            <li>Empleos</li>
                        </Link>
                        <Link to="/contacto" className="borde-derecho">
                            <li>Contacto</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Nav;