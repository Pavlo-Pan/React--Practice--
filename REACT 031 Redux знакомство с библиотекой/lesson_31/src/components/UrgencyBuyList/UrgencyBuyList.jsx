import { useSelector } from "react-redux";

import { selectUrgencyBuyList } from "../../redux/selectors";


const UrgencyBuyList = () => {

    // const items = useSelector(store => store.buyList.filter(item => item.urgency));
    const items = useSelector(selectUrgencyBuyList)

    const elements = items.map(element => (
        <li key={element.id}>
            {element.name}
        </li>
    ))

    return (
        <ol>
            {elements}
        </ol>
    )
};

export default UrgencyBuyList;