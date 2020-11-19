import React from 'react'
import CharCard from '../Component/CharCard'


function FavoritesContainer(props) {

    
        return (
            <>
                <h1>Favorites</h1>
                <div>
                    <CharCard char={props.char}/>
                </div>
            </>
        )
    
}

export default FavoritesContainer