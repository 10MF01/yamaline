<template>
    <div class="chartsdata-page">
        <MapView />
        <MapTools />
    </div>
</template>

<script>
import MapView from './../components/common/MapView';
import MapTools from './../components/maptools';

export default {
    name: 'ChartsData',
    components: {
        MapView,
        MapTools,
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
