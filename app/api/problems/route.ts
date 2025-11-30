import { QueryCommand } from "@aws-sdk/lib-dynamodb";
import { db } from "@/lib/dynamodb";

export async function GET() {
  const userId = "nikhil_001";

  try {
    const result = await db.send(new QueryCommand({
        TableName: "Problems",
        KeyConditionExpression: "userId = :u",
        ExpressionAttributeValues: {
        ":u": "nikhil_001"
        }
    }));
  return Response.json(result.Items);
    }
    catch (error) { 
        console.error("Error fetching problems:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
