import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function POST(request: Request) {
  await dbConnect();

  try {
    const body = await request.json();
    const user = new User(body);
    await user.save();
    const token = await user.generateAuthToken();
    return NextResponse.json({ user, token }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Unable to create user' }, { status: 400 });
  }
}