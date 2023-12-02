import { Router } from "express";
import { createPdf } from "../libs/pdfKit.js";

const router = Router();

router.get("/invoice", (req, res) => {
  const stream = res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": 'attachment; filename="invoice.pdf"',
  });

  createPdf(
    (data) => {
      stream.write(data); //A medida que se reciben datos se van escribiendo en el stream
    },
    () => {
      stream.end(); //Cuando termina de recibir datos se cierra el stream
    }
  );
  res.send("Hello World!");
});

export default router;
