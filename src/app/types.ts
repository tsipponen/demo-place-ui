
export type Place = {
    meta: Meta;
    data: Data[];
    tags: Tags;
}

export type Meta = {
    count: string;
    next: string;
}

export type Data = {
    id: string;
    name: Name;
    source_type: SourceType;
    info_url: string;
    modified_at: string;
    location: Location;
    description: Description;
    tags: any;
    opening_hours: OpeningHours;
    openinghours_exception: string;
}
export type Tags = {
    any: any;
}

export type Name = {
    fi: string;
    en: string;
    sv: string;
    zh: string;
}
export type SourceType = {
    id: number;
    name: string;
}

export type Location = {
    lat: number;
    lon: number;
    address: Address;
}

export type Address = {
    street_address: string;
    postal_code: string;
    locality: string;
}

export type Description = {
    intro: string;
    body: string;
    images: Image[];
}
export type Image = {
    url: string;
    copyright_holder: string;
    license_type: LicenseType;
}

export type LicenseType = {
    id: string;
    name: string;
}

export type OpeningHours = {
    hours: Hours[];
}
export type Hours = {
    weekday_id: number;
    opens: string;
    closes: string;
    open24h: boolean;
}