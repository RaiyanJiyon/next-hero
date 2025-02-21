import { NextResponse } from "next/server";

// Define the users array before the GET function
const users = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Alice'
    },
    {
        id: 3,
        name: 'Roman'
    },
];

// Export the GET function
export async function GET() {
    return NextResponse.json({
        users
    })
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { id, name } = body;
    
        if (!id || !name) {
            return NextResponse.json(
                { error: 'both id and name are required' },
                { status: 400 }
            )
        }
    
        users.push(id, name);
    
        return NextResponse.json(
            { message: 'user added successfully', users },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            {message: 'Failed to add user', error},
            {status: 500}
        )
    }


}