import { createContext, useState, useContext } from "react";

const UserContext = createContext()

function Context() {
    const [user, setUser] = useState("Jesse Hall");

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Context2 />
        </UserContext.Provider>
    );
}

function Context2() {
    return (
        <>
            <h1>Context 2</h1>
            <Context3 />
        </>
    );
}

function Context3() {
    return (
        <>
            <h1>Context 3</h1>
            <Context4 />
        </>
    );
}

function Context4() {
    return (
        <>
            <h1>Context 4</h1>
            <Context5 />
        </>
    );
}

function Context5() {
    const user = useContext(UserContext);

    return (
        <>
            <h1>Context 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}

export default Context;