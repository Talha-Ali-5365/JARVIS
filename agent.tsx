import React, { useState } from 'react';
import {
  Agent,
  Prompt,
  Action,
} from 'react-agents';
import { z } from 'zod';
import fs from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const FileSystemAgent = () => {
  const [currentDir, setCurrentDir] = useState(process.cwd());

  const execAsync = promisify(exec);

  const fileActions = {
    async readFile(filepath: string) {
      try {
        const fullPath = path.resolve(currentDir, filepath);
        return await fs.readFile(fullPath, 'utf-8');
      } catch (err) {
        return `Error reading file: ${err.message}`;
      }
    },

    async writeFile(filepath: string, content: string) {
      try {
        const fullPath = path.resolve(currentDir, filepath);
        await fs.writeFile(fullPath, content);
        return `Successfully wrote to ${filepath}`;
      } catch (err) {
        return `Error writing file: ${err.message}`;
      }
    },

    async listFiles() {
      try {
        const files = await fs.readdir(currentDir);
        return files.join('\n');
      } catch (err) {
        return `Error listing files: ${err.message}`;
      }
    }
  };

  const terminalActions = {
    async executeCommand(command: string) {
      try {
        // Block potentially dangerous commands
        const blockedCommands = ['rm -rf', 'mkfs', 'dd', '>(', 'sudo'];
        if (blockedCommands.some(cmd => command.includes(cmd))) {
          return 'This command is not allowed for security reasons';
        }

        const { stdout, stderr } = await execAsync(command, {
          cwd: currentDir,
          timeout: 10000 // 10 second timeout
        });

        if (stderr) {
          return `Command executed with warnings:\n${stderr}\nOutput:\n${stdout}`;
        }
        return `Command output:\n${stdout}`;
      } catch (err) {
        return `Error executing command: ${err.message}`;
      }
    }
  };

  return (
    <>
      <Prompt>
        You are a file system assistant. You can:
        - Read files using the readFile action
        - Write files using the writeFile action
        - List directory contents using the listFiles action
        - Execute terminal commands using the terminal action
        
        Current working directory is: {currentDir}
        
        When using these actions, provide helpful feedback about what you're doing.
        Remember to use terminal commands responsibly and safely.
        You can also use terminal to perform version control things using git. 
      </Prompt>

      <Action
        name="readFile"
        description="Read contents of a file"
        schema={z.object({
          filepath: z.string(),
        })}
        handler={async (e) => {
          const filepath = e.data.message.args.filepath;
          const content = await fileActions.readFile(filepath);
          e.data.agent.say(`Content of ${filepath}:\n${content}`);
        }}
      />

      <Action
        name="writeFile" 
        description="Write content to a file"
        schema={z.object({
          filepath: z.string(),
          content: z.string(),
        })}
        handler={async (e) => {
          const { filepath, content } = e.data.message.args;
          const result = await fileActions.writeFile(filepath, content);
          e.data.agent.say(result);
        }}
      />

      <Action
        name="listFiles"
        description="List files in current directory"
        schema={z.object({})}
        handler={async (e) => {
          const files = await fileActions.listFiles();
          e.data.agent.say(`Files in directory:\n${files}`);
        }}
      />

      <Action
        name="terminal"
        description="Execute terminal commands safely"
        schema={z.object({
          command: z.string(),
        })}
        handler={async (e) => {
          const { command } = e.data.message.args;
          const result = await terminalActions.executeCommand(command);
          e.data.agent.say(`Executing: ${command}\n\n${result}`);
        }}
      />
    </>
  );
};

export default function MyAgent() {
  return (
    <Agent>
      <FileSystemAgent />
    </Agent>
  );
}