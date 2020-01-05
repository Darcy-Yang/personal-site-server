interface Ctx { body: any }

async function getBasicInfo(ctx: Ctx) {
  ctx.body = { info: 1 }
}

export default {
  getBasicInfo
}
