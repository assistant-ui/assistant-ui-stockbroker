"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useLangGraphRuntime } from "@assistant-ui/react-langgraph";
import { useRef } from "react";
import { createThread, sendMessage } from "@/lib/chatApi";

export function MyRuntimeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const threadIdRef = useRef<string | undefined>();
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

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}
