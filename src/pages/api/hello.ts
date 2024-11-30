import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.NOTION_DATABASE_ID;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Add email to Notion database
    await notion.pages.create({
      parent: { database_id: databaseId! },
      properties: {
        Email: {
          title: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
        Status: {
          select: {
            name: "Waitlist",
          },
        },
        "Sign Up Date": {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error adding email to waitlist:", error);
    return res.status(500).json({ message: "Error adding email to waitlist" });
  }
}
