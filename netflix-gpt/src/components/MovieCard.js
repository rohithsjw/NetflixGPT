import { IMG_URL } from "../utils/constants";

const MovieCard = ({poster_path, title}) => {
    
    return (
   <div className="pr-4 w-48">
        <img src={IMG_URL+poster_path} alt= {title} />
    </div>
    )
}

export default MovieCard;