import { ConvertirDatos } from "app/mocks/campos-filter.mock"
import * as moment from "moment"

export const tableReportesTemplate = async (turnos : any[], campos: string[]) : Promise<any> => {
    
    let info = {}
    // console.time('hola')
    /* 
    let arrayTurnos = []
    for (let j = 0; j < turnos.length; j++) {
        let datos = {}
        for (let i = 0; i < campos.length; i++) {
            if (campos[i] === "INGRESO") datos[campos[i]] = moment(turnos[j][ConvertirDatos[campos[i]]]).format('HH:mm:ss')
            else datos[campos[i]] = turnos[j][ConvertirDatos[campos[i]]]
        }
        arrayTurnos.push(datos)
    } */

    const arrayTurnos = turnos.map( turno => {
        let datos = {}

        if (turno['shiftClass']['name'] !== "reenturne carretera" && turno['shiftClass']['name'] !== "reenturne urbanero") {
            if (!info[turno['shiftClass']['name']]) info[turno['shiftClass']['name']] = {}
            info[turno['shiftClass']['name']]['price'] = (info[turno['shiftClass']['name']]['price'] || 0) + turno['price']
            info[turno['shiftClass']['name']]['count'] = (info[turno['shiftClass']['name']]['count'] || 0) + 1
        } else {
            if (!info['reenturnados']) info['reenturnados'] = {}
            info['reenturnados']['price'] = (info['reenturnados']['price'] || 0) + turno['price']
            info['reenturnados']['count'] = (info['reenturnados']['count'] || 0) + 1
        }

        campos.map( campo => {
            switch (campo) {
                case "INGRESO": datos[campo] = moment(turno[ConvertirDatos[campo]]).format('HH:mm:ss');
                    break;
                case "PLACA": datos[campo] = turno.driver[ConvertirDatos[campo]];
                    break;
                case "CONDUCTOR O EMPRESA": datos[campo] = (turno.driver[ConvertirDatos[campo]] || '')+(` - ${turno.client[ConvertirDatos[campo]]}`|| '');
                    break;
                case "CC O NIT": datos[campo] = (turno.driver[ConvertirDatos[campo]] || '')+(` - ${turno.client['nit']}`|| '');
                    break;
                case "LINEA": datos[campo] = turno.transLine[ConvertirDatos[campo]];
                    break;
                case "PATIO": datos[campo] = turno.containerYard[ConvertirDatos[campo]];
                    break;
                case "CONTENEDORES": 
                    datos['CONTENEDOR I'] = (turno.containers[0]) ? turno.containers[0][ConvertirDatos[campo]] : '';
                    datos['CONTENEDOR II'] = (turno.containers[1]) ? turno.containers[1][ConvertirDatos[campo]] : '';
                    break;
                case "TIPO/TAMAÑO":
                    datos['TIPO/TAMAÑO I'] = (turno.containers[0] && turno.containers[0].containerType) ? turno.containers[0].containerType[ConvertirDatos[campo]] : '';
                    datos['TIPO/TAMAÑO II'] = (turno.containers[1] && turno.containers[1].containerType) ? turno.containers[1].containerType[ConvertirDatos[campo]] : '';
                    break;
                default: datos[campo] = turno[ConvertirDatos[campo]]
                    break;
            }
        } )
        return datos;
    })
    // console.timeEnd('hola')
    

    return { arrayTurnos, info };
}

