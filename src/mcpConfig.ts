import { MCPConfiguration } from "@voltagent/core";

export const mcpConfig = new MCPConfiguration({
  servers: {
    lapras: {
      type: "stdio",
      command: "npx",
      args: [
        "-y",
        "lapras-inc/lapras-mcp-server"
      ],
      env: { LAPRAS_API_KEY: process.env.LAPRAS_API_KEY || "" },
    },
  },
});
