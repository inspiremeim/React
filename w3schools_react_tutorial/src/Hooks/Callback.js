import { memo } from "react";

const Callbacks = ({ callbacks, addCallback }) => {
    console.log("child render");
    return (
        <>
            <h2>My Callbacks</h2>
            {callbacks.map((callback, index) => {
                return <p key={index}>{callback}</p>;
            })}
            <button onClick={addCallback}>Add Todo</button>
        </>
    );
};

export default memo(Callbacks);