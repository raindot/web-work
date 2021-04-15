var slider = new Vue({
  el: "#app",
  data: {
    keywords: '',
    minutes: 0,
    seconds: 0,
    current: 0,
    direction: 1,
    transitionName: "fade",
    show: false,
    slides: [
      { className: "blue" },
      { className: "red" },
      { className: "yellow" }
    ],
    filterTerm: 'All',
    showProduct: false,
    currProduct: {title: ''},
    products: [
      { title: '蛋糕', category: '甜點' },
      { title: '餅乾', category: '甜點' },
      { title: '冰淇淋', category: '甜點' },
      { title: '薯條', category: '鹹食' },
      { title: '蛋糕', category: '甜點' },
      { title: '餅乾', category: '甜點' },
      { title: '冰淇淋', category: '甜點' },
      { title: '薯條', category: '鹹食' },
      { title: '蛋糕', category: '甜點' },
      { title: '餅乾', category: '甜點' },
      { title: '冰淇淋', category: '甜點' },
      { title: '薯條', category: '鹹食' },
      { title: '冰淇淋', category: '甜點' },
      { title: '薯條', category: '鹹食' },
      { title: '蛋糕', category: '甜點' },
      { title: '餅乾', category: '甜點' },
      { title: '冰淇淋', category: '甜點' },
      { title: '薯條', category: '鹹食' },
      { title: '冰淇淋', category: '甜點' },
      { title: '薯條', category: '鹹食' },
    ],
    category: ['All', '鹹食', '甜點' ]
  },
  methods: {
    timer (duration) {
      let timer = duration;
      const vm = this
      let counting = setInterval(function () {
          vm.minutes = parseInt(timer / 60, 10);
          vm.seconds = parseInt(timer % 60, 10);
          vm.minutes = vm.minutes < 10 ? "0" + vm.minutes : vm.minutes; //補零
          vm.seconds = vm.seconds < 10 ? "0" + vm.seconds : vm.seconds;
          if (--timer < 0) {
            clearInterval(counting)
          }
      }, 1000);
    },
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      var len = this.slides.length;
      this.current = (this.current + dir % len + len) % len;
    },
    showModal (product) {
      this.showProduct = true
      this.currProduct = product
    },
    goTop () {
      window.scrollTo(0,0);
    }
  },
  computed: {
    filteredList () {
      if (this.keywords) {
        return this.products.filter(d => d.title.includes(this.keywords))
      } else {
        if (this.filterTerm === 'All') {
            return this.products
          } else {
            return this.products.filter(product => {
              return product.category === this.filterTerm
            })
          }
      }
    }
  },
  mounted() {
    this.show = true;
    let duration = 5 * 60
    this.timer(duration)
    const vm = this
    setInterval(vm.slide, 5000, 1)
  }
});
