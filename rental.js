var app = new Vue({
    el: '#rapp',
    data: {
        store: {}
    },
    created() {
        const text = JSON.parse(localStorage.getItem("mycart"))
        this.store = text
        console.log(this.store)
    },
    methods: {
        tocheckout() {
            const myjson = JSON.stringify(res)
            localStorage.setItem("mycart", myjson)
        }

    },
    
})