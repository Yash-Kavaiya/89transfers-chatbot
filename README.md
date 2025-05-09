# 89transfers Chatbot

A conversational AI-powered chatbot solution for a Mallorca airport transfer service. This repository contains a web application with an integrated Dialogflow chatbot to help customers book transfers and get information about services.

![89transfers](https://img.shields.io/badge/89transfers-Airport%20Transfers-blue)
![Flask](https://img.shields.io/badge/Flask-3.0.3-green)
![Dialogflow](https://img.shields.io/badge/Dialogflow-Messenger-orange)

## 📖 Overview

The 89transfers chatbot is built using Google's Dialogflow platform and is integrated into a Flask web application. The chatbot provides a conversational interface for customers to:

- Inquire about transfer services
- Get information about pricing
- Learn about the booking process
- Ask questions about transfers in Mallorca
- Receive instant assistance 24/7

## ✨ Features

- **Conversational AI**: Powered by Google Dialogflow
- **Responsive Design**: Works on all devices
- **No-Advance-Payment System**: Promotes the company's USP of paying only upon arrival
- **24/7 Availability**: Chatbot available round the clock for customer queries
- **Easy Integration**: Simple to deploy and maintain

## 🛠️ Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Chatbot Platform**: Google Dialogflow
- **Deployment**: Compatible with any platform supporting Python (Heroku, GCP, etc.)

## 🚀 Getting Started

### Prerequisites

- Python 3.7+
- Google Cloud account with Dialogflow API enabled
- Basic knowledge of Flask and web development

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Yash-Kavaiya/89transfers-chatbot.git
   cd 89transfers-chatbot
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the application:
   ```bash
   python main.py
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## 🔧 Configuration

### Dialogflow Setup

The chatbot uses Dialogflow Messenger which is integrated directly in the HTML. You'll need to update the following parameters in the `templates/index.html` file:

```html
<df-messenger
  project-id="YOUR_PROJECT_ID"
  agent-id="YOUR_AGENT_ID"
  language-code="en"
  max-query-length="-1">
  <df-messenger-chat-bubble
    chat-title="89transfers">
  </df-messenger-chat-bubble>
</df-messenger>
```

Replace:
- `YOUR_PROJECT_ID` with your Google Cloud project ID
- `YOUR_AGENT_ID` with your Dialogflow agent ID

## 📚 Project Structure

```
89transfers-chatbot/
├── main.py                 # Flask application entry point
├── requirements.txt        # Python dependencies
├── static/                 # Static files
│   ├── css/
│   │   └── style.css       # CSS styling
│   └── js/
│       └── script.js       # JavaScript functionality
├── templates/              # HTML templates
│   └── index.html          # Main landing page with chatbot
└── README.md               # Project documentation
```

## 🌟 Customization

### Styling

You can customize the appearance of the chatbot by modifying the CSS in `templates/index.html`:

```css
df-messenger {
  z-index: 999;
  position: fixed;
  --df-messenger-font-color: #000;
  --df-messenger-font-family: Google Sans;
  --df-messenger-chat-background: #f3f6fc;
  --df-messenger-message-user-background: #d3e3fd;
  --df-messenger-message-bot-background: #fff;
  bottom: 16px;
  right: 16px;
}
```

### Website Content

The website content can be modified in the `templates/index.html` file. The site contains sections for:

- Services
- How It Works
- Benefits
- Contact Information

## 🔒 Security Considerations

- The Dialogflow agent credentials should be kept secure and not exposed in client-side code
- Consider implementing HTTPS for production deployments
- Review Google Cloud security best practices when deploying the chatbot

## 📝 License

This project is open-source and available for use and modification.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the issues page if you want to contribute.

## 📫 Contact

- Project Link: [https://github.com/Yash-Kavaiya/89transfers-chatbot](https://github.com/Yash-Kavaiya/89transfers-chatbot)

---

Created by [Yash Kavaiya](https://github.com/Yash-Kavaiya) - feel free to contact me!
