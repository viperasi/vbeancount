<script setup>
import { RouterView } from "vue-router";
import { useStyleStore } from "./stores/style.js";
import { darkModeKey, styleKey } from "@/config.js";

const styleStore = useStyleStore()

styleStore.setStyle(localStorage[styleKey] ?? "basic");

</script>

<template>
  <RouterView />
</template>
