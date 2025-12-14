import React from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import NortusIcon from '@/assets/svg/nortus-icon.svg'
import { DefaultInputForm } from '@/components/Inputs/DefaultInput/form'
import { useSafeState } from '@/pages/hooks/useSafeState'
import { useRouter } from 'next/router'
import axios from 'axios'
import { StorageKeys } from '@/pages/enums/storageKeys'

const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'Email é obrigatório' })
    .email({ message: 'Email inválido' }),
  password: z
    .string()
    .nonempty({ message: 'Senha é obrigatória' })
    .min(6, { message: 'Senha inválida' }),
})

export const LoginSection: React.FC = () => {
  const [shouldRememberUser, setShouldRememberUser] = useSafeState(false)

  const router = useRouter()

  type LoginFormData = z.infer<typeof loginSchema>

  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: localStorage.getItem(StorageKeys.EMAIL) || '',
      password: '',
    },
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods

  const onSubmit = async (data: LoginFormData) => {
    try {
      console.log(data)
      if (data.email && data.password) {
        await axios.post('/api/auth', data)
      }

      if (shouldRememberUser) {
        localStorage.setItem(StorageKeys.EMAIL, data.email)
      }

      router.replace('/dashboard')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex h-[100vh] w-full flex-col gap-16 pl-24 pr-10 pt-[3.25rem]">
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
            <DefaultInputForm name="password" placeholder="Senha*" isPassword />
          </div>
          <div className="mb-4 mt-8 flex w-full flex-row items-center justify-between px-5">
            <div className="flex flex-row items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                checked={shouldRememberUser}
                onChange={() => setShouldRememberUser((prev) => !prev)}
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
  )
}
