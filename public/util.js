axios.get('/BusMap/RetPosition')
    .then(res => {
        console.log(res); // 값 불러올경우
        // document.getElementById("aa").innerHTML=res.data[0].N;
        // W= res.data[0].W;
        const mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(36.770065, 126.931731), // 지도의 중심좌표
                draggable: false,
                scrollwheel: true,
                disableDoubleClick: true,
                disableDoubleClickZoom: true,
                tileAnimation: true,
                level: 3 // 지도의 확대 레벨
            };

        const map = new kakao.maps.Map(mapContainer, mapOption);

        const imageSrc = '../images/bus_station.png', // 마커이미지의 주소입니다
            imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
            imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        const busimages = [{
            busimageSrc: 'https://cdn-icons-png.flaticon.com/512/2125/2125837.png', // 마커이미지의 주소입니다
            busimageSize: new kakao.maps.Size(54, 59)
        },{
            busimageSrc: 'https://cdn-icons-png.flaticon.com/512/2127/2127179.png', // 마커이미지의 주소입니다
            busimageSize: new kakao.maps.Size(54, 59)
        },{
            busimageSrc: 'https://cdn-icons-png.flaticon.com/512/2127/2127807.png', // 마커이미지의 주소입니다
            busimageSize: new kakao.maps.Size(54, 59)
        }]
            // **이미지 옵션 지워둠 busimageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.// https://cdn-icons-png.flaticon.com/512/3448/3448316.png마커이미지의 크기입니다 https://cdn-icons-png.flaticon.com/512/2125/2125837.png

            // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const positions = [
            {
                title: '후문',
                latlng: new kakao.maps.LatLng(36.772986, 126.933569)
            },
            {
                title: '향3',
                latlng: new kakao.maps.LatLng(36.767534, 126.934711)
            },
            {
                title: '향2',
                latlng: new kakao.maps.LatLng(36.767737, 126.932821)
            },
            {
                title: '공대',
                latlng: new kakao.maps.LatLng(36.768762, 126.931288)
            },
            {
                title: '인사대',
                latlng: new kakao.maps.LatLng(36.769160, 126.927829)
            }
        ];

// 마커를 생성합니다
        for (let i = 0; i < positions.length; i++) {
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
            // 마커를 생성합니다
            const marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage // 마커 이미지
            });
        }

        const polyline = new kakao.maps.Polyline({
            map: map,
            path: [
                new kakao.maps.LatLng(36.772986, 126.933569), new kakao.maps.LatLng(36.772796, 126.933899), new kakao.maps.LatLng(36.771754, 126.934613),
                new kakao.maps.LatLng(36.769721, 126.935176), new kakao.maps.LatLng(36.768723, 126.935776), new kakao.maps.LatLng(36.767534, 126.934711),
                new kakao.maps.LatLng(36.766789, 126.933902), new kakao.maps.LatLng(36.766809, 126.933529), new kakao.maps.LatLng(36.767737, 126.932821),
                new kakao.maps.LatLng(36.768012, 126.931936), new kakao.maps.LatLng(36.768762, 126.931288), new kakao.maps.LatLng(36.768762, 126.931288),
                new kakao.maps.LatLng(36.769252, 126.930954), new kakao.maps.LatLng(36.768822, 126.929310), new kakao.maps.LatLng(36.768380, 126.928475),
                new kakao.maps.LatLng(36.769160, 126.927829), new kakao.maps.LatLng(36.769707, 126.927528), new kakao.maps.LatLng(36.771126, 126.929331),
                new kakao.maps.LatLng(36.774748, 126.932539), new kakao.maps.LatLng(36.773416, 126.933639), new kakao.maps.LatLng(36.772986, 126.933569)
            ],
            strokeWeight: 10,
            strokeColor: '#dc3d3d',
            strokeOpacity: 0.6,
            strokeStyle: 'soild'
        });

        for (let i = 0; i < busimages.length; i++) {
            // const markerBusImage = new kakao.maps.MarkerImage(busimages[i].busimageSrc,busimages[i].busimageSize);
            const markerBusImage = new kakao.maps.MarkerImage('https://cdn-icons-png.flaticon.com/512/2125/2125837.png', new kakao.maps.Size(54, 59));
            const busmaker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(res.data[0].N[i], res.data[0].W[i]),
                image: markerBusImage // 마커이미지 설정
            });
        }
    })
    .catch(res => {
        console.log(res); // 값 불러올경우
    });

//후문 위치 36.772986, 126.933569
// 향3 앞 36.767534, 126.934711
// 향2 앞 36.767737, 126.932821
// 공대 옆 36.768762, 126.931288
// 인사대 앞  36.769160, 126.927829