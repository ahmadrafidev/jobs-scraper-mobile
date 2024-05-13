# Jobs Scraper Mobile Application

The Jobs Scraper Mobile application was developed using React Native to allow users to search and view job vacancies from various leading job portal sites in Indonesia.

## Technology Used

- **Programming language:**
   - JavaScript/TypeScript
- **Framework:**
   - React Native with Expo for cross-platform development (Android and iOS)
- **FIRE:**
   - Using FastAPI which has been developed for the backend
- **State Management:**
   - Redux

## Main feature

1. **Job Scraping:**
    - Collecting job vacancy data from various job portals such as jobstreet.co.id, careers.com, kalibrr.com, and linkedin.com.
    - Data is stored in MongoDB and accessed via an API created via FastAPI.

2. **Server API:**
    - Provides an endpoint to access job vacancy data.

3. **Mobile Client:**
    - Displays job vacancy data from the API.
    - Job vacancy search and filter feature.

## Installing and Running Applications

### Prerequisite

Make sure you have Node.js, npm or yarn, and Expo CLI installed.

1. **Clone Repository:**
    ```sh
    git clone https://github.com/ahmadrafidev/jobs-scraper-mobile
    cd jobs-scraper-mobile
    ```

2. **Run the application:**
     ```sh
     npx expo start
     ```

**Note:**

1. The backend service and scraper, which is one of the features of this application, can be read in the repository: [Jobs Scraper Backend](https://github.com/ahmadrafidev/jobs-scraper-backend)
2. The web client service that handles user interaction via the website can be accessed via the repository: [Jobs Scraper Web](https://github.com/ahmadrafidev/jobs-scraper-web)