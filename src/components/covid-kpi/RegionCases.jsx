import React, { Component } from "react";

class RegionCases extends Component {
	render() {
		const { info, caseValue, color } = this.props;
		return (
			<div className={`$mb-1 mt-1 ${color}` } style={{background: `${color}`, color:"white", border: "1px solid rgba(29, 165, 132, 0.9)", borderBlockColor: "rgba(29, 165, 132, 0.9)", borderRadius: "5px"}}>
				<div style={{alignContent: "center", textAlign: "center"}}  className="row">
					<div className="col">
						<h6>{ info }</h6>
					</div>
					<div>
						<span>{ caseValue }</span>
					</div>
				</div>
			</div>
		);
	}
}
 
export default RegionCases;