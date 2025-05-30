import { Agent } from "@voltagent/core";
import { VercelAIProvider } from "@voltagent/vercel-ai";

import { openai } from "@ai-sdk/openai";
import { mcpConfig } from "./mcpConfig";

async function main() {
  const allTools = await mcpConfig.getTools();

  const agent = new Agent({
    name: "my-agent-app",
    instructions: "A helpful assistant that answers questions without using tools",
    llm: new VercelAIProvider(),
    model: openai("gpt-4o-mini"),
    tools: allTools,
  });

  const res = await agent.generateText('LAPRASで職歴を取得して。その結果を出力して')
  console.log(res.text)
}


main().catch(console.error).finally(async () => {
  await mcpConfig.disconnect()
});
