<script setup>
import { computed, ref } from "vue";
import {mdiEye,
    mdiNotebookOutline,
    mdiCheckDecagram,
    mdiMagnify
} from "@mdi/js";
import { useBeanStore } from "@/stores/beancount.js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import CardBoxModal from "@/components/CardBoxModal.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
import PillTag from "@/components/PillTag.vue";
import FormControl from "@/components/FormControl.vue";

const beanStore = useBeanStore();

const viewModal = ref(false)
const children = ref([])
const search = ref(null)
const items = computed(() => beanStore.journals);

const towNumber = (val) => {
    return val.toFixed(2)
}

const clickJournal = (val) => {
    console.log(val)
    children.value = val.children
    viewModal.value = true
}



</script>

<template>
    <AppLayout>
        <SectionMain>
            <SectionTitleLineWithButton :icon="mdiNotebookOutline" title="日记账" main>
                <FormControl v-model="search" :icon="mdiMagnify" placeholder="搜索"/>
            </SectionTitleLineWithButton>
            <CardBox class="mb-6" has-table>
                <table>
                    <thead>
                        <tr>
                            <th class="lg:w-32">日期</th>
                            <th class="lg:w-40">状态</th>
                            <th class="lg:w-80">受款人</th>
                            <th>项目</th>
                            <th class="lg:w-18"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(client, index) in items" :key="index">
                            <td data-label="日期">
                                {{ client.time }}
                            </td>
                            <td data-label="状态">
                                <PillTag v-if="client.status === '*' " label="Verified" color="info" :icon="mdiCheckDecagram" />
                                <PillTag v-else label="not verified" color="warning" :icon="mdiCheckDecagram" />
                            </td>
                            <td data-label="受款人">
                                {{ client.payee }}
                            </td>
                            <td data-label="项目">
                                {{ client.narration }}
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
        <CardBoxModal
            v-model="viewModal"
            button-label="关闭"
        >
            <table>
                <thead>
                <tr>
                    <th>账户</th>
                    <th>金额</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(client, index) in children" :key="`child-` + index">
                    <td data-label="账户">
                        {{ client.account }}
                    </td>
                    <td data-label="金额">
                        {{ towNumber(client.amount) }} ({{ client.currency }})
                    </td>
                </tr>
                </tbody>
            </table>
        </CardBoxModal>
    </AppLayout>
</template>
