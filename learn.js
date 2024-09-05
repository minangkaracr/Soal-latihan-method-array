// Penjumlahan
let a = 5;
let b = 3;
let hasilPenjumlahan = a + b;
console.log("Penjumlahan : " + hasilPenjumlahan);

// Pengurangan
let hasilPengurangan = a - b;
console.log("Pengurangan : " +hasilPengurangan);

// Perkalian
let hasilPerkalian = a * b;
console.log("Perkalian : " +hasilPerkalian);

// Pembagian
let hasilPembagian = a / b;
console.log("Pembagian : " +hasilPembagian);

// Membuat array
let angka = [1, 2, 3, 4, 5];
let buah = ['apel', 'pisang', 'mangga'];

// Mengakses elemen
console.log("Akses elemen pertama : " +angka[0]);
console.log("Akses elemen index ketiga : " +buah[2]);

// Mengubah elemen
angka[1] = 10;
console.log("Mengubah index ke dua : " +angka);

// Shift (menghapus elemen pertama dan mengembalikannya)
let first = angka.shift();
console.log("Shifting : " +first);
console.log("Hasil setelah Shift : " +angka);

// Pop (menghapus elemen terakhir dan mengembalikannya)
let last = angka.pop();
console.log("Pop : " +last);
console.log("Hasil setelah Pop : " +angka);

// Unshift (menambahkan elemen di awal array)
angka.unshift(0);
console.log("Unshift 0 : " +angka);

// Push (menambahkan elemen di akhir array)
angka.push(6);
console.log("Push : " +angka);

// Map (membuat array baru dengan memodifikasi setiap elemen)
let angkaKuadrat = angka.map(x => x * x);
console.log("hasilKuadrat : " +angkaKuadrat);

// Filter (membuat array baru dengan elemen yang memenuhi kondisi)
let angkaGenap = angka.filter(x => x % 2 === 0);
console.log("Filter : " +angkaGenap);

// Reduce (mengurangi array menjadi satu nilai)
let jumlah = angka.reduce((total, x) => total + x, 0);
console.log("Reduce : " +jumlah);

// indexOf (mencari indeks elemen pertama yang sama)
let indexApel = buah.indexOf('apel');
console.log("indexOf : " +indexApel);

// includes (mengecek apakah suatu elemen ada dalam array)
console.log("Includes : " +buah.includes('jeruk'));

let x = 10;
let y = 5;
console.log("Perbandingan -------------------------")
// Perbandingan
if (x > y) {
  console.log("x lebih besar dari y");
} else {
  console.log("x lebih kecil dari atau sama dengan y");
}

console.log("For Loop -----------------------------")
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("while loop --------------------------")
// While loop
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}