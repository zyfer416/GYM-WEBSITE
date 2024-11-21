from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
import torch.nn as nn
import torch.optim as optim
import random

# Define the neural network
class ChatBotModel(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(ChatBotModel, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_size, output_size)

    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        return x

# Dummy data for intents
intents = {
    "hello": ["hi", "hello", "hey there"],
    "goodbye": ["bye", "see you", "goodbye"],
    "thanks": ["thank you", "thanks", "much appreciated"],
}

# Preprocessing helper functions
def tokenize(sentence):
    return sentence.lower().split()

def bag_of_words(sentence, vocab):
    tokens = tokenize(sentence)
    bow = [1 if word in tokens else 0 for word in vocab]
    return torch.tensor(bow, dtype=torch.float)

# Build vocabulary
vocab = set(word for sentence in intents.values() for word in tokenize(" ".join(sentence)))
vocab = list(vocab)

# Train a simple model
model = ChatBotModel(len(vocab), 8, len(intents))
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.01)

# Training data
data = [(bag_of_words(random.choice(phrases), vocab), torch.tensor([i]))
        for i, (key, phrases) in enumerate(intents.items())]
for epoch in range(100):
    for x, y in data:
        optimizer.zero_grad()
        output = model(x)
        loss = criterion(output.unsqueeze(0), y)
        loss.backward()
        optimizer.step()

# Flask API
app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message", "")
    bow = bag_of_words(user_input, vocab)
    with torch.no_grad():
        output = model(bow)
        intent_idx = torch.argmax(output).item()
        intent = list(intents.keys())[intent_idx]
        response = random.choice(intents[intent])
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
