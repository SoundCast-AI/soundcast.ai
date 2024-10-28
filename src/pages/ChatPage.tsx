import { useEffect, useState } from "react";
import { Send, Phone } from "lucide-react";
import { chatWithInfluencerByID } from "../apis/influencer-apis";
import CircularLoader from "../components/circular-loader";
import { useSearchParams } from "react-router-dom";
import { Character } from "../types/types";
import { characters } from "../utils/data";

interface Message {
  sender: string;
  content: string;
  avatar?: string;
  timestamp?: string;
}

function ChatPage() {
  const [searchParams] = useSearchParams();
  const [character, setCharacter] = useState<Character | null | undefined>(
    null
  );

  const [messages, setMessages] = useState<Message[]>([]);

  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const id = searchParams.get("id");

    if (!id) return;

    const character = characters.find(
      (character) => character.id === Number(id)
    );
    setCharacter(character);

    return () => {};
  }, [searchParams]);

  useEffect(() => {
    if (!character) return;

    setMessages([
      {
        sender: "bot",
        content: character.welcomeMessage,
        avatar: character.image,
      },
    ]);
  }, [character]);

  async function handleSubmit(e: React.FormEvent) {
    try {
      e.preventDefault();
      if (!inputValue.trim()) return;

      setIsLoading(true);

      setMessages((prev) => [
        ...prev,
        {
          sender: "user",
          content: inputValue,
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
      setInputValue("");

      const botResponse = await chatWithInfluencerByID({
        id: "1",
        message: inputValue,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          content: botResponse,
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (character === null) return <CircularLoader />;
  if (character === undefined) return <div>Character not found</div>;

  return (
    <div className="bg-black h-screen flex flex-col overflow-auto">
      <div className="flex justify-center pt-10">
        <img
          src={character.image}
          alt=""
          className="rounded-full h-[8rem] w-[8rem] md:h-[11rem] md:w-[11rem] shadow-2xl border-4 border-gray-800"
        />
      </div>

      <h1 className="text-white text-2xl md:text-3xl font-bold text-center pt-4">
        {character.name}
      </h1>

      <h2 className="text-gray-400 text-center">{character.description}</h2>

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

      {isLoading && <CircularLoader />}

      <form onSubmit={handleSubmit} className="flex justify-center m-4">
        <fieldset
          className="flex items-center space-x-3 w-full max-w-2xl px-4"
          disabled={isLoading}
        >
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
        </fieldset>
      </form>
    </div>
  );
}

export default ChatPage;
