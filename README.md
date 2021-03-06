# ANOVManager

##### Table des matières

1. [Présentation du projet](#presentation_du_projet)

2. [Technologies utilisées](#technologies_utilisées)

3. [Prérequis](#prerequis)

	* [Python](https://www.python.org/),

	* [Django](https://www.djangoproject.com),

	* [Docker](https://www.docker.com),

	* [Docker compose](https://docs.docker.com/compose/),

	* [pip](https://pip.pypa.io/en/stable/),

	* [MySQL](https://www.mysql.com/fr/),

	* [virtualenv](https://python-guide-pt-br.readthedocs.io/fr/latest/dev/virtualenvs.html),

	* [jQuery](https://jquery.com),

	* [jQuery UI](https://jqueryui.com),
	 
	* [git](https://git-scm.com),
 
	* [Bootstrap](https://getbootstrap.com),

	* [Font Awesome](https://fontawesome.com/).

4. [Structure du projet ANOVManager](#structure_du_projet_ANOVManager)

5. [Installation de ANOVManager sur une machine quelconque](#installation_de_ANOVManager_sur_une_machine_quelconque)

6. [ANOVManager déjà installé ? Comment le développer ?](#ANOVManager_deja_installe_comment_le_developper)

7. [Tester ANOVManager grâce à Docker et Docker compose](#tester_ANOVManager_grace_a_docker_et_docker_compose)

8. [Installation de ANOVManager grâce à Docker compose](#installation_de_ANOVManager_grace_a_docker_compose)

9. [Commandes de base](#commandes_de_base)

10. [Enregistrement de migrations](#enregistrement_de_migrations)

11. [Problémes rencontrés](#problemes_rencontres)

	* [Déploiement des migrations](#probleme_deploiement_des_migrations),

12. [Génération de la documentation](#generation_de_la_documentation)

<a name="presentation_du_projet"></a>
## Présentation du projet

Ce projet consiste à développer un systéme de gestion des clients, des abonnements, de contrôle des espaces et des machines pour le futur atelier numérique Orles Valley.
D'autres fonctionnalités peuvent être ajoutées à ce système logiciel à condition de faire le tour des spécificités techniques et de l'architecture de ce dernier.

<a name="prerequis"></a>
## Prérequis

Pour faire fonctionner ANOVManager sur une machine quelconque (physique ou virtuelle), l'application repose sur les composants suivants:

<a name="python"></a>
* Python: `Python` est un language de programmation et un écosystème logiciel compté parmi les plus utilisés au monde et les plus simples à prendre en main,

<a name="django"></a>
* Django: `Django` est un framework open source écrit en Python pour vous permettre de développer des applications web,

<a name="docker"></a>
* Docker: `Docker` est un moteur logiciel permettant la génération, le déploiement et la gestion d'applications dans des conteneurs logiciels,

<a name="docker_compose"></a>
* Docker compose: `Docker compose` est un outil logiciel permettant la génération, le déploiement et la gestion d'applications multi-containers avec Docker,

<a name="mysql"></a>
* MySQL: `MySQL` est un moteur de gestion de bases de données permettant le stockage et la gestion des données relatives au bon fonctionnement du fablab,

<a name="pip"></a>
* pip: `pip` est un utilitaire pour l'installation et la gestion de packages python,

<a name="virtualenv"></a>
* virtualenv: `virtualenv` est un utilitaire pour créer des environnements virtuels python isolés,

<a name="jquery"></a>
* jQuery: `jQuery` est une bibliothèque JavaScript permettant la mise au point d'effets dans les pages web,

<a name="jqueryui"></a>
* jQuery UI: `jQuery UI` est une extension du framework `jQuery` présenté précédemment, permettant la mise au point d'effets pour les widgets de la page web,

<a name="git"></a> 
* git: `git` est l'utilitaire de gestion de versions utilisé par le projet de développement de l'application `ANOVManager`,

<a name="bootstrap"></a>
* Bootstrap: `Bootstrap` est une collection d'outils pour la mise en place du design des pages web composant l'application `ANOVManager`,

<a name="fontawesome"></a>
* Font Awesome: `Font Awesome` est une police d'écriture et (surtout) une boîte à icônes basées sur CSS, LESS et SASS.

Pour la bonne configuration de l'environnement de déploiement, il est nécessaire d'installer `Django`, `Git`, `Docker`, `Docker compose`, `virtualenv` et `pip`.

Tout est expliqué en détail dans les parties [Installation de ANOVManager sur une machine quelconque](#installation_de_ANOVManager_sur_une_machine_quelconque) et [Installation de ANOVManager grâce à Docker compose](#installation_de_ANOVManager_grace_a_docker_compose) ci-dessous.

<a name="structure_du_projet_ANOVManager"></a>
## Structure du projet ANOVManager

Il est maintenant temps de s'intéresser de très près à la structure du projet. À sa racine, le projet se compose des éléments suivants:

* Le fichier [manage.py](https://github.com/Vicken-Ghoubiguian/ANOVManager/blob/master/manage.py) permettant l'exécution de tâches administratives pour n'importe quelle application web basée sur le framework Django,

* Le  fichier [requirements.txt](https://github.com/Vicken-Ghoubiguian/ANOVManager/blob/master/requirements.txt) contenant tous les packages Python nécessaires pour le bon fonctionnement de l'application web et permettant leur installation, tous disponibles sur le hub officiel de l'écosystème Python nommé [PyPI](https://pypi.org/).
Ces packages sont:

	* [Django](https://pypi.org/project/Django/) correspond au framework sur lequel se base la totalité de la structure de l'application web courante,

	* [mysqlclient](https://pypi.org/project/mysqlclient/) correspond au client MySQL indispensable pour une connexion de l'application web courante à la base de données,

	* [fontawesome-free](https://pypi.org/project/fontawesome-free/) permet d'utiliser Font Awesome librement et de l'intégrer dans n'importe quel projet Python,

	* [sphinx](https://pypi.org/project/Sphinx/) permet de générer simplement et proprement la documentation du projet courant.

__Précision importante__: pour plus de clartés et de précisions sur la structure générale d'un projet de développement d'une application web basée sur Django, veuillez vous référer au tutoriel sur le site officiel de Django [ici](https://docs.djangoproject.com/en/3.1/intro/tutorial01/) s'il vous plaît (l'élément '3.1' correspond au numéro de version du framework Django, veuillez donc le remplacer par votre propre numéro de version s'il vous plaît).

<a name="installation_de_ANOVManager_sur_une_machine_quelconque"></a>
## Installation de ANOVManager sur une machine quelconque

__Précision importante__: la procédure d'installation varie selon le système d'exploitation utilisé. Ici nous traiterons de l'installation d'ANOVManager que sous les environnements Linux, Windows et Mac, c'est-à-dire les environnements dominants sur le marché.

Pour faire fonctionner ANOVManager, il est d'abord important d'installer les composants suivants: `Django`, `Git`, `virtualenv` et `pip`.

Pour commencer, il faut disposer de l'utilitaire `Git` puis cloner le projet depuis le dépôt officiel [ici](https://github.com/Vicken-Ghoubiguian/ANOVManager).

Sous Linux, l'installation de `Git` ne se résume qu'à la commande suivante:

```bash

sudo apt install git # Installe l'utilitaire git sur la machine

```

Sous Windows par contre, il vous faudra télécharger un installateur [ici](https://git-scm.com/download/win) puis l'exécuter jusqu'au bout tout en passant scrupuleusement chacune des étapes pour installer l'utilitaire `Git`.

Concernant Mac,

Il est maintenant temps de cloner le projet, alors ouvrez une fenêtre de terminal (pour Linux et Mac) ou PowerShell (pour Windows) puis tapez les commandes suivantes:

```bash
git clone https://github.com/Vicken-Ghoubiguian/ANOVManager # Clone le projet ANOVManager sur la machine

cd ANOVManager # Change le répertoire courant pour celui du projet cloné ANOVManager

```
Il faut ensuite installer le serveur MySQL et son client respectif, créer la base de données `ovfablab_database` pour gérer les données de l'application, créer l'utilisateur `ovfablab_admin` sur le domaine `localhost` qui permettra à l'application d'accéder à sa base de données puis de lui donner tous les privilèges sur cette même base.

Sous Linux, tout cela est possible grâce aux commandes suivantes à exécuter dans l'ordre:

```bash

sudo apt install mysql-server # Installation du serveur MySQL

sudo apt install mysql-client # Installation du client MySQL

sudo mysql -u root # Ouverture de l'interface de commandes MySQL pour l'utilisateur `root` (le super-utilisateur)

CREATE DATABASE ovfablab_database; # Création de la base de données ovfablab_database qui sera utilisée par l'application web

CREATE USER 'ovfablab_admin'@'localhost' IDENTIFIED BY 'mot_de_passe_de_l_admin_du_fablab'; # Création de l'utilisateur ovfablab_admin qui permettra à l'application web d'utiliser la base de données fraichement créée ci-dessus

GRANT ALL PRIVILEGES ON ovfablab_database.* TO 'ovfablab_admin'@'localhost'; # Accord de tous les privilèges sur la base de données ovfablab_database pour l'utilisateur ovfablab_admin

quit; # Fermeture de l'interface de commandes MySQL
```
__Petite note__: vous pouvez très bien modifier le nom de l'administateur de la base et son mot de passe si vous le souhaitez. Pour cela, il vous faut modifier les champs `USER` et `PASSWORD` de `DATABASES` dans le fichier [settings.py](https://github.com/Vicken-Ghoubiguian/ANOVManager/blob/master/ANOVManager/settings.py), à partir de la ligne 80.

Il est temps maintenant d'installer et de configurer l'écosystème Python sur votre machine. Cela commence par l'installation de la derniére version du language Python.

Sous Linux et Mac, Python y est nativement installé et il n'y a donc rien à faire.
Ce n'est pas le cas sous Windows sur lequel vous devrez utiliser l'installateur disponible sur le site officiel de Python [ici](https://www.python.org/downloads/) pour l'installer proprement sur votre machine.

```bash

sudo apt install python3-pip # Installation de l'utilitaire pip3 (utilitaire pip pour la version 3 de python) pour installer tous les packages python nécessaires

sudo apt install python3-venv # Installation de l'utilitaire python3-venv pour créer et configurer votre environement virtuel

sudo apt install python3-dev default-libmysqlclient-dev build-essential # Installation de tous les composants nécessaires pour le bon fonctionnement de mysqlclient

python3 -m venv votre_environnement_virtuel # Création de l'environnement virtuel

source votre_environnement_virtuel/bin/activate # Activation de votre environement virtuel

pip3 install -r requirements.txt # Installation de tous les packages python contenus dans le fichier requirements.txt

python3 manage.py migrate # Création de toutes les tables de base de données nécessaires pour le bon fonctionnement de l'application web
```
> :warning: si vous avez une erreur concernant l'instruction `python3 manage.py migrate`, ne paniquez pas et référez-vous d'abord à la section de résolution [ici](https://github.com/Vicken-Ghoubiguian/ANOVManager#probleme_deploiement_des_migrations).

Maintenant que tout est en place, il est maintenant temps de démarrer l'application web. Pour cela, ouvrez de terminal (pour Linux et Mac) ou PowerShell (pour Windows) puis exécutez la commande suivante:

```bash
python manage.py runserver
```
Toutes mes félicitations: une fois cette commande exécutée, l'application fonctionne et est accessible [ici](http://127.0.0.1:8000).

<a name="ANOVManager_deja_installe_comment_le_developper"></a>
## ANOVManager déjà installé ? Comment le développer ?

Dans le cas où ANOVManager a été correctement installé et configuré selon les instructions données dans la section précédente (voir [ici](#installation_de_ANOVManager_sur_une_machine_quelconque)), il vous faudra réactiver votre environnement virtuel Python pour développer l'application web.

Pour cela, suivez les commandes suivantes dans cet ordre:

```bash

cd ANOVManager # Change le répertoire courant pour celui du projet cloné ANOVManager

source votre_environnement_virtuel/bin/activate # Activation de votre environement virtuel
```
Le prompt de votre terminal passera immédiatement de `$` à `(votre_environnement_virtuel)`.

Finalement pour activer l'application web, exécutez cette commande:

```bash
python3 manage.py runserver
```

Toutes mes félicitations, c'est maintenant à vous de jouer.

<a name="tester_ANOVManager_grace_a_docker_et_docker_compose"></a>
## Tester ANOVManager grâce à Docker et Docker compose

<a name="installation_de_ANOVManager_grace_a_docker_compose"></a>
## Installation de ANOVManager grâce à Docker compose

Comme précédemment, clonez le projet depuis le dépôt officiel puis vous rendre dans le répertoire correspondant à l'aide des commandes suivantes à exécuter dans l'ordre:

```bash

sudo apt install git # Installe l'utilitaire git sur la machine

git clone https://github.com/Vicken-Ghoubiguian/ANOVManager # Clone le projet ANOVManager sur la machine

cd ANOVManager # Change le répertoire courant pour celui du projet cloné ANOVManager

```
Le déployement de ANOVManager en production se fera grâce à `Docker` et `Docker compose`. Il est donc nécessaire de les installer d'abord avant toutes choses.
Si vous voulez faire ça rapidement, exécutez les commandes suivantes:

```bash
sudo apt install docker.io # Installe Docker sur la machine

sudo apt install docker-compose # Installe Docker compose sur la machine
```
Si vous voulez les installer proprement, rendez-vous sur [Installer Docker](https://docs.docker.com/engine/install/ubuntu/) et [Installer Docker compose](https://docs.docker.com/compose/install/).

Une fois que tout est installé, exécutez la commande `sudo docker-compose up`. Cette commande va construire et faire marcher les containers Docker de l'application web.

Une fois cette commande exécutée, l'application fonctionne et est accessible [ici](http://127.0.0.1:8000).

Toutes mes félicitations...

<a name="commandes_de_base"></a>
## Commandes de base

Voici une liste des commandes de base pour l'administration de fabmanager:

* Pour démarrer l'application web:

```bash
python3 manage.py runserver
```
* Pour démarrer l'application web en mode non sécurisé (dans le cas où le mode débug est désactivé):

```bash
python3 manage.py runserver --insecure
```
__Petite note__: pour lancer cette commande, il est nécessaire d'être dans le même répertoire que le projet.

<a name="enregistrement_de_migrations"></a>
## Enregistrement de migrations

Dans le développement d'ovfabmanager, il sera nécessaire de modifier la structure de la base de données en supprimant ou en ajoutant de nouvelles tables au modèle, les migrations sont faites pour ça. Pour enregistrer ces modifications dans le dêpot GitLab du projet, la procédure est très simple.
Dans le répertoire racine du projet, exécutez les commandes suivantes dans l'ordre:

```bash
python3 manage.py makemigrations ovfabmanager # Crée des migrations pour le modèle de l'application web

python3 manage.py migrate # Applique les modifications dans la base de données
```

Pour enregistrer vos modifications dans le dépôt GitLab du projet, comitez puis pushez le fichier nouvellement créé (situé dans le répertoire `migrations` dans le répertoire `ovfabmanager`) sur le dêpot GitLab du projet.

Et voilà le travail !

<a name="problemes_rencontres"></a>
## Problémes rencontrés

Au cours du développement d'ANOVManager, de nombreux problèmes ont été soulevés puis réglés et de nombreux bugs ont été détéctés puis résolus.
Il est très probable que vous rencontrerez des problèmes et des bugs similaires si vous décidez de déployer ANOVManager ou d'en développer votre propre version à partir d'un fork de ce projet. 
Voici donc la liste des problèmes et des bugs rencontrés décrits chacun avec détails et avec la procédure de résolution pas-à-pas:

<a name="probleme_deploiement_des_migrations"></a>
### Déploiement des migrations

<a name="generation_de_la_documentation"></a>
## Génération de la documentation