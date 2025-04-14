import express from "express";
import cors from "cors";
import routeAuth from "./routes/auth.js";

const app = express();
const PORT = 3000;
//JSON
app.use(express.json());
//Evitar errores cuando el servidor esta en la misma maquina
app.use(cors());

// Rutas
app.use("/api", routeAuth);

app.get("/", async (req, res) => {
  res.send("El servidor a sido iniciado correctamente");
});

// Start
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
