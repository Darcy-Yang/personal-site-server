interface Ctx { body: any }

async function getBasicInfo(ctx: Ctx) {
  ctx.body = { success: 1, version: 'v0.0.1' }
}

export default {
  getBasicInfo
}
