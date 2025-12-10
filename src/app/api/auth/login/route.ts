import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json()

        if (!email) {
            return NextResponse.json(
                { error: 'Email é obrigatório' },
                { status: 400 }
            )
        }

        // Check if user exists and is active
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', email.toLowerCase())
            .eq('status', 'active')
            .single()

        if (error || !data) {
            return NextResponse.json(
                { error: 'Email não encontrado ou acesso inativo' },
                { status: 401 }
            )
        }

        return NextResponse.json({
            success: true,
            user: data
        })

    } catch (error) {
        console.error('Login error:', error)
        return NextResponse.json(
            { error: 'Erro interno do servidor' },
            { status: 500 }
        )
    }
}
