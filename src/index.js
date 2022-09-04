import React from 'react'
import * as ReactDOMClient from 'react-dom/client';


//Делаем записи в константы, затем эти константы записываеим, как параметры метода
const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")

const elements = <input placeholder='Some text'//React + JSX 
onClick={inputClick} onMouseEnter={mouseOver}/>; //React + JSX + два обработчика событий

const app = ReactDOMClient.createRoot(document.getElementById("app"));//object, we will place all information
app.render(elements)// method render let us to place all information
/*
метод render возвращает только один родительский тег, т е, если хотим записать два тега, то обернуть в один родительский, н-р div:
<div>
<h1></h1>
<h2></h2>
</div>
*/

//В Reactjs существует технология JSX.
//Можем сразу писать html код, 
//и он будет обрабатываться корректно
//Код с JSX и без: https://itproger.com/course/react-js/3

/*
ReactDOM.render(React.createElement('input', {
	placeholder: 'Some text', 
	value: 'some'
    onclick: () => console.log("Clicked") //обработчик событий
}), document.getElementById("app");
*/