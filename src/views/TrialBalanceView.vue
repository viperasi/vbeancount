<script setup>
import {computed, ref, onMounted} from "vue";
import {useMainStore} from "@/stores/main";
import {
    mdiTable,
    mdiHandCoinOutline,
    mdiSquareEditOutline,
    mdiTelevisionGuide,
} from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import AppLayout from "@/layouts/AppLayout.vue"
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import CardBoxComponentEmpty from "@/components/CardBoxComponentEmpty.vue";

const items = [
    {
        account: "Assets:Card:5799",
        currency: "CNY",
        amount: -741.07,
    },
    {
        account: "Assets:Weixin",
        currency: "CNY",
        amount: 240.11,
    }
]

const towNumber = (val) => {
    if (val)
        return val.toFixed(2)
}

</script>

<template>
    <AppLayout>
        <SectionMain>
            <SectionTitleLineWithButton
                :icon="mdiTelevisionGuide"
                main
                title="试算表"
            >
            </SectionTitleLineWithButton>

            <CardBoxComponentEmpty />
        </SectionMain>
    </AppLayout>
</template>
