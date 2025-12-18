export const feedback = [
    {
        id:1,
        message:"This Food is Very Goods"
    },
    {
        id:2,
        message:"This Resturent is Very Goods"
    },
    {
        id:3,
        message:"Weatier Very Goods"
    },
]
export async function GET(request) {
    return Response.json({
        status:200,
        message:"This is APi Hit Now"
    })
}