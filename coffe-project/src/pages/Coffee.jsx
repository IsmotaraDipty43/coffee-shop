import { useLoaderData } from "react-router-dom";
import Card from "../Component/Card";
import { useState } from "react";

const Coffee = () => {
    const data = useLoaderData();
    const [coffees, setCoffees] = useState(data);
    const HandleSort=(sortBy)=>{
        if(sortBy=='popularity'){
           const sorted = [...data].sort((a,b)=> b.popularity - a.popularity)
           setCoffees(sorted)
        }else if(sortBy=='rating'){
            const sorted = [...data].sort((a,b)=> b.rating - a.rating)
            setCoffees(sorted)
        }
    }
    return (
       <>
       <div className="flex justify-between items-center">
        <div><h1 className="text-2xl font-semibold text-black"> Sort Coffee&apos;s by Popularity and Rating-&gt;
            </h1></div>
        <div className="flex gap-5">
     <button className="btn btn-warning text-black text-lg" onClick={()=>HandleSort('popularity')}>Sort By popularity</button>
     <button className="btn btn-warning text-black text-lg" onClick={()=>HandleSort('rating')}>Sort By Rating</button>

        </div>
       </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 mb-5">
        {coffees.map(coffee => (
            <Card key={coffee.id} coffee={coffee} />
        ))}
    </div>
       
       </>
    );
};

export default Coffee;