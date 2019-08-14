import React, { Component } from "react";
import { InputNumber } from "antd";
import debounce from "lodash/debounce";
import { GeoServices } from "./geoCall";

class GeoCode extends Component {
  constructor(props) {
    super(props);
    this.handleGeoChange = debounce(this.handleGeoChange, 1000);
    this._geoService = new GeoServices();
  }

  handleGeoChange = e => {
    this._geoService
      .services("PIN_CODE", e)
      .then(res => {
        console.log(
          "City",
          res.data.results[0].address_components[1].long_name
        );
        console.log(
          "State",
          res.data.results[0].address_components[2].long_name
        );
        console.log(
          "Country",
          res.data.results[0].address_components[3].long_name
        );
        this.props.getDetails(
          res.data.results[0].address_components[1].long_name,
          res.data.results[0].address_components[3].long_name,
          res.data.results[0].address_components[4].long_name
        );
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <InputNumber
        placeholder="enter you pincode"
        // style={{
        //   marginTop: 10,
        //   width: 400
        // }}
        onChange={this.handleGeoChange}
        maxLength={6}
      />
    );
  }
}

export default GeoCode;
