import React from 'react'


class Header extends React.Component {//extends == all inherit from a specific parent class(все наследуем от определенного класса родителя)
	render() {//function of class(without function before functionName)
		return(//React.Component - Adress(obrachenie) to object React and to object Component 
			<header>{this.props.title}</header>//we can't set new value of property, we can only read the value of this property
		)
	}
}
//
export default Header
