"use client"

import { IoSearch } from "react-icons/io5"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"

const Search = () => {

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const {replace} = useRouter()

  // usedebounce digunakan agar saat user ngetik ada delay 330ms setelah itu baru fungsi dijalankan
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)

    // melakukan reset page pada saat melakukan pencarian (reset lagi jadi 1)
    params.set("page", "1")

    // jika ada data pada term (ketikan user), akan di set params nya (nama params nya query) lalu akan di set valuenya dari term
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`)
    // koneksikan apa yang ada di url sesuai apa yang ada di input field
  }, 330)

  return (
    <div className="relative flex flex-1">
        <input type="text"
            className="w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-sm"
            placeholder="Search..."
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get("query")?.toString()}
        />
        <IoSearch className="absolute left-3 top-2 h-5 w-5 text-gray-500"/>
    </div>
  )
}

export default Search