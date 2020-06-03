var app = new Vue({
    el: '#app',
    data: {
        platform: ''
    },
    methods: {
        selectPlatform: function (event) {
            this.platform = event;
        },
        getWorldState: function() {

        }
    }
  })