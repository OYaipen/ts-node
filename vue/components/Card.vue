<template>
  <div class="card shadow mb-4">
    <div v-if="title" class="card-header py-3">
       <h6 class="m-0 font-weight-bold text-primary">{{ title }}</h6>
    </div>

    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    title: { type: String, default: null }
  }
}
</script>
