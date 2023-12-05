import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Form: React.FC = () => {

  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      id: '',
      nome: '',
      local: '',
      data: '',
      horario: '',
    },
    validationSchema: Yup.object({
      id: Yup.number()
        .required('O id é obrigatório')
        .positive('O id deve ser positivo')
        .integer('O id deve ser um número inteiro'),
      nome: Yup.string().required('O nome do evento é obrigatório'),
      local: Yup.string().required('O local do evento é obrigatório'),
      data: Yup.string().required('A data é obrigatória'),
      horario: Yup.string().required('A hora é obrigatória'),
    }),
    onSubmit: async values => {
      console.log(values)
      const resposta = await axios.post('http://localhost:3000/eventos', values);
      navigate('/cadastro-eventos')
    },
  });
  


  return (
    <form className="grid grid-cols-2 gap-4"  onSubmit={formik.handleSubmit} >
      <div>
        <label htmlFor="id">
          Id:
        </label>
        <input
          type="text"
          id="id"
          name="id"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.id}
          className='border-gray-300 border rounded-md ml-5 mb-2 px-10'
        />
        {formik.touched.id && formik.errors.id ? (
          <div className='font-bold text-red text-[15px]'>{formik.errors.id}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="nome">
          Nome:
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nome}
          className='border-gray-300 border rounded-md ml-5 mb-2 px-10'
        />
        {formik.touched.nome && formik.errors.nome ? (
          <div className='font-bold text-red text-[15px]'>{formik.errors.nome}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="local">Local:</label>
        <input
          type="text"
          id="local"
          name="local"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.local}
          className='border-gray-300 border rounded-md ml-5 mb-2 px-10'
        />
        {formik.touched.local && formik.errors.local ? (
          <div className='font-bold text-red text-[15px]'>{formik.errors.local}</div>
        ) : null}
      </div>


      <div>
        <label htmlFor="data">Data:</label>
        <input
          type="date"
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
        <label htmlFor="horario">Hora:</label>
        <input
          type="text"
          id="horario"
          name="horario"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.horario}
          className='border-gray-300 border rounded-md ml-5 mb-2 px-10'
        />
        {formik.touched.horario && formik.errors.horario ? (
          <div className='font-bold text-red text-[15px]'>{formik.errors.horario}</div>
        ) : null}
      </div>


      <button className='border-gray-300 border rounded-md ml-5 mb-2 px-10' type="submit">Enviar</button>
    </form>
  );
};

export default Form;