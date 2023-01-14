import { Container } from "./Container";
import { Client } from "./Client";
import { ContainerYard } from "./ContainerYard";
import { Driver } from "./Driver";
import { ShiftClass } from "./ShiftClass";
import { TransLine } from "./TransLine";

export class ShiftManagement {
    id: number;
    date: string;
    price: number;
    dayShift: number;
    globalShift: number;
    obvs: string;
    status: string;
    client: Client;
    containerYard: ContainerYard;
    driver: Driver;
    shiftClass: ShiftClass;
    transLine: TransLine;
    containers: Array<Container> = [];
}