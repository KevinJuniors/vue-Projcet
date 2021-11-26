<template>
    <div id="mapCentent"></div>
</template>

<script>
    export default {
        methods: {
            initMap() {
                var mapContainer = document.getElementById('mapCentent'), // 지도를 표시할 div 
                mapOption = { 
                    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3 // 지도의 확대 레벨
                };

                var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

                var mapTypeControl = new kakao.maps.MapTypeControl();
                    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

                var zoomControl = new kakao.maps.ZoomControl();
                    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
                }
        },

        name: "mapContents",
        components: {}
    }
</script>

<style>
    
</style>