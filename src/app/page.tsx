"use client";

import { C1Chat } from "@thesysai/genui-sdk";
import "@crayonai/react-ui/styles/index.css";
import { themePresets } from "@crayonai/react-ui";

export default function Home() {
    return (
        <C1Chat
            apiUrl="/api/chat"
            agentName="Ask me anything"
            theme={{ ...themePresets.candy, mode: "dark" }}
        />
    );
}
