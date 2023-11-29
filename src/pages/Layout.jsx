import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar/Sidebar"

export const Layout = ({ children }) => {

  return (
    <main className="flex md:text-sm min-h-screen h-full text-base no-srollbar bg-background font-Montserrat no-scrollbar">
      <Sidebar />
      <div className="w-full">
        <Header />
        <section className="overflow-y-scroll h-screenLayout">
          { children }
        </section>
      </div>
    </main>
  )
}