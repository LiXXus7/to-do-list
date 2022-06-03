# ToDoListLukas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




## //////////// FRONTEND ESSENTIALS WITH ANGULAR ///////////////

/* NODE.JS */
- node.js stellt unter anderem den node package manager (npm) zur verfügung
- damit angular global auf dem pc verwendet werden kann, muss node.js installiert werden ( https://nodejs.org/en/ )


____________________________________________________________________________________________________________________________________

/* VISUAL STUDIO CODE */
- visual studio code ist eine der besten IDEs welche kostenlos von microsoft zu verfügung gestellt wird.
- wichtige extensions:
 -> angular essentials (version 12) by john papa ->(ist ein paket bestehend aus vielen wichtigen extensions)
 -> bracket pair colorizer 2
 -> TSLint


____________________________________________________________________________________________________________________________________

/* ANGULAR */
/* CLI */
---> globale installation der angular cli auf dem rechner (stellt unter anderem "ng-commands" zur verfügung)
`npm install -g @angular/cli`


/// NEUES PROJEKT ERSTELLEN
---> anlegen eines angular projekts -> navigiere über das Terminal (auch Eingabeaufforderung in windows genannt) zu deinem gewünschten Verzeichnis und erstelle ein neues projekt mit folgendem befehl.
`ng new my-project-name`

---> im anschluss wirst du kurz gefragt wie du das neu projekt initial konfigurieren möchtest:
- bei angular routing "yes"
- browser animations kannst du auch mit "yes" beantworten
- wähle als style am besten "SCSS" aus

---> nachdem das projekt erstellt wurde, öffne visual-studio-code und wähle den order mit dem projekt-namen aus
  -> in visual studio kannst du anschließend das terminal öffnen und mit dem Befehl...
`ng serve`
  -> ... einen virtuellen server eröffen (http://localhost:4200) und die app starten


/// COMPONENTEN, MODULE, SERVICES GENERIEREN
/// MERKE: in visual studio code rechtsklick auf gewünschten ordner und "open in integrated terminal" auswählen, um direkt im richtigen verzeichnis zu landen, wo die components generiert werden sollen
---> component
`ng generate component - oder auch: ng g c`

---> module
`ng generate module - oder auch: ng g m`

---> service:
`ng generate service - oder auch: ng g s`


____________________________________________________________________________________________________________________________________

/* GIT */
installation ( https://git-scm.com/download/win )

/// CLONE PROJECTS (dein GIT repository als projekt auf den pc klonen):
---> logge dich mit deinem accound bei github ein.
---> wähle dein repository aus
---> in der menüleiste gibt es einen reiter mit einem download icon und der information "clone".
---> kopiere die "http://....git" ->(pfad zu deinem git projekt)
---> führe in einem gewünschten ordnerverzeichnis den Befehl...
`git clone der-kopierte-pfad`
...um das projekt lokal auf deinem rechner zu haben.
---> öffne das geklonte projekt in visual-studio-code und gehe ins terminal
---> um git zu initialisieren verwende:
`git init`
---> um deinen usernamen und email global zu definieren verwende:
`git config --global user.name "dein username"`
`git config --global user.email "deine in git verwendete email"`
---> um dich mit deinem repository über git zu verknüpfen verwende:
`git remote add origin http://....git` ->(pfad zu deinem git projekt)
---> mit...
`git status`
... kannst du überprüfen ob du gerade auf dem master branch bist und ob der befehl remote add funktioniert hat


/// NODE MODULES INSTALLIEREN
---> um das geklonte projekt nun starten zu können, müssen noch framework dateien und verwendete libraries installiert werden...
`npm install`
...zieht diese dateien automatisch lokal auf deinen rechner
---> jetzt kannst du wie gewohnt über...
`ng serve`
... das projekt starten und live ausprobieren


/// GIT WORKFLOW
---> wenn du änderungen vornehmen möchtest und dein projekt erweiterst, branche mit...
`git checkout -b branch-name`
...vom master weg
---> bist du fertig verwende...
`git add .`
... um alle deine änderungen git mitzuteilen (der punkt bei git add "." ist wichtig und darf nicht vergessen werden, dieser bedeuted dass alle deine veränderung "geadded" werden sollen)
---> um die veränderungen zu bestätigen verwende:
`git commit -a -m "deine nachricht, notiz, etc. für die änderungen"`
---> um die veränderungen auf git hochzuladen verwende:
`git push origin branch-name`
---> jetzt kannst du den branch auf git in deinem repository sehen und einen pull request starten, und die veränderungen mit dem master mergen, also zusammenführen.
---> ist gemerged, navigieren mit...
`git checkout master`
...zum masterbranch
---> um den aktuellen master zu holen, verwende:
`git pull`
/// MERKE: wenn gemeinsam auf einem Projekt gearbeitet wird, verwende...
`git fetch`
...vor git pull, um veränderungen von mitwirkenden zu registrieren

ERROR FALL --> geheimtrick wenn etwas beim pushen nicht funktioniert -- folgende fehlermeldungen weisen auf das problem hin:
  --> "ERROR: Repository not found. fatal: Could not read from remote repository. Please make sure you have the correct access rights and the repository exists."
`git remote set-url origin https://....git`
... dann nochmals einen push probieren


//////////////////////////////////<<<VIEL//ERFOLG//UND//SPAß//BEIM//PROGRAMMIEREN>>>//////////////////////////////////////
