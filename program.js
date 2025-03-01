var map = L.map('map').setView([4.669450147376564, -74.11759330312128], 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// fetch es para obtener algo, await es funcion asincronica
async function loadPolygon(){
    let myData= await fetch('modelia.geojson');
    let myPolygon= await myData.json();
    L.geoJSON(myPolygon,
        {
            style:{
                color:"blue"
            }
        }
    ).addTo(map);
}
loadPolygon();