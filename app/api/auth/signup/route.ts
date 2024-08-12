import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const saltRounds = 10;

// Handle POST requests
export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the user with hashed password
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
}
