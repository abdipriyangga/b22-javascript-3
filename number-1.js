const cekHariKerja = (day) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek)
            {
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja.'))
            }
        }, 3000)
    })
}
cekHariKerja('sabtu').then((result) => {
    console.log(`Hari ${result} adalah hari kerja`)
})
.catch((error) => {
    console.log(error)
})
/** 
 * Then, Catch
 * then dan catch adalah fungsi yang berguna mengembalikan promise
 * yaitu then sama dengan resolve dan catch sama dengan reject
 */

function doCekHariKerja()
{
    try{
        let resultHariKerja = cekHariKerja
        console.log(resultHariKerja)
    }
    catch(error){
        console.log(error)
    }
}
doCekHariKerja()
/**
 * Try, Catch 
 * try dan catch adalah sebuah cara error handling 
 */