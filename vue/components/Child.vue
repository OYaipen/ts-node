<template>
  <transition name="page" mode="out-in">
    <slot>
      <router-view class="container-fluid" />
    </slot>
  </transition>
</template>

<script>
export default {
  name: 'Child'
}
</script>
