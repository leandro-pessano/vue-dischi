var app = new Vue ({
  el: '#root',
  data: {
    diskList: ''
  },
  mounted() {
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((result) => {
      this.diskList = result.data.response
      console.log(this.diskList);
    });
  }
});
