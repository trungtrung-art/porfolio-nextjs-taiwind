import {useEffect, useState} from "react"

type DeviceType = "mobile" | "tablet" | "desktop"

export function useDeviceType(): DeviceType {
    const getDeviceType = () => {
        const width = window.innerWidth
        if (width < 768) return "mobile"
        if (width < 1024) return "tablet"
        return "desktop"
    }

    const [deviceType, setDeviceType] = useState<DeviceType>(() =>
        typeof window !== "undefined" ? getDeviceType() : "desktop",
    )

    useEffect(() => {
        const handleResize = () => {
            setDeviceType(getDeviceType())
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return deviceType
}
