import { GenericType } from './types'

export const stringify = (value: GenericType): string => {
  return JSON.stringify(value, null, 2);
}