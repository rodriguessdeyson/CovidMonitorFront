import React, { Component } from "react";

class KpiConfirmed extends Component {
	render() {
        const { name, value } = this.props;
		return (
			<div className="mb-1" style={{background: "rgb(29,165,132)", border: "1px solid rgb(165,219,206)", borderBlockColor: "rgb(165,219,206)", borderRadius: "5px"}}>
				<div style={{alignContent: "center", textAlign: "center", color:"white"}}  className="row">
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
 
export default KpiConfirmed;