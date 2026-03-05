<script setup>
// Importamos reactividad de Vue
import { reactive } from "vue";
import { weekMenu } from "../data/weekMenu";

// Creamos una copia reactiva del menú
const menu = reactive([...weekMenu]);

// Emitimos evento para enviar datos al padre
const emit = defineEmits(["updateMenu"]);

const updateParent = () => {
  emit("updateMenu", menu);
};
</script>

<template>
  <div>
    <h2>MENÚ SEMANAL</h2>

    <table border="1" width="100%">
      <thead>
        <tr>
          <th>DÍA</th>
          <th>MERIENDA / MAÑANA</th>
          <th>ALMUERZO</th>
          <th>MERIENDA / TARDE</th>
        </tr>
      </thead>

      <tbody>
        <!-- Recorremos cada día -->
        <tr v-for="(item, index) in menu" :key="index">
          <td>{{ item.day }}</td>

          <!-- Textarea permite múltiples líneas -->
          <td>
            <textarea
              v-model="item.morningSnack"
              @input="updateParent"
            ></textarea>
          </td>

          <td>
            <textarea
              v-model="item.lunch"
              @input="updateParent"
            ></textarea>
          </td>

          <td>
            <textarea
              v-model="item.afternoonSnack"
              @input="updateParent"
            ></textarea>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
textarea {
  width: 100%;
  min-height: 80px;
}
table {
  border-collapse: collapse;
}
th {
  background-color: #09a9ee;
  color: white;
}
</style>