<script lang="ts" setup>
import {
    ref,
    onMounted,
} from 'vue';

import {EditorView, basicSetup} from "codemirror";
import {javascript} from "@codemirror/lang-javascript";
import {oneDark} from "@codemirror/theme-one-dark";


const coderef = ref(null)
let doc = `let
var
const
four
five`;

onMounted(() => {
    let view = new EditorView({
        doc: doc,
        extensions: [
            basicSetup,
            javascript(),
            oneDark,
        ],
        parent: coderef.value
    })

    // view.setSize("auto", (document.documentElement.clientHeight - 200) + "px")
    // this.$nextTick(() => {
    //     window.addEventListener('resize', () => {
    //         //监听浏览器窗口大小改变
    //         //浏览器变化执行动作
    //         view.setSize("auto", (document.documentElement.clientHeight - 200) + "px")
    //     });
    // })
})
</script>

<template>
    <div id="editor" ref="coderef" style="margin-bottom: 0.5rem;"></div>
</template>
