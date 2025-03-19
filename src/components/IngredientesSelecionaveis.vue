<script lang="ts">
import Tag from "./Tag.vue";

export default {
  components: { Tag },
  props: {
    ingrediente: { type: String, requerid: true },
  },
  data() {
    return {
      selecionado: false,
    };
  },
  methods: {
    aoClicar() {
      this.selecionado = !this.selecionado;

      if (this.selecionado) {
        this.$emit("adicionarIngrediente", this.ingrediente);
      } else {
        this.$emit("removerIngrediente", this.ingrediente);
      }
    },
  },
  emits: ["adicionarIngrediente", "removerIngrediente"],
};
</script>
<!-- v-on:click="aoClicar()" o "onClick" 
 pode ser feito dessa maneira com o v-on:click ou com o @  -->
<template>
  <button class="ingrediente" @click="aoClicar()" :aria-pressed="selecionado">
    <Tag :texto="ingrediente" :ativa="selecionado" />
  </button>
</template>

<style scoped>
.ingrediente {
  cursor: pointer;
}
</style>
