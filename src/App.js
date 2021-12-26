import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Notification from "./components/NotificationPage";

import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<div style={{background: "rgba(29, 165, 132, 0.09)"}}>
			<NavBar/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/notify/newcase" element={<Notification/>}/>
			</Routes>
			</div>
		</Router>
	);
}

export default App;
