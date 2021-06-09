const cards = document.querySelectorAll(".card");

cards.forEach(card => card.addEventListener("click", e => {
    cards.forEach(cardEl => cardEl.classList.remove("marked"))
    
    card.classList.add("marked")

    cards.forEach(cardEl => {
        if(!cardEl.classList.contains("marked")){
            cardEl.style.opacity = "0.5"
        }else{
            cardEl.style.opacity = "1"
        }
    })
}))