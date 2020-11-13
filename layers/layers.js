var wms_layers = [];
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
var format_ROI2_0 = new ol.format.GeoJSON();
var features_ROI2_0 = format_ROI2_0.readFeatures(json_ROI2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROI2_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ROI2_0.addFeatures(features_ROI2_0);var lyr_ROI2_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROI2_0, 
                style: style_ROI2_0,
                title: '<img src="styles/legend/ROI2_0.png" /> ROI2'
            });var format_Rgion_utm30_1 = new ol.format.GeoJSON();
var features_Rgion_utm30_1 = format_Rgion_utm30_1.readFeatures(json_Rgion_utm30_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rgion_utm30_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Rgion_utm30_1.addFeatures(features_Rgion_utm30_1);var lyr_Rgion_utm30_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rgion_utm30_1, 
                style: style_Rgion_utm30_1,
                title: '<img src="styles/legend/Rgion_utm30_1.png" /> Région_utm30'
            });var format_ROI2_Piste_2 = new ol.format.GeoJSON();
var features_ROI2_Piste_2 = format_ROI2_Piste_2.readFeatures(json_ROI2_Piste_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROI2_Piste_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ROI2_Piste_2.addFeatures(features_ROI2_Piste_2);var lyr_ROI2_Piste_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROI2_Piste_2, 
                style: style_ROI2_Piste_2,
                title: '<img src="styles/legend/ROI2_Piste_2.png" /> ROI2_Piste'
            });var format_ROI2_ROUTE_3 = new ol.format.GeoJSON();
var features_ROI2_ROUTE_3 = format_ROI2_ROUTE_3.readFeatures(json_ROI2_ROUTE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROI2_ROUTE_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ROI2_ROUTE_3.addFeatures(features_ROI2_ROUTE_3);var lyr_ROI2_ROUTE_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROI2_ROUTE_3, 
                style: style_ROI2_ROUTE_3,
                title: '<img src="styles/legend/ROI2_ROUTE_3.png" /> ROI2_ROUTE'
            });var format_ROI_pastorale_4 = new ol.format.GeoJSON();
var features_ROI_pastorale_4 = format_ROI_pastorale_4.readFeatures(json_ROI_pastorale_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROI_pastorale_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ROI_pastorale_4.addFeatures(features_ROI_pastorale_4);var lyr_ROI_pastorale_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROI_pastorale_4, 
                style: style_ROI_pastorale_4,
                title: '<img src="styles/legend/ROI_pastorale_4.png" /> ROI_pastorale'
            });var format_ROI2_Ptseau_5 = new ol.format.GeoJSON();
var features_ROI2_Ptseau_5 = format_ROI2_Ptseau_5.readFeatures(json_ROI2_Ptseau_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROI2_Ptseau_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ROI2_Ptseau_5.addFeatures(features_ROI2_Ptseau_5);var lyr_ROI2_Ptseau_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROI2_Ptseau_5, 
                style: style_ROI2_Ptseau_5,
                title: '<img src="styles/legend/ROI2_Ptseau_5.png" /> ROI2_Ptseau'
            });var format_infra_pastoral_6 = new ol.format.GeoJSON();
var features_infra_pastoral_6 = format_infra_pastoral_6.readFeatures(json_infra_pastoral_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_infra_pastoral_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_infra_pastoral_6.addFeatures(features_infra_pastoral_6);var lyr_infra_pastoral_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_infra_pastoral_6, 
                style: style_infra_pastoral_6,
                title: '<img src="styles/legend/infra_pastoral_6.png" /> infra_pastoral'
            });var format_ROI2_chemin_de_fer_7 = new ol.format.GeoJSON();
var features_ROI2_chemin_de_fer_7 = format_ROI2_chemin_de_fer_7.readFeatures(json_ROI2_chemin_de_fer_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROI2_chemin_de_fer_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ROI2_chemin_de_fer_7.addFeatures(features_ROI2_chemin_de_fer_7);var lyr_ROI2_chemin_de_fer_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROI2_chemin_de_fer_7, 
                style: style_ROI2_chemin_de_fer_7,
                title: '<img src="styles/legend/ROI2_chemin_de_fer_7.png" /> ROI2_chemin_de_fer'
            });var format_ZONE_INDUSTRIEL_8 = new ol.format.GeoJSON();
var features_ZONE_INDUSTRIEL_8 = format_ZONE_INDUSTRIEL_8.readFeatures(json_ZONE_INDUSTRIEL_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONE_INDUSTRIEL_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ZONE_INDUSTRIEL_8.addFeatures(features_ZONE_INDUSTRIEL_8);var lyr_ZONE_INDUSTRIEL_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONE_INDUSTRIEL_8, 
                style: style_ZONE_INDUSTRIEL_8,
                title: '<img src="styles/legend/ZONE_INDUSTRIEL_8.png" /> ZONE_INDUSTRIEL'
            });

lyr_ROI2_0.setVisible(true);lyr_Rgion_utm30_1.setVisible(true);lyr_ROI2_Piste_2.setVisible(true);lyr_ROI2_ROUTE_3.setVisible(true);lyr_ROI_pastorale_4.setVisible(true);lyr_ROI2_Ptseau_5.setVisible(true);lyr_infra_pastoral_6.setVisible(true);lyr_ROI2_chemin_de_fer_7.setVisible(true);lyr_ZONE_INDUSTRIEL_8.setVisible(true);
var layersList = [baseLayer,lyr_ROI2_0,lyr_Rgion_utm30_1,lyr_ROI2_Piste_2,lyr_ROI2_ROUTE_3,lyr_ROI_pastorale_4,lyr_ROI2_Ptseau_5,lyr_infra_pastoral_6,lyr_ROI2_chemin_de_fer_7,lyr_ZONE_INDUSTRIEL_8];
lyr_ROI2_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'Sup_Ha': 'Sup_Ha', });
lyr_Rgion_utm30_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'Sup_Ha': 'Sup_Ha', });
lyr_ROI2_Piste_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Type': 'Type', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ROI2_ROUTE_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'Classement': 'Classement', 'Revetement': 'Revetement', 'Niveau': 'Niveau', 'SHAPE_Leng': 'SHAPE_Leng', 'Praticabil': 'Praticabil', 'Nb_chausse': 'Nb_chausse', });
lyr_ROI_pastorale_4.set('fieldAliases', {'NOM': 'NOM', 'AIRE_HA': 'AIRE_HA', 'mean': 'mean', });
lyr_ROI2_Ptseau_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'Type': 'Type', });
lyr_infra_pastoral_6.set('fieldAliases', {'Région': 'Région', 'Province': 'Province', 'Commune': 'Commune', 'Village_si': 'Village_si', 'Type': 'Type', 'Date_de_r': 'Date_de_r', 'Source_de': 'Source_de', 'Etat_fonct': 'Etat_fonct', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Field11': 'Field11', });
lyr_ROI2_chemin_de_fer_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Etat': 'Etat', });
lyr_ZONE_INDUSTRIEL_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'Type': 'Type', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ROI2_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nom': 'TextEdit', 'Sup_Ha': 'TextEdit', });
lyr_Rgion_utm30_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nom': 'TextEdit', 'Sup_Ha': 'TextEdit', });
lyr_ROI2_Piste_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Type': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_ROI2_ROUTE_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nom': 'TextEdit', 'Classement': 'TextEdit', 'Revetement': 'TextEdit', 'Niveau': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Praticabil': 'TextEdit', 'Nb_chausse': 'TextEdit', });
lyr_ROI_pastorale_4.set('fieldImages', {'NOM': 'TextEdit', 'AIRE_HA': 'TextEdit', 'mean': 'TextEdit', });
lyr_ROI2_Ptseau_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nom': 'TextEdit', 'Type': 'TextEdit', });
lyr_infra_pastoral_6.set('fieldImages', {'Région': 'TextEdit', 'Province': 'TextEdit', 'Commune': 'TextEdit', 'Village_si': 'TextEdit', 'Type': 'TextEdit', 'Date_de_r': 'TextEdit', 'Source_de': 'TextEdit', 'Etat_fonct': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Field11': 'TextEdit', });
lyr_ROI2_chemin_de_fer_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Etat': 'TextEdit', });
lyr_ZONE_INDUSTRIEL_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nom': 'TextEdit', 'Type': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ROI2_0.set('fieldLabels', {'OBJECTID': 'no label', 'Nom': 'no label', 'Sup_Ha': 'no label', });
lyr_Rgion_utm30_1.set('fieldLabels', {'OBJECTID': 'no label', 'Nom': 'no label', 'Sup_Ha': 'no label', });
lyr_ROI2_Piste_2.set('fieldLabels', {'OBJECTID': 'no label', 'Type': 'no label', 'SHAPE_Leng': 'no label', });
lyr_ROI2_ROUTE_3.set('fieldLabels', {'OBJECTID': 'no label', 'Nom': 'no label', 'Classement': 'no label', 'Revetement': 'no label', 'Niveau': 'no label', 'SHAPE_Leng': 'no label', 'Praticabil': 'no label', 'Nb_chausse': 'no label', });
lyr_ROI_pastorale_4.set('fieldLabels', {'NOM': 'no label', 'AIRE_HA': 'no label', 'mean': 'no label', });
lyr_ROI2_Ptseau_5.set('fieldLabels', {'OBJECTID': 'no label', 'Nom': 'no label', 'Type': 'no label', });
lyr_infra_pastoral_6.set('fieldLabels', {'Région': 'no label', 'Province': 'no label', 'Commune': 'no label', 'Village_si': 'no label', 'Type': 'no label', 'Date_de_r': 'no label', 'Source_de': 'no label', 'Etat_fonct': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Field11': 'no label', });
lyr_ROI2_chemin_de_fer_7.set('fieldLabels', {'OBJECTID': 'no label', 'Etat': 'no label', });
lyr_ZONE_INDUSTRIEL_8.set('fieldLabels', {'OBJECTID': 'no label', 'Nom': 'no label', 'Type': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ZONE_INDUSTRIEL_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});