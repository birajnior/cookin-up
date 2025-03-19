<script lang="ts">
export default {
  props: {
    texto: { type: String, required: true },
  },
};
</script>

<template>
  <button class="btn">{{ texto }}</button>
</template>

<style scoped>
.btn {
  color: var(--Creme, #fffaf3);
  text-align: center;
  cursor: pointer;
  /* Paragraph Large Bold */
  font-family: "Nunito Sans";
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 33px */

  border-radius: 2rem;
  background: var(--Coral, #f0633c);
  box-shadow: 0.25rem 0.25rem 0.9375rem 0rem rgba(255, 115, 76, 0.25);
  display: flex;
  width: 19.5rem;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
}

.btn:hover {
  background: var(--ocre-hover, #d1451e);
}
</style>
