# Chatterbot — AI Assignment DA3

This project implements a lightweight chatbot designed to handle basic conversational interactions and respond to user queries in real time. The application focuses on clarity, modularity, and ease of deployment, making it a practical starting point for anyone looking to build or extend a chatbot system.

The bot operates through a clean message-handling pipeline: user inputs are received through the interface, processed by the backend logic, and returned as structured responses. The architecture keeps the core components isolated so each part—conversation management, API handling, and UI—can be updated independently without affecting the rest of the system.

The chatbot is built to support straightforward tasks such as greeting users, answering common questions, and demonstrating intent-based responses. It serves as a solid foundation for more advanced features like NLP integration, external API calls, or database-driven knowledge retrieval. Its minimal footprint makes it well suited for learning, prototyping, or embedding into larger applications.

Overall, this project delivers a clean and maintainable chatbot setup that can be easily customized or expanded depending on future requirements.

## How to run locally
Open `index.html` in your browser, or use a Live Server extension.

## How to host on GitHub Pages (quick)
1. Create a new public repo on GitHub.
2. Push these files to the repo (instructions below).
3. In repo **Settings → Pages**, select branch `main` and folder `/ (root)`, save.  
   The site will be at: `https://<your-username>.github.io/<repo-name>/`

## Notes
- This is intentionally minimal for a quick assignment demonstration.
- To integrate an API (OpenAI or other), add a backend to keep keys secret.
