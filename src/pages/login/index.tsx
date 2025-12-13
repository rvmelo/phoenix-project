import NortusIcon from '@/assets/svg/nortus-icon.svg'
import { DefaultInputForm } from '@/components/Inputs/DefaultInput/form'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSafeState } from '../hooks/useSafeState'

const loginSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().min(8, { message: 'Senha inválida' }),
})

export default function Login() {
  const [shouldRememberUser, setShouldRememberUser] = useSafeState(false)

  const methods = useForm({
    resolver: zodResolver(loginSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods

  type LoginFormData = z.infer<typeof loginSchema>

  const onSubmit = (data: LoginFormData) => {
    console.log(data)
  }

  return (
    <div className="grid grid-cols-2">
      <div className="flex h-[100vh] w-full flex-col gap-16 pl-24 pt-[3.25rem]">
        <NortusIcon />
        <div>
          <h2 className="text-[2.23rem] font-normal leading-[2.86rem] text-text">
            Login
          </h2>
          <span className="text-[1.27rem] text-t1 leading-8 text-text">
            Entre com suas credenciais para acessar a sua conta.
          </span>
          <FormProvider {...methods}>
            <div className="mt-8 flex flex-col gap-7">
              <DefaultInputForm
                name="email"
                placeholder="Usuário*"
                inputLabel="Insira o seu e-mail, CPF ou passaporte."
              />
              <DefaultInputForm
                name="password"
                placeholder="Senha*"
                isPassword
              />
            </div>
            <div className="mb-4 mt-8 flex w-full flex-row items-center justify-between px-5">
              <div className="flex flex-row items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  checked={shouldRememberUser}
                  onClick={() => setShouldRememberUser((prev) => !prev)}
                />
                <label htmlFor="remember" className="font-grotesk text-t3">
                  Lembrar meu usuário
                </label>
              </div>
              <span className="cursor-pointer font-grotesk text-t3 text-primary">
                Esqueci minha senha
              </span>
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              onClick={handleSubmit(onSubmit)}
              className="w-full rounded-[1.25rem] bg-primary py-[1.25rem] text-[1.11rem]"
            >
              Entrar
            </button>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}
