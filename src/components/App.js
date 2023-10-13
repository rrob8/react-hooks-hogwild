import React, {useState} from "react";
import Nav from "./Nav";
import HogList from './HogList'
import Hog from './Hog'
import Filter from './Filter'
import hogs from "../porkers_data";
import HogSorter from "./HogSorter";


function App() {
 const [hogsToDisplay, setHogsToDisplay] = useState(hogs)
 const [filter, setFilter] = useState('Off')
 const [sort, setSort] = useState('Name')

function filterGreasyHogs () {

	if (filter == 'On') {
		setHogsToDisplay(hogs)
		setFilter('Off')
	}
	else if (filter == 'Off') {
		const filteredHogs = hogs.filter((hog)=> hog.greased === true)
		setFilter('On')
		setHogsToDisplay(filteredHogs)
	}

}

function onSortHogs (value) {
	
	if (value == 'Weight') {
		setSort('Weight')
	
		}
		
	if (value == 'Name') {
		setSort('Name')
		
	}
	
}

let sortedHogs = hogsToDisplay.sort((a,b)=> {

if (sort === 'Name') {
return	(a.name > b.name)? 1: -1
}
else if (sort === 'Weight') {
	return (a.weight > b.weight)? 1: -1
}
})

console.log(sortedHogs)
	return (
		<div className="App">
			<Nav />
			<Filter filter={filter} filterGreasyHogs={filterGreasyHogs}/>
			<HogSorter onSortHogs={onSortHogs}/>
			<HogList hogs={hogsToDisplay}/>
			
		</div>
	);
}

export default App;
