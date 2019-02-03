// https://bootstrap.build/app/v4.1.1/
// Palette colors: https://coolors.co/app
import "../bootstrap.min.css";

import React, { Component } from "react";
import moment from "moment";
import { Button, Badge, Row, Col } from "reactstrap";
import { Button as StyledButton } from "../styled/Button";
import { ContainerStyled } from "../styled/Container";
import {
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  FormText,
  CustomInput,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from "reactstrap";

import {
  Breadcrumb as StyledBreadcrumb,
  BreadcrumbItem
} from "../styled/Breadcrumb";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this._onPressButton = this._onPressButton.bind(this);
    this.state = {
      sensorData: [{id:0,temp:0,humid:0,moist:0,dateInserted:''}]
    };
  }
  handleChange(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      <ContainerStyled>
        <Table>
          <thead><tr><th>ID</th><th>Temperature</th><th>Humidity</th><th>Moisture</th><th>Date/Time</th></tr></thead>
          <tbody>{this.state.sensorData.map(row => { return <tr><td>{row.id}</td><td>{row.temp}</td><td>{row.humid}</td><td>{row.moist}</td><td>{moment(row.dateInserted).fromNow()}</td> </tr> })}</tbody>
        </Table>
        <Button color="primary" outline onClick={this._onPressButton.bind(this)}>
          Refresh
        </Button>
      </ContainerStyled>
    );
  }
  _onPressButton() {
    // var data = [{"id":1,"temp":66.74,"humid":25.30,"hindex":64.30,"mraw":1024.00,"moist":3.08,"dateInserted":"2019-01-28T18:10:50.727"},{"id":2,"temp":64.40,"humid":30.10,"hindex":61.95,"mraw":1024.00,"moist":3.08,"dateInserted":"2019-01-28T21:43:29.263"},{"id":3,"temp":64.76,"humid":23.70,"hindex":62.05,"mraw":1024.00,"moist":3.08,"dateInserted":"2019-01-29T05:44:18.423"},{"id":4,"temp":65.84,"humid":19.60,"hindex":63.05,"mraw":1024.00,"moist":3.08,"dateInserted":"2019-01-29T22:15:42.08"},{"id":5,"temp":58.82,"humid":27.90,"hindex":55.71,"mraw":423.00,"moist":1.27,"dateInserted":"2019-01-29T22:25:51.66"},{"id":6,"temp":57.74,"humid":20.80,"hindex":54.19,"mraw":600.00,"moist":1.80,"dateInserted":"2019-01-30T05:31:51.077"},{"id":7,"temp":61.34,"humid":19.30,"hindex":58.08,"mraw":605.00,"moist":1.82,"dateInserted":"2019-01-30T11:53:38.7"},{"id":8,"temp":58.82,"humid":20.70,"hindex":55.37,"mraw":615.00,"moist":1.85,"dateInserted":"2019-01-30T14:18:45.623"}];
    // this.setState({
    //   sensorData: data
    // });
    fetch('http://stepwithoutfeet.com/api/sensors')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          sensorData: responseJson.reverse()
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default App;
