import { Register } from '../service'

async function registerAccount(ctx: any) {
  const { account } = ctx.request.body
  const info = await Register.createAccount(account)
  if (typeof info === 'string') {
    return ctx.body = { success: 0, info }
  }
  ctx.body = { success: 1, info }
}

export default {
  registerAccount
}
