// Importar Express
const express = require('express');
const app = express();

// Puerto del servidor
const PORT = 3000;

// Datos de estudiantes 
const students = [
  {
    id: "1",
    name: "Sebastian",
    lastName: "Quintero",
    email: "sebastianquve@unisabana.edu.co",
    universityId: "0000280492"
  },
];

// Endpoint dinámico: /user-info/:id
app.get('/user-info/:id', (req, res) => {
  const { id } = req.params;

  // Validar que el ID es un número positivo
  if (!/^\d+$/.test(id)) {
    return res.status(400).json({ error: "El ID debe ser un número válido." });
  }

  // Buscar al estudiante por id
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ error: "Estudiante no encontrado." });
  }

  // Retornar el objeto con la estructura solicitada
  res.json({
    name: student.name,
    lastName: student.lastName,
    email: student.email,
    id: student.universityId
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
