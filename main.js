// Définition de la classe
class Livre {
  constructor(titre, auteur, nbPages) {
    this.titre = titre;
    this.auteur = auteur;
    this.nbPages = nbPages;
  }
}
//Appel d'une instance de class pour créer un nouvel objet livre
let monLivre = new Livre("Le Petit Prince", "Antoine de Saint-Exupéry", 120);

let livre2 = new Livre("La Tour Sombre 1 -Le Pistolero", "Stephen King", 254);

let livre3 = new Livre(
  "La Tour Sombre 3 - Terres Perdues",
  "Stephen King",
  528
);

console.log(monLivre);
console.log(livre2);
console.log(livre3);
