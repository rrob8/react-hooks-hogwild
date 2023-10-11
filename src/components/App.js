import React from "react";
import Nav from "./Nav";
import HogList from './HogList'
import Hog from './Hog'

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<HogList hogs={hogs}/>
			
		</div>
	);
}

export default App;
