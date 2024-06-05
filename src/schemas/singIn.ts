import * as yup from 'yup';

export default yup.object().shape({
  email: yup.string().required('Заполните поле').email('Некорректный Email'),
  password: yup.string().required(),
});
