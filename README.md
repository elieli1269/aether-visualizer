# Aether

Visualiseur de musique fluide — barres animées et mode circulaire.

Réagit au **microphone** ou à un **fichier audio**. AGC automatique pour s’adapter à n’importe quel style (électronique, classique, voix, live).

## Fonctions

- Barres spectrales + mode circulaire
- Micro / import de fichier / démo interne
- 7 thèmes de couleurs
- Sensibilité et volume
- Lecture / pause
- Plein écran
- Commandes qui s’effacent après inactivité
- Raccourcis : `Espace`, `F`, `1`, `2`

## Application Windows (.exe)

Le workflow GitHub Actions `Build Windows EXE` produit :

- **Aether-1.0.0-win-x64.exe** — version portable, sans installation
- un installateur NSIS

Téléchargement : onglet **Actions** (artefact `Aether-Windows`) ou **Releases** une fois le build terminé (~5–8 min).

En local, sur Windows :

```bash
npm install
npm run dist
```

Les `.exe` se trouvent dans `dist/`.

## Web (aperçu local)

Ouvrir `renderer/index.html` dans un navigateur, ou :

```bash
npm start
```

(nécessite Electron).
