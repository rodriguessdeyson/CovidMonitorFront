import React, { Component } from "react";

class KpiGeneralData extends Component {
	render() {
		const { name, value } = this.props;
		return (
			<div className="mb-1" style={{background: "white", border: "1px solid rgba(29, 165, 132, 0.9)", borderBlockColor: "rgba(29, 165, 132, 0.9)", borderRadius: "5px"}}>
				<div style={{alignContent: "center", textAlign: "center"}}  className="row">
					<div className="col">
						<h6>{ name }</h6>
					</div>
					<div>
						<span>{ value }</span>
					</div>
				</div>
			</div>
		);
	}
}
 
export default KpiGeneralData;