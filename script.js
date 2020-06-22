var app = new Vue({
    el: '#app',
    data: {
        state: 0,
        platform: '',
        world_data: {},
        timestamp: "",
        curr_view: "news"
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
            .then(response => {
                this.timestamp = response.data.timestamp;
                this.world_data = response.data
                // Get rid of timestamp so we don't generate an event-instance for it
                delete this.world_data.timestamp
            })
            .catch(error => console.log(error))
        }
    }
  })

Vue.component('event-instance', {
    props: ['event_type', 'instance_data'],
    template: `
        <div>
            {{ instance_data }}
        </div>
    `
})
