<script setup>
import { computed, ref } from "vue";
import {mdiEye, mdiAccountCardOutline} from "@mdi/js";
import { useBeanStore } from "@/stores/beancount.js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";

const beanStore = useBeanStore();

const items = computed(() => beanStore.accounts);

const towNumber = (val) => {
    return val.toFixed(2)
}

const clickAccount = (account) => {
    console.log(account)
}

</script>

<template>
    <AppLayout>
        <SectionMain>
            <SectionTitleLineWithButton :icon="mdiAccountCardOutline" title="账户" main></SectionTitleLineWithButton>
            <CardBox class="mb-6" has-table>
                <table>
                    <thead>
                        <tr>
                            <th>账户</th>
                            <th>类型</th>
                            <th>货币</th>
                            <th>余额</th>
                            <th>最新条目</th>
                            <th>记录数</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="client in items" :key="client.accname">
                            <td data-label="账户">
                                {{ client.accname }}
                            </td>
                            <td data-label="类型">
                                {{ client.type }}
                            </td>
                            <td data-label="货币">
                                {{ client.acccurrency }}
                            </td>
                            <td data-label="余额">
                                {{ towNumber(client.balance) }}
                            </td>
                            <td data-label="最新条目">
                                {{ client.newest }}
                            </td>
                            <td data-label="记录数">
                                {{ client.count }}
                            </td>
                            <td class="before:hidden lg:w-1 whitespace-nowrap">
                                <BaseButtons type="justify-start lg:justify-end" no-wrap>
                                    <BaseButton color="info" :icon="mdiEye" small @click="clickAccount(client)" />
                                </BaseButtons>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </CardBox>
        </SectionMain>
    </AppLayout>
</template>
