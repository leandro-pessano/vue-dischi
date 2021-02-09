var app = new Vue ({
  el: '#root',
  data: {
    diskList: '',
    genreList: [],
    selectedGenre: 'All'
  },
  mounted() {
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((result) => {
      this.diskList = result.data.response;
      for (var i = 0; i < this.diskList.length; i++) {
        if (!this.genreList.includes(this.diskList[i].genre)) {
          this.genreList.push(this.diskList[i].genre);
        }
      };
      this.diskList.forEach((e, i) => {
        e.visible = true;
      });

    });
  },
  methods: {
    diskFilter(){
      this.diskList.forEach((e, i) => {
        if (this.selectedGenre == e.genre || this.selectedGenre == 'All') {
          e.visible = true;
        } else if (this.selectedGenre != e.genre) {
          e.visible = false;
        }
      });

    }
  }
});
