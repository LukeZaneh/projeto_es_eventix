import FormularioVenda from "../../components/shared/FormularioVenda";

const CadastrarVenda = () => {
  return (
    <div className="text-black flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center  p-6 rounded ">
        <h2 className="mb-6">Cadastrar Venda</h2>
        <FormularioVenda />
      </div>
    </div>
  );
};

export default CadastrarVenda;