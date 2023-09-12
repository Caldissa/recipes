<template>
    <div class="flex">
        <div class="p-4 flex">
            <div class="flex flex-col gap-2 bg-dark-100 m-auto p-4 rounded-md">
                <h2 class="text-3xl pb-2">NEW RECIPE</h2>
                <div class="grid gap-4">
                    <input
                        id="title"
                        v-model="name"
                        placeholder="RECIPE NAME"
                        class="w-auto mr-auto"
                    />
                    <div>
                        <p
                            v-for="(ing, index) in ingredients"
                            :key="ing"
                            @click="removeIngredient(index)"
                        >
                            {{ ing }}
                        </p>
                    </div>
                    <div class="flex gap-2">
                        <input
                            v-model="ingredient"
                            placeholder="NEW INGREDIENT"
                        />
                        <button
                            class="bg-white/30 rounded-full h-8 w-8"
                            @click="addIngredient"
                        >
                            <i class="i-mdi:plus h-6 w-6"></i>
                        </button>
                    </div>
                </div>
                <button
                    class="flex mt-4 py-2 px-3 items-center justify-center bg-emerald-500 hover:bg-emerald-300 duration-150 ease-in-out shadow-lg gap-2 rounded-md w-auto mr-auto"
                    @click="addRecipe"
                >
                    <p>ADD</p>
                    <i class="i-mdi:plus h-6 w-6"></i>
                </button>
            </div>
        </div>
        <div class="rounded-md w-full h-full overflow-y-scroll p-8">
            {{ book }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'

interface Recipe {
    id: string
    name: string
}

const book = ref([] as Recipe[])
const name = ref('')
const ingredient = ref('')
const ingredients = ref([] as string[])

const addRecipe = () => {
    book.value.push({ id: uuid(), name: name.value })
    name.value = ''
}

const addIngredient = () => {
    ingredients.value.push(ingredient.value)
    ingredient.value = ''
}

const removeIngredient = (index: number) => {
    ingredients.value.splice(index, 1)
}
</script>
