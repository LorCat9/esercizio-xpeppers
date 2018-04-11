# Esercizio XPeppers - XP02

Testo: [Esercizio](https://github.com/xpeppers/sales-taxes-problem)

### Elaborato Finale
[Portale Tax Calculator](http://esercizioxp.s3-website-eu-west-1.amazonaws.com/home)

### Il Programma

Il programma può essere visto come le base per un calcolatore di tasse più
complesso.

Questo vuol dire che il software è stato scritto tenendo conto che 
in futuro ogni categoria di prodotto avrà il proprio algoritmo che ne determinerà
la tassazione.

####Tecnologie utilizzate: 
- Angular 
- Aws (Rds, AWS Lambda, Api Gateway, S3)

### Diagrammi

Diagrammi Generali:
![alt prova](/src/assets/GitHub-img/cd.jpg)

![alt prova](/src/assets/GitHub-img/cd2.jpg)

Architettura AWS:
![alt prova](/src/assets/GitHub-img/aws.jpg)


### Come provarlo in locale

- npm install
- ng serve

### Testing

- ng test 

I test eseguiti sono quelli nel file: src/app/services/XpService/xp.service.spec.ts

## Authors

* *Lorenzo Catalli* - *Initial work* - [GitHub](https://github.com/LorCat9)
