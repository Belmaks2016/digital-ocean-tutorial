import React from 'react'
import Header from './components/Header'
//Делаем записи в константы, затем эти константы записываеим, как параметры метода


//Create new class component

//Now we will use components.
//To create new component, you can create new function or class
//Add component Header in component App
//Use arrow function
//You can add properties of your component
class App extends React.Component {//name of function == name of component. 
	//In fact, it isn't function. It's component(JSX-element)
	helpText = 'Help text'//without const or let. Why?
	render () {
		return (//use this.
			<div>
				<Header title="Шапка сайта" name=""/>
				<Header title="Шапка сайта!"/>
				<Header title="!!!"/>
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

export default App