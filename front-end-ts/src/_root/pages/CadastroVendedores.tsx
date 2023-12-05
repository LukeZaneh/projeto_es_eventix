import Formulario from "../../components/shared/Formulario"
import FormularioVendedor from "../../components/shared/FormularioVendedor"

const CadastroVendedores = () => {
    return (
        <div className="p-10 ml-4 text-black">
            <h2 className="h2-bold my-7">
                Cadastro de Vendedor
            </h2>
            <div>
                <FormularioVendedor />
            </div>
        </div>
    )
}

export default CadastroVendedores