<script setup>
import {computed, ref, onMounted} from "vue";
import {useMainStore} from "@/stores/main";
import {
    mdiTable,
    mdiChartPie,
    mdiChartTimelineVariant,
} from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import CardBoxWidget from "@/components/CardBoxWidget.vue";
import CardBox from "@/components/CardBox.vue";
import AppLayout from "@/layouts/AppLayout.vue"
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";

const items = [
    {
        account: "Income:Expen",
        currency: "CNY",
        amount: -741.07,
    },
    {
        account: "Income:game",
        currency: "CNY",
        amount: null,
    },
    {
        account: "Income:Salary",
        currency: "CNY",
        amount: null
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
                :icon="mdiTable"
                main
                title="损益表"
            >
            </SectionTitleLineWithButton>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <CardBox has-table>
                    <table>
                        <thead>
                        <tr>
                            <th>收入</th>
                            <th class="lg:w-20">货币</th>
                            <th class="lg:w-40">金额</th>
                            <th class="lg:w-40">其他</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(client, index) in items" :key="index">
                            <td data-label="收入">
                                {{ client.account }}
                            </td>
                            <td data-label="货币">
                                {{ client.currency }}
                            </td>
                            <td data-label="金额">
                                {{ towNumber(client.amount) }}
                            </td>
                            <td data-label="其他">
                            </td>
                        </tr>
                        <tr :key="total">
                            <td data-label="收入">
                                总计
                            </td>
                            <td data-label="货币">
                                CNY
                            </td>
                            <td data-label="金额">
                                -741.80
                            </td>
                            <td data-label="其他">
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </CardBox>
                <CardBox has-table>
                    <table>
                        <thead>
                        <tr>
                            <th>支出</th>
                            <th class="lg:w-20">货币</th>
                            <th class="lg:w-40">金额</th>
                            <th class="lg:w-40">其他</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(client, index) in items" :key="index">
                            <td data-label="入账账户">
                                {{ client.account }}
                            </td>
                            <td data-label="货币">
                                {{ client.currency }}
                            </td>
                            <td data-label="金额">
                                {{ towNumber(client.amount) }}
                            </td>
                            <td data-label="其他">
                            </td>
                        </tr>
                        <tr :key="`total`">
                            <td data-label="入账账户">
                                总计
                            </td>
                            <td data-label="货币">
                                CNY
                            </td>
                            <td data-label="金额">
                                -741.80
                            </td>
                            <td data-label="其他">
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </CardBox>
            </div>

            <SectionTitleLineWithButton :icon="mdiChartPie" title="净利润">
            </SectionTitleLineWithButton>
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
                <CardBoxWidget
                    :icon="mdiChartTimelineVariant"
                    :number="512"
                    color="text-emerald-500"
                    label="CNY"
                    trend="12%"
                    trend-type="up"
                />
                <CardBoxWidget
                    :icon="mdiChartTimelineVariant"
                    :number="512"
                    color="text-emerald-500"
                    label="USD"
                    trend="12%"
                    trend-type="up"
                />
                <CardBoxWidget
                    :icon="mdiChartTimelineVariant"
                    :number="512"
                    color="text-emerald-500"
                    label="其他"
                    trend="12%"
                    trend-type="up"
                />
            </div>
        </SectionMain>
    </AppLayout>
</template>
