var app = new Vue({
    el: '#adapp',
    data: {
        cus:{
            cname:'',
            car:{},
            rentDate:{
                // dreturn:'',
                // dsend:'',
                // time:''
            },
            rentStation:{
                // st1:'',
                // st2:''
            },
            pay:false,

        },
        allpayment:[],
    },
    created(){
        this.cus.cname = JSON.parse(localStorage.getItem("myname"))    
        this.cus.car = JSON.parse(localStorage.getItem("mycart"))        
        this.cus.rentDate = JSON.parse(localStorage.getItem("rentDate"))         
        this.cus.rentDate = JSON.parse(localStorage.getItem("rentStation"))
        this.cus.pay = JSON.parse(localStorage.getItem("mybill"))
       
        if(this.cus.pay === true){
            allpayment.push(this.cus)
            console.log(this.cus.pay)
        }
        
         
    }
})