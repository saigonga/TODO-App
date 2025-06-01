# Todo App

A modern, responsive Todo application built with React and Vite, featuring a clean design and smooth user experience. This application demonstrates best practices in React development, state management, and local storage integration.

![Todo App Screenshot 1](images/SS%20(1).png)
![Todo App Screenshot 2](images/SS%20(2).png)
![Todo App Screenshot 3](images/SS%20(3).png)
![Todo App Screenshot 4](images/SS%20(4).png)
![Todo App Screenshot 5](images/SS%20(5).png)

## Features

### Core Functionality
- ✨ Add, remove, and mark tasks as complete
- ✅ Input validation to prevent empty tasks
- 🔄 Dynamic task list updates
- 🗑️ Delete individual tasks
- 🧹 Clear all completed tasks

### Data Persistence
- 💾 Automatic saving of todos to localStorage
- 🌓 Theme preference persistence
- 🔄 State restoration on page reload

### Task Management
- 🔍 Filter tasks by status (All, Active, Completed)
- 📋 Sort tasks by completion status
- ✏️ Edit task functionality
- ✅ Mark tasks as complete/incomplete

### User Interface
- 🌓 Light/Dark theme toggle
- 📱 Fully responsive design
- 🎨 Smooth animations and transitions
- 🖥️ Desktop and mobile optimized layouts
- 🎯 Touch-friendly interface

## Technologies Used

- React 18
- Vite
- CSS3 with CSS Variables
- Local Storage API
- Modern JavaScript (ES6+)
- React Hooks (useState, useEffect)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
todo-app/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Styling and animations
│   └── main.jsx         # Application entry point
├── public/
│   └── images/          # Static assets and icons
├── index.html
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features in Detail

### Data Persistence
- Todos are automatically saved to localStorage
- Theme preference is persisted across sessions
- State is restored on page reload
- Smooth data synchronization

### Task Management
- Add new todos with input validation
- Mark todos as complete with check animation
- Delete todos with hover-reveal button
- Filter todos by completion status
- Clear all completed todos at once

### Theme System
- Smooth transition between light and dark themes
- Theme preference saved in localStorage
- Custom background images for both themes
- Consistent styling across all components

### Responsive Design
- Optimized for both desktop and mobile devices
- Adaptive layout changes for different screen sizes
- Touch-friendly interface for mobile users
- Consistent experience across devices

## Testing

To test the application:

1. **Task Management**
   - Add a new task and verify it appears in the list
   - Mark a task as complete and verify the styling changes
   - Delete a task and verify it's removed
   - Clear completed tasks and verify they're all removed

2. **Data Persistence**
   - Add some tasks
   - Refresh the page and verify tasks are still there
   - Change theme and refresh to verify theme preference

3. **Filtering**
   - Add multiple tasks
   - Mark some as complete
   - Test all filter options (All, Active, Completed)

4. **Responsive Design**
   - Test on different screen sizes
   - Verify touch interactions on mobile devices
   - Check theme toggle functionality

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from Frontend Mentor
- Icons from the project assets
- Background images from the project resources
