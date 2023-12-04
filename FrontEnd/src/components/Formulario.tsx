import { useFormik } from 'formik';
import * as Yup from 'yup';
import Formulario from 'Formulario.css'

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
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="nomeEvento">Nome do Evento:</label>
        <input
          type="text"
          id="nomeEvento"
          name="nomeEvento"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nomeEvento}
        />
        {formik.touched.nomeEvento && formik.errors.nomeEvento ? (
          <div>{formik.errors.nomeEvento}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="localEvento">Local do Evento:</label>
        <input
          type="text"
          id="localEvento"
          name="localEvento"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.localEvento}
        />
        {formik.touched.localEvento && formik.errors.localEvento ? (
          <div>{formik.errors.localEvento}</div>
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
        />
        {formik.touched.cidade && formik.errors.cidade ? (
          <div>{formik.errors.cidade}</div>
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
        />
        {formik.touched.estado && formik.errors.estado ? (
          <div>{formik.errors.estado}</div>
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
        />
        {formik.touched.data && formik.errors.data ? (
          <div>{formik.errors.data}</div>
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
        />
        {formik.touched.hora && formik.errors.hora ? (
          <div>{formik.errors.hora}</div>
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
        />
        {formik.touched.numeroIngressos && formik.errors.numeroIngressos ? (
          <div>{formik.errors.numeroIngressos}</div>
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
        />
        {formik.touched.valorIngresso && formik.errors.valorIngresso ? (
          <div>{formik.errors.valorIngresso}</div>
        ) : null}
      </div>

      {/* Adicione os outros campos de acordo com a estrutura acima */}
      {/* ... */}

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;