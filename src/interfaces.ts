export interface Place {
  name: string;
  url: string;
}

export interface Body {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
  origin: Place;
  location: Place;
  episode: number;
}

export interface Data {
  ok: boolean;
  e?: unknown;
  data?: Body;
};