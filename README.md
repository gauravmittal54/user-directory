# User Directory

The User Directory project is a simple React application that allows users to browse a directory of users, view their details, and see their respective timezones.

Home Page:
![Desktop View]https://raw.githubusercontent.com/gauravmittal54/user-directory/main/assets/desktop-view.png

Desktop View:
![Desktop View](https://raw.githubusercontent.com/gauravmittal54/user-directory/main/assets/desktop-view.png)

Mobile View:
![Mobile View](https://raw.githubusercontent.com/gauravmittal54/user-directory/main/assets/mobile-view.png)




## Features
- View a list of users with their names and the number of posts they have.
- Click on a user to view more details, including their profile information and posts.
- Navigate back to the user directory using the back button.
- Select a country from the dropdown to see the current time in that country's timezone.
- Start and pause a real-time clock that displays the current time based on the selected country's timezone.

## APIs Used

### User Data API

- **Endpoint**: [https://api.example.com/users](https://api.example.com/users)
- **Description**: This API provides user data, including user details and the number of posts for each user.

### Posts API

- **Endpoint**: [https://api.example.com/posts](https://api.example.com/posts)
- **Description**: This API retrieves posts data, including the title and body of each post.

### Timezone API

- **Endpoint**: [https://api.example.com/timezone](https://api.example.com/timezone)
- **Description**: The Timezone API is used to fetch timezone details for selected countries, including the current time, offset, and other relevant information.

### User Profile API

- **Endpoint**: [https://api.example.com/user/:userId](https://api.example.com/user/:userId)
- **Description**: This API fetches detailed information about a specific user, including their profile data.


## Dependencies
- React
- React Router DOM
