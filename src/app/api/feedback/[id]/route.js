import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

const feedbackCollections = connect("feedback");

export async function GET(request, {params}) {
    const {id} = await params;
    const query = {_id: new  ObjectId(id)};
    const result = await feedbackCollections.findOne(query);
  return Response.json(result);
}
// DELETE
export async function DELETE(request, {params}) {
    const {id} = await params;
    const query = {_id: new  ObjectId(id)};
    const result = await feedbackCollections.deleteOne(query);
  return Response.json(result);
}