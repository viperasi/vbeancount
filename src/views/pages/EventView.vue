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

const customEvents = ref([
    {
        status: 'Ordered',
        date: '15/10/2020 10:30',
        icon: 'pi pi-check',
        color: '#9C27B0',
        image: 'game-controller.jpg'
    },
    {
        status: 'Processing',
        date: '15/10/2020 14:00',
        icon: 'pi pi-check',
        color: '#673AB7'
    },
    {
        status: 'Shipped',
        date: '15/10/2020 16:15',
        icon: 'pi pi-check',
        color: '#FF9800'
    },
    {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#607D8B'
    }
]);
</script>

<template>
    <div class="grid">

        <h3>事件</h3>
        <div class="card">
            <Timeline :value="customEvents" align="alternate" class="customized-timeline">
                <template #marker="slotProps">
                        <span
                            :style="{ backgroundColor: slotProps.item.color }"
                            class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-2">
                            <i :class="slotProps.item.icon"></i>
                        </span>
                </template>
                <template #opposite="slotProps">
                    <h2>{{ slotProps.item.date }}</h2>
                </template>
                <template #content="slotProps">
                    <Card>
                        <template #title>
                            {{ slotProps.item.status }}
                        </template>
                        <template #subtitle>
                            {{ slotProps.item.date }}
                        </template>
                        <template #content>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
                                error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam
                                nobis, culpa ratione quam perferendis esse, cupiditate
                                neque quas!
                            </p>
                        </template>
                    </Card>
                    <Card class="mt-2">
                        <template #title>
                            {{ slotProps.item.status }}
                        </template>
                        <template #subtitle>
                            {{ slotProps.item.date }}
                        </template>
                        <template #content>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
                                error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam
                                nobis, culpa ratione quam perferendis esse, cupiditate
                                neque quas!
                            </p>
                        </template>
                    </Card>
                </template>
            </Timeline>
        </div>
    </div>
</template>
