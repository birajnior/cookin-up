<script lang="ts">
import type { PropType } from "vue";

export default {
  props: {
    texto: { type: String as PropType<string>, requerid: true },
    ativa: Boolean,
  },
};
</script>

<template>
  <!-- <span class="tag"  :class="{ ativa: ativa}"> pode ser 
    feita desse jeito para adicionar a class ou do modelo abaixo
    quando a props tiver o mesmo nome da class como está nesse exemplo
    pode deixar apenas com o nome da class/prop como no exemplo abaixo-->
  <span :class="['tag', { ativa }]">
    {{ texto }}
  </span>
</template>

<style scoped>
.tag {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--cinza);
  background: var(--cinza-claro);
  font-weight: 400;
}

.tag.ativa {
  color: var(--creme, #fffaf3);
  background: var(--coral, #f0633c);
  font-weight: 700;
}
</style>
