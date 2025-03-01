import LinkButton from "../LinkButton/LinkButton";
import Lists from '../Lists/Lists';
import Text from '../Text/Text';
import Pictures from '../Pictures/Pictures';


function MainContent() {
    return (
        <div className="MainContent">
            <Text />
            <Lists />
            <Pictures />
            <Pictures />
            <LinkButton />
        </div>
    );
}
export default MainContent;
