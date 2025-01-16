<!--.vitepress/theme/MyLayout.vue-->

<script setup>
import DefaultTheme from 'vitepress/theme'

const {Layout} = DefaultTheme
</script>
<template>
    <Layout>
        <template #doc-before>
            <div style="margin-bottom: 30px">
                <img src="/images/MA_Macau_1.jpg">
            </div>
        </template>

        <template #doc-footer-before>
            <div class="info custom-block" style="margin-bottom: 14px">
                <p>对这篇文章还有疑问？ 点击 <a href="https://github.com/SLQ1893/SLQ1893.github.io/issues/new"
                                               target="_blank">[这里]</a> 发起提问。
                </p>
            </div>
        </template>
    </Layout>
</template>
