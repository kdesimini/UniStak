<template>
  <div>
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
      <header class="masthead mb-auto">
        <div class="inner text-center">
          <h3 class="masthead-brand">
            <img src="../assets/UniStak Logo@3x.svg" alt="logo" />
          </h3>
        </div>
      </header>

      <main role="main" class="inner cover">
        <h5 class="finish-heading-top">congrats, {{name}}</h5>
        <h2 class="finish-sub-heading-top">You're on track!</h2>
        <ul>
          <li>
            <div class="statsCard"></div>
          </li>
        </ul>
        <ul>
          <li v-for="(result) in this.results" v-bind:key="result.key">
            <div class="statsCard">
              {{result.name}}
              <p class="lead stakup">{{result.stat}}%</p>
              <p class="lead">
                <b-progress id="1" :value="result.stat" :variant="result.variant"></b-progress>
              </p>
            </div>
          </li>
        </ul>
        <p class="lead">
          <a href="#" class="finishButton">share your results!</a>
        </p>
      </main>

      <footer class="mastfoot mt-auto">
        <div class="inner">
          <!-- <p>
          Powered By
          <a href="https://getbootstrap.com/">tudr logo</a>
          </p>-->
        </div>
      </footer>
    </div>

    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column text-center clearfix">
      <main role="main" class="inner cover">
        <!-- <h5 class="finish-heading-top">congrats, {{name}}</h5> -->
        <!-- <h2 class="finish-sub-heading-top">You're on track!</h2> -->
        <ul class="flex-container wrap" style="display: flex; align-items: center;">
          <li style="display:table-cell; vertical-align: middle;">
            <div class="graduationFloatBox">
              <p class="colorSlashes" style="color: #f64628">//</p>
              <p class="sectionTitle">Grades</p>
              <p class="sectionHeading">Lorem ipsum dolor</p>
              <p
                class="sectionText"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex qui eveniet soluta vero cum expedita molestias delectus et suscipit, porro reiciendis aspernatur quidem enim iste voluptas voluptatem atque itaque temporibus?</p>
              <a href="#" class="btnempty left">
                <span>Read More</span>
              </a>
            </div>
          </li>
          <li>
            <img class="gradCardImg" src="../assets/graduationCard.png" alt="Smiley face" />
          </li>
        </ul>
        <ul></ul>
      </main>
    </div>

        <div class="cover-container d-flex h-100 p-3 mx-auto flex-column text-center clearfix">
      <main role="main" class="inner cover">
        <!-- <h5 class="finish-heading-top">congrats, {{name}}</h5> -->
        <!-- <h2 class="finish-sub-heading-top">You're on track!</h2> -->
        <ul class="flex-container reverse-wrap" style="display: flex; align-items: center;">
          <li style="display:table-cell; vertical-align: middle;">
            <img class="gradCardImg" src="../assets/graduationCard.png"  alt="Smiley face" />
          </li>
          <li>
            <div class="graduationFloatBox">
              <p class="colorSlashes" style="color: #cd01af">//</p>
              <p class="sectionTitle">Graduation</p>
              <p class="sectionHeading">Lorem ipsum dolor</p>
              <p
                class="sectionText"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex qui eveniet soluta vero cum expedita molestias delectus et suscipit, porro reiciendis aspernatur quidem enim iste voluptas voluptatem atque itaque temporibus?</p>
              <a href="#" class="btnempty left">
                <span>Read More</span>
              </a>
            </div>
          </li>
        </ul>
        <ul></ul>
      </main>
    </div>
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
      <main role="main" class="inner cover">
        <!-- <h5 class="finish-heading-top">congrats, {{name}}</h5> -->
        <!-- <h2 class="finish-sub-heading-top">You're on track!</h2> -->
        <ul class="flex-container wrap" style="display: flex; align-items: center;">
          <li >
            <div class="graduationFloatBox">
              <p class="colorSlashes" style="color: #47ebff">//</p>
              <p class="sectionTitle">Salary</p>
              <p class="sectionHeading">Lorem ipsum dolor</p>
              <p
                class="sectionText"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex qui eveniet soluta vero cum expedita molestias delectus et suscipit, porro reiciendis aspernatur quidem enim iste voluptas voluptatem atque itaque temporibus?</p>
              <a href="#" class="btnempty left">
                <span>Read More</span>
              </a>
            </div>
          </li>
          <li style="display:table-cell; vertical-align: middle;">
            <img class="gradCardImg" src="../assets/salaryCard.png" alt="Smiley face" />
          </li>
        </ul>
        <ul></ul>
      </main>
      <footer class="mastfoot mt-auto">
        <div class="inner">
        </div>
      </footer>
    </div>
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
      <main role="main" class="inner cover">
        <!-- <h5 class="finish-heading-top">congrats, {{name}}</h5> -->
        <!-- <h2 class="finish-sub-heading-top">You're on track!</h2> -->
        <ul class="flex-container wrap" style="display: flex; align-items: center;">
          <li >
            <div class="graduationFloatBox">
              <p class="colorSlashes" style="color: #47ebff">//</p>
              <p class="sectionTitle">Salary</p>
              <p class="sectionHeading">Lorem ipsum dolor</p>
              <p
                class="sectionText"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex qui eveniet soluta vero cum expedita molestias delectus et suscipit, porro reiciendis aspernatur quidem enim iste voluptas voluptatem atque itaque temporibus?</p>
              <a href="#" class="btnempty left">
                <span>Read More</span>
              </a>
            </div>
          </li>
          <li style="display:table-cell; vertical-align: middle;">
            <img class="gradCardImg" src="../assets/salaryCard.png" alt="Smiley face" />
          </li>
        </ul>
        <ul></ul>
      </main>
      <footer class="mastfoot mt-auto">
        <div class="inner">
          <p>
            <img src="../assets/Powered by Tudr.png" alt="logo" />
          </p>
        </div>
      </footer>
    </div>


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
          variant: "primary",
          key: 1
        },
        {
          name: "Graduation",
          stat: 20,
          yearAvg: 0,
          majorRatio: 0,
          variant: "success",
          key: 2
        },
        {
          name: "Salary",
          stat: 45,
          yearAvg: 0,
          majorRatio: 0,
          variant: "info",
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
    setStats() {
      this.results[0].stat = 92;
      this.results[1].stat = 89;
      this.results[2].stat = 76;
      console.log("hello");
    }
  },
  created() {
    if (this.onboard.school === "NULLNULL") {
      this.$router.push({ name: "start" });
    }
  },
  mounted() {
    this.setStats();
  }
};
</script>