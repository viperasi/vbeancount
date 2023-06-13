<script setup>
import { reactive, ref } from "vue";
import { mdiCogOutline, mdiAccount, mdiMail, mdiGithub } from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import FormCheckRadioGroup from "@/components/FormCheckRadioGroup.vue";
import FormFilePicker from "@/components/FormFilePicker.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import NotificationBarInCard from "@/components/NotificationBarInCard.vue";
import AppLayout from "@/layouts/AppLayout.vue";

const themeOptions = [
  { id: "basic", label: "Basic" },
];

const crlfOptions = [
    {id: "LF", label: "LF(\\n)"},
    {id: "CR", label: "CR(\\r)"},
    {id: "CRLF", label: "CRLF(\\r\\n)"}

]

const form = reactive({
  theme: themeOptions[0],
    crlf: crlfOptions[0],
    dark: 1,
});

const customElementsForm = reactive({
  checkbox: ["lorem"],
  radio: "one",
  switch: ["one"],
  file: null,
});

const submit = () => {
  //
};

const formStatusWithHeader = ref(true);

const formStatusCurrent = ref(0);

const formStatusOptions = ["info", "success", "danger", "warning"];

const formStatusSubmit = () => {
  formStatusCurrent.value = formStatusOptions[formStatusCurrent.value + 1]
    ? formStatusCurrent.value + 1
    : 0;
};
</script>

<template>
  <AppLayout>
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiCogOutline"
        title="设置"
        main
      >
      </SectionTitleLineWithButton>
      <CardBox form @submit.prevent="submit">
          <FormField label="Theme" help="皮肤功能制作中">
              <FormControl v-model="form.theme" :options="themeOptions" />
          </FormField>

          <FormField label="暗黑模式">
              <FormCheckRadioGroup
                  v-model="form.dark"
                  name="dark-radio"
                  type="radio"
                  :options="{ 1: '启用', 0: '不启用' }"
              />
          </FormField>

        <FormField label="换行" help="换行标识符">
            <FormControl v-model="form.crlf" :options="crlfOptions"/>
        </FormField>

        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="保存" />
            <BaseButton type="reset" color="info" outline label="还原为默认" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionMain>
  </AppLayout>
</template>
