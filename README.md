# Ela Mayo — Site vitrine (HTML, CSS, JS)

Site statique pour la marque **Ela Mayo** : pages institutionnelles, boutique, recettes, distributeurs, panier et tunnel de commande (interface uniquement, pas de backend).

## Contenu

- **HTML** : pages à la racine et dans `shop/`, `recipes/`
- **CSS** : `css/styles.css` (charte graphique, composants, responsive)
- **JS** : `js/app.js` (menu mobile, accordéon FAQ, badge panier, boutons « Ajouter au panier »)
- **Images** : `public/images/` (logo, hero, produits, recettes)

## Utilisation

1. Ouvrir **index.html** dans un navigateur (double-clic ou « Ouvrir avec »).
2. Pour un serveur local (recommandé si les images ne s’affichent pas) :
   ```bash
   # Python 3
   python -m http.server 8000
   # Puis ouvrir http://localhost:8000
   ```

## Structure des pages

| Fichier | Description |
|---------|-------------|
| `index.html` | Accueil : hero, promesse, best sellers, recettes, CTA |
| `story.html` | Notre histoire |
| `shop.html` | Boutique avec filtres (recherche, catégorie, format) |
| `shop/*.html` | Fiches produits (10 produits) |
| `recipes.html` | Liste des recettes |
| `recipes/*.html` | Détail des recettes (8 recettes) |
| `distributors.html` | Distributeurs + filtre par ville |
| `contact.html` | Formulaire + FAQ |
| `cart.html` | Panier (localStorage) |
| `checkout.html` | Tunnel de commande (3 étapes, UI seule) |

## Panier

- Le panier est stocké dans le **localStorage** (clé : `ela-mayo-cart`).
- Le badge sur l’icône panier dans la barre de menu affiche le nombre d’articles.

## Déploiement

Déployer l’ensemble des fichiers (HTML, `css/`, `js/`, `public/`) sur un hébergeur statique (Netlify, Vercel, GitHub Pages, etc.). Aucune compilation ni dépendance.
