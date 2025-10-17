import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

function isAuthorized(req: Request) {
  if (process.env.NODE_ENV !== 'production') return true
  const secret = process.env.ADMIN_SECRET
  if (!secret) return false
  const header = req.headers.get('x-admin-secret')
  return header === secret
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const id = url.pathname.split('/').pop()
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    const item = await db.post.findUnique({ where: { id } })
    if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(item)
  } catch (err) {
    console.error('GET /api/projects/[id] error', err)
    return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  if (!isAuthorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const url = new URL(request.url)
    const id = url.pathname.split('/').pop()
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    const payload = await request.json()
    const updated = await db.post.update({ where: { id }, data: payload })
    return NextResponse.json(updated)
  } catch (err) {
    console.error('PUT /api/projects/[id] error', err)
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  if (!isAuthorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const url = new URL(request.url)
    const id = url.pathname.split('/').pop()
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    const deleted = await db.post.delete({ where: { id } })
    return NextResponse.json(deleted)
  } catch (err) {
    console.error('DELETE /api/projects/[id] error', err)
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
  }
}
