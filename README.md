This is a simple React application that demonstrates the usage of dropdown functionality using React Context API.

Features
1.Dropdown selection
2.Display selected item


Installation
1.Clone this repository to your local machine.
2.Navigate to the project directory.
3.Run npm install to install the dependencies.
4.Run npm start to start the development server.
5.Open http://localhost:3000 to view it in the browser.

Components
1.App
The main component of the application. It renders the Dropdown and Dropdisplay components wrapped within the DropContext provider.

Dropdown====>>This component renders a button labeled "Select". When hovered over, it triggers a dropdown menu.

Dropdisplay====>This component displays the selected item from the dropdown.

Context
1.DropContext====>>This context provider wraps the Dropdown and Dropdisplay components, providing them with access to shared data and functionality related to dropdown selection.
