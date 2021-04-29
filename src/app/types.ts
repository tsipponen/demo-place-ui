
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
    name?: any;
    source_type?: any;
    info_url?: any;
    modified_at?: any;
    location?: any;
    description?: any;
    tags?: any;
    opening_hours?: any;
    openinghours_exception?: any;
}
export type Tags = {
    any: any;
}


