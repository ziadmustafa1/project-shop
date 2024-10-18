import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function POST(request: Request) {
  await dbConnect();

  try {
    const body = await request.json();
    const user = await User.findByCredentials(body.email, body.password);
    const token = await user.generateAuthToken();
    return NextResponse.json({ user, token });
  } catch (error) {
    return NextResponse.json({ error: 'Unable to login' }, { status: 400 });
  }
}