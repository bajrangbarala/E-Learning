import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";

// const [color, setColor] = useState("red");


const Hook = () => {
    const [count, setCount] = useState(0);
    const [value, setvalue] = useState("ram");

    const clickme = () => {
        setvalue('shyam')
    };
    const shoot = (a) => {
        alert(a);
    }

    const [Obja, setObja] = useState({
        name: "anil",
        sub: "hidi",
        nam: "4"

    });

    // const handclick = () => {
    //     setObja({
    //         name:'anu',
    //         sub:"english",
    //         nam:"8"
    //     })
    // }
    // const x = 15;
    // const text = "worrnig";
    // if (x < 17) {
    //     text ="right";
    // }
     
     const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

    return (
        <>
            <h6>hello how are you {count} can you help me hello my friend</h6>
            <h6>hello how are you {value} can you help me hello my friend</h6>
            <Button onClick={() => setCount(count + 1)}>count</Button>
            <Button onClick={clickme}>click</Button>
            <h6>hello how are you {Obja.name} can you help {Obja.sub} me hello my {Obja.nam}friend</h6>
            <Button onClick={() => setObja({
                name: 'anu',
                sub: "english",
                nam: "8"
            })}>handclick</Button>
            <button onClick={() => shoot("Goal")}>Take the shot!</button>
            {/* <p>{text}</p> */}
            <h1>{text}</h1>

        </>)

}

export default Hook
