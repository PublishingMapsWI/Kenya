var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Counties0 = new ol.format.GeoJSON();
var features_Counties0 = format_Counties0.readFeatures(json_Counties0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Counties0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Counties0.addFeatures(features_Counties0);var lyr_Counties0 = new ol.layer.Vector({
                source:jsonSource_Counties0, 
                style: style_Counties0,
                title: '<img src="styles/legend/Counties0.png" /> Counties'
            });var format_SFSIH1 = new ol.format.GeoJSON();
var features_SFSIH1 = format_SFSIH1.readFeatures(json_SFSIH1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SFSIH1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SFSIH1.addFeatures(features_SFSIH1);var lyr_SFSIH1 = new ol.layer.Vector({
                source:jsonSource_SFSIH1, 
                style: style_SFSIH1,
                title: '<img src="styles/legend/SFSIH1.png" /> SFSIH'
            });var format_RAIN2 = new ol.format.GeoJSON();
var features_RAIN2 = format_RAIN2.readFeatures(json_RAIN2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAIN2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RAIN2.addFeatures(features_RAIN2);var lyr_RAIN2 = new ol.layer.Vector({
                source:jsonSource_RAIN2, 
                style: style_RAIN2,
                title: '<img src="styles/legend/RAIN2.png" /> RAIN'
            });var format_N2A3 = new ol.format.GeoJSON();
var features_N2A3 = format_N2A3.readFeatures(json_N2A3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N2A3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_N2A3.addFeatures(features_N2A3);var lyr_N2A3 = new ol.layer.Vector({
                source:jsonSource_N2A3, 
                style: style_N2A3,
                title: '<img src="styles/legend/N2A3.png" /> N2A'
            });var format_MaMaSe4 = new ol.format.GeoJSON();
var features_MaMaSe4 = format_MaMaSe4.readFeatures(json_MaMaSe4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaMaSe4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MaMaSe4.addFeatures(features_MaMaSe4);var lyr_MaMaSe4 = new ol.layer.Vector({
                source:jsonSource_MaMaSe4, 
                style: style_MaMaSe4,
                title: '<img src="styles/legend/MaMaSe4.png" /> MaMaSe'
            });var format_LIQUID5 = new ol.format.GeoJSON();
var features_LIQUID5 = format_LIQUID5.readFeatures(json_LIQUID5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIQUID5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIQUID5.addFeatures(features_LIQUID5);var lyr_LIQUID5 = new ol.layer.Vector({
                source:jsonSource_LIQUID5, 
                style: style_LIQUID5,
                title: '<img src="styles/legend/LIQUID5.png" /> LIQUID'
            });var format_KMDP6 = new ol.format.GeoJSON();
var features_KMDP6 = format_KMDP6.readFeatures(json_KMDP6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KMDP6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KMDP6.addFeatures(features_KMDP6);var lyr_KMDP6 = new ol.layer.Vector({
                source:jsonSource_KMDP6, 
                style: style_KMDP6,
                title: '<img src="styles/legend/KMDP6.png" /> KMDP'
            });var format_KMAP7 = new ol.format.GeoJSON();
var features_KMAP7 = format_KMAP7.readFeatures(json_KMAP7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KMAP7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KMAP7.addFeatures(features_KMAP7);var lyr_KMAP7 = new ol.layer.Vector({
                source:jsonSource_KMAP7, 
                style: style_KMAP7,
                title: '<img src="styles/legend/KMAP7.png" /> KMAP'
            });var format_ISPID8 = new ol.format.GeoJSON();
var features_ISPID8 = format_ISPID8.readFeatures(json_ISPID8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISPID8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ISPID8.addFeatures(features_ISPID8);var lyr_ISPID8 = new ol.layer.Vector({
                source:jsonSource_ISPID8, 
                style: style_ISPID8,
                title: '<img src="styles/legend/ISPID8.png" /> ISPID'
            });var format_ILIPA9 = new ol.format.GeoJSON();
var features_ILIPA9 = format_ILIPA9.readFeatures(json_ILIPA9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ILIPA9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ILIPA9.addFeatures(features_ILIPA9);var lyr_ILIPA9 = new ol.layer.Vector({
                source:jsonSource_ILIPA9, 
                style: style_ILIPA9,
                title: '<img src="styles/legend/ILIPA9.png" /> ILIPA'
            });var format_HortIMPACT10 = new ol.format.GeoJSON();
var features_HortIMPACT10 = format_HortIMPACT10.readFeatures(json_HortIMPACT10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HortIMPACT10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_HortIMPACT10.addFeatures(features_HortIMPACT10);var lyr_HortIMPACT10 = new ol.layer.Vector({
                source:jsonSource_HortIMPACT10, 
                style: style_HortIMPACT10,
                title: '<img src="styles/legend/HortIMPACT10.png" /> HortIMPACT'
            });var format_Hoaccp11 = new ol.format.GeoJSON();
var features_Hoaccp11 = format_Hoaccp11.readFeatures(json_Hoaccp11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoaccp11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Hoaccp11.addFeatures(features_Hoaccp11);var lyr_Hoaccp11 = new ol.layer.Vector({
                source:jsonSource_Hoaccp11, 
                style: style_Hoaccp11,
                title: '<img src="styles/legend/Hoaccp11.png" /> Hoa-ccp'
            });var format_Geodatics12 = new ol.format.GeoJSON();
var features_Geodatics12 = format_Geodatics12.readFeatures(json_Geodatics12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geodatics12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Geodatics12.addFeatures(features_Geodatics12);var lyr_Geodatics12 = new ol.layer.Vector({
                source:jsonSource_Geodatics12, 
                style: style_Geodatics12,
                title: '<img src="styles/legend/Geodatics12.png" /> Geodatics'
            });var format_FTA13 = new ol.format.GeoJSON();
var features_FTA13 = format_FTA13.readFeatures(json_FTA13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FTA13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_FTA13.addFeatures(features_FTA13);var lyr_FTA13 = new ol.layer.Vector({
                source:jsonSource_FTA13, 
                style: style_FTA13,
                title: '<img src="styles/legend/FTA13.png" /> FTA'
            });var format_EVOCA14 = new ol.format.GeoJSON();
var features_EVOCA14 = format_EVOCA14.readFeatures(json_EVOCA14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EVOCA14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EVOCA14.addFeatures(features_EVOCA14);var lyr_EVOCA14 = new ol.layer.Vector({
                source:jsonSource_EVOCA14, 
                style: style_EVOCA14,
                title: '<img src="styles/legend/EVOCA14.png" /> EVOCA'
            });var format_ESAB15 = new ol.format.GeoJSON();
var features_ESAB15 = format_ESAB15.readFeatures(json_ESAB15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESAB15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ESAB15.addFeatures(features_ESAB15);var lyr_ESAB15 = new ol.layer.Vector({
                source:jsonSource_ESAB15, 
                style: style_ESAB15,
                title: '<img src="styles/legend/ESAB15.png" /> ESAB'
            });var format_ERMDA16 = new ol.format.GeoJSON();
var features_ERMDA16 = format_ERMDA16.readFeatures(json_ERMDA16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ERMDA16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ERMDA16.addFeatures(features_ERMDA16);var lyr_ERMDA16 = new ol.layer.Vector({
                source:jsonSource_ERMDA16, 
                style: style_ERMDA16,
                title: '<img src="styles/legend/ERMDA16.png" /> ERMDA'
            });var format_DLRCA17 = new ol.format.GeoJSON();
var features_DLRCA17 = format_DLRCA17.readFeatures(json_DLRCA17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DLRCA17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DLRCA17.addFeatures(features_DLRCA17);var lyr_DLRCA17 = new ol.layer.Vector({
                source:jsonSource_DLRCA17, 
                style: style_DLRCA17,
                title: '<img src="styles/legend/DLRCA17.png" /> DLRCA'
            });var format_Cleome18 = new ol.format.GeoJSON();
var features_Cleome18 = format_Cleome18.readFeatures(json_Cleome18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cleome18 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Cleome18.addFeatures(features_Cleome18);var lyr_Cleome18 = new ol.layer.Vector({
                source:jsonSource_Cleome18, 
                style: style_Cleome18,
                title: '<img src="styles/legend/Cleome18.png" /> Cleome'
            });var format_ADIAS19 = new ol.format.GeoJSON();
var features_ADIAS19 = format_ADIAS19.readFeatures(json_ADIAS19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADIAS19 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ADIAS19.addFeatures(features_ADIAS19);var lyr_ADIAS19 = new ol.layer.Vector({
                source:jsonSource_ADIAS19, 
                style: style_ADIAS19,
                title: '<img src="styles/legend/ADIAS19.png" /> ADIAS'
            });var format_4SScale20 = new ol.format.GeoJSON();
var features_4SScale20 = format_4SScale20.readFeatures(json_4SScale20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4SScale20 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_4SScale20.addFeatures(features_4SScale20);var lyr_4SScale20 = new ol.layer.Vector({
                source:jsonSource_4SScale20, 
                style: style_4SScale20,
                title: '<img src="styles/legend/4SScale20.png" /> 4S@Scale'
            });var format_3RKenya21 = new ol.format.GeoJSON();
var features_3RKenya21 = format_3RKenya21.readFeatures(json_3RKenya21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3RKenya21 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_3RKenya21.addFeatures(features_3RKenya21);var lyr_3RKenya21 = new ol.layer.Vector({
                source:jsonSource_3RKenya21, 
                style: style_3RKenya21,
                title: '<img src="styles/legend/3RKenya21.png" /> 3RKenya'
            });var format_SCRM22 = new ol.format.GeoJSON();
var features_SCRM22 = format_SCRM22.readFeatures(json_SCRM22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCRM22 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SCRM22.addFeatures(features_SCRM22);var lyr_SCRM22 = new ol.layer.Vector({
                source:jsonSource_SCRM22, 
                style: style_SCRM22,
                title: '<img src="styles/legend/SCRM22.png" /> SCRM'
            });var format_PMEA23 = new ol.format.GeoJSON();
var features_PMEA23 = format_PMEA23.readFeatures(json_PMEA23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PMEA23 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PMEA23.addFeatures(features_PMEA23);var lyr_PMEA23 = new ol.layer.Vector({
                source:jsonSource_PMEA23, 
                style: style_PMEA23,
                title: '<img src="styles/legend/PMEA23.png" /> PMEA'
            });var format_SPD24 = new ol.format.GeoJSON();
var features_SPD24 = format_SPD24.readFeatures(json_SPD24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPD24 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SPD24.addFeatures(features_SPD24);var lyr_SPD24 = new ol.layer.Vector({
                source:jsonSource_SPD24, 
                style: style_SPD24,
                title: '<img src="styles/legend/SPD24.png" /> SPD'
            });var format_PhDProject25 = new ol.format.GeoJSON();
var features_PhDProject25 = format_PhDProject25.readFeatures(json_PhDProject25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PhDProject25 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PhDProject25.addFeatures(features_PhDProject25);var lyr_PhDProject25 = new ol.layer.Vector({
                source:jsonSource_PhDProject25, 
                style: style_PhDProject25,
                title: '<img src="styles/legend/PhDProject25.png" /> PhD Project'
            });

lyr_Counties0.setVisible(true);lyr_SFSIH1.setVisible(true);lyr_RAIN2.setVisible(true);lyr_N2A3.setVisible(true);lyr_MaMaSe4.setVisible(true);lyr_LIQUID5.setVisible(true);lyr_KMDP6.setVisible(true);lyr_KMAP7.setVisible(true);lyr_ISPID8.setVisible(true);lyr_ILIPA9.setVisible(true);lyr_HortIMPACT10.setVisible(true);lyr_Hoaccp11.setVisible(true);lyr_Geodatics12.setVisible(true);lyr_FTA13.setVisible(true);lyr_EVOCA14.setVisible(true);lyr_ESAB15.setVisible(true);lyr_ERMDA16.setVisible(true);lyr_DLRCA17.setVisible(true);lyr_Cleome18.setVisible(true);lyr_ADIAS19.setVisible(true);lyr_4SScale20.setVisible(true);lyr_3RKenya21.setVisible(true);lyr_SCRM22.setVisible(true);lyr_PMEA23.setVisible(true);lyr_SPD24.setVisible(true);lyr_PhDProject25.setVisible(true);
var layersList = [baseLayer,lyr_Counties0,lyr_SFSIH1,lyr_RAIN2,lyr_N2A3,lyr_MaMaSe4,lyr_LIQUID5,lyr_KMDP6,lyr_KMAP7,lyr_ISPID8,lyr_ILIPA9,lyr_HortIMPACT10,lyr_Hoaccp11,lyr_Geodatics12,lyr_FTA13,lyr_EVOCA14,lyr_ESAB15,lyr_ERMDA16,lyr_DLRCA17,lyr_Cleome18,lyr_ADIAS19,lyr_4SScale20,lyr_3RKenya21,lyr_SCRM22,lyr_PMEA23,lyr_SPD24,lyr_PhDProject25];
lyr_Counties0.set('fieldAliases', {'County': 'County', });
lyr_SFSIH1.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_RAIN2.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_N2A3.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_MaMaSe4.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_LIQUID5.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_KMDP6.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_KMAP7.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_ISPID8.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_ILIPA9.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_HortIMPACT10.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_Hoaccp11.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_Geodatics12.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_FTA13.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_EVOCA14.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_ESAB15.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_ERMDA16.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_DLRCA17.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_Cleome18.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_ADIAS19.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_4SScale20.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_3RKenya21.set('fieldAliases', {'County': 'County', 'Title': 'Title', });
lyr_SCRM22.set('fieldAliases', {'Title': 'Title', 'ShortTitle': 'ShortTitle', 'Scale': 'Scale', });
lyr_PMEA23.set('fieldAliases', {'Title': 'Title', 'ShortTitle': 'ShortTitle', 'Scale': 'Scale', });
lyr_SPD24.set('fieldAliases', {'Title': 'Title', 'ShortTitle': 'ShortTitle', 'Scale': 'Scale', });
lyr_PhDProject25.set('fieldAliases', {'County': 'County', 'PhD': 'PhD', });
lyr_Counties0.set('fieldImages', {'County': 'TextEdit', });
lyr_SFSIH1.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_RAIN2.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_N2A3.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_MaMaSe4.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_LIQUID5.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_KMDP6.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_KMAP7.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_ISPID8.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_ILIPA9.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_HortIMPACT10.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_Hoaccp11.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_Geodatics12.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_FTA13.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_EVOCA14.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_ESAB15.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_ERMDA16.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_DLRCA17.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_Cleome18.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_ADIAS19.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_4SScale20.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_3RKenya21.set('fieldImages', {'County': 'TextEdit', 'Title': 'TextEdit', });
lyr_SCRM22.set('fieldImages', {'Title': 'TextEdit', 'ShortTitle': 'TextEdit', 'Scale': 'TextEdit', });
lyr_PMEA23.set('fieldImages', {'Title': 'TextEdit', 'ShortTitle': 'TextEdit', 'Scale': 'TextEdit', });
lyr_SPD24.set('fieldImages', {'Title': 'TextEdit', 'ShortTitle': 'TextEdit', 'Scale': 'TextEdit', });
lyr_PhDProject25.set('fieldImages', {'County': 'TextEdit', 'PhD': 'TextEdit', });
lyr_Counties0.set('fieldLabels', {'County': 'header label', });
lyr_SFSIH1.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_RAIN2.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_N2A3.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_MaMaSe4.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_LIQUID5.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_KMDP6.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_KMAP7.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_ISPID8.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_ILIPA9.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_HortIMPACT10.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_Hoaccp11.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_Geodatics12.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_FTA13.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_EVOCA14.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_ESAB15.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_ERMDA16.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_DLRCA17.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_Cleome18.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_ADIAS19.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_4SScale20.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_3RKenya21.set('fieldLabels', {'County': 'header label', 'Title': 'header label', });
lyr_SCRM22.set('fieldLabels', {'Title': 'header label', 'ShortTitle': 'header label', 'Scale': 'header label', });
lyr_PMEA23.set('fieldLabels', {'Title': 'header label', 'ShortTitle': 'header label', 'Scale': 'header label', });
lyr_SPD24.set('fieldLabels', {'Title': 'header label', 'ShortTitle': 'header label', 'Scale': 'header label', });
lyr_PhDProject25.set('fieldLabels', {'County': 'header label', 'PhD': 'header label', });
lyr_PhDProject25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});