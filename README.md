# SpaceX Tours App

This project is a React application that consists of two pages: Home and Favorites. It aims to display SpaceX tour information with dynamic data from the SpaceX API and provides functionality for users to add tours to their favorites.

## UI Requirements

### Home Page
- Logo in the header is a link that always returns to the home page.
- Header navigation menu with a hover effect. The home link navigates to the home page (as does the logo), while other links do not have navigation actions.
- Header aside section with:
   -"Favorite" button redirects to the favorites page.
   -"Sign in" button has a pressible visual effect but does not redirect.
- Banner section with static content. Clicking "Explore tours" should scroll down.
- Main slider section with a static carousel title, carousel controls (which slide one by one), and slides content with dynamic data from the SpaceX API. Each slider has a "Buy" button with no action on press and an "Add to favorite" button, which adds the trip to the user's personal favorites list.
  
### Favorites Page
- Header and banner sections are static.
- "Favorite" button is active.
- "Clean all" button removes all flights from the favorite list.
- List of favorite flights with a "Buy" button that doesn't do anything and a "Delete" button that removes the exact flight.

## Technical Requirements
- TypeScript
- Atomic design pattern
- React Apollo for fetching data from the SpaceX API
- Recoil for state management 
- Styled Components for styling

## Getting Started
- Clone the repository: git clone [https://github.com/your-username/space-x-tours-app.git](https://github.com/ViraMesha/spacex.git)
- Navigate to the project directory: cd space-x-tours-app
- Install dependencies: npm install

## Usage
Start the development server: npm start
Open the app in your browser:  http://localhost:5173/
