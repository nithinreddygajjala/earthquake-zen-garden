class Data {
    bbox: Array<Number>;
    features: Array<Feature>;
    metadata: Metadata;
    type: string;
}

class Geometry {
 coordinates: Array<Number>;
 type: string;
}

class Property {
    alert: string;
    cdi: Number;
    code: string;
    detail: string;
    dmin: Number;
    felt: Number;
    gap: Number;
    ids: string;
    mag: Number;
    magType: string;
    mmi: string;
    net: string;
    nst: Number;
    place: string;
    rms: Number;
    sig: Number;
    sources: string;
    status: string;
    time: Number;
    title: string;
    tsunami: Number;
    type: string;
    types: string;
    tz: Number;
    updated: Number;
    url: string;
}

class Feature {
    type: string;
    geometry: Geometry;
    id: string;
    properties: Property;
}

class Metadata {
    api: string;
    count: Number;
    generated: Number;
    status: Number;
    title: string;
    url: string;
}

export default Data;