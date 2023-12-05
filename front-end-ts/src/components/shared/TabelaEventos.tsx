import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import axios from "axios";


   
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
   
  const TABLE_HEAD = ["Id","Nome do Evento", "Data", "Hora",  "Local do Evento","Ações"];
   

  
  export function TabelaEventos() {
    const navigate = useNavigate()
    const [eventos, setEventos] = useState(null);
    useEffect(() => {
      // Função assíncrona para realizar a requisição GET
  
  
      fetchData();
  
    }, []);
    const fetchData = async () => {
      try {
        const resposta = await axios.get('http://localhost:3000/eventos');
 
        setEventos(resposta.data);
      } catch (erro) {
        console.error('Erro ao buscar dados do backend:', erro);
      }
    };
    function openVendorModal(){
        navigate('/novo-evento')
    }
    async function removerEvento(evento){
      const result = await axios.delete(`http://localhost:3000/eventos/${evento.id}`);
      fetchData();
    }
    return (
        <div className="overflow-y-auto my-15">
        
      <div className="flex justify-between items-center mb-4">
      <h2 className="h3-bold text-black mt-3">Listagem de Eventos</h2>
      <Button
                        type="button"
                        title="Novo Cadastro"
                        onClick={openVendorModal}
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
        {eventos && eventos.map((evento, index) => (
            <tr key={index}>
              <td className="text-black">{evento.id}</td>
                <td className="text-black">{evento.nome}</td>
                <td className="text-black">{evento.data}</td>
                <td className="text-black">{evento.horario}</td>
                <td className="text-black">{evento.local}</td>
                <td>
                <button onClick={()=>removerEvento(evento)} className="btn btn-outline btn-error btn-xs">remover</button>
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
