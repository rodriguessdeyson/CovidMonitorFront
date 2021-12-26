import React, { Component } from "react";
import DataTable from 'react-data-table-component';

class NotificationsTable extends Component {
	render() { 
		const columns = [
			{
				name: 'Data de Abertura',
				selector: row => row.title,
			},
			{
				name: 'Year',
				selector: row => row.year,
			},
		];
		
		const data = [
			{
				id: 1,
				title: 'Beetlejuice',
				year: '1988',
			},
			{
				id: 2,
				title: 'Ghostbusters',
				year: '1984',
			},
		];
		return (
			<div>
				<DataTable
					columns={columns}
					data={data}
				/>
			</div>
		);
	}
}
 
export default NotificationsTable;