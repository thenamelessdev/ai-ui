# ai-ui
A web UI in React for Ollama ai models
# How to use
Using AI UI is easy after setting it up
### Requirements
- [Node JS](https://nodejs.org/en/download/)
- NPM: download node js with NPM
- [Git](https://git-scm.com/install/)

### Clone and install packages
Clone the repo:
```
git clone https://github.com/thenamelessdev/ai-ui.git
```
if you are having trouble installing git then download the zip file in [the repo](https://github.com/thenamelessdev/ai-ui)

Then run this to install the packages (make sure you are in the folder where the code is):
```
npm install
```

### Starting
After installing the packages you can run this to start:
```
npx vite
```
if you did everything correctly it should start the server and give you it's ip

### Usage


**Categories**:
- Ask: Talk with the AI
- Edit URL: Edit the Ollama server's url
- Models: Create and delete models

**How to use Ask:**

After you set the correct url and the status writes "working" then you can ask AI a question. Select a model in the model selector (Select a model). If there are no models visible then you have to install one: `ollama pull [model]`

A popular model is phi3 (A lightweight model by Microsoft). Install it with:
```
ollama pull phi3:latest
```
After installing and pressing the Update button you should see it show up. Select it type a message and press send. It could take a while depending on your specs, question or AI model.

The response should show up in the Response: text. If it writes error then there has beed a error with:
- Connecting to the server
- Invalid AI model
- Not enought ram

**How to use Edit URL:**

After selecting it you should see the input with the default url in it (http://localhost:11434). By default that's Ollamas local server. You should only edit it in case:
- You changes the port
- It's not running on your computer

Make sure to format it correctly:
- starts with http:// (if local)

**How to use Models:**

After clicking it there should be 2 buttons.

Create model: Creates a custom model. Requires a model to be already installed
Name: the model's name
Model: the model your model should be based off
Description: The model's description. (Example: You are a helpful ai assistant)

Delete model: Deletes a installed/custom model. WARNING: this will permanantly delete your model from the server

Model: The model you want to delete