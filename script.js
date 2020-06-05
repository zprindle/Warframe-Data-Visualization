var app = new Vue({
    el: '#app',
    data: {
        state: 0,
        platform: '',
        world_data: {}
    },
    methods: {
        selectPlatform: function (event) {
            this.platform = event;
            this.getWorldState();
            this.state = 1;
        },
        getWorldState: function() {
            let query = "https://api.warframestat.us/" + this.platform;
            axios
            .get(query)
            .then(response => (this.world_data = response))
            .catch(error => console.log(error))
        },
        processResponse: function(response) {
            
        }
    }
  })