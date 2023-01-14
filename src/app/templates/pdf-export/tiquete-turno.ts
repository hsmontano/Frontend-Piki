import * as moment from "moment";
moment.locale('es')

export const pdfTiqueteTurnosTemplate = async (info: any) : Promise<any> => {
    const formatter = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    })

    return {
        pageSize:  {
            width: 300,
            height: 'auto'
        },
        pageMargins: [ 20, 20, 20, 25 ],
        content: [
            { 
                image: 'data:image/jpeg;base64,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',
                alignment: 'center',
                width: 50,
                height: 50,
            },
            {
                text: '"PIKI7 SAS"', fontSize: 12, bold: true, alignment: 'center'
            },
            {
                text: 'NIT. 900.368.831-9', fontSize: 10, alignment: 'center'
            },
            {text: `Tiquete Turno #${info.dayShift}`, alignment: 'center', fontSize: 14, bold: true, margin: [0, 18, 0, 18]},
            {
                style: 'tableContent',   
                table: {              
                    widths: [150, 'auto'],
                    body: [
                        [
                            {
                                text: `${info.shiftClassId === 1 || info.shiftClassId === 3 || info.shiftClassId === 6 ? 'Nombre del conductor' : 'Nombre del empresa'}`, 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'left', 
                                bold: true, 
                            }, 
                            {
                                text: `${info.driver.name}`, 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'right'
                            }
                        ],
                        [
                            {
                                text: `${info.shiftClassId === 1 || info.shiftClassId === 3 || info.shiftClassId === 6 ? 'Documento del conductor' : 'Nit del empresa'}`, 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'left', 
                                bold: true, 
                            }, 
                            {
                                text: `${info.driver.identification}`, 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'right'
                            }
                        ],
                        [
                            {
                                text: `${info.shiftClassId === 1 || info.shiftClassId === 3 || info.shiftClassId === 6 ? 'Placa del vehiculo' : ''}`, 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'left', 
                                bold: true, 
                            }, 
                            {
                                text: `${info.shiftClassId === 1 || info.shiftClassId === 3 || info.shiftClassId === 6 ? info.driver.vehicle_plate : ''}`, 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'right'
                            }
                        ],
                        [
                            {
                                text: 'Contenedor 1', 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'left', 
                                bold: true, 
                            }, 
                            {
                                text: `${info.containers.length > 0 ? info.containers[0].code : 'N/A'}`, 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'right'
                            }
                        ],
                        [
                            {
                                text: 'Tipo de cont', 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'left', 
                                bold: true, 
                            }, 
                            {
                                text: `${info.containers.length > 0 ? info.containers[0].containerType.description : 'N/A'}`, 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'right'
                            }
                        ],
                        [
                            {
                                text: 'Contenedor 2', 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'left', 
                                bold: true, 
                            }, 
                            {
                                text: `${info.containers.length > 1 ? info.containers[1].code : 'N/A'}`, 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'right'
                            }
                        ],
                        [
                            {
                                text: 'Tipo de cont', 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'left', 
                                bold: true, 
                            }, 
                            {
                                text: `${info.containers.length > 1 ? info.containers[1].containerType.description : 'N/A'}`, 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'right'
                            }
                        ],
                        [
                            {
                                text: 'Fecha de despacho', 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'left', 
                                bold: true, 
                            }, 
                            {
                                text: `${moment(info.date).format('lll')}`, 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'right'
                            }
                        ],
                        [
                            {
                                text: 'Destino', 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'left', 
                                bold: true, 
                            }, 
                            {
                                text: `${info.containerYard.description}`, 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'right'
                            }
                        ],
                        [
                            {
                                text: `Observaciones: `, 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'left', 
                                bold: true, 
                            }, 
                            {
                                text: ``, 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'left'
                            }
                        ],
                        [
                            {
                                text: `${info.obvs}`, 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'left', 
                            }, 
                            {
                                text: ``, 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'left'
                            }
                        ],
                        [
                            {
                                text: 'TOTAL', 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'left', 
                                fontSize: 18,
                                margin: [0, 20],
                                bold: true, 
                            }, 
                            {
                                text: `${formatter.format(info.price)}`, 
							    borderColor: ['#fff', '#fff', '#fff', '#fff'],
                                alignment: 'right', 
                                margin: [0, 20],
                                fontSize: 18,
                                bold: true
                            }
                        ]
                    ]
                }
            },
        ],
        styles: {
            headerTableData: {
                bold: true,
                fillColor:'#95A5A6',
                borderColor:'#fff'
            },
            headerTableStatistical: {
                alignment: 'center',
                bold: true,
                fillColor:'#95A5A6',
                margin: [10, 0]
            },
            footer: {
                opacity: 0.4, 
                fontSize: 11, 
            },
            tableFilter: {
                bold: true,
            },
            tableContent: {
                fontSize: 10,
            }
        }
    }
}