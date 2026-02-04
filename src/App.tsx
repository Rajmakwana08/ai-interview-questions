import { useState } from 'react'
import './App.css'

interface Question {
  id: number;
  question: string;
  answer: string;
  codeExample?: string;
}

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "1. Define Artificial Intelligence and explain its elements. (Reasoning, Learning, Problem Solving, Perception, Linguistic Intelligence)",
      answer: "",
      codeExample: `
⭐ Define Artificial Intelligence (AI)

Artificial Intelligence (AI) is a branch of computer science that deals with creating intelligent machines 
which can think, learn, and act like humans.

👉 In simple words:
AI makes computers smart so they can do work like humans (thinking, decision making, learning).


John McCarthy (1956) defined AI as:
  “The science and engineering of making intelligent machines.”


⭐ Elements of Artificial Intelligence

AI has five main elements:


1️⃣ Reasoning

Reasoning means thinking logically and taking correct decisions using available information.

👉 In AI:

Machines analyze facts
Draw conclusions
Predict results

Example:
Chess-playing AI decides the best next move.


2️⃣ Learning

Learning means improving performance using experience.

👉 In AI:

Machines learn from data
Improve over time
Do not need repeated programming

Example:
YouTube recommendations improve based on what you watch.


3️⃣ Problem Solving

Problem solving is the ability to find a solution from a given situation by choosing the best path.

👉 In AI:

Break problems into steps
Choose best solution
Includes decision making

Example:
Google Maps finding the shortest route.


4️⃣ Perception

Perception means understanding information from senses like seeing, hearing, etc.

👉 In AI:

Uses sensors, cameras, microphones
Understands images, sound, and data

Example:
Face recognition systems, voice assistants.


5️⃣ Linguistic Intelligence

Linguistic Intelligence is the ability to understand, speak, read, and write language.

👉 In AI:

Understand human language
Communicate naturally

Example:
Chatbots, Google Assistant, Alexa.


✨ One-line Memory Trick (Exam Tip)

R-L-P-P-L

➡️ Reasoning – Learning – Problem Solving – Perception – Linguistic Intelligence




⭐ Elements of Artificial Intelligence (ASCII Diagram)


                +----------------------+
                |  ARTIFICIAL          |
                |  INTELLIGENCE (AI)   |
                +----------+-----------+
                           |
      -------------------------------------------------
      |           |            |            |         |
+-----------+ +-----------+ +--------------+ +-----------+ +------------------+
| Reasoning | | Learning  | | Problem      | | Perception| | Linguistic       |
|           | |           | | Solving      | |           | | Intelligence     |
+-----------+ +-----------+ +--------------+ +-----------+ +------------------+


✏️ How to draw in exam (quick tip):

Draw one big box → Artificial Intelligence
Draw five small boxes below it
Connect using straight lines



🔁 Quick recall line:

AI = Reasoning + Learning + Problem Solving + Perception + Language
      
      `
    },
    {
      id: 2,
      question: "2. Explain Types of AI based on Capabilities.->  Narrow (Weak) AI, General AI, Super AI",
      answer: "Very common exam question",
      codeExample: `
⭐ Types of Artificial Intelligence (Based on Capabilities)

AI is classified based on how intelligent the machine is compared to humans.



1️⃣ Narrow AI (Weak AI) — Explained in Detail

Narrow AI is an AI system that is trained to perform only one specific task.

👉 It works only within fixed limits and cannot think or act beyond its programming.

Characteristics:

Performs single or limited task
Cannot reason like humans
No self-awareness
Needs human-defined rules or data
Why it is called Weak AI?
Because it does not have real intelligence, it only appears intelligent.

Examples:

Google Search
Siri / Alexa
Face recognition
Recommendation systems (Netflix, Amazon)

Chess-playing programs

📌 Important point:
All AI systems we use today are Narrow AI.



2️⃣ General AI — Explained in Detail

General AI is an AI system that can think, learn, understand, and perform tasks like a human.


👉 It can:

Learn any subject
Solve different types of problems
Apply knowledge in new situations


Characteristics:

Human-like intelligence
Can reason and learn independently
Flexible and adaptable
Can perform multiple tasks
Current Status:

❌ Does not exist yet
It is still in the research and development stage.

📌 Example (theoretical):
A robot that can cook, teach, drive, talk, and solve problems like a human.



3️⃣ Super AI — Explained in Detail

Super AI is an AI system that is more intelligent than humans in every way.

👉 It can:

Think faster than humans
Make better decisions
Improve itself
Have emotions and self-awareness


Characteristics:

Intelligence beyond human level
Self-conscious and creative
Can outperform humans in all fields


Current Status:

❌ Purely hypothetical (future concept)

📌 Example (fictional):
AI shown in movies like Iron Man (Jarvis) or Ex Machina.



⭐ Difference Between Narrow AI, General AI and Super AI

| Feature          | Narrow AI (Weak AI) | General AI     | Super AI                     |
| ---------------- | ------------------- | -------------- | ---------------------------- |
| Intelligence     | Limited             | Human-level    | Above human                  |
| Task Ability     | Single task         | Multiple tasks | All tasks better than humans |
| Learning Ability | Limited             | High           | Extremely high               |
| Self-awareness   | No                  | No             | Yes                          |
| Flexibility      | Very low            | High           | Very high                    |
| Exists Today?    | ✅ Yes              | ❌ No         | ❌ No                       |
| Example          | Siri, Alexa         | None           | Fictional AI                 |

      


⭐ One-line Exam Summary (Very Useful)

Narrow AI works for one specific task only
General AI works like a human brain
Super AI works better than human brain

🧠 Memory Trick

N → G → S = Weak → Human → Super
      `
    },
    {
      id: 3,
      question: "3. Explain Types of AI based on Functionality. -> Reactive Machines, Limited Memory, Theory of Mind, Self Awareness",
      answer: "High probability for long answer",
      codeExample: `
⭐ Types of Artificial Intelligence (Based on Functionality)

This classification is based on how AI systems work and respond to situations.

There are four types:

1️⃣ Reactive Machines

Reactive Machines are the most basic type of AI.

👉 They:

Do not store past experiences
React only to the current situation
Cannot learn from past data


Characteristics:

No memory
No learning
Only follows predefined rules


Example:

IBM Deep Blue (Chess computer)
Simple game-playing AI

📌 Explanation:
Reactive machines always respond in the same way for the same input.



2️⃣ Limited Memory

Limited Memory AI can store past data for a short period of time and use it to make decisions.

👉 They:

Learn from recent experiences
Do not store data permanently


Characteristics:

Short-term memory
Limited learning ability
Better decision making than reactive machines


Example:

Self-driving cars
Chatbots with conversation history
📌 Explanation:
These systems use recent information like speed, distance, or past actions.



3️⃣ Theory of Mind

Theory of Mind AI can understand human emotions, thoughts, and intentions.

👉 They:

Understand feelings
Interact socially
Predict human behavior


Characteristics:

Emotional intelligence
Social interaction ability
Understand beliefs and intentions


Current Status:

❌ Does not exist yet

📌 Example (future):
AI that understands if a person is happy, sad, or angry and reacts accordingly.



4️⃣ Self Awareness

Self-Aware AI is the most advanced form of AI.

👉 It:

Has self-consciousness
Understands its own existence
Can make independent decisions


Characteristics:

Self-awareness
Emotions and consciousness
Independent thinking


Current Status:

❌ Purely hypothetical

📌 Example:
AI shown in science fiction movies.



⭐ Difference Between Types of AI (Based on Functionality)

| Feature               | Reactive Machines | Limited Memory    | Theory of Mind | Self Awareness |
| --------------------- | ----------------- | ----------------- | -------------- | -------------- |
| Memory                | No                | Short-term        | Yes            | Yes            |
| Learning              | No                | Limited           | High           | Very High      |
| Emotion Understanding | No                | No                | Yes            | Yes            |
| Self-awareness        | No                | No                | No             | Yes            |
| Exists Today?         | ✅ Yes           | ✅ Yes            | ❌ No         | ❌ No          |
| Example               | Deep Blue         | Self-driving cars | Future AI      | Fictional AI   |




⭐ Easy Memory Trick 🧠

R → L → T → S

➡️ Reactive → Limited → Theory → Self

(From simple to advanced)

⭐ One-line Exam Summary

Reactive Machines react only to current input
Limited Memory use past data for decisions
Theory of Mind understands human emotions
Self-Aware AI understands itself
      
      `
    },
    {
      id: 4,
      question: "4. Write a note on Applications of Artificial Intelligence. (Healthcare, Finance, Education, Robotics)",
      answer: "",
      codeExample: `
⭐ Applications of Artificial Intelligence (AI)

Artificial Intelligence is used in many areas to make work faster, smarter, and more accurate.
Some important applications are explained below:

1️⃣ AI in Healthcare

AI helps doctors in diagnosis, treatment, and patient care.

Uses:

Disease detection (cancer, heart disease)
Medical image analysis (X-ray, MRI)
Virtual health assistants

Example:
AI systems that detect cancer from X-ray images.



2️⃣ AI in Finance

AI improves security, speed, and decision making in finance.

Uses:

Fraud detection
Credit scoring
Algorithmic trading
Chatbots for customer support

Example:
Banks use AI to detect fraudulent transactions.



3️⃣ AI in Education

AI makes learning personalized and smart.

Uses:

Online tutors
Automatic grading
Student performance analysis

Example:
AI chatbots help students with doubts anytime.



4️⃣ AI in Robotics

AI enables robots to think, learn, and act independently.

Uses:

Industrial robots
Medical robots
Space exploration

Example:
Robots used in factories for assembling products.



5️⃣ AI in Gaming

AI creates smart opponents in games.

Uses:

Strategic decision making
Learning player behavior

Example:
Chess and video games use AI to challenge players.



6️⃣ AI in Transportation

AI helps in safe and efficient travel.

Uses:

Self-driving cars
Traffic control systems
Route optimization

Example:
Google Maps suggests the fastest route.



7️⃣ AI in Social Media

AI manages large data and improves user experience.

Uses:

Content recommendation
Face recognition
Fake account detection

Example:
Instagram suggesting posts based on your interest.



8️⃣ AI in E-Commerce

AI improves shopping experience.

Uses:

Product recommendations
Chatbots
Price prediction

Example:
Amazon recommending products you may like.



⭐ Short Conclusion (Exam Friendly)

Artificial Intelligence is widely used in healthcare, finance, education, robotics, and many other fields to reduce human effort, increase accuracy, and improve efficiency.


⭐ 5-Mark Short Version (If needed)

AI in Healthcare – disease detection
AI in Finance – fraud detection
AI in Education – smart learning
AI in Robotics – intelligent robots
AI in E-Commerce – product recommendation
      `
    },
    {
      id: 5,
      question: "5. one line questions",
      answer: "",
      codeExample: `
🧠 ONE-LINE MEMORY POINTS (MCQ / 2 MARKS)

Father of AI → John McCarthy
AI term introduced in → 1956
Alexa → Narrow AI
Self-driving car → Limited Memory AI
AI Winter → Low funding & low interest period
      
      `
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },

  ];

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="app-container">
      <h1>AI Interview Questions</h1>
      <div className="questions-container">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <button 
              className={`question-button ${activeId === q.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(q.id)}
            >
              {q.question}
            </button>
            {activeId === q.id && (
              <div className="answer-container">
                <div className="answer">
                  <h3>Answer:</h3>
                  <p>{q.answer}</p>
                </div>
                {q.codeExample && (
                  <div className="code-example">
                    <h3>Code Example:</h3>
                    <pre>
                      <code>{q.codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
