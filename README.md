# Redux Counter App

A modern and interactive counter application built with **React 19** and **Redux Toolkit**. This app demonstrates effective state management using Redux and provides a sleek, user-friendly interface with a dark/light theme toggle feature.

## Features

- Increment, decrement, and reset the counter value with attractive button animations.
- Toggle between dark and light themes for personalized user experience.
- Modern and minimalist design implemented with Tailwind CSS.
- Global state management using Redux Toolkit.
- Fully responsive design that adapts to all screen sizes.

## Installation

Follow these steps to set up the project locally on your machine:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/redux-counter-app.git
cd redux-counter-app
```

### 2. Install dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Run the app

Start the development server:

```bash
npm start
```

This will open the app in your default web browser at `http://localhost:3000`.

## How It Works

* **Redux Toolkit**: The app uses Redux Toolkit to manage the counter and theme states. Actions like increment, decrement, reset, and theme toggle are dispatched to update the state.
* **Tailwind CSS**: Styling is done with Tailwind CSS, providing a modern, utility-first approach to creating a responsive UI with dark/light theme support.
* **React**: Built with React 19, taking advantage of the latest features in the React ecosystem.
* **Theme Toggle**: Implements a custom theme toggle component that switches between dark and light modes, affecting the entire application's appearance.

## Technologies Used

* **React 19**: Latest version of the React library for building user interfaces.
* **Redux Toolkit**: Official, opinionated Redux package that simplifies Redux development.
* **React Redux 9**: Official React bindings for Redux.
* **Tailwind CSS 3**: Utility-first CSS framework for rapid UI development.
* **JavaScript (ES6+)**: Modern JavaScript features.
* **Gradient UI**: Custom gradient styling for buttons and UI elements.

## Project Structure

```
src/
  ├── app/
  │   └── store.js           # Redux store configuration
  ├── features/
  │   ├── counter/           # Counter feature
  │   │   ├── Counter.js     # Counter component
  │   │   └── counterSlice.js # Counter state logic
  │   └── theme/             # Theme feature
  │       ├── ThemeToggle.js  # Theme toggle component
  │       └── themeSlice.js   # Theme state logic
  ├── App.js                 # Main App component
  └── index.js               # Entry point
```

## Contributing

I welcome contributions! If you want to improve the app or fix any issues, feel free to fork the repository, create a new branch, and submit a pull request.

How to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -m 'Add feature'`).
4. Push to your forked repository (`git push origin feature-name`).
5. Create a pull request.

## Future Enhancements

- Add animation when counter values change
- Implement counter step configuration
- Add counter history tracking
- Create additional themes
- Add unit tests for components and Redux logic


### Changes to GitHub Markdown Style:

1. **Code blocks** are wrapped in triple backticks (```).
2. **Links** are styled with `[Link Text](URL)`.
3. **Bullet points** are used for lists like installation steps and features.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

If you have any questions, feel free to reach out to the project maintainer:

* Email: iansui200@gmail.com
* GitHub: iansui2

---

*Last updated: May 12, 2025*
