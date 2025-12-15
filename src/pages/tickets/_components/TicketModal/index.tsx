import React from 'react'
import CloseIcon from '@/assets/svg/close-icon.svg'
import { ModalInput } from '@/components/Inputs/ModalInput'
import { Dropdown } from '@/components/DropDown'
import { useSafeState } from '@/pages/hooks/useSafeState'
import DropdownArrowIcon from '@/assets/svg/dropdown-arrow-icon.svg'

interface TicketModalProps {
  onClose: () => void
  onSubmit: () => void
}

export const TicketModal: React.FC<TicketModalProps> = ({
  onClose,
  onSubmit,
}) => {
  const [priority, setPriority] = useSafeState<'Urgente' | 'Média' | 'Baixa'>(
    'Urgente',
  )

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
        <div className="mt-8 w-full">
          <span className="font-inter text-t1 text-[#F6F8FC]">
            Preencha os dados abaixo para registrar um novo ticket na
            plataforma.
          </span>
        </div>
        <div className="mt-6 flex w-full flex-col gap-4">
          <ModalInput
            inputLabel="Nome do Cliente"
            placeholder="Nome da pessoa ou empresa que está solicitando o suporte"
          />
          <ModalInput
            inputLabel="Email"
            placeholder="E-mail de contato para atualizações e resposta"
          />
          <Dropdown
            options={[
              { value: 'Urgente', label: 'Urgente' },
              { value: 'Média', label: 'Média' },
              { value: 'Baixa', label: 'Baixa' },
            ]}
            value={priority}
            setValue={(value) =>
              setPriority(value as 'Urgente' | 'Média' | 'Baixa')
            }
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
                  Selecione o nível de urgência do atendimento
                  <DropdownArrowIcon />
                </button>
              </div>
            }
          />
          <ModalInput
            inputLabel="Responsável"
            placeholder="Quem será o responsável por esse ticket"
          />

          <div className="flex w-full flex-col gap-3">
            <span className="ml-4 font-grotesk text-[1rem] text-t1 font-normal text-[#F6F8FC]">
              Assunto
            </span>

            <div className="w-full rounded-3xl border-[1px] border-[#FFFFFF1A] bg-[#FFFFFF0D] px-6 py-[17px]">
              <textarea
                name="subject"
                rows={3}
                placeholder="Resumo breve do problema ou solicitação"
                className="w-full resize-none border-none bg-transparent text-t1 text-[#FBFBFB80] outline-none ring-0 placeholder:text-t1 placeholder:text-[#FBFBFB80] focus:ring-0"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex w-full flex-row items-center justify-center gap-2">
          <button
            onClick={onClose}
            className="h-[3.375rem] w-full max-w-[6.75rem] rounded-lg border-[1px] border-white bg-transparent font-grotesk text-[0.875rem] font-medium text-[#F6F8FC]"
          >
            Cancelar
          </button>
          <button className="h-[3.375rem] w-full max-w-[6.75rem] rounded-lg border-[1px] border-white bg-primary font-grotesk text-[0.875rem] font-medium text-[#F6F8FC]">
            Salvar
          </button>
        </div>
      </div>
    </div>
  )
}
