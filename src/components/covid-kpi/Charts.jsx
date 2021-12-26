import React, {Component} from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

class Chart extends Component {
    render() { 
        const { data } = this.props;
        return(
            <LineChart width={600} height={500} data={data}>
              <XAxis dataKey="Date"/>
              <YAxis/>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
              <Line type="monotone" dataKey="Notifications" stroke="#8884d8" />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        );
    }
}
 
export default Chart;