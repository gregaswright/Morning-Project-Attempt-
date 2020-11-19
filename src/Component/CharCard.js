import React from 'react'

class CharCard extends React.Component {

    charClickHandler = () => {
        this.props.appClickHandler(this.props.char)
    }

    render(){
        return(
            <div>
                <h2>{this.props.char.show}</h2>
                <h3>{this.props.char.name}</h3>
                <img onClick={this.charClickHandler} src={this.props.char.img} alt={this.props.char.name}/>
            </div>
        )
    }
}

export default CharCard