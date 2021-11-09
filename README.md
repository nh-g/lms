
# Learning platform with inline editable admin dashboard

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
[![sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)](https://firebase.google.com/)


## 1. About project

The goal of this project was to implement authentication, allow authorized users to create, read, update and delete the data in realtime. The data then can be fetched to display in shape of learning platform's content.

Talking about new skill learned here, I implemented an accessible inline edit component in React, which allows users to edit content without navigating to a separate edit screen. 

Check [Live demo](https://learning-platform-giang.web.app/)

To access the Admin dashboard, here are credentials:
```
- email : admin@gmail.com
- password : admin1234
```
## 2. Features
- Admin realtime CRUD operations
- Inline editable form
- Firebase authentication
- Firebase auth provider authentication
- Account creation and edit
- File upload

### Upcoming updates
- Profile page
- Video playlists
- Upgrade validations
- Avatars
- Add more authorized user roles
## 3. Setup

These are the instructions to run the project:

1. Open the terminal and navigate to the folder where this readme file is located.
2. Install dependencies:
   `npm install`
3. run the project:
   `npm start`
4. Open a browser at : `http://localhost:3000`

5. To access Admin Dashboard
   
Login to your google account and create a new firebase project [here](https://console.firebase.google.com/)

The following config can be found on your firebase project settings.
```
// SAMPLE CONFIG .env.dev, you should put the actual config details found on your project settings

FIREBASE_API_KEY=AIzaKJgkjhSdfSgkjhdkKJdkjowf
FIREBASE_AUTH_DOMAIN=yourauthdomin.firebaseapp.com
FIREBASE_DB_URL=https://yourdburl.firebaseio.com
FIREBASE_PROJECT_ID=yourproject-id
FIREBASE_STORAGE_BUCKET=yourstoragebucket.appspot.com
FIREBASE_MSG_SENDER_ID=43597918523958
FIREBASE_APP_ID=234598789798798fg3-034
```

6. To perform CRUD operations as Authorized User (Admin)
   
- Navigate to your site to /signup
- Create an account for yourself
- Go to your firestore collection `users` collection and edit the account you've just created. Change the role from `student` to `teacher`.
- Reload or signin again to acces Admin dashboard.

## 4. Dependencies

- Firebase Hosting
- Firebase Firestore DB
- Firebase Cloud Storage

