import React from 'react'

class Form extends React.Component {

    state = {
        name: "",
        img: "",
        show: "",
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        return(
            <form onSubmit = {(event) => {
                event.preventDefault()
                this.props.submitHandler({name: event.target[0].value})
                this.setState({ name: "", img: "", show: ""})
            }}>
                <input name="name" type="text" placeholder="name" value={this.state.name} onChange={this.changeHandler}/>
                <input name="img" type="text" placeholder="img" value={this.state.img} onChange={this.changeHandler}/>
                <input name="show" type="text" placeholder="show" value={this.state.show} onChange={this.changeHandler}/>
                <input type="submit" value="create anime character"/>
            </form>
        )
    }
}

export default Form