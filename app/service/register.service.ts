import { User } from '../model'
import { verify } from 'jsonwebtoken'
import md5 from 'md5'

interface IAccount {
  email: string
  sign: string
}

async function createAccount(account: IAccount) {
  const { email, sign } = account

  const isExist = await User.findOne({ email })
  if (isExist) {
    return 'Account Exist'
  }

  const { username, password } = verify(sign, 'secret_key')
  const salt = md5(password)

  const user = await User.create({ email, name: username, password: salt })
  return user
}

export default {
  createAccount,
}
