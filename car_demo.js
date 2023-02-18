var app = new Vue ({
    el: '#app',
    data: {
        cars: [
            {
                brand: 'Toyota',
                model: 'Yaris',
                img: 'https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/yaris_2016-2019.png',
                seat: 4,
                bag: 1,
                price: 1190
            },
            {
                brand: 'Toyota',
                model: 'Fortuner',
                img: 'https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/Fortuner_2016-2018_VbSeQ0L.png',
                seat: 7,
                bag: 3,
                price: 3500
            },
            {
                brand: 'Toyota',
                model: 'Vios',
                img: 'https://cdn2.rcstatic.com/images/car_images/web/toyota/vios_lrg.jpg',
                seat: 5,
                bag: 2,
                price: 1269
            },
            {
                brand: 'Nissan',
                model: 'Almera',
                img: 'https://cdn2.rcstatic.com/images/car_images/web/nissan/almera_lrg.jpg',
                seat: 5,
                bag: 1,
                price: 1141
            },
            {
                brand: 'Nissan',
                model: 'March',
                img: 'https://cdn2.rcstatic.com/images/car_images/web/nissan/micra_lrg.jpg',
                seat: 4,
                bag: 1,
                price: 975
            },
            {
                brand: 'Honda',
                model: 'City',
                img: 'https://cdn2.rcstatic.com/images/car_images/web/honda/city_lrg.jpg',
                seat: 4,
                bag: 1,
                price: 1259
            },
            {
                brand: 'Honda',
                model: 'BRV',
                img: 'https://cdn2.rcstatic.com/images/car_images/web/honda/brv_lrg.jpg',
                seat: 5,
                bag: 3,
                price: 2805
            },
            {
                brand: 'Honda',
                model: 'Civic',
                img: 'https://cdn2.rcstatic.com/images/car_images/new_images/honda/civic_sedan_lrg.jpg',
                seat: 5,
                bag: 2,
                price: 1579
            },
            {
                brand: 'Mitsubishi',
                model: 'Pajero Sport',
                img: 'https://cdn2.rcstatic.com/images/car_images/web/mitsubishi/pajero_4_doors_lrg.jpg',
                seat: 7,
                bag: 2,
                price: 2553
            },
            {
                brand: 'Hyundai',
                model: 'H1',
                img: 'https://car-with-driver.s3-ap-southeast-1.amazonaws.com/cars/Car_with_Driver_210304_71.jpg',
                seat: 7,
                bag: 3,
                price: 3300
            },
        ]
    }
})