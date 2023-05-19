<template>
    <div class="chartsdata-page">
        <MapView />
    </div>
</template>

<script>
import MapView from './../components/common/MapView';

export default {
    name: 'ChartsData',
    components: {
        MapView,
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
