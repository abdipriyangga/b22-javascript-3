// Program 1
const cekHarga = (harga) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const dataHarga = [1000,3000,4000,5000]
            let cek = dataHarga.find((item) => {
                return item === harga
            })
            if(cek)
            {
                resolve(cek)
            }else{
                reject(new Error('Maaf Harga tidak ada.'))
            }
        }, 2000)
    })
}
cekHarga(500).then((result) => {
    console.log(`Harganya cocok`)
})
.catch((error) => {
    console.log(error)
})

//Program 2
let urutNilai = new Promise((resolve, reject) => {
    setTimeout(() => {
        let kondisi = true
        if(kondisi)
        {
            resolve([20, 50, 60, 10, 30, 40, 80, 90])
        }
        else
        {
            reject(new Error("Gagal"))
        }

    }, 1000)
})

let hasil = urutNilai
hasil.then((result) => {
    const filtered = result.filter(number => number > 10).sort((a,b) => a - b)
    console.log(filtered)
})
.catch((error) => {
    console.log(error)
})