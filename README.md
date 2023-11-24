# Portfolio 



![Capture d'écran 2023-11-15 171913](https://github.com/ThomasPtht/Portfolio/assets/128037230/86387688-e739-4664-b992-731c207794a4)

Réalisée en React, cette application intègre différents composants conçus pour être réutilisés, offrant ainsi une architecture flexible. Parmi les composants, on retrouve entre autres des cartes représentant des projets, un bouton de basculement entre les modes clair et sombre (dark mode), ainsi que des boutons sociaux permettant de partager le contenu.

Pour la gestion du thème, le composant ThemeButton utilise un hook personnalisé nommé useTheme. Ce dernier n'est pas natif à React, mais plutôt défini dans le fichier ThemeContext.js. Ce fichier crée un contexte spécifique dédié à la gestion du thème (clair/sombre) de l'application. L'utilisation de ce hook permet de récupérer l'état actuel du thème et la fonction de bascule associée.

Le recours à useState est également utilisé pour gérer dynamiquement l'apparition et la disparition du burger menu dans l'application. Cette fonction native de React permet de maintenir un état local au sein d'un composant, adaptant ainsi le rendu en fonction des interactions de l'utilisateur.

De plus, l'application tire parti de la bibliothèque React Reveal pour intégrer des effets visuels, donnant vie à certains éléments de manière élégante et attrayante. Ces effets contribuent à améliorer l'expérience utilisateur en ajoutant une dimension interactive et engageante.

Enfin, pour la gestion du formulaire, l'application utilise EmailJS, une bibliothèque facilitant l'envoi d'e-mails directement depuis l'application React. Cette intégration simplifie le processus de gestion des formulaires en utilisant des modèles prédéfinis et en offrant une solution sans nécessiter de backend supplémentaire.


voir le site : (thomas-potherat.fr)


