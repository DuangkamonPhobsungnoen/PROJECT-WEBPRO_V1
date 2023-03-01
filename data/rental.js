var app = new Vue({
    el: '#rapp',
    data: {
        locationcar: ['สนามบินดอนเมือง', 'สนามบินสุวรรณภูมิ', 'สถานีรถไฟดอนเมือง', 'ไอทีสแควร์', 'BTS อนุสาวรีย์', 'BTS อโศก', 'BTS ช่องนนทรี',
            'ธรรมศาสตร์ รังสิต', 'ฟิวเจอร์ปาร์ค รังสิต', 'เซ็นทรัล อีสต์วิลล์', 'แอร์พอร์ตลิงค์ ลาดกระบัง', 'เซ็นทรัล พระราม 2', 'แฟชั่น ไอซ์แลนด์'
        ],
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
        },
        cancel: false,
    },
    created() {
        const text = JSON.parse(localStorage.getItem("mycart"))
        this.store = text

        const string = JSON.parse(localStorage.getItem("myname"))
        this.myname = string
            //checkbill
        const bool = JSON.parse(localStorage.getItem("mybill"))
        if (bool != null) {
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
