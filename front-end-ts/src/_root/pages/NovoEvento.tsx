import Formulario from "../../components/shared/Formulario"

const NovoEvento = () => {
    return (
        <div className="p-10 ml-4 text-black">
            <h2 className="h2-bold">
                Cadastro de Eventos
            </h2>
            <div>
                <Formulario />
            </div>
        </div>
    )
}

export default NovoEvento