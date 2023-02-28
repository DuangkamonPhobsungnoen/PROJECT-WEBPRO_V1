var app = new Vue({
    el: '#rapp',
    data: {
        store: {},
        myname:'',
        returnCar:false,
    },
    created() {
        const text = JSON.parse(localStorage.getItem("mycart"))
        this.store = text
        // console.log(this.store)
        const string = JSON.parse(localStorage.getItem("myname"))
        this.myname = string
    },
    methods: {
        tocheckout() {
            // const myjson = JSON.stringify(res)
            localStorage.setItem("mycart", myjson)
        }

    },
    
})