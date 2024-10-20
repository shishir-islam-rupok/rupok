window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("hedaer").className = "test";
  } else {
     {
    document.getElementById("hedaer").className = "";
  }
}
}





// Function to check if elements are in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add 'show' class to cards when they are scrolled into view
    function revealCardsOnScroll() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('show');
            }
        });
    }

    // Event listener for scrolling
    window.addEventListener('scroll', revealCardsOnScroll);

    // Trigger the function to check card visibility on load
    document.addEventListener('DOMContentLoaded', revealCardsOnScroll);
         function toggleMenu() {
                const navLinks = document.querySelector('.nav-links');
                navLinks.classList.toggle('active');
            }
        // Database of existing questions, answers, and new real-time functionalities
        const qaDatabase = [
            // Greetings
            { question: "hi", answer: "Hello! How can I help you today?" },
            { question: "hello", answer: "Hi there! How are you doing?" },
            { question: "time", answer: getTime },
            { question: "date", answer: getDate },
            { question: "weather", answer: "Go to google .com for the latest weather updates" },


            // Your previously existing questions and answers (sample below)
            { question: "What is HTML?", answer: "HTML stands for HyperText Markup Language, used to structure web pages." },
            { question: "What is CSS?", answer: "CSS stands for Cascading Style Sheets and is used for styling web pages." },
            { question: "What is JavaScript?", answer: "JavaScript is a programming language used to add interactivity to web pages." },
            // Add more existing questions and answers here...

            // More conversational greetings and phrases
            { question: "how are you", answer: "I'm just a chatbot, but thanks for asking! How can I help you?" },
            { question: "what's up", answer: "Not much, just here to answer your questions. What's up with you?" },
            { question: "howdy", answer: "Howdy! How can I assist you today?" },
            { question: "hi", answer: "Hello! How can I help you today?" },
            { question: "hello", answer: "Hi there! How are you doing?" },
            { question: "hey", answer: "Hey! What can I assist you with today?" },
            { question: "good morning", answer: "Good morning! What can I do for you?" },
            { question: "good afternoon", answer: "Good afternoon! How can I help you today?" },
            { question: "good evening", answer: "Good evening! Do you have any questions for me?" },
            { question: "how are you", answer: "I'm just a chatbot, but thanks for asking! How can I help you?" },
            { question: "what's up", answer: "Not much, just here to answer your questions. What's up with you?" },
            { question: "howdy", answer: "Howdy! How can I assist you today?" },

            // Productivity & Social
            { question: "How can I be more productive?", answer: "Set clear goals, break tasks into smaller steps, minimize distractions, and prioritize important tasks." },
            { question: "What are some ways to reduce stress?", answer: "Practice deep breathing, exercise, maintain a healthy diet, and take breaks when necessary." },
            { question: "How can I improve my time management?", answer: "Use a to-do list, set priorities, and allocate specific time slots for each task." },
            { question: "What’s the best way to stay motivated?", answer: "Set small, achievable goals and reward yourself for progress. Stay positive and visualize success." },
            { question: "How can I build good habits?", answer: "Start small, be consistent, track your progress, and hold yourself accountable." },

            // Health and Wellness
            { question: "How can I improve my sleep quality?", answer: "Establish a regular sleep routine, limit screen time before bed, and create a calm sleep environment." },
            { question: "What are the best ways to stay physically active?", answer: "Incorporate exercise into your daily routine, like walking, jogging, or strength training." },
            { question: "How much water should I drink each day?", answer: "It’s recommended to drink about 8 glasses of water per day, but individual needs may vary." },
            { question: "What’s the healthiest way to lose weight?", answer: "Focus on a balanced diet, regular exercise, and portion control rather than quick-fix diets." },
            { question: "How can I manage anxiety?", answer: "Practice mindfulness, deep breathing exercises, and seek professional help if necessary." },

            // Career and Work
            { question: "How can I improve my work-life balance?", answer: "Set boundaries, learn to say no, and allocate time for relaxation and personal interests." },
            { question: "What are some tips for acing a job interview?", answer: "Research the company, practice common questions, dress appropriately, and follow up after the interview." },
            { question: "How do I ask for a raise or promotion?", answer: "Prepare evidence of your achievements, schedule a meeting, and confidently present your case." },
            { question: "How can I make my resume stand out?", answer: "Tailor your resume to the job description, highlight key achievements, and keep it concise." },
            { question: "What’s the best way to deal with workplace stress?", answer: "Take regular breaks, communicate effectively with your team, and set realistic goals." },

            // Finance
            { question: "How do I start saving money?", answer: "Create a budget, cut unnecessary expenses, and set up automatic savings transfers." },
            { question: "How can I create a budget that works for me?", answer: "Track your income and expenses, categorize your spending, and allocate money to savings." },
            { question: "What are some good ways to invest money?", answer: "Consider diversifying your portfolio with stocks, bonds, and other long-term investment options." },
            { question: "How can I pay off my debt faster?", answer: "Focus on high-interest debt first, make extra payments when possible, and avoid new debt." },
            { question: "How can I build a good credit score?", answer: "Pay your bills on time, keep credit card balances low, and avoid applying for too much credit." },

            // Technology
            { question: "How do I keep my phone battery healthy?", answer: "Avoid overcharging, keep your phone cool, and turn off unnecessary apps running in the background." },
            { question: "How can I improve my internet speed?", answer: "Restart your router, update your hardware, and reduce the number of devices connected." },
            { question: "How do I protect my personal data online?", answer: "Use strong, unique passwords, enable two-factor authentication, and be cautious of phishing scams." },
            { question: "What are some essential apps for productivity?", answer: "Try using apps like Todoist, Trello, or Evernote to manage tasks and improve time management." },
            { question: "How do I troubleshoot slow computer performance?", answer: "Clear your cache, remove unnecessary programs, and consider upgrading your hardware." },

            // Parenting and Family
            { question: "How can I help my child do better in school?", answer: "Create a consistent study routine, be supportive, and encourage regular reading." },
            { question: "What’s the best way to discipline children?", answer: "Set clear boundaries, use positive reinforcement, and be consistent with rules." },
            { question: "How can I encourage my children to read more?", answer: "Introduce them to books that match their interests and read together regularly." },
            { question: "How do I handle sibling rivalry?", answer: "Encourage cooperation, treat each child fairly, and avoid comparisons." },
            { question: "How do I deal with picky eaters?", answer: "Offer a variety of healthy foods, avoid pressuring them to eat, and be patient." },

            // Travel and Leisure
            { question: "What are some tips for budget travel?", answer: "Book flights and accommodations in advance, look for deals, and travel during off-peak seasons." },
            { question: "How can I pack efficiently for a trip?", answer: "Make a checklist, roll your clothes to save space, and bring only what you need." },
            { question: "How do I find the best travel deals?", answer: "Use comparison websites, sign up for airline newsletters, and be flexible with your dates." },
            { question: "How can I stay healthy while traveling?", answer: "Stay hydrated, avoid street food if unsure about hygiene, and keep a basic first aid kit." },
            { question: "How do I deal with travel anxiety?", answer: "Plan your trip in detail, practice mindfulness, and stay focused on the positive experiences." }

        ];

        const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your OpenWeatherMap API key

        // Send message and simulate a response
        document.getElementById('send-btn').addEventListener('click', sendMessage);

        function sendMessage() {
            const userInput = document.getElementById('user-input').value.trim();
            if (userInput === "") return;

            addMessage("You: " + userInput, "user-message");
            document.getElementById('user-input').value = "";

            if (userInput.toLowerCase().startsWith("weather")) {
                const city = userInput.split(' ')[1];
                if (city) {
                    getWeather(city);
                } else {
                    addMessage("AI: Please provide a city name to get the weather.", "ai-message");
                }
            } else {
                const aiResponse = findAnswer(userInput);
                if (typeof aiResponse === "function") {
                    addMessage("AI: " + aiResponse(), "ai-message");
                } else {
                    addMessage("AI: " + aiResponse, "ai-message");
                }
            }
        }

        function addMessage(message, className) {
            const chatBox = document.getElementById('chat-box');
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            messageElement.classList.add(className);
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
        }

        // Find the answer based on user input
        function findAnswer(userQuestion) {
            const result = qaDatabase.find(qa => userQuestion.toLowerCase().includes(qa.question.toLowerCase()));
            return result ? result.answer : "Sorry, I don't have an answer for that.";
        }

        // Get the current time
        function getTime() {
            const now = new Date();
            return now.toLocaleTimeString();
        }

        // Get the current date
        function getDate() {
            const now = new Date();
            return now.toDateString();
        }

        // Get weather for a specific city using OpenWeatherMap API
        function getWeather(city) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
                .then(response => response.json())
                .then(data => {
                    if (data.cod === 200) {
                        const weather = `The current temperature in ${data.name} is ${data.main.temp}°C with ${data.weather[0].description}.`;
                        addMessage("AI: " + weather, "ai-message");
                    } else {
                        addMessage("AI: I couldn't find weather information for that city.", "ai-message");
                    }
                })
                .catch(() => addMessage("AI: There was an error retrieving the weather data.", "ai-message"));
        }
        const chatBox = document.getElementsByClassName('loding');
        window.addEventListener("load" ,function(chatBox){
            chatBox.style.display = 'block'
        })

    