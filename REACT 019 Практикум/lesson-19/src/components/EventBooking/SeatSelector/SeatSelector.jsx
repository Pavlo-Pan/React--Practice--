import { useState, useEffect } from "react";


const SeatSelector = ({ seats, changeSelectedSeats }) => {

    const [selectedSeats, setSelectedSeats] = useState([]);
    function handleClick(item) {
        setSelectedSeats(prev => prev.includes(item) ? prev.filter(el => el !== item) : [...prev, item])
    }
    useEffect(() => changeSelectedSeats(selectedSeats), [selectedSeats]);

    return (
        <div>
            {seats.map(item => <button style={{ backgroundColor: selectedSeats.includes(item) ? "green" : "white" }} onClick={() => handleClick(item)} key={item}>{item}</button>)}
        </div >
    )
};

export default SeatSelector;