import { Shimmer } from "./Shimmer";
import { CDN_URL, MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useRestroMenuHook } from "../utils/useRestroMenuHook";

export const RestroMenuPage = () => {
  //Extracting Restro ID using useParam HOOK
  const { restroId } = useParams();
  const restromenuName = useRestroMenuHook(restroId);

  if (restromenuName === null) return <Shimmer />;

  const { name, cloudinaryImageId, city, cuisines } =
    restromenuName?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restromenuName?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <>
      <div className="restromenu">
        <h1>{name}</h1>
        <img
          className="restro-imgItem"
          alt="logo"
          style={{ width: "100px", height: "100px" }}
          src={CDN_URL + cloudinaryImageId}
        />
        <h5>{city}</h5>
        <h4>{cuisines.join(" , ")}</h4>
        <h2>Menu</h2>
        <ul className="menuitems">
          {itemCards?.map((item) => (
            <li key={item?.card?.info?.id}>
              <div>
                <p>{item?.card?.info?.name}</p>
                <p className="menuPrice">Rs-{item?.card?.info?.price / 100}</p>
              </div>

              <div>
                <img src={MENU_URL + item?.card?.info?.imageId} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
