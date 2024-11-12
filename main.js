let barang = [];

while (true) {
    let pilihan = prompt(
        "Selamat datang di Sistem Kasir!\n" +
        "Pilih menu:\n" +
        "1. Tambahkan barang\n" +
        "2. Hitung total\n" +
        "3. Keluar\n" 
    );

    if (pilihan === "1") {
        let nama = prompt("Masukkan nama barang:");
        let harga = parseInt(prompt("Masukkan harga barang:"), 10);

        if (nama && !isNaN(harga) && harga > 0) {
            barang.push({ nama, harga });
            alert("Barang berhasil ditambahkan!");
        } else {
            a
            lert("Input tidak valid. Pastikan memasukkan nama dan harga yang benar.");
        }
    } else if (pilihan === "2") {
        let total = 0;
        barang.forEach(item => {
            total += item.harga;
        });
        alert(`Total belanja Anda: Rp${total}`);
    } else if (pilihan === "3") {
        alert("Terima kasih telah menggunakan sistem kasir.");
        break;
    } else {
        alert("Pilihan tidak valid. Silakan pilih menu yang tersedia.");
    }
}
