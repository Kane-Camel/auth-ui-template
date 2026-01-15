PROJECT NAME: Modern Auth UI (Sign-In & Register)

DESCRIPTION:
This project contains a modern authentication user interface with a theme switcher,
animated background, floating labels, responsive layout and no external dependencies.

Included Pages:
- Sign In Page
- Register Page

FEATURES:
- Dark/Light theme toggle
- Smooth theme transitions
- Glassmorphism cards
- Animated bubble background
- Responsive layout (mobile/tablet/desktop)
- Floating input labels
- LocalStorage theme persistence
- No frameworks required

FILES INCLUDED:

Root Directory:
    ├── sign-in.html
    ├── sign-in.css
    ├── sign-in.js
    ├── register.html
    ├── register.css
    ├── register.js
    └── README.txt

USAGE INSTRUCTIONS:
1. Open "sign-in.html" or "register.html" directly in any modern web browser.
2. No server is required. No installation needed.
3. Use the theme switch at the top-right corner to toggle between Light/Dark modes.
4. Theme selection will be stored in browser localStorage automatically.

TECHNICAL NOTES:
- Works with: Chrome, Edge, Firefox, Safari
- No backend or external libraries required
- JavaScript is required for:
  * Bubble background animation
  * Theme switching logic
  * Form validation alerts

LOCALSTORAGE KEYS USED:
- "theme" → stores either "light" or "dark"

KNOWN LIMITATIONS:
- Form submission is local only (no backend communication)
- Password validation is minimal (matching check only)

CUSTOMIZATION:
Developers can modify:
- Theme colors inside CSS under :root and .light selectors
- Bubble count and animation settings within JS
- Button styles in CSS (primary color and hover effects)
- Page titles in HTML (<title> tags)
- Form validation in respective JS files

RECOMMENDED IMPROVEMENTS (OPTIONAL):
- Add SweetAlert2 for better dialog UI
- Add backend API hook (Node / PHP / Firebase / Supabase)
- Add login state management (LocalStorage/JWT)
- Create dashboard page after authentication

LICENSE:
This project is free to use for personal or commercial development.

CONTACT:
For any improvements or modifications, refer to the developer notes inside JS files.
