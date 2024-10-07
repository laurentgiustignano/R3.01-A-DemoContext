/**
 * Augmente #valeur toutes les secondes
 */
class Compteur {
  #valeur

  constructor() {
    this.#valeur = 0
    setInterval(this.#plusUn, 1000)
  }

  #plusUn = () => {
    this.#valeur += 1;
  }

  get valeur() {
    return this.#valeur;
  }
}

/**
 * Effectue l'interface entre le DOM et le compteur
 */
class Document {
  #container;
  #bouton;
  #compteur;

  constructor() {
    this.#container = document.querySelector('.container');
    this.#bouton = document.querySelector('button');
    this.#bouton.addEventListener('click', this.afficher.bind(this));
    this.#compteur = new Compteur();
  }

  /**
   * Récupère la valeur du compteur et l'affiche pendant 1 seconde
   */
  afficher() {
    console.log(this)
    this.#container.style.display = "block";
    this.#container.innerText = `Compteur : ${this.#compteur.valeur}`
    setTimeout(this.cacher, 2000)
  }

  cacher() {
    console.log(this)
    this.#container.style.display = "none"
  }
}

const docu = new Document();
