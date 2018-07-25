import * as defaults from './defaults'

export const Defaults = { ...defaults }
export { default as Button } from './Button'
export { default as Cart } from './Cart'

import numeral from 'numeral'
import 'numeral/locales/pt-br'

numeral.locale('pt-br')
numeral.defaultFormat('$0,0.00')
