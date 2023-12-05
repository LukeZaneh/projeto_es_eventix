import { useNavigate } from "react-router-dom";
import CadastrarVenda from "../../_root/pages/CadastrarVenda";


   
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
   
  const TABLE_HEAD = ["id","Nome do Evento", "Data", "Hora", "Local do Evento", "Ações"];
   
  const DadosEventos = [
    {
      idEvento:'0',
      nomeEvento: 'Evento 1',
      data: '01/01/2023',
      hora: '18:00',
      localEvento: 'Local 1',
    },
    {
      idEvento:'1',
      nomeEvento: 'Evento 2',
      data: '02/01/2023',
      hora: '20:00',
      localEvento: 'Local 2',

    },
    // Adicione mais eventos conforme necessário
  ];
  
  export default function TabelaVendas() {
    const navigate = useNavigate()

    function registerVendor(){
      document.getElementById('my_modal_1')?.showModal();
    }

    return (
        <div className="overflow-y-auto my-15">
        
      <div className="flex justify-between items-center mb-4">
      <h2 className="h3-bold text-black mt-3">Lista de Eventos Disponiveis</h2>       
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
              <td className="text-black">{evento.idEvento}</td>
                <td className="text-black">{evento.nomeEvento}</td>
                <td className="text-black">{evento.data}</td>
                <td className="text-black">{evento.hora}</td>
                <td className="text-black">{evento.localEvento}</td>
                <td>
                <button 
                        title="Novo Cadastro"
                        onClick={registerVendor}
                         className="btn btn-outline btn-error btn-xs">Cadastrar Venda</button>
                </td>
            </tr>
            ))}
      </tbody>
      {/* foot */}
      <tfoot>
        <tr>
          {TABLE_HEAD.map((footer, index) => (
            <th key={index}>{footer}</th>
          ))}
        </tr>
      </tfoot>
    </table>
    <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <CadastrarVenda/>
    <div className="modal-action">
      <form method="dialog">
    
        <button className="btn">Fechar</button>
      </form>
    </div>
  </div>
</dialog>
      </div>
    );
  }