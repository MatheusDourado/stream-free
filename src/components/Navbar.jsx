import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"


const Navbar = () => {
    return (
        <nav className="navbar-custom">
            <Link className="navbar-custom-logo" to="/" title="TESTE">M.D. TMDB</Link>
            <ul>
                <li>
                    <Link className="nav-link-custom" aria-current="page" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link-custom" to="/movie/:id">Filmes</Link>
                </li>
                <li>
                    <Link className="nav-link-custom" to="/search">Séries</Link>
                </li>
            </ul>
            <div className="nav-search">
                <input type="search" placeholder="Pesquisar" aria-label="Pesquisar"/>
                <button type="submit"><FaSearch/></button>
            </div>
        </nav>
    )
}

export default Navbar