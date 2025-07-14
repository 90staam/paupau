function mostrarDetalle(codigo) {
  const detalle = document.getElementById("detalle");
  let contenido = "";

  switch(codigo) {
    case "MAT0002":
      contenido = "<h2>Nivelación de Matemática</h2><p>Horas: 72<br>Bimestre: 1</p>";
      break;
    case "TDI002":
      contenido = "<h2>TIC Aplicadas a la Diversidad</h2><p>Horas: 54<br>Bimestre: 1</p>";
      break;
    case "CYR1006":
      contenido = "<h2>Comunicación y Redacción</h2><p>Horas: 54<br>Bimestre: 1</p>";
      break;
    default:
      contenido = "<p>Asignatura no encontrada.</p>";
  }

  detalle.innerHTML = contenido;
  detalle.style.display = "block";
}
