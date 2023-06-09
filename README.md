# vite-mon-prof

## Présentation

Ce projet vise à permettre le **signalement d'absences de professeurs** dans les collèges et lycées. 

Dans un premier temps, ce dispositif prend la forme d'une **extension web** qui pourra être installée sur un navigateur web et interagir avec des solutions d'emploi du temps en ligne déjà existantes. La liste des systèmes pris en compte à ce jour est la suivante:

| Système   | Support | Développement                                                                           |
|-----------|---------|-----------------------------------------------------------------------------------------|
| *Pronote* | :x:     | ![](https://img.shields.io/static/v1?label=dev&message=en-cours&color=green)            |
| *ENT*     | :x:     | ![](https://img.shields.io/static/v1?label=dev&message=non-d%C3%A9marr%C3%A9&color=red) |

![Apercu du plugin firefox](./src/plugin/firefox/doc/img/vite-mon-prof-plugin-firefox-readme.png "Apercu du plugin firefox")
> Aperçu du plugin Firefox sur le système *Pronote*.

Les données d'absences sont centralisées puis des analyses sont menées pour réaliser une fiabilisation des informations et afficher des statistiques par départements, régions et académies.

## Développement
### Extension Firefox

Pour importer l'extension dans votre navigateur Firefox, il faut suivre les instructions de la documentation Firefox ici: [Loading a temporary extension](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#loading-a-temporary-extension).

[Crédits](./credits.md)