import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormularioVenda: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      idEvento: '',
      idVendedor: '',
    },
    validationSchema: Yup.object({
      idEvento: Yup.string().required('O nome do evento é obrigatório'),
      idVendedor: Yup.string().required('O nome do evento é obrigatório'),
    }),
    onSubmit: values => {
      // Lógica para lidar com os dados do formulário
      console.log(values);
    },
  });

  return (
    <form className="grid grid-cols-2 gap-6 p-10 bg-gray-40 " style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}  onSubmit={formik.handleSubmit} >

        <div>
        <label htmlFor="idEvento">
          Id Evento:
        </label>
        <input
          type="text"
          id="idEvento"
          name="idEvento"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.idEvento}
          className='border-gray-300 border rounded-md ml-5 mb-2 px-10'
        />
        {formik.touched.idEvento && formik.errors.idEvento ? (
          <div className='font-bold text-red text-[15px]'>{formik.errors.idEvento}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="Id Vendedor">
          Id Vendedor:
        </label>
        <input
          type="text"
          id="idVendedor"
          name="idVendedor"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.idVendedor}
          className='border-gray-300 border rounded-md ml-5 mb-2 px-10'
        />
        {formik.touched.idVendedor && formik.errors.idVendedor ? (
          <div className='font-bold text-red text-[15px]'>{formik.errors.idVendedor}</div>
        ) : null}
      </div>

      <button className='btn btn-outline btn-warning  mb-2 btn-sm' type="submit">Cadastrar Venda</button>
    </form>
  );
};

export default FormularioVenda;