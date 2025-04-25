// Mes fonctions
    //Fonction permettant d'afficher le résultat du jouer
    function afficherResultat(score, nombreTotalMots){
        console.log("Votre score est de " + score + " sur " + nombreTotalMots)
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

