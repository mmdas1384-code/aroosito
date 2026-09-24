import { NextResponse } from 'next/server';

const mockReviewsStore: any[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newReview = {
      id: "rev-" + Date.now(),
      vendor_id: body.vendorId || body.vendor_id || 1,
      user_name: body.userName || body.user_name || "زوج گرامی",
      rating: body.rating || 5,
      comment: body.comment || body.notes || "کیفیت خدمات عالی بود.",
      is_approved: false, // Requires admin moderation
      created_at: new Date().toISOString()
    };

    mockReviewsStore.unshift(newReview);

    return NextResponse.json({
      success: true,
      message: "دیدگاه شما با موفقیت ثبت شد و پس از تایید مدیریت منتشر خواهد شد.",
      review: newReview
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: "خطا در ثبت نظر" }, { status: 400 });
  }
}
