<script setup lang="ts">
import {
    ref,
    onMounted,
    onUnmounted,
    reactive,
    nextTick,
    watch
} from 'vue';

import ace from "ace-builds";
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/theme-monokai' // 默认设置的主题

//自动提示规则
import 'ace-builds/src-noconflict/snippets/javascript'
import 'ace-builds/src-noconflict/snippets/sql'
import 'ace-builds/src-noconflict/snippets/json'
import 'ace-builds/src-noconflict/snippets/java'
import 'ace-builds/src-noconflict/snippets/text'

const props = defineProps(['height','width'])
const emit = defineEmits(['handleChange'])
const aceDom = ref()
let aceEditor:any = null

const langType = ref('')
const langArray = [
    {
        name: 'JavaScript',
        path: 'ace/mode/javascript'
    },
    {
        name: 'sql',
        path: 'ace/mode/sql'
    },
    {
        name: 'Json',
        path: 'ace/mode/json'
    },
    {
        name: 'Java',
        path: 'ace/mode/java'
    },
    {
        name: 'Text',
        path: 'ace/mode/text'
    }]

onMounted(() => {
    init()
})


const init = () => {
    ace.config.set('basePath', '/node_modules/ace-builds/src-noconflict');
    // aceEditor = ace.edit("editor") //这里不用id,以防打包后容易出错

    aceEditor = ace.edit(aceDom.value)
    //提示功能
    aceEditor.setOptions({
        enableSnippets: true,
        enableLiveAutocompletion: true,
        enableBasicAutocompletion: true,
        autoScrollEditorIntoView: true,
    })

    //设置默认语言
    langType.value = 'ace/mode/json'
    aceEditor.session.setMode('ace/mode/json')
    aceEditor.setTheme("ace/theme/one_dark");

    aceEditor.onload = (editor) => {
        editor.completers.push({
            getCompletions: (editor, session, pos, prefix, callback) => {
                callback(null, [
                    {
                        name: 'Assets',
                        value: 'Assets:',
                        score: 100,
                        meta: 'Assets账户'
                    }
                ])
            }
        })
    }
}
const handleLang = (val:string) => {
    aceEditor.session.setMode(val)
}
const setVal = (val:string) => {
    aceEditor.setValue(val)
}
//暴露方法
defineExpose({
    setVal
});
</script>

<template>
        <div id="editor" ref="aceDom" style="height: 600px; width: 100%;"></div>
</template>
