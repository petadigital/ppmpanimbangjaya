var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ZONARAWANTSUNAMI_1 = new ol.format.GeoJSON();
var features_ZONARAWANTSUNAMI_1 = format_ZONARAWANTSUNAMI_1.readFeatures(json_ZONARAWANTSUNAMI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONARAWANTSUNAMI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONARAWANTSUNAMI_1.addFeatures(features_ZONARAWANTSUNAMI_1);
var lyr_ZONARAWANTSUNAMI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONARAWANTSUNAMI_1, 
                style: style_ZONARAWANTSUNAMI_1,
                interactive: true,
    title: 'ZONA RAWAN TSUNAMI<br />\
    <img src="styles/legend/ZONARAWANTSUNAMI_1_0.png" /> Rawan Tinggi<br />\
    <img src="styles/legend/ZONARAWANTSUNAMI_1_1.png" /> Rawan Sedang<br />\
    <img src="styles/legend/ZONARAWANTSUNAMI_1_2.png" /> Rawan Rendah<br />\
    <img src="styles/legend/ZONARAWANTSUNAMI_1_3.png" /> Tidak Rawan<br />'
        });
var format_BANGUNAN_2 = new ol.format.GeoJSON();
var features_BANGUNAN_2 = format_BANGUNAN_2.readFeatures(json_BANGUNAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_2.addFeatures(features_BANGUNAN_2);
var lyr_BANGUNAN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANGUNAN_2, 
                style: style_BANGUNAN_2,
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_2.png" /> BANGUNAN'
            });
var format_JALAN_3 = new ol.format.GeoJSON();
var features_JALAN_3 = format_JALAN_3.readFeatures(json_JALAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_3.addFeatures(features_JALAN_3);
var lyr_JALAN_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_3, 
                style: style_JALAN_3,
                interactive: true,
    title: 'JALAN<br />\
    <img src="styles/legend/JALAN_3_0.png" /> Jalan lokal<br />\
    <img src="styles/legend/JALAN_3_1.png" /> Jalan lingkungan<br />'
        });
var format_SARANAPELAYANANUMUM_4 = new ol.format.GeoJSON();
var features_SARANAPELAYANANUMUM_4 = format_SARANAPELAYANANUMUM_4.readFeatures(json_SARANAPELAYANANUMUM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANAPELAYANANUMUM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANAPELAYANANUMUM_4.addFeatures(features_SARANAPELAYANANUMUM_4);
var lyr_SARANAPELAYANANUMUM_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SARANAPELAYANANUMUM_4, 
                style: style_SARANAPELAYANANUMUM_4,
                interactive: true,
                title: '<img src="styles/legend/SARANAPELAYANANUMUM_4.png" /> SARANA PELAYANAN UMUM'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ZONARAWANTSUNAMI_1.setVisible(true);lyr_BANGUNAN_2.setVisible(false);lyr_JALAN_3.setVisible(true);lyr_SARANAPELAYANANUMUM_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ZONARAWANTSUNAMI_1,lyr_BANGUNAN_2,lyr_JALAN_3,lyr_SARANAPELAYANANUMUM_4];
lyr_ZONARAWANTSUNAMI_1.set('fieldAliases', {'WADMKD': 'kelurahan', 'gridcode': 'gridcode', 'keterangan': 'keterangan', });
lyr_BANGUNAN_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fclass': 'kelas bangunan', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_JALAN_3.set('fieldAliases', {'osm_id': 'osm_id', 'fclass': 'kelas jalan', 'name': 'nama jalan', });
lyr_SARANAPELAYANANUMUM_4.set('fieldAliases', {'NAME': 'NAME', 'koordinat': 'koordinat', 'Rute': 'Rute', 'FOTO': 'FOTO', 'JENIS': 'JENIS', });
lyr_ZONARAWANTSUNAMI_1.set('fieldImages', {'WADMKD': 'TextEdit', 'gridcode': 'Range', 'keterangan': 'TextEdit', });
lyr_BANGUNAN_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'fclass': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_JALAN_3.set('fieldImages', {'osm_id': 'TextEdit', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_SARANAPELAYANANUMUM_4.set('fieldImages', {'NAME': 'TextEdit', 'koordinat': 'TextEdit', 'Rute': 'TextEdit', 'FOTO': 'ExternalResource', 'JENIS': 'TextEdit', });
lyr_ZONARAWANTSUNAMI_1.set('fieldLabels', {'WADMKD': 'inline label', 'gridcode': 'inline label', 'keterangan': 'inline label', });
lyr_BANGUNAN_2.set('fieldLabels', {'OBJECTID': 'inline label', 'fclass': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_JALAN_3.set('fieldLabels', {'osm_id': 'inline label', 'fclass': 'inline label', 'name': 'inline label', });
lyr_SARANAPELAYANANUMUM_4.set('fieldLabels', {'NAME': 'inline label', 'koordinat': 'inline label', 'Rute': 'inline label', 'FOTO': 'inline label', 'JENIS': 'inline label', });
lyr_SARANAPELAYANANUMUM_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});