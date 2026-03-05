/// <reference types="D:/Documentos/Experto/2026/VUE3/FoodClass/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="D:/Documentos/Experto/2026/VUE3/FoodClass/node_modules/@vue/language-core/types/props-fallback.d.ts" />
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
import iconMiercoles from "../assets/decor/miercoles.png";
import iconJueves from "../assets/decor/jueves.png";
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
const __VLS_props = defineProps({
    menu: {
        type: Array,
        required: true
    },
    weekText: {
        type: String,
        default: ""
    }
});
const { menu, weekText } = __VLS_props;
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
        if (!element)
            return;
        // Convertimos el HTML a imagen
        const canvas = await html2canvas(element, {
            scale: 2, // 🔽 reduce peso del archivo
            useCORS: true
        });
        // Convertimos a formato JPG comprimido
        const imgData = canvas.toDataURL("image/jpeg", 1);
        // 🔽 1.7 = más liviano (ideal WhatsApp)
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
        // ===========================================
        // GENERAR NOMBRE DINÁMICO CORRECTO
        // ===========================================
        // Si weekText viene vacío usamos texto por defecto
        const weekLabel = weekText && weekText.trim() !== ""
            ? weekText
            : "SEMANA-SIN-FECHA";
        // Limpiamos texto para nombre de archivo
        const cleanWeek = weekLabel
            .replace(/:/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .toUpperCase();
        pdf.save(`MENU-${cleanWeek}.pdf`);
    }
    catch (error) {
        console.error("Error generando PDF:", error);
    }
};
// ===========================================
// FUNCIÓN QUE DEVUELVE CLASE SEGÚN EL DÍA
// ===========================================
const getRowClassByDay = (day) => {
    switch (day.toLowerCase()) {
        case "lunes":
            return "row-lunes";
        case "martes":
            return "row-martes";
        case "miércoles":
        case "miercoles":
            return "row-miercoles";
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
    switch (day.toLowerCase()) {
        case "lunes":
            return iconLunes;
        case "martes":
            return iconMartes;
        case "miércoles":
        case "miercoles":
            return iconMiercoles;
        case "jueves":
            return iconJueves;
        case "viernes":
            return iconViernes;
        default:
            return iconLunes;
    }
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['report']} */ ;
/** @type {__VLS_StyleScopedClasses['title-section']} */ ;
/** @type {__VLS_StyleScopedClasses['title-section']} */ ;
/** @type {__VLS_StyleScopedClasses['title-section']} */ ;
/** @type {__VLS_StyleScopedClasses['title-section']} */ ;
/** @type {__VLS_StyleScopedClasses['title-section']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-table']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-table']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-table']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-table']} */ ;
/** @type {__VLS_StyleScopedClasses['download-section']} */ ;
/** @type {__VLS_StyleScopedClasses['download-section']} */ ;
/** @type {__VLS_StyleScopedClasses['report']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-table']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-table']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-table']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-izquierda']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-derecha']} */ ;
/** @type {__VLS_StyleScopedClasses['title-section']} */ ;
/** @type {__VLS_StyleScopedClasses['title-section']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-table']} */ ;
/** @type {__VLS_StyleScopedClasses['report']} */ ;
/** @type {__VLS_StyleScopedClasses['report']} */ ;
/** @type {__VLS_StyleScopedClasses['header']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-izquierda']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-derecha']} */ ;
/** @type {__VLS_StyleScopedClasses['title-section']} */ ;
/** @type {__VLS_StyleScopedClasses['title-section']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-table']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-table']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-table']} */ ;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "report" },
    ref: "reportRef",
});
/** @type {__VLS_StyleScopedClasses['report']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "cloud cloud-left" },
});
/** @type {__VLS_StyleScopedClasses['cloud']} */ ;
/** @type {__VLS_StyleScopedClasses['cloud-left']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "cloud cloud-right" },
});
/** @type {__VLS_StyleScopedClasses['cloud']} */ ;
/** @type {__VLS_StyleScopedClasses['cloud-right']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "header" },
});
/** @type {__VLS_StyleScopedClasses['header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: (__VLS_ctx.logoIzq),
    ...{ class: "logo-izquierda" },
});
/** @type {__VLS_StyleScopedClasses['logo-izquierda']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "title-section" },
});
/** @type {__VLS_StyleScopedClasses['title-section']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
if (weekText) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (weekText);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: (__VLS_ctx.estrella),
    ...{ class: "decor-star" },
});
/** @type {__VLS_StyleScopedClasses['decor-star']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: (__VLS_ctx.logoDer),
    ...{ class: "logo-derecha" },
});
/** @type {__VLS_StyleScopedClasses['logo-derecha']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "menu-table" },
});
/** @type {__VLS_StyleScopedClasses['menu-table']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
for (const [item, index] of __VLS_vFor((menu))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
        key: (index),
        ...{ class: (__VLS_ctx.getRowClassByDay(item.day)) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({
        ...{ class: "day-cell" },
    });
    /** @type {__VLS_StyleScopedClasses['day-cell']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (__VLS_ctx.getIconByDay(item.day)),
        ...{ class: "icon-day" },
    });
    /** @type {__VLS_StyleScopedClasses['icon-day']} */ ;
    (item.day);
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    (item.morningSnack);
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    (item.lunch);
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    (item.afternoonSnack);
    // @ts-ignore
    [logoIzq, estrella, logoDer, getRowClassByDay, getIconByDay,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "footer" },
});
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: (__VLS_ctx.jugo),
    ...{ class: "footer-icon" },
});
/** @type {__VLS_StyleScopedClasses['footer-icon']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "download-section" },
});
/** @type {__VLS_StyleScopedClasses['download-section']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.downloadPDF) },
});
// @ts-ignore
[jugo, downloadPDF,];
const __VLS_export = (await import('vue')).defineComponent({
    props: {
        menu: {
            type: Array,
            required: true
        },
        weekText: {
            type: String,
            default: ""
        }
    },
});
export default {};
//# sourceMappingURL=MenuReport.vue.js.map