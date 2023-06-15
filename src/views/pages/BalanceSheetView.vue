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
        <h3>资产负债表</h3>
        <div class="card">
            <h5>资产</h5>
            <TreeTable v-model:selectionKeys="selectedTreeTableValue" :value="treeTableValue">
                <Column :expander="true" field="name" header="Name"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>债务</h5>
            <TreeTable v-model:selectionKeys="selectedTreeTableValue" :value="treeTableValue">
                <Column :expander="true" field="name" header="Name"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>

        <div class="card">
            <h5>其他</h5>
            <TreeTable v-model:selectionKeys="selectedTreeTableValue" :value="treeTableValue">
                <Column :expander="true" field="name" header="Name"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    </div>
</template>
