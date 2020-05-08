import { User } from './User';
import { Company } from './Company';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const map = document.getElementById("map") as HTMLElement;

new google.maps.Map(map, {
  zoom: 3,
  center: {
    lat: 0,
    lng: 0
  }
});