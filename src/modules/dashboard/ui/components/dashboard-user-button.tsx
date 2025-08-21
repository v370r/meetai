import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GeneratedAvatar } from "@/components/generated-avatar";
import { ChevronDownIcon, CreditCardIcon, LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";


export const DashboardUserButton = () => {
    const router = useRouter();
    const isMobile = useIsMobile();

    const { data, isPending } = authClient.useSession();
    if (isPending || !data?.user) {
        return null;
    }

    const onLogout = () => {
        authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/sign-in")
                }
            }
        })
    }


    if(isMobile) {
        return (
            <Drawer>
                <DrawerTrigger>
                {
                    data.user.image ? (
                        <Avatar className="size-9 mr-3">
                            <AvatarImage src={data.user.image} />
                            <AvatarFallback>{data.user.name?.charAt(0)?.toUpperCase()}</AvatarFallback>
                        </Avatar>
                    ) : (
                        <GeneratedAvatar 
                            seed={data.user.name || "User"} 
                            variant="initials" 
                            className="size-9 mr-3"
                        />
                    )
                }
                
                <div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                        {data.user.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                        {data.user.email}
                    </p>
                </div>

                <ChevronDownIcon className="size-4 shrink-0 ml-auto" />
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>{data.user.name}</DrawerTitle>
                        <DrawerTitle>{data.user.email}</DrawerTitle>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button variant="outline" onClick={() => {}}>
                            <CreditCardIcon className="size-4 text-black"/>
                            Billing
                        </Button>
                    </DrawerFooter>
                    <DrawerFooter>
                        <Button variant="outline" onClick={onLogout}>
                            <LogOutIcon className="text-destructive focus:text-destructive cursor-pointer flex items-center justify-between"/>
                            Logout
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        )
    }



    console.log("user data", data.user.image);

    return (
        <DropdownMenu>

            <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center gap-3 bg-white/5 hover:bg-white/10 overflow-hidden transition-colors">
                {
                    data.user.image ? (
                        <Avatar className="size-9 mr-3">
                            <AvatarImage src={data.user.image} />
                            <AvatarFallback>{data.user.name?.charAt(0)?.toUpperCase()}</AvatarFallback>
                        </Avatar>
                    ) : (
                        <GeneratedAvatar 
                            seed={data.user.name || "User"} 
                            variant="initials" 
                            className="size-9 mr-3"
                        />
                    )
                }
                
                <div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                        {data.user.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                        {data.user.email}
                    </p>
                </div>

                <ChevronDownIcon className="size-4 shrink-0 ml-auto" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" side="right" className="w-72">
                    <DropdownMenuLabel>
                        <div className="flex flex-col gap-1">
                            <span className="font-medium truncate">{data.user.name}</span>
                            <span className="text-sm font-normal text-muted-foreground truncate">{data.user.email}</span>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        Profile Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer flex items-center justify-between">
                        Billing
                        <CreditCardIcon className="size-4" />
                    </DropdownMenuItem>
    
                    <DropdownMenuSeparator />
                  <DropdownMenuItem onClick= {onLogout}
                        className="text-destructive focus:text-destructive cursor-pointer flex items-center justify-between">
                        Logout
                        <LogOutIcon className="size-4" />
                    </DropdownMenuItem>
                </DropdownMenuContent>

        </DropdownMenu>
    );
}