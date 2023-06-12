<script setup>
import {mdiForwardburger, mdiBackburger} from "@mdi/js";
import {ref} from "vue";
import {useRouter} from "vue-router";
import menuAside from "@/menuAside.js";
import menuNavBar from "@/menuNavBar.js";
import {useStyleStore} from "@/stores/style.js";
import BaseIcon from "@/components/BaseIcon.vue";
import NavBar from "@/components/NavBar.vue";
import NavBarItemPlain from "@/components/NavBarItemPlain.vue";
import AsideMenu from "@/components/AsideMenu.vue";
import BeanParse from "@/beancount/parse.js";

const layoutAsidePadding = "xl:pl-60";

const styleStore = useStyleStore();

const router = useRouter();

const isAsideMobileExpanded = ref(false);
const isAsideLgActive = ref(false);

router.beforeEach(() => {
    isAsideMobileExpanded.value = false;
    isAsideLgActive.value = false;
});

const menuClick = (event, item) => {

    if (item.isToggleLightDark) {
        styleStore.setDarkMode();
    }

    if (item.isOpen) {
        BeanParse.open()
    }
};
</script>

<template>
    <div
        :class="{
      dark: styleStore.darkMode,
      'overflow-hidden lg:overflow-visible': isAsideMobileExpanded,
    }"
    >
        <div
            :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': isAsideMobileExpanded }]"
            class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"
        >
            <NavBar
                :class="[
          layoutAsidePadding,
          { 'ml-60 lg:ml-0': isAsideMobileExpanded },
        ]"
                :menu="menuNavBar"
                @menu-click="menuClick"
            >
                <NavBarItemPlain
                    display="flex lg:hidden"
                    @click.prevent="isAsideMobileExpanded = !isAsideMobileExpanded"
                >
                    <BaseIcon
                        :path="isAsideMobileExpanded ? mdiBackburger : mdiForwardburger"
                        size="24"
                    />
                </NavBarItemPlain>
            </NavBar>
            <AsideMenu
                :is-aside-lg-active="isAsideLgActive"
                :is-aside-mobile-expanded="isAsideMobileExpanded"
                :menu="menuAside"
                @menu-click="menuClick"
                @aside-lg-close-click="isAsideLgActive = false"
            />
            <slot/>
        </div>
    </div>
</template>
