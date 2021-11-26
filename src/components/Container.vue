<template>
    <div id="Container">
        <div class="bannerWrap">
            <img src="../images/1920x1080-coffees.jpg" alt="bannerImage" />
        </div>

        <div class="mapContainer">
            <map-contents
                style="display: block; 
                position: relative; 
                top: 15px;" 
            />
        </div>
    </div>
</template>

<script>
    import mapContents from "../components/mapContents.vue"

    export default {
        name: "Container",
        components: {
            mapContents
        }
    }
</script>

<style>
    #Container {
        display: block;
        position: relative;
        width: 100%;
        top: 20px;
    }

    .bannerWrap {
        display: block;
        position: relative;
        width: 100%;
        height: auto;
    }

    .bannerWrap img {
        width: 100%;
        height: auto;
    }
</style>