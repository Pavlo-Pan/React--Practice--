import { useState, useRef, useEffect } from "react";

const ToggleText = ({ text }) => {

    const [isHide, setIsVHide] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.value = '';
        // if (isHide) {
        //     inputRef.current.value = '';
        // }
    }, [isHide, inputRef])

    const onHide = () => {
        setIsVHide(prev => !prev);
    }

    console.log(inputRef.current?.value);


    return (
        <div>
            <h2>Скрытие и отображение текста с анимацией</h2>
            <button onClick={onHide}>{isHide ? "Показать текст" : "Скрыть текст"}</button>
            <input ref={inputRef} type="number" placeholder="Веедите цифру" /> 
            <p style={isHide ? { transition: `${inputRef.current?.value}s`, opacity: 0 } : { transition: `${inputRef.current?.value}s`, opacity: 1 }}>
                {text}
            </p>
        </div>
    )
};

export default ToggleText;