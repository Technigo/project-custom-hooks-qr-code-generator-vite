import { useLayoutEffect, useState } from "react"



export const Theme = () => {
  const [theme, setTheme] = useState("light")

  useLayoutEffect(() => {
    document.body.className = theme;
    return () => {
      document.body.className = "";
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }
  return (


    <button className={theme} onClick={toggleTheme}> Theme</button>
  )
}
