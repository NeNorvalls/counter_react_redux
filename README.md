# React-Redux Counter App

## Overview

This is a simple React application with Redux integration, demonstrating basic counter functionality. The project structure includes a Redux store, a reducer for managing the counter state, and React components connected to the Redux store.

## Project Structure

1. **Redux Store Configuration**

   - **File:** `store.js`
   - **Description:**
     - Configures the Redux store using `@reduxjs/toolkit`.
     - Combines the `counterReducer` into the store.

2. **React Application Entry Point**

   - **File:** `index.js`
   - **Description:**
     - Entry point for the React application.
     - Renders the `App` component within a `Provider` from `react-redux`, providing access to the Redux store.

3. **React App Component**

   - **File:** `App.js`
   - **Description:**
     - Simple functional component displaying a counter.
     - Utilizes `useSelector` and `useDispatch` hooks from `react-redux`.
     - Renders the current count value and buttons to increment and decrement the count.

4. **Counter Reducer**

   - **File:** `counterReducer.js`
   - **Description:**
     - Defines the reducer function for handling state changes related to the counter.
     - Specifies how the state should be updated based on the action type ('INCREMENT' or 'DECREMENT').

5. **Action Creators**
   - **File:** `counterAction.js`
   - **Description:**
     - Contains action creator functions (`increment` and `decrement`) returning action objects with specified action types.

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the application with `npm start`.

## Usage

1. Open the application in a browser.
2. Interact with the counter by clicking the "Increment" and "Decrement" buttons.

## Dependencies

- React
- Redux
- @reduxjs/toolkit
- react-redux
