
export async function GET(request, {params}) {
    const {id} = await params;
  return Response.json({id});
}