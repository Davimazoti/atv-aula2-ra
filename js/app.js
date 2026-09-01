// Controla o overlay de instrução e registra os eventos de tracking do MindAR

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const target = document.getElementById("target");

  // Disparado quando o MindAR reconhece o cartão (detecção)
  target.addEventListener("targetFound", () => {
    overlay.style.display = "none";
    console.log("[RA] Target encontrado:", new Date().toLocaleTimeString());
  });

  // Disparado quando o MindAR perde o rastreamento do cartão
  target.addEventListener("targetLost", () => {
    overlay.style.display = "block";
    console.log("[RA] Target perdido:", new Date().toLocaleTimeString());
  });
});