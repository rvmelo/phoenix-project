import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { DefaultInput, DefaultInputProps } from '.'

interface DefaultInputFormProps extends Omit<DefaultInputProps, 'value'> {
  name: string
  nextFocus?: string
}

export const DefaultInputForm: React.FC<DefaultInputFormProps> = ({
  name,
  nextFocus,
  onChange: onChangeText,
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
        <DefaultInput
          ref={ref}
          onChange={(text) => {
            onChange(text)
            onChangeText?.(text)
          }}
          value={value}
          error={errors[name]?.message as string}
          onSubmit={nextFocus ? () => setFocus(nextFocus) : undefined}
          {...rest}
        />
      )}
    />
  )
}
