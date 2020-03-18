import { Login } from '../service'

async function verifyAccount(ctx: any) {
  const { sign } = ctx.request.body
  const account = await Login.verifyAccount(sign)
  if (typeof account === 'string') {
    return ctx.body = { success: 0, info: account }
  }

  ctx.body = { success: 1, info: account }
}

export default {
  verifyAccount
}
