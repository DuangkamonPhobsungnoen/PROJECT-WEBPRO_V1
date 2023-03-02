var app = new Vue({
    el: '#rapp',
    data: {
        locationcar: ['สนามบินดอนเมือง', 'สนามบินสุวรรณภูมิ', 'สถานีรถไฟดอนเมือง', 'ไอทีสแควร์', 'BTS อนุสาวรีย์', 'BTS อโศก', 'BTS ช่องนนทรี',
            'ธรรมศาสตร์ รังสิต', 'ฟิวเจอร์ปาร์ค รังสิต', 'เซ็นทรัล อีสต์วิลล์', 'แอร์พอร์ตลิงค์ ลาดกระบัง', 'เซ็นทรัล พระราม 2', 'แฟชั่น ไอซ์แลนด์'
        ],
        store: {},
        myname: '',
        rentdate: {
            // dsent:
            // dreturn:
            // time:
        },
        rstation: {
            st1: 'สนามบินสุวรรณภูมิ',
            st2: 'สนามบินสุวรรณภูมิ'
        },
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
        },
        cancel: false,
    },
    created() {
        const text = JSON.parse(localStorage.getItem("mycart"))
        this.store = text

        const string = JSON.parse(localStorage.getItem("myname"))
        this.myname = string

        const date = JSON.parse(localStorage.getItem("rentDate"))
        this.rentdate = date

        const sta = JSON.parse(localStorage.getItem("rentStation"))
        this.rstation = sta
        //checkbill
        const bool = JSON.parse(localStorage.getItem("mybill"))
        if (bool != null) {
            this.checkoutCar = bool
        }
        localStorage.setItem("mybill", false)
    },
    methods: {
        tocheckout() {
            const sta = JSON.stringify(this.rstation)
            localStorage.setItem("rentStation", sta)
        },


    },
    computed: {
        reversdate() {
            let re = this.rentdate.dsend.split('-')
            console.log(re)
            return re[2] + '/' + re[1] + '/' + re[0]
        },
        reversdate2() {
            let re = this.rentdate.dreturn.split('-')
            console.log(re)
            return re[2] + '/' + re[1] + '/' + re[0]
        },
    }

})
