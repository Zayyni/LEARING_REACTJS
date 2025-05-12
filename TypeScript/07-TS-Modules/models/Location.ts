import { Coordinates } from "./Coordinates";
import { Street } from "./Street";
import { Timezone } from "./Timezone";

export interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number | string;
    coordinates: Coordinates;
    timezone: Timezone;
  }