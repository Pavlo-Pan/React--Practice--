import { useState } from "react";

import EventDetails from "./EventDetails/EventDetails";
import SeatSelector from "./SeatSelector/SeatSelector";


const dataEvent = {
    title: 'Concert of the Year',
    date: '2023-12-11',
    place: 'City Arena',
};
const selectedSeatsData = ['1A', '1B', '1C', '1D', '1E', '1F', '1G'];

const EventBooking = () => {

    const [eventInfo, setEventInfo] = useState(dataEvent);
    const [seats, setSeats] = useState(selectedSeatsData);
    const [selectedSeats, setSelectedSeats] = useState([]);


    return (
        <div>
            <EventDetails data={eventInfo} />
            <SeatSelector seats = {seats} changeSelectedSeats = {setSelectedSeats}/>
            <p>Selected seats: {selectedSeats.join(", ")}</p>
        </div>
    )
};

export default EventBooking;