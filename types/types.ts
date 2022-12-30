export enum Gender {
    Female = "Female",
    Male = "Male",
    Genderless = "Genderless",
    Unknown = "unknown",
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}

export interface Info {
    count: number;
    pages: number;
    next: string;
    prev: null;
}

export interface Character {
    id: number;
    name: string;
    status: Status;
    species: Species;
    type: string;
    gender: Gender;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

export interface GetCharacterResults {
    info: Info;
    results: Character[];
}

export interface OtherCharactersResults {
    results: Character[]
}

export interface Location {
    name: string;
    url: string
}

export interface LocationType {
    id: number;
    name: string;
    dimension: string;
    type: string;
    url: string;
    created: Date;
    residents: string[];
}

export interface FilterProps {
    datas: Character[];
    filtered: Character[];
    allCharacters: Character[];
    status: string;
    setFiltered: (value: Character[]) => void
    setStatus: (value: string) => void
    setPageNumber: (value: number) => void
}