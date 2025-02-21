import { NextResponse } from "next/server";

// Define the users array (in-memory storage)
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

// PATCH handler for updating a user's name
export async function PATCH(request, { params }) {
    try {
        // Parse the JSON body from the request
        const body = await request.json();

        // Extract the ID from the dynamic route parameter
        const userId = parseInt(params.id);

        // Find the index of the user with the matching ID
        const index = users.findIndex((user) => user.id === userId);

        // If the user is not found, return a 404 response
        if (index === -1) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        // Update the user's name while keeping other properties intact
        users[index] = {
            ...users[index], // Preserve existing properties
            name: body.name  // Update the name
        };

        // Return a success response with the updated user
        return NextResponse.json(
            { message: 'User name updated successfully', user: users[index] },
            { status: 200 }
        );
    } catch (error) {
        // Handle errors (e.g., invalid JSON)
        return NextResponse.json(
            { error: 'Invalid JSON or server error' },
            { status: 500 }
        );
    }
}