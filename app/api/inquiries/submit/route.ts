import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const vendorName = body.vendorName || body.vendor_name || 'تأمین‌کننده';
    const confirmationToken = "LGD-" + Math.floor(100000 + Math.random() * 900000);

    const inquiryLead = {
      id: "inq-" + Date.now(),
      vendor_id: body.vendorId || body.vendor_id || 1,
      vendor_name: vendorName,
      user_name: body.userName || body.user_name || 'کاربر گرامی',
      user_phone: body.userPhone || body.user_phone || '09120000000',
      event_date: body.eventDate || body.wedding_date || '۱۴۰۳/۰۶/۱۵',
      guest_count: body.guestCount || body.guest_count || 200,
      notes: body.note || body.notes || 'استعلام قیمت آنلاین',
      status: 'pending',
      sms_sent: true,
      created_at: new Date().toISOString(),
      confirmation_token: confirmationToken
    };

    console.log('API Lead Submitted successfully:', inquiryLead);

    return NextResponse.json({
      success: true,
      message: `درخواست استعلام شما با موفقیت برای ${vendorName} ارسال شد. پاسخ به زودی به شماره شما پیامک می‌شود.`,
      lead: inquiryLead,
      confirmation_token: confirmationToken,
      sms_status: "SENT"
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'خطا در ثبت استعلام' }, { status: 400 });
  }
}
