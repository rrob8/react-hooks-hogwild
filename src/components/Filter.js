import React from "react"


function Filter ({filter, filterGreasyHogs})  {
    return (
        <div>
        <button
        onClick={()=> {
          return filterGreasyHogs()
        }}
        >
        Greasy Hogs Filter: {filter}
        </button>
        </div>
    )
}






export default Filter 