import { Link } from "react-router-dom";

const Card = ({ coffee }) => {

    const { name, image, category, origin, type, id, rating, popularity } = coffee;

    return (
        <div className="card card-compact bg-base-100 w-90 shadow-xl">
            <Link to={`/coffee/${id}`} className="transition hover:scale-105 shadow-lg rounded-xl overflow-hidden"></Link>
        <figure>
          <img className="w-full rounded-t-lg h-60 overflow-hidden"
            src={image}
            alt={name} />
        </figure>
        <div className="card-body">
          <h1 className="text-2xl font-semibold text-black">Name:{name}</h1>
          <h2 className="text-lg font-semibold text-black">Category: {category}</h2>
          <h2 className="text-lg font-semibold text-black">Type: {type}</h2>
          <h2 className="text-lg font-semibold text-black">Origin: {origin}</h2>
          <h2 className="text-lg font-semibold text-black">Ratting: {rating}</h2>
          <h2 className="text-lg font-semibold text-black">Popular: {popularity}</h2>
          </div>
        </div>
   
    );
};

export default Card;
