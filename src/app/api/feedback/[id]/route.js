import { feedback } from "../../route";

export async function GET(request, {params}) {
    const {id} = await params;
    const singleFeedBack = feedback.find(f => f.id == id);
  return Response.json(singleFeedBack);
}