export async function GET() {
    let users = [
        {
            id: 1,
            name: "Manish",
            email: "nJrCk@example.com"
        },
        {
            id: 2,
            name: "Manish02",
            email: "nJrCk11@example.com"
        },
    ];
    
    let data = JSON.stringify(users);

    return new Response(data, {status: 200});
}