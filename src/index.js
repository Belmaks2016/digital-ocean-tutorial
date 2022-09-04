import React from 'react'
import * as ReactDOMClient from 'react-dom/client';


//Делаем записи в константы, затем эти константы записываеим, как параметры метода
const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")

//Create new component
function Header() {
	return(
		<header>Шапка сайта</header>
	)
}

//Now we will use components.
//To create new component, you can create new function or class
//Add component Header in component App
//Use arrow function
const App = () => {//name of function == name of component. 
	//In fact, it isn't function. It's component(JSX-element)
	return (
	<div>
	<Header /> 
	<input placeholder='Some text'//React + JSX 
	onClick={inputClick} onMouseEnter={mouseOver}//React + JSX + два обработчика событий
	/>
	</div>
	)
}

const app = ReactDOMClient.createRoot(document.getElementById("app"));//object, we will place all information
app.render(<App />)// method render let us to place all information

