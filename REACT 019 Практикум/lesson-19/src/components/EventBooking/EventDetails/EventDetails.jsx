

const EventDetails = ({ data }) => {

    const { title, date, place } = data

    return (
        <div>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{place}</p>
        </div>
    )
};

export default EventDetails;