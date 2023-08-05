import { CDN_URL } from "../utils/constants";

// Write CSS using JS object
const styleCard = {
  backgroundColor: "#ececec",
};
export const RestaurantCard = (props) => {
  const { restoData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    restoData;
  return (
    <>
      <div className="restro-card" style={styleCard}>
        <img
          className="restro-imgItem "
          alt="logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{deliveryTime} mins</h4>
      </div>
    </>
  );
};
