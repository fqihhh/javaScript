//soal 2
let buahfavorit = ["manga", "jeruk", "apel"]
buahfavorit.push('pisang');
console.log(buahfavorit);

buahfavorit.splice(1, 1, 'anggur');
console.log(buahfavorit);

buahfavorit.pop();
console.log(buahfavorit);

console.log(buahfavorit);

//soal 6
function pesanmakanan(...params){
 console.log(...params)
}
pesanmakanan("nasi goreng", "ayam", "telur");


//soal 1
let penduduk = {
    namaDepan : "slamet",
    namaBelakang : "santoso",
    umur : 45,
    pekerjaan : "petani",
}
 
 penduduk.kota = "yogyakarta"
 console.log(penduduk)
 
 let {namaBelakang} = penduduk
 console.log(namaBelakang)
 
 console.log(penduduk.pekerjaan)

//! soal 4
let koleksiBuku = new Set(["laskar pelangi","bumi","hujan"])

koleksiBuku.add("filosofi teras")
console.log(koleksiBuku)

koleksiBuku.add("bumi")
console.log(koleksiBuku)
//gaada cuy...

koleksiBuku.delete("hujan")

console.log(koleksiBuku)

//! Soal 3
let makanEnak = new Map([
    ['Nasi Goreng', 15000],
    ['Mie Ayam', 13000],
    ['Es Teh Manis', 5000]
])
makanEnak.set('Ayam Bakar', 20000)
console.log(makanEnak.get('Mie Ayam'))
makanEnak.delete('Es Teh Manis')
console.log(makanEnak)


//! soal 5
let pakaianPria = ["kemeja","celana jeans","jaket"];
let pakaianWanita = ["blouse","rok","cardigan"];

let pakaianToko = [...pakaianPria, ...pakaianWanita]

pakaianToko.push("kaos")
console.log(pakaianToko)