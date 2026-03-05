/// <reference types="D:/Documentos/Experto/2026/VUE3/FoodClass/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="D:/Documentos/Experto/2026/VUE3/FoodClass/node_modules/@vue/language-core/types/props-fallback.d.ts" />
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
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    border: "1",
    width: "100%",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
for (const [item, index] of __VLS_vFor((__VLS_ctx.menu))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
        key: (index),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    (item.day);
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.textarea, __VLS_intrinsics.textarea)({
        ...{ onInput: (__VLS_ctx.updateParent) },
        value: (item.morningSnack),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.textarea, __VLS_intrinsics.textarea)({
        ...{ onInput: (__VLS_ctx.updateParent) },
        value: (item.lunch),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.textarea, __VLS_intrinsics.textarea)({
        ...{ onInput: (__VLS_ctx.updateParent) },
        value: (item.afternoonSnack),
    });
    // @ts-ignore
    [menu, updateParent, updateParent, updateParent,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
});
export default {};
//# sourceMappingURL=MenuTable.vue.js.map