"use client"

import * as React from "react"
import {
    CaretSortIcon,
    CheckIcon,
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/form-elements/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"


import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Link, useParams } from "@tanstack/react-router"
import { ArrowRightCircleIcon } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import useAuth from "@/hooks/auth/useAuth"
import { getStoresByUserId } from "./widgets/stores/api/getStoresByUserId"

const groups = [
    {
        label: "Stores",
        stores: [
            {
                label: "",
                value: "",
            },
        ],
    },
]

type Store = (typeof groups)[number]["stores"][number]

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps { }

export default function TeamSwitcher({ className }: StoreSwitcherProps) {
    const { slug } = useParams({
        from: '/store/$slug'
    })
    const { auth } = useAuth()
    const { data: storesData, } = useQuery({ queryKey: ['STORES'], queryFn: () => getStoresByUserId(auth) })
    const [open, setOpen] = React.useState(false)
    const [selectedTeam, setSelectedTeam] = React.useState<Store>(
        groups[0].stores[0]
    )

    const [stores, setStores] = React.useState<{
        label: string;
        stores: {
            label: string;
            value: string;
        }[];
    }[]>([])

    React.useEffect(() => {
        // we gotta check if the slug is undefined we show a text showing 'Switch stores'

        if (!slug) {
            setSelectedTeam({
                label: "Switch stores",
                value: ""
            })
        }

        if (slug) {
            setSelectedTeam({
                label: slug,
                value: slug
            })
        }
    }, [slug])

    React.useEffect(() => {
        if (storesData?.stores) {
            const slugs = storesData.stores.map((store) => ({ label: store.name, value: store.slug }))
            setStores([{ label: "Stores", stores: slugs }])
        }
    }, [storesData])
    console.log(stores, 'slug')

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    aria-label="Select a team"
                    className={cn("w-[200px] justify-between", className)}
                >
                    <Avatar className="mr-2 h-5 w-5">
                        <AvatarImage
                            src={`https://avatar.vercel.sh/${selectedTeam.value}.png`}
                            alt={selectedTeam.label}
                        />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    {selectedTeam.label}
                    <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandList>
                        <CommandInput placeholder="Search team..." />
                        <CommandEmpty>No team found.</CommandEmpty>
                        {stores.map((group) => (
                            <CommandGroup key={group.label} heading={group.label}>
                                {group.stores.map((team, key) => {
                                    console.log(team, 'team')
                                    return (
                                        <Link to={`/store/$slug`} key={key} params={{
                                            slug: team.value
                                        }}>
                                            <CommandItem
                                                onSelect={() => {
                                                    setSelectedTeam(team)
                                                    setOpen(false)
                                                }}
                                                className="text-sm cursor-pointer"
                                            >
                                                <Avatar className="mr-2 h-5 w-5">
                                                    <AvatarImage
                                                        src={`https://avatar.vercel.sh/${team.value}.png`}
                                                        alt={team.label}
                                                        className="grayscale"
                                                    />
                                                    <AvatarFallback>SC</AvatarFallback>
                                                </Avatar>
                                                {team.label}
                                                <CheckIcon
                                                    className={cn(
                                                        "ml-auto h-4 w-4",
                                                        selectedTeam.value === team.value
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                    )}
                                                />
                                            </CommandItem>
                                        </Link>
                                    )
                                })}
                            </CommandGroup>
                        ))}
                    </CommandList>
                    <CommandSeparator />
                    <CommandList>
                        <CommandGroup>
                            <Link to="/stores">
                                <CommandItem className="cursor-pointer flex items-center justify-between">
                                    View all
                                    <ArrowRightCircleIcon className="mr-2 h-5 w-5" />
                                </CommandItem>
                            </Link>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}