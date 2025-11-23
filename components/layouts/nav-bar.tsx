import NavigationMenuDemo from "@/components/layouts/center-bar";
import { ModeToggle } from "../mode-toggle";

export default function NavBar(){
    return(
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-4">
    <div className="flex items-center">
        Clash Stats
    </div>
    <div>
        <NavigationMenuDemo/>
    </div>
    <div>
        <ModeToggle/>
    </div>
</div>
    )
}