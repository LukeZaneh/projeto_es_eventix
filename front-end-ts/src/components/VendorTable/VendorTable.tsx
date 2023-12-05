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
   
  const TABLE_HEAD = ["Nome", "Email", "Celular", "CPF"];
   
  const TABLE_ROWS = [
    {
        nome: "João Silva",
        email: "joao@email.com",
        celular: "123-456-7890",
        cpf: "123.456.789-01",
      },
      {
        nome: "Maria Oliveira",
        email: "maria@email.com",
        celular: "987-654-3210",
        cpf: "987.654.321-09",
      },
    
    
  ];
  
  export function VendorTable() {
    const navigate = useNavigate()

    function registerVendor(){
        navigate('/cadastro-vendedor')
    }

    return (
        <div className="overflow-x-auto my-15">
        
      <div className="flex justify-between items-center mb-4">
      <h2 className="h3-bold text-black mt-3">Listagem de Vendedores</h2>
      <Button
                        type="button"
                        title="Novo Cadastro"
                        onClick={registerVendor}
                        variant="btn btn-outline btn-warning"
                    />       
       
      </div>
      <table className="table">
      {/* head */}
      <thead>
        <tr>
          {TABLE_HEAD.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* rows */}
        {TABLE_ROWS.map((row, rowIndex) => (
          <tr key={rowIndex}>
           
            {/* Renderize as outras colunas com base nos dados do objeto */}
            <td className="text-black">{row.nome}</td>
            <td className="text-black">{row.email}</td>
            <td className="text-black">{row.celular}</td>
            <td className="text-black">{row.cpf}</td>
            <th>
              {/* Conteúdo da célula na última coluna */}
              <button className="btn btn-outline btn-error btn-xs">remover</button>
            </th>
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
      </div>
    );
  }