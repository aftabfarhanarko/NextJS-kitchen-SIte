import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {
    const {pathname} = request.nextUrl;
    console.log(pathname);
    if(!pathname.startsWhite("/api/feedback")){
        return NextResponse.json({
            status:4404
        })
    }werwefwefgwefg 234gwefg
    
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
}