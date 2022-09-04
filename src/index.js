import React from 'react'
import * as ReactDOMClient from 'react-dom/client';


//Делаем записи в константы, затем эти константы записываеим, как параметры метода
const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")

//Now we will use components.
//To create new component, you can create new function or class
function App() {//name of function == name of component. 
	//In fact, it isn't function. It's component(JSX-element)
	return (<input placeholder='Some text'//React + JSX 
	onClick={inputClick} onMouseEnter={mouseOver}/>) //React + JSX + два обработчика событий)
}

const app = ReactDOMClient.createRoot(document.getElementById("app"));//object, we will place all information
app.render(<App />)// method render let us to place all information

