<template>
    <main class="min-h-screen w-full grid">
        <Header />
        <router-view />
        <Footer />
    </main>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
