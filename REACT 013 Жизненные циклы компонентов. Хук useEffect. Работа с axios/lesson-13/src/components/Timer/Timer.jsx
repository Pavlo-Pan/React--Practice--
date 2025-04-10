import { useState } from "react";

const Timer = () => {

    const [time, setTime] = useState(0);
    const [intervalId, setIntervaiId] = useState(null);

    useEffect(()=> {
        return ()=> {
            console.log("After unmounting")
            clearInterval(id);
        };
    }, [id])

    const onStart = () => {
        const idInterval = setInterval(() => setTime(prevTime => prevTime + 1), 1000);
        setIntervaiId(idInterval)
    }
    const onStop = () => {
        clearInterval(intervalId);
    }
    const onReset = () => {
        onStop();
        setTime(0);
    }

    return (
        <div>
            <p>Time: {time}</p>
            <button onClick={onStart}>Start</button>
            <button onClick={onStop}>Stop</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
};

export default Timer;