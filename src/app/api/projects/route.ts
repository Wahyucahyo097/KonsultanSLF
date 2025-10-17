import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

function isAuthorized(req: Request) {
  // Allow in development for convenience
  if (process.env.NODE_ENV !== 'production') return true
  const secret = process.env.ADMIN_SECRET
  if (!secret) return false
  const header = req.headers.get('x-admin-secret')
  return header === secret
}

export async function GET() {
  try {
    const projects = await db.post.findMany({})
    // If your schema uses a different model for projects, replace above accordingly.
    return NextResponse.json(projects)
  } catch (err) {
    console.error('GET /api/projects error', err)
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const payload = await request.json()
    // Adapt fields to your Project model. Here we store in a generic `Post` model as example.
    const created = await db.post.create({ data: payload })
    return NextResponse.json(created)
  } catch (err) {
    console.error('POST /api/projects error', err)
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}

