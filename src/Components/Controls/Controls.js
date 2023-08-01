import { NavLink } from "react-router-dom";

const Controls = () => {
    return (
        <>
            <button type="button">Category</button>
            <select>
                <option selected value='Sort By'>Sort by</option>
                <option value='business'>Business</option>
            </select>
            <NavLink to='/add'>Add new event</NavLink>
        </>
    )
};

export default Controls;