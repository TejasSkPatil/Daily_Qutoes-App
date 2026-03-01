1. Frontend: React.js (Vite)
React.js:  This  as the "Brain" of your app. It allows you to build your website using small, reusable "Components" (like the Quote Card or the Button) instead of writing one giant, messy file.

Vite: This is the "Engine" that makes development fast. Older tools were slow, but Vite allows you to see your code changes in the browser almost instantly as you type them.

2. Styling: Tailwind CSS
The "Wardrobe": In traditional coding, you have to write long CSS rules in a separate file.

Utility-First: Tailwind allows you to style your app by adding "nicknames" (classes) directly to your HTML. For example, instead of writing 10 lines of code to make a blue button, you just type bg-blue-500. It makes designing professional-looking sites much faster.

3. Data: Quotable API
The "Library": Your app doesn't actually know any quotes on its own.

The Request: When you click "New Quote," your app sends a message to an external "Library" (the API) on the internet.

The Delivery: The API sends back a piece of data (usually in a format called JSON), which React then catches and displays on your screen.
