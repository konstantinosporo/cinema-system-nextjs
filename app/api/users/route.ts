// app/api/users/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Handle GET requests
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
  }
}

// Handle POST requests (optional)
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const user = await prisma.user.create({ data });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
}

// Handle PUT requests (optional)
export async function PUT(request: Request) {
  try {
    const { id, ...data } = await request.json();
    const user = await prisma.user.update({
      where: { id },
      data,
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating user' }, { status: 500 });
  }
}

// Handle DELETE requests (optional)
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.user.delete({ where: { id } });
    return NextResponse.json({ message: 'User deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting user' }, { status: 500 });
  }
}
