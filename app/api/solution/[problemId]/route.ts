import { QueryCommand } from "@aws-sdk/lib-dynamodb";
import { db } from "@/lib/dynamodb";


export async function GET() {
  // const { searchParams } = new URL(request.url);
  // const problemId = searchParams.get("problemId");
  const problemId = "problem_1"; // Placeholder for testing
  
  if (!problemId) {
    return new Response("Bad Request: Missing problemId", { status: 400 });
  }

  try {
    const solutions = await getSolutions(problemId);
    return Response.json(solutions);
  } catch (error) {
    console.error("Error fetching solutions:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function getSolutions(problemId: string) {
  const result = await db.send(new QueryCommand({
    TableName: "Solutions",
    KeyConditionExpression: "problemId = :p",
    ExpressionAttributeValues: {
      ":p": problemId
    }
  }));

  return result.Items;
}

