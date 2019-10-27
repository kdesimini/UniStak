<template>
  <div class="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
    <header class="masthead mb-auto">
      <div class="inner text-center">
        <h3 class="masthead-brand">UniStak logo</h3>
      </div>
    </header>

    <main role="main" class="inner cover">
      <h5 class="c-subheading-top">How well do you</h5>
      <h1 class="cover-heading orange-style">Stak-up</h1>
      <h5 class="c-subheading-bottom">in college?</h5>
      <p
        class="lead main"
      >You only get one chance to make a first impression, so you better get it right - isn't that what they say?</p>
      <p class="lead">
        <span>
          <input
            type="text"
            v-model="message"
            placeholder="What's your name?"
            @keyup.enter="handleReRoute"
          />
        </span>
        <a v-on:click="handleReRoute" href="#" class="btn btn-lg btn-secondary">get started</a>
      </p>
    </main>

    <footer class="mastfoot mt-auto">
      <div class="inner">
        <p>
          Powered By
          <a href="https://getbootstrap.com/">tudr logo</a>
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "start",
  data() {
    return {
      message: ""
    };
  },
  methods: {
    handleReRoute() {
      this.$router.push({
        name: "form",
        params: { name: this.message }
      });
    }
  }
};
</script>