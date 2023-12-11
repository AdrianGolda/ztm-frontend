export type DelayRow = {
    id: string;
    routeId: string;
    theoreticalTime: string;
    delayInSeconds: number;
}

export type DelayResponse = {
    "id": string
    "delayInSeconds": number
    "estimatedTime": string
    "headsign": "Oliwa",
    "routeId": number
    "theoreticalTime": string
}

export type SingleUserStopResponse = {
    "stopId": number
    "stopCode": string
    "stopName": string
    "stopShortName": string;
    "stopDesc": string;
    "delay": DelayResponse[]
}

export type SingleStopType = {
    title: string;
    rows: DelayRow[];
}



