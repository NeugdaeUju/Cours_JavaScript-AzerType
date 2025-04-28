// Mes fonctions
    //Fonction permettant d'afficher le résultat du jouer
    function afficherResultat(score, nombreTotalMots){
        // console.log("Votre score est de " + score + " sur " + nombreTotalMots)

        let scoreJoueur = document.querySelector(".zoneScore span")
        let contenuScore = `${score} / ${nombreTotalMots}`
        scoreJoueur.innerText = contenuScore
    } 

    //Fonction demandant au joueur de choisir la liste pour lancer le jeu
    function choisirMotsOuPhrases() {
        let choix = prompt("Veuillez choisir une liste : Mots ou Phrases .")
        while(choix !== "mots" && choix !== "phrases") {
            choix = prompt("Veuillez choisir une liste : Mots ou Phrases .")
        }
        return choix
    }

    //Fonction contenant la boucle principale du jeu
    function lancerBoucleDeJeu(listeProposition) {
        let score = 0
            for(let i = 0 ; i < listeProposition.length ; i++) {
                motUtilisateur = prompt("Ecrivez le mot : " + listeProposition[i])
                if(motUtilisateur === listeProposition[i]) {
                    score++
                }
            }
        return score
    }

    //Fonction permettant de lancer le jeu
    function lancerJeu () {
        let choix = choisirMotsOuPhrases()
        let score = 0
        let nombreTotalMots = 0

        if (choix === "mots") {
            score = lancerBoucleDeJeu(listeMots)
            nombreTotalMots = listeMots.length
        } else {
            score = lancerBoucleDeJeu(listePhrases)
            nombreTotalMots = listePhrases.length
        }

       afficherResultat(score , nombreTotalMots)
    }

// Afficher le score dans le document HTML sous la forme score / nombreTotalMots
// 1 récupérer l'élément HTML à modifier (.zoneScore span)
// 2 créer un élément qui affiche le score (utiliser innerchild?)
// 3 insérer l'élément dans l'élément sélectionner

