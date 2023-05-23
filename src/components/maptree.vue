<template>
    <div class="maptree-pannel" v-show="this.$store.getters._getDefaultMapTreeVisible">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
</template>

<script>
import { loadModules } from 'esri-loader';
const option = {
    url: 'https://js.arcgis.com/4.26/init.js',
    css: 'https://js.arcgis.com/4.26/esri/themes/light/main.css',
};

export default {
    name: 'MapTree',
    data() {
        return {
            data: [
                {
                    label: '暖色系图层',
                    layerid: 'layerid',
                    layerurl: 'https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer',
                    children: [
                        {
                            label: '二级 1-1',
                            children: [
                                {
                                    label: '灰色系图层',
                                    layerid: 'layerid',
                                    layerurl:
                                        'https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer',
                                },
                            ],
                        },
                    ],
                },
                {
                    label: '一级 2',
                    children: [
                        {
                            label: '二级 2-1',
                            children: [
                                {
                                    label: '三级 2-1-1',
                                },
                            ],
                        },
                        {
                            label: '二级 2-2',
                            children: [
                                {
                                    label: '三级 2-2-1',
                                },
                            ],
                        },
                    ],
                },
                {
                    label: '一级 3',
                    children: [
                        {
                            label: '二级 3-1',
                            children: [
                                {
                                    label: '三级 3-1-1',
                                },
                            ],
                        },
                        {
                            label: '二级 3-2',
                            children: [
                                {
                                    label: '三级 3-2-1',
                                },
                            ],
                        },
                    ],
                },
            ],
            defaultProps: {
                children: 'children',
                label: 'label',
            },
        };
    },
    methods: {
        async handleNodeClick(data) {
            console.log(data);
            if (data.layerurl) {
                const view1 = this.$store.getters._getDefaultView;
                const resultlayer = view1.map.findLayerById('layerid');
                if (resultlayer) {
                    view1.map.remove(resultlayer);
                }
                const [TileLayer] = await loadModules(['esri/layers/TileLayer'], option);

                const layer = new TileLayer({ url: data.layerurl });
                view1.map.add(layer);
            }
        },
    },
};
</script>


<style >
.maptree-pannel {
    position: absolute;
    top: 20px;
    left: 15px;
    width: 200px;
    height: 300px;
    background-color: white;
}
</style>
