//React
import { Link } from "react-router-dom"

//API
import { api } from "../utils/keys"


const CardSerie = ({title, series}) => {
    return(
        <section className="cardBox">
            <h1 className="title-h1"> {title} </h1>

            <div className="containerCards">
                <div className="scrollCards">
                    {series.map(item => 
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

export default CardSerie