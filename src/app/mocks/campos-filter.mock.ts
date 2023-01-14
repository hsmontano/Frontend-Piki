export const CamposFilterMock = (): any[] => {
    return [
        { item_id: 1, item_text: 'TURNO DIARIO' },
        { item_id: 2, item_text: 'CONSECUTIVO' },
        { item_id: 3, item_text: 'CONDUCTOR O EMPRESA' },
        { item_id: 4, item_text: 'CC O NIT' },
        { item_id: 5, item_text: 'PLACA' },
        { item_id: 6, item_text: 'CONTENEDORES' },
        { item_id: 8, item_text: 'TIPO/TAMAÑO' },
        { item_id: 9, item_text: 'LINEA' },
        { item_id: 10, item_text: 'DEVOLUCION' },
        { item_id: 11, item_text: 'INGRESO' },
        { item_id: 12, item_text: 'PATIO' }
    ]
}

export const ConvertirDatos = {
    "TURNO DIARIO": "dayShift",
    "CONSECUTIVO": "globalShift",
    "CONDUCTOR O EMPRESA": "name",
    "CC O NIT": "identification",
    "PLACA": "vehicle_plate",
    "LINEA": "description",
    "DEVOLUCION": "date",
    "INGRESO": "createdAt",
    "PATIO": "description",
    "CONTENEDORES": "code",
    "TIPO/TAMAÑO": "description"
}