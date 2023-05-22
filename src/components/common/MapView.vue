<template>
    <div class="mapview-pannel">
        <div id="mapview"></div>
        <div id="basemapToogle"></div>
        <div id="scaleBar"></div>
        <div id="zoomBar"></div>
    </div>
</template>

<script>
import { loadModules } from 'esri-loader';

const option = {
    url: 'https://js.arcgis.com/4.26/init.js',
    css: 'https://js.arcgis.com/4.26/esri/themes/light/main.css',
};
export default {
    name: 'MapView',
    components: {},
    mounted: function () {
        //console.log(this.$store.state._defaultView);
        this._createMapView();
    },
    methods: {
        async _createMapView() {
            const [Map, MapView, Basemap, TileLayer, BasemapToggle, ScaleBar, Zoom] = await loadModules(
                [
                    'esri/Map',
                    'esri/views/MapView',
                    'esri/Basemap',
                    'esri/layers/TileLayer',
                    'esri/widgets/BasemapToggle',
                    'esri/widgets/ScaleBar',
                    'esri/widgets/Zoom',
                ],
                option,
            );

            let basemap = new Basemap({
                baseLayers: [
                    new TileLayer({
                        url: 'https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer',
                        title: 'Basemap',
                    }),
                ],
                title: 'basemap',
                id: 'basemap',
            });

            const map = new Map({
                basemap,
            });
            const view = new MapView({
                container: 'mapview',
                map: map,
                zoom: 10,
                center: [116.4, 39.91],
            });

            //实例化底图切换代码
            let basemapToggle = new BasemapToggle({
                view: view, // The view that provides access to the map's "streets-vector" basemap
                nextBasemap: 'hybrid', // Allows for toggling to the "hybrid" basemap
                container: 'basemapToogle',
            });
            view.ui.add(basemapToggle);

            //实例化比例尺代码
            let scaleBar = new ScaleBar({
                view: view,
                unit: 'metric',
                container: 'scaleBar',
            });
            view.ui.add(scaleBar);

            //实例化缩放控件
            let zoom = new Zoom({
                view: view,
                container: 'zoomBar',
            });
            view.ui.add(zoom);

            view.ui.components = [];
            this.$store.commit('_setDefaultView', view);
        },
    },
};
</script>

<style>
.mapview-pannel,
#mapview {
    position: relative;
    width: 100%;
    height: 100%;
}
#basemapToogle {
    position: absolute;
    right: 15px;
    bottom: 15px;
}
#scaleBar {
    position: absolute;
    left: 15px;
    bottom: 15px;
}
#zoomBar {
    position: absolute;
    left: 15px;
    top: 15px;
}
</style>
