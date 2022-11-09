# React.js CRUD Example

implementing CRUD Operations using React and React Hooks.

## Libraries used for this project

- Axiom
- React Router
- Semantic UI React

### How to make it works

- #### Build the mock server

  MockAPI was used to send data to a fake database.

  Head to [MockAPI.io](https://mockapi.io/) and create an account.

  Make a project by clicking the [+] button.
  
  Then, add your project name, and click the [Create] button.

  Create a new resource by clicking on the [NEW RESOURCE] button.
  
  It will ask you for a name, so enter `fakeData`.

  Remove all the fields but the `id` one, Then, click [Create].
  
  At the end you will get an endpoint, something like this:

    `https://636b0383c07d8f936dac03e5.mockapi.io/fakeData`

- #### Use Axios to send API requests

  After installed the package, open these files on your IDE:
   - create.js
   - retrieve.js
   - update.js

  Inside the _default function_ of each component, you will find a variable named:

    `const endpoint = "https://636b0383c07d8f936dac03e5.mockapi.io/fakeData/"`

  Now, change the value with your personal API endpoint to make sure the requests will be sent correctly.

- #### Run the app

  Finally, enter `npm start` in the terminal and do all the tests you want!