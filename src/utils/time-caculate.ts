const getNewsDate = (date: string) => {
    var b = new Date()
    var offset = b.getTime() - new Date(date).getTime(); // lấy độ lệch của 2 mốc thời gian, đơn vị tính là millisecond
    if (offset < 60000) {
        return Math.round(offset / 1000) + " seconds ago";
    } else if (offset < 3600000) {
        return Math.round(offset / 1000 / 60) + " mins ago";
    } else if (offset < 86400000) {
        return Math.round(offset / 1000 / 60 / 60) + " hours ago";
    } else if (offset >= 86400000) {
        var days = Math.round(offset / 1000 / 60 / 60 / 24)
        if (days === 1) return "Yesterday"
        else return Math.round(offset / 1000 / 60 / 60 / 24) + " days ago";
    }
}

export { getNewsDate }