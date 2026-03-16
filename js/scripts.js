window.addEventListener("scroll", function () {

    const hero = document.querySelector(".hero-section");

    const scrollY = window.scrollY;

    let opacity = 1 - scrollY / 800;

    if (opacity < 0) {
        opacity = 0;
    }

    hero.style.opacity = opacity;

});

const produkData = {

    batako_bolong: {
        nama: "Batako Bolong",
        harga: "Rp 3.000 / pcs",
        gambar: "assets/batako_bolong.jpg",
        deskripsi: "Batako bolong berkualitas tinggi, ringan namun kuat untuk dinding bangunan.",
        spesifikasi: [
            "Ukuran : 40 x 20 x 10 cm",
            "Material : Campuran semen dan pasir",
            "Kekuatan : Sangat kokoh",
            "Warna : Abu-abu"
        ]
    },

    batako_tertutup: {
        nama: "Batako Tertutup (Buntet)",
        harga: "Rp 3.500 / pcs",
        gambar: "assets/batako.jpg",
        deskripsi: "Batako padat dengan struktur lebih kuat untuk bangunan permanen.",
        spesifikasi: [
            "Ukuran : 40 x 20 x 10 cm",
            "Material : Semen berkualitas",
            "Kekuatan : Lebih padat",
            "Warna : Abu-abu"
        ]
    },

    paving_kotak: {
        nama: "Paving Kotak",
        harga: "Rp 90.000 / m²",
        gambar: "assets/paving.jpg",
        deskripsi: "Paving block berbentuk kotak cocok untuk halaman rumah dan area parkir.",
        spesifikasi: [
            "Tebal : 5 cm dan 7 cm",
            "Warna : Merah dan abu",
            "Material : Beton press",
            "Tahan beban kendaraan"
        ]
    },

    paving_segienam: {
        nama: "Paving Segienam",
        harga: "Rp 95.000 / m²",
        gambar: "assets/paving_segienam.jpg",
        deskripsi: "Paving block segienam memberikan tampilan lebih menarik untuk taman dan halaman.",
        spesifikasi: [
            "Tebal : 5 cm dan 7 cm",
            "Warna : Merah dan abu",
            "Material : Beton press",
            "Desain dekoratif"
        ]
    },

    gorong_beton: {
        nama: "Gorong-gorong Beton",
        harga: "Mulai Rp 350.000",
        gambar: "assets/gorong-gorong.jpg",
        deskripsi: "Gorong-gorong beton kuat untuk saluran air dan drainase.",
        spesifikasi: [
            "Diameter : 30 cm - 100 cm",
            "Material : Beton bertulang",
            "Tahan tekanan tanah",
            "Cocok untuk proyek jalan"
        ]
    }

};


const urlParams = new URLSearchParams(window.location.search);
const produkKey = urlParams.get("produk");

const produk = produkData[produkKey];


if (produk) {

    document.getElementById("namaProduk").innerText = produk.nama;
    document.getElementById("namaProdukTitle").innerText = produk.nama;
    document.getElementById("hargaProduk").innerText = produk.harga;
    document.getElementById("deskripsiProduk").innerText = produk.deskripsi;

    document.getElementById("gambarProduk").src = produk.gambar;

    const list = document.getElementById("spesifikasiProduk");

    produk.spesifikasi.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });

    document.getElementById("waProduk").href =
        "https://wa.me/6281329292058?text=Saya ingin memesan " + produk.nama;

}