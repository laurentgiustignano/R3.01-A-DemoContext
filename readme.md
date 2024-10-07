# Ne fonctionne pas

A la ligne 40, `console.log(this)` affiche le contexte connu par la fonction `affiche()`. Le contexte fourni à `affiche()` correspond au contexte lors de l'événement `'click'` qui a lancé la fonction : c'est à dire le bouton.

`this.#container` n'a donc pas de sens et provoque une erreur.