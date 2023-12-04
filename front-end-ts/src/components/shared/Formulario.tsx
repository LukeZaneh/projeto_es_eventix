import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      nomeEvento: '',
      localEvento: '',
      cidade: '',
      estado: '',
      data: '',
      hora: '',
      numeroIngressos: '',
      valorIngresso: '',
    },
    validationSchema: Yup.object({
      nomeEvento: Yup.string().required('O nome do evento é obrigatório'),
      localEvento: Yup.string().required('O local do evento é obrigatório'),
      cidade: Yup.string().required('A cidade é obrigatória'),
      estado: Yup.string().required('O estado é obrigatório'),
      data: Yup.string().required('A data é obrigatória'),
      hora: Yup.string().required('A hora é obrigatória'),
      numeroIngressos: Yup.number()
        .required('O número de ingressos é obrigatório')
        .positive('O número de ingressos deve ser positivo')
        .integer('O número de ingressos deve ser um número inteiro'),
      valorIngresso: Yup.number()
        .required('O valor do ingresso é obrigatório')
        .positive('O valor do ingresso deve ser positivo'),
    }),
    onSubmit: values => {
      // Lógica para lidar com os dados do formulário
      console.log(values);
    },
  });

  return (
    <form className="grid grid-cols-2 gap-4"  onSubmit={formik.handleSubmit} >
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
        <label htmlFor="localEvento">Local:</label>
        <input
          type="text"
          id="localEvento"
          name="localEvento"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.localEvento}
          className='border-gray-300 border rounded-md ml-5 mb-2 px-10'
        />
        {formik.touched.localEvento && formik.errors.localEvento ? (
          <div className='font-bold text-red text-[15px]'>{formik.errors.localEvento}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="cidade">Cidade:</label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cidade}
          className='border-gray-300 border rounded-md ml-5 mb-2 px-10'
        />
        {formik.touched.cidade && formik.errors.cidade ? (
          <div className='font-bold text-red text-[15px]'>{formik.errors.cidade}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="estado">Estado:</label>
        <input
          type="text"
          id="estado"
          name="estado"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.estado}
          className='border-gray-300 border rounded-md ml-5 mb-2 px-10'
        />
        {formik.touched.estado && formik.errors.estado ? (
          <div className='font-bold text-red text-[15px]'>{formik.errors.estado}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="data">Data:</label>
        <input
          type="text"
          id="data"
          name="data"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.data}
          className='border-gray-300 border rounded-md ml-5 mb-2 px-10'
        />
        {formik.touched.data && formik.errors.data ? (
          <div className='font-bold text-red text-[15px]'>{formik.errors.data}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="hora">Hora:</label>
        <input
          type="text"
          id="hora"
          name="hora"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.hora}
          className='border-gray-300 border rounded-md ml-5 mb-2 px-10'
        />
        {formik.touched.hora && formik.errors.hora ? (
          <div className='font-bold text-red text-[15px]'>{formik.errors.hora}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="numeroIngressos">Ingressos:</label>
        <input
          type="text"
          id="numeroIngressos"
          name="numeroIngressos"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.numeroIngressos}
          className='border-gray-300 border rounded-md ml-5 mb-2 px-10'
        />
        {formik.touched.numeroIngressos && formik.errors.numeroIngressos ? (
          <div className='font-bold text-red text-[15px]'>{formik.errors.numeroIngressos}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="valorIngresso">Valor:</label>
        <input
          type="text"
          id="valorIngresso"
          name="valorIngresso"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.valorIngresso}
          className='border-gray-300 border rounded-md ml-5 mb-2 px-10'
        />
        {formik.touched.valorIngresso && formik.errors.valorIngresso ? (
          <div className='font-bold text-red text-[15px]'>{formik.errors.valorIngresso}</div>
        ) : null}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;