import KpiConfirmed from "./covid-kpi/confirmed-notifications/KpiConfirmed";
import KpiGeneralData from "./covid-kpi/covid-data/KpiGeneralData";
import React, { Component } from "react";
import Chart from "./covid-kpi/Charts";
import Filters from "./Filters";
import RegionCases from "./covid-kpi/RegionCases";
import axios from "axios";

class Home extends Component {
	state = {
		neighCases:            [],
		neighDeaths:           [],
		notificationsByDate:   [],
		neighborhoodData:      [],
		ageRangeData:          [],
		cityCasesData:         [],
		neighborhoodCasesData: [],
		selectedCity:          "",
		selectedNeighborhood:  "",
		selectedAgeRange:      "",
	};
	componentDidMount()
	{
		axios.get("http://localhost:5000/api/covid/neighcases")
			.then( resp => {
				const neighCases = resp.data[0][0][0];
				console.log(neighCases);
				this.setState({neighCases});
		});
		axios.get("http://localhost:5000/api/covid/neighdeaths")
			.then( resp => {
				const neighDeaths = resp.data[0][0][0];
				console.log(neighDeaths);
				this.setState({neighDeaths});
		});
		axios.get("http://localhost:5000/api/covid/notificationsdates")
			.then( resp => {
				const data = resp.data[0][0];
				const notificationsByDate = [];
				data.forEach(element => {
					notificationsByDate.push({
						Notifications: element.Notifications,
						Date: element.Date.split('T')[0],
					});
				});
				console.log(notificationsByDate);
				this.setState({notificationsByDate});
		});
	}
	render() {
		const {neighCases, neighDeaths, notificationsByDate} = this.state;
		return (
		   <div>
				<div className="container mt-3" style={{border: "1px solid rgba(29, 165, 132, 0.9)", alignItems: "center", borderBlockColor: "rgba(29, 165, 132, 0.9)", borderRadius: "10px", justifyItems: "center"}}>
					<div className="mt-2">
						<b style={{ color: "#193148", fontWeight:"700", lineHeight:"22px", fontSize:"24.59px"}}>
							Painel Coronavírus
						</b>
					</div>
					<div className="container mt-3">
						<b>Últimas Informações</b>
			   <div className="row">
					<div className="col">
						<RegionCases
						info={`Bairo com mais casos: ${neighCases.Name}`}
						caseValue={`Nº de casos: ${neighCases.Count}`}
						color="bg-warning"/>
					</div>
					<div className="col">
						<RegionCases
							info={`Bairo com mais óbitos: ${neighDeaths.Name}`}
							caseValue={`Nº de óbitos: ${neighDeaths.Count}`}
							color="bg-danger"/>
					</div>
				</div>
				</div>
					<Filters
						citiesOptions={this.state.citiesData}
					/>
					<div className="row mt-3">
					   <div className="col mx-2" style={{ alignItems: "center", height:"100%", justifyjustifyContentItems: "center"}}>
						   <h2 style={{textAlign: "center", color: "#193148"}}>Dados Gerais</h2>
						   <div className="row mt-2">
							   <div className="col">
								   <KpiGeneralData
										name="Notificações"
										value={25555}/>
								</div>
								<div className="col">
									<KpiGeneralData
										name="Descartado"
										value={25555}/>
								</div>
								<div className="col">
									<KpiGeneralData
										name="Em Análise"
										value="25555"/>
								</div>
								<div className="col">
									<KpiGeneralData
										name="Confirmado"
										value="25555"/>
								</div>
							</div>
						</div>
						<div className="col mx-2"  style={{ alignItems: "center", height:"100%", justifyjustifyContentItems: "center"}}>
							<h2 style={{textAlign: "center", color: "#193148"}}>Casos Confirmados</h2>
							<div className="row mt-2">
								<div className="col">
									<KpiConfirmed
										name="Ativos"
										value="25555"/>
								</div>
								<div className="col">
									<KpiConfirmed
										name="Internados"
										value="25555"/>
								</div>
								<div className="col">
									<KpiConfirmed
										name="Recuperados"
										value="25555"/>
								</div>
								<div className="col">
									<KpiConfirmed
										name="Óbitos"
										value="25555"/>
								</div>
							</div>
						</div>
					</div>
					<div style={{justifyjustifyContentItems: "center", alignItems: "center"}} className="row mt-4">
						<div className="row">
							<div className="col">
								<Chart
									data={notificationsByDate}
								/>
							</div>
							<div className="col">
								<Chart/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default Home;