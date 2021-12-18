const bölümler = document.querySelectorAll(".bölüm");

bölümler.forEach(bölüm =>{
    bölüm.addEventListener("click",() =>{
        aktifKaldır();
        bölüm.classList.add("aktif");
    })
    
})

function aktifKaldır(){
    bölümler.forEach(bölüm =>{
        bölüm.classList.remove("aktif");
    })
}