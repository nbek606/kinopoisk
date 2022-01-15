<template>
    <div class="loader loader--wrapper">
        <div class="loader__spinner"></div>
        <h1>Загрузка данных...</h1>
    </div>
</template>

<script>
    export default {
        name: "Loader"
    }
</script>

<style lang="scss" scoped>
    .loader {
        &__spinner {
            font-size: 4px;
            text-indent: -9999em;
            border: 5px solid $light-gray;
            border-left: 5px solid transparent;
            border-radius: 50%;
            width: 10em;
            height: 10em;
            position: absolute;
            animation: loading 1.1s infinite linear;
            z-index: 10001;
            left: 50%;
            top: 50%;
            margin-left: -5em;
            margin-top: -5em;
        }
        &--wrapper {
            z-index: 10001;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            position: fixed;
            background: rgba(0, 0, 0, 0.6);
        }

        h1{
          position: absolute;
          left: calc(50% - 70px);
          top: 50%;
          font-size: 20px;
          color: $light-gray;
          font-weight: 300;
          margin-top: 40px;
        }
    }
    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
