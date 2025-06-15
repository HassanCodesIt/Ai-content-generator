import { promises as fs } from 'fs';
import path from 'path';

const usersFilePath = path.join(process.cwd(), 'users.json');

async function readUsers() {
  try {
    const data = await fs.readFile(usersFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      // File does not exist, return empty object
      return {};
    }
    throw error;
  }
}

async function writeUsers(users: any) {
  await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), 'utf8');
}

export async function POST(req: Request) {
  const { type, username, password } = await req.json();

  if (type === 'signup') {
    const users = await readUsers();

    if (users[username]) {
      return new Response(JSON.stringify({ message: 'Username already exists' }), { status: 409 });
    }

    users[username] = password;
    await writeUsers(users);
    return new Response(JSON.stringify({ message: 'User registered successfully' }), { status: 200 });
  } else if (type === 'login') {
    const users = await readUsers();

    if (users[username] && users[username] === password) {
      return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
    }
    return new Response(JSON.stringify({ message: 'Invalid username or password' }), { status: 401 });
  } else {
    return new Response(JSON.stringify({ message: 'Invalid request type' }), { status: 400 });
  }
} 