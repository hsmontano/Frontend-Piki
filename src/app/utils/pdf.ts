import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Injectable()
export class PDF {

  public async exportAsPDFFile( docDefinition : {}, PDFFileName: string ) {
    await pdfMake.createPdf( docDefinition ).download( PDFFileName );
    /* var win = window.open('', '_blank');
    await pdfMake.createPdf( docDefinition ).open({}, win); */
  }

}