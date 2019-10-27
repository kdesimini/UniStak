<template>
    <div>
        Whoops 404!! The page is not available.
        <a href="#" @click.prevent="back">Back to Home</a>
    </div>
</template>
<script>
export default {
    methods: {
        back() {
            this.$router.push({name: 'start'});
        }
    }
}
</script>