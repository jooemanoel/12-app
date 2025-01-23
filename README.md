# 12App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Gerar configuração do karma
ng generate config karma

## Adicionar o ESLint
ng add @angular-eslint/schematics

## Adicionar o Angular Material
ng add @angular/material

## Adicionar o Bootstrap

### Instalação

npm i bootstrap@5.3.3

npm i bootstrap-icons

### Configuração

ANGULAR.JSON

"styles": [
"src/styles.css",
"node_modules/bootstrap/dist/css/bootstrap.min.css",
"node_modules/bootstrap-icons/font/bootstrap-icons.css"
],
"scripts": [
"node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
