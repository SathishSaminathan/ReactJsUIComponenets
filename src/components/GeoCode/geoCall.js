import axios from "axios";

export class GeoServices {
  services(type, value) {
    switch (type) {
      case "PIN_CODE":
        return axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${value}&sensor=true&key=AIzaSyAYN7GrjMbIJbK-qTddaNQ3R3_-9A-LsGo`
        );
      default:
        return;
    }
  }
}
