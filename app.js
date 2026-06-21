
let canta = [];

function esyaEkle(esyaAdi) {
    canta.push(esyaAdi);
    console.log(" Çantaya eklendi: " + esyaAdi);
}


esyaEkle("Kılıç");
esyaEkle("Kalkan");
esyaEkle("İksir");

console.log("-----------------------");


function cantayiGoster() {
    console.log(" Mevcut Envanteriniz:");
    canta.forEach((esya, sira) => {
        console.log((sira + 1) + ". " + esya);
    });
}

cantayiGoster();

console.log("-----------------------");


function esyaKullan(silinecekEsya) {
    
    canta = canta.filter(esya => esya !== silinecekEsya);
    console.log( silinecekEsya + " kullanıldı/atıldı.");
}

esyaKullan("İksir");
cantayiGoster(); 