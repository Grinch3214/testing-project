<template>
    <div class="not-found d-flex justify-center align-center">
      <div class="not-found__inner">
        <h1 class="not-found__title"> 404 </h1>
        <router-link class="not-found__btn" to="/">Home</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.not-found {
  min-height: 100vh;
  background: url('~@/assets/images/404.jpg') 0 0/cover no-repeat;
  position: relative;
  background-position: 50%;
  @media screen and (min-width: 992px) {
      background-position: 0%;
    }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0002;
  }

  &__inner {
    z-index: 2;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #fff;
    font-size: 100px;
    @media screen and (min-width: 992px) {
      font-size: 160px;
    }
  }

  &__title {
  }

  &__btn {
    text-decoration: none;
    font-size: 24px;
    padding: 12px 80px;
    background: #448aff;
    color: #fff;
    border-radius: 4px;
    transition: .3s;
    &:hover {
      transform: translateY(-1px);
      background: #3a74d8;
    }
  }
}
</style>