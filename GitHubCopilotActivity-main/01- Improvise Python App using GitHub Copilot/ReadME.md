# FastAPI Application for Checksum Generation

This FastAPI application provides endpoints to generate a checksum for a given text input, and also includes a customized welcome message. It demonstrates how to build a simple FastAPI application with a POST endpoint for checksum generation and a GET endpoint for a personalized welcome message.

## Features

- **GET /welcome**: Returns a welcome message with a customized participant name.
- **POST /generate**: Accepts a JSON body with a `text` field and returns the checksum of the provided text.

## Prerequisites

Before running this application, ensure you have the following:

- **Python 3.7+** installed.
- **pip** (Python's package installer).

## Installation

### 1. Clone this repository (if applicable) or create a new directory for your project.

### 2. Install the necessary dependencies:
In your terminal, run the following command to install the required libraries:
```bash
pip install fastapi uvicorn pytest
