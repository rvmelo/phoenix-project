import React from 'react'
import CloseIcon from '@/assets/svg/close-icon.svg'
import { Dropdown } from '@/components/DropDown'
import { useSafeState } from '@/pages/hooks/useSafeState'
import DropdownArrowIcon from '@/assets/svg/dropdown-arrow-icon.svg'
import { z } from 'zod'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ModalInputForm } from '@/components/Inputs/ModalInput/form'
import { toast } from 'sonner'
import axios from 'axios'

const ticketCreationSchema = z.object({
  client: z.string().min(1, 'Cliente é obrigatório'),
  email: z.string().email('Email inválido'),
  priority: z.enum(['Urgente', 'Média', 'Baixa']),
  responsible: z.string().min(1, 'Responsável é obrigatório'),
  subject: z.string().min(1, 'Assunto é obrigatório'),
})

interface TicketModalProps {
  onClose: () => void
}

export const TicketModal: React.FC<TicketModalProps> = ({ onClose }) => {
  type TicketFormData = z.infer<typeof ticketCreationSchema>

  const methods = useForm<TicketFormData>({
    resolver: zodResolver(ticketCreationSchema),
    defaultValues: {
      client: '',
      email: '',
      responsible: '',
      subject: '',
    },
  })

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    control,
  } = methods

  const onSubmit = async (data: TicketFormData) => {
    try {
      await axios.post('/api/create-ticket', { ticketData: data })
      toast.success('Ticket criado com sucesso')
      onClose()
    } catch (error) {
      toast.error('Erro ao criar ticket')
      onClose()
    }
  }

  const [priority, setPriority] = useSafeState<
    'Urgente' | 'Média' | 'Baixa' | ''
  >('')

  return (
    <div className="bg-black fixed inset-0 z-[999]  flex items-start justify-center overflow-y-auto  bg-background bg-opacity-50 py-6">
      <div className="ml-[9.375rem] rounded-2xl bg-background px-6 pb-6 pt-8">
        <div className="flex flex-row items-center justify-between">
          <span className="font-grotesk text-s2 font-normal">Novo Ticket</span>
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full border-[1px] border-white"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>
        <FormProvider {...methods}>
          <div className="mt-8 w-full">
            <span className="font-inter text-t1 text-[#F6F8FC]">
              Preencha os dados abaixo para registrar um novo ticket na
              plataforma.
            </span>
          </div>
          <div className="mt-6 flex w-full flex-col gap-4">
            <ModalInputForm
              name="client"
              inputLabel="Nome do Cliente"
              placeholder="Nome da pessoa ou empresa que está solicitando o suporte"
            />
            <ModalInputForm
              name="email"
              inputLabel="Email"
              placeholder="E-mail de contato para atualizações e resposta"
            />
            <Controller
              name="priority"
              control={control}
              render={({ field }) => (
                <Dropdown
                  options={[
                    { value: 'Urgente', label: 'Urgente' },
                    { value: 'Média', label: 'Média' },
                    { value: 'Baixa', label: 'Baixa' },
                  ]}
                  value={priority}
                  setValue={(value) => {
                    setPriority(value as 'Urgente' | 'Média' | 'Baixa')
                    field.onChange(value)
                  }}
                  dropDownContentPosition="popper"
                  trigger={
                    <div className="flex w-full max-w-[32.125rem] flex-col gap-3">
                      <span className="ml-4 font-grotesk text-[1rem] text-t1 font-normal text-[#F6F8FC]">
                        Prioridade
                      </span>
                      <button
                        type="button"
                        className="flex w-full max-w-[32.125rem] flex-row items-center justify-between rounded-3xl border-[1px] border-[#FFFFFF1A] bg-[#FFFFFF0D] px-6 py-[17px] text-left text-t1 text-[#FBFBFB80]"
                      >
                        {priority ||
                          'Selecione o nível de urgência do atendimento'}
                        <DropdownArrowIcon />
                      </button>
                      {errors.priority?.message && (
                        <span className="font-weight-400 ml-4 font-inter text-t1 text-error2">
                          {errors.priority?.message}
                        </span>
                      )}
                    </div>
                  }
                />
              )}
            />

            <ModalInputForm
              name="responsible"
              inputLabel="Responsável"
              placeholder="Quem será o responsável por esse ticket"
            />

            <div className="flex w-full flex-col gap-3">
              <span className="ml-4 font-grotesk text-[1rem] text-t1 font-normal text-[#F6F8FC]">
                Assunto
              </span>

              <div className="w-full rounded-3xl border-[1px] border-[#FFFFFF1A] bg-[#FFFFFF0D] px-6 py-[17px]">
                <textarea
                  {...methods.register('subject')}
                  rows={3}
                  placeholder="Resumo breve do problema ou solicitação"
                  className="w-full resize-none border-none bg-transparent text-t1 text-[#FBFBFB80] outline-none ring-0 placeholder:text-t1 placeholder:text-[#FBFBFB80] focus:ring-0"
                />
              </div>
              {errors.subject?.message && (
                <span className="font-weight-400 ml-4 font-inter text-t1 text-error2">
                  {errors.subject?.message}
                </span>
              )}
            </div>
          </div>
          <div className="mt-6 flex w-full flex-row items-center justify-center gap-2">
            <button
              onClick={onClose}
              className="h-[3.375rem] w-full max-w-[6.75rem] rounded-lg border-[1px] border-white bg-transparent font-grotesk text-[0.875rem] font-medium text-[#F6F8FC]"
            >
              Cancelar
            </button>
            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="h-[3.375rem] w-full max-w-[6.75rem] rounded-lg border-[1px] border-white bg-primary font-grotesk text-[0.875rem] font-medium text-[#F6F8FC]"
            >
              Salvar
            </button>
          </div>
        </FormProvider>
      </div>
    </div>
  )
}
