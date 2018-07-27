import Button from './Button'

import UpdateCartItem from './Cart/UpdateCartItem'

import CartItem from './Cart/CartItem'

const View = 'div'

const Container = 'div'

const Text = 'span'

const BaseButton = 'button'

const SafeButton = Button || BaseButton

const SubmitButton = SafeButton

export default {
  View,
  Container,
  Text,
  BaseButton,
  Button: SafeButton,
  UpdateCartItem,
  CartItem,
  Title: Text,
  SubmitButton
}
