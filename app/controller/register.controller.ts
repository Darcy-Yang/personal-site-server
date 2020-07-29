import { Register } from '../service'

async function registerAccount(ctx: any) {
  const { account } = ctx.request.body
  const info = await Register.createAccount(account)
  ctx.body = {
    success: typeof info === 'string' ? 0 : 1,
    info
  }
}

export default {
  registerAccount
}
