<template>
  <div class="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
    <header class="masthead mb-auto">
      <div class="inner text-center">
        <h3 class="masthead-brand">UniStak logo</h3>
      </div>
    </header>

    <main role="main" class="inner cover">
      <h5 class="finish-heading-top">congrats, {{name}}</h5>
      <h2 class="finish-sub-heading-top">You're on track!</h2>
      <ul>
        <li v-for="(result) in this.results" v-bind:key="result.key">
          <div class="statsCard">
            {{result.name}}
            <p class="lead">{{result.stat}}%</p>
            <p class="lead">
              <b-progress :value="result.stat" :variant="'balls'" ></b-progress>
            </p>
          </div>
        </li>
      </ul>
      <p class="lead">
        <a v-on:click="handleReRoute" href="#" class="finishButton">share your results!</a>
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
  data: function() {
    return {
      //   name: "",
      //   onboard: {}
      results: [
        {
          name: "Grades",
          stat: 70,
          yearAvg: 0,
          majorRatio: 0,
          key: 1
        },
        {
          name: "Graduation",
          stat: 20,
          yearAvg: 0,
          majorRatio: 0,
          key: 2
        },
        {
          name: "Salary",
          stat: 45,
          yearAvg: 0,
          majorRatio: 0,
          key: 3
        }
      ]
    };
  },
  props: {
    name: {
      type: String,
      default: "name"
    },
    onboard: {
      type: Object,
      default: () => {
        return {
          school: "NULLNULL",
          gpa: "3.5",
          major: "Computer Science",
          year: "Senior"
        };
      }
    }
  },
  methods: {
    handleReRoute() {
      this.results[0].stat= 92;
      this.results[1].stat= 89;
      this.results[2].stat= 76;
      console.log("hello");
    }
  },
  created() {
    if (this.onboard.school === "NULLNULL") {
      this.$router.push({ name: "start" });
    }
  }
};
</script>