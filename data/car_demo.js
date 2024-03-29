var app = new Vue({
    el: '#app',
    data: {
        cars: [{
            id: 1,
            brand: 'Toyota',
            model: 'Yaris',
            img: 'https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/yaris_2016-2019.png',
            seat: 4,
            bag: 1,
            price: 1190,
        },
        {
            id: 2,
            brand: 'Toyota',
            model: 'Fortuner',
            img: 'https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/Fortuner_2016-2018_VbSeQ0L.png',
            seat: 7,
            bag: 3,
            price: 3500
        }, {
            id: 3,
            brand: 'Toyota',
            model: 'Camry',
            img: 'https://media.discordapp.net/attachments/1072181252964233328/1079086476169588766/Car_with_Driver_210304_29-removebg-preview.png',
            seat: 4,
            bag: 2,
            price: 3500,
        },
        {
            id: 4,
            brand: 'Toyota',
            model: 'Alphard',
            img: 'https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/Toyota_Alphard_2018_yJyb1bM.png',
            seat: 7,
            bag: 5,
            price: 9900,
        },
        {
            id: 5,
            brand: 'Toyota',
            model: 'Commuter',
            img: 'https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/Toyota_Commuter__z4uZ6f8.png',
            seat: 9,
            bag: 5,
            price: 3000
        },
        {
            id: 6,
            brand: 'Nissan',
            model: 'Almera',
            img: 'https://media.discordapp.net/attachments/1072181252964233328/1079086719644737586/almera_lrg-removebg-preview.png',
            seat: 5,
            bag: 1,
            price: 1141
        },
        {
            id: 7,
            brand: 'Nissan',
            model: 'March',
            img: 'https://media.discordapp.net/attachments/1072181252964233328/1079087743126208582/micra_lrg-removebg-preview.png',
            seat: 4,
            bag: 1,
            price: 975
        },
        {
            id: 8,
            brand: 'Nissan',
            model: 'Kicks',
            img: 'https://www.car250.com/wp-content/uploads/2019/07/Nissan-Kicks-2019-23.png',
            seat: 5,
            bag: 1,
            price: 2190,
        },
        {
            id: 9,
            brand: 'Nissan',
            model: 'Leaf',
            img: 'https://blog.hamrobazaar.com/wp-content/uploads/2020/12/Nissan-Leaf.png',
            seat: 4,
            bag: 1,
            price: 8900,
        },
        {
            id: 10,
            brand: 'Nissan',
            model: 'Teana',
            img: 'https://fj.lnwfile.com/_/fj/_raw/hb/al/m9.png',
            seat: 4,
            bag: 1,
            price: 7150,
        },
        {
            id: 11,
            brand: 'Nissan',
            model: 'Urvan',
            img: 'https://media.discordapp.net/attachments/1072181252964233328/1077292220387958934/77-772232_01-nv350-urvan-exterior-hd-png-download-removebg-preview.png',
            seat: 9,
            bag: 5,
            price: 9900
        },
        {
            id: 12,
            brand: 'Honda',
            model: 'City',
            img: 'https://media.discordapp.net/attachments/1072181252964233328/1079086989908918322/city_lrg-removebg-preview.png',
            seat: 4,
            bag: 1,
            price: 1259
        },
        {
            id: 13,
            brand: 'Honda',
            model: 'BRV',
            img: 'https://media.discordapp.net/attachments/1072181252964233328/1079087141314908170/brv_lrg-removebg-preview.png',
            seat: 5,
            bag: 3,
            price: 2805
        },
        {
            id: 14,
            brand: 'Honda',
            model: 'Civic',
            img: 'https://media.discordapp.net/attachments/1072181252964233328/1079087308881526885/civic_sedan_lrg-removebg-preview.png',
            seat: 5,
            bag: 2,
            price: 1579
        },
        {
            id: 15,
            brand: 'Mercedes Benz Sport',
            model: null,
            img: 'https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/02.png',
            seat: 2,
            bag: 2,
            price: 14900
        },
        {
            id: 16,
            brand: 'Hyundai',
            model: 'H1',
            img: 'https://media.discordapp.net/attachments/1072181252964233328/1079086066998452304/Car_with_Driver_210304_71-removebg-preview.png',
            seat: 7,
            bag: 3,
            price: 3300
        }, {
            id: 17,
            brand: 'MG',
            model: 'HS',
            img: 'https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/MG_HS_2021.png',
            seat: 7,
            bag: 2,
            price: 2553
        },
        {
            id: 18,
            brand: 'BMW',
            model: 'Series 7',
            img: 'https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/bmw_series_7.png',
            seat: 4,
            bag: 2,
            price: 15000
        },
        ],

        hothit: [{
            hbrand: 'Toyota',
            hid: [1, 2, 3],
            img: 'https://media.discordapp.net/attachments/1072181252964233328/1077261540748701726/home_car.png',

        }, {
            hbrand: 'Nisson',
            hid: [6, 7, 8],
            img: 'https://media.discordapp.net/attachments/1072181252964233328/1077261540748701726/home_car.png',

        }, {
            hbrand: 'Honda',
            hid: [12, 13, 14],
            img: 'https://media.discordapp.net/attachments/1072181252964233328/1077261540748701726/home_car.png',
        }],
        brandcar: ['Toyota', 'Nissan', 'Honda', 'Mercedes Benz Sport', 'Hyundai', 'MG', 'BMW'],
        pricecar: ['500-999', '1000-1999', '2000-2999', '3000-3999', '4000-4999', '5000'],
        seatcar: ['2', '4', '5', '6', '7', '9'],
        // for JSON

        rent: {
            dsend: '',
            dreturn: '',
            time: '',
        },
        sbrand: '',
        sprice: 0,
        sseat: 0,
        filter_car: [],
        errorday: {
            rent_dsend: '',
            rent_dreturn: '',
            rent_time: ''
        },
        CheckDsend: '',
        CheckDreturn: '',
        amountD: '',
        rstation: {
            st1: 'สนามบินสุวรรณภูมิ',
            st2: 'สนามบินสุวรรณภูมิ',
        },

    },
    methods: {
        detailCar(item) {
            console.log(item)
            const myjson = JSON.stringify(item)
            localStorage.setItem("mycart", myjson)
            location.href = "./detail_car.html"
        },
        search() {
            this.validateRentDsend()
            this.validateRentDreturn()
            if (this.errorday.rent_dsend !== '' || this.errorday.rent_dreturn !== '') {
                alert('กรุณากรอกวันที่ และเวลารับรถ/คืนรถ')
                return
            }
            //for cardetail
            const sta = JSON.stringify(this.rstation)
            localStorage.setItem("rentStation", sta)
            // rent to json
            const detail = JSON.stringify(this.rent)
            localStorage.setItem("rentDate", detail)
            // find car
            const res = this.cars.filter((item) =>
                item.brand.includes(this.sbrand))
            //     const res = this.cars.filter((item) => 
            //     item.brand.includes(this.sbrand) && item.seat == this.sseat)           

            const myjson = JSON.stringify(res)
            localStorage.setItem("myfilter", myjson)
            location.href = "./view_car.html"
            console.log(res)
        },
        validateRentDsend() {
            if (this.rent.dsend === '' || this.rent.time === '') {
                this.errorday.rent_dsend = 'กรุณากรอกวันและเวลารับรถ'
                return
            }
            const today = new Date()
            this.CheckDsend = new Date(this.rent.dsend)
            if (this.CheckDsend <= today) {
                this.errorday.rent_dsend = 'ห้ามเลือกวันในอดีต'
                return
            }
            this.errorday.rent_dsend = ''
        },
        validateRentDreturn() {
            if (this.rent.dreturn === '' || this.rent.time === '') {
                this.errorday.rent_dreturn = 'กรุณากรอกวันและเวลาคืนรถ'
                return
            }
            // const today = new Date()
            this.CheckDreturn = new Date(this.rent.dreturn)
            if (this.CheckDreturn < this.CheckDsend) {
                this.errorday.rent_dreturn = 'กรุณาเลือกวันหลังจากวันรับรถ'
                return
            }
            this.errorday.rent_dreturn = ''
        },

    },
    created() {
        const text = JSON.parse(localStorage.getItem("myfilter"))
        this.filter_car = text
        console.log(text)
    }

})
