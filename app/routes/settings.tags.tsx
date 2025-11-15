import type { LoaderArgs, ActionArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"
import { prisma } from "~/libs"
import { Button, UserTagsForm } from "~/components"
import { delay } from "~/utils"
import { model } from "~/models"

export const loader = async ({ request }: LoaderArgs) => {
  // TODO: Implement authentication
  const userId = "temp-user-id" // Temporary for development

  let [user, userTags] = await prisma.$transaction([
    prisma.user.findFirst({
      where: { id: userId },
      select: { id: true, username: true, tags: true },
    }),
    model.userTag.query.getAll(),
  ])

  if (!userTags) {
    userTags = []
  }

  return json({ 
    user: user || { id: userId, username: "temp-user", tags: [] },
    userTags 
  })
}

export default function Route() {
  const { user } = useLoaderData<typeof loader>()

  return (
    <div className="w-full space-y-10">
      <header>
        <h2>Tags</h2>
        <p className="text-muted-foreground">To communicate with you.</p>
        <Button asChild size="xs" variant="secondary">
          <Link to="/profile">Go to your profile @{user?.username}</Link>
        </Button>
      </header>

      <div className="space-y-6">
        <UserTagsForm />
      </div>
    </div>
  )
}

export async function action({ request }: ActionArgs) {
  await delay()

  const formData = await request.formData()
  const id = String(formData.get("id"))
  const tagsRaw = formData.get("tags")
  const tags = tagsRaw ? JSON.parse(String(tagsRaw)) : []

  await model.user.mutation.updateTags({ id, tags })

  return null
}
