# 📡 Dashboard NGN – Visualisation Interactive d'une Architecture VoIP de Nouvelle Génération

**Dashboard NGN** est une application pédagogique moderne construite avec **Next.js**, **TypeScript**, **Tailwind CSS** et **D3.js**, permettant de simuler et de visualiser en temps réel le fonctionnement d'une architecture VoIP de type **NGN (Next Generation Network)**.

---

## 🎯 Objectif pédagogique

Cette application est conçue pour **former, démontrer et vulgariser** les concepts clés des réseaux VoIP de nouvelle génération dans les écoles d'ingénieurs, les universités ou les entreprises technologiques.

---

## 🧠 Qu'est-ce que l'architecture NGN ?

> **NGN (Next Generation Network)** est une architecture réseau qui vise à unifier la transmission de **voix, données et vidéos** sur un réseau **IP convergent**, remplaçant progressivement les infrastructures téléphoniques traditionnelles.

### 🔑 Concepts clés représentés :

| Composant        | Rôle dans NGN                                                                 |
|------------------|--------------------------------------------------------------------------------|
| **Client VoIP**  | Émetteur ou récepteur de l'appel (ex : softphone, IP phone)                    |
| **Call Server**  | Gère la **signalisation SIP** : établissement, gestion et terminaison des appels |
| **Media Gateway**| Transporte les flux **audio/vidéo (RTP)** et réalise l'interface vers le réseau |
| **SIP**          | Protocole de **signalisation** (établir, modifier et terminer les appels)       |
| **RTP**          | Protocole de **transport temps réel** pour les flux audio/vidéo                |

> Dans une architecture NGN, la **signalisation est séparée du média**, ce qui permet plus de flexibilité, de sécurité et de contrôle.

---

## 🚀 Fonctionnalités de l'application

- 🎛️ Interface graphique avec **D3.js** affichant :
  - Les **nœuds** : Clients, Call Server, Media Gateway
  - Les **liens** : SIP (signalisation), RTP (flux média)
- ✅ Mode **"appel réussi"** : visualise tous les liens opérationnels
- ❌ Mode **"appel échoué"** : visualise un échec entre le Call Server et la Media Gateway
- 🎞️ **Animation de paquets RTP** circulant dans la Media Gateway
- 🧾 **Timeline des messages SIP** (INVITE, RINGING, OK, ACK, etc.)
- 💻 Interface responsive et compatible desktop/tablette

---

## 🛠️ Technologies utilisées

| Stack        | Description                         |
|--------------|-------------------------------------|
| Next.js      | Framework React full-stack moderne  |
| Tailwind CSS | Design rapide et responsive         |
| D3.js        | Visualisation de graphes SVG        |
| TypeScript   | Typage strict pour plus de fiabilité |

---

## 📦 Structure du projet

```
dashboard-ngn/
├── pages/                # Pages principales (Next.js)
│   └── index.tsx
├── components/           # Composants React personnalisés
│   ├── TopologyDiagram.tsx
│   └── SIPTimeline.tsx
├── styles/               # Fichier CSS global (Tailwind)
│   └── globals.css
├── public/               # (optionnel pour icônes/images futures)
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## ▶️ Utilisation locale

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Accéder à l'application
http://localhost:3000
```

---

## ☁️ Déploiement sur Vercel

1. Crée un dépôt GitHub et pousse ton code
2. Connecte-toi sur [https://vercel.com](https://vercel.com)
3. Clique sur **"New Project"** et sélectionne ton dépôt
4. Vercel détectera automatiquement le projet **Next.js**
5. 🚀 En quelques secondes, l’application est en ligne

---

## 📚 Idées d’extensions

- Intégration de **logs SIP réels** (JSON ou PCAP)
- Vue en **temps réel** via WebSocket
- Mode **pas à pas** pour visualiser les phases de l’appel
- Génération de rapports/export PNG du diagramme

---

## ⚖️ Licence

Projet open source sous licence MIT.  
Conçu à des fins **éducatives**, **démonstratives** et **non commerciales**.

---

## ✉️ Contact

Pour toute amélioration, proposition ou retour pédagogique :  
**Emman Mlmb** – développeur, formateur en téléphonie IP  
📧 `emmanjibi@gmail.com`  
🌐 `https://github.com/EJM0101`