import db from '../../../utils/dbConnect';
import Contact from '../../../models/contact';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    try {
        const body = await req.json();
        await db();

        await Contact.create(body);

        return NextResponse.json({
            message:"message sent suceessfully!"
        },{
            status:200
        })
    } catch (e) {
        return NextResponse.json(
            {message: "server error, please try again"},
            {status:500}
        )
    }
}