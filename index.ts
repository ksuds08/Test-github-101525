// Exporting a default fetch handler for Cloudflare Worker
export default async (request: Request): Promise<Response> => {
    const responseHtml = '<h1>Hello from Cloudflare Worker!</h1>';
    return new Response(responseHtml, {
        headers: { 'Content-Type': 'text/html' },
    });
};