<template>
  <div class="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
    <header class="masthead mb-auto">
      <div class="inner text-center">
        <h3 class="masthead-brand">
          <img src="../assets/UniStak Logo@3x.svg" alt="logo" />
        </h3>
      </div>
    </header>

    <main role="main" class="inner cover">
      <form>
        <!-- Step 1 -->
        <div class="clearfix" v-show="step === 1">
          <h2>What university do you go to?</h2>
          <ul>
            <li
              v-on:click="
                handleCardPressed(school.name, school.value, school.img)
              "
              v-for="school in this.schools"
              v-bind:key="school.key"
            >
              <div class="schoolCard">
                <img class="schoolImg" :src="getImgUrl(school.img)" :alt="school.img" />
                <p class="school-p-bottom">{{ school.name }}</p>
              </div>
            </li>
          </ul>
          <p class="stepCount">{{ step }}/4</p>
        </div>
        <!-- Step 2 -->
        <div class="clearfix" v-show="step === 2">
          <h2 class="gpaHeading">What's your GPA?</h2>
          <h5 class="lying">(Lying helps no-one, only you see this)</h5>
          <p class="lead">
            <input
              type="text"
              placeholder="Enter your GPA here"
              v-on:keydown.enter="handleGPAentered($event)"
              v-model="onboard.gpa"
            />
          </p>
          <a v-on:click="handleGPAentered" href="#" class="btnempty">
            <span>Next</span>
          </a>
          <p class="stepCount">{{ step }}/4</p>
        </div>
        <!-- Step 3 -->
        <div class="clearfix" v-show="step === 3">
          <h2 class="gpaHeading">What are you studying?</h2>
          <p class="lead">
            <!-- <input
              type="text"
              placeholder="Search for your major"
              v-on:keydown.enter="handleMajorentered($event)"
              v-model="onboard.major"
            />-->
            <v-select
              class="style-chooser"
              v-model="onboard.major"
              placeholder="Search for your area of study"
              :options="options"
            ></v-select>
          </p>
          <a v-on:click="handleMajorentered" href="#" class="btnempty">
            <span>Next</span>
          </a>
          <p class="stepCount">{{ step }}/4</p>
        </div>

        <!-- Step 4 -->
        <div class="clearfix" v-show="step === 4">
          <h2 class="gpaHeading">What year are you?</h2>

          <ul class="yearButtons">
            <li
              v-on:click="handleYearCardPressed(year.name)"
              v-for="year in this.years"
              v-bind:key="year.key"
            >
              <div v-bind:class="{ cardSelected: year.selected }" class="yearCard">
                <p class="yearCardText">{{ year.name }}</p>
              </div>
            </li>
          </ul>

          <a v-on:click="finish" href="#" class="finishButton">
            <span>see where you stak!</span>
          </a>
          <p class="stepCount">{{ step }}/4</p>
        </div>
      </form>
    </main>

    <footer class="mastfoot mt-auto">
      <div class="inner">
        <p>
          <img src="../assets/Powered by Tudr.png" alt="logo" />
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "form",
  data() {
    return {
      step: 1,
      schools: [
        {
          name: "Ball State",
          value: "150136",
          key: 1,
          img: "ball-state-logo-university.png"
        },
        {
          name: "Purdue",
          value: "243744",
          key: 2,
          img: "1280px-Purdue_Boilermakers_logo.svg (1).png"
        },
        {
          name: "Ohio State",
          value: "os",
          key: 3,
          img: "OhioStAthlOnBlack (1).png"
        },
        {
          name: "Indiana",
          value: "iu",
          key: 4,
          img: "Indiana_Hoosiers_logo.svg (1).png"
        }
      ],
      years: [
        {
          name: "Freshman",
          value: "freshy",
          key: 1,
          selected: false
        },
        {
          name: "Sophomore",
          value: "soph",
          key: 2,
          selected: false
        },
        {
          name: "Junior",
          value: "jun",
          key: 3,
          selected: false
        },
        {
          name: "Senior",
          value: "sen",
          key: 4,
          selected: false
        },
        {
          name: "Graduate",
          value: "grad",
          key: 5,
          selected: false
        }
      ],
      options: [{ label: "Other", code: 59124 }],
      queryResults: []
    };
  },
  props: {
    name: {
      type: String,
      default: "Invaluable Student"
    },
    onboard: {
      type: Object,
      default: () => {
        return {
          school: "Ball State",
          id: "",
          gpa: "",
          major: "",
          year: "",
          img: ""
        };
      }
    }
  },
  methods: {
    // prev() and next() handle the hiding and showing of the rendered view
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    submit() {
      alert("Submit to blah and show blah and etc.");
    },
    // send information to the final page
    finish() {
      this.$router.push({
        name: "stakup",
        params: { onboard: this.onboard, name: this.name }
      });
    },
    handleCardPressed(name, id, img) {
      this.onboard.school = name;
      this.onboard.id = id;
      this.onboard.img = img;
      this.fetchData();

      this.next();
    },
    handleYearCardPressed(value) {
      this.onboard.year = value;

      // resetting all selected values
      this.years.forEach(e => {
        return (e.selected = false);
      });

      // finding the object that matches the value from the card click
      this.years.find(({ name }) => {
        return name === value;
      }).selected = true;
      // this.next();
    },
    handleGPAentered($event) {
      // We have to pass in the event here to prevent the default and propagation action on the input field
      // If users have LastPass installed, it can cause issues where the form can't be completed.
      $event.preventDefault();
      $event.stopPropagation();
      if (this.onboard.gpa) {
        this.next();
      }
    },
    handleMajorentered($event) {
      // We have to pass in the event here to prevent the default and propagation action on the input field
      // If users have LastPass installed, it can cause issues where the form can't be completed.
      $event.preventDefault();
      $event.stopPropagation();
      if (this.onboard.major) {
        this.next();
      }
    },
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    fetchData() {
      const baseURI = this.queryBuilder(this.onboard.id);
      this.$http.get(baseURI).then(result => {
        this.queryResults = result.data.results[0].latest;
        console.log(result.data.results[0].latest);
        this.populateMajorDropdown();
      });
    },
    queryBuilder(id) {
      let query =
        "https://api.data.gov/ed/collegescorecard/v1/schools?id=" +
        id +
        "&api_key=ipjrz5j95hnEGS0dGvG5bcyWWzchHkapHV3gxTcO";
      return query;
    },
    populateMajorDropdown() {
      //Inserting objects into dropdown {area of study and salary}
      let cipResults = this.queryResults.programs.cip_4_digit;
      let highLow = this.findHighAndLowSalary(cipResults);
      console.log(highLow);
      for (let x of cipResults) {
        if (x.earnings.median_earnings !== null) {
          this.options.unshift({
            label: x.title,
            salary: x.earnings.median_earnings,
            salaryLow: highLow.low,
            salaryHigh: highLow.high
          });
          this.removeDuplicates();
        }
      }
    },
    removeDuplicates() {
      // Remove duplicate items from API call.
      this.options = this.options.reduce((acc, current) => {
        const x = acc.find(item => item.label === current.label);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
    },

    findHighAndLowSalary(cipResults) {
      let salaries = [];
      for (let x of cipResults) {
        if (x.earnings.median_earnings !== null) {
          salaries.push(x.earnings.median_earnings)
        }
      }
      salaries.sort((a, b) => a - b);
      return { low: salaries[0], high: salaries[salaries.length-1] };
    }
  }
};
</script>
