var wms_layers = [];

var format_playas_0 = new ol.format.GeoJSON();
var features_playas_0 = format_playas_0.readFeatures(json_playas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_playas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_playas_0.addFeatures(features_playas_0);
var lyr_playas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_playas_0, 
                style: style_playas_0,
                interactive: true,
                title: '<img src="styles/legend/playas_0.png" /> playas'
            });

lyr_playas_0.setVisible(true);
var layersList = [lyr_playas_0];
lyr_playas_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PROVINCIA': 'PROVINCIA', 'MUNICIPIO': 'MUNICIPIO', 'COMARCA': 'COMARCA', 'POBLA96': 'POBLA96', 'CODIGO_INE': 'CODIGO_INE', 'temp': 'temp', 'fecha': 'fecha', });
lyr_playas_0.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PROVINCIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'COMARCA': 'TextEdit', 'POBLA96': 'TextEdit', 'CODIGO_INE': 'TextEdit', 'temp': 'TextEdit', 'fecha': 'DateTime', });
lyr_playas_0.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'PROVINCIA': 'no label', 'MUNICIPIO': 'no label', 'COMARCA': 'no label', 'POBLA96': 'no label', 'CODIGO_INE': 'no label', 'temp': 'no label', 'fecha': 'no label', });
lyr_playas_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});