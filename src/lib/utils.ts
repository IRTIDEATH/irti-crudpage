export const formatDate = (datestr: string) => {
    const date = new Date(datestr)
    const formater = new Intl.DateTimeFormat("id-ID", {
        dateStyle: "medium",
        timeStyle: "short"
    })
    return formater.format(date)
}