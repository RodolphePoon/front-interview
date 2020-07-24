# front-interview

## Tasks

### Mandatory

- Make a Git repo for your code
- Be careful on your commits and commit messages

---

### Step 1 Managing JSON Raw Data

Based on the data contained in the JSON file src/data.json develop a data table in the render function of App.js

|             | Nom de compte | Status du compte | IBAN du compte | Balance du compte |
|-------------|---------------|------------------|----------------|-------------------|
| logo banque | Compte A      | Actif            | FRXX           | 2000€             |
| logo banque | Compte B      | Non actif        | FRXX           | 500€              |
| logo banque | Compte C      | Non actif        | FRXX           | -250€             |


Table Cells should have dynamic backgound color based on the following conditions :

- Grey if the account is blocked
- Red if the account iban is not FR
- Orange if the account balance is negative

For the logo part, you can put any square images, make it pretty.

---

### Step 2 Pagination and Search Bar

- Add pagination to the previous containers/components, show at max 2 IBANs per page.
- Add a Seach Bar based on the account number, add any other feature you want.

---

### Step 3 Routes

Refactor your previous codes and move all of it to new components/containers
It will be accessible via `/ibans`

---

### Step 4 Form

Create a React Form which can autocomplete an Address based on a string.

Add it on `/address`

API : https://api-adresse.data.gouv.fr/search/?q=colis%C3%A9e

---

### Bonus Step (Optionnal matters a lot)

- Add some tests on your code (Jest/Mocha/Chai/Jasmine)
- Make a Dockerfile of you project.  
- Push it to your Git repo.  
- Give me ([shengdaliu](https://github.com/shengdaliu)) access to it.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
