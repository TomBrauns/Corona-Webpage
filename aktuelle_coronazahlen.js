function presentData(daten) {

    document.getElementById('table_inzidenz_7_tage_pro_100k').innerHTML = daten.data['07319'].weekIncidence.toFixed(2);
    document.getElementById('table_faelle_insgesamt').innerHTML = daten.data['07319'].cases;
    document.getElementById('table_tode_insgesamt').innerHTML = daten.data['07319'].deaths;
    document.getElementById('table_genesen').innerHTML = daten.data['07319'].recovered;
    document.getElementById('table_faelle_pro_woche').innerHTML = daten.data['07319'].casesPerWeek;
}

function fetchData(event) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            const daten = JSON.parse(xmlHttp.responseText);
            presentData(daten);
        }
    }
    // Anfrage erfolgt -> wenn erfolgreich -> State-change -> Zeile 7
    xmlHttp.open("GET", 'https://api.corona-zahlen.org/districts', true);
    //Aufgrund von späteren Komplikationen ist ein direkter Zugriff auf den Kreis 07319 nicht möglich gewesen weswegen die Filterung aller Daten auf 07319 oben erfolgt
    //xmlHttp.open("GET", 'https://api.corona-zahlen.org/districts/07319', true);
    xmlHttp.send(null);



}
const butn = document.getElementById('coronazahlen');
butn.addEventListener('click', fetchData);

document.addEventListener("DOMContentLoaded", fetchData);

//Aufgrund von "Cookies" werden weitere Settings benötigt
document.cookie = 'cookie2=value2; SameSite=None; Secure';
document.cookie = 'cookie1=value1; SameSite=Lax';
