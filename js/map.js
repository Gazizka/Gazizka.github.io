/*    MAP .........................................*/
const productStore = localStorageUtil.getProducts();
let activeText = "Добавить в корзину";
let activeClass = "";
function changeText() {
    activeText = "Удалить из корзины";
    activeClass = " map__btn_active";
}



 


function initMap() {
    const str = { lat: 53.6199655, lng: 55.9647367 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: str,
    });

    const icons = {
        hotel: {
            icon: "hotel.png",
        },
        theater: {
            icon: "theater.png",
        },
    };

   


    const features = [
        {
            position: new google.maps.LatLng(53.61965781914709, 55.96315290475627),
            type: 'theater',
            id: 'obj1',
            infowindow: new google.maps.InfoWindow({
                content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/rus.jpg" alt="">' + '<h2>Государственный русский драматический театр г.Стерлитамак</h2>' + '<a target="_blank" id = "map_link"href="http://rusdramteatr.ru">Больше информации</a>' +  '<div>',
                maxWidth: 400,
            }),

        },
        {

            position: new google.maps.LatLng(53.62003089121347, 55.964743454608126),
            type: 'hotel',
            id: 'obj2',
            infowindow: new google.maps.InfoWindow({ content: '<img src="assets/images/hotel.jpg" alt="">' + '<h2>Гранд-Отель-Восток</h2>' + '<a target="_blank" id = "map_link"href="https://grand-vostok.ru">Больше информации</a>', maxWidth: 400, }),
        },
    ];

    
    
    
    for (let i = 0; i < features.length; i++) {
        const marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map,
        });
        google.maps.event.addListener(marker, 'click', function () {
            features[i].infowindow.open(map, marker);

        });



    }

    



};

