import { useResolvedPath } from "react-router-dom"
import { useGetNameByPath } from "./hooks/useGetNameByPath"

export const Header = () => {
  const { pathname } = useResolvedPath()
  return (
    <div className="h-16 w-full border-b bg-surface flex justify-between px-3 md:px-5 items-center">
      <h3 className="text-xl font-semibold">{useGetNameByPath(pathname.replace(/[/]/g, ""))}</h3>
    </div>
  )
}