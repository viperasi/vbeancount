<script setup>
import {ref, onMounted} from "vue";
import {useMainStore} from "@/stores/main";
import {
    mdiFileEditOutline,
} from "@mdi/js";
import * as chartConfig from "@/components/Charts/chart.config.js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import EditorCodermirror from "@/components/EditorCodemirror.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";

const chartData = ref(null);

const fillChartData = () => {
    chartData.value = chartConfig.sampleChartData();
};

onMounted(() => {
    fillChartData();
});

const mainStore = useMainStore();

</script>

<template>
    <AppLayout>
        <SectionMain>
            <SectionTitleLineWithButton
                :icon="mdiFileEditOutline"
                main
                title="编辑器"
            >
            </SectionTitleLineWithButton>

            <CardBox class="mb-6">
<!--                <EditorAce />-->
                <EditorCodermirror />
            </CardBox>
        </SectionMain>
    </AppLayout>
</template>
