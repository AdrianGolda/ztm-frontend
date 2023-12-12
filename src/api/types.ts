export type DelayRow = {
    id: string;
    routeId: number;
    estimatedTime: string;
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

export type SingleStop = {
    "stopId": number
    "stopCode": string
    "stopName": string
    "stopShortName": string;
    "stopDesc": string;
}

export type SingleUserStopResponse = SingleStop & {
    "delay": DelayResponse[]
}

export type SingleStopType = {
    title: string;
    rows: DelayRow[];
}

export type AllStopsResponse = {}



