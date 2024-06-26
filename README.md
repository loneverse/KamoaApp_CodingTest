# Kamoa App

This project is a React Native application for Kamoa, which allows users to upload a 6-month M-Pesa statement, understand their spending habits, and secure higher loan limits by sharing more information.

## Screens

1. **UploadStatementScreen**: The initial screen where users are prompted to upload a 6-month M-Pesa statement.
2. **HowToUploadScreen**: Instructions on how to obtain and upload the M-Pesa statement, with a button to select the file and a field to enter the received code.
3. **AcceptPermissionsScreen**: Request for permissions to access personal info, location, and app performance data.

## Components

- **CustomButton**: A reusable button component.

## Setup and Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/loneverse/KamoaApp_CodingTest.git
    ```

2. Navigate to the project directory:
    ```bash
    cd KamoaApp
    ```

3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the server on a new terminal:
    ```bash
     npx react-native start
    ```
5. Run the application :
    ```bash
    npx react-native run-android 
    ```

## File Structure

- `UploadStatementScreen.js`: Screen for uploading the M-Pesa statement.
- `HowToUploadScreen.js`: Screen with instructions on how to upload the statement, a file select button, and a code input field.
- `AcceptPermissionsScreen.js`: Screen to accept app permissions.
- `components/CustomButton.js`: Custom button component.
- `assets/satement.png`: Image asset for the UploadStatementScreen.
- `assets/kamoa_logo.png`: Logo image for the UploadStatementScreen.
- `assets/upload_statement.png`: Image for the UploadStatementScreen.
- `assets/permissions.png`: Image for the AcceptPermissionsScreen.

## Usage

- **UploadStatementScreen**: Guides users to upload their M-Pesa statement.
- **HowToUploadScreen**: Provides step-by-step instructions on obtaining the statement, including a file select button and a code input field.
- **AcceptPermissionsScreen**: Requests permissions necessary for the app functionality.

## Comments

Each screen is implemented to closely match the provided design, including the text formatting, icons, and buttons. The `CustomButton` component is implemented to handle button presses and navigation between screens.

## License

This project is licensed under the MIT License.

[Kamoa app walkthrough](https://github.com/loneverse/KamoaApp_CodingTest/assets/47101888/28e7a215-569c-453e-ba0e-94a294ebb16b)
