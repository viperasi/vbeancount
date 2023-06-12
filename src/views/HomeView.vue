<script setup>
import { computed, ref, onMounted } from "vue";
import {
  mdiChartTimelineVariant,
  mdiAccountCardOutline,
  mdiCartOutline,
  mdiChartPie,
  mdiReload
} from "@mdi/js"
import { useMainStore } from "@/stores/main";
import { useBeanStore } from "@/stores/beancount";
import * as chartConfig from "@/components/Charts/chart.config.js";
import LineChart from "@/components/Charts/LineChart.vue";
import SectionMain from "@/components/SectionMain.vue";
import CardBoxWidget from "@/components/CardBoxWidget.vue";
import CardBox from "@/components/CardBox.vue";
import BaseButton from "@/components/BaseButton.vue";
import CardBoxTransaction from "@/components/CardBoxTransaction.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import AppLayout from "@/layouts/AppLayout.vue"

const chartData = ref(null);

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData();
};

onMounted(() => {
  fillChartData();
});

const mainStore = useMainStore();
const beanStore = useBeanStore();


</script>

<template>
  <AppLayout>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiChartTimelineVariant" title="总览" main>
      </SectionTitleLineWithButton>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <CardBoxWidget trend="Accounts" color="text-emerald-500" :icon="mdiAccountCardOutline"
          :number="beanStore.accounts.length" label="账户" />
        <CardBoxWidget trend="Counts" color="text-blue-500" :icon="mdiCartOutline" :number="beanStore.journals.length"
          label="交易数" />
        <CardBoxWidget trend="Overflow" color="text-red-500" :icon="mdiChartTimelineVariant"
          :number="256" suffix="%" label="Performance" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div class="flex flex-col justify-between">
          <CardBoxTransaction v-for="(transaction, index) in transactionBarItems" :key="index"
            :amount="transaction.amount" :date="transaction.date" :business="transaction.business"
            :type="transaction.type" :name="transaction.name" :account="transaction.account" />
        </div>
        <div class="flex flex-col justify-between">
        </div>
      </div>

      <SectionTitleLineWithButton :icon="mdiChartPie" title="资产走势">
        <BaseButton :icon="mdiReload" color="whiteDark" @click="fillChartData" />
      </SectionTitleLineWithButton>

      <CardBox class="mb-6">
        <div v-if="chartData">
          <line-chart :data="chartData" class="h-96" />
        </div>
      </CardBox>
    </SectionMain>
  </AppLayout>
</template>
