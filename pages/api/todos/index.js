export default function handler(req, res) {
    res.status(200).json({ todos :[
        {
          title: "React.js",
          id: 1,
        },
        {
          title: "Node.js",
          id: 2,
        },
        {
          title: "Next.js",
          id: 3,
        },
      ],
    });
  }