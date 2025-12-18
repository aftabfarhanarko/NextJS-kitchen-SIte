import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

const feedbackCollections = connect("feedback");

export async function GET(request, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollections.findOne(query);
  return Response.json(result);
}

// Patch
export async function PATCH(request, { params }) {
  const { id } = await params;
  const { message } = await request.json();
  const query = { _id: new ObjectId(id) };
  const seter = {
    $set: { message },
  };
  const result = await feedbackCollections.updateOne(query, seter);
  return Response.json(result);
}

// DELETE
export async function DELETE(request, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollections.deleteOne(query);
  return Response.json(result);
}
