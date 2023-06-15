<script setup>
import {computed} from "vue";
import {
    mdiCashMinus,
    mdiCashPlus,
    mdiReceipt,
    mdiCreditCardOutline,
} from "@mdi/js";
import CardBox from "@/components/CardBox.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import PillTag from "@/components/PillTag.vue";
import IconRounded from "@/components/IconRounded.vue";

const props = defineProps({
    amount: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    account: {
        type: String,
        required: true,
    },
    icon: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <CardBox class="mb-6 last:mb-0" is-hoverable>
        <BaseLevel>
            <BaseLevel type="justify-start">
                <IconRounded :icon="icon" color="success" class="md:mr-6"/>
                <div class="text-center space-y-1 md:text-left md:mr-6">
                    <h4 class="text-xl">{{ amount }}</h4>
                    <!--          <p class="text-gray-500 dark:text-slate-400">-->
                    <!--            <b>{{ date }}</b> via {{ business }}-->
                    <!--          </p>-->
                </div>
            </BaseLevel>
            <div class="text-center md:text-right space-y-2">
                <p class="text-sm text-gray-500">
                    {{ account }}
                </p>
                <div>
                    <PillTag color="success" :label="type" small/>
                </div>
            </div>
        </BaseLevel>
    </CardBox>
</template>
