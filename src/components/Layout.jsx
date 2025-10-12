import React from "react"

function Layout({children, className = ""}) {
    return (
        <div
            className={`z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 
      md:p-12 sm:p-8 ${className}`}
        >
            {children}{" "}
        </div>
    )
}

Layout.propTypes = {}

export default Layout
