const Header = () => {
    return (
        <header>
            <h1>Event planner</h1>
            <input type="text" placeholder="search by tags"/>
            <select>
                <option value='UK'>UK</option>
                <option value='UK'>UA</option>
            </select>
        </header>
    )
};

export default Header;