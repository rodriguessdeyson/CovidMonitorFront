import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
	render() { 
		return <div>
			<nav className="nav">
			<b style={{ color: "#193148", fontWeight:"700", lineHeight:"22px", fontSize:"24.59px"}}>
				CORONAVÍRUS
				<img style={{height: "24px", marginBottom:"4px", marginRight:"2px",  marginLeft:"2px"}} src="/assets/images/br-logo.png" alt="" />
				<span>SC</span>
			</b>
				<ul className="nav-links">
					<Link style={{ color: "#193148" }} to="/">
						<li>Home</li>
					</Link>
					<Link style={{ color: "#193148" }} to="/notify/newcase">
						<li>Notificar</li>
					</Link>
				</ul>
			</nav>
		</div>;
	}
}
 
export default Navbar;