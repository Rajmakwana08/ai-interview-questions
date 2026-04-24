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
      id: 11,
      question: "11. What is Heuristic Search? Explain Heuristic Function (h(n)).",
      answer: "",
      codeExample: `
⭐ What is Heuristic Search?

🔹 Meaning

Heuristic Search is a search technique in AI that uses extra knowledge (rules of thumb) to find a solution 
faster.

👉 Instead of trying all paths, it chooses the best-looking path first.

📌 In simple words:
Heuristic search = Smart search


🔹 Why Heuristic Search is needed?

Normal search is slow
Heuristic search:
  Saves time
  Reduces search space
  Finds solution faster

🔹 Example

Finding a route on Google Maps:
It does not try all roads — it selects the shortest or fastest path.




⭐ Heuristic Function (h(n))

🔹 Meaning

A Heuristic Function, written as h(n), is a function that estimates how close a state (n) is to the goal.

➡️ A heuristic function in AI is a rule that gives an estimated score of how close you are to the goal from 
a current state, helping the AI choose the best next step without checking everything.


📌 In simple words:
h(n) tells how far we are from the goal


🔹 Role of Heuristic Function

The heuristic function helps AI to:
  Decide which node to explore next
  Choose the most promising path
  Improve search efficiency

👉 Smaller value of h(n) = closer to goal



🔹 Example of h(n)

📍 Path Finding Example

  Problem: Reach destination city
  h(n) = Straight-line distance to destination

City A ---- City B ---- City C (Goal)

h(A) = 20 km
h(B) = 10 km
h(C) = 0 km


📍 Example (Path finding)

Imagine you want to travel from City A to the Goal City C:
  h(A) = 20 km — straight-line guess from City A to City C
  h(B) = 10 km — straight-line guess from City B to City C
  h(C) = 0 km — because City C is the goal itself

Even though City C has the best value (0), the AI can’t go there directly from City A if there is no direct road. 
So it looks at the reachable next cities (like B), compares their heuristic values, and picks the one with the 
smallest h(n). In this case, that’s City B (10 km), because it’s estimated to be closer to the goal than A.



🔹 Another Simple Example

In 8-puzzle problem:

  h(n) = Number of misplaced tiles
  Goal state → h(n) = 0




⭐ One-Line Exam Answers (Very Important)

Heuristic Search:
  A search technique that uses heuristic information to find solutions efficiently.

Heuristic Function (h(n)):
  A function that estimates the cost from current state to the goal state.


🧠 Memory Trick

h(n) = how near to goal
      


⭐ Difference between Heuristic Search and Heuristic Function (h(n))

| Heuristic Search                    | Heuristic Function (h(n))          |
| ----------------------------------- | ---------------------------------- |
| It is a search technique            | It is a function (formula)         |
| Used to find solution faster        | Used to guide the search           |
| It decides which path to follow     | It estimates how close to goal     |
| Uses heuristic information          | Provides heuristic information     |
| Works on many nodes and paths       | Gives value for one node           |
| Example: Best First Search          | Example: Straight-line distance    |



⭐ One-line Easy Summary (Exam Use)

Heuristic Search uses smart rules to search efficiently
Heuristic Function (h(n)) gives an estimate of distance to the goal


🧠 Memory Tip

Search = Process
Function = Value



Type of Heuristic Search:

All are varieties of Heuristic Search:


Generate and test
Hill Climbing
Best First Search
Problem Reduction
Constraint Satisfaction
Means-ends analysis



      `
    },
    {
      id: 12,
      question: "12. Explain Generate and Test Algorithm with example.",
      answer: "",
      codeExample: `
⭐ Generate and Test Algorithm

🔹 Meaning

Generate and Test is a problem-solving algorithm in AI where:

👉 The system

1. Generates a possible solution
2. Tests whether it solves the problem
3. Repeats until a correct solution is found

📌 In simple words:
Try → Check → Repeat


🔹 Simple Steps of Generate and Test Algorithm

1️⃣ Generate a possible solution
2️⃣ Test whether it is correct
3️⃣ If correct → Stop
4️⃣ If not correct → Generate another solution
5️⃣ Repeat until solution is found or all options are tried



🔹 ASCII Diagram (Easy to Draw in Exam)

+--------------------+
| Generate Solution  |
+--------------------+
           |
           v
+--------------------+
| Test Solution ?    |
+--------------------+
     |         |
   Yes        No
     |         |
     v         v
+-----------+  +--------------------+
| Solution  |  | Generate Next One  |
| Found     |  +--------------------+
+-----------+           |
                         |
                         +----> (Back to Test)




🔹 Example of Generate and Test

🔸 Example: Finding a Number

Problem: Find a number whose square is 25

Steps:

Generate 1 → Test → 1² = 1 ❌
Generate 3 → Test → 3² = 9 ❌
Generate 5 → Test → 5² = 25 ✅

👉 Solution found: 5



🔹 Another AI Example

8-Puzzle Problem
  Generate a board arrangement
  Test if it matches goal state
  Repeat until goal is reached


🔹 Advantages

Simple to understand
Easy to implement


🔹 Disadvantages

Slow for large problems
Tries many wrong solutions


⭐ One-Line Exam Answer

Generate and Test algorithm generates possible solutions and tests each one until a correct solution is 
found.



🧠 Memory Trick

Generate → Test → Repeat
      
      `
    },
    {
      id: 13,
      question: "13. Explain Hill Climbing Algorithm.",
      answer: "👉 EXAM FAVORITE",
      codeExample: `
⭐ Hill Climbing Algorithm

🔹 Meaning

Hill Climbing is a heuristic search technique that:

👉 Starts from an initial state
👉 Moves to the neighbor with better value
👉 Continues until no better state is found


📌 In simple words:
Always move upward toward better solution



🔹 Why called Hill Climbing?

Imagine you are climbing a hill ⛰
You always move upward, never downward.


🔹 Basic Steps of Hill Climbing

1️⃣ Start from initial state
2️⃣ Generate neighboring states
3️⃣ Select the best neighbor
4️⃣ If better than current → move there
5️⃣ Repeat until goal is reached or no better neighbor exists



⭐ Types of Hill Climbing

1️⃣ Simple Hill Climbing

👉 Checks neighbors one by one
👉 Moves to the first better state found

Characteristics:

Fast
Does not check all neighbors
May miss best solution

📌 Simple but not optimal



2️⃣ Steepest Ascent Hill Climbing

👉 Checks all neighbors first
👉 Selects the best among all

Characteristics:

Better than simple version
More accurate
Slower than simple hill climbing

📌 Also called Best Improvement


⭐ Diagram (Easy to Draw in Exam)
        Goal
         /\\
        /  \\        ← Global Maximum
       /    \\
      /      \\
     /\\              ← Local Maximum
    /  \\
   /    \\
 Start


AI tries to climb up,
but may stop at local maximum instead of global maximum.



⭐ Problems in Hill Climbing ⭐⭐

1️⃣ Local Maximum

👉 A point where all neighbors are lower
👉 But it is NOT the highest solution

📌 AI stops early thinking it reached goal


2️⃣ Plateau

👉 Flat area where all neighbors have same value
👉 No direction to move

📌 AI gets stuck


3️⃣ Ridge (Extra for exam safety)

👉 Narrow path with higher values
👉 Algorithm moves slowly or fails



⭐ Advantages

✔ Simple
✔ Uses less memory
✔ Fast in small problems


⭐ Disadvantages

❌ Can get stuck in local maxima
❌ Not guaranteed to find global solution
❌ Cannot backtrack


⭐ One-Line Exam Definition

Hill Climbing is a heuristic search algorithm that continuously moves towards increasing value states until 
no better state is available.


🧠 Memory Trick

Hill Climbing =
Move Up Only 🚀
No Backtracking ❌
      `
    },
    {
      id: 14,
      question: "14. Explain Best First Search Algorithm.",
      answer: "📌 High probability long answer",
      codeExample: `
⭐ Best First Search Algorithm

🔹 Meaning

Best First Search is a search algorithm that:

👉 Selects the best node first
👉 Uses heuristic function h(n) to decide
👉 Moves toward goal faster

📌 In simple words:
Always choose the most promising path first



🔹 Why use Best First Search?

Normal search checks many nodes.
Best First Search checks only best-looking nodes using heuristic value.

👉 Saves time
👉 Reduces search space


⭐ Working of Best First Search

Steps:

1️⃣ Start from initial node
2️⃣ Put node in OPEN list
3️⃣ Select node with lowest heuristic value h(n)
4️⃣ Expand that node (generate children)
5️⃣ Add children to OPEN list
6️⃣ Repeat until goal is found



⭐ Role of Heuristic Function (h(n))

👉 h(n) = Estimated distance from node to goal

✔ Smaller h(n) → closer to goal
✔ Larger h(n) → farther from goal

📌 Algorithm always selects node with smallest h(n)



⭐ Example

Suppose we want to reach Goal node G

| Node | h(n) |
| ---- | ---- |
| A    | 10   |
| B    | 6    |
| C    | 3    |
| G    | 0    |


👉 Algorithm chooses:

Start → C → G
(because smallest h(n))


⭐ Simple Diagram (ASCII)

        Start
       /  |  \\
      A   B   C
    h=10 h=6 h=3
              |
              G
            h=0


Algorithm selects C first → then Goal.


⭐ Advantages

✔ Fast search
✔ Efficient for large problems
✔ Uses heuristic knowledge


⭐ Disadvantages

❌ May not give optimal solution
❌ Depends on heuristic accuracy



⭐ One-Line Exam Answer

Best First Search is a heuristic search algorithm that selects the node with the lowest heuristic value to 
reach the goal faster.


🧠 Memory Trick

Best First = Choose Best h(n) First
      
      `
    },
    {
      id: 15,
      question: "15. Explain A (A Star) Algorithm*. Evaluation function: f(n) = g(n) + h(n) ⭐⭐⭐, Why A* is optimal",
      answer: "👉 MOST IMPORTANT QUESTION OF THIS UNIT 🔥🔥",
      codeExample: `
⭐ A* (A Star) Algorithm


🔹 Meaning

A* is a best-first search algorithm that finds the shortest path to the goal.

👉 It combines:

Actual cost from start → g(n)
Estimated cost to goal → h(n)

📌 In simple words:
A* = Smart + Accurate Path Finder



⭐ Evaluation Function

The main formula of A* is:

          f(n)=g(n)+h(n)



🔹 What each term means?

1️⃣ g(n)

Actual cost from start node to current node

👉 Real distance travelled


2️⃣ h(n)

Heuristic cost (estimated distance from current node to goal)

👉 Estimated remaining distance


3️⃣ f(n)

Total estimated cost of solution path

👉 A* selects node with smallest f(n)


⭐ Working of A* Algorithm
Steps:

1️⃣ Start from initial node
2️⃣ Calculate f(n) = g(n) + h(n)
3️⃣ Select node with lowest f(n)
4️⃣ Expand it
5️⃣ Repeat until goal is reached


⭐ Example

Suppose we want to reach Goal (G)

| Node | g(n) | h(n) | f(n) = g+h |
| ---- | ---- | ---- | ---------- |
| A    | 1    | 6    | 7          |
| B    | 3    | 4    | 7          |
| C    | 2    | 2    | 4          |
| G    | 4    | 0    | 4          |


👉 Node with smallest f(n) = C
Then → G

So A* finds shortest path.



⭐ Simple Diagram

Start
  |
  A (g=1, h=6, f=7)
  |
  C (g=2, h=2, f=4)
  |
  G (g=4, h=0, f=4)


A* chooses lowest f(n) every time.



⭐ Why A* is Optimal ⭐⭐⭐

A* gives optimal (shortest) solution if:

👉 The heuristic function h(n) is admissible


🔹 What is Admissible Heuristic?

A heuristic is admissible if:

        h(n)≤actualcosttogoal

👉 It never overestimates the real cost.



Why this makes A* optimal?

Because:

It considers real cost g(n)
It considers estimated cost h(n)
It never ignores cheaper path
It guarantees shortest path if heuristic is correct


⭐ Advantages

✔ Finds shortest path
✔ More accurate than Best First Search
✔ Complete and optimal (with admissible h(n))


⭐ Disadvantages

❌ Uses more memory
❌ Slower than simple heuristic methods



⭐ One-Line Exam Answer

A* is a heuristic search algorithm that uses evaluation function f(n) = g(n) + h(n) to find the optimal path 
to the goal.



🧠 Memory Trick

A* =
Actual cost + Heuristic cost
g(n) + h(n)
      
      `
    },
    {
      id: 16,
      question: "16. 🧠 JUST-REMEMBER POINTS (MCQ / 2 MARKS)",
      answer: "",
      codeExample: `
Heuristic means → Rule of thumb

h(n) → Estimated cost to goal
g(n) → Cost from start to node
A* uses → Best First Search + cost
Hill climbing is a → Local search technique
Local maxima → Algorithm gets stuck
      
      `
    },
    {
      id: 21,
      question: "21.What is a Production System in Artificial Intelligence? ",
      answer: "📌 Very common theory question.",
      codeExample: `
⭐ Production System in Artificial Intelligence

1️⃣ Definition

A Production System is a problem-solving method used in Artificial Intelligence.
It uses a set of rules to decide what action to take in a given situation.

📌 In simple words:

A Production System solves problems using IF–THEN rules.


⭐ Basic Idea

The system checks the current situation and applies a rule to perform an action.

Example rule:

IF temperature > 40
THEN turn on fan

Here:

Condition → temperature > 40
Action → turn on fan



⭐ Structure of Production System

A Production System has three main components.


1️⃣ Rule Base (Production Rules)

Collection of IF–THEN rules.

Example:

Rule 1:
IF student_marks > 40
THEN result = Pass


2️⃣ Working Memory

Stores the current state or facts.

Example:

student_marks = 75


3️⃣ Control Strategy

Decides which rule should be applied when multiple rules match.
It manages the execution of rules.



⭐ IF–THEN Rule Concept

Production systems work using IF–THEN rules.

Structure:

IF condition
THEN action

Example:

IF it is raining
THEN take umbrella

So the system checks the condition and performs the action.


⭐ Situation → Action Representation

Production systems represent knowledge as:

Situation → Action


Meaning:

Current Situation  →  Action to perform


Example:

Situation: hungry
Action: eat food


Another example:

Situation: traffic signal = red
Action: stop vehicle


⭐ Simple Diagram

          Production System
                |
     -------------------------
     |         |             |
 Rule Base  Working Memory  Control Strategy
 (IF–THEN)     (Facts)       (Rule Selection)


⭐ Example of Production System

Problem: Determine if student passes.

Rules:

Rule 1:
IF marks ≥ 40
THEN result = Pass

Rule 2:
IF marks < 40
THEN result = Fail


Working Memory:

marks = 55

System applies Rule 1 → Result = Pass.


⭐ Advantages

1️⃣ Easy to understand
2️⃣ Knowledge represented in rules
3️⃣ Flexible problem solving


⭐ One-Line Exam Answer

A Production System in Artificial Intelligence is a rule-based system that uses IF–THEN rules to represent 
knowledge and perform actions based on the current situation.
      
      `
    },
    {
      id: 22,
      question: "22. Components of Production System",
      answer: "This is the main long answer.",
      codeExample: `
⭐ Components of Production System

The three main components are:

1️⃣ Global Database
2️⃣ Production Rules
3️⃣ Control System

⭐ 1️⃣ Global Database
Meaning

Global Database stores the current information or facts about the problem.
It is also called Working Memory.


📌 In simple words:

It contains the current state of the system.


Example

Suppose we check student result.

Global Database stores:

    marks = 70

The system uses this information to apply rules.


Real Life Example

    Situation : Traffic signal = RED

This information is stored in Global Database.



⭐ 2️⃣ Production Rules
Meaning

Production Rules are IF–THEN rules that define actions.

📌 In simple words:

Production rules tell the system what action to take.


Structure

IF condition
THEN action


Example

Rule 1:
IF marks ≥ 40
THEN result = PASS


Rule 2:
IF marks < 40
THEN result = FAIL

The system checks global database facts and applies the rule.



⭐ 3️⃣ Control System
Meaning

Control System decides which rule should be applied.
Sometimes many rules match the situation.
So the control system selects the correct rule.


📌 In simple words:

Control system manages the execution of rules.

Example

Suppose rules are:

Rule 1: IF marks ≥ 40 → PASS
Rule 2: IF marks ≥ 60 → FIRST CLASS


Global database:

marks = 70

Output: PASS

Note: is not check another condition in this topic ok other ways is print both.

Both rules match.
Control system decides which rule to execute first.


⭐ Simple Working Diagram

          Production System
                |
      -------------------------
      |           |           |
 Global       Production     Control
 Database       Rules        System
  (Facts)      (IF–THEN)   (Rule Selection)


⭐ Complete Example

Problem: Determine student result.


Global Database
marks = 75

Production Rules

IF marks ≥ 40
THEN PASS


Control System

Checks rule → applies rule → result = PASS.


⭐ One-Line Exam Definition

A Production System consists of Global Database (facts), Production Rules (IF–THEN rules), and 
Control System which selects and applies the rules.
      
      `
    },
    {
      id: 23,
      question: "23. Characteristics of Production System",
      answer: "",
      codeExample: `
⭐ Characteristics of Production System

The main characteristics are:

1️⃣ Simplicity
2️⃣ Modularity
3️⃣ Modifiability
4️⃣ Knowledge-Intensive


⭐ 1️⃣ Simplicity
Meaning

Production systems are simple to understand and implement.
The knowledge is written in IF–THEN rules, which are easy to read.

Example

IF temperature > 35
THEN turn on AC

Anyone can easily understand the rule.

📌 So the system remains clear and simple.



⭐ 2️⃣ Modularity
Meaning

Knowledge is divided into separate independent rules.
Each rule works independently.

📌 This means one rule does not affect other rules.

Example

Rule 1:
IF marks ≥ 40
THEN PASS

Rule 2:

IF marks ≥ 75
THEN DISTINCTION

Both rules are separate modules.



⭐ 3️⃣ Modifiability
Meaning

Production systems are easy to modify or update.
You can add, delete, or change rules without affecting the whole system.

Example

Old rule:

IF marks ≥ 40
THEN PASS

If the rule changes, we simply update it:

IF marks ≥ 35
THEN PASS

No need to change the entire system.



⭐ 4️⃣ Knowledge-Intensive
Meaning

Production systems depend heavily on knowledge (rules).
More rules = more intelligent system.

📌 The system works based on expert knowledge stored as rules.


Example

Medical expert system:

IF fever AND cough
THEN possible flu

Knowledge from doctors is stored as rules.


⭐ Simple Diagram

        Production System
               |
   --------------------------------
   |        |         |            |
Simplicity  Modularity  Modifiability  Knowledge-Intensive


⭐ One-Line Exam Answer

The characteristics of a production system include simplicity, modularity, modifiability, and 
knowledge-intensive rule-based representation.
      
      
      `
    },
    {
      id: 24,
      question: "24. Water Jug Problem in AI",
      answer: "📌 Most important example problem.",
      codeExample: `
⭐ Water Jug Problem in Artificial Intelligence
Problem

We have two jugs:

Jug A = 4 liters
Jug B = 3 liters


Initial condition:

Start State = (0,0)

Meaning:

Jug A = 0 liters
Jug B = 0 liters


Goal:

Goal State = (2,0)


Meaning:

Jug A = 2 liters
Jug B = 0 liters



⭐ State Representation

A state is written as:

(A , B)

Where:

A = water in Jug A
B = water in Jug B

Example:

(4,0) → Jug A full, Jug B empty
(1,3) → Jug A has 1L, Jug B full



⭐ Allowed Rules (Operations)

The system can perform three types of actions.


1️⃣ Fill Rule

Fill any jug completely.

Examples:

Fill Jug A → (4, B)
Fill Jug B → (A, 3)

Example state change:

(0,0) → (4,0)


2️⃣ Empty Rule

Empty any jug.

Examples:

Empty Jug A → (0, B)
Empty Jug B → (A, 0)

Example:

(4,2) → (0,2)


3️⃣ Transfer Rule

Pour water from one jug to another until:

    one jug becomes empty, or
    the other jug becomes full

Example:

Transfer A → B
Transfer B → A

Example state:

(4,0) → (1,3)

because jug B can hold 3 liters.



⭐ Steps to Reach Goal (2,0)

Start:

(0,0)


Step 1 — Fill Jug B

(0,3)


Step 2 — Transfer B → A

(3,0)


Step 3 — Fill Jug B again

(3,3)


Step 4 — Transfer B → A until A becomes full

(4,2)


Step 5 — Empty Jug A

(0,2)


Step 6 — Transfer B → A

(2,0)

Goal achieved.



⭐ State Diagram

(0,0)
  |
  v
(0,3)
  |
  v
(3,0)
  |
  v
(3,3)
  |
  v
(4,2)
  |
  v
(0,2)
  |
  v
(2,0)  ← Goal


⭐ Key Idea in AI

The Water Jug problem demonstrates:

State space representation
Search techniques
Production rules (Fill / Empty / Transfer)


⭐ One-Line Exam Answer

The Water Jug Problem is a classical AI problem where water is measured using two jugs by applying 
operations such as fill, empty, and transfer to reach a goal state.
      `
    },
    {
      id: 25,
      question: "25. Classes of Production System",
      answer: "Sometimes asked as short or 5-mark question.",
      codeExample: `
⭐ Classes of Production System

The main classes are:

1️⃣ Monotonic Production System
2️⃣ Non-Monotonic Production System
3️⃣ Partially Commutative Production System
4️⃣ Commutative Production System

⭐ 1️⃣ Monotonic Production System
Meaning

In a monotonic system, applying a rule never prevents another rule from being applied later.
if first condition is true then run another rule run.

📌 In simple words:

Rules only add new information, they do not remove previous information.

Example

Rule 1:
IF A
THEN B

Rule 2:
IF B
THEN C

If rule 1 produces B, rule 2 can still be applied later.
So rules do not interfere with each other.



⭐ 2️⃣ Non-Monotonic Production System
Meaning

In a non-monotonic system, applying a rule may prevent other rules from being applied later.
All rules are opposite each other and also hss answer.

📌 In simple words:

Rules can change or remove previous facts.

Example

Rule 1:
IF door_open
THEN alarm_off

Rule 2:
IF door_closed
THEN alarm_on

When the door state changes, earlier rules may no longer be valid.
So rules may cancel previous results.



⭐ 3️⃣ Partially Commutative Production System
Meaning

In this system, some rules can be applied in any order, but not all.

📌 So only certain rule orders give the same result.

📌 Meaning:

Certain rules depend on order
Some rules do not depend on order

Example

Rule 1 → add sugar
Rule 2 → add milk

Order may not matter.

But:

Rule 3 → boil tea

must happen before serving.
So some rules depend on order.



⭐ 4️⃣ Commutative Production System
Meaning

In a commutative system, the order of rule application does not matter.
No matter which rule is applied first, the final result remains the same.

Example

Rule 1 → add salt
Rule 2 → add spices

Whether we add salt first or spices first, the final dish is the same.



⭐ Simple Comparison Diagram

             Production System Classes
                      |
      ----------------------------------------
      |           |            |             |
  Monotonic   Non-Monotonic  Partially     Commutative
                               Commutative


⭐ One-Line Exam Answer

Production systems are classified into monotonic, non-monotonic, partially commutative, and 
commutative systems based on how rules affect each other and the order in which they are applied.
      
      `
    },
    {
      id: 31,
      question: "31. What is Knowledge Representation in AI?",
      answer: "📌 Basic long theory question.",
      codeExample: `
⭐ Knowledge Representation in Artificial Intelligence
1️⃣ Meaning of Knowledge Representation

First think about this:

AI systems must store knowledge so they can think and solve problems.
The method used to store and organize knowledge in a computer is called Knowledge Representation (KR).

📌 Simple definition:

Knowledge Representation is a way of storing information and knowledge in AI so that a computer system can use it to solve problems.

Example

Human knowledge:

All humans need food
Raj is a human


AI system stores this knowledge so it can conclude:

Raj needs food

So the system represents knowledge in a logical form.



⭐ 2️⃣ Why Knowledge Representation is Needed in AI

AI systems need knowledge representation because they must understand situations and make decisions.

Main reasons:

1️⃣ To store knowledge

AI systems must store facts and information.

Example:

Dog is an animal
Animal can move


2️⃣ To perform reasoning

The system uses stored knowledge to make decisions.

Example:

If animal can move
Dog is animal
Therefore dog can move


3️⃣ To solve problems

Knowledge representation helps AI systems find solutions.

Example:

Medical diagnosis system:

IF fever AND cough
THEN possible flu


4️⃣ To understand relationships

It helps represent connections between objects.

Example:

Car → type of vehicle
Vehicle → used for transport



⭐ 3️⃣ Advantages in Problem Solving

Knowledge representation helps AI systems solve problems more effectively.


1️⃣ Improves decision making

AI can analyze knowledge and choose the best solution.


2️⃣ Makes reasoning possible

AI can draw conclusions from stored knowledge.


3️⃣ Reduces complexity

Complex problems become easier when knowledge is organized.


4️⃣ Reusable knowledge

Stored knowledge can be used again for different problems.


⭐ Simple Diagram

Knowledge Representation
         |
         v
  Store Knowledge
         |
         v
  Reasoning / Thinking
         |
         v
  Problem Solving


⭐ One-Line Exam Answer

Knowledge Representation in AI is the method of storing and organizing knowledge in a computer so 
that the system can reason and solve problems.
      `
    },
    {
      id: 32,
      question: "32. Explain Types of Knowledge in AI.",
      answer: "📌 Very common exam question.",
      codeExample: `
⭐ Types of Knowledge in Artificial Intelligence

AI systems store different types of knowledge to understand problems and make decisions.

The main types are:

1️⃣ Declarative Knowledge
2️⃣ Procedural Knowledge
3️⃣ Heuristic Knowledge
4️⃣ Meta Knowledge
5️⃣ Structural Knowledge


⭐ 1️⃣ Declarative Knowledge
Meaning

Declarative knowledge represents facts and information about the world.

It answers the question:

WHAT is true?

📌 This knowledge describes facts, objects, and relationships.

Example
Earth revolves around Sun
Dog is an animal
Water boils at 100°C

These are facts, so they are declarative knowledge.


⭐ 2️⃣ Procedural Knowledge
Meaning

Procedural knowledge describes how to perform a task or process.

It answers the question:

    HOW to do something?

Example

Steps to make tea:

1. Boil water
2. Add tea leaves
3. Add sugar
4. Serve tea

These steps represent procedural knowledge.


⭐ 3️⃣ Heuristic Knowledge
Meaning

Heuristic knowledge is experience-based knowledge or rules of thumb.
It helps AI systems solve problems faster, but the solution may not always be perfect.

Example

Chess strategy:
    Control the center of the board

This rule helps players make better decisions.


⭐ 4️⃣ Meta Knowledge
Meaning

Meta knowledge means knowledge about other knowledge.
It helps the system manage and control knowledge.

Example

An AI system knowing:
    Which rule should be used first

Real World Examples

When you open Google Maps, it has many types of knowledge:

Road data
Traffic data
Distance data

But meta knowledge decides:

If traffic is high → choose another route
If distance is short → prefer fastest route
👉 So meta knowledge decides which information is more important.


So meta knowledge helps organize other knowledge.


⭐ 5️⃣ Structural Knowledge
Meaning

Structural knowledge describes relationships between concepts.
It shows how different pieces of knowledge are connected.

Example
Car → type of Vehicle
Vehicle → used for Transport

This shows the relationship between concepts.


⭐ Simple Comparison Table

| Type        | Meaning                             |
| ----------- | ----------------------------------- |
| Declarative | Knowledge about facts               |
| Procedural  | Knowledge about how to do something |
| Heuristic   | Experience-based knowledge          |
| Meta        | Knowledge about knowledge           |
| Structural  | Knowledge about relationships       |


⭐ Simple Diagram

        Types of Knowledge
              |
-------------------------------------
| Declarative | Procedural | Heuristic |
| Meta        | Structural             |
-------------------------------------


⭐ One-Line Exam Answer

Types of knowledge in AI include declarative, procedural, heuristic, meta, and structural knowledge, which 
help represent facts, processes, experiences, and relationships.
      
      `
    },
    {
      id: 33,
      question: "33. Explain Semantic Network with example.",
      answer: "📌 Diagram-based question (high chance).",
      codeExample: `
⭐ Semantic Network in Artificial Intelligence
1️⃣ Meaning

A Semantic Network is a method of representing knowledge in AI using a graph structure.
It shows objects and their relationships.

📌 Simple definition:

A Semantic Network represents knowledge using nodes (objects) and links (relationships).



⭐ 2️⃣ Nodes and Links

Nodes

Nodes represent objects, concepts, or entities.

Example:

Animal
Dog
Bird

These are nodes in the network.


Links

Links represent the relationship between nodes.

Example relationships:

IS-A
HAS-A
CAN

Example:

Dog → IS-A → Animal

This means:

Dog is an animal


⭐ 3️⃣ Representation of Relationships

Semantic networks show how different concepts are connected.

Example knowledge:

Dog is an Animal
Animal can move
Dog has tail


Representation:

Dog → IS-A → Animal
Animal → CAN → Move
Dog → HAS-A → Tail

So the AI system understands relationships between concepts.


⭐ Example

Knowledge:

Bird is an Animal
Bird can Fly
Bird has Wings

Semantic representation:

Bird → IS-A → Animal
Bird → CAN → Fly
Bird → HAS-A → Wings


⭐ Simple Semantic Network Diagram

        Animal
          |
        IS-A
          |
         Bird
        /    \\
     CAN     HAS-A
      |        |
      Fly     Wings

Meaning:

Bird is an Animal
Bird can Fly
Bird has Wings


⭐ Another Simple Example

        Animal
          |
        IS-A
          |
          Dog
        /     \\
     CAN      HAS-A
      |         |
     Bark      Tail


⭐ Advantages

1️⃣ Easy to understand
2️⃣ Clearly shows relationships
3️⃣ Helps AI systems perform reasoning



⭐ One-Line Exam Answer

A Semantic Network is a knowledge representation technique that uses nodes to represent objects and 
links to represent relationships between them.

      `
    },
    {
      id: 34,
      question: "34. Explain Frames in Knowledge Representation.",
      answer: "📌 Important theory concept.",
      codeExample: `
⭐ Frames in Knowledge Representation
1️⃣ Meaning

A Frame is a structure used in AI to represent knowledge about an object or concept.
It stores information in the form of attributes and values.

📌 Simple definition:

    A Frame is a data structure used to represent knowledge using slots (attributes) and values.

You can think of a frame like a form or table describing an object.



⭐ 2️⃣ Frame Structure

A frame contains:

Frame Name (object/concept)
Slots (attributes)
Values (information of attributes)

Structure:

Frame Name
   |
   |-- Slot → Value
   |-- Slot → Value
   |-- Slot → Value

So a frame describes properties of an object.



⭐ 3️⃣ Slots and Values
Slots

Slots represent attributes or properties of the object.

Example slots:

Color
Size
Food


Values

Values store actual information of the slot.

Example:

Color → Brown
Size → Medium
Food → Grass



⭐ Example of Frame

Suppose we represent knowledge about Dog.

Frame: DOG

Slots:
Animal-Type → Mammal
Legs → 4
Sound → Bark
Food → Meat

Meaning:

Dog is a mammal
Dog has 4 legs
Dog makes bark sound



⭐ Another Example

Frame for Car:

Frame: CAR

Slots:
Type → Vehicle
Wheels → 4
Fuel → Petrol
Use → Transport

This frame stores knowledge about a car.



⭐ Simple Diagram
        Frame : Bird
        -----------------
        Type   → Animal
        Wings  → Yes
        CanFly → Yes
        Food   → Seeds

Here:

Bird = Frame
Type, Wings, CanFly = Slots
Animal, Yes, Seeds = Values



⭐ Advantages of Frames

1️⃣ Easy to organize knowledge
2️⃣ Represents objects clearly
3️⃣ Helps AI understand relationships and properties


⭐ One-Line Exam Answer

Frames are knowledge representation structures in AI that organize information using slots (attributes) 
and their values.
      
      `
    },
    {
      id: 35,
      question: "35. Explain Conceptual Dependency (CD).",
      answer: "📌 Sometimes asked as short or medium answer.",
      codeExample: `
⭐ Conceptual Dependency (CD) in AI

1️⃣ Meaning

Conceptual Dependency (CD) is a method used in AI to represent the meaning of a sentence.
It focuses on the action and relationship between objects, not just the words.

📌 Simple definition:

Conceptual Dependency is a knowledge representation technique used to represent the meaning of 
natural language sentences using actions and relationships.


2️⃣ Why Conceptual Dependency is Used

CD helps AI systems to:

Understand natural language
Represent actions clearly
Remove confusion between different sentences with the same meaning

Example:

Sentence 1
👉 Ram gave a book to Shyam.

Sentence 2
👉 Ram transferred a book to Shyam.

Both sentences have same meaning, so CD represents them in the same structure.



⭐ Representation of Actions and Relationships

In CD, every sentence is represented using:

1️⃣ Actors (person or object)
2️⃣ Actions
3️⃣ Objects
4️⃣ Relationships



Example Sentence

👉 Ram gave a book to Shyam

Representation:

Actor → Ram
Action → Transfer
Object → Book
Receiver → Shyam

Meaning:

Ram = person doing action
Book = object
Shyam = receiver

⭐ Simple CD Diagram

      Ram
       |
   (Transfer)
       |
      Book
       |
     Shyam

Meaning:

Ram transfers book to Shyam.



⭐ Another Example

Sentence:

👉 Rita eats an apple

Representation:

Actor → Rita
Action → Eat
Object → Apple

Diagram:

Rita
  |
 (Eat)
  |
Apple



⭐ Important Idea of CD

CD focuses on concepts, not words.

Example:

"John ate the mango."
"John consumed the mango."

Both represent same action → Eat, so CD shows same representation.


⭐ Advantages of Conceptual Dependency

1️⃣ Helps AI understand sentence meaning
2️⃣ Removes language differences
3️⃣ Useful in Natural Language Processing (NLP)


⭐ One-Line Exam Answer

Conceptual Dependency is a knowledge representation technique used in AI to represent the meaning of 
sentences using actions and relationships.

      `
    },
    {
      id: 41,
      question: "41. What is Prolog?",
      answer: "",
      codeExample: `
⭐ What is Prolog?

1️⃣ Meaning of Prolog

PROLOG stands for:

PRO → Programming
LOG → Logic

📌 Simple definition:

Prolog is a logic programming language used in Artificial Intelligence to solve problems using facts and rules.
Instead of writing step-by-step instructions, Prolog works using logical relationships.


Example Idea

Suppose we store facts:

male(john).
female(mary).
parent(john, bob).


Then we can ask a query:

    ?- parent(john, bob).

Prolog will answer:

    Yes

So Prolog works like a question–answer system.




⭐ 2️⃣ Features of Prolog

Important features of Prolog:

1️⃣ Logic Based Language

Prolog is based on mathematical logic.

Programs are written using:

Facts
Rules
Queries

Example:

father(X,Y) :- parent(X,Y), male(X).


2️⃣ Uses Facts and Rules

Facts = information

Example:

    male(john).

Rules = logical relationship

Example:

    father(X,Y) :- parent(X,Y), male(X).

Meaning:

    If X is parent of Y and X is male, then X is father of Y.


3️⃣ Automatic Backtracking

If Prolog cannot find an answer, it automatically searches another solution.
This process is called backtracking.


4️⃣ Pattern Matching

Prolog compares data using pattern matching.

Example:

likes(raj, pizza).
likes(raj, burger).

Query:

?- likes(raj, X).

Output:

X = pizza
X = burger


5️⃣ Used for AI Problems

Prolog is widely used for solving:

reasoning
knowledge representation
expert systems




⭐ 3️⃣ Applications of Prolog in AI

Prolog is used in many AI applications.


1️⃣ Expert Systems

Programs that behave like human experts.

Example:

medical diagnosis systems


2️⃣ Natural Language Processing (NLP)

Helps computers understand human language.

Example:

chatbots
language translators


3️⃣ Robotics

Used for decision making in robots.

Example:

Robot choosing path or action.


4️⃣ Problem Solving

Prolog can solve logical problems like:

Family tree problems
Tower of Hanoi
Water Jug problem


⭐ Simple Structure of Prolog Program

Prolog Program
     |
     |-- Facts
     |-- Rules
     |-- Queries


⭐ One-Line Exam Definition

Prolog is a logic programming language used in Artificial Intelligence that works using facts, rules, and 
queries.
      

-----------------------------------------------------------------


?-

is called a Query Prompt.

It means:
    “Ask Prolog a question.”

Example

Facts in program:

male(john).
female(mary).


Now we ask Prolog a question:

?- male(john).

Here:

?- → asking a question
male(john) → the question

Prolog checks the facts and answers:

Yes


Another Example

likes(raj, pizza).
likes(raj, burger).


Query:

?- likes(raj, X).


Meaning:

What does Raj like?


Output:

X = pizza
X = burger
      



The symbol

:-

is used to define a rule.

Simple meaning:
    :- means “IF” or “is true if”


⭐ Structure of Rule

Head :- Condition.

Meaning:

Head is true IF Condition is true


⭐ Example

father(X,Y) :- parent(X,Y), male(X).

Let’s break it.

father(X,Y) → result
parent(X,Y), male(X) → conditions


Meaning:

X is father of Y IF X is parent of Y AND X is male



| Symbol | Meaning                    |
| ------ | -------------------------- |
| ?-     | Ask question (query)       |
| :-     | Define rule (IF condition) |
| .      | End of statement           |

`
    },
    {
      id: 42,
      question: "42. Explain Prolog Terminology.",
      answer: "Very common short + theory question.",
      codeExample: `
Atom
Predicate
Clause
Constant
Variable
Structure


⭐ Prolog Terminology

Prolog programs are made using different elements such as atoms, predicates, clauses, constants, variables, 
and structures.

⭐ 1️⃣ Atom
Meaning

An Atom is the smallest unit of data in Prolog.
It represents a name, object, or symbol.
📌 Usually written in lowercase letters.


Example

raj
apple
car
male

These are atoms.



⭐ 2️⃣ Predicate
Meaning

A Predicate represents a relationship between objects.

It is written as:

    predicate_name(argument1, argument2)

Example

    likes(raj, pizza).
    parent(john, mary).


Meaning:

    Raj likes pizza
    John is parent of Mary


Here:

likes
parent

are predicates.



⭐ 3️⃣ Clause
Meaning

A Clause is a statement in Prolog.

There are three types:

1️⃣ Facts
2️⃣ Rules
3️⃣ Queries


Example

Fact:

male(raj).


Rule:

father(X,Y) :- parent(X,Y), male(X).

These statements are called clauses.



⭐ 4️⃣ Constant
Meaning

A Constant is a fixed value that does not change.

Constants can be:

numbers
names

Example

raj
pizza
10
car

These values remain unchanged, so they are constants.



⭐ 5️⃣ Variable
Meaning

A Variable is used to store unknown values.
📌 In Prolog, variables start with a capital letter.


Example

X
Y
Person
Food

Example query:

likes(raj, X).

Here X can represent pizza, burger, etc.



⭐ 6️⃣ Structure
Meaning

A Structure is a complex data object made of multiple parts.
It is written like a predicate but used to group related data.


Example
person(raj, 21, student)

Meaning:

Name = raj
Age = 21
Status = student

Here person(...) is a structure.


⭐ Simple Summary Table

| Term      | Meaning                      |
| --------- | ---------------------------- |
| Atom      | Smallest unit of data        |
| Predicate | Relationship between objects |
| Clause    | Statement in Prolog          |
| Constant  | Fixed value                  |
| Variable  | Represents unknown value     |
| Structure | Group of related data        |



⭐ Small Program Example

male(raj).
female(seema).
parent(raj, rohan).

father(X,Y) :- parent(X,Y), male(X).

Here:

raj → constant
X,Y → variables
parent → predicate
Each statement → clause


⭐ One-Line Exam Answer

Prolog terminology includes atoms, predicates, clauses, constants, variables, and structures which are 
used to build Prolog programs.
      
      `
    },
    {
      id: 43,
      question: "43. Explain Facts, Rules and Queries in Prolog with example.",
      answer: "",
      codeExample: `
⭐ Facts, Rules and Queries in Prolog

A Prolog program mainly contains three parts:

Facts
Rules
Queries

These help Prolog store knowledge and answer questions.


⭐ 1️⃣ Facts
Meaning

A Fact is a true statement about something.
It tells Prolog information that is always true.
📌 Facts end with a period (.)

Example

father(john, paul).
male(john).

Meaning:

John is the father of Paul
John is male
These are facts stored in the database.



⭐ 2️⃣ Rules
Meaning

A Rule tells Prolog how to derive new information from existing facts.

It uses:

Head :- Body.


Meaning:

IF Body is true THEN Head is true

Example

parent(X,Y) :- father(X,Y).

Meaning:

If X is father of Y, then X is also parent of Y.
So Prolog can derive new knowledge.



⭐ 3️⃣ Queries
Meaning

A Query is a question asked to Prolog.
It checks whether something is true or false based on facts and rules.

Queries start with:

?-


Example Query

    ?- father(john, paul).

Prolog checks facts and answers:

    Yes


⭐ Example Program

father(john, paul).
parent(X,Y) :- father(X,Y).

Here:

father(john, paul). → Fact
parent(X,Y) :- father(X,Y). → Rule



⭐ How Query Works

Now we ask the query:

    ?- parent(john, paul).

Step-by-step:

1️⃣ Prolog looks for parent(john, paul)


2️⃣ It finds rule:

parent(X,Y) :- father(X,Y)


3️⃣ Now Prolog checks:

father(john, paul)


4️⃣ It finds the fact:

father(john, paul).


5️⃣ Therefore result is:

Yes


⭐ Simple Flow Diagram

Query → parent(john, paul)

        ↓

Check Rule
parent(X,Y) :- father(X,Y)

        ↓

Check Fact
father(john, paul)

        ↓

Answer = TRUE


⭐ One-Line Exam Answer

In Prolog, facts store true information, rules define relationships between facts, and queries are used to 
ask questions to the Prolog system.
      
      `
    },
    {
      id: 44,
      question: "44. Explain Backtracking in Prolog.",
      answer: "📌 Very important exam concept.",
      codeExample: `
⭐ Backtracking in Prolog
1️⃣ Meaning

Backtracking is the search mechanism used by Prolog to find solutions.

When Prolog tries to answer a query:

    It checks facts and rules
    If one path fails, it goes back and tries another path

📌 Simple definition:

Backtracking is the process where Prolog automatically goes back and tries another possible solution 
when the current solution fails.



⭐ 2️⃣ Search Mechanism

Prolog searches answers in this order:

1. Check facts
2. Apply rules
3. If solution fails → go back
4. Try another rule or fact

This going back and trying again is called backtracking.


⭐ Example Program
likes(raj, pizza).
likes(raj, burger).
likes(raj, pasta).


⭐ Query
?- likes(raj, X).


⭐ How Prolog Finds Solutions

Step 1

Prolog checks the first fact.

likes(raj, pizza)

Result:

X = pizza


Step 2 (Backtracking)

If user asks for more solutions, Prolog goes back and checks next fact.

likes(raj, burger)

Result:

X = burger


Step 3

Prolog backtracks again.

likes(raj, pasta)

Result:

X = pasta



⭐ Backtracking Process Diagram

Query → likes(raj, X)

        ↓
Check Fact 1
likes(raj, pizza)
X = pizza

        ↓ (Backtrack)

Check Fact 2
likes(raj, burger)
X = burger

        ↓ (Backtrack)

Check Fact 3
likes(raj, pasta)
X = pasta



⭐ Another Example

Program:

male(john).
male(paul).
female(mary).


Query:

?- male(X).


Prolog answers:

X = john
X = paul

It finds multiple answers using backtracking.



⭐ Advantages of Backtracking

1️⃣ Automatically searches all possible solutions
2️⃣ Helps solve complex logical problems
3️⃣ Useful in AI search problems


⭐ One-Line Exam Answer

Backtracking in Prolog is a search mechanism where the system goes back and tries alternative solutions 
when a previous attempt fails.
      
      `
    },
    {
      id: 45,
      question: "45. Explain Pattern Matching / Unification.",
      answer: "",
      codeExample: `
⭐ Pattern Matching / Unification in Prolog

1️⃣ Meaning

Pattern Matching or Unification is the process where Prolog compares two expressions to see if they 
match.

If they match, Prolog binds variables with values.

📌 Simple definition:

Unification is the process of matching two terms and assigning values to variables so that the expressions 
become identical.



⭐ 2️⃣ Matching Two Expressions

Prolog checks whether two expressions can become equal.

Example expressions:

parent(john, mary)
parent(X, mary)

Here Prolog compares them.

Result:

X = john

So the expressions match.



⭐ 3️⃣ Variable Binding

When Prolog finds a match, it assigns a value to the variable.
This is called variable binding.

Example:

likes(raj, pizza)
likes(raj, X)

Here:

X = pizza

The variable X gets bound to pizza.


⭐ Example Program
likes(raj, pizza).
likes(raj, burger).
likes(seema, pasta).

⭐ Query

?- likes(raj, X).


⭐ How Matching Works

Step 1
Prolog compares:

likes(raj, X)
likes(raj, pizza)

Match found:

X = pizza


Step 2 (Backtracking)
Prolog checks next fact:

likes(raj, burger)

Match found:

X = burger



⭐ Matching Diagram

Query → likes(raj, X)

          ↓
Match with
likes(raj, pizza)

Result → X = pizza

          ↓
Backtracking

Match with
likes(raj, burger)

Result → X = burger



⭐ Important Rules of Unification

1️⃣ Constants must be same
2️⃣ Variables can match any value
3️⃣ Structures must have same name and number of arguments

Example:

parent(john, mary)
parent(X, Y)

Result:

X = john
Y = mary


⭐ One-Line Exam Answer

Pattern matching or unification in Prolog is the process of matching two expressions and assigning values 
to variables to make them identical.      
      
      `
    },
    {
      id: 46,
      question: "46. Explain Control Structures in Prolog.",
      answer: "",
      codeExample: `
In Java you use:

if(condition){
   action
}
else{
   action
}

In Prolog, we use symbols:

->   (then)
;    (else)


⭐ Control Structures in Prolog

Control structures help Prolog choose actions based on conditions.
The main control structures are:

1️⃣ If–Then
2️⃣ If–Then–Else



⭐ 1️⃣ If – Then

Meaning

If a condition is true, then Prolog performs an action.

Syntax
(Condition -> Action)

Meaning:

IF condition is true
THEN do action

Example

Program:

check_age(Age) :-
    (Age >= 18 -> write('Adult')).

Query:

?- check_age(20).

Output:

Adult

Because 20 ≥ 18, so condition is true.



⭐ 2️⃣ If – Then – Else
Meaning

If the condition is true, perform Action1.
Otherwise perform Action2.

Syntax
(Condition -> Action1 ; Action2)

Meaning:

IF condition is true
THEN Action1
ELSE Action2


Example Program

check_number(X) :-
    (X > 0 -> write('Positive') ; write('Negative')).

Query 1

?- check_number(10).

Output:

Positive


Query 2

?- check_number(-5).

Output:

Negative



⭐ Step-by-Step Working

Query:

?- check_number(10).

Step 1
Check condition:

10 > 0


Step 2
Condition = true


Step 3
Execute:
    write('Positive')


⭐ Simple Diagram

        Condition
           |
     X > 0 ?
       /   \\
    Yes     No
     |       |
 Positive  Negative


 ⭐ One-Line Exam Answer

Control structures in Prolog are used to control program execution using conditions such as If–Then and 
If–Then–Else.
      `
    },
    {
      id: 47,
      question: "47. Explain Cut Operator (!) in Prolog.",
      answer: "",
      codeExample: `
⭐ Cut Operator (!) in Prolog
1️⃣ Meaning

The Cut operator ! is used to stop Prolog from backtracking.
When Prolog reaches !, it commits to the current solution and does not try other alternatives.

📌 Simple definition:

Cut (!) is a control operator used to stop backtracking and make Prolog choose the current solution.



⭐ 2️⃣ Purpose of Cut

Cut is used to:

1️⃣ Stop unnecessary searching
2️⃣ Improve program efficiency
3️⃣ Prevent multiple answers




⭐ 3️⃣ How Cut Stops Backtracking

Normally Prolog does this:

Solution 1
Solution 2
Solution 3

But with cut !, Prolog stops after the first correct solution.

Solution 1
STOP


⭐ Example Without Cut

Program:

color(red).
color(blue).
color(green).

Query:

?- color(X).

Output:

X = red
X = blue
X = green

Because Prolog backtracks and finds all solutions.



⭐ Example With Cut

Program:

color(red) :- !.
color(blue).
color(green).

Query:

?- color(X).

Output:

X = red

Explanation:

1️⃣ Prolog finds red
2️⃣ ! executes
3️⃣ Backtracking stops
4️⃣ Other colors not checked



⭐ Another Example

Program:

max(X,Y,X) :- X >= Y, !.
max(X,Y,Y).

Meaning:

Find maximum of two numbers.


Query
?- max(10,5,M).

Step 1

10 >= 5  → true


Step 2

Cut ! executes → stop searching.


Output:

M = 10

Prolog does not check second rule.



⭐ Simple Diagram

Query → Check Rule

        ↓
Condition True

        ↓
        !
 (Cut operator)

        ↓
Stop Backtracking


⭐ One-Line Exam Answer

The Cut operator (!) in Prolog is used to stop backtracking and force Prolog to accept the current 
solution.
      `
    },
    {
      id: 51,
      question: "51. What is an Inference Engine?",
      answer: "",
      codeExample: `
⭐ What is an Inference Engine?

1️⃣ Meaning
An Inference Engine is the brain of an AI system.

It uses the Knowledge Base (facts + rules) to draw conclusions or make decisions.

📌 Simple Definition:
An Inference Engine is a component of AI that applies logical rules to the knowledge base to infer new 
information.


🔁 Connection with Concepts
You studied:
- Knowledge Base → stores facts & rules
- Production System → uses IF–THEN rules

👉 Now:
- Inference Engine → applies those rules


⭐ 2️⃣ Role in AI

The Inference Engine performs:

1️⃣ Reasoning  
   → Uses logic to find answers  

2️⃣ Decision Making  
   → Chooses the correct action  

3️⃣ Problem Solving  
   → Finds solutions using rules  


Example:
Knowledge Base:
IF fever AND cough → flu  

Inference Engine:
Check symptoms → apply rule → give result  


⭐ 3️⃣ How it Works with Knowledge Base

Flow:

Knowledge Base (Facts + Rules)
            ↓
     Inference Engine
            ↓
        Conclusion


Example:

Knowledge Base:
Fact: fever = yes  
Fact: cough = yes  

Rule:
IF fever AND cough → flu  

Working:
1️⃣ Check facts  
2️⃣ Match rule  
3️⃣ Apply rule  
4️⃣ Output → Result = flu  


⭐ 4️⃣ Modes of Inference

There are two main modes:

1️⃣ Forward Chaining  
2️⃣ Backward Chaining  



⭐ 4.1 Forward Chaining (Data Driven)

Idea:
Start from facts → reach conclusion  

📌 "Start from what we know"

Steps:
Facts → Apply Rules → New Facts → Final Answer  

Example:
Fact: It is raining  
Rule: IF raining → take umbrella  

Conclusion:
Take umbrella  

Memory Trick:
Forward = Facts → Goal  



⭐ 4.2 Backward Chaining (Goal Driven)

Idea:
Start from goal → check facts  

📌 "Start from what we want to prove"

Steps:
Goal → Check Rule → Check Facts → Answer  

Example:

Goal:
Is it flu?  

Check rule:
IF fever AND cough → flu  

Check facts:
fever = yes ✔  
cough = yes ✔  

Conclusion:
Yes, flu  

Memory Trick:
Backward = Goal → Facts  


⭐ Simple Diagram

          Knowledge Base
        (Facts + Rules)
                |
                v
        Inference Engine
         /            \\
 Forward Chaining   Backward Chaining
 (Facts → Goal)     (Goal → Facts)


⭐ One-Line Exam Answer

An Inference Engine is the reasoning component of an AI system that applies rules from the knowledge 
base to derive conclusions using forward and backward chaining.
      
      `
    },
    {
      id: 52,
      question: "52. Explain Forward Chaining with example.",
      answer: "📌 Very important long answer.",
      codeExample: `
⭐ Forward Chaining in AI

1️⃣ Definition  
Forward Chaining is an inference method where we start from known facts and apply rules to reach a final 
conclusion.  

📌 Simple Definition:  
Forward Chaining is a data-driven approach that starts with facts and applies rules to generate new facts 
until a goal is reached.  


🔁 Connection with Concepts  
- Facts → stored in Knowledge Base  
- Rules → IF–THEN  
- Inference Engine → applies rules  

👉 Forward Chaining = use facts first  


⭐ 2️⃣ Data-Driven Approach  

It is called data-driven because:  

👉 Starts from available data (facts)  
👉 Moves step-by-step toward solution  

📌 Memory Trick:  
Forward = Facts → Goal  


⭐ 3️⃣ Steps of Forward Chaining  

1️⃣ Start with known facts  
2️⃣ Check rules whose conditions match facts  
3️⃣ Apply rule → generate new fact  
4️⃣ Repeat until goal is reached  


⭐ 4️⃣ Example  

Knowledge Base  

Facts:  
fever = yes  
cough = yes  

Rule:  
IF fever AND cough → flu  


Working  

Step 1:  
Start with facts → fever, cough  

Step 2:  
Check rule → IF fever AND cough → flu  

Step 3:  
Condition is true ✔  

Step 4:  
Apply rule → New fact = flu  


Final Answer:  
Result = flu  


⭐ Simple Flow Diagram  

Facts → Match Rule → Apply Rule → New Fact → Goal  



⭐ 5️⃣ Properties of Forward Chaining  

1️⃣ Data-driven  
→ Starts from facts/data  

2️⃣ Bottom-up approach  
→ Moves from basic facts → final result  

3️⃣ Automatic rule application  
→ Rules are applied automatically  

4️⃣ Finds all possible solutions  
→ Can generate multiple conclusions  


⭐ Real-Life Example  

Fact: Traffic light = RED  
Rule: IF red → stop  

Result: STOP  


⭐ One-Line Exam Answer  

Forward Chaining is a data-driven inference method that starts from known facts and applies rules to 
reach a conclusion.
      
      `
    },
    {
      id: 53,
      question: "53. Explain Backward Chaining with example.",
      answer: "📌 Very common exam question.",
      codeExample: `
⭐ Backward Chaining in AI

1️⃣ Definition  
Backward Chaining is an inference method where we start from the goal (conclusion) and work backward to 
check if it is true using facts.  

📌 Simple Definition:
Backward Chaining is a goal-driven approach that starts from the goal and checks rules and facts to 
prove it.  


🔁 Basic Idea  

👉 Instead of starting from facts, we ask:  
"Is this goal true?"  

Then we check:  
- Which rule can prove it  
- Whether required facts are available  



⭐ 2️⃣ Goal-Driven Approach  

It is called goal-driven because:  

👉 Starts from the goal  
👉 Moves backward to find supporting facts  

📌 Memory Trick:  
Backward = Goal → Facts  


⭐ 3️⃣ Steps of Backward Chaining  

1️⃣ Start with a goal  
2️⃣ Find a rule that can prove the goal  
3️⃣ Check conditions of that rule  
4️⃣ Verify facts  
5️⃣ If all conditions are true → goal is true  


⭐ 4️⃣ Example  

Knowledge Base  

Facts:  
fever = yes  
cough = yes  

Rule:  
IF fever AND cough → flu  


Goal:  
Is it flu?  


Working  

Step 1:  
Start with goal → flu ?  

Step 2:  
Find rule → IF fever AND cough → flu  

Step 3:  
Check conditions:  
fever = yes ✔  
cough = yes ✔  

Step 4:  
All conditions true → Goal achieved  


Final Answer:  
Yes, flu  


⭐ Simple Flow Diagram  

Goal → Find Rule → Check Conditions → Verify Facts → Result  



⭐ 5️⃣ Properties of Backward Chaining  

1️⃣ Goal-driven  
→ Starts from goal  

2️⃣ Top-down approach  
→ Moves from goal → facts  

3️⃣ Efficient for specific problems  
→ Checks only required facts  

4️⃣ Used in expert systems  
→ Common in diagnosis systems  


⭐ Real-Life Example  

Goal: Is student passed?  
Rule: IF marks ≥ 40 → pass  
Check: marks = 50 ✔  
Result: PASS  


⭐ One-Line Exam Answer  

Backward Chaining is a goal-driven inference method that starts from the goal and works backward to 
verify it using rules and facts.
      
      `
    },
    {
      id: 54,
      question: "54. Differentiate between Forward Chaining and Backward Chaining.",
      answer: "📌 Guaranteed short/medium question.",
      codeExample: `
| Point     | Forward Chaining                                              | Backward Chaining                                             |
| ----------| ------------------------------------------------------------- | ------------------------------------------------------------- |
| Direction | Bottom-up (Facts → Goal)                                      | Top-down (Goal → Facts)                                       |
| Approach  | Data-driven                                                   | Goal-driven                                                   |
| Working   | Starts from known facts and applies rules to reach conclusion | Starts from goal and checks rules to verify it                |
| Use Cases | When all data is available (e.g., monitoring systems)         | When specific goal is given (e.g., expert systems, diagnosis) |



| Forward Chaining  | Backward Chaining |
| ----------------- | ----------------- |
| Starts from facts | Starts from goal  |
| Data-driven       | Goal-driven       |
| Bottom-up         | Top-down          |

      `
    },
    {
      id: 55,
      question: "55. Explain Horn Clause and Definite Clause.",
      answer: "📌 Often asked in theory or MCQ.",
      codeExample: `
⭐ 1️⃣ Horn Clause

🔹 Definition  
A Horn Clause is a logical expression that contains at most one positive literal.  

📌 Simple Meaning:  
A Horn Clause can have one or zero positive statements.  


🔹 Forms of Horn Clause  

1️⃣ Fact (only positive)  
father(john, paul).  

2️⃣ Rule (one positive + conditions)  
parent(X, Y) :- father(X, Y).  

3️⃣ Goal / Query (no positive literal)  
?- parent(john, paul).  



⭐ 2️⃣ Definite Clause

🔹 Definition  
A Definite Clause is a type of Horn Clause that has exactly one positive literal.  

📌 Simple Meaning:  
A Definite Clause always has one positive part (called the head).  


🔹 Form  
Head :- Body.  

- Head → positive literal  
- Body → conditions  


🔹 Example  
father(X, Y) :- parent(X, Y), male(X).  

Here:  
- father(X, Y) → positive (head)  
- parent(X, Y), male(X) → conditions  


⭐ 3️⃣ Difference Between Horn Clause and Definite Clause  

| Point            | Horn Clause                              | Definite Clause                          |
| -----------------| ---------------------------------------- | ---------------------------------------- |
| Definition       | Clause with at most one positive literal | Clause with exactly one positive literal |
| Positive Literal | 0 or 1                                   | Exactly 1                                |
| Types            | Fact, Rule, Query                        | Only Fact and Rule                       |
| Includes Query?  | Yes                                      | No                                       |


⭐ Simple Understanding  

Horn Clause = General case (0 or 1 positive)  
Definite Clause = Special case (exactly 1 positive)  


⭐ One-Line Exam Answer  

A Horn Clause is a clause with at most one positive literal, while a Definite Clause is a Horn Clause that 
contains exactly one positive literal.
      
      `
    },
    {
      id: 56,
      question: "56. Short question and answers.",
      answer: "",
      codeExample: `
⭐ 1️⃣ Modus Ponens

🔹 Meaning  
Modus Ponens is a basic rule of logical reasoning.  

📌 Simple Definition:  
If a condition is true and a rule exists, then the conclusion is also true.  


🔹 Format  
IF P → Q  
P is true  
-------------  
Therefore Q is true  


🔹 Example  
IF it is raining → ground is wet  
It is raining  
-----------------------  
Therefore ground is wet  


⭐ 2️⃣ Data-Driven vs Goal-Driven  

🔹 Data-Driven (Forward Chaining)  
- Starts from facts (data)  
- Moves toward goal  
- Flow: Facts → Rules → Conclusion  


🔹 Goal-Driven (Backward Chaining)  
- Starts from goal  
- Checks facts  
- Flow: Goal → Rules → Facts  


🔹 Simple Difference  
Data-driven → Facts → Goal  
Goal-driven → Goal → Facts  


⭐ 3️⃣ Rule Format (IF–THEN)

🔹 Meaning  
Rules in AI are written in IF–THEN form.  

📌 Simple Definition:  
IF condition is true THEN perform action.  


🔹 Format  
IF condition  
THEN action  


🔹 Example  
IF marks ≥ 40  
THEN PASS  


⭐ 4️⃣ Knowledge Base

🔹 Meaning  
A Knowledge Base is a collection of:  
- Facts  
- Rules  

📌 Simple Definition:  
A Knowledge Base is the stored information used by AI systems to make decisions.  


🔹 Example  
Fact: fever = yes  
Fact: cough = yes  

Rule: IF fever AND cough → flu  


🔹 Working  
Knowledge Base → Inference Engine → Result  


⭐ One-Line Summary (All Topics)

Modus Ponens → Basic logic rule  
Data-driven → Facts → Goal  
Goal-driven → Goal → Facts  
IF–THEN → Rule format  
Knowledge Base → Facts + Rules storage  
      `
    },
    {
      id: 61,
      question: "61. What is Non-Monotonic Reasoning?",
      answer: "📌 Core concept of this unit",
      codeExample: `
⭐ What is Non-Monotonic Reasoning?

🔹 Definition  
Non-Monotonic Reasoning is a type of reasoning where conclusions can change when new information 
is added.  


🔹 Simple Meaning  
Old conclusion → may change → when new fact comes  

👉 Unlike normal logic (monotonic), here results are not fixed  


⭐ Why is it Needed? (Real-World Uncertainty)  

In real life, information is often incomplete or uncertain  

📌 So we make assumptions, but later they may be wrong  


🔹 Example Situation  
You assume something is true → later new info changes it  

👉 AI must handle this situation  


🔹 Key Idea  
Real world ≠ always perfect knowledge  



⭐ Example (Bird → Penguin Case) ⭐  

🔹 Step 1 (Initial Knowledge)  

Rule: Birds can fly  
Fact: Penguin is a bird  
-------------------------  
Conclusion: Penguin can fly ❌  


🔹 Step 2 (New Information)  
New Fact: Penguin cannot fly  


🔹 Final Conclusion  
Penguin cannot fly ✅  

👉 Old conclusion changed  


⭐ Simple Diagram  

Bird → Fly (assumption)  

        ↓ new info  

Penguin → Cannot fly (updated conclusion)  


⭐ Key Points  

1️⃣ Conclusions can change  
2️⃣ Works with incomplete knowledge  
3️⃣ Used in real-world AI systems  


⭐ One-Line Exam Answer  

Non-Monotonic Reasoning is a reasoning method where conclusions may change when new information 
is added, useful in handling real-world uncertainty.  


🎯 Easy Memory Trick  

Non-Monotonic = Not fixed answer  
      `
    },
    {
      id: 62,
      question: "62. Explain Characteristics of Non-Monotonic Reasoning",
      answer: "📌 Short + theory question",
      codeExample: `
⭐ Characteristics of Non-Monotonic Reasoning  

⭐ 1️⃣ Revisable Conclusions ⭐  

🔹 Meaning  
Conclusions can be changed or updated when new information is available.  

🔹 Simple Explanation  
Old conclusion → New information → Updated conclusion  

🔹 Example  
Birds can fly  
Penguin is a bird  
→ Penguin can fly ❌  

New info: Penguin cannot fly  
→ Conclusion changes ✅  

🔹 Key Point  
Conclusion is NOT final  


⭐ 2️⃣ Default Reasoning  

🔹 Meaning  
Making assumptions based on general rules, unless exceptions are known.  

🔹 Simple Explanation  
Assume something is true by default  

🔹 Example  
Birds usually fly  
→ Assume any bird can fly  

(But exceptions like penguin exist)  

🔹 Key Point  
Assume first, correct later  


⭐ 3️⃣ Handles Incomplete Knowledge  

🔹 Meaning  
Works even when full information is not available.  

🔹 Simple Explanation  
Decision taken even with missing data  

🔹 Example  
Doctor gives treatment without full test results  

🔹 Key Point  
Works in real-world uncertainty  


⭐ One-Line Summary  

Revisable → Can change  
Default → Assume  
Incomplete → Works with less data  


⭐ One-Line Exam Answer  

Non-monotonic reasoning is characterized by revisable conclusions, default reasoning, and the ability to 
handle incomplete knowledge.  
      `
    },
    {
      id: 63,
      question: "63. Explain Default Logic",
      answer: "📌 Most important logic  \n Raymond Reiter",
      codeExample: `
⭐ Default Logic (Very Simple)

🔹 Simple Meaning  
Default Logic means we assume something is true normally,  
until we get proof that it is wrong.  


⭐ Real-Life Example 🧠  

Think like this:  

"Birds can fly"  

👉 So if I say:  

"Parrot is a bird"  

👉 You will say:  

"Parrot can fly"  

✔️ This is default thinking (assumption)  


⭐ But Problem Comes ❗  

Penguin is a bird  

👉 By default:  
Penguin can fly ❌  

But actually:  
Penguin cannot fly ✅  

👉 So we change our assumption  


⭐ Simple Idea  

Assume first → Correct later if needed  


⭐ Default Rule Form ⭐  

Default Logic uses a special rule format:  

A : B / C  


🔹 Meaning of Symbols  

A → Condition (what we know)  
B → Justification (assumption)  
C → Conclusion  


🔹 Simple Explanation  

IF A is true  
AND B is possible (no contradiction)  
THEN conclude C  


⭐ Example (Very Important)  

🔹 Default Rule  
Bird(x) : Fly(x) / Fly(x)  


🔹 Meaning  
If x is a bird  
and it is possible that x can fly  
then conclude x can fly  


🔹 Apply Example  

Fact: Penguin is a bird  
Default: Birds fly  
----------------------  
Conclusion: Penguin can fly ❌  


🔹 New Information  

Fact: Penguin cannot fly  


🔹 Updated Conclusion  

Penguin cannot fly ✅  

👉 Default assumption is rejected  


⭐ Simple Diagram  

Bird → (default) Fly  

        ↓ exception  

Penguin → Cannot fly  


⭐ Key Points  

1️⃣ Used when knowledge is incomplete  
2️⃣ Makes assumptions (default)  
3️⃣ Can change conclusions later  


⭐ One-Line Exam Answer  

Default Logic, introduced by Raymond Reiter, is used to make assumptions using rules of the form A : B / C 
when complete information is not available.  


🎯 Easy Memory Trick  

Default Logic = Assume → Check → Update  



⭐ What if B is wrong?  

🔹 Simple Answer  

If B is wrong (contradicted) → ❌ Do NOT apply the rule → ❌ Do NOT conclude C  


⭐ Easy Understanding  

A : B / C  

👉 Means:  

If A is true  
AND B is not wrong  
THEN conclude C  


🔴 But if B becomes wrong:  

If A is true  
BUT B is false  
→ STOP → Do NOT conclude C  


⭐ Example (Penguin Case)  

🔹 Default Rule  
Bird(x) : Fly(x) / Fly(x)  


🔹 Case 1 (Normal)  

Parrot is a bird  
No problem with flying  
→ Parrot can fly ✅  


🔹 Case 2 (B becomes wrong ❗)  

Penguin is a bird  
But we KNOW penguin cannot fly  

👉 So:  

B = Fly(x) is WRONG ❌  


🔹 Final Result  

Do NOT apply rule  
→ Penguin cannot fly ✅  


⭐ Key Idea  

If assumption (B) fails → rule is cancelled  


⭐ Super Simple Rule  

B correct → apply rule → get C  
B wrong → ignore rule → no C  


⭐ One-Line Answer  

If B is false or contradicted, the default rule is not applied and the conclusion is rejected.  


🎯 Easy Memory Trick  

B wrong → Rule wrong → No conclusion  
      
      `
    },
    {
      id: 64,
      question: "64. Explain Any TWO Logics of Non-Monotonic Reasoning",
      answer: "📌 Often asked as 'Explain any two' \n Circumscription ⭐ \n Autoepistemic Logic",
      codeExample: `
⭐ 1️⃣ Circumscription (Super Easy)

🔹 Think Like This 🧠  
Assume everything is NORMAL  
until someone tells you it is SPECIAL  


🔹 Example  

You think:  
All birds can fly  

👉 So you assume:  
Every bird flies  


🔹 Now New Info Comes ❗  

Penguin is a bird  

👉 You still think:  
Penguin flies ❌  

But then:  
Penguin cannot fly ✅  


🔹 Final Understanding  

First → assume normal (fly)  
Later → update if exception (penguin)  


🔹 One-Line  

👉 Circumscription = "Assume normal, ignore exceptions"  



⭐ 2️⃣ Autoepistemic Logic  

🔹 Simple Meaning  

Autoepistemic Logic means reasoning based on what we know and what we don’t know.  


🔹 Easy Idea  

"If I don't know it is false → I assume it is true"  


🔹 Real-Life Example 🧠  

I don't know that Ravi is absent  

👉 So I assume:  
Ravi is present  


🔹 Key Idea  

Knowledge about knowledge  

👉 Thinking about:  
What I know  
What I don’t know  


🔹 One-Line  

Autoepistemic Logic is reasoning based on self-knowledge (what is known or unknown).  



⭐ (Optional) 3️⃣ Negation as Failure  

🔹 Simple Meaning  

If something cannot be proven true → assume it is false  


🔹 Example  

Cannot prove "Ravi is present"  
→ So assume Ravi is absent  



⭐ Quick Difference  

Circumscription → Assume normal world  
Autoepistemic → Assume based on knowledge  



⭐ Final Easy Summary  

Circumscription → No exception thinking  
Autoepistemic → What I know thinking  
Negation Failure → Not proved = false  
      
      `
    },
    {
      id: 65,
      question: "65. Short questions",
      answer: "",
      codeExample: `
🧠 2 MARK / MCQ (JUST READ)

Non-monotonic → conclusions can change
Default reasoning → assume true unless false
Circumscription → minimize abnormal cases
Negation as failure → assume false if not proven
      `
    },
    {
      id: 71,
      question: "71. What is Probabilistic Reasoning?",
      answer: "📌 Basic + very common question",
      codeExample: `
⭐ What is Probabilistic Reasoning?

🔹 Definition  
Probabilistic Reasoning is a method used in AI to handle uncertainty using probability (chance).  


🔹 Simple Meaning  
Instead of YES or NO → we use chances (%)  

👉 Not sure → we give probability  


⭐ Why Needed in AI?  

Real world is not always certain ❗  

AI systems often deal with:  
- Incomplete data  
- Uncertain situations  
- Guessing outcomes  


🔹 Example Situation  

Symptoms → not 100% sure disease  

👉 So AI says:  
80% chance of flu  


🔹 Key Idea  
AI works with chances, not fixed answers  


⭐ Real-Life Examples 🧠  

⭐ 1️⃣ Weather Prediction  
70% chance of rain  

👉 Not sure, but probability is used  


⭐ 2️⃣ Medical Diagnosis  
Fever + cough → 80% flu  


⭐ 3️⃣ Spam Email Detection  
Email → 90% spam  


⭐ 4️⃣ Google Search / Recommendations  
Suggested videos based on probability  


⭐ Simple Diagram  

Input Data → Probability → Decision  


⭐ Key Points  

1️⃣ Handles uncertainty  
2️⃣ Uses probability (%)  
3️⃣ Gives likely results  


⭐ One-Line Exam Answer  

Probabilistic Reasoning is a technique in AI that uses probability to make decisions under uncertainty.  


🎯 Easy Memory Trick  

Probabilistic = Based on chance  
      
      `
    },
    {
      id: 72,
      question: "72. Explain Conditional Probability.",
      answer: "📌 Often asked short/medium question",
      codeExample: `
⭐ Step 1: Simple Idea  

👉 Conditional probability means:  

We already KNOW something  
→ then we find probability  


⭐ Step 2: Real-Life Example 🧠  

Imagine a class:  

Total students = 10  
Boys = 6  
Girls = 4  

👉 Question:  

"What is probability of selecting a BOY?"  

Answer:  

6 / 10 = 0.6  


⭐ Step 3: Now CONDITION comes ❗  

👉 New question:  

"IF I tell you the student is a BOY,  
what is probability that student is a BOY?"  

👉 Now think:  

You already KNOW it's a boy  

So:  

Probability = 1 (100%)  


⭐ Another Better Example (Easy)  

Students:  

Boys = 6  
Among boys, 3 play cricket  

👉 Question:  

IF student is a BOY,  
what is probability he plays cricket?  

👉 Now we only look at BOYS:  

Total boys = 6  
Cricket boys = 3  

👉 Answer:  

3 / 6 = 1/2  


⭐ Final Understanding 🔥  

Condition means → reduce sample space  

👉 We don’t look at all students  
👉 Only look at given group (boys)  


⭐ Formula (Now Easy)  

P(A | B) = A inside B / Total B
  

👉 Very simple:  

Required / Given group  


⭐ One-Line (Super Easy)  

Conditional probability means finding probability after knowing some information.  


🎯 Memory Trick  

First filter → then find probability  
      `
    },
    {
      id: 73,
      question: "73. Explain Bayes’ Theorem with formula and example.",
      answer: "📌 MOST IMPORTANT QUESTION OF THIS UNIT 🔥",
      codeExample: `
⭐ Step 1: Think in Simple Words  

👉 Bayes means:  

First guess → then new information → update answer  


⭐ Step 2: Real-Life Example 🧠 (VERY EASY)  

🎯 Situation  

In a class:  

Total students = 10  
Girls = 2  
Boys = 8  

👉 Also:  

Girls wearing glasses = 2  
Boys wearing glasses = 2  


⭐ Step 3: Question  

A student is wearing glasses  
→ What is chance the student is a GIRL?  


⭐ Step 4: Think Slowly  

👉 First (before knowing glasses):  

Chance of girl = 2 / 10  

👉 This is PRIOR  


👉 Now new info:  

Student is wearing glasses  


👉 Now only look at students with glasses:  

Total glasses students = 4  
Girls with glasses = 2  


⭐ Final Answer  

Probability = 2 / 4 = 1/2  


⭐ Now Understand Terms 🔥  

🔹 Prior (Before)  
Chance of girl before knowing glasses  
= 2 / 10  

🔹 Likelihood  
Chance of wearing glasses if girl  
= 2 / 2 = 1  

🔹 Posterior ⭐ (After)  
Chance of girl AFTER knowing glasses  
= 2 / 4 = 1/2  


⭐ Super Simple Idea  

First → look at all students  
Then → look only at filtered group (glasses)  


⭐ Formula (Now Easy)  

P(A | B) = [ P(B | A) × P(A) ] / P(B)


👉 Simple meaning:  

Posterior = (Likelihood × Prior) / Total  

👉 But don’t worry about formula
👉 Just remember filtering idea


⭐ One-Line (Very Easy)  

Bayes means update your answer when new information comes.  


🎯 Easy Memory Trick  

Before → After  
Guess → Update  


🎯 Final Simple Line  

Bayes = Change answer after new info  
      
      `
    },
    {
      id: 74,
      question: "74. Explain Dempster-Shafer Theory (DST).",
      answer: "📌 Important theory question",
      codeExample: `
⭐ What is Dempster–Shafer Theory (DST)?

🔹 Simple Definition  
DST is a method used in AI to handle uncertainty when we are not fully sure about information.  


🔹 Simple Meaning  
Not sure → give a range (not exact value)  

👉 Instead of one probability, we give two values  


⭐ Basic Idea  

👉 In normal probability:  
Rain chance = 70%  

👉 In DST:  
Rain chance = between 60% and 80%  

👉 So DST gives range of belief  



⭐ Belief & Plausibility ⭐  


⭐ 1️⃣ Belief (Lower Bound)  

🔹 Meaning  
Minimum confidence that something is true  

🔹 Example  
Belief(rain) = 0.6  

👉 At least 60% sure rain will happen  


⭐ 2️⃣ Plausibility (Upper Bound)  

🔹 Meaning  
Maximum possible confidence  

🔹 Example  
Plausibility(rain) = 0.8  

👉 At most 80% chance of rain  


🔹 Final Range  

0.6 ≤ Rain ≤ 0.8  


⭐ Easy Understanding  

Belief → sure part  
Plausibility → possible part  


⭐ Difference from Probability  

| Point     | Probability  | DST                |
| --------- | ------------ | ------------------ |
| Value     | Single value | Range (two values) |
| Certainty | Exact        | Uncertain          |
| Example   | 70% rain     | 60%–80% rain       |


⭐ Real-Life Example 🧠  

Doctor case:  

  Disease chance = 50% to 70%  

👉 Doctor is not fully sure → uses range  


⭐ One-Line Exam Answer  

Dempster-Shafer Theory is used to represent uncertainty using belief and plausibility instead of exact 
probability.  


🎯 Easy Memory Trick  

DST = Range, not exact  


🎯 Final Summary  

Belief → minimum  
Plausibility → maximum  
      `
    },
    {
      id: 75,
      question: "75. Short question and answers.",
      answer: "",
      codeExample: `
⭐ 1️⃣ 0 ≤ P(A) ≤ 1  

🔹 Meaning  
Probability value is always between 0 and 1  

🔹 Simple Idea  
0 → Impossible  
1 → Certain  

🔹 Example  
P(rain) = 0 → no rain  
P(rain) = 1 → sure rain  
P(rain) = 0.5 → maybe rain  


⭐ 2️⃣ P(A) + P(¬A) = 1  

🔹 Meaning  
Event + Not Event = 1 (100%)  

🔹 Simple Idea  
Something will either happen OR not happen  

🔹 Example  
Rain = 0.7  
No Rain = 0.3  

Total = 1  


⭐ 3️⃣ Prior → Before Evidence  

🔹 Meaning  
Probability before knowing any new information  

🔹 Example  
Chance of disease = 10% (before test)  


⭐ 4️⃣ Posterior → After Evidence ⭐  

🔹 Meaning  
Probability after getting new information  

🔹 Example  
Test is positive → New chance = 70%  


⭐ 5️⃣ Conditional Probability → P(A | B)  

🔹 Meaning  
Probability of A when B is already known  

🔹 Simple Idea  
First condition → then find probability  

🔹 Example  
Given: student is boy  
Find: plays cricket  


⭐ 6️⃣ Bayes → Update Probability  

🔹 Meaning  
Bayes theorem is used to update probability using new information  

🔹 Simple Idea  
Old value → New info → Updated value  

🔹 Example  
Before test → 10%  
After test → 70%  


⭐ Final Easy Summary  

0 ≤ P ≤ 1 → valid range  
P(A)+P(not A)=1 → total 100%  
Prior → before  
Posterior → after  
Conditional → given condition  
Bayes → update answer  


🎯 Super Easy Memory Trick  

Before → After → Update  
      
      
      `
    },
    {
      id: 81,
      question: "81. What is Machine Learning? Explain its features & need.",
      answer: "📌 Main theory question",
      codeExample: `
⭐ What is Machine Learning?

🔹 Definition  
Machine Learning is a part of AI where machines learn from data and improve automatically without 
being explicitly programmed.  


🔹 Simple Meaning  
Learning from data → making decisions → improving over time  

👉 No need to write full logic → system learns itself  


⭐ Features of Machine Learning  

⭐ 1️⃣ Data-Driven  

🔹 Meaning  
ML works based on data, not hard-coded rules  

🔹 Example  
More data → better results  


⭐ 2️⃣ Adaptability  

🔹 Meaning  
ML systems can learn and improve with new data  

🔹 Example  
YouTube recommendations improve over time  


⭐ 3️⃣ Automation  

🔹 Meaning  
ML reduces human effort by automating tasks  

🔹 Example  
Spam email detection automatically  


⭐ Need of Machine Learning  

⭐ 1️⃣ Handle Large Data  

🔹 Meaning  
Humans cannot process huge data, but ML can  

🔹 Example  
Millions of user data analyzed quickly  


⭐ 2️⃣ Real-Time Prediction  

🔹 Meaning  
ML can give instant predictions  

🔹 Example  
Weather forecast, stock prediction  


⭐ Simple Diagram  

Data → Machine Learning → Prediction  


⭐ One-Line Exam Answer  

Machine Learning is a technique where systems learn from data, with features like data-driven approach, 
adaptability, and automation, and is needed for handling large data and real-time predictions.  


🎯 Easy Memory Trick  

ML = Learn from Data  
      
      `
    },
    {
      id: 82,
      question: "82. Explain Types of Machine Learning.",
      answer: "📌 MOST IMPORTANT QUESTION 🔥",
      codeExample: `
⭐ First Understand Simple Idea  

Machine Learning = How a machine learns  

👉 There are 3 ways to learn, just like students 👇  


⭐ 1️⃣ Supervised Learning ⭐ (Like Teacher)  

🔹 Think Like This 🧠  
Teacher gives question + answer  

👉 Machine already knows correct answers  


🔹 Example  
Email → Spam or Not Spam (already given)  

👉 Machine learns:  
If similar email comes → detect spam  


🔹 Super Easy Line  

👉 Learn with answer  



⭐ 2️⃣ Unsupervised Learning (No Teacher)  

🔹 Think Like This 🧠  
No teacher → student finds patterns himself  


🔹 Example  
Group students by marks automatically  

👉 Machine groups:

Top students  
Average students  
Low students  


🔹 Super Easy Line  

👉 Find patterns without answer  



⭐ 3️⃣ Reinforcement Learning (Learning by Reward)  

🔹 Think Like This 🧠  
Good work → reward  
Bad work → punishment  


🔹 Example  
Game playing (like chess)  

👉 Machine learns:  
Good move → +points  
Bad move → -points  


🔹 Super Easy Line  

👉 Learn by reward and punishment  



⭐ Final Simple Comparison 🔥  

Supervised → Teacher gives answers  
Unsupervised → No answers, find patterns  
Reinforcement → Reward & punishment  


⭐ Real-Life Memory Trick 🧠  

School:  

Supervised → Teacher teaching  
Unsupervised → Self study  
Reinforcement → Marks (reward)  


⭐ One-Line Exam Answer  

Supervised learning uses labeled data, unsupervised learning finds patterns without labels, and 
reinforcement learning learns using rewards and penalties.  
      
      `
    },
    {
      id: 83,
      question: "83. Explain Applications of Machine Learning.",
      answer: "📌 Easy scoring question",
      codeExample: `
⭐ Applications of Machine Learning  

⭐ 1️⃣ Healthcare  

🔹 Use  
- Disease prediction  
- Medical diagnosis  

🔹 Example  
Detect cancer from medical reports  

🔹 Simple Line  
👉 ML helps doctors find diseases early  



⭐ 2️⃣ Finance  

🔹 Use  
- Fraud detection  
- Credit scoring  

🔹 Example  
Detect fake credit card transactions  

🔹 Simple Line  
👉 ML helps secure money and banking  



⭐ 3️⃣ Retail  

🔹 Use  
- Product recommendation  
- Customer analysis  

🔹 Example  
Amazon suggests products  

🔹 Simple Line  
👉 ML helps suggest what to buy  



⭐ 4️⃣ Transportation  

🔹 Use  
- Self-driving cars  
- Traffic prediction  

🔹 Example  
Google Maps shows fastest route  

🔹 Simple Line  
👉 ML helps smart travel and driving  



⭐ 5️⃣ Social Media  

🔹 Use  
- Content recommendation  
- Face recognition  

🔹 Example  
Instagram shows posts you like  

🔹 Simple Line  
👉 ML helps show relevant content  



⭐ One-Line Exam Answer  

Machine Learning is used in healthcare, finance, retail, transportation, and social media for prediction, 
automation, and better decision-making.  



⭐ Easy Memory Trick  

Health → Money → Shopping → Travel → Social  
      



2 MARK (JUST READ)

ML = subset of AI
Training + Prediction
Supervised → labeled data
Unsupervised → no labels
Reinforcement → reward-based
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
      id: 11111,
      question: "Mid paper",
      answer: "",
      codeExample: `
=========================================
ARTIFICIAL INTELLIGENCE - I
SOLVED PAPER
=========================================


-----------------------------------------
Q1 (a) (i)
Question: List any two applications of AI in real life.
-----------------------------------------

Answer:
1. Medical diagnosis (MRI, CT scan analysis)
2. Chatbots / Virtual assistants


-----------------------------------------
Q1 (a) (ii)
Question: What is a heuristic function in search algorithms?
-----------------------------------------

Answer:
A heuristic function is a function that estimates
the cost or distance from the current state to
the goal state to find the solution efficiently.


-----------------------------------------
Q1 (a) (iii)
Question: What is meant by knowledge representation?
-----------------------------------------

Answer:
Knowledge representation is the method of
representing knowledge in a form that a computer
can understand and use for reasoning.


-----------------------------------------
Q1 (b) (MCQs)
-----------------------------------------

1. Which technique reduces the difference between current and goal state?

Answer:
Means–Ends Analysis


2. True or False: Production systems consist of rules and control strategy.

Answer:
True


3. Which knowledge representation technique uses facts and rules?

Answer:
Production System


4. The process of breaking a problem into smaller subproblems is called:

Answer:
Problem Decomposition


5. Which symbol represents logical AND in propositional logic?

Answer:
∧


6. In predicate logic, predicates represent:

Answer:
Properties or relationships


7. Which concept represents inheritance relationships in knowledge representation?

Answer:
Is-A relationship


-----------------------------------------
Q2 (a) (i)
Question: Write predicate logic statements.
-----------------------------------------

Answer:

All humans are mortal:
∀x (Human(x) → Mortal(x))

Ram is a human:
Human(Ram)


-----------------------------------------
Q2 (a) (ii)
Question: What is Generate-and-Test method?
-----------------------------------------

Answer:
Generate-and-Test is a problem-solving method
where possible solutions are generated and tested.

Steps:
1. Generate possible solution
2. Test solution
3. If correct → stop
4. Else → generate next solution


-----------------------------------------
Q2 (b) (i)
Question: Explain Hill Climbing and mention one limitation.
-----------------------------------------

Answer:
Hill climbing is a heuristic search algorithm
that continuously moves towards a better state.

Limitation:
It may get stuck in local maxima.


-----------------------------------------
Q2 (b) (ii)
Question: Define AI and explain basic elements.
-----------------------------------------

Answer:
Artificial Intelligence is the ability of a machine
to perform tasks that require human intelligence.

Basic elements:
1. Knowledge base
2. Inference engine
3. Learning mechanism
4. User interface


-----------------------------------------
Q3 (i)
Question: Explain Production Systems in AI and its components.
-----------------------------------------

Answer:
Production system is a rule-based system.

Components:
1. Rule base (IF–THEN rules)
2. Working memory (facts)
3. Control strategy

Working:
Rules are applied on facts to derive new facts.


-----------------------------------------
Q3 (ii)
Question: Discuss approaches to knowledge representation.
-----------------------------------------

Answer:
1. Logical representation
2. Semantic networks
3. Frames
4. Production rules


-----------------------------------------
Q3 (iii)
Question: Write a Prolog program using facts and rules.
-----------------------------------------

Answer:

Facts:
student(ram).
student(rahul).

Rules:
studies(X) :- student(X).

Query:
?- studies(ram).

Explanation:
If X is a student, then X studies.


-----------------------------------------
Q4 (a)
Question: Explain role of AI in modern education.
-----------------------------------------

Answer:
1. Personalized learning
2. Intelligent tutoring systems
3. Automated grading
4. Virtual classrooms
5. Performance analysis

AI improves learning and saves time.


-----------------------------------------
Q4 (b)
Question: Map Colouring Problem as CSP.
-----------------------------------------

Answer:
Variables:
Regions

Domain:
Colors (Red, Green, Blue)

Constraints:
Adjacent regions must have different colors

Goal:
Assign colors so that no adjacent regions
have same color.


-----------------------------------------
OR
-----------------------------------------

Question: Explain Means-Ends Analysis with example.
-----------------------------------------

Answer:
Means-Ends Analysis reduces difference between
current state and goal state.

Steps:
1. Compare states
2. Find difference
3. Apply operator
4. Repeat

Example:
Home → College using steps like bus or walking.
      
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
      id: 1.1,
      question: "1. Write a program to implement Tic Tac Toe game.",
      answer: "",
      codeExample: `
# Tic Tac Toe Player vs AI (Minimax AI)

import math

# Create board
board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]

PLAYER = 'X'
AI = 'O'


# Print board
def print_board():
    print("-------------")
    for i in range(3):
        print("|", board[i][0], "|", board[i][1], "|", board[i][2], "|")
        print("-------------")


# Check winner
def check_winner(player):

    # Rows
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] == player:
            return True

    # Columns
    for j in range(3):
        if board[0][j] == board[1][j] == board[2][j] == player:
            return True

    # Diagonals
    if board[0][0] == board[1][1] == board[2][2] == player:
        return True

    if board[0][2] == board[1][1] == board[2][0] == player:
        return True

    return False


# Check draw
def is_full():
    for i in range(3):
        for j in range(3):
            if board[i][j] == ' ':
                return False
    return True


# Minimax Algorithm
def minimax(is_max):

    # If AI wins → +1
    if check_winner(AI):
        return 1

    # If Player wins → -1
    if check_winner(PLAYER):
        return -1

    # Draw → 0
    if is_full():
        return 0

    if is_max:  # AI turn (maximize score)
        best = -math.inf

        for i in range(3):
            for j in range(3):
                if board[i][j] == ' ':
                    board[i][j] = AI
                    score = minimax(False)
                    board[i][j] = ' '
                    best = max(best, score)

        return best

    else:  # Player turn (minimize score)
        best = math.inf

        for i in range(3):
            for j in range(3):
                if board[i][j] == ' ':
                    board[i][j] = PLAYER
                    score = minimax(True)
                    board[i][j] = ' '
                    best = min(best, score)

        return best


# AI Move
def ai_move():

    best_score = -math.inf
    move = (0, 0)

    for i in range(3):
        for j in range(3):
            if board[i][j] == ' ':
                board[i][j] = AI
                score = minimax(False)
                board[i][j] = ' '

                if score > best_score:
                    best_score = score
                    move = (i, j)

    board[move[0]][move[1]] = AI


# Game Loop
while True:

    print_board()

    # Player Move
    row = int(input("Enter row (0-2): "))
    col = int(input("Enter column (0-2): "))

    if board[row][col] != ' ':
        print("Invalid Move")
        continue

    board[row][col] = PLAYER

    if check_winner(PLAYER):
        print_board()
        print("🎉 You Win!")
        break

    if is_full():
        print_board()
        print("Game Draw")
        break

    # AI Move
    print("AI is thinking...")
    ai_move()

    if check_winner(AI):
        print_board()
        print("AI Wins 🤖")
        break

    if is_full():
        print_board()
        print("Game Draw")
        break



OUTPUT:

-------------
|   |   |   |    
-------------    
|   |   |   |    
-------------    
|   |   |   |    
-------------    
Enter row (0-2): 1
Enter column (0-2): 1
AI is thinking...
-------------
| O |   |   |
-------------
|   | X |   |
-------------
|   |   |   |
-------------
Enter row (0-2): 




------------------------------------------------------------------------


if you not used AI only two User are perform to used this code:


# Tic Tac Toe - 2 Player

# Create board
board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]

# Print board
def print_board():
    print("-------------")
    for i in range(3):
        print("|", board[i][0], "|", board[i][1], "|", board[i][2], "|")
        print("-------------")

# Check winner
def check_winner(player):

    # Rows
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] == player:
            return True

    # Columns
    for j in range(3):
        if board[0][j] == board[1][j] == board[2][j] == player:
            return True

    # Diagonals
    if board[0][0] == board[1][1] == board[2][2] == player:
        return True

    if board[0][2] == board[1][1] == board[2][0] == player:
        return True

    return False

# Check draw
def is_full():
    for i in range(3):
        for j in range(3):
            if board[i][j] == ' ':
                return False
    return True


# Game Loop (2 Players)
current_player = 'X'

while True:

    print_board()
    print("Player", current_player, "turn")

    row = int(input("Enter row (0-2): "))
    col = int(input("Enter column (0-2): "))

    if board[row][col] != ' ':
        print("Invalid Move")
        continue

    board[row][col] = current_player

    if check_winner(current_player):
        print_board()
        print("🎉 Player", current_player, "Wins!")
        break

    if is_full():
        print_board()
        print("Game Draw")
        break

    # Switch player
    if current_player == 'X':
        current_player = 'O'
    else:
        current_player = 'X'



OUTPUT:

-------------
|   |   |   |
-------------
|   |   |   |
-------------
|   |   |   |
-------------

Player X turn
Enter row (0-2): 0 
Enter column (0-2): 1
-------------
|   | X |   |
-------------
|   |   |   |
-------------
|   |   |   |
-------------

Player O turn
Enter row (0-2): 1
Enter column (0-2): 1
-------------
|   | X |   |
-------------
|   | O |   |
-------------
|   |   |   |
-------------

Player X turn
      `
    },
    {
      id: 2.2,
      question: "2. Write a program to implement BFS 8 Puzzle problem.",
      answer: "",
      codeExample: `
from collections import deque

goal = (1,2,3,4,5,6,7,8,0)

def print_grid(state):
    for i in range(0, 9, 3):
        print(state[i:i+3]) 
    print()


def bfs(start):
    q = deque([(start, start.index(0), [])])
    visited = set()

    while q:
        state, blank, path = q.popleft()

        if state == goal:
            return path + [state]

        if state in visited:
            continue
        visited.add(state)

        moves = []
        r, c = divmod(blank, 3)

        if r > 0: moves.append(blank - 3)   # Up
        if r < 2: moves.append(blank + 3)   # Down
        if c > 0: moves.append(blank - 1)   # Left
        if c < 2: moves.append(blank + 1)   # Right

        for m in moves:
            new = list(state)
            new[blank], new[m] = new[m], new[blank]
            q.append((tuple(new), m, path + [state]))

    return None


# Example start state
start = (1,2,3,
         4,0,6,
         7,5,8)

solution = bfs(start)

if solution:
    for step in solution:
        print_grid(step)
else:
    print("No solution found.")



OUTPUT:

(1, 2, 3)
(4, 0, 6)
(7, 5, 8)

(1, 2, 3)
(4, 5, 6)
(7, 0, 8)

(1, 2, 3)
(4, 5, 6)
(7, 8, 0)

      
      `
    },
    {
      id: 3.3,
      question: "3. Write a program to implement DFS Water Jug Problem.",
      answer: "",
      codeExample: `
def water_jug_manual():
    cap1 = int(input("Enter capacity of Jug 1: "))
    cap2 = int(input("Enter capacity of Jug 2: "))

    print("Enter target amounts for both jugs:")
    target1 = int(input("Target for Jug 1: "))
    target2 = int(input("Target for Jug 2: "))

    x, y = 0, 0   # Initial state

    while True:
        print("\nCurrent State: ({}, {})".format(x, y))

        # Check if BOTH targets reached
        if x == target1 and y == target2:
            print("Congratulations! You reached the target state.")
            break

        print("\nChoose an operation:")
        print("1. Fill Jug 1")
        print("2. Fill Jug 2")
        print("3. Empty Jug 1")
        print("4. Empty Jug 2")
        print("5. Pour Jug 1 -> Jug 2")
        print("6. Pour Jug 2 -> Jug 1")
        print("7. Exit")

        choice = int(input("Enter your choice: "))

        if choice == 1:
            x = cap1
        elif choice == 2:
            y = cap2
        elif choice == 3:
            x = 0
        elif choice == 4:
            y = 0
        elif choice == 5:
            transfer = min(x, cap2 - y)
            x -= transfer
            y += transfer
        elif choice == 6:
            transfer = min(y, cap1 - x)
            y -= transfer
            x += transfer
        elif choice == 7:
            print("Exiting...")
            break
        else:
            print("Invalid choice. Try again.")

# Run program
water_jug_manual()



OUTPUT:

Enter capacity of Jug 1: 5
Enter capacity of Jug 2: 3
Enter target amounts for both jugs:
Target for Jug 1: 3
Target for Jug 2: 0

Current State: (0, 0)

Choose an operation:
1. Fill Jug 1
2. Fill Jug 2
3. Empty Jug 1
4. Empty Jug 2
5. Pour Jug 1 -> Jug 2
6. Pour Jug 2 -> Jug 1
7. Exit
Enter your choice: 2

Current State: (0, 3)

Choose an operation:
1. Fill Jug 1
2. Fill Jug 2
3. Empty Jug 1
4. Empty Jug 2
5. Pour Jug 1 -> Jug 2
6. Pour Jug 2 -> Jug 1
7. Exit
Enter your choice: 6

Current State: (3, 0)
Congratulations! You reached the target state.
      
      `
    },
    {
      id: 4.4,
      question: "4. Write a program to implement N Queens Problem.",
      answer: "",
      codeExample: `
n = int(input("Enter value of n: "))

board = [[0 for i in range(n)] for j in range(n)]


def printBoard():
    for row in board:
        print(*row)


def isSafe(row, col):

    # Check column
    for i in range(row):
        if board[i][col] == 1:
            return False

    # Check upper left diagonal
    i = row - 1
    j = col - 1
    while i >= 0 and j >= 0:
        if board[i][j] == 1:
            return False
        i -= 1
        j -= 1

    # Check upper right diagonal
    i = row - 1
    j = col + 1
    while i >= 0 and j < n:
        if board[i][j] == 1:
            return False
        i -= 1
        j += 1

    return True


def solve(row):
    if row == n:
        return True

    for col in range(n):

        if isSafe(row, col):
            board[row][col] = 1

            if solve(row + 1):
                return True

            board[row][col] = 0   # Backtrack

    return False


# Run
if solve(0):
    printBoard()
else:
    print("No Solution")



OUTPUT:

Enter value of n: 4
0 1 0 0
0 0 0 1
0 0 0 1
1 0 0 0
0 0 1 0



Enter value of n: 3
No Solution
      `
    },
    {
      id: 5.5,
      question: "5. Write a program to implement Tower of Hanoi Problem.",
      answer: "",
      codeExample: `
def tower(n, from_rod, to_rod, aux_rod):
    if n == 0:
        return
    
    tower(n-1, from_rod, aux_rod, to_rod)
    
    print(f"Move disk {n} from {from_rod} to {to_rod}")
    
    tower(n-1, aux_rod, to_rod, from_rod)


# Main
n = 3
tower(n, 'A', 'C', 'B')



📌 Output for n = 3

Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
      
      `
    },
    {
      id: 6.6,
      question: "6. Write a prolog program for the family tree.",
      answer: "",
      codeExample: `
/* SIMPLE FAMILY CHATBOT */

% -------- FACTS --------
male(john).
male(paul).
male(david).

female(mary).
female(lisa).

parent(john, paul).
parent(john, mary).
parent(lisa, paul).
parent(lisa, mary).
parent(paul, david).

% -------- RULES --------
father(X, Y) :- parent(X, Y), male(X).
mother(X, Y) :- parent(X, Y), female(X).
sibling(X, Y) :- parent(Z, X), parent(Z, Y), X \= Y.
grandparent(X, Y) :- parent(X, Z), parent(Z, Y).

% -------- START --------
:- initialization(main).

main :-
    write('FAMILY CHATBOT STARTED'), nl,
    write('Type a query like father(john,paul).'), nl,
    write('Type stop. to exit.'), nl,
    chat.

chat :-
    read(Q),
    ( Q = stop ->
        write('Goodbye!'), nl
    ;
        answer(Q),
        chat
    ).

% -------- RESPONSES --------
answer(father(X,Y)) :-
    ( father(X,Y) ->
        write('Yes, correct.'), nl
    ;
        write('No, wrong.'), nl
    ).

answer(mother(X,Y)) :-
    ( mother(X,Y) ->
        write('Yes, correct.'), nl
    ;
        write('No, wrong.'), nl
    ).

answer(sibling(X,Y)) :-
    ( sibling(X,Y) ->
        write('Yes, they are siblings.'), nl
    ;
        write('No, they are not siblings.'), nl
    ).

answer(grandparent(X,Y)) :-
    ( grandparent(X,Y) ->
        write('Yes, correct.'), nl
    ;
        write('No, wrong.'), nl
    ).

answer(_) :-
    write('I do not understand.'), nl.




They must be typed in console like this:

father(john,paul).
mother(lisa,mary).
sibling(paul,mary).
grandparent(john,david).
stop.


OUTPUT:

FAMILY CHATBOT STARTED
Type a query like father(john,paul).
Type stop. to exit.
Yes, correct.
Yes, correct.
Yes, correct.
Yes, correct.
GoodBye!
      
      `
    },
    {
      id: 7.7,
      question: "7. Write a program to solve N-Queens problem using Prolog.",
      answer: "",
      codeExample: `
:- initialization(main).

main :-
    N = 4,                          
    nqueens(N, Solution),
    write('Solution = '), write(Solution), nl.

% -------- LOGIC --------

nqueens(N, Solution) :-
    length(Solution, N),
    place_queens(Solution, N).

place_queens([], _).
place_queens([Col|Rest], N) :-
    place_queens(Rest, N),
    between(1, N, Col),
    safe(Col, Rest, 1).

safe(_, [], _).
safe(Col, [C|Rest], Dist) :-
    Col =\\= C,
    abs(Col - C) =\\= Dist,
    Dist1 is Dist + 1,
    safe(Col, Rest, Dist1).


    
run this ok

?- nqueens(4, Solution).
      
      `
    },
    {
      id: 8.8,
      question: "8. Write a program to solve 8 puzzle problem using Prolog.",
      answer: "",
      codeExample: `
/* 8 Puzzle Problem */

% -------- GOAL --------
goal([[1,2,3],
      [4,5,6],
      [7,8,0]]).

% -------- MOVES --------

% LEFT
move([[A,0,C],[D,E,F],[G,H,I]],
     [[0,A,C],[D,E,F],[G,H,I]]).
move([[A,B,0],[D,E,F],[G,H,I]],
     [[A,0,B],[D,E,F],[G,H,I]]).

move([[A,B,C],[D,0,F],[G,H,I]],
     [[A,B,C],[0,D,F],[G,H,I]]).
move([[A,B,C],[D,E,0],[G,H,I]],
     [[A,B,C],[D,0,E],[G,H,I]]).

move([[A,B,C],[D,E,F],[G,0,I]],
     [[A,B,C],[D,E,F],[0,G,I]]).
move([[A,B,C],[D,E,F],[G,H,0]],
     [[A,B,C],[D,E,F],[G,0,H]]).

% RIGHT
move([[0,B,C],[D,E,F],[G,H,I]],
     [[B,0,C],[D,E,F],[G,H,I]]).
move([[A,0,C],[D,E,F],[G,H,I]],
     [[A,C,0],[D,E,F],[G,H,I]]).

move([[A,B,C],[0,E,F],[G,H,I]],
     [[A,B,C],[E,0,F],[G,H,I]]).
move([[A,B,C],[D,0,F],[G,H,I]],
     [[A,B,C],[D,F,0],[G,H,I]]).

move([[A,B,C],[D,E,F],[0,H,I]],
     [[A,B,C],[D,E,F],[H,0,I]]).
move([[A,B,C],[D,E,F],[G,0,I]],
     [[A,B,C],[D,E,F],[G,I,0]]).

% UP
move([[A,B,C],[0,E,F],[G,H,I]],
     [[0,B,C],[A,E,F],[G,H,I]]).
move([[A,B,C],[D,E,F],[0,H,I]],
     [[A,B,C],[0,E,F],[D,H,I]]).

move([[A,B,C],[D,0,F],[G,H,I]],
     [[A,0,C],[D,B,F],[G,H,I]]).
move([[A,B,C],[D,E,F],[G,0,I]],
     [[A,B,C],[D,0,F],[G,E,I]]).

% DOWN
move([[0,B,C],[D,E,F],[G,H,I]],
     [[D,B,C],[0,E,F],[G,H,I]]).
move([[A,B,C],[0,E,F],[G,H,I]],
     [[A,B,C],[G,E,F],[0,H,I]]).

move([[A,0,C],[D,E,F],[G,H,I]],
     [[A,E,C],[D,0,F],[G,H,I]]).
move([[A,B,C],[D,0,F],[G,H,I]],
     [[A,B,C],[D,H,F],[G,0,I]]).

% -------- PRINT --------

print_state([R1,R2,R3]) :-
    write(R1), nl,
    write(R2), nl,
    write(R3), nl, nl.

print_path([]).
print_path([H|T]) :-
    print_state(H),
    write('-----'), nl,
    print_path(T).

% -------- SOLVE --------

solve(State, Path) :-
    goal(State),
    write('Solution Path:'), nl,
    reverse([State|Path], FinalPath),
    print_path(FinalPath), !.

solve(State, Path) :-
    move(State, Next),
    \\+ member(Next, Path),
    solve(Next, [State|Path]).

% -------- MAIN --------

:- initialization(main).

main :-
    Start = [[1,2,3],
             [4,5,6],
             [0,7,8]],
    solve(Start, []).
      
      `
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
