import jwt from 'jsonwebtoken'
import { User } from '../model'

async function verifyAccount (sign: string) {
  try {
    const { email, password } = jwt.verify(sign, 'secret_key')
    if (!email || !password) {
      return 'Invalid Account'
    }

    const account = await User.findOne({ email, password }, '_id name avatarUrl')

    if (account) {
      return account
    }

    return 'Account Not Exist'
  } catch (err) {
    console.info('err: ', err)
  }
}

export default {
  verifyAccount
}
