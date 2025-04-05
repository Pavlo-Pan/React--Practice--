import './DestinationInfo.css';

const DestinationInfo = ({title, description}) => {
    return (
        <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
    );
};

export default DestinationInfo;