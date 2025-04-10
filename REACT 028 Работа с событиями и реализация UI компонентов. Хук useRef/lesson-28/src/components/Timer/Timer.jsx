import { useState, useRef, useEffect } from "react";

import styles from "./Timer.module.css";

const Timer = ()=> {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    useEffect(()=> {
        return ()=> {
            console.log("After unmounting");
            clearInterval(intervalRef.current);
        };
    }, [intervalRef]);

    const onStart = ()=> {
        const intervalId = setInterval(()=> {
            console.log("Timer tick");
            setTime(prevTime => prevTime + 1);
        }, 1000);
        intervalRef.current = intervalId;
    }

    const onStop = ()=> {
        clearInterval(intervalRef.current);
    }

    const onReset = ()=> {
        onStop();
        setTime(0);
    }

    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>Time: {time}</p>
            <button onClick={onStart}>Start</button>
            <button onClick={onStop}>Stop</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

export default Timer;