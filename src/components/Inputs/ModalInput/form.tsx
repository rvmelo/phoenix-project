import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { ModalInput, ModalInputProps } from '.'

interface ModalInputFormProps extends Omit<ModalInputProps, 'value'> {
  name: string
  nextFocus?: string
  className?: string
}

export const ModalInputForm: React.FC<ModalInputFormProps> = ({
  name,
  nextFocus,
  onChange: onChangeText,
  className,
  ...rest
}) => {
  const {
    control,
    formState: { errors },
    setFocus,
  } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref } }) => (
        <ModalInput
          ref={ref}
          onChange={(text) => {
            onChange(text)
            onChangeText?.(text)
          }}
          value={value}
          className={className}
          error={errors[name]?.message as string}
          onSubmit={nextFocus ? () => setFocus(nextFocus) : undefined}
          {...rest}
        />
      )}
    />
  )
}
