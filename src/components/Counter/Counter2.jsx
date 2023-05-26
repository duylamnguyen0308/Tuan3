import React, { useEffect, useState } from "react";
export const Counter2 = () => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState("truong");
    useEffect(() => {
        console.log('useEffect');
        setTimeout(() => { setLoading(false); }, 3000);
    }, [])
    const onDecrease = () => {
        setCount(count - 1);
    }
    const onIncrease = () => {
        setCount(count + 1);
    }
    return (
        <div>{loading === "truong" ?
            <div>loadinggg</div> :
            <>
                <button onClick={() => onDecrease()}>-</button>
                <span>{count}</span>
                <button onClick={() => onIncrease()}>+</button>
            </>
        }
        </div>
    )
}