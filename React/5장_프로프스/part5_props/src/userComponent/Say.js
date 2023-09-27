// React 16.8 이후에서만 사용 가능 (Hooks 사용)

import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState("");
    const onClickEnter = () => setMessage("안녕하세요!");
    const onClickLeave = () => setMessage("안녕히 가세요!");
    
    const [color, setColor] = useState("black");
    // color를 직접 변경시 값이 변경되지 않음, 따라서 setter 함수를 사용하여 변경해야함

    return(
        <>
            <button onClick={onClickEnter}>Enter</button>
            <button onClick={onClickLeave}>Exit</button>
            
            <h1 style={ {color} }>{message}</h1>

            {/* JSX inline style 문법: style={ 객체 }, style={{ color }} */}
            <button style={{ color: "red"}} onClick={() => setColor("red")}>Red</button>
            <button style={{ color: "green"}} onClick={() => setColor("green")}>Red</button>
            <button style={{ color: "blue"}} onClick={() => setColor("blue")}>Red</button>
        </>
    )
};

export default Say;