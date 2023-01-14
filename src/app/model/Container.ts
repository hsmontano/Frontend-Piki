import { ContainerType } from "./ContainerType";
import { ShiftManagement } from "./ShiftManagement";

export class Container {
    code: string;
    shift: ShiftManagement;
    status: string;
    containerType: ContainerType;
}