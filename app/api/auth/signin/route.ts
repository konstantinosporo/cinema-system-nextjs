import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

// Handle POST requests
export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    
    // Find the user by email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Compare the password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Return user data or token
    return NextResponse.json({ message: 'Sign-in successful', user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error signing in' }, { status: 500 });
  }
}
