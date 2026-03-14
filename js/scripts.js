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

        deskripsi: "Batako ringan dan kuat untuk dinding bangunan.",

        ukuran: [
            "40 x 20 x 10 cm",
            "Material beton press",
            "Cocok untuk rumah dan pagar"
        ]

    },

    batako_tertutup: {

        nama: "Batako Tertutup (Buntet)",

        harga: "Rp 3.500 / pcs",

        gambar: "assets/batako.jpg",

        deskripsi: "Batako lebih padat untuk bangunan permanen.",

        ukuran: [
            "40 x 20 x 10 cm",
            "Lebih kokoh",
            "Tahan lama"
        ]

    },

    paving_kotak: {

        nama: "Paving Kotak",

        harga: "Rp 90.000 / m²",

        gambar: "assets/paving.jpg",

        deskripsi: "Paving untuk halaman dan jalan rumah.",

        ukuran: [
            "Tebal 5 cm",
            "Tebal 7 cm",
            "Warna merah & abu"
        ]

    },

    paving_segienam: {

        nama: "Paving Segienam",

        harga: "Rp 95.000 / m²",

        gambar: "assets/paving_segienam.jpg",

        deskripsi: "Paving desain segienam yang kuat.",

        ukuran: [
            "Tebal 6 cm",
            "Tahan beban kendaraan",
            "Cocok untuk halaman"
        ]

    },

    gorong_beton: {

        nama: "Gorong-gorong",

        harga: "Mulai Rp 350.000",

        gambar: "assets/gorong-gorong.jpg",

        deskripsi: "Gorong beton untuk drainase dan saluran air.",

        ukuran: [
            "Diameter 30 cm",
            "Diameter 50 cm",
            "Diameter 100 cm"
        ]

    }

};



const params = new URLSearchParams(window.location.search);
const produk = params.get("produk");

if (produkData[produk]) {

    const data = produkData[produk];

    document.getElementById("namaProduk").innerText = data.nama;

    document.getElementById("hargaProduk").innerText = data.harga;

    document.getElementById("gambarProduk").src = data.gambar;

    document.getElementById("deskripsiProduk").innerText = data.deskripsi;

    const ukuranList = document.getElementById("ukuranProduk");

    data.ukuran.forEach(item => {

        let li = document.createElement("li");

        li.innerText = item;

        ukuranList.appendChild(li);

    });

    document.getElementById("btnWa").href =
        "https://wa.me/6281329292058?text=Saya ingin pesan " + data.nama;

}