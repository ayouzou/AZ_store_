import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/form-elements/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useAuth from "@/hooks/auth/useAuth"
import { Link } from "@tanstack/react-router"

export function UserNav() {
    const { auth } = useAuth()
    console.log(auth)
    return (
        <DropdownMenu>

            {
                auth.isAuthenticated ? (
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                                <AvatarFallback>SC</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                ) : <Link from="/login" to="/login" className="text-primary-foreground hover:underline"><Button>
                    Login</Button></Link>
            }
            <LoggedInContent />
        </DropdownMenu>
    )
}

const LoggedInContent = () => {
    const { auth, logout } = useAuth()

    return (
        <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none"> {auth.user?.email.split('@')[0]}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                        {auth.user?.email}
                    </p>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" onClick={() => logout()}>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
        </DropdownMenuContent>
    )
}