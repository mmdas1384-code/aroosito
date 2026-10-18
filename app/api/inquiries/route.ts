import { NextResponse } from 'next/server';

const mockInquiriesStore: any[] = [
  {
    id: "inq-101",
    vendor_id: 1,
    package_id: "pkg-3",
    user_name: "علی و سارا",
    user_phone: "09121234567",
    wedding_date: "۱۴۰۳/۰۶/۱۵",
    guest_count: 250,
    notes: "استعلام پکیج VIP طلایی",
    status: "pending",
    created_at: new Date().toISOString()
  }
];

export async function GET() {
  return NextResponse.json({
    success: true,
    inquiries: mockInquiriesStore
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newInquiry = {
      id: "inq-" + Date.now(),
      vendor_id: body.vendorId || body.vendor_id || 1,
      package_id: body.packageId || body.package_id || null,
      user_name: body.userName || body.user_name || "کاربر میهمان",
      user_phone: body.userPhone || body.user_phone || "09120000000",
      wedding_date: body.eventDate || body.wedding_date || "۱۴۰۳/۰۶/۱۵",
      guest_count: body.guestCount || body.guest_count || 200,
      notes: body.note || body.notes || "استعلام قیمت",
      status: "pending",
      created_at: new Date().toISOString(),
      confirmation_token: "TOK-" + Math.floor(100000 + Math.random() * 900000)
    };

    mockInquiriesStore.unshift(newInquiry);

    return NextResponse.json({
      success: true,
      message: "درخواست استعلام شما با موفقیت ثبت گردید.",
      inquiry: newInquiry,
      confirmation_token: newInquiry.confirmation_token
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: "خطا در ثبت استعلام" }, { status: 400 });
  }
}
