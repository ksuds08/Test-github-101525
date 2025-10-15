import handler from '../index';


describe('Cloudflare Worker Fetch Handler', () => {
    it('should return correct HTML response', async () => {
        const request = new Request('https://example.com');
        const response = await handler(request);

        expect(response.status).toBe(200);
        const text = await response.text();
        expect(text).toBe('<h1>Hello from Cloudflare Worker!</h1>');
        expect(response.headers.get('Content-Type')).toBe('text/html');
    });
});
