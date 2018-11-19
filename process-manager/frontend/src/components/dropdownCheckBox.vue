<template>
   <div id="selectDropDown" class="checkbox-select">
    <div class="checkbox-select__trigger" :class="{ isActive: activeTrigger }" @click="showDropdown">
      <span class="checkbox-select__title">Select property type</span>
      <svg viewBox="0 0 129 129"><path d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"/></svg>
    </div>
    <div id="dropdown" class="checkbox-select__dropdown" :class="{ activeSearch: showLoader }">
      <div class="checkbox-select__search-wrapp">
        <input type="text" @focus="showLoader = true" @blur="showLoader = false" placeholder="search filters..." v-model="search">
      </div>
      <div class="checkbox-select__col">
        <div class="checkbox-select__select-all" v-model="selectAll"><label for="selectAll">{{selectAllText}}</label>
          <input type="checkbox" id="selectAll" @click="selectAll" v-model="allSelected"></div>
        <div class="checkbox-select__info">{{checkedFilters.length}} SELECTED</div>
      </div>
      <ul id="customScroll" class="checkbox-select__filters-wrapp" data-simplebar-auto-hide="false">
        <li v-for="(filter, index) in filteredList">
          <div class="checkbox-select__check-wrapp">
            <input :id="index" class="conditions-check" v-model="checkedFilters" :value="filter" type="checkbox">
            <label :for="index">{{filter}}</label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
    name: 'dropdown-checkbox',

  data() {
    return {
      filters: [
        "Bungalow",
        "Chalet",
        "Guesthouse",
        "Hotel",
        "Townhouse",
        "Apartment",
        "Boutique hotel",
        "Cabin",
        "Guest suite",
        "Hostel",
        "Loft",
        "Villa"
      ],
      search: "",
      checkedFilters: [],
      allSelected: false,
      selectAllText: 'Select All',
      activeTrigger: false,
      dropdown: false,
      showLoader: false
    };
  },
  computed: {
    filteredList() {
      return this.filters.filter(item => {
        return item.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  methods: {
    methods: {
    dropdownCheckBox(){
            this.$emit("dropdownCheckBox")
    },
    selectAll: function() {
      this.checkedFilters = [];
      this.selectAllText = this.selectAllText == "Select All" ? 'Clear All' : 'Select All';
      if (this.allSelected) {
        for (filter in this.filters) {
          this.checkedFilters.push(this.filters[filter].toString());
        }
      }
    },
    showDropdown: function(){
      if(this.dropdown == false){
        this.dropdown = true;
        this.activeTrigger = true;
        TweenMax.fromTo(
          "#dropdown",
          0.55,
          {
            autoAlpha: 0,
            y: -10
          },
          {
            autoAlpha: 1,
            y: 0,
            ease: Power2.easeOut
          }
        );
      }else{
        this.dropdown = false;
        this.activeTrigger = false;
         TweenMax.to(
          "#dropdown",
          0.2,
          {
            autoAlpha: 0,
            y: -10,
            ease: Power2.easeOut
          });
      }

    }
  },
  created: function () {
          const customScroll = new SimpleBar(document.getElementById('customScroll'));
  }
}
</script>

<style>
#selectDropDown {
  font-family: "Roboto Slab", serif;
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr="#8f24ed",
      endColorstr="#107cb3",
      GradientType=1
    );
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 300px) {
    display:block;
  }

}
* {
  outline: none;
  -webkit-tap-highlight-color:  rgba(220, 53, 69, 0);
}

*,
:after,
:before {
  box-sizing: border-box;
}

textarea, input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
}

.checkbox-select {
  position: relative;
  max-width: 440px;
  width:100%;
  @media only screen and (max-width: 600px) {
    margin:100px auto 0;
  }
  &__trigger {
    border-radius: 10px;
    background: #fff
      url("../../public/assets/bcg-pattern.png")
      repeat;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 10px 8px rgba(0, 0, 0, 0.13);
    height: 86px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 25px;
    transition: all 0.4s ease;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media only screen and (max-width: 600px) {
      padding: 0 15px;
      height:70px;
    }
    &.isActive {
      border-radius: 10px 10px 0 0;
      background: #f2f2f2
        url("../../public/assets/bcg-pattern.png")
        repeat;
      svg {
        transform: rotate(-180deg);
      }
    }
    &:hover {
      background: #f4f4f4
        url("../../public/assets/bcg-pattern.png")
        repeat;
    }
    svg {
      width: 28px;
      stroke: 4px;
      transition: all 0.4s ease;
    @media only screen and (max-width: 600px) {
     width:22px;
    }
    }
  }
  &__title {
    font-size: 25px;
    flex: 1;
    padding-right: 25px;
    letter-spacing: 1px;
    @media only screen and (max-width: 600px) {
      font-size: 19px;
    }
  }
  &__dropdown {
    opacity: 0;
    visibility: hidden;
    background: #fff
      url("../../public/assets/bcg-pattern.png")
      repeat;
    position: absolute;
    left: 0;
    right: 0;
    box-shadow: 0 12px 15px 6px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 8px 8px;
    overflow: hidden;
    padding-bottom: 25px;
    &:after,
    &:before {
      position: absolute;
      content: "";
      top: 0;
      display: block;
      height: 4px;
      z-index: 1;
    }
    &:after {
      opacity: 0;
      background: #000;
      left: -200px;
      width: 200px;
      background-color: #2980b9;
      transition: opacity 0.3s ease;
      animation: load 1.8s linear infinite;
      background: linear-gradient(
        135deg,
        rgba(143, 36, 237, 1) 20%,
        rgba(143, 36, 237, 1) 20%,
        rgba(143, 36, 237, 1) 22%,
        rgba(143, 36, 237, 1) 25%,
        rgba(16, 124, 179, 1) 100%
      );
    }
    &:before {
      width: 100%;
      background-color: #000;
    }
    &.activeSearch {
      &:after {
        opacity: 1;
      }
    }
    .simplebar-scrollbar{
      width: 3px;
      right:1px;
    }
  }
  &__search-wrapp {
    padding: 10px 25px 5px;
        @media only screen and (max-width: 600px) {
     padding: 10px 15px 5px;
    }
    input {
      width: 100%;
      height: 40px;
      border-width: 0 0 2px;
      border-style: solid;
      border-color: #000;
      font-size: 16px;
      font-family: "Roboto Slab", serif;
      background: transparent;
    }
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #b8b8b8;
      opacity: 1;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      color: #b8b8b8;
      opacity: 1;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      color: #b8b8b8;
      opacity: 1;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      color: #b8b8b8;
      opacity: 1;
    }
  }
  &__col {
    display: flex;
    font-size: 12px;
    padding: 0 25px;
    justify-content: space-between;
    text-transform: uppercase;
            @media only screen and (max-width: 600px) {
     padding: 0 15px;
    }
  }
  &__select-all {
    label {
      cursor: pointer;
    }
    input {
      display: none;
    }
  }
  &__filters-wrapp {
    margin-top: 20px;
    height: 157px;
    overflow-y: auto;
  }

  &__check-wrapp {
    position: relative;
    padding: 0 25px;
    margin-bottom: 5px;
                @media only screen and (max-width: 600px) {
     padding: 0 15px;
    }
    input[type="checkbox"] {
      display: none;

      & + label {
        position: relative;
        cursor: pointer;
        font-size: 16px;
        line-height: 22px;
        padding-left: 30px;
        display: inline-block;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transition: padding 0.25s ease;
        &:after {
          border: solid 2px #000;
          content: "";
          width: 22px;
          height: 22px;
          top: 0;
          left: 0;
          position: absolute;
        }
        &:before {
          width: 14px;
          height: 14px;
          content: "";
          position: absolute;
          top: 4px;
          left: 4px;
          background-color: #000;
          opacity: 0;
          will-change: transform;
          transform: scale(0.5);
          transition: all 0.2s ease;
        }
        &:hover {
          padding-left: 32px;
        }
      }
      &:checked {
        & + label {
          &:before {
            opacity: 1;
            transform: scale(1);
          }
        }
      }
    }
  }
}

@keyframes load {
  0% {
    left: -200px;
    width: 20%;
  }
  50% {
    width: 40%;
  }
  70% {
    width: 60%;
  }
  80% {
    left: 50%;
  }
  95% {
    left: 120%;
  }
  100% {
    left: 100%;
  }
}

.link{
  position:absolute;
  left:0;
  bottom:0;
  padding:20px;
  z-index:9999;
  a{
      display:flex;
      align-items:center;
      text-decoration:none;
      color:#fff;
  }
  .fa{
    font-size:28px;
    margin-right:8px;
    color:#fff;
  }
}
</style>
