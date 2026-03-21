# 🚀 Day 17/100 – Payoo Payment App (Frontend)

A simple **Payment App UI (Payoo)** built using **HTML, Tailwind CSS, DaisyUI, and JavaScript**.

This project focuses on combining **UI + Logic** to simulate real-world features like login, cashout, add money, and transaction history.

---

## 📌 Features

- 🔐 Login system (Mobile number + PIN validation)
- 💰 Add Money functionality
- 💸 Cashout system with balance update
- 📊 Dynamic Transaction History
- 🎨 UI built using Tailwind CSS + DaisyUI
- 📱 Fully responsive design
- 🔄 Show/Hide sections dynamically

---

## 🛠️ Tech Stack

- HTML5  
- CSS3  
- Tailwind CSS  
- DaisyUI  
- JavaScript (DOM Manipulation)

---

## 🧠 Key Concepts Practiced

- Event Handling (`addEventListener`)
- DOM Manipulation (`createElement`, `appendChild`)
- Form Handling (`.value`)
- Conditional Logic
- Reusable Functions
- Template Literals
- Page Navigation (`window.location.assign`, `replace`)
- Dynamic UI Updates

---

## 🧩 Example Code

```javascript
const div = document.createElement('div');
div.innerHTML = `
  <p>Add Money: ${amount}</p>
  <p>${new Date()}</p>
`;
historyContainer.appendChild(div);
