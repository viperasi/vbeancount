<script setup>
import {computed, ref, onMounted} from "vue";
import {useMainStore} from "@/stores/main";
import {
    mdiTable,
    mdiHandCoinOutline,
    mdiSquareEditOutline,
    mdiChartTimelineVariant,
} from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import CardBoxWidget from "@/components/CardBoxWidget.vue";
import CardBox from "@/components/CardBox.vue";
import AppLayout from "@/layouts/AppLayout.vue"
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import CardBoxComponentTitle from "@/components/CardBoxComponentTitle.vue";
import BaseButton from "@/components/BaseButton.vue";
import CardBoxTransactionNew from "@/components/CardBoxTransactionNew.vue";

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
                :icon="mdiSquareEditOutline"
                main
                title="资产负债表"
            >
            </SectionTitleLineWithButton>

            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
                <CardBox>
                    <CardBoxComponentTitle title="资产">
                    </CardBoxComponentTitle>
                    <CardBoxTransactionNew
                        v-for="(transaction, index) in items"
                        :key="`assets-` + index"
                        :amount="towNumber(transaction.amount)"
                        :account="transaction.account"
                        :type="transaction.currency"
                        :icon="mdiHandCoinOutline"
                    />
                </CardBox>
                <CardBox>
                    <CardBoxComponentTitle title="债务">
                    </CardBoxComponentTitle>
                    <CardBoxTransactionNew
                        v-for="(transaction, index) in items"
                        :key="`liabilities-` + index"
                        :amount="towNumber(transaction.amount)"
                        :account="transaction.account"
                        :type="transaction.currency"
                        :icon="mdiHandCoinOutline"
                    />
                </CardBox>
            </div>
        </SectionMain>
    </AppLayout>
</template>
