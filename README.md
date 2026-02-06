# Capucin

## Status

En cours

## Description

L'idée ici est de lier un site Wordpress à un projet react/Vite via GraphQL.
Le projet est construit pour lier un site web à un fichier .json qui sert de configuration. Ce dernier peut-être modifié par l'utilisateur pour remplacer la liaison qu'il peut faire avec un wordpress existant et via graphQl.
Le but étant de créer un petit site léger mais complet, sécurisé et référencé, depuis des données modifiables : seulement 5 fichiers composent le site ! (voir tableau)
Si vous voulez modifier le style ou le référencement, vous pouvez le faire via les fichiers adéquats compilés par Vite et téléchargeable ici.
Au final, (et pour sa première version), ce n'est que la structure du site qui n'est pas customizable une fois compilé. Mais vous pourrez jouer sur le contenu, le style et son SEO.
Et même via votre dashboard Wordpress si vous gardez sa liaison.

## Installation

* Téléchargez les fichiers du dossier dist
* Modifiez le fichier data.json et éventuellement le fichier style.css pour en changer la forme.
* Mettez les 5 fichiers en ligne à la racine de votre hébergement

## Dépendances

* Si vous gardez votre Wordpress, vous devez installer le plugin GrapQL : <https://www.wpgraphql.com/> pour en établir la liaison
* Apollo
* Tailind CSS

## plan

* content => data.json
* style => style.css
* dev => main.js
* SEO => index.php
* sécurité => .htaccess

## Check

### SEO

* robots.txt ✔️
* sitemap.xml ✔️
* favicons  ✔️
* rewrite URL ⌛
* Balise OGG ❌

### Sécurité

* https ✔️
* hide folder ✔️
* protection contre les injection ✔️
* Entêtes de sécurité ✔️
* Limite taille de la requête ✔️

### Design

* Compatibilité écrans / navigateur (Tailwind) ✔️
* Fontes personnalisables ❌
* couleurs personnalisables ❌
* Images optimisées (lazy loading, dimensions appropriées) ❌
* Css customisable (*voir la logique des classes ci-dessous) ❌

## Améliorations

* Multilangue
* Ajout de thèmes ?
* Pouvoir modifier la structure ...

## Liaisons graphQL

### En cours

* Exploiter type de posts (blog/home/posts)
* Single Taxonomies ? (tags & categories)
* Exploiter options de lecture (=> pagination)

### Fait

* Menus ✔️
* Posts (Blog) ✔️
* Post (Single) ✔️
* Pages (Simple) ✔️
* Page 404 ✔️
* Settings ✔️
* Options de lecture ✔️
* Taxonomies (tags & categories) ✔️

### Je ne ferai pas

* Comments ❌
* Plugins ❌
* Révisions ❌
* Scripts & Styles ❌
* Themes ❌

## À faire

* Permuter au mieu les données avec le fichier data.json ❌
* Montrer en 5 étapes, comment archiver le wordpress situé à la racine pour installer cCapucin : un site léger et dynamique mais toujours lier au données du CMS. ❌

## Pages crées

* Blog ✔️
* Page ✔️
* 404 ✔️
* Single post ✔️

## Pages En cours

* Page : home ⌛
* Users => Timelines ❌
* contact page (template ?) => Formulaire ❌
* Medias (attachment) ❌

## Coomposants créés

* Author ✔️
* Breadcrumbs ✔️
* Error ✔️
* Footer ✔️
* Header ✔️
* Hero ✔️
* Loading ✔️
* Menus ✔️
* Badges -> Taxonomies ✔️

## Composants en cours

### Très prochainement

* Button Groups

* Stats
* Tables
* Timelines
* Tabs
* Dividers

### Formulaire

* Inputs
* Selects
* Checkboxes
* Radio Groups
* Textareas

#### ()

* Dropdowns
* Quantity Inputs
* Range Inputs
* File Uploaders
* Toggles

### Listes

* Details Lists -> Services
* Filters -> Blog
* Pagination -> Blog

### Don't

* Side Menu & Vertical Menu ❌
* Skip Links & Empty States & Toasts ?? ❌
* Steps ❌
* Progress Bars ❌
* Modal ❌

## Commandes utiles

### Vite

* npm create vite@latest capucin -- --template react
* cd capucin
* npm install @apollo/client graphql
* npm install tailwindcss @tailwindcss/vite
* npm run dev

### Wordpress

* wp core download --locale=fr_FR
* wp config create --dbname=capucin --dbuser=root --dbpass=root --locale=localhost --dbprefix=capucin_wp
* wp db create
* wp core install --url=http://localhost/capucin/wp --title=capucin --admin_user=merlin --admin_password=1234 --admin_email=merlin@arpeggio.be
* wp option update blogname "Capucin"
* wp option update blogdescription "Capucin"
* wp theme delete twentytwentyfour twentytwentythree twentytwentytwo
* wp plugin delete akismet hello
* wp plugin install block-bad-queries really-simple-ssl antispam-bee
* wp plugin install classic-editor --activate
* wp rewrite structure "%postname%"
* del /f wp-config-sample.php
* del /f license.txt
* del /f readme.html

### Github

* git remote add origin https://github.com/ProjetsMerlin/Capucin.git
* git branch -M main
* git push -u origin main
