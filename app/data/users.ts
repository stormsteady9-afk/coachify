import type { User, UserProfile } from "@prisma/client"

import type { DataUserTagSymbol } from "~/data"

export type DataUser = Pick<User, "name" | "username"> & {
  nick?: User["nick"]
  tags?: DataUserTagSymbol[]
  isAdmin?: boolean
} & {
  profiles?: { create: DataUserProfile | DataUserProfile[] }
}

export type DataUserProfile = Pick<
  UserProfile,
  "headline" | "bio" | "modeName"
> & {
  isPrimary?: UserProfile["isPrimary"]
  sequence?: UserProfile["sequence"]
}

export const dataUsers: DataUser[] = [
  {
    name: "Administrator",
    username: "admin",
    nick: "Admin",
    tags: ["COLLABORATOR"],
    profiles: {
      create: { headline: "Felix The Great", bio: "I'm Admin.", modeName: "Admin" },
    },
  },
  {
    name: "Test",
    username: "test",
    nick: "Test",
    tags: ["COLLABORATOR"],
    profiles: {
      create: { headline: "The Tester", bio: "I'm Tester.", modeName: "Test" },
    },
  },
  {
    name: "Coachify",
    username: "Coachify",
    nick: "Dolphin",
    tags: ["COLLABORATOR"],
    profiles: {
      create: { headline: "The Dolphin", bio: "I'm the Dolphin.", modeName: "Dolphin" },
    },
  },
  {
    name: "Felix The Great",
    username: "The Great",
    nick: "Great",
    tags: ["COLLABORATOR", "FOUNDER", "MENTOR", "COACH", "LEADER"],
    profiles: {
      create: [
        {
          modeName: "Mentor",
          headline: "Leadership & Coaching",
          bio: `Helping you to get awareness and take responsibility of your life. Here since 2023.

Let's connect and grow together!`,
        },
        {
          modeName: "Coach",
          headline: "Counselor in Leadership and Coaching",
          bio: "Help you improve your life.",
          sequence: 2,
          isPrimary: false,
        },
      ],
    },
  },
  {
    name: "Nadine",
    username: "Nadine",
    nick: "Nady",
    tags: ["LEADER", "MENTOR", "WRITER"],
    profiles: {
      create: {
        headline: "Writer and Speaker",
        bio: "Writing for public speaking.",
        modeName: "Writer",
      },
    },
  },
  {
    name: "Thierry Gohou",
    username: "Thierry",
    nick: "Thierry",
    tags: ["COACH", "ARTIST", "MENTEE"],
    profiles: {
      create: {
        headline: " Artist",
        bio: "Drawing for illustration.",
        modeName: "Artist",
      },
    },
  },
  {
    name: "Noella",
    username: "Noella",
    nick: "Noella",
    tags: ["LEADER", "MENTOR", "COACH"],
    profiles: {
      create: [
        {
          headline: "Coach In Leadership and Personal Development",
          bio: "Mentoring future Leaders.",
          modeName: "Mentor",
        },
      
      ],
    },
  },
  {
    name: "Eliethene",
    username: "Elietehene",
    nick: "Eliethene",
    tags: ["MENTOR", "COACH"],
    profiles: {
      create: [
        {
          headline: "Senior Coach at Coachify",
          bio: "👋👋👋",
          modeName: "Coach",
        },
      ],
    },
  },
  {
    name: "Joshua",
    username: "Joshua",
    nick: "Joshua",
    tags: ["LEADER", "MENTOR", "COACH"],
    profiles: {
      create: [
        {
          headline: "Coach in Leadership and Personal Development",
          bio: "A Kenyan Coach Living In South Korea ",
          modeName: "Coach",
        },
      
      ],
    },
  },
  {
    name: "Kiplagat ",
    username: "Kipchirchir",
    nick: "Brian",
    tags: ["LEADER", "MENTOR", "COACH"],
    profiles: {
      create: {
        headline: "Frontend Developer at eFishery",
        bio: "Kenyan coach Living in south Korea ",
        modeName: "Coach",
      },
    },
  },
  {
    name: "Paul",
    username: "Paul",
    nick: "Paul",
    tags: ["COACH", "MENTOR", "LEADER"],
    profiles: {
      create: {
        headline: "Life Coaching Specialist",
        bio: "Live your best life with expert guidance and support.",
        modeName: "Coach",
      },
    },
  },
  {
    name: "Anive",
    username: "Anive",
    nick: "Anive",
    tags: ["COLLABORATOR", "MENTOR", "COACH"],
    profiles: {
      create: [
        {
          headline: "Specialist in Team Coaching",
          bio: "Helping teams reach their full potential.",
          modeName: "Mentor",
        },
     
      ],
    },
  },
  {
    name: "Hirwa",
    username: "Hirwa",
    nick: "Hirwa",
    tags: ["MENTEE", "COACH", "ARTIST"],
    profiles: {
      create: [
        {
          headline: "Student in Leadership and Coaching",
          bio: "preparing to be a great coach",
          modeName: "mentee",
        },
      
      ],
    },
  },
  {
    name: "Chris",
    username: "Chris",
    nick: "Chris",
    tags: ["MENTEE", "COACH"],
    profiles: {
      create: {
        headline: "student in leadership and coaching",
        bio: "preparing to be a great coach",
        modeName: "mentee",
      },
    },
  },
  
]