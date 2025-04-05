import { multiplyNumber, devideNumber } from "../../utils/useful-function";

const ShowCalc = () => {
    return (
        <div>
            <p>2 * 3 = {multiplyNumber(2, 3)}</p>
            <p>2 / 3 = {devideNumber(2, 3)}</p>

        </div>
    )
}

export default ShowCalc;