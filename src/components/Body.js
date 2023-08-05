import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
export const Body = () => {
  //State Variable in React
  const [fakeRestroDataList, setFakeRestroDataList] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);

  const [searchTextVariable, setSearchTextVariable] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  // console.log("before return");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5203896&lng=73.8567005&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setFakeRestroDataList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // console.log(fakeRestroDataList);

  return fakeRestroDataList?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="search">
          <input
            type="text"
            name="Search"
            placeholder="Search..."
            value={searchTextVariable}
            onChange={(e) => {
              setSearchTextVariable(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter restro card and update UI
              const filterRestro = fakeRestroDataList?.filter((restroFilter) =>
                restroFilter?.info?.name
                  .toLowerCase()
                  .includes(searchTextVariable.toLowerCase())
              );
              setFilteredRestro(filterRestro);
            }}
          >
            Search
          </button>
          <button
            className="filterBtn"
            onClick={() => {
              //Filter logic here
              const filterLists = fakeRestroDataList.filter(
                (rest) => rest?.info?.avgRating > 4
              );
              setFilteredRestro(filterLists);
            }}
          >
            Top Rated Restro
          </button>
        </div>
        <div className="restro-container">
          {filteredRestro?.map((items) => (
            <Link to={"/restromenu/" + items?.info?.id}>
              <RestaurantCard restoData={items?.info} key={items?.info?.id} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
