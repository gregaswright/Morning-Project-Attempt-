import React from 'react'
import CharCard from '../Component/CharCard'
import {animeCharactersApi} from "../api.js"
import Form from '../Component/Form'
import Search from '../Component/Search'

class CharsContainer extends React.Component {

    state = {
       charsArray: animeCharactersApi,

       filteredCharsArray : animeCharactersApi,

       searchValue: ""
    }

    searchHandler = (event) => {
        this.setState({searchValue: event.target.value})
    }

    filteredCharsArray = () => {
        return this.state.filteredCharsArray.filter(charObj => charObj.name.toLowerCase().includes(this.state.searchValue.toLocaleLowerCase()))
    }

    submitHandler = (charObj) => {
        let newCharArray = [...this.state.charsArray, charObj]
        this.setState({ char: newCharArray})
    }


    render(){
        console.log(this.props)
        let all_Chars = this.filteredCharsArray().map(charObj => <CharCard key={charObj.id} char={charObj} appClickHandler={this.props.appClickHandler}/>)
        return (
            <>
                <Form submitHandler={this.submitHandler}/>
                <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler} />
                <h1>Anime Characters</h1>
                <div>
                    {all_Chars}
                </div>
            </>
        )
    }
}

export default CharsContainer