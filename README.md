# Tablo — guide de lancement

## 1. Lancer le site en local
1. Installe Node.js (version 18 ou plus) si ce n'est pas déjà fait : https://nodejs.org
2. Dézippe le dossier `tablo`, ouvre un terminal dedans.
3. Installe les dépendances :
   ```
   npm install
   ```
4. Lance le site en mode développement :
   ```
   npm run dev
   ```
5. Ouvre http://localhost:3000 dans ton navigateur.

## 2. Mettre le site en ligne gratuitement (Vercel)
1. Crée un compte gratuit sur https://vercel.com (tu peux te connecter avec GitHub).
2. Mets le dossier `tablo` sur un dépôt GitHub (crée un dépôt vide, puis `git init`, `git add .`, `git commit -m "site tablo"`, `git push`).
3. Sur Vercel, clique "Add New Project", choisis ce dépôt, laisse les réglages par défaut (Vercel détecte Next.js automatiquement) et clique "Deploy".
4. En quelques minutes, ton site est en ligne sur une adresse en `.vercel.app`, gratuitement. Tu pourras ensuite y relier un nom de domaine.

## 3. Ce qui est réel et ce qui est une démo pour l'instant
- **Réel** : toute la navigation, le design, le parcours de réservation et de commande à emporter, le planning restaurateur — tout fonctionne dans le navigateur.
- **Démo (à connecter)** :
  - Les restaurants et les réservations sont des données d'exemple dans `lib/data.ts`. Il faudra une vraie base de données pour que chaque restaurant gère ses propres données.
  - Les "confirmations" ne partent pas de vrais e-mails.
  - Les formules d'abonnement ne débitent pas encore de carte bancaire.

## 4. Prochaine étape technique conseillée
Pour rendre tout ça réel sans complexité excessive :
- **Base de données + comptes restaurateurs** : Supabase (gratuit pour démarrer) — stocke les restaurants, menus, créneaux, réservations et commandes.
- **E-mails de confirmation** : Resend (gratuit pour démarrer) — un e-mail à chaque réservation ou commande.
- **Abonnement mensuel** : Stripe Billing — crée les 3 formules (Essentiel, Pro, Réseau) et facture chaque restaurant tous les mois automatiquement.

Dis-moi quand tu veux passer à cette étape : je peux brancher Supabase et Stripe dans ce même projet.

## 5. Structure du projet
```
tablo/
  app/
    page.tsx                     → page d'accueil
    restaurants/page.tsx         → liste des restaurants (recherche + filtres)
    restaurants/[slug]/page.tsx  → page d'un restaurant : menu, réservation, commande à emporter
    tarifs/page.tsx              → formules d'abonnement pour les restaurateurs
    dashboard/page.tsx           → espace restaurateur avec planning des réservations
  components/                    → navigation, pied de page, widget de démo
  lib/data.ts                    → données d'exemple (restaurants, menus, créneaux, réservations)
```
