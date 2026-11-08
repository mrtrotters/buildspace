// app/api/users/route.ts (App Router)
//or pages/api/users.ts (Pages Router, adjust imports/exports for API route handler)

import { db } from "../../src/prisma/db"
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const data = await db.orm.public.User.all();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: "Terjadi kesalahan" }, { status: 500 });
  }
}

// GET /api/users - Get all users
// export async function GET(req: NextRequest) {
//   try {
//     const users = await db.orm.public.User.all();
//     return NextResponse.json({ message: 'found something' }, { status: 200 })
//   } catch (error) {
//     console.error('Error fetching users:', error)
//     return NextResponse.json({ message: 'Failed to fetch users' }, { status: 500 })
//   }
// }

//POST / api / users - Create a new user
// export async function POST(req: NextRequest) {
//   try {
//     const { email, name } = await req.json()

//     if (!email) {
//       return NextResponse.json({ message: 'Email is required' }, { status: 400 })
//     }

//     const newUser = await db.orm.public.User.create({
//       User: {
//         name,
//       },
//     })

//     return NextResponse.json(newUser, { status: 201 })
//   } catch (error: any) {
//     if (error.code === 'P2002') { // Prisma unique constraint violation code
//       return NextResponse.json({ message: 'User with this email already exists' }, { status: 409 })
//     }
//     console.error('Error creating user:', error)
//     return NextResponse.json({ message: 'Failed to create user' }, { status: 500 })
//   }
// }