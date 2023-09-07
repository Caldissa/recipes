<template>
    <main class="min-h-screen w-full grid">
        <Header />
        <div class="flex">
            <div class="p-4 flex">
                <div
                    class="flex flex-col gap-2 bg-dark-100 m-auto p-4 rounded-md"
                >
                    <h2 class="text-3xl pb-2">NEW RECIPE</h2>
                    <div class="grid gap-1">
                        <label for="title">NAME :</label
                        ><input id="title" class="rounded-md py-1" />
                    </div>
                    <button
                        class="flex mt-4 py-2 px-3 items-center justify-center bg-emerald-500 hover:bg-emerald-300 duration-150 ease-in-out shadow-lg gap-2 rounded-md w-auto mr-auto"
                    >
                        <p>ADD</p>
                        <i class="i-mdi:plus h-6 w-6"></i>
                    </button>
                </div>
            </div>
            <div class="rounded-md w-full h-full overflow-y-scroll">
                Display Case
            </div>
        </div>
        <Footer />
    </main>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
