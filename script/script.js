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

    let button = document.getElementById("btnValiderMot")
    let motUtilisateur = document.getElementById("inputEcriture")
    afficherProposition(listeMots[i])

    button.addEventListener("click" , () => {
        console.log(motUtilisateur.value)
        if (motUtilisateur.value === listeMots[i]) {
            score++
        }
        i++
        afficherResultat(score , i)

        motUtilisateur.value = ``
        if (listeMots[i] === undefined) {
            afficherProposition("Le jeu est fini !")
            button.disabled = true
        } else {
            afficherProposition(listeMots[i])
        }

    } )

    afficherResultat(score , i)
    }
