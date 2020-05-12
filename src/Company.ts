import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  };

  markerContent(): string {
    return `
      <div>
        <h3>Company: ${this.companyName}</h3>
        Catchphrase: ${this.catchPhrase}
        <br/>
        <br/>
        Latitude: ${this.location.lat}
        Longitude: ${this.location.lng}
      </div>
    `;
  }
}