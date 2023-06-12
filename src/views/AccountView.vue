<script setup>
import { computed, ref } from "vue";
import {useBeanStore} from "@/stores/beancount.js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import AppLayout from "@/layouts/AppLayout.vue";

const beanStore = useBeanStore();

const items = computed(() => beanStore.accounts);

</script>

<template>
  <AppLayout>
    <SectionMain>
      <CardBox class="mb-6" has-table>
          <table>
              <thead>
              <tr>
                  <th>账户</th>
                  <th>类型</th>
                  <th>余额</th>
                  <th>最新条目</th>
                  <th>记录数</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="client in items" :key="client.id">
                  <td data-label="Name">
                      {{ client.name }}
                  </td>
                  <td data-label="Company">
                      {{ client.company }}
                  </td>
                  <td data-label="City">
                      {{ client.city }}
                  </td>
                  <td data-label="Progress" class="lg:w-32">
                      <progress
                          class="flex w-2/5 self-center lg:w-full"
                          max="100"
                          :value="client.progress"
                      >
                          {{ client.progress }}
                      </progress>
                  </td>
                  <td data-label="Created" class="lg:w-1 whitespace-nowrap">
                      <small
                          class="text-gray-500 dark:text-slate-400"
                          :title="client.created"
                      >{{ client.created }}</small
                      >
                  </td>
              </tr>
              </tbody>
          </table>
      </CardBox>
    </SectionMain>
  </AppLayout>
</template>
