import {LmSelectProps} from '../../../../core/src/form/LmSelect'

export type InputSelectorProps = Omit<LmSelectProps, 'options'>
export type DaysForLocaleProps = {
    localeName?: string
    month?: 'short' | 'long' | 'narrow' | 'numeric' | '2-digit'
}
