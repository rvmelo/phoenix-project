import * as Select from '@radix-ui/react-select'
import type { ReactElement } from 'react'

interface SimpleDropdownProps {
  options: { value: string; label: string }[]
  placeholder?: string
  value: string
  setValue: (value: string) => void
  trigger: ReactElement
  dropDownContentPosition?: 'popper' | 'item-aligned'
}

export function Dropdown({
  options,
  value,
  setValue,
  trigger,
  dropDownContentPosition = 'item-aligned',
}: SimpleDropdownProps) {
  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger asChild>{trigger}</Select.Trigger>

      <Select.Portal>
        <Select.Content
          position={dropDownContentPosition}
          sideOffset={6}
          className="z-[9999] overflow-hidden rounded-md border border-white/10 bg-background shadow-lg"
        >
          <Select.Viewport>
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="cursor-pointer px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
