import { test, expect } from "vitest";
import App from "../src/App.vue";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";

test("should load app", async () => {
  expect(App).toBeTruthy();
  const wrapper = mount(App);
  expect(wrapper.html()).toContain("TODOS");
  const input = wrapper.find("input");
  expect(input.element).toBeTruthy();
  expect(input.element.value).toBe("");
  // input.setValue("test");
  // expect(input.element.value).toBe("test");
  const button = wrapper.find("button");
  expect(button.element).toBeTruthy();
  expect(button.element.textContent).toBe("Add");
  const list = wrapper.find("ul");
  expect(list.element).toBeTruthy();
  expect(list.findAll("li").length).toBe(0);

  input.setValue("Walk the dog");
  button.trigger("click");
  await nextTick()
  expect(list.findAll("li").length).toBe(1);
  expect(list.find("li").text()).toBe("Walk the dog");
});
