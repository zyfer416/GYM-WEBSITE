let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text',  {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Lose', 'Weightlifting', 'Running'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
 });

 
 
 const themeToggle = document.getElementById('theme-toggle');

 themeToggle.addEventListener('change', () => {
     document.body.classList.toggle('light-mode');
 });
 

// Chatbot Section Code
// UI Logic
const btn = document.querySelector(".chatbot-circle");
const chatbotBox = document.querySelector(".chatbot-box");
const chatbotCircle = document.querySelector(".chatbot-circle");
const userInputBox = document.querySelector("#user-input");

btn.addEventListener("click", () => {
  chatbotBox.classList.add('show');
    btn.classList.add('hide');
});

// Chatbot Function

const sendBtn = document.querySelector(".send-btn");
const chatArea = document.querySelector(".chatbox");

userInputBox.addEventListener("keydown", (e) => {
  if(e.key == "Enter"){
    sendMessage();
  }
});
sendBtn.addEventListener("click", () => {
  sendMessage();
});



document.querySelectorAll(".suggestion").forEach((item) => {
  item.addEventListener("click", function () {
    const message = this.getAttribute("data-message");
    document.getElementById("user-input").value = message;
    sendMessage();
  });
});

const sendMessage = () => {
  const userInput = document.getElementById("user-input").value;
  if (userInput.trim() !== "") {
    const chatbox = document.querySelector(".chatbox");

    const userMessageBox = document.createElement("div");
    userMessageBox.classList.add("message-box", "user");

    const userMessage = document.createElement("div");
    userMessage.classList.add("message-user");
    userMessage.innerHTML = `<p>${userInput}</p>`;
    userMessageBox.appendChild(userMessage);

    chatbox.appendChild(userMessageBox);

    document.getElementById("user-input").value = "";

    chatbox.scrollTop = chatbox.scrollHeight;

    setTimeout(() => {
      chatBox(userInput);
    }, 300);
  }
};

const chatBox = (msg) => {
  const chatbox = document.querySelector(".chatbox");
  let botMessage = "";

  if (msg === "I'm looking to join the gym.") {
    botMessage =
      "That's awesome! We offer a variety of membership plans. Would you like to know more about them?";
    setTimeout(() => {
      chatBox("next");
    }, 400);
  }else if (msg === "Hello" || msg === "Hi") {
    botMessage =
      "Hi there! How can I assist you today?";
  }else if (msg === "next") {
    botMessage =
      "Great! We have a few membership options to choose from. Would you like to know about our monthly, yearly, or flexible membership plans?";
  } else if (msg === "Tell me about the monthly plan.") {
    botMessage =
      "Our monthly membership gives you full access to all gym facilities and group classes. It’s perfect for people who need flexibility. The cost is $50 per month. Does that sound good?";
    setTimeout(() => {
      chatBox("next2");
    }, 400);
  } else if (msg === "next2") {
    botMessage =
      "We offer a wide range of group classes, from yoga to HIIT to cycling. Is there a specific class you’re interested in?";
  } else if (msg === "Tell me about yoga classes.") {
    botMessage =
      "Our yoga classes are available at multiple times throughout the week and are suitable for all levels. Would you like to know the schedule or book a spot in an upcoming class?";
    setTimeout(() => {
      chatBox("next3");
    }, 400);
  } else if (msg === "next3") {
    botMessage =
      "Fitness is all about goals! What are you aiming to achieve at Royal Fitness? 💪";
  } else if (msg === "I'm trying to lose weight.") {
    botMessage =
      "Great goal! We recommend combining cardio and strength training for weight loss. Would you like a personalized workout plan, or are you interested in a fitness class that focuses on weight loss?";
    setTimeout(() => {
      chatBox("next4");
    }, 400);
  } else if (msg === "I need help with my membership.") {
    botMessage =
      "I can help with that! Can you tell me a bit more about the issue you're facing, or would you like me to connect you with a customer support agent?";
    setTimeout(() => {
      chatBox("next5");
    }, 400);
  } else if (msg === "next5") {
    botMessage =
      "Have a question or need help with anything? Feel free to ask, or I can connect you with our support team.";
  } else if (msg === "I need help with my membership.") {
    botMessage =
      "I can help with that! Can you tell me a bit more about the issue you're facing, or would you like me to connect you with a customer support agent?";
  } 
  else {
    botMessage = "Sorry, I am unable to answer";
  }

  const botMessageBox = document.createElement("div");
  botMessageBox.classList.add("message-box", "bot");

  const botMessageDiv = document.createElement("div");
  botMessageDiv.classList.add("message-bot");
  botMessageDiv.innerHTML = `<p>${botMessage}</p>`;

  botMessageBox.appendChild(botMessageDiv);
  chatbox.appendChild(botMessageBox);

  // Scroll to bottom
  chatbox.scrollTop = chatbox.scrollHeight;
};

// Close Btn

document.querySelector(".close").addEventListener("click", () => {
  chatbotBox.classList.remove('show');
    btn.classList.remove('hide');
});
