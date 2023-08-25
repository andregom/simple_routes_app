import { DirectionsResponseData } from '@googlemaps/google-maps-services-js';
import { Route } from '@prisma/client';

export class RouteSerializer implements Omit<Route, 'directions'> {
  id: string;
  name: string;
  source: { name: string } & { location: { lat: number; lng: number } };
  destiny: { name: string } & { location: { lat: number; lng: number } };
  distance: number;
  duration: number;
  directions: DirectionsResponseData & { request: any };
  created_at: Date;
  updeted_at: Date;

  constructor(route: Route) {
    this.id = route.id;
    this.name = route.name;
    this.source = route.source;
    this.destiny = route.destiny;
    this.distance = route.distance;
    this.duration = route.duration;
    this.directions = JSON.parse(route.directions as string);
    this.created_at = route.created_at;
    this.updeted_at = route.updeted_at;
  }
}
