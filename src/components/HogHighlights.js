import React from 'react'


function HogHighlights ({currentHog}) {
return (
<div  >
            <p >Specialty: {currentHog.specialty}</p>
            <p >Weight: {currentHog.weight}</p>
            <p >Is greased: {currentHog.greased? 'Yes' : 'No' }</p>
            <p >Highest Medal Achieved: {currentHog['highest medal achieved']}</p>
            </div>
)
}




export default HogHighlights