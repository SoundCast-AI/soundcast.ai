import { useState } from "react";
import ExploreImage from "../assets/exploreimage.png";
import { Send, Phone } from "lucide-react";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      content:
        "Greetings! I'm here to chat and help you stay positive throughout the day. Whether you're feeling down or overwhelmed, I'll be here to support you. How can I brighten your day?",
      avatar: "/api/placeholder/32/32",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setMessages([
      ...messages,
      {
        sender: "user",
        content: inputValue,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
    setInputValue("");
  };

  return (
    <div className="bg-black h-screen flex flex-col">
      <div className="flex justify-center pt-10">
        <img
          src={ExploreImage}
          alt=""
          className="rounded-full h-[8rem] w-[8rem] md:h-[11rem] md:w-[11rem] shadow-2xl border-4 border-gray-800"
        />
      </div>
      <h1 className="text-white text-2xl md:text-3xl font-bold text-center pt-4">
        Interviewer
      </h1>
      <h2 className="text-gray-400 text-center">By @test</h2>

      <div className="flex justify-center items-center flex-1 p-4 md:p-8">
        <div className="w-full max-w-2xl">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`flex items-start max-w-[85%] space-x-2 ${
                  message.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {message.sender === "bot" && (
                  <img
                    src={message.avatar}
                    alt="Avatar"
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-600"
                  />
                )}
                <div
                  className={`${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-100"
                  } rounded-lg p-3 shadow-md break-words`}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex justify-center m-4">
        <div className="flex items-center space-x-3 w-full max-w-2xl px-4">
          <div className="relative flex-1">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Send a message..."
              className="w-full p-3 pl-4 pr-12 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
            ></button>
          </div>
          <button
            type="submit"
            className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          >
            <Send className="w-6 h-6" />
          </button>
          <button
            type="button"
            className="p-3 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200"
          >
            <Phone className="w-6 h-6" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatPage;
