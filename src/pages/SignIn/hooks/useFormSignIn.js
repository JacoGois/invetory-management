import * as Yup from 'yup'
import { useFormik } from 'formik'

export const useFormSignIn = ({ onSubmit }) => {

  const Schema = Yup.object({
    email: Yup.string().required('Campo Inválido').email('E-mail inválido'),
    password: Yup.string().required('Campo Inválido'),
    recaptcha: Yup.string().required('Campo Inválido'),
  })

  return useFormik({
    initialValues: {
      email: '',
      password: '',
      recaptcha: '',
    },
    onSubmit,
    validationSchema: Schema,
    validateOnBlur: false,
    validateOnChange: false,
  })
}
