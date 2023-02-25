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
                other: false,
                show_toyota: true
            },
            {
                id: 2,
                brand: 'Toyota',
                model: 'Fortuner',
                img: 'https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/Fortuner_2016-2018_VbSeQ0L.png',
                seat: 7,
                bag: 3,
                price: 3500,
                other: false
            }, {
                id: 3,
                brand: 'Toyota',
                model: 'Camry',
                img: 'https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/Car_with_Driver_210304_29.jpg',
                seat: 4,
                bag: 2,
                price: 3500,
                other: false,
                show_toyota: true
            },
            {
                id: 4,
                brand: 'Toyota',
                model: 'Alphard',
                img: 'https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/Toyota_Alphard_2018_yJyb1bM.png',
                seat: 7,
                bag: 5,
                price: 9900,
                other: false,
                show_toyota: true
            },
            {
                id: 5,
                brand: 'Toyota',
                model: 'Commuter',
                img: 'https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/Toyota_Commuter__z4uZ6f8.png',
                seat: 9,
                bag: 5,
                price: 3000,
                other: false
            },
            {
                id: 6,
                brand: 'Nissan',
                model: 'Almera',
                img: 'https://cdn2.rcstatic.com/images/car_images/web/nissan/almera_lrg.jpg',
                seat: 5,
                bag: 1,
                price: 1141,
                other: false
            },
            {
                id: 7,
                brand: 'Nissan',
                model: 'March',
                img: 'https://cdn2.rcstatic.com/images/car_images/web/nissan/micra_lrg.jpg',
                seat: 4,
                bag: 1,
                price: 975,
                other: false
            },
            {
                id: 8,
                brand: 'Nissan',
                model: 'Kicks',
                img: 'https://www.car250.com/wp-content/uploads/2019/07/Nissan-Kicks-2019-23.png',
                seat: 5,
                bag: 1,
                price: 2190,
                other: false,
                show_nissan: true
            },
            {
                id: 9,
                brand: 'Nissan',
                model: 'Leaf',
                img: 'https://blog.hamrobazaar.com/wp-content/uploads/2020/12/Nissan-Leaf.png',
                seat: 4,
                bag: 1,
                price: 8900,
                other: false,
                show_nissan: true
            },
            {
                id: 10,
                brand: 'Nissan',
                model: 'Teana',
                img: 'https://fj.lnwfile.com/_/fj/_raw/hb/al/m9.png',
                seat: 4,
                bag: 1,
                price: 7150,
                other: false,
                show_nissan: true
            },
            {
                id: 11,
                brand: 'Nissan',
                model: 'Urvan',
                img: 'https://media.discordapp.net/attachments/1072181252964233328/1077292220387958934/77-772232_01-nv350-urvan-exterior-hd-png-download-removebg-preview.png',
                seat: 9,
                bag: 5,
                price: 9900,
                other: false
            },
            {
                id: 12,
                brand: 'Honda',
                model: 'City',
                img: 'https://cdn2.rcstatic.com/images/car_images/web/honda/city_lrg.jpg',
                seat: 4,
                bag: 1,
                price: 1259,
                other: false
            },
            {
                id: 13,
                brand: 'Honda',
                model: 'BRV',
                img: 'https://cdn2.rcstatic.com/images/car_images/web/honda/brv_lrg.jpg',
                seat: 5,
                bag: 3,
                price: 2805,
                other: false
            },
            {
                id: 14,
                brand: 'Honda',
                model: 'Civic',
                img: 'https://cdn2.rcstatic.com/images/car_images/new_images/honda/civic_sedan_lrg.jpg',
                seat: 5,
                bag: 2,
                price: 1579,
                other: false
            },
            {
                id: 15,
                brand: 'Mercedes Benz Sport',
                model: null,
                img: 'https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/02.png',
                seat: 2,
                bag: 2,
                price: 14900,
                other: true
            },
            {
                id: 16,
                brand: 'Hyundai',
                model: 'H1',
                img: 'https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/Car_with_Driver_210304_71.jpg',
                seat: 7,
                bag: 3,
                price: 3300,
                other: true
            }, {
                id: 17,
                brand: 'MG',
                model: 'HS',
                img: 'https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/MG_HS_2021.png',
                seat: 7,
                bag: 2,
                price: 2553,
                other: true
            },
            {
                id: 18,
                brand: 'BMW Series 7',
                model: null,
                img: 'https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/bmw_series_7.png',
                seat: 4,
                bag: 2,
                price: 15000,
                other: true
            },
        ],
        isBrand: false,
        isPrice: false,
        isSeat: false,
    },
    methods:{
        detailCar(item){
            console.log(item)
            const myjson = JSON.stringify(item)
            localStorage.setItem("mycart", myjson)
            location.href = "./detail_car.html"
        }
    }
})
