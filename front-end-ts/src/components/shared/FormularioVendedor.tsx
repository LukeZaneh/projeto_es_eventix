import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormularioVendedor: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      nomeEvento: '',
      CPF: '',
      email: '',
      celular: '',
      data: '',
      hora: '',
      numeroIngressos: '',
      valorIngresso: '',
    },
    validationSchema: Yup.object({
      nomeEvento: Yup.string().required('O nome do evento é obrigatório'),
      CPF: Yup.string().required('O CPF do vendedor é obrigatório'),
      email: Yup.string().required('A email é obrigatória'),
      celular: Yup.string().required('O celular é obrigatório'),
    }),
    onSubmit: values => {
      // Lógica para lidar com os dados do formulário
      console.log(values);
    },
  });

  return (
    <form className="grid grid-cols-2 gap-6 p-10 bg-gray-40 shadow-md"  onSubmit={formik.handleSubmit} >
      <div>
        <label htmlFor="nomeEvento">
          Nome:
        </label>
        <input
          type="text"
          id="nomeEvento"
          name="nomeEvento"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nomeEvento}
          className='border-gray-300 border rounded-md ml-5 mb-2 px-10'
        />
        {formik.touched.nomeEvento && formik.errors.nomeEvento ? (
          <div className='font-bold text-red text-[15px]'>{formik.errors.nomeEvento}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="CPF">CPF</label>
        <input
          type="text"
          id="CPF"
          name="CPF"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.CPF}
          className='border-gray-300 border rounded-md ml-5 mb-2 px-10'
        />
        {formik.touched.CPF && formik.errors.CPF ? (
          <div className='font-bold text-red text-[15px]'>{formik.errors.CPF}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className='border-gray-300 border rounded-md ml-5 mb-2 px-10'
        />
        {formik.touched.email && formik.errors.email ? (
          <div className='font-bold text-red text-[15px]'>{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="celular">Celular:</label>
        <input
          type="text"
          id="celular"
          name="celular"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.celular}
          className='border-gray-300 border rounded-md ml-5 mb-2 px-10'
        />
        {formik.touched.celular && formik.errors.celular ? (
          <div className='font-bold text-red text-[15px]'>{formik.errors.celular}</div>
        ) : null}
      </div>

      
      <button className='btn btn-outline btn-warning  mb-2 btn-sm' type="submit">Cadastrar</button>
    </form>
  );
};

export default FormularioVendedor;