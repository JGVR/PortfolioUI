'use client';

import ChatBotModal from "@/components/ChatBotModal";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { useState } from "react";

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>){
  const [isChatModalVisible, setIsChatModalVisible] = useState(false);

  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" rel="stylesheet"/>
      </head>
      <body className="h-full w-full">
        <NavBar />
        <main className="h-full w-full bg-gradient-to-b from-prussian-blue from-40% to-lapis-lazuli">
          {children}
          <div className="fixed bottom-14 right-10">
            <TbMessageChatbotFilled className="h-12 w-12 text-amber hover:opacity-80 cursor-pointer" onClick={() => setIsChatModalVisible(true)}/>
          </div>
          <ChatBotModal isVisible={isChatModalVisible} setIsVisible={setIsChatModalVisible}/>
        </main>
      </body>
    </html>
  );
}
