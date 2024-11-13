import {
  chatWithInfluencerByID,
  getAllInfluencers,
  getInfluencerByID,
} from "@/lib/character-apis";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "@/hooks/use-toast";

interface TMessage {
  sender: string;
  content: string;
  timestamp?: string;
}

export default function ChatPage(props: TInfluencer) {
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<TMessage[]>([
    {
      sender: "bot",
      content: props.welcomeText,
      timestamp: new Date().toISOString(),
    },
  ]);

  async function handleSendMessage(e?: FormEvent) {
    try {
      e?.preventDefault();
      if (!inputMessage.trim()) return;

      setIsLoading(true);

      setMessages((prev) => [
        ...prev,
        {
          sender: "user",
          content: inputMessage,
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);

      setInputMessage("");

      const botResponse = await chatWithInfluencerByID({
        id: `${props.id} `,
        message: inputMessage,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          content: botResponse,
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    } catch (error: unknown) {
      console.error("Error sending message", error);
      toast({
        description: "Something went wrong, please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-background">
      {/* Left Panel - Bot Profile */}
      <div className="w-full md:w-1/4 p-4 bg-secondary">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={props.imageUrl} alt="Bot Avatar" />
            <AvatarFallback>BOT</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold">AI Replica</h2>
          <p className="text-center text-muted-foreground">{props.name}</p>
        </div>
      </div>

      {/* Right Panel - Chat Interface */}
      <div className="flex flex-col w-full md:w-3/4">
        {/* Chat Messages */}
        <ScrollArea className="flex-grow p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`max-w-[70%] p-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-grow"
              disabled={isLoading}
            />
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                toast({
                  description: "Call support coming soon...",
                });
              }}
            >
              <Phone className="h-4 w-4" />
              <span className="sr-only">Call</span>
            </Button>
            <Button
              size="icon"
              onClick={handleSendMessage}
              disabled={isLoading}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext<{
    id: string;
  }>
): Promise<GetStaticPropsResult<TInfluencer>> {
  if (!context.params?.id) {
    return {
      notFound: true,
    };
  }

  const character = await getInfluencerByID(context.params?.id);

  if (!character) {
    return {
      notFound: true,
    };
  }

  return {
    props: character,
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  try {
    const characters = await getAllInfluencers();

    return {
      paths: characters.map((character: TInfluencer) => ({
        params: { id: character.id.toString() },
      })),
      fallback: false,
    };
  } catch (e: unknown) {
    console.log("Error fetching characters", e);

    return {
      paths: [],
      fallback: "blocking",
    };
  }
}
