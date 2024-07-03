import Link from "next/link";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export function NavBar(){
    return(
        <div className="navBar flex justify-between p-3">
            
            <div className="navBarLeft">
                <Link href="./">TV Shows</Link>
            </div>
            
            <div className="navBarRight">
                <Link href="/">Home </Link>
                |
                <Link href="/about-us"> About </Link>
                 |
                <SignedOut>
                    <SignInButton />
                </SignedOut>

                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>       
        </div>
    )
}