import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required('Заполните поле'),
  quantity: yup.number().required('Заполните поле'),
  description: yup.string().required('Заполните поле')
})
