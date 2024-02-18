import Server from "next/server";


export async function GET() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Log the fetched data

        return Server.NextResponse.json(data);

    } catch (error) {
        console.error(error);
        return Server.NextResponse({
            status: 500,
            headers: {
                'Content-Type': 'text/plain',
            },
        });
    }

}