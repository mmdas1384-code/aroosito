import { NextResponse } from 'next/server';

const mockVendorInquiries = [
  {
    id: "inq-101",
    vendor_id: 1,
    user_name: "امیرحسین و مریم",
    user_phone: "09121112233",
    wedding_date: "۱۴۰۳/۰۵/۲۰",
    guest_count: 250,
    notes: "استعلام منوی VIP دیس‌پرس همراه با شمع‌آرایی",
    status: "pending",
    created_at: "۱۴۰۳/۰۲/۱۰"
  }
];

export async function GET() {
  return NextResponse.json({
    success: true,
    vendor_id: 1,
    inquiries: mockVendorInquiries
  });
}
