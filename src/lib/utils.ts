export const formatDate = (datestr: string) => {
    const date = new Date(datestr)
    const formater = new Intl.DateTimeFormat("id-ID", {
        dateStyle: "medium",
        timeStyle: "short"
    })
    return formater.format(date)
}


export const generatePagination = (currentPage: number, totalPages: number) => {
    // ini artinya akan dirender dari 1 sampai 7 jika totalpages nya lebih kecil atau sama dengan 7
    if(totalPages <= 7) {
        return Array.from({length: totalPages}, (_, i) => i + 1)
    }

    // jika di halaman kecil samadengan 3
    if(currentPage <= 3) {
        // me return ini (halaman [pertama, kedua, ketiga]) jika di 3 halaman pertama
        return [1, 2, 3, "...", totalPages - 1, totalPages]
    }

    // jika berada di 3 halaman terakhir 
    if(currentPage >= totalPages - 2) {
        return [1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages]
    }

    // jika total pages nya lebih besar dari 7, maka tampilkan
    return [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        // totalpages halaman terakhir
        totalPages
    ]
}