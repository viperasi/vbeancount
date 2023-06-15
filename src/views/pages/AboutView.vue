<script setup>

</script>

<template>
    <div class="grid">
        <h3>VBeancount</h3>
        <div class="col-12">
            <div class="card">
                <h5>版本: v0.1.0</h5>
                <p>
                    一个基于<a class="text-blue-500" href="https://vuejs.org/" target="_blank">Vue 3.x</a>和<a
                    class="text-blue-500" href="https://tauri.app/" target="_blank">Tauri</a>的跨平台<a
                    class="text-blue-500" href="https://github.com/beancount/beancount" target="_blank">beancount</a>工具,
                    组件模板使用<a class="text-blue-500" href="https://primevue.org/" target="_blank">PrimeVue</a>和<a
                    class="text-blue-500" href="https://sakai.primevue.org" target="_blank">Sakai</a>.
                    通过内置的beancount实现,完成数据解析, 查询, 语法提示, 语法高亮等功能.
                </p>
                <div class="flex flex-wrap gap-2">
                    <a class="github" href="https://github.com/viperasi/vbeancount" target="_blank">
                        <span class="flex align-items-center px-2 bg-purple-700 text-white">
                            <i className="pi pi-github"></i>
                        </span>
                        <span className="px-3 py-2 flex align-items-center text-white">GitHub</span>
                    </a>
                    <a class="homepage" href="https://vbeancount.github.io/" target="_blank">
                        <span class="flex align-items-center px-2 bg-blue-500 text-white">
                            <i className="pi pi-globe"></i>
                        </span>
                        <span className="px-3 py-2 flex align-items-center text-white">主页</span>
                    </a>
                    <a class="blog" href="https://www.xu81.com" target="_blank">
                        <span class="flex align-items-center px-2 bg-bluegray-800 text-white">
                            <i className="pi pi-bookmark"></i>
                        </span>
                        <span className="px-3 py-2 flex align-items-center text-white">博客</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.github {
    background: linear-gradient(to left, var(--purple-600) 50%, var(--purple-700) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    border-color: var(--purple-700);
    display: flex;
    align-items: stretch;
    padding: 0;

    &:enabled:hover {
        background: linear-gradient(to left, var(--purple-600) 50%, var(--purple-700) 50%);
        background-size: 200% 100%;
        background-position: left bottom;
        border-color: var(--purple-700);
    }

    &:focus {
        box-shadow: 0 0 0 1px var(--purple-400);
    }
}

.homepage {
    background: linear-gradient(to left, var(--blue-400) 50%, var(--blue-500) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    border-color: var(--blue-500);
    padding: 0;
    display: flex;
    align-items: stretch;

    &:enabled:hover {
        background: linear-gradient(to left, var(--blue-400) 50%, var(--blue-500) 50%);
        background-size: 200% 100%;
        background-position: left bottom;
        border-color: var(--blue-500);
    }

    &:focus {
        box-shadow: 0 0 0 1px var(--blue-200);
    }
}

.blog {
    background: linear-gradient(to left, var(--bluegray-700) 50%, var(--bluegray-800) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    border-color: var(--bluegray-800);
    padding: 0;
    display: flex;
    align-items: stretch;

    &:enabled:hover {
        background: linear-gradient(to left, var(--bluegray-700) 50%, var(--bluegray-800) 50%);
        background-size: 200% 100%;
        background-position: left bottom;
        border-color: var(--bluegray-800);
    }

    &:focus {
        box-shadow: 0 0 0 1px var(--purple-500);
    }
}

@media screen and (max-width: 960px) {
    -button .p-button {
        margin-bottom: 0.5rem;
    }
    -button .p-button:not(.p-button-icon-only) {
        display: flex;
        flex-wrap: wrap;
    }
    -button .p-buttonset .p-button {
        margin-bottom: 0;
    }
}
</style>
