var r = 13;
var r1 = 22;

var hasil = 22/7*( r* r1 );

console.log(hasil);



// tugas

//mencari luas segitiga?

//1/2 x alas x tinggi;

//oprator logika
// || &&

//benar || benar = true
//benar || salah =true
//salah || benar =true
//salah || salah =false

// benar && benar = true
//benar && salah = false
//salah && benar = false
//salah && salah = false



// || &&

// let a = 14 >= 15;

//console.log(a)

//if nilai = 32;

//if(nilai >= 70){
    //console.log("selamat kamu lulus");
//} else{
    //console.log("kamu harus belajar lagi")
//}


// let nilai =95;


// if (nilai >=90 && nilai <=100){
//     console.log(nilai +" nilai sangat memuaskan");
// } else if(nilai >=80 && nilai <=89){
//     console.log(nilai +" nilai memuaskan");
// } else if(nilai >=70 && nilai <=79){
//     console.log(nilai + "nilai cukup");
// } else{
//     console.log (nilai + "nilai kurang")
// }



 var pendapatan = 300000;
 var komisi, jasa, total;

 if (pendapatan >= 0 && pendapatan <= 200000){
    jasa =10000;
    komisi = 0,1* pendapatan;
 }
 else if (pendapatan <= 500000)
 {
    jasa = 200000;
    komisi = 0,15*pendapatan;
 }
 else
 {  jasa = 300000;
    komisi = 0,2;
 }
 {
    total = komisi + jasa;
    console.log(jasa);
    console.log(komisi);
    console.log(total)
 }