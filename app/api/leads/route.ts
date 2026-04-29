import { NextRequest, NextResponse } from 'next/server'

// In-memory store for demo (resets on server restart)
// Replace with Supabase / MongoDB / Prisma in production
const leads: Record<string, unknown>[] = []

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, company, domain, candidates, deliveryMode, location } = body

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, company' },
        { status: 400 }
      )
    }

    const lead = {
      id: crypto.randomUUID(),
      name,
      email,
      phone: phone ?? '',
      company,
      domain: domain ?? '',
      candidates: candidates ?? '',
      deliveryMode: deliveryMode ?? '',
      location: location ?? '',
      createdAt: new Date().toISOString(),
    }

    leads.push(lead)

    console.log(`[Leads API] New lead captured (#${leads.length}):`, lead)

    return NextResponse.json(
      { success: true, message: 'Lead captured successfully', id: lead.id },
      { status: 201 }
    )
  } catch (err) {
    console.error('[Leads API] Error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ leads, count: leads.length })
}
