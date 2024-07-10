'use client'

import Button from '../Button'
import Calendar, { CalendarProps } from '../Calendar'
import Popover from '../Popover'

import { formatDate } from '@/helpers/date'
import { cn } from '@/lib/utils'

import { Calendar as CalendarIcon } from '@phosphor-icons/react'
import { forwardRef, useMemo } from 'react'
import { SelectSingleEventHandler } from 'react-day-picker'

export type DatePickerProps = Omit<CalendarProps, 'selected' | 'onSelect' | 'mode'> & {
  placeholder?: string
  selected?: Date
  onSelect?: SelectSingleEventHandler
}

const { from, to } = (() => {
  const today = new Date()
  return {
    from: today.getFullYear() - 60,
    to: today.getFullYear(),
  }
})()

const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  ({ selected, placeholder, className, onSelect, ...rest }, ref) => {
    const date = useMemo(() => {
      if (selected)
        return formatDate(selected, {
          year: '2-digit',
          month: 'long',
          day: '2-digit',
        })

      return placeholder
    }, [placeholder, selected])

    return (
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button
            ref={ref}
            variant={'outline'}
            className={cn(
              'justify-start',
              !selected && 'text-gray-500 dark:text-gray-400',
              className,
            )}
          >
            <CalendarIcon />
            <span>{date}</span>
          </Button>
        </Popover.Trigger>
        <Popover.Content className="w-auto p-0">
          <Calendar
            mode="single"
            selected={selected}
            onSelect={onSelect}
            initialFocus
            captionLayout="dropdown"
            fromYear={from}
            toYear={to}
            {...rest}
          />
        </Popover.Content>
      </Popover.Root>
    )
  },
)
DatePicker.displayName = 'DatePicker'

export default DatePicker
