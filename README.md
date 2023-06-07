Welcome to our weather app, built using React.js!

Check out the live website here: https://michaeljaurigue.github.io/se_project_react/

Check out the back end API here: https://github.com/Michaeljaurigue/se_project_express/

This app has been designed to help you choose what to wear based on the current weather conditions. The app consists of several components that work together to provide a seamless user experience. Let's take a closer look at them:

Header: This component displays the app's logo and name, as well as the current temperature. The temperature data is passed down from the App component as props.

Main: This is the main component of the app, which contains the WeatherCard component and the clothing item cards. The WeatherCard component shows the current temperature, while the clothing item cards are filtered based on the current weather conditions. The ItemCard component is wrapped in an unordered list and uses the filter() and map() methods to display the appropriate items.

ItemCard: This component displays an image and title for an item of clothing. When the user clicks on the image, the ItemModal component opens. The handleCardClick() function, which changes the state of the app to open the modal, is passed down from the App component as props.

ItemModal: This component displays a larger image and title for an item of clothing in a modal window. The onClose prop works the same way as the ModalWithForm component.

Footer: This component displays meta information about the app, such as the copyright and production year.

Our app has been designed using Figma, which allowed us to create a visually appealing and intuitive user interface. We chose to use React.js to build this app because it is a powerful and popular JavaScript library that allows us to create dynamic, interactive user interfaces with ease.

Thank you for using our app, and we hope it helps you choose the perfect outfit for any weather condition!
