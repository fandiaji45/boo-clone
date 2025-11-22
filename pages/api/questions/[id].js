// pages/api/questions/[id].js
export default function handler(req, res) {
  const data = {
    id: "dwsQOX",
    slug:
      "what-would-you-choose-a-relationship-full-of-passion-but-unstable-or-a-stable-one",
    author: {
      name: "Ariana",
      handle: "ariana",
      avatar: "/avatar.jpeg",
      bio: "Curious, coffee lover"
    },
    createdAt: "2h",
    question:
      "What would you choose? A relationship full of passion but unstable, or a stable one without much excitement?",
    choices: [
      { id: 1, text: "Passionate but unstable", count: 73 },
      { id: 2, text: "Stable but less exciting", count: 27 }
    ],
    totalVotes: 100,
    metadata: {
      comments: 12
    }
  };

  res.status(200).json(data);
}
