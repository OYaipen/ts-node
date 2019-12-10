<template>
  <div class="basic-layout d-flex align-items-center justify-content-center m-0 ">
    <child />
  </div>
</template>

<script>
export default {
  name: 'BasicLayout'
}
</script>

<style lang="scss">
.basic-layout {
  background-color: rgb(150, 217, 242);
  height: 100vh;
  font-weight: 100;
  position: relative;

  .links > a {
    color: rgb(68, 107, 120);
    padding: 0 25px;
    font-size: 20px;
    font-weight: 600;
    // letter-spacing: .1rem;
    text-decoration: none;
    // text-transform: uppercase;
  }
}
</style>
