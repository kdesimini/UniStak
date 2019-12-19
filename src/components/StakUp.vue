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
            <div class="statsCard">
              <img class="statsImg" :src="getImgUrl(onboard.img)" />
              <p
                class="statsParagraphTop"
              >{{onboard.major.label | truncate(12, '...')}} // {{onboard.year}}</p>
              <p class="statsNumber">#24</p>
              <p class="statsLogo">
                <img src="../assets/UniStak Logo@3x.svg" alt="logo" width="80" height="14" />
              </p>
            </div>
          </li>
        </ul>
        <ul>
          <!-- Grades Card -->
          <li>
            <div class="resultsCard grades">
              <div style="font-size: 1.35em;font-weight: 500;">{{results[0].name}}</div>
              <p style="color: #F64628;" class="lead stakup">{{results[0].stat}}%</p>
              <p class="lead">
                <b-progress
                  show-value
                  id="1"
                  :value="results[0].stat"
                  :variant="results[0].variant"
                ></b-progress>
              </p>
            </div>
          </li>

          <!-- Graduation Card -->
          <li>
            <div class="resultsCard grad">
              <div style="font-size: 1.35em; font-weight: 500;">{{results[1].name}}</div>
              <p style="color: #CD01B0;" class="lead stakup">{{results[1].stat | round()}}%</p>
              <p class="lead">
                <b-progress>
                  <b-progress-bar
                    id="1"
                    :value="results[1].completion"
                    :label="`You are ${((this.results[1].completion)).toFixed(2)}% completed!`"
                    :variant="results[1].variant"
                  ></b-progress-bar>
                </b-progress>
              </p>
            </div>
          </li>

          <!-- Salary Card -->
          <li>
            <div class="resultsCard">
              <div style="font-size: 1.35em;font-weight: 500;">{{results[2].name}}</div>
              <p style="color: #47EBFF;" class="lead stakup">${{results[2].salary | numberWithCommas()}}/y</p>
              <p class="lead">
                <b-progress>
                  <b-progress-bar
                    id="1"
                    :value="results[2].stat"
                    :label="`${((this.results[2].stat)).toFixed(2)}%`"
                    :variant="results[2].variant"
                  ></b-progress-bar>
                </b-progress>
              </p>
              <div class="salaryDiv">
                <div class="salaryLow">Low: ${{this.results[2].low | numberWithCommas()}}/y</div>
                <div class="salaryHigh">High: ${{this.results[2].high | numberWithCommas()}}/y</div>
              </div>
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
            <img class="gradCardImg" src="../assets/graduationCard.png" alt="Smiley face" />
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
          <li>
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
        <div class></div>
      </footer>
    </div>
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
      <main role="main" class="cover bottomSection"></main>
      <footer class="mastfoot mt-auto">
        <div class="inner bottomSection">
          <p>
            <img src="../assets/Powered by Tudr.png" alt="logo" />
          </p>
          <div class="up-your-game">Up your game.</div>
          <div
            class="breeze-through-your"
          >Breeze through your next assignment, test, lab report, or quiz.</div>
          <div
            class="get-other-stud"
          >Get other students to teach you the coursework you're working on.</div>
          <a href="#" class="btn btn-lg btn-secondary button-spacing">Get Tudr</a>
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
          stat: 0,
          yearAvg: 0,
          majorRatio: 0,
          variant: "primary",
          key: 1
        },
        {
          name: "Graduation",
          stat: 0,
          completion: 0,
          yearAvg: 0,
          majorRatio: 0,
          variant: "success",
          key: 2
        },
        {
          name: "Salary",
          stat: 0,
          salary: 0,
          yearAvg: 0,
          majorRatio: 0,
          variant: "info",
          key: 3,
          high: 0,
          low: 0
        }
      ],
      queryResults: []
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
          id: "",
          gpa: "3.5",
          major: {}, //area of study, salary, salary high, salary low
          year: "Senior",
          img: ""
        };
      }
    }
  },
  methods: {
    setStats() {
      // Setting Grades card data
      this.results[0].stat = (this.onboard.gpa * 100) / 4;
      

      // Setting Graduation card data
      this.results[1].stat = this.queryResults.completion.rate_suppressed.four_year * 100;
      this.calculateCompletion();

      // Setting salary card data
      this.results[2].salary = this.onboard.major.salary;
      this.results[2].high = this.onboard.major.salaryHigh;
      this.results[2].low = this.onboard.major.salaryLow;
      this.results[2].stat =
        (this.onboard.major.salary / this.onboard.major.salaryHigh) * 100;
    },
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    fetchData() {
      const baseURI = this.queryBuilder(this.onboard.id);
      this.$http.get(baseURI).then(result => {
        this.queryResults = result.data.results[0].latest;
        console.log(result.data.results[0].latest);
        this.setStats();
      });
    },
    queryBuilder(id) {
      let query =
        "https://api.data.gov/ed/collegescorecard/v1/schools?id=" +
        id +
        "&api_key=ipjrz5j95hnEGS0dGvG5bcyWWzchHkapHV3gxTcO";
      return query;
    },
    calculateCompletion() {
      console.log("entered");
      let x = this.onboard.year;
      console.log(x);
      if (x === "Freshman") {
          this.results[1].completion = 25;
      } else if (x === "Sophomore") {
        this.results[1].completion = 50;
      } else if (x === "Junior") {
        this.results[1].completion = 75;
      } else if (x === "Senior") {
        this.results[1].completion = 100;
      } else if (x === "Graduate") {
        this.results[1].completion = 200;
      } else {
        console.error("something bum happened")
      }
    }
  },
  filters: {
    // Truncate text that is too large to fit in cards/page
    truncate: function(text, length, suffix) {
      return text.substring(0, length) + suffix;
    },
    //seperate thousands in dollar amount
    numberWithCommas: function(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    round: function(x) {
      if (x < (Math.floor(x) + Math.ceil(x)) / 2) {
        return Math.floor(x)
      } else {
        return Math.ceil(x);
      }
    }
  },
  created() {
    // If page is visited without filling out form, redirect.
    if (this.onboard.school === "NULLNULL") {
      this.$router.push({ name: "start" });
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>