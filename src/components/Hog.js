import React, {useState} from 'react'
import HogHighlights from './HogHighlights'

function Hog ({hog, currentHog, onClickHog}) {



    return (
        <div id={hog.name}  onClick={(event)=> onClickHog(event.target.id)} className='pigTile'>
            <p className='unclickable'>{hog.name}</p>
            {currentHog == hog ? <HogHighlights currentHog={currentHog}/>: ''}
            <img className='minPigTile unclickable'  src={hog.image}/>
        
        </div>
        
    )
}


export default Hog