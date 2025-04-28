// Mes fonctions
    //Fonction permettant d'afficher le résultat du jouer
    function afficherResultat(score, nombreTotalMots){
        // console.log("Votre score est de " + score + " sur " + nombreTotalMots)

        let scoreJoueur = document.querySelector(".zoneScore span")
        let contenuScore = `${score} / ${nombreTotalMots}`
        scoreJoueur.innerText = contenuScore
    } 

    //Fonction permettant de lancer le jeu
    function lancerJeu () {
        let score = 0
        let nombreTotalMots = 0

    let button = document.getElementById("btnValiderMot")
    let motUtilisateur = document.getElementById("inputEcriture")

    button.addEventListener("click" , () => {
        console.log(motUtilisateur.value)
    } )
    
       afficherResultat(score , nombreTotalMots)
    }
