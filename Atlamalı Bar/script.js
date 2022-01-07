const next = document.getElementById("next");
const prev = document.getElementById("prev");
const targets = document.querySelectorAll(".target");
const progress = document.getElementById("progress");

let active = 3;


next.addEventListener("click", () =>{
    active++;
    if(active > targets.length) active = targets.length;
    update();
});

prev.addEventListener("click", () => {
    active--;
    if(active < 1) active = 1;
    update();
});

function update(){
    targets.forEach((target, key) =>{
        if(key < active) target.classList.add("active");
        else target.classList.remove("active")
    });

    const actives = document.querySelectorAll(".active");

    progress.style.width = ((actives.length - 1) / (targets.length - 1)) * 100 + "%";

    if(active === 1) prev.disabled = true;
    else if( active === targets.length) next.disabled = true;
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}