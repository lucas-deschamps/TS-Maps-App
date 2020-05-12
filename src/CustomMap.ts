export interface Mappable {
  location: {
    lat: number;
    lng: number;
  }

  markerContent(): string;
};

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  };

  addMarker(obj: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: obj.location.lat,
        lng: obj.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: obj.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  };
}