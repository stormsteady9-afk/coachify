// Prisma removed for now — provide a lightweight runtime stub so the app
// can run without a real database during builds/deploys.

// The stub provides a Proxy that returns async no-op functions for common
// model methods (count, findMany, findFirst, findUnique, create, update
// etc.) and a $connect() no-op. This keeps runtime calls safe while you
// remove the DB dependency.

function createMethodProxy() {
  return new Proxy(() => {}, {
    apply: async () => null,
    get: (_t, prop) => {
      if (prop === 'count') return async () => 0
      if (prop === 'findMany') return async () => []
      if (prop === 'findFirst' || prop === 'findUnique') return async () => null
      if (prop === 'create' || prop === 'update' || prop === 'delete') return async () => null
      // allow chaining (prisma.model.some.other)
      return createMethodProxy()
    }
  })
}

const prisma = new Proxy({}, {
  get: (_t, prop) => {
    if (prop === '$connect') return async () => {}
    if (prop === '$disconnect') return async () => {}
    // return a model proxy (e.g. prisma.user)
    return createMethodProxy()
  }
})

export { prisma }
