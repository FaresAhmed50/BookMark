# Bookmark Website

A simple and intuitive web application for saving, managing, and visiting your favorite websites. Built with HTML, CSS, JavaScript, and Bootstrap 5, this application provides a clean interface for users to add and manage bookmarks efficiently.

## Features

- Add website bookmarks with name and URL.
- Validate user input for name and URL fields.
- Store bookmarks locally in the browser using LocalStorage.
- Display saved bookmarks in a table with options to visit or delete them.
- Prevent duplicate entries with a validation check.
- User-friendly alerts using SweetAlert2 for error handling and notifications.
- Responsive design using Bootstrap 5.

## Technologies Used

- **HTML5** for the structure of the application.
- **CSS3** and **Bootstrap 5** for styling and responsiveness.
- **JavaScript** for application logic and functionality.
- **SweetAlert2** for modern alert popups.
- **Font Awesome** for icons.
- **LocalStorage** for persistent data storage.

## Usage
Enter the Site Name and Site URL in the respective fields.
Click the Submit button to add a new bookmark.
View all saved bookmarks in the table.
Visit a bookmark by clicking the "Visit" button.
Delete a bookmark by clicking the "Delete" button.

## Validation Rules
**Site Name**:
Must contain between 3 to 10 alphanumeric characters.

**Site URL**:
Must be a valid HTTP or HTTPS URL.

If inputs are invalid, an error message is displayed via SweetAlert2.

## File Structure

```
├── index.html              # Main HTML file
├── css/
│   ├── all.min.css         # Font Awesome styles
│   ├── bootstrap.min.css   # Bootstrap styles
│   ├── main.css            # Custom styles
├── js/
│   ├── bootstrap.bundle.min.js   # Bootstrap JS
│   ├── script.js                 # Custom JS
```


## Getting Started

### Prerequisites

Ensure you have the following installed:
- A modern web browser (Chrome, Firefox, Edge, etc.).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/bookmark-website.git
