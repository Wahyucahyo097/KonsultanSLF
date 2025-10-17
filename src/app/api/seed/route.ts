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

const sampleProjects: Array<any> = [
  {
    title: 'Proyek Pemerintah A',
    content: 'Deskripsi proyek pemerintah A',
    published: true,
    authorId: 'seed'
  },
  {
    title: 'Proyek Komersial B',
    content: 'Deskripsi proyek komersial B',
    published: false,
    authorId: 'seed'
  }
]

export async function POST(request: Request) {
  if (!isAuthorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
  const created: Array<any> = []
    for (const p of sampleProjects) {
      const c = await db.post.create({ data: p })
      created.push(c)
    }
    return NextResponse.json({ created })
  } catch (err) {
    console.error('POST /api/seed error', err)
    return NextResponse.json({ error: 'Failed to seed data' }, { status: 500 })
  }
}
