import React from "react";

function SearchEngine({ query, setQuery, search }) {
    const handleClick = () => {
        if (query !== '') {
            const apiKey = "b03a640e5ef6980o4da35b006t5f2942";
            const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}&units=metric`;
            console.log(apiUrl);
        }
    }

    return (
        <div className="SearchEngine">
            <input
                type="text"
                className="city-search"
                placeholder="Enter City Name"
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />
            <button onClick={handleClick}>
                <i className="fas fa-search" style={{ fontSize: "18px" }}></i>
            </button>
        </div>
    );
}

export default SearchEngine;
