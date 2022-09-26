import { Link } from "react-router-dom"


const api_img = import.meta.env.VITE_API_IMG

const CardMovie = ({title, movies}) => {
    return(
        <section className="cardBox">
            <h1 className="title-h1"> {title} </h1>

            <div className="containerCards">
                <div className="scrollCards">
                    {movies.map(item => 
                        <Link relative="path" to={`../${item.id}`} key={item.id}>
                            <div className="card">
                                <img className="img-card" src={api_img + item.poster_path} alt={item.title} />
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CardMovie