# Projet-Paint

| Personne            | Rôle                      |github
| ------------------- | ------------------------- | ------------------------- |
| PIVERT Fabrice      | Conception de la map , Système de déplacement, Design des quêtes |[Fabrice](https://github.com/FabPiv)|
| Emmanuel Ramos      | Narration ,Système combat,Aspect graphique ,Sauvegarde           |[Emmanuel]|

---

## Comment lancer le jeu ?
Il suffit de lancer dep.html sur un live serveur 

## Histoire du jeu:

Vous êtes un jeune actif travaillant pour une entreprise depuis quelques années.
Au détour d'un baillement, vous vous réveillez soudainement dans un monde lugubre...
Vous êtes dans l'enceinte d'un batiment qui semble vous rappeler votre passé d'étudiant.
Vous allez devoir explorer ce monde, nouveau et familier à la fois, afin de vous débarrasser de vos vieux démons.
... Et eventuellement retourner à votre poste...

## Les astuces du développeur plutôt sympa :

Pour la fin du jeu, je vous recommande d'acheter le plus d'équipement possible au marchand.
Si vous choisissez la classe "Mage", les armes classiquents n'augmenteront pas vos dégâts.
Cependant, les "livre_de_mage" augmenteront vos dégâts.
Monter votre personnage niveau 10 avant le boss de fin est un très bon plus.

## sujet de base : 

Vous devez créer un jeu de type RPG retro-style au tour par tour sur console.
Voici le synopsis : « Votre nom est Bob. Vous vous réveillez au milieu d’une forêt avec un sac ne contenant qu’un seul objet : un
couteau. Vous devrez gagner de l’XP et récupérer de nouvelles armes pour devenir plus fort et battre le boss pour sortir de la forêt. »

En commençant le jeu, on doit écrire son nom.
On contrôle le jeu en tapant les commandes : « Go East », « Go North », « Go West » ou « Go South » (ou des textes plus simples).
Quand on arrive sur un nouvel endroit, on a une description du lieu. Aléatoirement, on peut soit se faire attaquer par un monstre et
passer en mode combat, soit trouver un objet.

La map ne doit pas être générée aléatoirement et le placement du boss est défini dans le code. Evidemment, pas de notion d’aléatoire
(combats ou objets) sur le lieu de départ ou celui du boss.
Une fois le boss vaincu le jeu, ou que le personnage n’a plu de vie, le jeu s’arrête en affichant le message correspondant et en revenant
au menu principal. Le joueur peut aussi quitter le jeu à tout moment et revenir au menu principal.
Le personnage a de la vie, des compétences d’attaque et de défense. A chaque combat gagné, il gagne de l’XP pour gagner un niveau
(plus le niveau est suivant est élevé, plus il y a besoin d’XP pour l’atteindre). Quand il gagne un niveau ses autres caractéristiques
augmentent (HP, Attaque et Défense).
Les monstres ont aussi un niveau, du HP, des compétences d’attaque et de défense. Plus le niveau est élevé, plus ses caractéristiques le
sont aussi. Le plus fort étant le boss.
Mode combat :
On commence par indiquer le nom et le niveau du monstre à affronter.
Puis on peut attaquer, utiliser un objet de l’inventaire ou courir pour échapper au combat (mais ne rien gagner).
L’attaque du personnage cause un nombre de dommage dépendant des compétences d’attaque du personnage et des compétences de
défense du monstre (et inversement quand le monstre attaque). Il y a aussi une chance aléatoire (à définir) que l’attaque manque ou
que l’attaque cause un coup critique (Optionnel).
Les objets dans l’inventaire sont ceux que l’on peut ramasser (Potions, Attack Boost ou Defense Boost). Une fois utilisé, il est supprimé
de l’inventaire. La potion permet de regagner de la vie, et l’Attack Boost et le Defense Boost augmentent les caractéristiques pendant la
durée du combat. On peut revenir en arrière s’il ne veut finalement pas utiliser d’objets mais attaquer.
On ne peut utiliser qu’une action à chaque tour (attaque ou objet). Puis le monstre attaque et ainsi de suite jusqu’à que l’un des deux
n’ai plus de vie.

## Les fonctionnalité

| ✅    | ⭕                 | ❌             |
| ----- | ------------------ | -------------- |
| Dispo | En cours de codage | Pas disponible |

---

| Fonctionnalité                                                                               | Python 
| -------------------------------------------------------------------------------------------- | -------------- |
| Choix de la classe et du nom                                                                 | ✅             | 
| Map avec emplacement des Boss et des Quetes symboliser par des lettres                       | ✅             | 
| Deplacement                                                                                  | ✅             | 
| Combat en tours par tours                                                                    | ✅             | 
| Creation des different Monstres                                                              | ✅             | 
| Systeme d'exp                                                                                | ✅             | 
| Systeme d'evolution de classes (mage)                                                        | ✅             | 
| Systeme  de commerce                                                                         | ✅             | 
| Creation des Items                                                                           | ------------   | 
| Déplacer la forme                                                                            | ✅             | 
| Creation des Boss                                                                            | ✅             | 
| Creation des Quetes                                                                          | ✅             | 
| Sauvergade ( tant que le terminal est ouvert )                                               | ✅             | 
| Narration                                                                                    | ✅             | 
| Interface utilisateur                                                                        | ✅             | 
| Coffres                                                                                      | ✅             | 
| Boss final avec les attaque des trois mages plus un sort secret                              | ✅             | 
