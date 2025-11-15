// Simple rule-based chatbot for quick assignment
const messagesEl = document.getElementById('messages');
const form = document.getElementById('inputForm');
const input = document.getElementById('input');

function addMessage(text, who='bot'){
  const el = document.createElement('div');
  el.className = 'msg ' + (who === 'user' ? 'user' : 'bot');
  el.textContent = text;
  messagesEl.appendChild(el);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

// Basic rules (very small intent matching)
function botReply(msg){
  const t = msg.toLowerCase().trim();

  // greetings
  if(/^(hi|hello|hey|hlo|hey there)\b/.test(t)) return "Hello! 👋 I'm a demo chatbot. Ask me things like 'time', 'help', or say 'about'.";
  if(t.includes('time')) return `Current time: ${new Date().toLocaleString()}`;
  if(t.includes('help')) return "I can: (1) greet, (2) show time, (3) give a short about, (4) echo anything else. Try: 'About' or 'What can you do?'";
  if(t.includes('about')) return "This is a minimal static chatbot (HTML/CSS/JS) made to demonstrate a quick assignment. Host it on GitHub Pages to share publicly.";
  if(t.includes('thanks') || t.includes('thank')) return "You're welcome! Good luck with your submission 🙂";
  // small math (simple)
  const math = t.match(/^calc\s+([0-9+\-*/().\s]+)$/);
  if(math){
    try{
      // very limited eval for quick demo — safe for assignment but don't use in production
      const val = Function('"use strict";return (' + math[1] + ')')();
      return `Result: ${val}`;
    }catch(e){
      return "I couldn't calculate that. Try simple expressions like 'calc 2+3*4'.";
    }
  }
  // fallback: echo
  return "I didn't understand exactly — echo: " + msg;
}

// initial message
addMessage("Hi — I'm a demo bot. Type 'help' to see what I can do.");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if(!text) return;
  addMessage(text, 'user');
  input.value = '';
  // simulate thinking
  setTimeout(() => {
    const reply = botReply(text);
    addMessage(reply, 'bot');
  }, 250);
});
