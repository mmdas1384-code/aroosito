import { NextResponse } from 'next/server';

const mockVendors = [
  {
    id: 1,
    name: "هتل باغ و تشریفات مشیرالممالک یزد",
    category: "تالار و باغ تالار عروسی",
    province: "یزد",
    district: "صفائیه & اطلسی",
    rating: 4.9,
    reviewCount: 42,
    verified: true,
    priceRange: "از ۹۵,۰۰۰,۰۰۰ تومان",
    cover_image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    phone: "۰۳۵-۳۸۲۴۰۰۰۰",
    address: "یزد، صفائیه، خیابان تیمسار فلاحی، مجتمع تشریفاتی مشیرالممالک",
    hours: "همه روزه از ۱۰:۰۰ الی ۲۱:۰۰",
    instagram: "@moshir_palace_yazd",
    whatsapp: "989123456789",
    amenities: ["ظرفیت تا ۱۰۰۰ نفر", "پارکینگ اختصاصی", "سیستم صوتی VIP", "اتاق عقد مجزا", "کترینگ اختصاصی", "تهویه مطبوع"],
    gallery_images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80"
    ],
    packages: [
      { id: "pkg-1", title: "برنز / اقتصادی", price: "۶۵,۰۰۰,۰۰۰ تومان", feature_list: ["ورودی سالن و سیستم صوتی", "میزبانی تا ۱۵۰ نفر", "پذیرایی چای و شیرینی"] },
      { id: "pkg-2", title: "نقره‌ای / استاندارد", price: "۹۵,۰۰۰,۰۰۰ تومان", feature_list: ["منوی شام ۲ مدل غذا", "گل‌آرایی طبیعی سفره عقد", "نورپردازی داینامیک"] },
      { id: "pkg-3", title: "VIP طلایی / ویژه", price: "۱۴۰,۰۰۰,۰۰۰ تومان", feature_list: ["منوی بافه‌سلف ۴ مدل", "آتش‌بازی & یخ خشک", "اقامت رایگان سوئیت عروس"] }
    ],
    reviews: [
      { id: "rev-1", user_name: "مریم & حسین", rating: 5, comment: "کیفیت غذا و برخورد پرسنل عالی بود.", is_approved: true, created_at: "اردیبهشت ۱۴۰۳" },
      { id: "rev-2", user_name: "علی & سارا", rating: 4.8, comment: "مدیریت بسیار منظم بودند.", is_approved: true, created_at: "اسفند ۱۴۰۲" }
    ]
  }
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const vendorId = parseInt(params.id, 10);
  const vendor = mockVendors.find(v => v.id === vendorId) || mockVendors[0];

  return NextResponse.json({
    success: true,
    vendor: {
      ...vendor,
      reviews: vendor.reviews.filter(r => r.is_approved)
    }
  });
}
