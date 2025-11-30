import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { db } from "@/lib/dynamodb";

export async function GET(req: Request) {
  const userId = "nikhil_001"; 
  const result = await db.send(new GetCommand({
    TableName: "Users",
    Key: { userId }
  }));

  return Response.json(result.Item);
}
