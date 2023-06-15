<script setup>
import NodeService from '@/service/NodeService';
import {onMounted, ref} from 'vue';

const treeValue = ref(null);
const selectedTreeValue = ref(null);
const treeTableValue = ref(null);
const selectedTreeTableValue = ref(null);
const nodeService = new NodeService();

const items = [
    {
        amount: 12.00,
        currency: "CNY"
    },
    {
        amount: 12.00,
        currency: "USD"
    },
    {
        amount: 12.00,
        currency: "CNY"
    },
    {
        amount: 12.00,
        currency: "CNY"
    },
]

const color = [
    "text-blue-500", "text-orange-500", "text-cyan-500", "text-purple-500"
]

const towNum = (val) => {
    if (val) {
        return val.toFixed(2)
    }
}

onMounted(() => {
    nodeService.getTreeNodes().then((data) => (treeValue.value = data));
    nodeService.getTreeTableNodes().then((data) => (treeTableValue.value = data));
});
</script>

<template>
    <div class="grid">
        <h3>损益表</h3>
        <div class="grid">
            <div v-for="(item, index) in items" :key="index" class="col-12 lg:col-6 xl:col-3">
                <div class="card">
                    <div class="flex justify-content-between mb-3">
                        <div>
                            <span class="block text-500 font-medium mb-3">净利润</span>
                            <div class="text-900 font-medium text-xl">{{ towNum(item.amount) }}</div>
                        </div>
                        <div class="flex align-items-center justify-content-center bg-blue-100 border-round"
                             style="width: 2.5rem; height: 2.5rem">
                            <i :class="`pi pi-money-bill text-xl ` + color[index]"></i>
                        </div>
                    </div>
                    <span class="text-500">CNY</span>
                </div>
            </div>

            <div class="col-5 flex justify-content-center">
                <div class="card">
                    <h5>收入</h5>
                    <TreeTable v-model:selectionKeys="selectedTreeTableValue" :value="treeTableValue">
                        <Column :expander="true" field="name" header="Name"></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>
            </div>

            <div class="col-2">
                <Divider layout="vertical">
                    <i class="pi pi-fw pi-arrow-right-arrow-left"/>
                </Divider>
            </div>
            <div class="col-5 align-items-center justify-content-center">
                <div class="card">
                    <h5>支出</h5>
                    <TreeTable v-model:selectionKeys="selectedTreeTableValue" :value="treeTableValue">
                        <Column :expander="true" field="name" header="Name"></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>
            </div>
        </div>
    </div>
</template>
