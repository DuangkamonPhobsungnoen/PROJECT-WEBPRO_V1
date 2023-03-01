var app = new Vue({
    el: '#rapp',
    data: {
        store: {},
        myname: '',
        returnCar: false,
        checkoutCar: false,
        name: '',
        numbercreditcard: '',
        expirationdate: '',
        cvc: '',
        errorbill: {
            name: '',
            numbercreditcard: '',
            expirationdate: '',
            cvc: '',
        }
    },
    created() {
        const text = JSON.parse(localStorage.getItem("mycart"))
        this.store = text
        
        const string = JSON.parse(localStorage.getItem("myname"))
        this.myname = string
        //checkbill
        const bool = JSON.parse(localStorage.getItem("mybill"))
        if(bool != null){
            this.checkoutCar = bool
        }        
        localStorage.setItem("mybill", false)
    },
    methods: {
        tocheckout() {
            // const myjson = JSON.stringify(res)
            localStorage.setItem("mycart", myjson)
        },
        
    },

})
