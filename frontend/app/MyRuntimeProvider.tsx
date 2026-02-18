"use client";

import {
  AssistantRuntimeProvider,
  Suggestions,
  useAui,
} from "@assistant-ui/react";
import { useLangGraphRuntime } from "@assistant-ui/react-langgraph";
import { useRef } from "react";
import { createThread, sendMessage } from "@/lib/chatApi";

export function MyRuntimeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const threadIdRef = useRef<string | undefined>(undefined);
  const runtime = useLangGraphRuntime({
    stream: async function* (messages) {
      if (!threadIdRef.current) {
        const { thread_id } = await createThread();
        threadIdRef.current = thread_id;
      }

      const generator = sendMessage({
        threadId: threadIdRef.current,
        messages,
      });

      yield* generator;
    },
  });

  const aui = useAui({
    suggestions: Suggestions([
      {
        title: "Apple Revenue",
        label: "How much did they make?",
        prompt: "How much revenue did Apple make last year?",
      },
      {
        title: "McDonald's",
        label: "Are they profitable?",
        prompt: "Is McDonald's profitable?",
      },
      {
        title: "Tesla Stock",
        label: "Current price",
        prompt: "What's the current stock price of Tesla?",
      },
    ]),
  });

  return (
    <AssistantRuntimeProvider aui={aui} runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}
