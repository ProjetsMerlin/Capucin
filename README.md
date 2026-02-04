# Capucin

## Status

En cours

## Description

L'idée ici est de lier un site Wordpress à un projet react/Vite via GraphQL.
Le projet est construit pour lier un site web à un fichier .json qui sert de configuration. Ce dernier peut-être modifié par l'utilisateur pour remplacer la liaison qu'il peut faire avec un wordpress existant et via graphQl.
Le but étant de créer un petit site léger mais complet, sécurisé et référencé, depuis des données modifiables : seulement 5 fichiers composent le site ! (voir tableau)
Si vous voulez modifier le style ou le référencement, vous pouvez le faire via les fichiers adéquats compiler par le framework React et téléchargeable ici.
Au final, (et pour sa première version), ce n'est que la structure du site qui n'est pas customizable une fois compilé. Mais vous pourrez jouer sur le contenu, le style et son SEO.
Et même via votre dashboard Wordpress si vous gardez sa liaison.

## installation

* téléchargez les fichiers du dossier dist
* Modifiez le fichier data.json et éventuellement le fichier style.css pour le style
* Mettez ces 5 fichiers en ligne à la racine de votre hébergement

## Dépendances

Si vous gardez votre Wordpress, vous devez installer le plugin GrapQL : <https://www.wpgraphql.com/>

## Liaisons graphQL

### En cours

* Taxonomies (tags & categories)
* exploiter options de lecture (pagination)
* Exploiter type de posts (blog/home/posts)

### Fait

* Menus ✔️
* Posts (Blog) ✔️
* Pages (Simple) ✔️
* Settings ✔️
* Options de lecture ✔️

### No DEV

* Comments :negative_squared_cross_mark ❌
* Plugins ❌
* Révisions ❌
* Scripts & Styles ❌
* Themes ❌

## to Do

* permuter au mieu les données avec le fichier data.json
* créer les autres composants
* Montrer en5 étapes, comment archiver le wordpress situé à la racine pour installer cCapucin : un site léger et dynamique mais toujours lier au données du CMS.

## composants créés

Header ✔️
Menus ✔️
Footer ✔️
Loading ✔️
Error ✔️

## En cours de développement

## Très prochainement

Page : 404, home
Medias (attachment)
Users (Timelines)
contact page (template ?) => formulaire
Button Groups
Stats
Tables
Tabs

### Formulaire

Inputs
Selects
Checkboxes
Radio Groups
Textareas

#### ()

Dropdowns
Quantity Inputs
Range Inputs
File Uploaders
Toggles

### autres *

Loaders
Dividers
Modals
Progress Bars
Empty States

### lists

Badges -> Services
Breadcrumbs -> Services
Details Lists -> Services
Filters -> Blog
Pagination -> Blog

## No dev

Side Menu ❌
Skip Links ❌
Toasts ❌
Steps ❌
Vertical Menu ❌

## Commandes utiles

### Vite

npm create vite@latest capucin -- --template react
cd capucin
npm install @apollo/client graphql
npm install tailwindcss @tailwindcss/vite
npm run dev

### Wordpress

wp core download --locale=fr_FR
wp config create --dbname=capucin --dbuser=root --dbpass=root --locale=localhost --dbprefix=capucin_wp
wp db create
wp core install --url=http://localhost/capucin/wp --title=capucin --admin_user=merlin --admin_password=1234 --admin_email=merlin@arpeggio.be
wp option update blogname "Capucin"
wp option update blogdescription "Capucin"
wp theme delete twentytwentyfour twentytwentythree twentytwentytwo
wp plugin delete akismet hello
wp plugin install block-bad-queries really-simple-ssl antispam-bee
wp plugin install classic-editor --activate
wp rewrite structure "%postname%"
del /f wp-config-sample.php
del /f license.txt
del /f readme.html

### Github

git remote add origin https://github.com/ProjetsMerlin/Capucin.git
git branch -M main
git push -u origin main