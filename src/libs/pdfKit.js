//import PDFDocument from "pdfkit";
import PDFDocument from "pdfkit-table";

export function createPdf(dataCallback, endCallback) {
  const doc = new PDFDocument();
  doc.on("data", dataCallback); //cuando este recibiendo datos
  doc.on("end", endCallback); //Cuanto termine de recibir datos

  doc.text("Hola mundo");
  doc.fontSize(25).text("Hola mundo con tamaño 25", 100, 100);
  doc
    .moveTo(0, 20) // set the current point
    .lineTo(100, 160) // draw a line
    .quadraticCurveTo(130, 200, 150, 120) // draw a quadratic curve
    .bezierCurveTo(190, -40, 200, 200, 300, 150) // draw a bezier curve
    .lineTo(400, 90) // draw another line
    .stroke();

  // -----------------------------------------------------------------------------------------------------
  // Simple Table with Array
  // -----------------------------------------------------------------------------------------------------
  const tableArray = {
    headers: ["Country", "Conversion rate", "Trend"],
    rows: [
      ["Switzerland", "12%", "+1.12%"],
      ["France", "67%", "-0.98%"],
      ["England", "33%", "+4.44%"],
    ],
  };
  doc.table(tableArray, { width: 500 }); // A4 595.28 x 841.89 (portrait) (about width sizes)

  doc.end();
}
