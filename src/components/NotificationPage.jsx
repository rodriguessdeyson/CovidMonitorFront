import React, { Component } from "react";
import Select from 'react-select';
import axios from "axios";

class NotificationPage extends Component {
	state = {
		selectedNeighborhood: null,
		selectedAgeRange: null,
		selectedHealthFacility: null,
		selectedCovidTest: null,
		selectedGender: null,
		selectedRace: null,
		selectedClinical: null,
		selectedSymptons: null,
		postSuccess:"",
		selectedFinalClassification: null,
		cityOptions: [],
		neighborhoodOptions: [],
		ageRangeOptions: [],
		healthFacilityOptions: [],
		covidTestsOptions: [],
		genderOptions: [],
		raceOptions: [],
		clinicalOptions: [
			{label: "Doenças Pulmonares",    value: {idx: 1, value: true}},
			{label: "Doenças Cardíacas",     value: {idx: 2, value: true}},
			{label: "Doenças Renais",        value: {idx: 3, value: true}},
			{label: "Diabetes",              value: {idx: 4, value: true}},
			{label: "Imunossupressão",       value: {idx: 5, value: true}},
			{label: "Gravidez de Risco",     value: {idx: 6, value: true}},
			{label: "Desordem Cromossômica", value: {idx: 7, value: true}},

		],
		symptonsOptions: [
			{label: "Dor de Garganta", value: {idx: 1, value: true}},
			{label: "Dispinéia",       value: {idx: 2, value: true}},
			{label: "Febre",           value: {idx: 3, value: true}},
			{label: "Tosse",           value: {idx: 4, value: true}},
			{label: "Outras",          value: {idx: 5, value: true}},
		],
		finalClassificationOptions: [
			{label: "Descartado",                        value: "DESCARTADO"},
			{label: "Confirmado Laboratorial",           value: "CONFIRMADO LABORATORIAL"},
			{label: "Não Informado",                     value: "NÃO INFORMADO"},
			{label: "Confirmado Clínico-Epidemiológico", value: "CONFIRMACAO CLINICO-EPIDEMIOLOGICO"},
		],

	  };

	handleNeighborhoodChange = selectedNeighborhood => {
		this.setState({ selectedNeighborhood });
		console.log(`Option selected:`, selectedNeighborhood);
	};

	handleAgeRangeChange = selectedAgeRange => {
		this.setState({ selectedAgeRange });
		console.log(`Option selected:`, selectedAgeRange);
	};

	handleHealthFacilityChange = selectedHealthFacility => {
		this.setState({ selectedHealthFacility });
		console.log(`Option selected:`, selectedHealthFacility);
	};

	handlecovidTestChange = selectedCovidTest => {
		this.setState({ selectedCovidTest });
		console.log(`Option selected:`, selectedCovidTest);
	};

	handleGenderChange = selectedGender => {
		this.setState({ selectedGender });
		console.log(`Option selected:`, selectedGender);
	};

	handleRaceChange = selectedRace => {
		this.setState({ selectedRace });
		console.log(`Option selected:`, selectedRace);
	};

	handleClinicalChange = selectedClinical => {
		this.setState({ selectedClinical });
	console.log(`Option selected:`, selectedClinical);
	  };

	handleSymptonsChange = selectedSymptons => {
		this.setState({ selectedSymptons });
		console.log(`Option selected:`, selectedSymptons);
	};

	handleFinalClassificationChange = selectedFinalClassification => {
		this.setState({ selectedFinalClassification });
		console.log(`Option selected:`, selectedFinalClassification);
	};

	onFormSubmit = this.onFormSubmit.bind(this)
	onChange = this.onChange.bind(this)
	fileUpload = this.fileUpload.bind(this)

	onFormSubmit(e) {
		e.preventDefault() // Stop form submit
		this.fileUpload(this.state.file).then((response)=>{
		  console.log(response.data);
		})
	  };
	
	onChange(e) {
		this.setState({file:e.target.files[0]})
	};
	
	fileUpload(file) {
		const url = 'http://localhost:5000/api/covid/bulkinsert';
		const formData = new FormData();
		formData.append('covidData', file)
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		}
		return axios.post(url, formData,config)
	}
	
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

		axios.get("http://localhost:5000/api/healthfacilities")
			.then( resp => {
				const healthFacilitiesData = resp.data;
				const healthFacilityOptions = [];
				healthFacilitiesData.forEach(selector => {
					healthFacilityOptions.push({
						label: selector.Name,
						value: selector.Id,
						neighborhoodId: selector.Neighborhood_Id
					});
				})

				// const selectedCity = healthFacilityOptions.find(city => city.label === "Florianópolis");
				console.log(healthFacilityOptions);
				this.setState({healthFacilityOptions});
		});

		axios.get("http://localhost:5000/api/covidtests")
			.then( resp => {
				const covidTestsData = resp.data;
				const covidTestsOptions = [];
				covidTestsData.forEach(selector => {
					covidTestsOptions.push({
						label: selector.Name,
						value: selector.Id,
					});
				})

				// const selectedCity = covidTestsOptions.find(city => city.label === "Florianópolis");
				console.log(covidTestsOptions);
				this.setState({covidTestsOptions});
		});

		axios.get("http://localhost:5000/api/genders")
			.then( resp => {
				const genderData = resp.data;
				const genderOptions = [];
				genderData.forEach(selector => {
					genderOptions.push({
						label: selector.Gender,
						value: selector.Id,
					});
				})

				// const selectedCity = genderOptions.find(city => city.label === "Florianópolis");
				console.log(genderOptions);
				this.setState({genderOptions});
		});

		axios.get("http://localhost:5000/api/races")
			.then( resp => {
				const raceData = resp.data;
				const raceOptions = [];
				raceData.forEach(selector => {
					raceOptions.push({
						label: selector.Race,
						value: selector.Id,
					});
				})

				// const selectedCity = raceOptions.find(city => city.label === "Florianópolis");
				console.log(raceOptions);
				this.setState({raceOptions});
		});
	};
	render() {
		const { selectedNeighborhood, selectedAgeRange,
			selectedHealthFacility, selectedCovidTest, selectedGender,
			selectedRace, selectedClinical, selectedSymptons, selectedFinalClassification} = this.state;
		return (
			<div>
				<div className="container mt-3" style={{border: "1px solid rgba(29, 165, 132, 0.9)", alignItems: "center", borderBlockColor: "rgba(29, 165, 132, 0.9)", borderRadius: "10px", justifyItems: "center"}}>
					<div className="mt-2">
						<b className="mt-2" style={{ color: "#193148", fontWeight:"700", lineHeight:"22px", fontSize:"24.59px"}}>
							Notificações de Casos
						</b>
					</div>
					<div className="mt-4">
						<h6 style={{color: "#193148"}}>Abaixo é possivel realizar a inserção de notificações individuais de casos.</h6>
					</div>
					<div className="container mt-4">
						<form>
							<div className="row mt-2" style={{border: "1px solid rgba(29, 165, 132, 0.9)", alignItems: "center", borderBlockColor: "rgba(29, 165, 132, 0.9)", borderRadius: "10px", justifyItems: "center"}}>
								<b className="mt-2" style={{ color: "#193148", fontWeight:"700", lineHeight:"22px", fontSize:"24.59px"}}>
									Dados Gerais
								</b>
								<div className="row mt-2 mb-2">
									<div className="col">
										<label> Bairro da notificação:</label>
										<Select
											value={selectedNeighborhood}
											onChange={this.handleNeighborhoodChange}
											options={this.state.neighborhoodOptions}/>
									</div>
									<div className="col">
										<label> Posto de saúde de registro:</label>
										<Select
											value={selectedHealthFacility}
											onChange={this.handleHealthFacilityChange}
											options={this.state.healthFacilityOptions}/>
									</div>
								</div>
							</div>
							<div className="row mt-2" style={{border: "1px solid rgba(29, 165, 132, 0.9)", alignItems: "center", borderBlockColor: "rgba(29, 165, 132, 0.9)", borderRadius: "10px", justifyItems: "center"}}>
								<b className="mt-2" style={{ color: "#193148", fontWeight:"700", lineHeight:"22px", fontSize:"24.59px"}}>
									Dados do Paciente
								</b>
								<div className="row mt-2 mb-2">
									<div className="col">
										<label>Gênero:</label>
										<Select
											value={selectedGender}
											onChange={this.handleGenderChange}
											options={this.state.genderOptions}/>
									</div>
									<div className="col">
										<label>Faixa de Idade</label>
										<Select
											value={selectedAgeRange}
											onChange={this.handleAgeRangeChange}
											options={this.state.ageRangeOptions}/>
									</div>
									<div className="col">
										<label>Raça</label>
										<Select
											value={selectedRace}
											onChange={this.handleRaceChange}
											options={this.state.raceOptions}/>
									</div>
								</div>
								<div className="row mt-2 mb-2">
									<div className="col">
										<label>Dados Clínicos:</label>
										<Select
											value={selectedClinical}
											onChange={this.handleClinicalChange}
											isMulti={true}
											options={this.state.clinicalOptions}/>
									</div>
									<div className="col">
										<label>Sintomas:</label>
										<Select
											value={selectedSymptons}
											onChange={this.handleSymptonsChange}
											isMulti={true}
											multi
											options={this.state.symptonsOptions}/>
									</div>
									<div className="col">
										<label>Testes de COVID:</label>
										<Select
											value={selectedCovidTest}
											onChange={this.handlecovidTestChange}
											options={this.state.covidTestsOptions}/>
									</div>
								</div>
							</div>
							<div className="row mt-2" style={{border: "1px solid rgba(29, 165, 132, 0.9)", alignItems: "center", borderBlockColor: "rgba(29, 165, 132, 0.9)", borderRadius: "10px", justifyItems: "center"}}>
								<b className="mt-2" style={{ color: "#193148", fontWeight:"700", lineHeight:"22px", fontSize:"24.59px"}}>
									Status da Notificação
								</b>
								<div className="row mt-2 mb-2">
									<div className="col pt-3">
										<label>Data de abertura:</label>
										<input className="mx-2" type="date" />
									</div>
									<div className="col">
										<div className="col pt-3">
											<label>Data do primeiro sintomas:</label>
											<input className="mx-2" type="date" />
										</div>
									</div>
									<div className="col">
										<div className="col pt-3">
											<label>Data do exame de COVID:</label>
											<input className="mx-2" type="date" />
										</div>
									</div>
								</div>
								<div className="row mt-4 mn-2" style={{justifyjustifyContentItems: "center"}}>
									<span>Estado do Paciente:</span>
									<div className="col">
										<input className="mx-2" type="checkbox" />
										<label className="mx-2" >Internado</label>
										<input className="mx-2" type="checkbox" />
										<label className="mx-2" >Em Recuperação</label>
										<input className="mx-2" type="checkbox" />
										<label className="mx-2">Em UTI</label>
										<input className="mx-2" type="checkbox" />
										<label className="mx-2">Recuperado</label>
									</div>
									<div className="col">
										<label>Data de Encerramento:</label>
										<input className="mx-2" type="date" />
									</div>
								</div>
								<div className="row mt-4 mb-2" style={{justifyjustifyContentItems: "center"}}>
									<div className="col">
										<label>Classificação Final:</label>
										<Select
											value={selectedFinalClassification}
											onChange={this.handleFinalClassificationChange}
											options={this.state.finalClassificationOptions}/>
									</div>
								</div>
							</div>
							<input className="btn btn-primary mt-4 mb-2" type="submit" value="Enviar" />
						</form>
					</div>
				</div>
				<div className="container mt-3 mb-2" style={{border: "1px solid rgba(29, 165, 132, 0.9)", alignItems: "center", borderBlockColor: "rgba(29, 165, 132, 0.9)", borderRadius: "10px", justifyItems: "center"}}>
					<div className="mt-2">
						<b className="mt-2" style={{ color: "#193148", fontWeight:"700", lineHeight:"22px", fontSize:"24.59px"}}>
							Notificações de Casos por Arquivo
						</b>
					</div>
					<div className="mt-4">
						<h6 style={{color: "#193148"}}>Abaixo é possivel realizar a inserção de notificações por meio de arquivos .csv pré-formatado.</h6>
					</div>
					<form onSubmit={this.onFormSubmit}>
						<div className="row">
							<input type="file" name="covid-bulk" accept=".csv" onChange={this.onChange} />
						</div>
						<input className="btn btn-primary mt-4 mb-2" name="covid-bulk" type="submit" value="Enviar" />
					</form>
				</div>
			</div>
		);
	}
}

export default NotificationPage;