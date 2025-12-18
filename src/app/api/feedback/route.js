import { connect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";

const feedbackCollections = connect("feedback");
export async function GET(request) {
  const result = await feedbackCollections.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const { message , user , status } = await request.json();
  if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "Please Provied a Valid Json",
    });
  }

  const newFeedBack = { message,user , status,date: new Date().toISOString() };
  const result = await feedbackCollections.insertOne(newFeedBack);
  revalidatePath("/feedback");
  return Response.json(result);
}
