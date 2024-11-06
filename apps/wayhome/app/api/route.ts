import { NextResponse } from 'next/server'
 
export async function GET() {
  const response = NextResponse.json({ message: 'hello' });
  response.cookies.set({
    name: 'foo',
    value: 'bar',
    domain: process.env.DOMAIN
  })
  return response
}