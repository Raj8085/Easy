import { NextResponse } from 'next/server';
import axios from 'axios';
import { isbot } from 'isbot'; // Correct import

const trustedBots = ['Googlebot', 'Bingbot', 'YandexBot'];

async function checkIP(ip) {
    try {
        if (!ip) return false; // Handle empty IP cases
        const response = await axios.get(`https://ipinfo.io/${ip}/json`);
        return trustedBots.some(bot => response.data.org?.includes(bot));
    } catch (error) {
        console.error("IP check error:", error.message);
        return false;
    }
}

export async function GET(req) {
    const userAgent = req.headers.get('user-agent') || '';
    const ip = req.headers.get('x-forwarded-for') || '';

    if (isbot(userAgent)) {
        const isVerifiedBot = await checkIP(ip);
        return NextResponse.json({ isBot: isVerifiedBot });
    }

    return NextResponse.json({ isBot: false });
}
