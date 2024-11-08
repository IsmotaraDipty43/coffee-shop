import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCard = () => {
    const navigate = useNavigate()
    const coffees = useLoaderData();
    const { category } = useParams();
    const [coffeedata, setCoffeeData] = useState([]);

    useEffect(() => {
        // If there's no category, set default data
        if (!category) {
            setCoffeeData(coffees.slice(0, 6)); // Set default to first 6 coffees
            console.log("Default coffee data:", coffees.slice(0, 6));
            return; // Exit the effect early
        }

        // Normalize and filter by category if it exists
        const normalizedCategory = category.toLowerCase().trim();
        const filterByCategory = [...coffees].filter(coffee =>
            coffee.category.toLowerCase().trim() === normalizedCategory
        );

        console.log("Filtered coffee data:", filterByCategory);
        setCoffeeData(filterByCategory);

    }, [category, coffees]);

    console.log("All coffees:", coffees);
    console.log("Coffee data to display:", coffeedata);

    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 mb-5">
            {coffeedata.map(coffee => (
                <Card key={coffee.id} coffee={coffee} />
            ))}
        </div>
         <button onClick={()=> navigate('/coffees')} className="btn btn-warning mt-5 mb-5">View All</button>
        
        </>
    );
};

export default CoffeeCard;
