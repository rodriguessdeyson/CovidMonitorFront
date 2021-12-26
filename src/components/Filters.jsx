import React, {Component} from "react";
import Select from 'react-select';
import axios from "axios";

class Filters extends Component {
	state = {
		selectedCity: null,
		selectedNeighborhood: null,
		selectedAgeRange: null,
		cityOptions: [],
		neighborhoodOptions: [],
		ageRangeOptions: [],
	  };
	  handleCityChange = selectedCity => {
		this.setState({ selectedCity });
		console.log(`Option selected:`, selectedCity);
	  };
	  handleNeighborhoodChange = selectedNeighborhood => {
		this.setState({ selectedNeighborhood });
		console.log(`Option selected:`, selectedNeighborhood);
	  };
	  handleAgeRangeChange = selectedAgeRange => {
		this.setState({ selectedAgeRange });
		console.log(`Option selected:`, selectedAgeRange);
	  };

	  componentDidMount() {
		axios.get("http://localhost:5000/api/cities")
			.then( resp => {
				const cityData = resp.data;
				const cityOptions = [];
				cityData.forEach(selector => {
					cityOptions.push({
						label: selector.Name,
						value: selector.Id,
						stateId: selector.State_Id,
					});
				})
				
				const selectedCity = cityOptions.find(city => city.label === "Florianópolis");
				console.log(selectedCity);
				console.log(cityOptions);
				this.setState({cityOptions});
				this.setState({selectedCity });
		});

		axios.get("http://localhost:5000/api/neighborhoods")
			.then( resp => {
				const neighborhoodData = resp.data;
				const neighborhoodOptions = [];
				neighborhoodData.forEach(selector => {
					neighborhoodOptions.push({
						label: selector.Name,
						value: selector.Id,
						cityId: selector.City_Id,
					});
				})
				
				// const selectedCity = neighborhoodOptions.find(city => city.label === "Florianópolis");
				console.log(neighborhoodOptions);
				this.setState({neighborhoodOptions});
		});

		axios.get("http://localhost:5000/api/ages")
			.then( resp => {
				const ageRangeData = resp.data;
				const ageRangeOptions = [];
				ageRangeData.forEach(selector => {
					ageRangeOptions.push({
						label: selector.Age,
						value: selector.Id,
					});
				})
				
				// const selectedCity = ageRangeOptions.find(city => city.label === "Florianópolis");
				console.log(ageRangeOptions);
				this.setState({ageRangeOptions});
		});
	};
	render() {
		const { selectedCity, selectedNeighborhood, selectedAgeRange } = this.state;
		return (
			<div className="container mt-4" style={{border: "1px solid rgba(29, 165, 132, 0.9)", alignItems: "center", borderBlockColor: "rgba(29, 165, 132, 0.9)", borderRadius: "10px", justifyItems: "center"}}>
				<b style={{color: "#193148"}}>Filtros</b>
				<div className="row mx-5 mb-2">
					<div style={{alignContent: "center"}} className="col">
						<label htmlFor="City">Município:</label>
						<Select
      						value={selectedCity}
        					onChange={this.handleCityChange}
        					options={this.state.cityOptions}
      					/>
					</div>
					<div style={{alignContent: "center"}} className="col">
						<label htmlFor="City">Bairro:</label>
						<Select
							value={selectedNeighborhood}
							onChange={this.handleNeighborhoodChange}
							options={this.state.neighborhoodOptions}
						/>
					</div>
					<div style={{alignContent: "center"}} className="col">
						<label htmlFor="City">Faixa Etária:</label>
						<Select
							name="Name"
      						value={selectedAgeRange}
        					onChange={this.handleAgeRangeChange}
        					options={this.state.ageRangeOptions}
      					/>
					</div>
				</div>
			</div>
		);
	}
}
 
export default Filters;