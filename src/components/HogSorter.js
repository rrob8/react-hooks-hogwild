import React from 'react'


function HogSorter ({onSortHogs}) {
    return (
        <div>
        <button onClick={()=>onSortHogs('Name')}>
          Sort By Name  
        </button>
        <button onClick={()=> onSortHogs('Weight')}>
          Sort By Weight
        </button>
        </div>
    )
}







export default HogSorter