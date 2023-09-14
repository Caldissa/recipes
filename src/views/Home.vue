<template>
    <div class="flex">
        <div class="p-4 flex">
            <div class="flex flex-col gap-2 bg-dark-100 m-auto p-4 rounded-md">
                <h2 class="text-3xl pb-2">NEW RECIPE</h2>
                <div class="grid gap-4">
                    <div class="grid gap-1">
                        <label class="font-300 text-xl">NAME: </label>
                        <input
                            id="title"
                            v-model="name"
                            type="text"
                            placeholder="Recipe Name"
                            class="w-auto mr-auto"
                        />
                    </div>
                    <div>
                        <h3 class="text-lg font-300">INGREDIENTS:</h3>
                        <ul
                            v-if="ingredients.length > 0"
                            class="list-circle pl-6"
                        >
                            <li
                                v-for="(ing, index) in ingredients"
                                :key="ing.id"
                                @click="removeIngredient(index)"
                            >
                                {{ ing.amount }} {{ ing.measurement }}
                                {{ ing.name }}
                            </li>
                        </ul>
                        <p v-else>(NONE)</p>
                    </div>
                    <div>
                        <h3 class="text-lg font-300">STEPS:</h3>
                        <ul v-if="steps.length > 0" class="list-circle pl-6">
                            <li
                                v-for="(step, index) in steps"
                                :key="index"
                                @click="removeStep(index)"
                            >
                                {{ step }}
                            </li>
                        </ul>
                        <p v-else>(NONE)</p>
                    </div>
                    <div
                        class="grid gap-2 w-full mt-2 p-2 border rounded-lg border-white/20"
                    >
                        <div class="grid gap-1">
                            <label class="font-300 text-xl"
                                >ADD INGREDIENT:
                            </label>
                            <input
                                ref="input"
                                v-model="ingredient"
                                type="text"
                                placeholder="New Ingredient"
                            />
                        </div>
                        <div class="flex gap-2">
                            <div class="grid gap-1">
                                <label class="font-300 text-xl">AMOUNT: </label>
                                <input
                                    id="amount"
                                    v-model="amount"
                                    type="text"
                                    placeholder="0"
                                    class=""
                                />
                            </div>
                            <div class="grid gap-1">
                                <label class="font-300 text-xl"
                                    >MEASUREMENT:
                                </label>
                                <input
                                    v-model="measurement"
                                    type="text"
                                    placeholder="(eg. cup, teaspoon, etc.)"
                                />
                            </div>
                        </div>
                        <button
                            class="bg-white/30 rounded-lg h-8 px-2 flex items-center gap-2 w-auto mr-auto"
                            @click="addIngredient"
                        >
                            ADD <i class="i-mdi:plus h-6 w-6"></i>
                        </button>
                    </div>
                    <div
                        class="grid gap-2 w-full mt-2 p-2 border rounded-lg border-white/20"
                    >
                        <div class="grid gap-1">
                            <label class="font-300 text-xl">ADD STEP: </label>
                            <textarea
                                ref="input"
                                v-model="newStep"
                                placeholder="Add Instructions"
                            ></textarea>
                        </div>
                        <button
                            class="bg-white/30 rounded-lg h-8 px-2 flex items-center gap-2 w-auto mr-auto"
                            @click="addStep"
                        >
                            ADD <i class="i-mdi:plus h-6 w-6"></i>
                        </button>
                    </div>
                </div>
                <button
                    class="flex mt-4 py-2 px-3 items-center justify-center bg-emerald-500 hover:bg-emerald-300 duration-150 ease-in-out shadow-lg gap-2 rounded-md w-auto mr-auto"
                    @click="addRecipe"
                >
                    <p>ADD RECIPE</p>
                    <i class="i-mdi:plus h-6 w-6"></i>
                </button>
            </div>
        </div>
        <div
            class="rounded-md w-full h-auto overflow-y-scroll p-8 grid gap-2 mb-auto"
        >
            <div
                v-for="(recipe, index) in book"
                :key="recipe.id"
                class="bg-white/20 rounded-md p-4 grid h-auto"
                @click="removeRecipe(index)"
            >
                <h2 class="text-xl font-600 mb-4">{{ recipe.name }}</h2>
                <h3 class="text-lg font-300">INGREDIENTS:</h3>
                <ul class="list-circle pl-6 mb-4">
                    <li v-for="ing in recipe.ingredients" :key="ing.id">
                        {{ ing.amount }} {{ ing.measurement }}
                        {{ ing.name }}
                    </li>
                </ul>
                <h3 class="text-lg font-300">STEPS:</h3>
                <ul class="list-circle pl-6 mb-4">
                    <li v-for="(step, index) in recipe.steps" :key="index">
                        {{ step }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'

interface Recipe {
    id: string
    name: string
    ingredients: Ingredient[]
    steps: string[]
}

interface Ingredient {
    id: string
    name: string
    amount?: string
    measurement?: string
}

const input = ref<HTMLInputElement | null>(null)

const book = ref([] as Recipe[])
const name = ref('')
const ingredient = ref('')
const amount = ref('')
const measurement = ref('')
const ingredients = ref([] as Ingredient[])
const newStep = ref('')
const steps = ref([] as string[])

const addRecipe = () => {
    book.value.push({
        id: uuid(),
        name: name.value,
        ingredients: ingredients.value,
        steps: steps.value
    })
    name.value = ''
    ingredients.value = []
    steps.value = []
    ingredient.value = ''
    amount.value = ''
    measurement.value = ''
}

const addIngredient = () => {
    let newIngredient = {
        id: uuid(),
        name: ingredient.value,
        amount: amount.value,
        measurement: measurement.value
    }
    ingredients.value.push(newIngredient)
    ingredient.value = ''
    amount.value = ''
    measurement.value = ''
    if (input.value != null) input.value.focus()
}

const addStep = () => {
    if (newStep.value.trim() === '') return
    steps.value.push(newStep.value.trim())
    newStep.value = ''
}

const removeIngredient = (index: number) => {
    ingredients.value.splice(index, 1)
}

const removeStep = (index: number) => {
    steps.value.splice(index, 1)
}

const removeRecipe = (index: number) => {
    book.value.splice(index, 1)
}
</script>
