import { memo } from "react";

const Memos = ({ memos }) => {
    console.log("Todos render");

    return (
        <>
            <h2>Hello all, here is my To-do list.</h2>
            {
                memos.map((memo, index) => {
                    return <p key={index}>{memo}</p>;
                })
            }
        </>
    );
};

//export default Memos;
export default memo(Memos);