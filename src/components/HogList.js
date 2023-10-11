import React, {useState} from 'react'
import Hog from './Hog'

function HogList({hogs}) {

    const [currentHog, setCurrentHog] = useState('')

    function onClickHog (selectedHog) {
      
       const clickedHog = hogs.find((hog) =>hog.name === selectedHog)
      
      
      
        setCurrentHog(clickedHog)
    }

    console.log(currentHog)

    return (
    <div className="ui eight wide column" >
        {hogs.map((hog) => {
            return (
            <Hog key={hog.name} hog={hog} currentHog={currentHog} onClickHog={onClickHog}/>
            
            )
        })}
    </div>
    )
}

export default HogList 