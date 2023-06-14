<script setup>
import { computed, ref } from "vue";
import {mdiEye, mdiNotebookOutline} from "@mdi/js";
import { useBeanStore } from "@/stores/beancount.js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";

const beanStore = useBeanStore();

const items = computed(() => beanStore.journals);

const towNumber = (val) => {
    return val.toFixed(2)
}

const clickJournal = (val) => {
    console.log(val)
}

</script>

<template>
    <AppLayout>
        <SectionMain>
            <SectionTitleLineWithButton :icon="mdiNotebookOutline" title="日记账" main></SectionTitleLineWithButton>
            <CardBox class="mb-6" has-table>
                <table>
                    <thead>
                        <tr>
                            <th>日期</th>
                            <th>状态</th>
                            <th>受款人</th>
                            <th>项目</th>
                            <th>金额</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(client, index) in items" :key="index">
                            <td data-label="日期">
                                {{ client.time }}
                            </td>
                            <td data-label="状态">
                                {{ client.status }}
                            </td>
                            <td data-label="受款人">
                                {{ client.payee }}
                            </td>
                            <td data-label="项目">
                                {{ client.narration }}
                            </td>
                            <td data-label="金额">
                            </td>
                            <td class="before:hidden lg:w-1 whitespace-nowrap">
                                <BaseButtons type="justify-start lg:justify-end" no-wrap>
                                    <BaseButton color="info" :icon="mdiEye" small @click="clickJournal(client)" />
                                </BaseButtons>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </CardBox>
        </SectionMain>
    </AppLayout>
</template>
