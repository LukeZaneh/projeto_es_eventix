import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const CadastroEventos = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/novo-evento')
    }

    return (
        <div>
            <div className="p-10 ml-4 text-black">
                <div>
                    <h2>Cadastro de Eventos</h2>
                    
                </div>
            </div>
            <div className="flex px-6 py-10 flex-col justify-between mt-12">
                <Button
                        type="button"
                        title="Cadastrar Evento"
                        onClick={handleClick}
                        variant="text-black font-semibold px-3 py-3 bg-[#FEAF00] rounded-lg"
                    />                
            </div>
        </div>
    )
}

export default CadastroEventos
  