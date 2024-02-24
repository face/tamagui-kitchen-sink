import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { LmDatepickerProps } from './datepickerTypes'
import { LmFormFieldContainer } from '@tamagui-extras/form'
import { useEffect, useId, useState } from 'react'
import { Button, Input, XGroup, XStack } from 'tamagui'
import { Platform } from 'react-native'
import { getLocaleDate } from '../dateHelper'
import { CalendarRegular } from '@tamagui-extras/core'
import { OnDatesChangeProps, START_DATE } from '@datepicker-react/hooks'

export function LmDatepicker({
  numberOfMonths,
  isRangePicker,
  onChange,
  labelFunctions,
  startDate = null,
  endDate = null,
  required,
  error,
  helperText,
  label,
  labelProps,
  labelInline,
  containerProps,
}: LmDatepickerProps) {
  const id = useId()
  const [startOpen, startOpenChange] = useState(false)
  const [endOpen, endOpenChange] = useState(false)
  const [state, setState] = useState<OnDatesChangeProps>({
    startDate: startDate,
    endDate: endDate,
    focusedInput: START_DATE,
  })
  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(state)
    }
  }, [state])
  return (
    <LmFormFieldContainer
      id={id}
      error={error}
      required={required}
      labelProps={labelProps}
      label={label}
      labelInline={labelInline}
      helperText={helperText}
      onTouchStart={() => {
        startOpenChange((state) => !state)
      }}
      {...containerProps}
    >
      <XStack space width={Platform.OS === 'web' ? 'fit-content' : undefined}>
        <XGroup>
          <XGroup.Item>
            <Input
              width={'$12'}
              editable={false}
              value={state.startDate ? getLocaleDate({ date: state.startDate }) : ''}
            ></Input>
          </XGroup.Item>
          <XGroup.Item>
            <Button onPress={() => startOpenChange((state) => !state)} icon={<CalendarRegular />} />
          </XGroup.Item>
        </XGroup>
        {isRangePicker && (
          <XGroup>
            <XGroup.Item>
              <Input
                width={'$12'}
                editable={false}
                value={state.endDate ? getLocaleDate({ date: state.endDate }) : ''}
              />
            </XGroup.Item>
            <XGroup.Item>
              <Button onPress={() => endOpenChange((state) => !state)} icon={<CalendarRegular />} />
            </XGroup.Item>
          </XGroup>
        )}
      </XStack>
      {startOpen && (
        <DateTimePickerModal
          date={state.startDate ?? undefined}
          isVisible={startOpen}
          mode={'date'}
          onConfirm={(date) => {
            setState((old) => ({
              ...old,
              startDate: date ?? null,
            }))
            startOpenChange(false)
            if (typeof onChange === "function") {
              const newState = {
                ...state,
                startDate: date
              }
              onChange(newState)
            }
          }}
          onCancel={() => startOpenChange(false)}
        />
      )}
      {endOpen && (
        <DateTimePickerModal
          date={state.endDate ?? undefined}
          isVisible={endOpen}
          mode={'date'}
          onConfirm={(date) => {
            setState((old) => ({
              ...old,
              endDate: date ?? null,
            }))
            startOpenChange(false)
            if (typeof onChange === "function") {
              const newState = {
                ...state,
                startDate: date
              }
              onChange(newState)
            }
          }}
          onCancel={() => endOpenChange(false)}
        />
      )}
    </LmFormFieldContainer>
  )
}
