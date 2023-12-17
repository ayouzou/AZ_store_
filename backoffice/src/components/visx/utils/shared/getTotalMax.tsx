export const getTotalMax = (d: any) => {
    const values = []

    for (const element of d) {
        let keyTotal = 0
        for (const key in element) {

            if (typeof element[key] === 'number') {
                keyTotal += element[key]
            }
        }
        values.push(keyTotal)
    }

    const max = Math.max(...values)
    return max
}