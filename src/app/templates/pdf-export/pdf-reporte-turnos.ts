import * as moment from "moment";
moment.locale('es')

export const pdfReporteTurnosTemplate = async (turnos : any[], campos: any[], info: any, filter: any) : Promise<any> => {
    let filterData : any;

    if (!info['carretera']) info['carretera'] = { count: 0, price: 0 }
    if (!info['urbanero']) info['urbanero'] = { count: 0, price: 0 }
    if (!info['exportacion']) info['exportacion'] = { count: 0, price: 0 }
    if (!info['reposiciones']) info['reposiciones'] = { count: 0, price: 0 }
    if (!info['reenturnados']) info['reenturnados'] = { count: 0, price: 0 }

    const formatter = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    })

    let table = []
    let widthsTable = []
    const options = (campos.length<11) ? '*' : 'auto';
    const headerTable = campos.map(row => {
        widthsTable.push(options)
        return {text: row, style: 'headerTableData'}
    })
    table.push(headerTable)
    turnos.map( turno => {
        let campoData = campos.map( c => {
            return {text: turno[c]}
        })
        table.push(campoData)
    })

    if (filter.fechaIni || filter.fechaFin || filter.clase.length || filter.patio.length || filter.linea.length || filter.cliente.length || filter.tipoTamanioContenedor.length) {
        let filterTable = [];
        if (filter.fechaIni) filterTable.push([{text: 'FECHA', style: 'tableFilter', margin: [20, 0]}, {text: `${moment(filter.fechaIni).format('LL')} ${(filter.fechaFin) ? ' - '+moment(filter.fechaFin).format('LL'): ''}`, alignment: 'center'} ])
        if (filter.clase.length) filterTable.push([{text: 'CLASE', style: 'tableFilter', margin: [20, 0]}, {text: filter.clase[0].item_text, alignment: 'center'} ])
        if (filter.patio.length) filterTable.push([{text: 'PATIO', style: 'tableFilter', margin: [20, 0]}, {text: filter.patio[0].item_text, alignment: 'center'} ])
        if (filter.linea.length) filterTable.push([{text: 'LINEA', style: 'tableFilter', margin: [20, 0]}, {text: filter.linea[0].item_text, alignment: 'center'} ])
        if (filter.cliente.length) filterTable.push([{text: 'CLASE', style: 'tableFilter', margin: [20, 0]}, {text: filter.cliente[0].item_text, alignment: 'center'} ])
        if (filter.tipoTamanioContenedor.length) filterTable.push([{text: 'CLASE', style: 'tableFilter', margin: [20, 0]}, {text: filter.tipoTamanioContenedor[0].item_text, alignment: 'center'} ])
        
        filterData = {
            table: {                    
                widths: ['auto', '*'],
                body: filterTable
            },
            margin: [0, 25, 0, 0]
        }
    }

    return {
        footer: function(currentPage, pageCount) { return {
            columns: [
                {text: 'DIRECCIÓN: VIA ALTERNA KM-7 CALLE 15A # 47 BIS - 11 - BUENAVENTURA', style: 'footer'},
                {text: 'PÁGINA ' + currentPage.toString() + ' DE ' + pageCount, alignment: 'right', style: 'footer'}
            ], margin: [20, 3, 20, 0]
        }},
        pageSize: 'legal',
        pageMargins: [ 20, 20, 20, 25 ],
        pageOrientation: 'landscape',
        content: [
            { 
                image: 'data:image/png;base64,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',
                alignment: 'center'
            },
            {
                text: '"PIKI7 SAS"', fontSize: 12, bold: true, alignment: 'center'
            },
            {
                text: 'NIT. 900.368.831-9', fontSize: 10, alignment: 'center'
            },
            filterData,
            {text: (filter.titulo) ? filter.titulo.toUpperCase() : 'PLANILLA DE ENTURNAMIENTO', alignment: 'center', fontSize: 14, bold: true, margin: [0, 18, 0, 18]},
            {
                style: 'tableContent',
                table: {                    
                    widths: widthsTable,                    
                    headerRows: 1,
                    body: table
                },
                layout: {
                    fillColor: function (rowIndex, node, columnIndex) {
                        return (rowIndex % 2 === 0) ? '#EEEEEE' : null;
                    }
                },
                margin: [ 0, 0, 0, 30 ]
            },
            {text: 'RESUMEN ESTADISTICO', alignment: 'center', fontSize: 12, bold: true, margin: [ 0, 70, 0, 20 ]},
            {
                style: 'tableContent',
                table: {                    
                    widths: ['*', 'auto', 'auto'],
                    body: [
                        [{text: 'DETALLE', alignment: 'right', bold: true, fillColor:'#95A5A6', margin: [10, 0]}, {text: 'CANTIDADES', style: 'headerTableStatistical'}, {text: 'PRECIOS', style: 'headerTableStatistical'}],
                        [{text: 'TURNOS TIPOS CARRETERA', alignment: 'right', bold: true, margin: [10, 0]}, {text: `${info['carretera'].count} tuno(s)`, alignment: 'center', margin: [25, 0]}, {text: `${formatter.format(info['carretera'].price)} COP`, alignment: 'center', margin: [25, 0]}],
                        [{text: 'TURNOS TIPOS URBANERO', alignment: 'right', bold: true, margin: [10, 0]}, {text: `${info['urbanero'].count} tuno(s)`, alignment: 'center', margin: [25, 0]}, {text: `${formatter.format(info['urbanero'].price)} COP`, alignment: 'center', margin: [25, 0]}],
                        [{text: 'TURNOS TIPOS EXPORTACION', alignment: 'right', bold: true, margin: [10, 0]}, {text: `${info['exportacion'].count} tuno(s)`, alignment: 'center', margin: [25, 0]}, {text: `${formatter.format(info['exportacion'].price)} COP`, alignment: 'center', margin: [25, 0]}],
                        [{text: 'TURNOS TIPOS REPOSICIONES', alignment: 'right', bold: true, margin: [10, 0]}, {text: `${info['reposiciones'].count} tuno(s)`, alignment: 'center', margin: [25, 0]}, {text: `${formatter.format(info['reposiciones'].price)} COP`, alignment: 'center', margin: [25, 0]}],
                        [{text: 'REENTURNADOS', alignment: 'right', bold: true, margin: [10, 0]}, {text: `${info['reenturnados'].count} tuno(s)`, alignment: 'center', margin: [25, 0]}, {text: `${formatter.format(info['reenturnados'].price)} COP`, alignment: 'center', margin: [25, 0]}],
                        [{text: 'TOTAL', alignment: 'right', bold: true, margin: [10, 0]}, {text: `${(info['carretera'].count+info['urbanero'].count+info['exportacion'].count+info['reposiciones'].count+info['reenturnados'].count)} tuno(s)`, alignment: 'center', bold: true, margin: [25, 0]}, {text: `${formatter.format(info['carretera'].price+info['urbanero'].price+info['exportacion'].price+info['reposiciones'].price+info['reenturnados'].price)} COP`, alignment: 'center', bold: true, margin: [25, 0]}]
                    ]
                },
                layout: {
                    fillColor: function (rowIndex, node, columnIndex) {
                        return (rowIndex % 2 === 0) ? '#EEEEEE' : null;
                    }
                }
            },
        ],
        styles: {

            headerTableData: {
                bold: true,
                fillColor:'#95A5A6'
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
                fontSize: 10
            }
        }
    }
}