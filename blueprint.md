# Project Blueprint: SPF E-Services Chatbot

## Overview

This project is a chatbot designed to help users find and navigate to the various e-services offered on the Singapore Police Force (SPF) website. The chatbot will provide a simple conversational interface to guide users to the correct e-service based on their needs.

## Features

*   **Conversational Interface:** A simple chat window for users to interact with the chatbot.
*   **E-Service Directory:** A pre-defined list of SPF e-services and associated keywords.
*   **Guided Navigation:** The chatbot asks clarifying questions to determine the user's intent and provides a direct link to the relevant e-service.
*   **Web Components:** The chatbot is built as a reusable Web Component.
*   **Modern Design:** The application combines a high-fidelity New York Times mobile layout with the SPF chatbot integrated as a floating widget.

## Current Plan

1.  **Create Project Structure:**
    *   Create `blueprint.md` file.
    *   Update `index.html` to include the chatbot.
    *   Update `style.css` for basic styling.
    *   Update `main.js` to contain the chatbot logic and web component definition.
2.  **Implement Chatbot Component:**
    *   Define a `<chat-bot>` custom element.
    *   Create the HTML structure for the chat window using a `<template>`.
    *   Implement the chatbot's conversational logic in JavaScript.
3.  **UI Merge:**
    *   Integrate the chatbot into a modern mobile-first news layout (NYT style).
    *   Position the chatbot as a floating action button/widget for easy access.
    *   Ensure style isolation using Shadow DOM for the chatbot.
4.  **Define E-Services:**
    *   Create a data structure (e.g., an array of objects) to hold the e-services, their descriptions, and links.
5.  **Refine and Test:**
    *   Test the chatbot's functionality and conversational flow.
    *   Refine the user experience.
