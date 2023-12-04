import { Outlet } from "react-router-dom"
import LeftSideBar from "../components/shared/LeftSideBar"

const RootLayout = () => {
    return (
        <div className="w-full md:flex">
            {/* Aqui podemos colocar uma função do typescript q é como se fosse um if else pra saber */}
            {/* caso o usuário tenha clicado em admin, mostrar o componente LeftSideBarAdmin (que não existe ainda) */}
            {/* se ele clicou, mostrar o sidebar do admin, se clicou em organizador, o do organizador e assim vai */}
            <LeftSideBar />

            <section className="flex flex-1 h-full">
                <Outlet />
            </section>
        </div>
    )
}

export default RootLayout