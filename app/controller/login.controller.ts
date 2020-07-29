import { Login } from '@/service'

async function verifyAccount(ctx: any) {
  const { sign } = ctx.request.body
  const info = await Login.verifyAccount(sign)
  ctx.body = {
    success: typeof info === 'string' ? 0 : 1,
    info
  }
}

export default {
  verifyAccount
}
