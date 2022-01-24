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
        zoom: 12,
        center: str,
    });

    const icons = {
        hotel: {
            icon: "assets/icons/hotel.png",
        },
        theater: {
            icon: "assets/icons/theater.png",
        },
        rest: {
            icon: "assets/icons/rest.png"
        },
        fastfood: {
            icon: "assets/icons/fastfood.png"
        },
        parkgagarina: {
            icon: "assets/icons/parkgagarina.png"
        },
        park: {
            icon: "assets/icons/park.png"
        },
        art: {
            icon: "assets/icons/art.png"
        },
        history: {
            icon: "assets/icons/history.png"
        },
        mountains: {
            icon: "assets/icons/mountains.png"
        },
    };

   


    const features = [
        {
            position: new google.maps.LatLng(53.61965781914709, 55.96315290475627),
            type: 'theater',
            infowindow: new google.maps.InfoWindow({
                content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/rus.jpg" alt="">' + '<h2>Государственный русский драматический театр г.Стерлитамак</h2>' + '<a target="_blank" id = "map_link"href="http://rusdramteatr.ru">Больше информации</a>' +  '<div>',
                maxWidth: 400,

            }),

        },
        {
            position: new google.maps.LatLng(53.63727164919797, 55.93522832408306),
            type: 'theater',
            infowindow: new google.maps.InfoWindow({
                content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/bash.jpg" alt="">' + '<h2>Башкирский драматический театр</h2>' + '<a target="_blank" id = "map_link"href="https://sgtko.ru">Больше информации</a>' +  '<div>',
                maxWidth: 400,
            }),

        },
        {

            position: new google.maps.LatLng(53.62003089121347, 55.964743454608126),
            type: 'hotel',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/hotel.jpg" alt="">' + '<h2>Гранд-Отель-Восток</h2>' + '<a target="_blank" id = "map_link"href="https://grand-vostok.ru">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.625108772944834, 55.96723243311668),
            type: 'hotel',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/korona.jpg" alt="">' + '<h2>Гостиница Корона</h2>' + '<a target="_blank" id = "map_link"href="https://www.booking.com/hotel/ru/gostinitsa-korona-sterlitamak.ru.html">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.63891402674933, 55.93699857363623),
            type: 'hotel',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/ash.jpg" alt="">' + '<h2>Гостиница Ашкадар</h2>' + '<a target="_blank" id = "map_link"href="https://ashkadar-hotel.ru">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.612224986626046, 55.89781590283724),
            type: 'hotel',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/soln.jpg" alt="">' + '<h2>Гостиничный комплекс Солнечный</h2>' + '<a target="_blank" id = "map_link"href="http://sunlight-hotel.ru">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.64246213795728, 55.9302011587025),
            type: 'hotel',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/chem.jpg" alt="">' + '<h2>Гостиница Чемодан</h2>' + '<a target="_blank" id = "map_link"href="https://www.booking.com/hotel/ru/inn-chemodan.ru.html">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.619642011472315, 55.96551431419096),
            type: 'rest',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/orient.jpg" alt="">' + '<h2>Ресторан Ориент</h2>' + '<a target="_blank" id = "map_link"href="https://grand-vostok.ru/restaurant/">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.61566295105368, 55.90077490345765),
            type: 'rest',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/manav.jpg" alt="">' + '<h2>Городское кафе Манявы</h2>' + '<a target="_blank" id = "map_link"href="http://pizzman.ru/#rec174281786">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.62981241344299, 55.90554540358958),
            type: 'rest',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/svcomp.jpg" alt="">' + '<h2>Своя компания</h2>' + '<a target="_blank" id = "map_link"href="https://sterlitamak.svoya-kompaniya.ru/">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.61421021133189, 55.96792553877585),
            type: 'rest',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/big.jpg" alt="">' + '<h2>Рестобар "Большой"</h2>' + '<a target="_blank" id = "map_link"href="http://xn--80abbnxlrdbmein5gtc.xn--p1ai/">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.618655891851176, 55.943453014062904),
            type: 'rest',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/lukum.jpg" alt="">' + '<h2>Лукум lounge cafe</h2>' + '<a target="_blank" id = "map_link"href="https://www.instagram.com/lukumloungecafe/">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.62319150485455, 55.95213599505483),
            type: 'rest',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/cafe.jpg" alt="">' + '<h2>The Cafe</h2>' + '<a target="_blank" id = "map_link"href="https://thecafe.ru">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.63762816494442, 55.93624323583615),
            type: 'fastfood',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/MC.jpg" alt="">' + '<h2>Макдоналдс</h2>' + '<a target="_blank" id = "map_link"href="https://mcdonalds.ru/">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.6388600177797, 55.937541428864094),
            type: 'fastfood',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/KFC.jpg" alt="">' + '<h2>KFC</h2>' + '<a target="_blank" id = "map_link"href="https://kfc.ru/restaurants/256">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.61887341205291, 55.963095819403456),
            type: 'fastfood',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/bk.jpg" alt="">' + '<h2>Бургер Кинг</h2>' + '<a target="_blank" id = "map_link"href="https://burgerking.ru/">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.628366926853715, 55.94076375591812),
            type: 'fastfood',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/bk2.jpg" alt="">' + '<h2>Бургер Кинг</h2>' + '<a target="_blank" id = "map_link"href="https://burgerking.ru/">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.64812078971297, 55.9486655441645),
            type: 'parkgagarina',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/gagarina.jpg" alt="">' + '<h2>Парк культуры и отдыха им. Ю. Гагарина</h2>' + '<a target="_blank" id = "map_link"href="http://park.park-str.ru/">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.627651320211875, 55.92141278415793),
            type: 'park',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/juk.jpg" alt="">' + '<h2>Парк имени Жукова</h2>' +   '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.630853485805694, 55.92724721232632),
            type: 'park',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/war.jpg" alt="">' + '<h2>Парк Стерля</h2>' +   '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.6223237908369, 55.95297891740193),
            type: 'park',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/sterl.jpg" alt="">' + '<h2>Парк Стерля</h2>' +   '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.61972255465397, 55.90710441934655),
            type: 'art',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/art.jpg" alt="">' + '<h2>Картинная галерея им. Нестерова</h2>' + '<a target="_blank" id = "map_link"href="http://museum-nesterov.ru/filials/sterlitamakskaya-kartinnaya-galereya">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.6171333800735, 55.964504153799034),
            type: 'history',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/mus.jpg" alt="">' + '<h2>Стерлитамакский историко-краеведческий музей</h2>' + '<a target="_blank" id = "map_link"href="http://museumstr.ru/">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.55446813347626, 56.097359464913104),
            type: 'mountains',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/tora.jpg" alt="">' + '<h2>Гора Торатау</h2>' + '<a target="_blank" id = "map_link"href="https://geopark-toratau.ru/">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.689819738772336, 56.0793218938921),
            type: 'mountains',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/kush.jpg" alt="">' + '<h2>Гора Куштау</h2>' + '<a target="_blank" id = "map_link"href="https://ru.wikipedia.org/wiki/Куштау">Больше информации</a>' +  '<div>', maxWidth: 400, }),
        },
        {

            position: new google.maps.LatLng(53.74170731570122, 56.096953842071),
            type: 'mountains',
            infowindow: new google.maps.InfoWindow({ content: '<div class = "map__window">' + '<img class = "img__map" src="assets/images/jurak.jpg" alt="">' + '<h2>Гора Юрактау</h2>' + '<a target="_blank" id = "map_link"href="https://ru.wikipedia.org/wiki/Юрактау">Больше информации</a>' +  '<div>', maxWidth: 400, }),
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
            map.setZoom(15);
            

        });
        



    }

    



};

