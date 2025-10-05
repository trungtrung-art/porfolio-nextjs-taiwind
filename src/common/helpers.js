export function detectTouchDevice() {
    if (typeof window === "undefined") return false
    return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
    )
}

export function generateSkillPositions(
    skills,
    radiusRange = [10, 30],
    minDistance = 8,
    padding = { x: 24, y: 12 },
) {
    const result = []

    const vw = 1920
    const vh = 1080

    // Convert px → vw/vh
    const paddingX = (padding.x / vw) * 100
    const paddingY = (padding.y / vh) * 100
    const paddingBuffer = Math.max(paddingX, paddingY)

    function isTooClose(x, y) {
        return result.some((prev) => {
            const dx = parseFloat(prev.x) - x
            const dy = parseFloat(prev.y) - y
            const distance = Math.sqrt(dx * dx + dy * dy)
            return distance < minDistance + paddingBuffer
        })
    }

    for (const skill of skills) {
        let x, y
        let tries = 0
        const maxTries = 500

        do {
            const angle = Math.random() * 2 * Math.PI
            const radius =
                Math.random() * (radiusRange[1] - radiusRange[0]) +
                radiusRange[0]

            x = Math.cos(angle) * radius
            y = Math.sin(angle) * radius

            tries++

            if (tries > maxTries) {
                radiusRange[1] += 5
                tries = 0
            }
        } while (isTooClose(x, y))

        result.push({
            ...skill,
            x: `${x.toFixed(2)}vw`,
            y: `${y.toFixed(2)}vw`,
        })
    }

    return result
}

export function calculateYearsFromDate(inputDate) {
    const currentDate = new Date("2025-08-04")

    const [day, month, year] = inputDate.split("/").map(Number)
    const startDate = new Date(year, month - 1, day)

    if (!day || !month || !year || isNaN(startDate)) {
        return "Định dạng ngày không hợp lệ, vui lòng dùng 'DD/MM/YYYY'"
    }

    let years = currentDate.getFullYear() - startDate.getFullYear()
    const currentMonth = currentDate.getMonth()
    const currentDay = currentDate.getDate()
    const startMonth = startDate.getMonth()
    const startDay = startDate.getDate()

    if (
        currentMonth < startMonth ||
        (currentMonth === startMonth && currentDay < startDay)
    ) {
        years--
    }

    return years
}