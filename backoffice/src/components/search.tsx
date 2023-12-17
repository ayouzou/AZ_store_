import { Input } from "@/components/form-elements/input"

export function Search() {
    return (
        <div>
            <Input
                type="search"
                placeholder="Search..."
                className="md:w-[100px] lg:w-[300px]"
            />
        </div>
    )
}