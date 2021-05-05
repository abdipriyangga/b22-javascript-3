const getmonth = (callback) => {
    setTimeout(() => {
        let error = true
        let month = ['Januari','Februari','Maret','April','Mei','Juni',
        'Juli','Agustus','September','Oktober','November','Desember']
        if(!error)
        {
            callback(null,month)
        }
        else
        {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}
getmonth((error, result )=> {
    if(error)
    {
        console.log(error.message)
    }
    else
    {
        result.map(result => console.log(result))
    }    
    
})
