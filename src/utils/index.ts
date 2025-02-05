import { omitBy, isEmpty } from 'lodash'
import { httpError } from '../../types'

export const cleanObj = (obj: httpError) => omitBy(obj, isEmpty);