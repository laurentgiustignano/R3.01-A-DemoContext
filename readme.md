# Ça fonctionne avec des Arrows Fonctions

Les fonctions fléchées sont "**immunisées**" au changement de contexte. Leur contexte
d'exécution correspond à celui dans lequel elles ont été créé.

Ainsi, à la ligne 39 et 46, je transforme les deux méthodes en fonctions fléchées avec
la syntaxte : `afficher = () => {}`. Je peux alors utiliser cette écriture `this.afficher`
dans le callback de `addEventListener()`. Même chose pour cacher et son utilisation
dans `setTimer()`.

