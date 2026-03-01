import { useState, useEffect } from 'react';
import { RefreshCw, Twitter } from 'lucide-react';

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" }
];

const backgroundColors = [
  'bg-gradient-to-br from-blue-500 to-blue-700',
  'bg-gradient-to-br from-emerald-500 to-emerald-700',
  'bg-gradient-to-br from-rose-500 to-rose-700',
  'bg-gradient-to-br from-amber-500 to-amber-700',
  'bg-gradient-to-br from-cyan-500 to-cyan-700',
  'bg-gradient-to-br from-teal-500 to-teal-700',
  'bg-gradient-to-br from-orange-500 to-orange-700',
  'bg-gradient-to-br from-pink-500 to-pink-700',
  'bg-gradient-to-br from-slate-600 to-slate-800',
  'bg-gradient-to-br from-lime-500 to-lime-700'
];

function App() {
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);
  const [backgroundColor, setBackgroundColor] = useState<string>(backgroundColors[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomItem = <T,>(array: T[], exclude?: T): T => {
    let item: T;
    do {
      item = array[Math.floor(Math.random() * array.length)];
    } while (item === exclude && array.length > 1);
    return item;
  };

  const generateNewQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const newQuote = getRandomItem(quotes, currentQuote);
      const newBackground = getRandomItem(backgroundColors, backgroundColor);
      setCurrentQuote(newQuote);
      setBackgroundColor(newBackground);
      setIsAnimating(false);
    }, 300);
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text="${encodeURIComponent(
      currentQuote.text
    )}" - ${encodeURIComponent(currentQuote.author)}`;
    window.open(twitterUrl, '_blank');
  };

  useEffect(() => {
    generateNewQuote();
  }, []);

  return (
    <div className={`min-h-screen ${backgroundColor} flex items-center justify-center p-4 transition-all duration-700 ease-in-out`}>
      <div className="max-w-3xl w-full">
        <div
          className={`bg-white rounded-2xl shadow-2xl p-8 md:p-12 transform transition-all duration-300 ${
            isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
          }`}
        >
          <div className="mb-8">
            <svg className="w-12 h-12 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-2xl md:text-3xl font-serif text-gray-800 leading-relaxed mb-6">
              {currentQuote.text}
            </p>
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              — {currentQuote.author}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <button
              onClick={generateNewQuote}
              disabled={isAnimating}
              className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw className={`w-5 h-5 ${isAnimating ? 'animate-spin' : ''}`} />
              New Quote
            </button>
            <button
              onClick={shareToTwitter}
              className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Twitter className="w-5 h-5" />
              Share to Twitter
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-white text-sm font-medium opacity-90">
            Click for inspiration
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
