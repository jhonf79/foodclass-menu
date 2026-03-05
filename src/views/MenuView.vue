<script setup>

// ===========================================
// IMPORTACIONES
// ===========================================

import { ref, computed } from "vue";
import MenuTable from "../components/MenuTable.vue";
import MenuReport from "../components/MenuReport.vue";


// ===========================================
// VARIABLES REACTIVAS
// ===========================================

// Datos del menú
const menuData = ref([]);

// Fecha seleccionada
const selectedDate = ref("");

// ===========================================
// FUNCIÓN COMPUTADA CORREGIDA
// Evita problema de zona horaria (UTC)
// ===========================================

const formattedWeek = computed(() => {

  // 1️⃣ Si no hay fecha seleccionada
  if (!selectedDate.value) return "";

  // 2️⃣ Separar año, mes y día manualmente
  const [year, month, day] = selectedDate.value.split("-");

  // 3️⃣ Crear fecha LOCAL (no UTC)
  //    Restamos 1 al mes porque JS lo maneja 0-11
  const selected = new Date(
    Number(year),
    Number(month) - 1,
    Number(day)
  );

  // 4️⃣ Obtener número del día (0=Domingo)
  const weekDay = selected.getDay();

  // 5️⃣ Calcular diferencia hasta lunes
  const diffToMonday = weekDay === 0 ? -6 : 1 - weekDay;

  // 6️⃣ Crear lunes real de esa semana
  const monday = new Date(selected);
  monday.setDate(selected.getDate() + diffToMonday);

  // 7️⃣ Calcular viernes sumando 4 días
  const friday = new Date(monday);
  friday.setDate(monday.getDate() + 4);

  // 8️⃣ Formatear días con dos dígitos
  const startDay = monday.getDate().toString().padStart(2, "0");
  const endDay = friday.getDate().toString().padStart(2, "0");

  // 9️⃣ Meses en español
  const months = [
    "ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO",
    "JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"
  ];

  const monthName = months[monday.getMonth()];
  const finalYear = monday.getFullYear();

  // 🔟 Retornar texto final
  return `DEL ${startDay} AL ${endDay} DE ${monthName} - ${finalYear}`;
});

// ===========================================
// RECIBE DATOS DEL HIJO
// ===========================================

const updateMenu = (data) => {
  menuData.value = data;
};


// ===========================================
// IMPRIMIR CON PEQUEÑO RETARDO
// ===========================================

const printReport = () => {
  setTimeout(() => {
    window.print();
  }, 150);
};

</script>


<template>

  <!-- ============================= -->
  <!-- ZONA EDICIÓN (NO SE IMPRIME) -->
  <!-- ============================= -->

  <div class="editor">

    <label>Seleccione fecha:</label>
    <input type="date" v-model="selectedDate" />

    <p v-if="formattedWeek">
      <strong>Vista previa:</strong> SEMANA: {{ formattedWeek }}
    </p>

    <MenuTable @updateMenu="updateMenu" />

    <button @click="printReport">
      Imprimir Reporte
    </button>

  </div>


  <!-- ============================= -->
  <!-- ZONA REPORTE (SE IMPRIME)    -->
  <!-- ============================= -->

  <div class="report-section">
    <MenuReport
      :menu="menuData"
      :weekText="formattedWeek"
    />
  </div>

</template>


<style scoped>

/* ========================= */
/* CONTROL DE IMPRESIÓN      */
/* ========================= */

@media print {

  .editor {
    display: none;
  }

  .report-section {
    display: block;
  }

}

</style>
