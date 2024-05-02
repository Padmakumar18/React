import Apple from "./Apple";
import Car from "./Car";
import './Garage.css'
import style from './Style.module.css'

function Garage()
{
    // const brand = "Ford" ;
    // const color = "Red" ;

    // const info ={}
    const info ={brand:"BMW",color:"red"}
    const appleInfo = {type:"Fuji",color:"Red"} ;
    const carList = [
        { brand:"BMW" , color : "Red" },
        { brand:"Ford" , color : "Green" },
        { brand:"Ben-z" , color : "Blue" }
    ] ;
    const num = [1,2,3,4,5,6,7]

    return(
        <>
        { false && <h1>This is Garage Component !</h1>  }
            <Car info={info} />
            {/* <Car carBrand = {brand}
                color ={color}/> */}
            <Apple appleInfo={appleInfo}/>
            <h1 className={style.classOne}>Hello wolrd !</h1>
            <ul>
                { carList.map((value)=> {return <li key={value.brand}> <Car info={value}/> </li> })  }
            </ul>
            <ul>
                { num.map((value,index)=> {return <p key={index}>{value}</p> })  }
            </ul>
        </>
    )
}

export default Garage;