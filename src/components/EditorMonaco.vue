<script setup lang="ts">
import {
    ref,
    onMounted,
    onUnmounted,
    reactive,
    nextTick,
    watch
} from 'vue';
import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';


const props = defineProps({
    defaultValue: String
});

// // @ts-ignore
// self.MonacoEnvironment = {
//     getWorker(_: string, label: string) {
//         return new editorWorker();
//     }
// }


const root = ref<HTMLElement>();
let editor: monaco.editor.IStandaloneCodeEditor;
const property = reactive({
    language: 'beanlang',
    fullscreen: false
});

// @ts-ignore
monaco.languages.registerCompletionItemProvider('beanlang', {
    provideCompletionItems() {
        return {
            suggestions: [{
                label: 'Assets',
                kind: monaco.languages.CompletionItemKind['Class'],
                insertText: 'Assets:',
                detail: ''
            }]
        }
    },
    triggerCharacters: ['Ass', 'ass']
});

onMounted(() =>{
   nextTick(() => {
       editor = monaco.editor.create(root.value as HTMLElement, {
           language: "beanlang",
           value: props.defaultValue,
           theme: 'hc-black'
       });

       editor.onDidChangeModelContent(() => {
           // context.emit('contentChange', editor.getValue());
       });
   });
});

onUnmounted(() => {
    editor.dispose();
});

watch(() => props.defaultValue,
    (val) => {
    editor.setValue(val);
    });
</script>

<template>
    <div id="root" ref="root"></div>
</template>
