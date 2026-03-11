<script setup>

// ===========================================
// IMPORTACIÓN DE LOGOS
// ===========================================

import logoIzq from "../assets/logo-izquierda.png";
import logoDer from "../assets/logo-derecha.png";

// Decoraciones infantiles
import manzana from "../assets/decor/manzana.png";
import jugo from "../assets/decor/jugo.png";
import estrella from "../assets/decor/estrella.png";

// Iconos por día
import iconLunes from "../assets/decor/lunes.png";
import iconMartes from "../assets/decor/martes.png";
import iconMiercoles from "../assets/decor/mirc.png";
import iconJueves from "../assets/decor/Jueves.png";
import iconViernes from "../assets/decor/viernes.png";

// Librerías para generar PDF
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// API de Vue
import { ref } from "vue";

// ===========================================
// DEFINICIÓN DE PROPS (CORRECTO)
// ===========================================

// ⚠️ Aquí destructuramos directamente las props
// para poder usar weekText y menu sin escribir props.weekText

const { menu, weekText } = defineProps({
  menu: {
    type: Array,
    required: true
  },
  weekText: {
    type: String,
    default: ""
  }
});

// ===========================================
// REFERENCIA AL CONTENEDOR DEL REPORTE
// ===========================================

const reportRef = ref(null);

// ===========================================
// FUNCIÓN PARA DESCARGAR PDF
// ===========================================
const downloadPDF = async () => {
  try {

    const element = reportRef.value;
    if (!element) return;

    // ✅ Activar modo A4 antes de capturar
    document.body.classList.add("print-mode");

    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true
    });

    // ❗ Desactivar modo A4 después de capturar
    document.body.classList.remove("print-mode");

    const imgData = canvas.toDataURL("image/jpeg", 0.9);

    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = 210;
    const pageHeight = 297;

    const imgWidth = pageWidth;
    let imgHeight = (canvas.height * imgWidth) / canvas.width;

    if (imgHeight > pageHeight) {
      imgHeight = pageHeight;
    }

    pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);

    const weekLabel = weekText && weekText.trim() !== ""
      ? weekText
      : "SEMANA-SIN-FECHA";

    const cleanWeek = weekLabel
      .replace(/:/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .toUpperCase();

    pdf.save(`MENU-${cleanWeek}.pdf`);

  } catch (error) {
    console.error("Error generando PDF:", error);
  }
};

// ===========================================
// FUNCIÓN QUE DEVUELVE CLASE SEGÚN EL DÍA
// ===========================================

const getRowClassByDay = (day) => {

  switch(day.toLowerCase()) {
    case "lunes":
      return "row-lunes";

    case "martes":
      return "row-martes";

    case "mirc":
    case "mirc":
      return "row-mirc";

    case "jueves":
      return "row-jueves";

    case "viernes":
      return "row-viernes";

    default:
      return "";
  }
};

// ===========================================
// FUNCIÓN QUE DEVUELVE ICONO SEGÚN EL DÍA
// ===========================================

const getIconByDay = (day) => {

  switch(day.toLowerCase()) {
    case "lunes":
      return iconLunes;

    case "martes":
      return iconMartes;

    case "mirc":
    case "mirc":
      return iconMiercoles;

    case "jueves":
      return iconJueves;

    case "viernes":
      return iconViernes;

    default:
      return iconLunes;
  }
};
</script>
<template>

  <!-- CONTENEDOR PRINCIPAL A4 -->
 <div class="report" ref="reportRef">
<!-- ☁ Nube izquierda -->
<div class="cloud cloud-left"></div>

<!-- ☁ Nube derecha -->
<div class="cloud cloud-right"></div>

    <!-- ===================================== -->
    <!-- ENCABEZADO INSTITUCIONAL              -->
    <!-- ===================================== -->

    <div class="header">

      <!-- Logo izquierdo -->
      <img :src="logoIzq" class="logo-izquierda" />

      <!-- Título central -->
      <div class="title-section">
        <h2>COLEGIO PEDAGÓGICO CASTILLO ENCANTADO</h2>
        <h3>MENÚ SEMANAL</h3>

        <!-- Mostramos la semana dinámica -->
        <p v-if="weekText">
          SEMANA: {{ weekText }}
        </p>
      </div>
 <!-- ⭐ Imagen decorativa -->
  <img :src="estrella" class="decor-star" />
      <!-- Logo derecho -->
      <img :src="logoDer" class="logo-derecha" />
    </div>

    <!-- ===================================== -->
    <!-- TABLA DEL MENÚ                        -->
    <!-- ===================================== -->

    <table class="menu-table">
      <thead>
        <tr>
          <th>DÍA</th>
          <th>MERIENDA / MAÑANA</th>
          <th>ALMUERZO</th>
          <th>MERIENDA / TARDE</th>
        </tr>
      </thead>

      <tbody>
       <tr 
  v-for="(item, index) in menu"   :key="index"  :class="getRowClassByDay(item.day)"
>          <td class="day-cell">

  <!-- Icono dinámico según día -->
  <img    :src="getIconByDay(item.day)"    class="icon-day"  />  {{ item.day }}
       </td>
         <td>
  <ul class="menu-list">
    <li v-for="(food, i) in item.morningSnack.split(',')" :key="i">
      {{ food.trim() }}
    </li>
  </ul>
</td>

<td>
  <ul class="menu-list">
    <li v-for="(food, i) in item.lunch.split(',')" :key="i">
      {{ food.trim() }}
    </li>
  </ul>
</td>

<td>
  <ul class="menu-list">
    <li v-for="(food, i) in item.afternoonSnack.split(',')" :key="i">
      {{ food.trim() }}
    </li>
  </ul>
</td>
        </tr>
      </tbody>
    </table>

    <!-- ===================================== -->
    <!-- PIE DE PÁGINA                         -->
    <!-- ===================================== -->

    <div class="footer">
       <img :src="jugo" class="footer-icon" />
  <p>¡BUEN PROVECHO!</p>
  <p>Contacto: 3152498876</p>
    </div>

  </div>

<div class="download-section">
  <button @click="downloadPDF">
    📄 Descargar MENU
  </button>
</div>
</template>

<style scoped>

/* ========================================= */
/* CONTENEDOR A4                            */
/* ========================================= */
/* ========================================= */
/* COLORES POR DÍA 🌈                        */
/* ========================================= */

.row-lunes {
  background-color: #fff9c4; /* amarillo pastel */}

.row-martes {
  background-color: #ffe0f0; /* rosado suave */}

.row-miercoles {
  background-color: #d1f2ff; /* azul cielo */}

.row-jueves {
  background-color: #d4f8e8; /* verde menta */}

.row-viernes {
  background-color: #e9d5ff; /* lila pastel */}

.report {
  width: 210mm;
  min-height: 297mm;
  padding: 15mm;
  box-sizing: border-box;

 font-family: "Comic Sans MS", Arial, sans-serif;

  border-radius: 25px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);

  position: relative;

  background: linear-gradient(
    180deg,
    #fffde7 0%,
    #e3f2fd 50%,
    #f3e5f5 100%
  );
}
.report::after {
  content: "🌟 🌈 ⭐ 🎉 ⭐ 🌈 🌟 "; 
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 28px;
  opacity: 0.3;
}
  
/* ========================================= */
/* ENCABEZADO                                */
/* ========================================= */

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 4px solid #4caf50;
  padding-bottom: 10px;
  margin-bottom: 20px;
  gap: 10px;
}

.logo-izquierda {
  width: 120px;
  max-width: 120px;
  height: auto;
}

.logo-derecha {
  width: 90px;
  max-width: 90px;
  height: auto;
}

.title-section {
  text-align: center;
  flex: 1;
}

.title-section h2 {
  margin: 0;
  font-size: 20px;
  color: #4caf50;
}

.title-section h3 {
  margin: 5px 0;
  color: #6a1b9a;
}

.title-section p {
  margin: 0;
  font-weight: sans-serif;
}
.decor-star {
  width: 40px;
  margin-top: 5px;
}

.title-section h2 {
  margin: 0;
  font-size: 22px;
  color: #ff6f00;
  text-shadow: 2px 2px 0px #fff;
}

.title-section h3 {
  margin: 5px 0;
  color: #8e24aa;
  font-size: 20px;
}
/* ========================================= */
/* TABLA                                     */
/* ========================================= */
.menu-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  background: white;
  border-radius: 15px;
  overflow: hidden;
}

.menu-list {
  margin: 0;
  padding-left: 18px;
  text-align: left;
}

.menu-list {
  list-style: none;
  padding-left: 0;
}

.menu-list li::before {
  content: "🍎 ";
  margin-right: 5px;
}

.menu-table td {
  padding: 8px;
  border: 2px dashed #ffcc80;
  background: transparent;  /* ✅ deja ver el color del tr */
}
.menu-table th {
  background: linear-gradient(
    90deg,
    #07ceed,
    #0ca1d7
  );
  color: white;
  padding: 8px;
  border: 2px solid #ffffff;
  font-size: 14px;
}

.menu-table tbody tr {
  transition: transform 0.2s ease;
}

.menu-table tbody tr:hover {
  transform: scale(1.01);
}
.icon-small {
  width: 15px;
  margin-right: 5px;
  vertical-align: middle;
}

.icon-day {
  width: 25px;
  margin-right: 8px;
  vertical-align: middle;
}

.day-cell {
  font-weight: bold;
  font-size: 14px;
}
/* ========================================= */
/* PIE                                       */
/* ========================================= */

.footer {
 margin-top: 25px;
  text-align: center;
  font-weight: bold;
  color: #1b1a1a;
  font-size: 18px;
}
.footer-icon {
  width: 50px;
  margin-bottom: 5px;
}
.download-section {
  text-align: center;
  margin-top: 20px;
}

.download-section button {
  background: linear-gradient(90deg, #ff9800, #ff5722);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.2s ease;
}

.download-section button:hover {
  transform: scale(1.05);
}
/* ☁ Nubes decorativas */

.cloud {
  position: absolute;
  width: 120px;
  height: 60px;
  background: white;
  border-radius: 50px;
  box-shadow:
    30px 0 white,
    60px 0 white,
    30px -20px white;
  opacity: 0.6;
}

.cloud-left {
  top: 710px;
  left: 80px;
}

.cloud-right {
  top: 680px;
  right: 90px;
}
/* ========================================= */
/* 📱 VERSIÓN MÓVIL       ultimo                   */
/* ========================================= */

@media (max-width: 768px) {

  body {
    margin: 0;
    padding: 0;
  }

  .report {
    width: 100% !important;
    min-height: auto !important;
    height: auto !important;
    padding: 15px;
    border-radius: 0;
    box-shadow: none;
  }

  .header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .logo-izquierda {
    width: 80px;
  }

  .logo-derecha {
    width: 60px;
  }

  .decor-star {
    width: 30px;
  }

  .title-section h2 {
    font-size: 16px;
  }

  .title-section h3 {
    font-size: 14px;
  }

  .menu-table {
    width: 100%;
    font-size: 11px;
  }

  .menu-table th,
  .menu-table td {
    padding: 6px;
  }

  /* ocultar nubes que rompen el layout */
  .cloud {
    display: none;
  }

}

/* ========================================= */
/* 🖨 VERSIÓN IMPRESIÓN A4                   */
/* ========================================= */

@media print {

  body {
    margin: 0;
    padding: 0;
  }

  .report {
    width: 210mm;
    min-height: 297mm;
    padding: 10mm;
    border-radius: 0;
    box-shadow: none;
  }

  .menu-table {
    width: 100%;
    font-size: 12px;
  }

  .menu-table th,
  .menu-table td {
    padding: 6px;
  }

  tr {
    page-break-inside: avoid;
  }

  .download-section {
    display: none;
  }

}
.print-mode .report {
  width: 210mm !important;
  min-height: 297mm !important;
}

</style>

