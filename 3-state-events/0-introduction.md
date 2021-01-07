Making a React application interactive requires the use of state, properties and events. State is information shared throughout the entire application. Properties is information for use in an individual component. Events are actions typically performed by the user, such as clicking on a button. In this module we will explore how to implement state, properties and events in React.

## Objectives

- Add state to an application
- Add event handlers
- Use the Effect Hook to respond to state changes

## Prerequisites

- Knowledge of JavaScript, HTML and CSS
- Basic understanding of React components
- A code editor, such as [Visual Studio Code](https://code.visualstudio.com)
- [Node.js](https://nodejs.org) installed locally
- [Git](https://git-scm.com/downloads) installed locally
- The [starter project](#clone-the-project)

## Clone the project and open the code in Visual Studio Code

This module uses a starter project.

1. To obtain the starter project, execute the following steps in a command or terminal window to clone the repository and open the starter folder in Visual Studio Code:

    ````bash
    # Windows
    git clone https://github.com/GeekTrainer/learn-react
    cd learn-react\\code\\3-state-events\\starter
    code .

    # macOS or Linux
    git clone https://github.com/GeekTrainer/learn-react
    cd learn-react/code/3-state-events/starter
    code .
    ````

1. Open the integrated terminal inside Visual Studio Code by clicking **View** > **Terminal** (or tapping **Ctl-\`** or **Cmd-\`** on a Mac)
1. Execute the following code in the newly opened terminal inside Visual Studio Code to install the necessary packages and start the development server:

    ```bash
    npm install
    npm start
    ```

1. Your default browser should automatically open. If it doesn't, open your browser and navigate to [http://locahost:8080](http://locahost:8080). The starter page will be displayed.
