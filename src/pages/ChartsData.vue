<template>
    <div class="chartsdata-page">
        <MapView />
        <MapTools />
        <MapTree />
    </div>
</template>

<script>
import MapView from './../components/common/MapView';
import MapTools from './../components/maptools';
import MapTree from './../components/maptree';

export default {
    name: 'ChartsData',
    components: {
        MapView,
        MapTools,
        MapTree,
    },
    methods: {},
};
</script>

<style>
.chartsdata-page {
    position: relative;
    height: 100%;
    width: 100%;
}
</style>
