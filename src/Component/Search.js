import React from 'react'

function Search(props) {
    return (
        <form>
            <input placeholder="search" value={props.searchValue} onChange={props.searchValue}/>
        </form>
    )
}

export default Search