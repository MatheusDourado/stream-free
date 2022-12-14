//React
import { Link } from "react-router-dom"

//API
import { api } from "../utils/keys"

const CardMovie = ({title, movies}) => {
    return(
        <section className="cardBox">
            <h1 className="title-h1"> {title} </h1>

            <div className="containerCards">
                <div className="scrollCards">
                    {movies.map(item => 
                        <Link relative="path" to={`../${item.id}`} key={item.id}>
                            <div className="card">
                                <img className="img-card" src={api.img + item.poster_path} alt={item.title} />
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CardMovie