import { NextResponse } from 'next/server';
import { isbot } from 'isbot'; // Correct import

// Function to check if request is from a bot
function isCrawler(req) {
    const userAgent = req.headers.get('user-agent') || '';
    return isbot(userAgent);
}

export function middleware(req) {
    if (isCrawler(req)) {
        const url = req.nextUrl.clone();
        url.pathname = '/bot';  // Redirect to bot-specific content
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
    matcher: '/:path*',
};
