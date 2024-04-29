import Apple from "./Apple";
import Car from "./Car";

function Garage()
{
    // const brand = "Ford" ;
    // const color = "Red" ;

    const info ={brand:"BMW",color:"red"}
    return(
        <>
        <h1>This is Garage Component !</h1>
        <Car info={info} />
        {/* <Car carBrand = {brand}  
             color ={color}/> */}
        <Apple/>
        </>
    )
}

export default Garage;