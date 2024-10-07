# Ça fonctionne !

A la ligne 43, Le contexte a été précisé pour le callback de cacher. Il fallait écrire `this.cacher.bind(this)` pour effectuer la liaison. Le `console.log(this)` de la ligne 47 confirme qu'il n'y a plus de problèmes, et le comportement est correct.
