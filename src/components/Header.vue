<template>
    <div id="Home">
        <header>
            <h1 id="Textlogo">Cafe Apps</h1>

            <nav id="navWrap">
                <ul id="navbar">
                    <li class="Home">
                        <button type="button" class="btn btn-outline-danger">
                            <a href="#Home">Home</a>
                        </button>
                    </li>

                    <li class="Info">
                        <button type="button" class="btn btn-outline-danger">
                            <a href="#Info">Info</a>
                        </button>
                    </li>

                    <li class="Maps">
                        <button type="button" class="btn btn-outline-danger">
                            <a href="#Maps">Maps</a>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
        name: "Header",
        components: {}
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@500&family=Titillium+Web:wght@700&family=Yeon+Sung&display=swap');

    #Home {
        display: block;
        position: fixed;
        z-index: 1000;
        top: 0;
        width: 100%;
        height: 80px;
        background: #36e77a;
    }

    header {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        float: left;
    }

    header #Textlogo {
        display: block;
        position: absolute;
        float: left;
        font-family: 'Yeon Sung', cursive;
        font-size: 40px;
        text-align: center;
        margin: 0;
        padding: 0;
        top: 5px;
    }

    #navWrap {
        display: block;
        position: relative;
        float: right;
        padding: 3px 3px 3px 3px;
        width: auto;
        height: auto;
    }

    #navbar {
        display: inline-block;
        position: relative;
        padding: 1px 1px 1px 1px;
        margin-left: 2px;
        margin-right: 2px;
        top: 11px;
        width: 100%;
        height: auto;
    }

    #navbar > li {
        list-style: none;
        float: left;
        margin-right: 4px;
        /* padding: 3px 3px 3px 3px; */
    }

    #navWrap li button a {
        text-decoration: none;
        color: #000000;
        text-align: center;
        font-weight: 500;
    }

    #navWrap li button a:hover {
        text-decoration: underline;
        color: #ffffff;
        text-align: center;
        font-weight: bold;
    }
</style>