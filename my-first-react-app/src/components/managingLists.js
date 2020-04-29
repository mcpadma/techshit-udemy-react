import React,{useState} from 'react';
import NameTag from './nameTag';
import '../App.scss';

const initialName = [
    {firstName:"padma", lastName: "Chockalingam"},
    {firstName:"padma", lastName: "Ganapathi"},
    {firstName:"Ganapathi", lastName: "padma"},
];

function ManagingLists() {
    const [names, setNames] = useState(initialName);
    return (
        <>
        {
            names.map((v,i) => {
                // return <NameTag key={'${i}${v.firstNAme}${v.lastname}'}  firstName={v.firstName} 
                //     lastName={v.lastName}></NameTag>
                return <NameTag key={'${i}${v.firstNAme}${v.lastname}'}  firstName={v.firstName} 
                    lastName={v.lastName}></NameTag>
            })
        }
        {/* <NameTag firstName={names[0].firstName} lastName={names[0].lastName}></NameTag>
        <NameTag firstName={names[1].firstName} lastName={names[1].lastName}></NameTag>
        <NameTag firstName={names[2].firstName} lastName={names[2].lastName}></NameTag> */}
        </>
    )
}

export default ManagingLists;