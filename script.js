var app = new Vue({
    el: '#app',
    data: {
        platform: '',
        world_data: {}
    },
    methods: {
        selectPlatform: function (event) {
            this.platform = event;
            this.getWorldState();
        },
        getWorldState: function() {
            let query = "https://api.warframestat.us/" + this.platform;
            axios
            .get(query)
            .then(response => (this.world_data = response))
        }
    }
  })