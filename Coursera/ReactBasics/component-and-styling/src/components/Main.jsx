import Apple from "./Apple"
import Promo from "./Promo"
import { useState } from 'react'


export default function Main(){
    const myList = [10, 20, 30]
    const [isActive, setIsActive] = useState(true);
    
    function changeType(){
        setIsActive(!isActive)
    }

    return (
    <>
        <h2>Home</h2>
        <button onClick={changeType}>{isActive ? "Show" : "Hide"}</button>

        {!isActive  && <Apple color={"RED"} number={0}/> }



        <Promo heading={"Promo"} promoSubHeading={"SUb"}/>
        {myList.map((item, index) => (
                    <p key={index}>Apple:{item * 10}</p>
                ))}    </>
    )
}