import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
    try {
        const payload = await request.json()

        // Log the webhook event
        console.log('GGCheckout Webhook received:', payload.event)

        // Extract customer data
        const { customer, payment } = payload

        // Only process paid events
        if (!payment.status || !['approved', 'paid'].includes(payment.status.toLowerCase())) {
            console.log(`Payment status is ${payment.status}, not granting access yet`)
            return NextResponse.json({
                success: true,
                message: 'Event received but payment not completed'
            })
        }

        if (!customer.email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            )
        }

        // Upsert user in database
        const { data, error } = await supabase
            .from('users')
            .upsert({
                email: customer.email.toLowerCase(),
                name: customer.name || 'Usuário',
                status: 'active'
            }, {
                onConflict: 'email'
            })
            .select()

        if (error) {
            console.error('Supabase error:', error)
            return NextResponse.json(
                { error: 'Database error', details: error.message },
                { status: 500 }
            )
        }

        console.log('User created/updated:', customer.email)

        return NextResponse.json({
            success: true,
            message: 'User access granted',
            user: data
        })

    } catch (error) {
        console.error('Webhook error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
