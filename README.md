# Gemini AI-Powered Search Application

[![Java Spring Boot](https://img.shields.io/badge/Backend-Spring%20Boot-6DB33F?logo=springboot)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react)](https://react.dev/)
[![Gemini API](https://img.shields.io/badge/AI-Gemini-blueviolet)](https://deepmind.google/technologies/gemini/)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

An intelligent search system powered by **Gemini AI**, built with **Java Spring Boot** on the backend and **React.js** on the frontend. Ask natural language questions and get contextual responses with sources and token usage.

---

##  Features

- Natural language search with Gemini AI
- Source citation links
- Token usage analytics
- Responsive React UI
- REST API with Spring Boot

---

## Architecture
[ React Frontend (Vite + Axios) ] | | HTTP (REST API) v [ Java Spring Boot Backend ] | | Gemini API Call v [ Gemini LLM ]


---

## 📦 Project Structure

gemini-search-app/ ├── backend/ # Spring Boot backend │ ├── src/ │ └── pom.xml ├── frontend/ # React frontend │ ├── src/ │ └── package.json └── README.md

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- Java 17+
- Maven
- Gemini API key from Google AI Studio

---

###  Backend Setup

```bash
cd backend
# Set your API key in application.properties or .env
./mvnw spring-boot:run


###  Frontend Setup
cd frontend
npm install
npm run dev


###Backend (application.properties or .env)

GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_API_URL=your_gemini_url_here
