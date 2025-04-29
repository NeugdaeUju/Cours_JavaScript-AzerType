// Mes fonctions
    //Fonction permettant d'afficher le résultat du jouer
    function afficherResultat(score, nombreTotalMots){
        // console.log("Votre score est de " + score + " sur " + nombreTotalMots)

        let scoreJoueur = document.querySelector(".zoneScore span")
        let contenuScore = `${score} / ${nombreTotalMots}`
        scoreJoueur.innerText = contenuScore
    } 

    function afficherProposition(proposition) {
        let zoneProposition = document.querySelector(".zoneProposition")
        zoneProposition.innerText = proposition
    }

    //Fonction permettant de lancer le jeu
    function lancerJeu () {
        let score = 0
        let i = 0
        let listeProposition = listeMots

    let button = document.getElementById("btnValiderMot")
    let motUtilisateur = document.getElementById("inputEcriture")
    afficherProposition(listeProposition[i])

    button.addEventListener("click" , () => {
        console.log(motUtilisateur.value)
        if (motUtilisateur.value === listeProposition[i]) {
            score++
        }
        i++
        afficherResultat(score , i)

        motUtilisateur.value = ``
        if (listeProposition[i] === undefined) {
            afficherProposition("Le jeu est fini !")
            button.disabled = true
        } else {
            afficherProposition(listeProposition[i])
        }

    } )

    let boutonChoix = document.querySelectorAll(".optionSource input")
    for (let index = 0 ; index < boutonChoix.length ; index++) {
        boutonChoix[index].addEventListener("change" , (event) => {
            console.log(event.target.value)
            if (event.target.value === "1") {
                listeProposition = listeMots
            } else {
                listeProposition = listePhrases
            }
            afficherProposition(listeProposition[i])
        })
    }

    afficherResultat(score , i)
    }




/*
    if (boutonChoix[i].checked) {
        choix = boutonChoix[i].value
} */