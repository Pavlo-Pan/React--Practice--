import DestinationImage from "./DestinationImage/DestinationImage";
import DestinationInfo from "./DestinationInfo/DestinationInfo";
import DestinationStats from "./DestinationStats/DestinationStats";


import "./TravelCard.css";

const TravelCard = ({ id, name, description, imageUrl, stats }) => {

    return (
        <div className="travel-card">
            <h2>Travel Card</h2>
            <p>id: {id}</p>
            <DestinationInfo title={name} description={description}  />
            <DestinationImage imageUrl={imageUrl} alt={name} />
            <DestinationStats {...stats} />

        </div>
    )
}

export default TravelCard;