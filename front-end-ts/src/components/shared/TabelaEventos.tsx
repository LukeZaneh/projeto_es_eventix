import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";


   
  const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Monitored",
      value: "monitored",
    },
    {
      label: "Unmonitored",
      value: "unmonitored",
    },
  ];
   
  const TABLE_HEAD = ["Nome do Evento", "Local do Evento", "Cidade", "Estado", "Data", "Hora", "Número de Ingressos", "Valor do Ingresso", "Ações"];
   
  const DadosEventos = [
    {
      nomeEvento: 'Evento 1',
      localEvento: 'Local 1',
      cidade: 'Cidade 1',
      estado: 'Estado 1',
      data: '01/01/2023',
      hora: '18:00',
      numeroIngressos: '100',
      valorIngresso: '20.00',
    },
    {
      nomeEvento: 'Evento 2',
      localEvento: 'Local 2',
      cidade: 'Cidade 2',
      estado: 'Estado 2',
      data: '02/01/2023',
      hora: '20:00',
      numeroIngressos: '150',
      valorIngresso: '25.00',
    },
    // Adicione mais eventos conforme necessário
  ];
  
  export function TabelaEventos() {
    const navigate = useNavigate()

    function registerVendor(){
        navigate('/novo-evento')
    }

    return (
        <div className="overflow-y-auto my-15">
        
      <div className="flex justify-between items-center mb-4">
      <h2 className="h3-bold text-black mt-3">Listagem de Eventos</h2>
      <Button
                        type="button"
                        title="Novo Cadastro"
                        onClick={registerVendor}
                        variant="btn btn-outline btn-warning"
                    />       
       
      </div>
      <table className="table">
      <thead>
        <tr>
          {TABLE_HEAD.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {DadosEventos.map((evento, index) => (
            <tr key={index}>
                <td className="text-black">{evento.nomeEvento}</td>
                <td className="text-black">{evento.localEvento}</td>
                <td className="text-black">{evento.cidade}</td>
                <td className="text-black">{evento.estado}</td>
                <td className="text-black">{evento.data}</td>
                <td className="text-black">{evento.hora}</td>
                <td className="text-black">{evento.numeroIngressos}</td>
                <td className="text-black">{evento.valorIngresso}</td>
                <td>
                <button className="btn btn-outline btn-error btn-xs">remover</button>
                </td>
            </tr>
            ))}
      </tbody>
      <tfoot>
        <tr>
          {TABLE_HEAD.map((footer, index) => (
            <th key={index}>{footer}</th>
          ))}
        </tr>
      </tfoot>
    </table>
      </div>
    );
  }