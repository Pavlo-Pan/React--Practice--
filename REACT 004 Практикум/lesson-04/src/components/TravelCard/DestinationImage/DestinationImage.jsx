import './DestinationImage.css';

const DestinationImage = ({imageUrl, alt}) => {
    return (
        <div>
            <img src={imageUrl} alt={alt} width={500} />
        </div>
    );
};

export default DestinationImage;