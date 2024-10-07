# Ne fonctionne pas

A la ligne 32, `this.afficher.bind(this)` permet de fournir à la méthode `affiche()` un contexte qui lui permet d'utiliser `this.#container`. Le `console.log(this)` confirme d'un objet `Document` a été transmis à la fonction. Les différentes propriétés apparaissent dans la console.

La méthode `affiche()` se déroule jusqu'à la ligne 43 où une nouvelle erreur apparait. Lorsque le délai s'est écoulé, l'appel de `this.cacher()` a lieu, mais `console.log(this)` de la ligne 47 nous indique qu'il y a à nouveau un problème de contexte. Le contexte transmis correspond à `Window` et il n'y a pas de propriété `this.#container` dedans et provoque une erreur à la ligne 48.
