var app2 = new Vue({
    el: '#app',
    data: {
        message: "Hello Vue.js!",
        another_message: "Hello Vue!"        
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
