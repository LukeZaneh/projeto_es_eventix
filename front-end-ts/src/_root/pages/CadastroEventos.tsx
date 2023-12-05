import { TabelaEventos } from "../../components/shared/TabelaEventos";
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
                    <TabelaEventos />
                </div>
            </div>
            
        </div>
    )
}

export default CadastroEventos
  