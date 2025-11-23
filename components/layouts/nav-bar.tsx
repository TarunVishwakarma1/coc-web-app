import Navigation from "@/components/layouts/center-bar";
import { ModeToggle } from "../mode-toggle";

import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6 md:gap-8">
                    <div className="text-lg font-semibold">
                        <Link href="/">Clash Stats</Link>
                    </div>
                    <div className="hidden md:block">
                        <Navigation/>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="md:hidden">
                        <Navigation/>
                    </div>
                    <ModeToggle/>
                </div>
            </div>
        </nav>
    )
}