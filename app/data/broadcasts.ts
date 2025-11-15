import type { Broadcast, User } from "@prisma/client"

export type DataBroadcast = Pick<Broadcast, "title" | "description"> & {
  username: User["username"]
  body?: Broadcast["body"]
}

export const dataBroadcasts: DataBroadcast[] = [
  {
    username: "Nadine",
    title: "Welcome to broadcasts!",
    description: "How to find a mentor or mentee for you",
    body: `With Broadcast, we can send an announcement or info about something we need or offer some help with mentorship.

I'm also opening up some mentorship Cognitive Development.

Enjoy, and let me know if there's something.`,
  },
  {
    username: "Thierry",
    title: "Public Speaking Community",
    description: "Looking for public speaking communities",
    body: "If anybody is interested and have been joining public speaking communities, please let me know. Thank you",
  },
  {
    username: "Eliethene",
    title: "Leadership Mentorship",
    description: "The mentorship of for Leaders ",
    body: "The story of my Leadership Skillz Is Quite Long...",
  },
  {
    username: "Noella",
    title: "Mentorship Journey",
    description: "The mentorship journey so far",
    body: "The story of my mentorship journey is quite long...",
  },
  {
    username: "Fabrice",
    title: "Human Development & Coaching",
    description:
      "Need mentor to help with Human Development & Coaching am here",
    body: `Hello, anyone here who need coaching?

The Human Development & Coaching is around.`,
  },
]
