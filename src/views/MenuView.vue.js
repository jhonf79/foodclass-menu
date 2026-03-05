/// <reference types="D:/Documentos/Experto/2026/VUE3/FoodClass/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="D:/Documentos/Experto/2026/VUE3/FoodClass/node_modules/@vue/language-core/types/props-fallback.d.ts" />
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
    if (!selectedDate.value)
        return "";
    // 2️⃣ Separar año, mes y día manualmente
    const [year, month, day] = selectedDate.value.split("-");
    // 3️⃣ Crear fecha LOCAL (no UTC)
    //    Restamos 1 al mes porque JS lo maneja 0-11
    const selected = new Date(Number(year), Number(month) - 1, Number(day));
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
        "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
        "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
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
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "editor" },
});
/** @type {__VLS_StyleScopedClasses['editor']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    type: "date",
});
(__VLS_ctx.selectedDate);
if (__VLS_ctx.formattedWeek) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    (__VLS_ctx.formattedWeek);
}
const __VLS_0 = MenuTable;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onUpdateMenu': {} },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onUpdateMenu': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ updateMenu: {} },
    { onUpdateMenu: (__VLS_ctx.updateMenu) });
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.printReport) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "report-section" },
});
/** @type {__VLS_StyleScopedClasses['report-section']} */ ;
const __VLS_7 = MenuReport;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    menu: (__VLS_ctx.menuData),
    weekText: (__VLS_ctx.formattedWeek),
}));
const __VLS_9 = __VLS_8({
    menu: (__VLS_ctx.menuData),
    weekText: (__VLS_ctx.formattedWeek),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
// @ts-ignore
[selectedDate, formattedWeek, formattedWeek, formattedWeek, updateMenu, printReport, menuData,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=MenuView.vue.js.map