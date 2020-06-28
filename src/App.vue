<template>
  <div id="app">
    <div class="screen--first-wrapper" id="screen-first-wrapper">
      <div class="screen screen--first" id="screen-first">
        <div class="description">
          <h1 class="h1">Я Алия</h1>
          <p class="text">
            Я дизайнер тралал и все такое тут около двух строчек будет в общей сложности Я дизайнер тралал и все такое тут около двух строчек будет в общей сложност
          </p>
        </div>
      </div>
    </div>

    <div class="screen--second-wrapper" id="screen-second-wrapper" v-waypoint="{ active: true, callback: onWaypointSecondScreen }">
      <div class="screen screen--second" id="screen-second">
        <div class="header">
          <div class="project-1-wrap" 
          :style="{
            background: isAfterSecondScreen ? '#fbcd22' : 'transparent'
          }">
            <h1 v-show="!isAfterSecondScreen" class="h1 text-red">Некоммерческие работы</h1>
            <div class="project-1-img-wrapper"
              :style="{
                width: projectFirstWidth + 'px',
                height: projectFirstHeight,
                transform: 'translate3d(' + projectFirstLeft + 'px, ' + projectFirstTop + 'px, 0)'
              }">
              <img src="./assets/images/project-1.jpg">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="screen--third-wrapper">
      <div class="blocks">
        <div class="blocks-item blocks-item--first">
          <div class="block-row-item">
            <img src="./assets/images/projects/image-1.jpg" alt="">
          </div>
          <div class="block-row-item">
            <img src="./assets/images/projects/image-2.jpg" alt="">
          </div>
          <div class="block-row-item">
            <img src="./assets/images/projects/image-3.jpg" alt="">
          </div>

          <div class="block-row-item">
            <div class="block-row-title">
              Концепт интернет– магазина бренда одежды “TOFT”
            </div>
            <div class="block-row-desc">
              <p>
                Целью проекта являлось осуществление нескольких задач, среди которых: повысить узнаваемость бренда; увеличить продажи.
              </p>
              <p>
                Реализация данного проекта осуществлялась в рамках курса по веб-дизайну. Использованные в данном проекте фотографии принадлжат их владельцам.
              </p>
            </div>
          </div>
        </div>

        <div class="blocks-item blocks-item--second">
          <div class="block-row-item">
            <img src="./assets/images/projects/image-4.jpg" alt="">
          </div>

          <div class="block-row-item-flex">
            <div class="block-row-item">
              <img src="./assets/images/projects/image-5.jpg" alt="">
            </div>
            <div class="block-row-item">
              <img src="./assets/images/projects/image-6.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="blocks-item blocks-item--third">
          <div class="block-row-item">
            <img src="./assets/images/projects/image-7.jpg" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="person person--first"
      :style="{
        opacity: showPersonNumber === 1 ? 1 : 0,
        backgroundSize: personSize + '% auto',
        backgroundPosition: 'right ' + personPositionRight + 'px top ' + personPositionTop + 'px'
      }"></div>

    <div class="person person--second" v-show="percentSecondScreen < 100"
      :style="{
        opacity: showPersonNumber === 2 ? 1 : 0,
        backgroundSize: personSize + '% auto',
        backgroundPosition: 'right ' + personPositionRight + 'px top ' + personPositionTop + 'px'
      }"></div>

    <div class="person person--third" v-show="percentSecondScreen >= 100"
      :style="{
        opacity: showPersonNumber === 2 ? 1 : 0
      }"></div>

    <div class="arrow">
      <svg width="55" height="37" viewBox="0 0 55 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50.375 5L27.5 27.875L4.625 5" stroke="currentColor" stroke-width="12"/>
      </svg>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      percent: 0,
      percentSecondScreen: 0,
      personSize: 80,
      personPositionTop: -130,
      personPositionRight: -245,
      showPersonNumber: 2,
      tempHeightFirst: 0,
      tempHeightSecond: 0,
      secondScreenWay: 'out',

      projectFirstWidth: 846,
      projectFirstHeight: 'auto',
      projectFirstLeft: 80,
      projectFirstTop: 192,

      isAfterSecondScreen: false
    }
  },
  // computed: {
  //   secondScreenStyle() {
  //     return {
  //       width: this.projectFirstWidth + 'px',
  //       transform: 'rotate(' + this.turn + 'turn)'
  //     }
  //   }
  // },
  watch: {
    tempHeightFirst() {
      this.showPersonNumber = this.showPersonNumber === 2 ? 1 : 2;
    }
  },
  methods: {
    checkPersonSize() {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      // console.log('st: ', st);
      var firstScreen = document.getElementById('screen-first');
      var firstScreenHeight = firstScreen.offsetHeight;

      // console.log('firstScreenHeight: ', firstScreenHeight);

      var total = 50;
      var max = 80;

      this.percent = st / (firstScreenHeight / 100);
      // console.log('percent: ', percent);

      var totalEl = total / 100 * this.percent;
      // console.log('totalEl: ', totalEl);
      
      this.personSize = max - totalEl <= 26.7 ? 26.7 : max - totalEl;
      // console.log('personSize: ', this.personSize);


      var totalRight = 245;
      var maxRight = 245;
      var totalElRight = totalRight / 100 * this.percent;
      this.personPositionRight = -(maxRight - totalElRight) >= 0 ? 0 : -(maxRight - totalElRight);


      var totalTop = 130;
      var maxTop = 130;
      var totalElTop = totalTop / 100 * this.percent;
      this.personPositionTop = -(maxTop - totalElTop) >= 0 ? 0 : -(maxTop - totalElTop);

      if (this.percent >= 100) {
        if (st > this.tempHeightFirst + 200 || st < this.tempHeightFirst - 200) {
          this.tempHeightFirst = st;
        }
      }

      if (this.secondScreenWay === 'in' || this.percent > 100) {
        var startPoint = document.getElementById('screen-first-wrapper').offsetHeight;

        var secondScreen = document.getElementById('screen-second-wrapper');
        var secondScreenHeight = secondScreen.offsetHeight;

        var scrollPos = st - startPoint - (secondScreenHeight / 7);

        this.percentSecondScreen = scrollPos / ((secondScreenHeight - (3 * (secondScreenHeight / 7)))  / 100);

        const project1LeftMax = 0;
        const project1LeftStart = 80;
        this.projectFirstLeft = this.setValue(project1LeftMax, project1LeftStart, this.percentSecondScreen, false);

        const project1TopMax = 0;
        const project1TopStart = 192;
        this.projectFirstTop = this.setValue(project1TopMax, project1TopStart, this.percentSecondScreen, false);

        const project1WidthMax = window.innerWidth - 15;
        const project1WidthStart = 846;
        const projectFirstWidth = this.setValue(project1WidthMax, project1WidthStart, this.percentSecondScreen, true);
        this.projectFirstWidth = projectFirstWidth - this.projectFirstLeft;
        if (this.projectFirstWidth >= project1WidthMax) {
          this.projectFirstHeight = '100vh';
        } else {
          this.projectFirstHeight = 'auto';
        }


        const project1PersonTopMax = 498;
        const project1PersonTopStart = 0;
        this.personPositionTop = this.setValue(project1PersonTopMax, project1PersonTopStart, this.percentSecondScreen, true);

        const project1PersonRightMax = 113;
        const project1PersonRightStart = 0;
        this.personPositionRight = -(this.setValue(project1PersonRightMax, project1PersonRightStart, this.percentSecondScreen, true));

        /*After*/
        var scrollPosAfter = st - startPoint - 5 * (secondScreenHeight / 7);
        var percentSecondScreenAfter = scrollPosAfter / ((secondScreenHeight - (6 * (secondScreenHeight / 7)))  / 100);
        // console.log('percentSecondScreenAfter: ', percentSecondScreenAfter)
        if (percentSecondScreenAfter >= 0) {
          const project1LeftMaxAfter = 78;
          const project1LeftStartAfter = 0;
          this.projectFirstLeft = this.setValue(project1LeftMaxAfter, project1LeftStartAfter, percentSecondScreenAfter, true);

          const project1TopMaxAfter = 84;
          const project1TopStartAfter = 0;
          this.projectFirstTop = this.setValue(project1TopMaxAfter, project1TopStartAfter, percentSecondScreenAfter, true, true, false);
          
          const project1WidthMaxAfter = project1WidthMax - 156;
          const project1WidthStartAfter = project1WidthMax;
          const projectFirstWidthAfter = this.setValue(project1WidthMaxAfter, project1WidthStartAfter, percentSecondScreenAfter, false, true);
          this.projectFirstWidth = projectFirstWidthAfter;
          this.projectFirstHeight = 'auto';
          this.isAfterSecondScreen = true;
        } else {
          this.isAfterSecondScreen = false;
        }
      }
    },

    onWaypointSecondScreen(point) {
      this.secondScreenWay = point.going;
    },
    setValue(max, start, percent, isIncrease = true, isConsole) {
      if (isConsole) {
        console.log('max: ', max)
        console.log('start: ', start)
        console.log('percent: ', percent)
      }

      let value, add, total;

      if (isIncrease) {
        total = max - start;
        add = total / 100 * percent;
        if (isConsole) {
          console.log('add: ', add)
        }
        if (isConsole) {
          console.log('start + add: ', start + add)
        }
        value = start + add <= start ? start : start + add;
        if (isConsole) {
          console.log('value: ', value)
        }
        if (value >= max) {
          value = max;
        }
        if (isConsole) {
          console.log('value 2: ', value)
        }
      } else {
        total = start - max;
        add = total / 100 * percent;
        if (isConsole) {
          console.log('add: ', add)
        }
        if (isConsole) {
          console.log('start - add: ', start - add)
        }
        value = start - add <= max ? max : start - add;
        if (isConsole) {
          console.log('value: ', value)
        }
        if (value >= start) {
          value = start;
        }
        if (isConsole) {
          console.log('value 2: ', value)
        }
      }
      if (isConsole) {
        console.log('value 3: ', value)
      }
      return value;
    }
  },
  mounted() {
    var lastScrollTop = 0;
    var firstScreen = document.getElementById('screen-first');
    var firstScreenHeight = firstScreen.offsetHeight;
    this.tempHeightFirst = firstScreenHeight;

    var secondScreen = document.getElementById('screen-second');
    var secondScreenHeight = secondScreen.offsetHeight;
    this.tempHeightSecond = secondScreenHeight;

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener("scroll", () => { // or window.addEventListener("scroll"....
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      var direction;
      if (st > lastScrollTop){
        // console.log('down')
        direction = 'down';
      } else {
        // console.log('up')
        direction = 'up';
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

      this.checkPersonSize(direction);
    }, false);
  }
}
</script>

<style lang="scss" src="@/styles/base.scss"></style>
<style lang="scss">
@import "@/styles/colors.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  position: relative;
  min-width: 1440px;
}

.screen {
  width: 100%;
  height: 100vh;
}

.screen--first-wrapper {
  background-color: $red-color;
  position: relative;
  height: 500vh;
}

.person {
  position: fixed;
  top: 0;
  right: 0;
  // background-image: url('./assets/images/person.svg'), url('./assets/images/road1.svg');
  // background-position: top right;
  // background-position: 500px -130px, top right;
  background-position: right -245px top -130px;
  //background-size: 80% auto, auto;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  // transition: opacity ease .3s;
}

.person--first {
  background-image: url('./assets/images/person.svg');
}

.person--second {
  background-image: url('./assets/images/person-2.svg');
}

.person--third {
  background-image: url('./assets/images/person-3.svg');
  background-size: auto;
  background-position: right 0px bottom -31px;
}

.screen--first {
  position: sticky;
  top: 0;
  // background-image: url('./assets/images/person.svg'), url('./assets/images/road1.svg');
  // background-position: top right;
  // background-position: 500px -130px, top right;
  // background-position: right -245px top -130px, top right;
  //background-size: 80% auto, auto;
  // background-repeat: no-repeat;
  height: 100vh;
  background-image: url('./assets/images/road1.svg');
  background-position: top right;
  background-repeat: no-repeat;
}

.screen--second-wrapper {
  height: 700vh;
}

.screen--second {
  position: sticky;
  top: 0;
  height: 100vh;
  // background-image: url('./assets/images/road2.svg');
  background-position: top right;
  background-repeat: no-repeat;
  background-image: url('./assets/images/road2.svg');
  background-position: top right;
  background-repeat: no-repeat;
}

.description {
  width: 41.5%;
  min-width: 600px;
  padding-top: 185px;
  margin-left: 125px;
  box-sizing: border-box;
  .h1 {
    margin-bottom: 24px;
  }

  .text {
    margin: 0;
  }
}

.header {
  width: 846px;
  padding-top: 50px;
  margin-left: 80px;
  .h1 {
    margin-bottom: -40px;
    position: relative;
    z-index: 2;
  }

  .project-1-img-wrapper {
    position: absolute;
    width: 846px;
    left: 0;
    top: 0;
    z-index: 3;
    background: #cfc6c7;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    // transform: translate3d(80px, 192px, 0);
  }

  img {
    width: 100%;
  }
}

.arrow {
  position: fixed;
  color: $white-color;
  transition: color ease .3s;
  left: calc(50% - 25px);
  bottom: 65px;

  svg {
    transition: color ease .3s;
  }
}

.arrow--red {
  color: $red-color;
}

.project-1-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.screen--third-wrapper {
  background: #fbcd22;
  padding: 0 78px;
  padding-bottom: 300px;
}

.blocks {
  display: flex;
  // flex-direction: column;
  max-width: 1284px;
  padding-top: 12px;
  margin: 0 auto;
}

.blocks-item {
  &:not(:last-child) {
    margin-right: 12px;
    // margin-right: 0.934%;
  }

  img {
    max-width: 100%;
  }
}

.blocks-item--first {
  width: 646px;
  // width: 49.5%;
  // flex-basis: 49.5%;
}
.blocks-item--second {
  width: 420px;
  // width: 32.7%;
  // flex-basis: 32.7%;
}
.blocks-item--third {
  width: 204px;
  // width: 15.88%;
  // flex-basis: 15.88%;
}
.block-row-item {
  margin-bottom: 12px;
  // margin-bottom: 0.934%;
}
.block-row-item-flex {
  display: flex;

  .block-row-item {
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
}

.block-row-title {
  margin-top: 14px;
  margin-bottom: 24px;
  font-family: Gotham Pro;
  font-style: normal;
  font-weight: 900;
  font-size: 62px;
  line-height: 108%;
  color: #EA2B1F;
}

.block-row-desc {
  p {
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 108%;
    letter-spacing: -0.02em;
    color: #EA2B1F;

    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
}
</style>
