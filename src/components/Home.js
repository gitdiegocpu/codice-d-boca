
import {useState} from 'react'        4.1 (gzipped: 1.8k)

function SingleMenuComponent(props){
    console.log('props ->', props)
    return (
        < className='menu-item'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        </div>
    )
}

export default function Home(){
    const [menuItems, setMenuItems] = useState()
    //1. fetch data
    //2. get array of objects
    //3. render each object
    //3.1  create a state variable 
    //3.2 put inside state variable the array of objects
    //3.3 display each item in dom
    //3.3.1 Map over the array of objects
    //3.3.2 return each items so that it displays on the browser

    

const handleBtnClick = () => {  

}
return(
    <>
        <section className='menu-items'>
            (!menuItems

         
        ? <button onClick = {()=> handleBtnClick()}>get data</button>
        :menuItems.map((singleItem) => 
           return(
            <singleMenuComponent>
           )
            singleItem.price = 16.99

            return (
                <div>
                    <h2>{singleItem.title}</h2>
                    <p>singleItem.description</p>
                </div>             
            )
        ))}
    </div>
)
 console.log('hey class from a function')

fetch('https://codice-boca.web.app/menu')
   .then(res => res.json())   // contacting de API ( THE SERVICE )
   .then(data => setMenuItems(data))  // 
   .catch(x => console.err (x))

}

return(

        <>
         {<h2>I'm Home component</h2>
         <button > onClick={() => handleBtnClick () }get data </button>
        </>
    )
}