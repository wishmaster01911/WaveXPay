# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

WaveXPayApp is a Paytm-style payment app clone built with React, Vite, and Tailwind CSS. It demonstrates a modern, responsive UI for mobile and desktop with features like wallet management, money transfer, QR scan mock, offers, and rewards.

This project is intended for UI/UX prototyping, learning, and demonstration purposes.

---------Features------------

* Login & Authentication (mock)

* Home Dashboard with:

* Services (Send, Scan, Wallet, Passbook)

* Offers Carousel

* Market Ticker

* Send Money and Add Money to Wallet

* Scan QR Mock for payments

* Wallet & Passbook views

* Rewards and Offers pages (mock)

* Responsive design for mobile, tablet, and desktop

* Smooth animations using Framer Motion

------Tech Stack--------------

* Frontend: React, Vite

* Styling: Tailwind CSS

* Animations: Framer Motion

State Management: React Context API
Getting Started
1. Clone the repository
git clone https://github.com/your-username/WaveXPayApp.git
cd WaveXPayApp

2. Install dependencies
npm install

3. Run the project
npm run dev
Open http://localhost:5173 in your browser to see the app.

Notes

* The app is a UI/UX prototype and does not include real payment functionality.

* QR Scan is mocked for demonstration purposes.

* Animations require Framer Motion (npm install framer-motion).

* Future Enhancements

* Convert to React Native / Expo for mobile deployment

* Integrate real backend APIs for payments, wallet, and offers

* Add user authentication with JWT or Firebase

* Add transaction history filtering and sorting
