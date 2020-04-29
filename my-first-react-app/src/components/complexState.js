import React,{useState} from 'react';
import NameTag from './nameTag';
import '../App.scss';

const initialName = [
    {firstName:"padma", lastName: "Chockalingam"},
    {firstName:"padma", lastName: "Ganapathi"},
    {firstName:"Ganapathi", lastName: "padma"},
];

function ComplexState() {
    const [names, setNames] = useState(initialName);
    return (
        <>
        <NameTag firstName={names[0].firstName} lastName={names[0].lastName}></NameTag>
        <NameTag firstName={names[1].firstName} lastName={names[1].lastName}></NameTag>
        <NameTag firstName={names[2].firstName} lastName={names[2].lastName}></NameTag>
        </>
    )
}

export default ComplexState;