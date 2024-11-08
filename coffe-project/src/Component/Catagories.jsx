import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Categories = ({ categories }) => {
    return (
        <div role="tablist" className="tabs tabs-lifted">
            {categories.map(category => (
                <NavLink
                    to={`/category/${category.category}`} // Removed extra space
                    key={category.category}
                    role="tab"
                    className={({ isActive }) => 
                        `tab text-2xl font-semibold ${isActive ? 'tab-active' : ''}` // Fixed className logic
                    }
                >
                    {category.category}
                </NavLink>
            ))}
        </div>
    );
};

export default Categories;
