# DermaInsight - Skin Disease Detection Web Application (MERN Stack)

## Overview
**DermaInsight** is a full-stack web application that detects skin diseases through image analysis. It utilizes the ResNet-50 pre-trained model to accurately classify skin conditions based on user-uploaded images. The platform offers user authentication, profile management, and interactive features like blog creation and detection history tracking.

## Key Features
- **Machine Learning Integration**: 
  Leverages the ResNet-50 model for high-accuracy skin disease detection.
  
- **User Authentication**:
  Secure login and registration functionality with personalized user experience.
  
- **Blog Creation**:
  Users can create and share blogs related to skin health and diseases.
  
- **Detection History**:
  Users can track and view their past skin disease detection results.

- **Profile Management**:
  Manage user profiles, including detection history and blog posts.

- **PDF Report Generation**:
  Generates downloadable PDF reports of detected diseases, which can be shared with healthcare professionals.

- **Real-Time Predictions**:
  Instantly displays diagnosis results from uploaded images via a backend API.

- **Responsive Design**:
  Mobile-friendly design that adapts across various devices.

## Tech Stack
- **Frontend**: 
  React.js, HTML, CSS, Bootstrap
  
- **Backend**: 
  Node.js, Express.js

- **Database**: 
  MongoDB

- **Machine Learning**: 
  TensorFlow.js, ResNet-50 model

- **Authentication**: 
  JWT (JSON Web Tokens) for secure user login and registration.

- **APIs**: 
  REST API development for handling real-time data processing.

- **PDF Generation**: 
  Used jsPDF library for generating downloadable PDF reports.

- **Version Control**: 
  Git, GitHub
 
## Usage

1. **User Registration and Login**: 
   - Register a new account or log in with existing credentials.

2. **Profile Management**: 
   - View and update your profile information.

3. **Skin Disease Prediction**:
   - Navigate to the **Predict** page.
   - Upload an image or capture one using your web camera.
   - Click on **Predict** to get the prediction results.

4. **Blog Creation**: 
   - Navigate to the **Create Blog** page to create and manage your blog posts.

5. **Contact Us**: 
   - Use the contact form to send messages.

6. **Prediction Records**: 
   - View and download your prediction records in PDF format.
  
## Website Overview:

1. **USER PROFILE**:
  ![Screenshot 2024-09-28 042455](https://github.com/user-attachments/assets/9be5feab-9ffe-434a-8b23-ec8351affea6)

3. **PRIDICTION DASHBOARD**:
  ![Screenshot 2024-09-28 042441](https://github.com/user-attachments/assets/58710c34-2c5b-446c-a711-c41db7b104d8)

5. **PRIDICITON HISTORY**:
  ![Screenshot 2024-09-28 042242](https://github.com/user-attachments/assets/6a711b7a-05c6-470c-8215-2a147c7d44be)
       
## Setup Instructions

### Prerequisites
- **Node.js**
- **MongoDB**
- **Python**
- **TensorFlow and Keras**
  
## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/os0004/DermaInsight_MinorProject.git
   
2. **Navigate to the project directory:**
   ```bash
   cd DermaInsight_MinorProject

3. **Install backend dependencies:**
   ```bash
   cd server
   npm install

4. **Install frontend dependencies:**
   ```bash
   cd ../client
   npm install

5. **Set up environment variables for the server:**
   ```bash
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

6. **Run the backend server:**
   ```bash
   cd ../server
   node server.js

7. **Run the frontend server:**
   ```bash
   cd ../client
   npm start

8. **Access the application at** http://localhost:3000.



