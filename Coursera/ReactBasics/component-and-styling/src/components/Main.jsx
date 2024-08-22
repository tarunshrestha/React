import Apple from "./Apple"
import Promo from "./Promo"

export default function Main(){
    const myList = [10, 20, 30]
    return (
    <>
        <h2>Home</h2>
        <Apple color={"RED"} number={20}/>
        <Promo heading={"Promo"} promoSubHeading={"SUb"}/>
        {myList.map((item, index) => (
                    <p key={index}>Apple:{item * 10}</p>
                ))}    </>
    )
}