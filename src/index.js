import React from 'react'
import * as ReactDOMClient from 'react-dom/client';


//Делаем записи в константы, затем эти константы записываеим, как параметры метода


//Create new class component
class Header extends React.Component {//extends == all inherit from a specific parent class(все наследуем от определенного класса родителя)
	render() {//function of class(without function before functionName)
		return(//React.Component - Adress(obrachenie) to object React and to object Component 
			<header>Шапка сайта</header>
		)
	}
}

//Now we will use components.
//To create new component, you can create new function or class
//Add component Header in component App
//Use arrow function
class App extends React.Component {//name of function == name of component. 
	//In fact, it isn't function. It's component(JSX-element)
	helpText = 'Help text'//without const or let. Why?
	render () {
		return (//use this.
			<div>
				<Header />
				<h1>{this.helpText}</h1>
				<input placeholder='Some text'//React + JSX 
				onClick={this.inputClick} onMouseEnter={this.mouseOver}//React + JSX + два обработчика событий
				/>
			</div>
		)
	}

	inputClick = () => console.log("Clicked")
	mouseOver = () => console.log("Mouse Over")
}

const app = ReactDOMClient.createRoot(document.getElementById("app"));//object, we will place all information
app.render(<App />)// method render let us to place all information

