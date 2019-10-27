<template>
  <div class="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
    <header class="masthead mb-auto">
      <div class="inner text-center">
        <h3 class="masthead-brand">UniStak logo</h3>
      </div>
    </header>

    <main role="main" class="inner cover">
      <form>
        <!-- Step 1 -->
        <div class="clearfix" v-show="step === 1">
          <h2>What school do you go to?</h2>
          <ul>
            <li
              v-on:click="handleCardPressed(school.name)"
              v-for="(school) in this.schools"
              v-bind:key="school.key"
            >
              <div class="schoolCard">{{school.name}}</div>
            </li>
          </ul>
          <p class="stepCount">{{step}}/4</p>
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
          <p class="stepCount">{{step}}/4</p>
        </div>
        <!-- Step 3 -->
        <div class="clearfix" v-show="step === 3">
          <h2 class="gpaHeading">What are you studying?</h2>
          <p class="lead">
            <input
              type="text"
              placeholder="Search for your major"
              v-on:keydown.enter="handleMajorentered($event)"
              v-model="onboard.major"
            />
          </p>
          <a v-on:click="handleMajorentered" href="#" class="btnempty">
            <span>Next</span>
          </a>
          <p class="stepCount">{{step}}/4</p>
        </div>

        <!-- Step 4 -->
        <div class="clearfix" v-show="step === 4">
          <h2 class="gpaHeading">What year are you?</h2>

          <ul class="yearButtons">
            <li
              v-on:click="handleYearCardPressed(year.name)"
              v-for="(year) in this.years"
              v-bind:key="year.key"
              
            >
              <div v-bind:class="{ cardSelected: year.selected }" class="yearCard"><p class="yearCardText">{{year.name}}</p></div>
            </li>
          </ul>

          <a v-on:click="finish" href="#" class="finishButton">
            <span>see where you stak!</span>
          </a>
          <p class="stepCount">{{step}}/4</p>
        </div>
      </form>
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
  name: "form",
  data() {
    return {
      step: 1,
      schools: [
        {
          name: "Ball State",
          value: "bsu",
          key: 1
        },
        {
          name: "Purdue",
          value: "purdu",
          key: 2
        },
        {
          name: "Ohio State",
          value: "os",
          key: 3
        },
        {
          name: "Indiana University",
          value: "iu",
          key: 4
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
      ]
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
          gpa: "",
          major: "",
          year: ""
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
    handleCardPressed(value) {
      this.onboard.school = value;
      this.next();
    },
    handleYearCardPressed(value) {
      this.onboard.year = value;

      // resetting all selected values
      this.years.forEach((e) => {return e.selected = false ;});

      // finding the object that matches the value from the card click
      this.years.find( ({ name }) => {
        return name === value;}).selected = true;

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
    }
  }
};
</script>