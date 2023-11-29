import { useLocation, useNavigate } from "react-router-dom";
import { PasswordField } from "../../components/Fields/PasswordField";
import { TextField } from "../../components/Fields/TextField";
import { Logo } from "../../components/Logo";
import { useAuth } from "../../contexts";
import { useFormSignIn, useLogin } from "./hooks"
import Swal from "sweetalert2";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "../../components/Button";

export const SignIn = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { token, setToken } = useAuth()
  const { datalogin, errorlogin, loadinglogin,  } = useLogin()

  const { values, errors, handleSubmit, setFieldValue} = useFormSignIn({
  onSubmit: values => {
    console.log(values);
  }})

  useEffect(() => {
    if (token) navigate('/products')
  }, [token])

  useEffect(() => {
    if (!datalogin) return
    setToken(datalogin.token)
    const from = location.state?.from?.pathname || '/products'
    navigate(from, { replace: true })
  }, [datalogin])

  useEffect(() => {
    if (!errorlogin) return
    Swal.fire({
      title: t('signIn.userOrPasswordInvalid'),
      text: t('signIn.tryAgain'),
      icon: 'error',
      confirmButtonText: 'Ok',
    })
  }, [errorlogin])

  return(
    <Box className='flex flex-col justify-center items-center px-3 w-full min-h-screen'>
      <Logo width={120} className='mb-2' />
      <form
        className='border p-4 rounded-2 flex flex-col shadow-xl bg-surface w-full md:w-[400px] lg:w-[450px]'
        onSubmit={handleSubmit}
      >
        <TextField
          label='Email'
          name='email'
          placeholder='Ex.: joao@email.com'
          value={values.email}
          errorMessage={errors.email}
          onChange={e => setFieldValue('email', e.target.value.trim())}
          isDisabled={loadinglogin}
        />
        <PasswordField
          label='Senha'
          name='password'
          placeholder='******'
          value={values.password}
          errorMessage={errors.password}
          onChange={e => setFieldValue('password', e.target.value.trim())}
          isDisabled={loadinglogin}
        />
        <Button isLoading={loadinglogin} onClick={() => navigate('/products')} text='Entrar' type='submit' isDisabled={loadinglogin} />
      </form>
    </Box>
  )
}