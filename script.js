    lucide.createIcons();

    // APP GLOBAL STATE
    let categories = [
      { id: "cat-1", title: "تالار و باغ تالار عروسی", icon: "building", count: 420, active: true },
      { id: "cat-2", title: "آتلیه عکاسی و فیلمبرداری", icon: "camera", count: 310, active: true },
      { id: "cat-3", title: "سالن زیبایی و آرایشگاه عروس", icon: "sparkles", count: 280, active: true },
      { id: "cat-4", title: "مزون لباس عروس", icon: "shirt", count: 190, active: true },
      { id: "cat-5", title: "تشریفات عروسی", icon: "crown", count: 160, active: true },
      { id: "cat-6", title: "گل و گل‌آرایی", icon: "flower-2", count: 150, active: true },
      { id: "cat-7", title: "کت و شلوار داماد", icon: "user-check", count: 120, active: true },
      { id: "cat-8", title: "آرایشگاه داماد", icon: "scissors", count: 110, active: true },
      { id: "cat-9", title: "اجاره ماشین عروس", icon: "car", count: 95, active: true },
      { id: "cat-10", title: "موزیک", icon: "music", count: 140, active: true },
      { id: "cat-11", title: "طلافروشی و جواهرفروشی", icon: "gem", count: 180, active: true },
      { id: "cat-12", title: "کیک و شیرینی‌فروشی", icon: "cake", count: 130, active: true },
      { id: "cat-13", title: "سفره عقد", icon: "utensils", count: 85, active: true },
      { id: "cat-14", title: "دفتر ازدواج و سالن عقد", icon: "landmark", count: 90, active: true },
      { id: "cat-15", title: "تور ماه عسل", icon: "plane", count: 115, active: true },
      { id: "cat-16", title: "آزمایشگاه ازدواج", icon: "flask-conical", count: 60, active: true },
      { id: "cat-17", title: "آینه و شمعدان", icon: "sparkles", count: 70, active: true },
      { id: "cat-18", title: "مانتو عقد", icon: "shirt", count: 65, active: true },
      { id: "cat-19", title: "مشاوره ازدواج", icon: "heart-handshake", count: 50, active: true },
      { id: "cat-20", title: "اکسسوری جشن عروسی", icon: "gem", count: 80, active: true },
      { id: "cat-21", title: "بادکنک‌آرایی و دکوراسیون", icon: "party-popper", count: 75, active: true },
      { id: "cat-22", title: "فینگرفود", icon: "utensils-crossed", count: 105, active: true },
      { id: "cat-23", title: "لباس شب و نامزدی", icon: "shirt", count: 125, active: true },
      { id: "cat-24", title: "سالن تولد", icon: "cake-slice", count: 45, active: true },
      { id: "cat-25", title: "آتلیه کودک", icon: "baby", count: 55, active: true }
    ];

    let selectedProvince = 'یزد';
    let selectedYazdDistrict = 'all';

    let vendors = [
      {
        id: 1,
        name: "هتل باغ و تشریفات مشیرالممالک یزد",
        category: "تالار و باغ تالار عروسی",
        province: "یزد",
        cityName: "یزد",
        district: "صفائیه & اطلسی",
        city: "یزد (صفائیه)",
        rating: 4.9,
        reviewCount: 42,
        verified: true,
        capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],
        priceRange: "از ۹۵,۰۰۰,۰۰۰ تومان",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
        phone: "۰۳۵-۳۸۲۴۰۰۰۰",
        landline: "۰۳۵-۳۸۲۴۱۱۱۱",
        address: "یزد، صفائیه، خیابان دانشگاه، نرسیده به میدان اطلسی",
        instagram: "@moshir_palace_yazd",
        hours: "همه روزه از ۱۰:۰۰ الی ۲۱:۰۰",
        portfolio: [
          { url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80", tag: "دکور ورودی باغ" },
          { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80", tag: "سالن اصلی مجلل" },
          { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80", tag: "سفره عقد سنتی" },
          { url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80", tag: "گل‌آرایی و شمع" }
        ],
        packages: [
          { name: "برنزی (پایه)", price: "۶۵,۰۰۰,۰۰۰ تومان", items: ["منوی شام ۲ رنگ سلف‌سرویس", "ورودی باغ تالار", "سیستم سیستم صوتی"] },
          { name: "نقره‌ای (VIP)", price: "۹۵,۰۰۰,۰۰۰ تومان", items: ["منوی شام ۳ رنگ با کترینگ یزدی", "شمع‌آرایی کامل", "تست غذا برای ۴ نفر"] },
          { name: "طلایی (Luxury)", price: "۱۴۰,۰۰۰,۰۰۰ تومان", items: ["تمام امکانات نقره‌ای + سفره عقد", "آتش‌بازی ورودی", "اقامت سوئیت عروس"] }
        ],
        reviews: [
          { author: "رضا و مریم", text: "کیفیت غذا و میزبانی مشیرالممالک بی‌نظیر بود.", stars: "★★★★★", date: "اردیبهشت ۱۴۰۳" },
          { author: "محمد و سارا", text: "فضای باغ سنتی بسیار شیک و عکس‌ها رویایی شدند.", stars: "★★★★★", date: "فروردین ۱۴۰۳" }
        ]
      },
      {
        id: 2,
        name: "استودیو و آتلیه تخصصی کویر یزد",
        category: "آتلیه عکاسی و فیلمبرداری",
        province: "یزد",
        cityName: "یزد",
        district: "صفائیه & اطلسی",
        city: "یزد (میدان اطلسی)",
        rating: 4.8,
        reviewCount: 38,
        verified: true,
        capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],
        priceRange: "از ۲۸,۰۰۰,۰۰۰ تومان",
        image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80",
        phone: "۰۹۱۲۳۴۵۶۷۸۹",
        landline: "۰۳۵-۳۸۲۵۲۲۲۲",
        address: "یزد، میدان اطلسی، مجتمع آریا، طبقه ۳",
        instagram: "@kavir_studio_yazd",
        hours: "شنبه تا پنجشنبه ۹:۰۰ الی ۲۰:۰۰",
        portfolio: [
          { url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80", tag: "فرمالیته کویر بافق" },
          { url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80", tag: "عکاسی غروب کویر" },
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", tag: "کلیپ احساسی دو نفره" },
          { url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80", tag: "عکاسی عمارت و باغ" }
        ],
        packages: [
          { name: "پکیج اقتصادی عکاسی", price: "۲۸,۰۰۰,۰۰۰ تومان", items: ["عکاسی و فیلمبرداری روز مراسم", "آلبوم ایتالیایی 60x30", "تحویل فایل مادر"] },
          { name: "پکیج کامل فرمالیته کویر", price: "۴۵,۰۰۰,۰۰۰ تومان", items: ["کلیپ فرمالیته کویر با هلی‌شات", "مجوز رسمی عکاسی کویر", "۲ عدد آلبوم دیجیتال"] }
        ],
        reviews: [
          { author: "علی و مهسا", text: "کلیپ کویر بافق فوق‌العاده شد، مجوز رسمی کویر کار رو راحت کرد.", stars: "★★★★★", date: "خرداد ۱۴۰۳" }
        ]
      },
      {
        id: 3,
        name: "عمارت و تالار تشریفات قصر یزد",
        category: "تالار و باغ تالار عروسی",
        province: "یزد",
        cityName: "یزد",
        district: "بلوار جمهوری",
        city: "یزد (بلوار جمهوری)",
        rating: 4.9,
        reviewCount: 29,
        verified: true,
        capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],
        priceRange: "از ۱۱۰,۰۰۰,۰۰۰ تومان",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        phone: "۰۳۵-۳۵۲۶۳۳۳۳",
        landline: "۰۳۵-۳۵۲۶۴۴۴۴",
        address: "یزد، بلوار جمهوری، جنب سرپرستی بانک ملی",
        instagram: "@ghasr_palace_yazd",
        hours: "همه روزه ۱۰:۰۰ الی ۲۲:۰۰",
        portfolio: [
          { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80", tag: "دیزاین کریستال" },
          { url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80", tag: "جایگاه عروس داماد" },
          { url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80", tag: "ورودی شب" },
          { url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80", tag: "شمع‌آرایی تالار" }
        ],
        packages: [
          { name: "پکیج تشریفات قصر", price: "۱۱۰,۰۰۰,۰۰۰ تومان", items: ["منوی شام سلف سرویس کامل", "ورودی و سفره عقد", "نورپردازی حرفه‌ای"] }
        ],
        reviews: [
          { author: "حسین و الهام", text: "تالار بسیار شیک و تیم تشریفات بسیار منظم بودند.", stars: "★★★★★", date: "اردیبهشت ۱۴۰۳" }
        ]
      },
      {
        id: 4,
        name: "سالن زیبایی VIP بانو یزد",
        category: "سالن زیبایی و آرایشگاه عروس",
        province: "یزد",
        cityName: "یزد",
        district: "خیابان کاشانی & ملاصدرا",
        city: "یزد (خیابان کاشانی)",
        rating: 4.7,
        reviewCount: 31,
        verified: true,
        capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],
        priceRange: "از ۱۵,۰۰۰,۰۰۰ تومان",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
        phone: "۰۳۵-۳۶۲۷۵۵۵۵",
        landline: "۰۳۵-۳۶۲۷۶۶۶۶",
        address: "یزد، خیابان کاشانی، پلاک ۱۲۰",
        instagram: "@banoo_beauty_yazd",
        hours: "شنبه تا چهارشنبه ۹:۰۰ الی ۱۹:۰۰",
        portfolio: [
          { url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80", tag: "میکاپ تخصصی عروس" },
          { url: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=600&q=80", tag: "شینیون کلاسیک" },
          { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80", tag: "ناخن و پاکسازی" },
          { url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80", tag: "تاج و گریم" }
        ],
        packages: [
          { name: "پکیج VIP عروس", price: "۱۸,۰۰۰,۰۰۰ تومان", items: ["میکاپ و شینیون لایت", "پاکسازی پوست و ناخن", "تاج و تور اختصاصی"] }
        ],
        reviews: [
          { author: "زهرا نوری", text: "میکاپ خیلی ماندگار و طبیعی بود، عالی بودید.", stars: "★★★★★", date: "خرداد ۱۴۰۳" }
        ]
      },
      {
        id: 5,
        name: "مزون عروس ترمه & اسلیمی یزد",
        category: "مزون لباس عروس",
        province: "یزد",
        cityName: "یزد",
        district: "بلوار دانشگاه",
        city: "یزد (بلوار دانشگاه)",
        rating: 4.9,
        reviewCount: 25,
        verified: true,
        capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],
        priceRange: "از ۲۲,۰۰۰,۰۰۰ تومان",
        image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80",
        phone: "۰۳۵-۳۸۲۶۷۷۷۷",
        landline: "۰۳۵-۳۸۲۶۸۸۸۸",
        address: "یزد، بلوار دانشگاه، مجتمع تجاری اطلس",
        instagram: "@termeh_mezon_yazd",
        hours: "شنبه تا پنجشنبه ۱۰:۰۰ الی ۲۱:۰۰",
        portfolio: [
          { url: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=600&q=80", tag: "لباس عروس دانتل" },
          { url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80", tag: "لباس پرنسسی" },
          { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80", tag: "تور و تور سر" },
          { url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80", tag: "شنل و اکسسوری" }
        ],
        packages: [
          { name: "دوخت و دوخت سفارشی", price: "۲۲,۰۰۰,۰۰۰ تومان", items: ["دوخت اختصاصی با پارچه ایتالیایی", "پرو نامحدود", "تور و شنل هدایا"] }
        ],
        reviews: [
          { author: "نرگس کریمی", text: "لباس دقیقاً طبق سایز و مدلی که خواستم آماده شد.", stars: "★★★★★", date: "اردیبهشت ۱۴۰۳" }
        ]
      },
      {
        id: 6,
        name: "عمارت تشریفاتی بادگیر یزد",
        category: "تالار و باغ تالار عروسی",
        province: "یزد",
        cityName: "یزد",
        district: "بافت تاریخی & آزادشهر",
        city: "یزد (بافت تاریخی)",
        rating: 4.8,
        reviewCount: 20,
        verified: true,
        capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],
        priceRange: "از ۸۰,۰۰۰,۰۰۰ تومان",
        image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
        phone: "۰۳۵-۳۶۲۱۹۹۹۹",
        landline: "۰۳۵-۳۶۲۱۸۸۸۸",
        address: "یزد، بافت تاریخی، خیابان مسجد جامع",
        instagram: "@badgir_mansion_yazd",
        hours: "همه روزه ۱۰:۰۰ الی ۲۱:۰۰",
        portfolio: [
          { url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80", tag: "عمارت بوم‌گردی سنتی" },
          { url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80", tag: "حیاط با بادگیر" },
          { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80", tag: "پذیرایی سنتی" },
          { url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80", tag: "عکس‌های شب" }
        ],
        packages: [
          { name: "پکیج عروسی سنتی", price: "۸۰,۰۰۰,۰۰۰ تومان", items: ["پذیرایی با شیرینی حاج خلیفه", "منوی شام دیزی و غذای یزدی", "فضای حیاط با بادگیر"] }
        ],
        reviews: [
          { author: "سعید و فاطمه", text: "مهمان‌های غیر یزدی ما عاشق فضای بادگیر شدند.", stars: "★★★★★", date: "اسفند ۱۴۰۲" }
        ]
      },
      {
        id: 7,
        name: "کترینگ و فینگرفود سنتی شیرینی حاج خلیفه یزد",
        category: "کیک و شیرینی‌فروشی",
        province: "یزد",
        cityName: "یزد",
        district: "میدان امیرچقماق",
        city: "یزد (امیرچقماق)",
        rating: 4.6,
        reviewCount: 55,
        verified: false,
        capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],
        priceRange: "از ۱۱۲,۰۰۰,۰۰۰ تومان",
        image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80",
        phone: "۰۳۵-۳۶۲۲۱۱۱۱",
        landline: "۰۳۵-۳۶۲۲۲۲۲۲",
        address: "یزد، ضلع شمالی میدان امیرچقماق",
        instagram: "@hajkhalifa_yazd",
        hours: "همه روزه ۸:۰۰ الی ۲۲:۰۰",
        portfolio: [
          { url: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80", tag: "باقلوا و قطاب یزدی" },
          { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80", tag: "کیک عروسی ۴ طبقه" },
          { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80", tag: "فینگرفود پذیرایی" },
          { url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80", tag: "بسته‌بندی مجلل" }
        ],
        packages: [
          { name: "سفارش پذیرایی عروسی (کیلوگرم)", price: "۱۲,۰۰۰,۰۰۰ تومان", items: ["قطاب، باقلوا، حاجی‌بادام و کیک یزدی اصل", "بسته‌بندی کادویی مجلل"] }
        ],
        reviews: [
          { author: "امیر کاظمی", text: "شیرینی‌ها تازه و اصیل حاج خلیفه برای تمام مهمان‌ها لذت‌بخش بود.", stars: "★★★★★", date: "خرداد ۱۴۰۳" }
        ]
      },
      {
        id: 8,
        name: "گالری طلا و جواهرات خاتم یزد",
        category: "طلافروشی و جواهرفروشی",
        province: "یزد",
        cityName: "یزد",
        district: "بازار خان",
        city: "یزد (بازار خان)",
        rating: 4.5,
        reviewCount: 18,
        verified: false,
        capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],
        priceRange: "از ۳۵,۰۰۰,۰۰۰ تومان",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
        phone: "۰۳۵-۳۶۲۳۳۳۳۳",
        landline: "۰۳۵-۳۶۲۳۴۴۴۴",
        address: "یزد، بازار خان، تیمچه طلادوزان، پلاک ۴",
        instagram: "@khatam_gold_yazd",
        hours: "شنبه تا چهارشنبه ۹:۳۰ الی ۲۰:۳۰",
        portfolio: [
          { url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80", tag: "حلقه ست برلیان" },
          { url: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80", tag: "سرویس طلا عروس" },
          { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80", tag: "دستبند و تک‌پوش" },
          { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80", tag: "پلاک و مدال ازدواج" }
        ],
        packages: [
          { name: "ست حلقه و سرویس ازدواج", price: "۳۵,۰۰۰,۰۰۰ تومان", items: ["طلا ۱۸ عیار با فاکتور رسمی اتحادیه یزد", "سایز و حکاکی رایگان"] }
        ],
        reviews: [
          { author: "پیمان احمدی", text: "منصفانه و با حاشیه سود مناسب در بازار خان یزد.", stars: "★★★★☆", date: "اردیبهشت ۱۴۰۳" }
        ]
      }
    ];

    let galleryPhotos = [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80"
    ];

    let vendorPackages = [
      { id: "pkg-1", name: "پکیج نقره‌ای منوی دیس‌پرس", price: "از ۸۵,۰۰۰,۰۰۰ تومان", features: ["منوی ۲ رنگ غذا همراه با نوشیدنی", "ورودی باغ و سیستم صوت", "مهماندار مجرب برای هر ۳۰ نفر"] },
      { id: "pkg-2", name: "پکیج طلایی منوی VIP", price: "از ۱۲۰,۰۰۰,۰۰۰ تومان", features: ["منوی ۴ رنگ غذا همراه با باقالی‌پلو با گوشت", "شمع‌آرایی و ورودی رپتایل", "مهماندار مجرب برای هر ۲۰ نفر", "تست رایگان غذا برای ۴ نفر"] },
      { id: "pkg-3", name: "پکیج سوپر لاکچری زمرد", price: "از ۱۸۰,۰۰۰,۰۰۰ تومان", features: ["سفره عقد اختصاصی سالن", "آتش‌بازی ۴ مرحله‌ای و یخ خشک", "منوی کامل سلف‌سرویس با ۴۰ مدل فینگرفود"] }
    ];

    let weddingDateDaysRemaining = 145;

    let timeframeList = [
      "همه",
      "۱۲ تا ۹ ماه قبل",
      "۹ تا ۶ ماه قبل",
      "۶ تا ۳ ماه قبل",
      "۳ تا ۱ ماه قبل",
      "۱ هفته قبل",
      "روز عروسی و بعد از آن"
    ];

    let staticChecklist = [
      // ۱۲ تا ۹ ماه قبل
      { id: "chk-1", title: "تعیین بودجه اولیه و سقف هزینه‌های جشن", timeframe: "۱۲ تا ۹ ماه قبل", completed: true, dueDate: "۱۲ ماه قبل", priority: "urgent", category: "عمومی", attachedVendorId: null, vendorStatus: "finalized" },
      { id: "chk-2", title: "انتخاب و رزرو باغ تالار یا محل برگزاری مراسم", timeframe: "۱۲ تا ۹ ماه قبل", completed: true, dueDate: "۱۰ ماه قبل", priority: "urgent", category: "تالار و باغ تشریفات", attachedVendorId: 1, vendorStatus: "finalized" },
      { id: "chk-3", title: "تعیین لیست اولیه و تعداد تقریبی مهمانان", timeframe: "۱۲ تا ۹ ماه قبل", completed: true, dueDate: "۹ ماه قبل", priority: "suggested", category: "عمومی", attachedVendorId: null, vendorStatus: null },

      // ۹ تا ۶ ماه قبل
      { id: "chk-4", title: "انتخاب و عقد قرارداد با آتلیه فیلم و عکس", timeframe: "۹ تا ۶ ماه قبل", completed: false, dueDate: "۸ ماه قبل", priority: "urgent", category: "آتلیه و عکاسی", attachedVendorId: 2, vendorStatus: "deposit_paid" },
      { id: "chk-5", title: "رزرو و هماهنگی سالن زیبایی و میکاپ عروس", timeframe: "۹ تا ۶ ماه قبل", completed: false, dueDate: "۷ ماه قبل", priority: "urgent", category: "سالن زیبایی", attachedVendorId: 3, vendorStatus: "quote_received" },
      { id: "chk-6", title: "انتخاب گروه موسیقی، دی‌جی و سیستم نورپردازی", timeframe: "۹ تا ۶ ماه قبل", completed: false, dueDate: "۶ ماه قبل", priority: "suggested", category: "موزیک", attachedVendorId: null, vendorStatus: null },

      // ۶ تا ۳ ماه قبل
      { id: "chk-7", title: "سفارش یا اجاره لباس عروس و خرید اکسسوری", timeframe: "۶ تا ۳ ماه قبل", completed: false, dueDate: "۵ ماه قبل", priority: "urgent", category: "مزون و لباس عروس", attachedVendorId: 4, vendorStatus: "deposit_paid" },
      { id: "chk-8", title: "انتخاب و خرید کت و شلوار و کفش داماد", timeframe: "۶ تا ۳ ماه قبل", completed: false, dueDate: "۴ ماه قبل", priority: "suggested", category: "کت و شلوار داماد", attachedVendorId: null, vendorStatus: null },
      { id: "chk-9", title: "خرید حلقه‌های ازدواج و سرویس طلا", timeframe: "۶ تا ۳ ماه قبل", completed: false, dueDate: "۳ ماه قبل", priority: "urgent", category: "طلافروشی و جواهرفروشی", attachedVendorId: null, vendorStatus: null },

      // ۳ تا ۱ ماه قبل
      { id: "chk-10", title: "طراحی و ارسال کارت دعوت دیجیتال و پیگیری RSVP", timeframe: "۳ تا ۱ ماه قبل", completed: false, dueDate: "۲ ماه قبل", priority: "urgent", category: "عمومی", attachedVendorId: null, vendorStatus: null },
      { id: "chk-11", title: "رزرو ماشین عروس و سفار ش گل‌آرایی ماشین و دسته گل", timeframe: "۳ تا ۱ ماه قبل", completed: false, dueDate: "۶ هفته قبل", priority: "suggested", category: "گل‌آرایی و ماشین عروس", attachedVendorId: null, vendorStatus: null },
      { id: "chk-12", title: "انتخاب مدل و سفارش کیک و شیرینی عروسی", timeframe: "۳ تا ۱ ماه قبل", completed: false, dueDate: "۴ هفته قبل", priority: "optional", category: "کیک و شیرینی‌فروشی", attachedVendorId: null, vendorStatus: null },

      // ۱ هفته قبل
      { id: "chk-13", title: "هماهنگی نهایی سینک برنامه با تالار، آتلیه و تشریفات", timeframe: "۱ هفته قبل", completed: false, dueDate: "۵ روز قبل", priority: "urgent", category: "عمومی", attachedVendorId: null, vendorStatus: null },
      { id: "chk-14", title: "پرو نهایی لباس عروس و کت و شلوار داماد", timeframe: "۱ هفته قبل", completed: false, dueDate: "۳ روز قبل", priority: "urgent", category: "مزون و لباس عروس", attachedVendorId: null, vendorStatus: null },
      { id: "chk-15", title: "تمرین نهایی رقص ورود و ورودی جشن", timeframe: "۱ هفته قبل", completed: false, dueDate: "۲ روز قبل", priority: "optional", category: "عمومی", attachedVendorId: null, vendorStatus: null },

      // روز عروسی و بعد از آن
      { id: "chk-16", title: "حضور به موقع در آرایشگاه و شروع سناریوی تصویربرداری", timeframe: "روز عروسی و بعد از آن", completed: false, dueDate: "صبح عروسی", priority: "urgent", category: "سالن زیبایی", attachedVendorId: null, vendorStatus: null },
      { id: "chk-17", title: "تسویه حساب نهایی با تمامی تامین‌کنندگان", timeframe: "روز عروسی و بعد از آن", completed: false, dueDate: "پایان شب", priority: "urgent", category: "عمومی", attachedVendorId: null, vendorStatus: null },
      { id: "chk-18", title: "تحویل عکس‌ها و ویدیوهای خام جهت انتخاب آلبوم", timeframe: "روز عروسی و بعد از آن", completed: false, dueDate: "۲ هفته بعد", priority: "suggested", category: "آتلیه و عکاسی", attachedVendorId: null, vendorStatus: null }
    ];

    let activeChecklistFilter = "همه";

    let staticVendorApplications = [
      { id: "app-101", name: "تشریفات و گل‌آرایی مگنولیا", category: "گل‌آرایی و ماشین عروس", city: "تهران", manager: "علیرضا حسینی", phone: "۰۹۱۲۹۸۷۶۵۴۳", status: "pending" }
    ];

    let inquiries = [
      { id: 101, name: "امیرحسین رضایی", phone: "09121112233", date: "۱۴۰۳/۰۵/۲۰", guests: 250, details: "استعلام منوی دیس پرس همراه با ورودی و شمع‌آرایی" }
    ];

    // CHAT & MESSAGING SYSTEM STATE
    let chatState = {
      activeThreadId: "thread-1",
      threads: [
        {
          id: "thread-1",
          vendorId: 1,
          vendorName: "باغ تالار تشریفاتی زمرد",
          vendorCategory: "تالار و باغ تشریفات",
          vendorLogo: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80",
          verified: true,
          phone: "۰۲۱-۴۴۵۵۶۶۷۷",
          statusBadge: "quote_sent", // pending_quote, quote_sent, finalized
          statusText: "پیش‌فاکتور صادر شد",
          unreadCount: 0,
          lastMessage: "سلام، پیش‌فاکتور منوی VIP با تخفیف ویژه پلتفرم عروسی تو برای شما تنظیم و صادر شد.",
          lastTime: "۱۰:۴۵",
          inquiryData: {
            date: "۱۴۰۳/۰۶/۱۵",
            guests: 250,
            services: ["منوی شام VIP", "ورودی مجلل باغ", "شمع‌آرایی & آتش‌بازی"],
            budget: "۱۲۰ تا ۱۵۰ میلیون تومان",
            note: "سلام، درخواست استعلام قیمت برای ۲۵۰ نفر مهمان در تاریخ ۱۵ شهریور را دارم."
          },
          messages: [
            {
              id: "msg-101",
              sender: "user",
              text: "سلام و احترام، درخواست استعلام قیمت منوی VIP برای مراسم عروسی در تاریخ ۱۵ شهریور ۱۴۰۳ با ۲۵۰ نفر مهمان را دارم.",
              time: "۱۰:۳۰",
              isInquirySummary: true
            },
            {
              id: "msg-102",
              sender: "vendor",
              text: "سلام و تبریک فراوان بابت پیوندتان! بله، تاریخ ۱۵ شهریور خالي می‌باشد. ظرفیت تالار زمرد تا ۷۰۰ نفر است.",
              time: "۱۰:۳۸"
            },
            {
              id: "msg-103",
              sender: "vendor",
              text: "سلام، پیش‌فاکتور منوی VIP با تخفیف ویژه پلتفرم عروسی تو برای شما تنظیم و صادر شد.",
              time: "۱۰:۴۵",
              hasQuoteCard: true,
              quoteDetails: {
                title: "پیش‌فاکتور رسمی منوی VIP زمرد",
                amount: "۱۲۵,۰۰۰,۰۰۰ تومان",
                servicesIncluded: ["منوی سلف‌سرویس ۳ رنگ", "ورودی مجلل باغ", "شمع‌آرایی کامل میزها", "تست رایگان برای ۴ نفر"]
              }
            }
          ]
        },
        {
          id: "thread-2",
          vendorId: 2,
          vendorName: "آتلیه تخصصی نور و تصویر",
          vendorCategory: "آتلیه و عکاسی",
          vendorLogo: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=400&q=80",
          verified: true,
          phone: "۰۲۱-۲۲۳۳۴۴۵۵",
          statusBadge: "pending_quote",
          statusText: "در انتظار پاسخ استعلام",
          unreadCount: 1,
          lastMessage: "درخواست استعلام پکیج فرمالیته و روز عروسی ارسال گردید.",
          lastTime: "دیروز",
          inquiryData: {
            date: "۱۴۰۳/۰۶/۱۴",
            guests: 200,
            services: ["فیلمبرداری ۲ دوربین 4K", "عکاسی فرمالیته شمال", "آلبوم ایتالیایی 80x40"],
            budget: "۴۰ تا ۵۰ میلیون تومان",
            note: "درخواست استعلام پکیج کامل عکاسی روز عروسی و کلیپ فرمالیته."
          },
          messages: [
            {
              id: "msg-201",
              sender: "user",
              text: "سلام، درخواست استعلام پکیج فرمالیته شمال و تصویربرداری روز عروسی با ۲ دوربین 4K را دارم.",
              time: "دیروز ۱۶:۲۰",
              isInquirySummary: true
            },
            {
              id: "msg-202",
              sender: "vendor",
              text: "درخواست استعلام شما دریافت شد. مدیر آتلیه به زودی پکیج و نمونه کارهای اختصاصی را برای شما ارسال خواهد کرد.",
              time: "دیروز ۱۶:۲۲"
            }
          ]
        },
        {
          id: "thread-3",
          vendorId: 4,
          vendorName: "مزون عروس لوسیا",
          vendorCategory: "مزون و لباس عروس",
          vendorLogo: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=400&q=80",
          verified: true,
          phone: "۰۲۱-۸۸۹۹۷۷۶۶",
          statusBadge: "finalized",
          statusText: "رزرو نهایی شد",
          unreadCount: 0,
          lastMessage: "وقت پرو اول شما برای روز سه‌شنبه ساعت ۱۶:۰۰ هماهنگ شد.",
          lastTime: "۳ روز قبل",
          inquiryData: {
            date: "۱۴۰۳/۰۶/۱۰",
            guests: 0,
            services: ["دوخت اختصاصی لباس عروس A-line", "تاج و تور فرانسه"],
            budget: "۳۰ میلیون تومان",
            note: "هماهنگی وقت پرو و دوخت سفارش اختصاصی"
          },
          messages: [
            {
              id: "msg-301",
              sender: "user",
              text: "سلام، بیعانه سفارش دوخت لباس عروس واریز شد. جهت هماهنگی وقت پرو پیام دادم.",
              time: "۳ روز قبل"
            },
            {
              id: "msg-302",
              sender: "vendor",
              text: "وقت پرو اول شما برای روز سه‌شنبه ساعت ۱۶:۰۰ هماهنگ شد. منتظر حضور گرمتان هستیم!",
              time: "۳ روز قبل"
            }
          ]
        }
      ]
    };

    let bookedDates = [5, 12, 19, 26];

    // ROLE SWITCHER FUNCTION
    function switchRole(role) {
      document.querySelectorAll('.role-btn').forEach(btn => {
        btn.className = "role-btn px-3.5 py-1.5 rounded-xl transition-all text-secondary hover:text-graphite hover:bg-slate-100";
      });

      const activeRoleBtn = document.getElementById('role-btn-' + role);
      if (activeRoleBtn) {
        activeRoleBtn.className = "role-btn px-3.5 py-1.5 rounded-xl transition-all bg-primary text-white shadow-xs";
      }

      if (role === 'couple') {
        switchTab('home');
      } else if (role === 'vendor') {
        switchTab('vendor-dash');
      } else if (role === 'admin') {
        switchTab('admin');
      }
    }


    // ==========================================
    // GUEST LIST & CASH GIFT STATE & LOGIC
    // ==========================================
    let guestListState = [
      { id: "g-1", name: "دکتر حمیدرضا احمدی", side: "فامیل عروس", phone: "09121112233", companions: 2, table: "میز VIP ۱", status: "CONFIRMED" },
      { id: "g-2", name: "مهندس سارا نوری", side: "دوستان مشترک", phone: "09123334455", companions: 1, table: "میز ۴", status: "CONFIRMED" },
      { id: "g-3", name: "حاج محمود کریمی", side: "فامیل داماد", phone: "09125556677", companions: 3, table: "میز VIP ۲", status: "PENDING" },
      { id: "g-4", name: "استاد علی اکبر علوی", side: "همکاران", phone: "09127778899", companions: 1, table: "میز ۷", status: "DECLINED" },
      { id: "g-5", name: "مریم و نیما حسینی", side: "فامیل عروس", phone: "09128889900", companions: 2, table: "میز ۲", status: "CONFIRMED" }
    ];

    let giftLedgerState = [
      { id: "gift-1", guestName: "دکتر حمیدرضا احمدی", type: "نقدی", amount: 15000000, method: "کارت به کارت / پاکت نقدی", notes: "پاکت طلاکوب با یادداشت آرزوی خوشبختی" },
      { id: "gift-2", guestName: "مهندس سارا نوری", type: "واریز آنلاین کارت دعوت", amount: 10000000, method: "واریز آنلاین کارت دعوت", notes: "پرداخت مستقیم از درگاه درگاه آنلاین" },
      { id: "gift-3", guestName: "حاج محمود کریمی", type: "سکه طلا", amount: 35000000, method: "تحویل حضوری در سالن", notes: "یک عدد سکه کامل بهار آزادی" }
    ];

    function renderGuestsAndGifts() {
      renderGuestsKPIs();
      renderGuestsTable();
      renderGiftsTable();
    }

    function renderGuestsKPIs() {
      const totalGuestsCount = guestListState.reduce((acc, g) => acc + 1 + (parseInt(g.companions) || 0), 0);
      const totalPrimary = guestListState.length;
      const totalCompanions = guestListState.reduce((acc, g) => acc + (parseInt(g.companions) || 0), 0);

      const confirmedGuestsList = guestListState.filter(g => g.status === "CONFIRMED");
      const confirmedTotalCount = confirmedGuestsList.reduce((acc, g) => acc + 1 + (parseInt(g.companions) || 0), 0);
      const confirmedPercent = totalGuestsCount > 0 ? Math.round((confirmedTotalCount / totalGuestsCount) * 100) : 0;

      const declinedCount = guestListState.filter(g => g.status === "DECLINED").reduce((acc, g) => acc + 1 + (parseInt(g.companions) || 0), 0);
      const pendingCount = guestListState.filter(g => g.status === "PENDING").reduce((acc, g) => acc + 1 + (parseInt(g.companions) || 0), 0);

      const totalGiftsSum = giftLedgerState.reduce((acc, g) => acc + (parseInt(g.amount) || 0), 0);

      const kpiTotalEl = document.getElementById("kpi-total-guests");
      if (kpiTotalEl) kpiTotalEl.innerText = totalGuestsCount + " نفر";

      const kpiBreakdownEl = document.getElementById("kpi-total-breakdown");
      if (kpiBreakdownEl) kpiBreakdownEl.innerText = totalPrimary + " اصل + " + totalCompanions + " همراه";

      const kpiConfEl = document.getElementById("kpi-confirmed-guests");
      if (kpiConfEl) kpiConfEl.innerText = confirmedTotalCount + " نفر";

      const kpiConfPctEl = document.getElementById("kpi-confirmed-percent");
      if (kpiConfPctEl) kpiConfPctEl.innerText = confirmedPercent + "٪ از کل مدعوین";

      const kpiDecEl = document.getElementById("kpi-declined-guests");
      if (kpiDecEl) kpiDecEl.innerText = declinedCount + " نفر";

      const kpiPendEl = document.getElementById("kpi-pending-guests");
      if (kpiPendEl) kpiPendEl.innerText = pendingCount + " نفر در انتظار پاسخ";

      const kpiGiftsEl = document.getElementById("kpi-total-gifts");
      if (kpiGiftsEl) kpiGiftsEl.innerText = totalGiftsSum.toLocaleString("fa-IR") + " تومان";

      const kpiGiftCntEl = document.getElementById("kpi-gift-count");
      if (kpiGiftCntEl) kpiGiftCntEl.innerText = giftLedgerState.length + " فقره هدایای ثبت‌شده";
    }

    function switchGuestSubTab(sub) {
      const btnList = document.getElementById("guest-subtab-list");
      const btnGifts = document.getElementById("guest-subtab-gifts");
      const viewList = document.getElementById("guest-view-list");
      const viewGifts = document.getElementById("guest-view-gifts");

      if (sub === "list") {
        btnList.className = "flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold transition-all bg-primary text-white shadow-xs flex items-center justify-center gap-2";
        btnGifts.className = "flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold transition-all text-secondary hover:text-graphite flex items-center justify-center gap-2";
        viewList.classList.remove("hidden");
        viewGifts.classList.add("hidden");
      } else {
        btnGifts.className = "flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold transition-all bg-primary text-white shadow-xs flex items-center justify-center gap-2";
        btnList.className = "flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold transition-all text-secondary hover:text-graphite flex items-center justify-center gap-2";
        viewGifts.classList.remove("hidden");
        viewList.classList.add("hidden");
      }
    }

    function renderGuestsTable() {
      const tbody = document.getElementById("guests-table-body");
      if (!tbody) return;

      const searchVal = (document.getElementById("guest-search-input")?.value || "").toLowerCase().trim();
      const sideVal = document.getElementById("guest-filter-side")?.value || "ALL";
      const statusVal = document.getElementById("guest-filter-status")?.value || "ALL";

      const filtered = guestListState.filter(g => {
        const matchesSearch = !searchVal || g.name.toLowerCase().includes(searchVal) || g.phone.includes(searchVal) || (g.table && g.table.toLowerCase().includes(searchVal));
        const matchesSide = sideVal === "ALL" || g.side === sideVal;
        const matchesStatus = statusVal === "ALL" || g.status === statusVal;
        return matchesSearch && matchesSide && matchesStatus;
      });

      if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="p-8 text-center text-secondary font-bold">هیچ مهمانی با این مشخصات یافت نشد.</td></tr>';
        return;
      }

      tbody.innerHTML = filtered.map(g => {
        let statusBadge = "";
        if (g.status === "CONFIRMED") {
          statusBadge = '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold"><i data-lucide="check" class="w-3 h-3"></i> تایید شده</span>';
        } else if (g.status === "DECLINED") {
          statusBadge = '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 text-[11px] font-bold"><i data-lucide="x" class="w-3 h-3"></i> عذرخواهی کرده</span>';
        } else {
          statusBadge = '<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold"><i data-lucide="clock" class="w-3 h-3"></i> در انتظار</span>';
        }

        const waMessage = encodeURIComponent("سلام " + g.name + " عزیز، کارت دعوت دیجیتال عروسی ما آماده است. خوشحال می‌شویم با کلیک روی لینک زیر حضور گرم خود را اعلام فرمایید:");
        const waLink = "https://wa.me/" + g.phone.replace(/^0/, "98") + "?text=" + waMessage;

        return `
          <tr class="hover:bg-slate-50/80 transition-colors">
            <td class="p-3.5">
              <div class="font-bold text-graphite">${g.name}</div>
              <span class="inline-block mt-0.5 text-[10px] bg-slate-100 text-secondary border border-accent px-2 py-0.5 rounded-md">${g.side}</span>
            </td>
            <td class="p-3.5">
              <div class="text-xs text-graphite font-mono">${g.phone}</div>
              <a href="${waLink}" target="_blank" class="inline-flex items-center gap-1 text-[11px] text-emerald-700 hover:text-emerald-900 font-bold mt-0.5">
                <i data-lucide="send" class="w-3 h-3"></i> ارسال کارت در واتساپ
              </a>
            </td>
            <td class="p-3.5 text-center font-bold">
              + ${g.companions} همراه
            </td>
            <td class="p-3.5 text-center">
              <span class="bg-emerald-50 text-primary border border-emerald-200 px-2.5 py-1 rounded-lg text-xs font-bold">${g.table || "تعیین نشده"}</span>
            </td>
            <td class="p-3.5 text-center">
              ${statusBadge}
            </td>
            <td class="p-3.5 text-center">
              <div class="flex items-center justify-center gap-1.5">
                <button onclick="toggleGuestRsvp('${g.id}')" title="تغییر سریع وضعیت RSVP" class="p-1.5 rounded-lg bg-bgCustom hover:bg-slate-200 border border-accent text-primary">
                  <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
                </button>
                <button onclick="editGuest('${g.id}')" title="ویرایش مهمان" class="p-1.5 rounded-lg bg-bgCustom hover:bg-slate-200 border border-accent text-graphite">
                  <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                </button>
                <button onclick="deleteGuest('${g.id}')" title="حذف مهمان" class="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600">
                  <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join("");

      if (window.lucide) window.lucide.createIcons();
    }

    function renderGiftsTable() {
      const tbody = document.getElementById("gifts-table-body");
      if (!tbody) return;

      if (giftLedgerState.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="p-8 text-center text-secondary font-bold">هیچ هدایای ثبت‌شده‌ای موجود نیست.</td></tr>';
        return;
      }

      tbody.innerHTML = giftLedgerState.map(g => `
        <tr class="hover:bg-slate-50/80 transition-colors">
          <td class="p-3.5 font-bold text-graphite">${g.guestName}</td>
          <td class="p-3.5">
            <span class="px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg text-xs font-bold">${g.type}</span>
          </td>
          <td class="p-3.5 font-black text-primary">${(parseInt(g.amount) || 0).toLocaleString("fa-IR")} تومان</td>
          <td class="p-3.5 text-secondary font-medium">${g.method}</td>
          <td class="p-3.5 text-xs text-graphite">${g.notes || "-"}</td>
          <td class="p-3.5 text-center">
            <button onclick="deleteGift('${g.id}')" class="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </td>
        </tr>
      `).join("");

      const totalSum = giftLedgerState.reduce((acc, g) => acc + (parseInt(g.amount) || 0), 0);
      const footerSum = document.getElementById("gift-total-sum-footer");
      if (footerSum) footerSum.innerText = totalSum.toLocaleString("fa-IR") + " تومان";

      if (window.lucide) window.lucide.createIcons();
    }

    function openGuestModal() {
      document.getElementById("guest-form").reset();
      document.getElementById("guest-edit-id").value = "";
      document.getElementById("guest-modal-title").innerText = "افزودن مهمان جدید";
      document.getElementById("guest-modal").classList.remove("hidden");
    }

    function closeGuestModal() {
      document.getElementById("guest-modal").classList.add("hidden");
    }

    function handleGuestFormSubmit(e) {
      e.preventDefault();
      const editId = document.getElementById("guest-edit-id").value;
      const name = document.getElementById("guest-modal-name").value.trim();
      const side = document.getElementById("guest-modal-side").value;
      const phone = document.getElementById("guest-modal-phone").value.trim();
      const companions = parseInt(document.getElementById("guest-modal-companions").value) || 0;
      const table = document.getElementById("guest-modal-table").value.trim();
      const status = document.getElementById("guest-modal-status").value;

      if (editId) {
        const idx = guestListState.findIndex(g => g.id === editId);
        if (idx !== -1) {
          guestListState[idx] = { ...guestListState[idx], name, side, phone, companions, table, status };
        }
      } else {
        const newGuest = {
          id: "g-" + Date.now(),
          name, side, phone, companions, table, status
        };
        guestListState.unshift(newGuest);
      }

      closeGuestModal();
      renderGuestsAndGifts();
      showGlobalToast("اطلاعات مهمان با موفقیت بروزرسانی شد.");
    }

    function editGuest(id) {
      const g = guestListState.find(item => item.id === id);
      if (!g) return;
      document.getElementById("guest-edit-id").value = g.id;
      document.getElementById("guest-modal-name").value = g.name;
      document.getElementById("guest-modal-side").value = g.side;
      document.getElementById("guest-modal-phone").value = g.phone;
      document.getElementById("guest-modal-companions").value = g.companions;
      document.getElementById("guest-modal-table").value = g.table || "";
      document.getElementById("guest-modal-status").value = g.status;

      document.getElementById("guest-modal-title").innerText = "ویرایش مشخصات مهمان";
      document.getElementById("guest-modal").classList.remove("hidden");
    }

    function deleteGuest(id) {
      if (confirm("آیا از حذف این مهمان اطمینان دارید؟")) {
        guestListState = guestListState.filter(g => g.id !== id);
        renderGuestsAndGifts();
        showToast("مهمان از لیست حذف گردید.", 'danger');
      }
    }

    function toggleGuestRsvp(id) {
      const g = guestListState.find(item => item.id === id);
      if (!g) return;
      if (g.status === "CONFIRMED") g.status = "DECLINED";
      else if (g.status === "DECLINED") g.status = "PENDING";
      else g.status = "CONFIRMED";

      renderGuestsAndGifts();
      showToast("وضعیت RSVP مهمان به روز شد.", 'info');
    }

    function openGiftModal() {
      document.getElementById("gift-form").reset();
      document.getElementById("gift-edit-id").value = "";
      document.getElementById("gift-modal-title").innerText = "ثبت هدیه یا شاباش جدید";
      document.getElementById("gift-modal").classList.remove("hidden");
    }

    function closeGiftModal() {
      document.getElementById("gift-modal").classList.add("hidden");
    }

    function handleGiftFormSubmit(e) {
      e.preventDefault();
      const guestName = document.getElementById("gift-modal-name").value.trim();
      const type = document.getElementById("gift-modal-type").value;
      const amount = parseInt(document.getElementById("gift-modal-amount").value) || 0;
      const method = document.getElementById("gift-modal-method").value;
      const notes = document.getElementById("gift-modal-notes").value.trim();

      const newGift = {
        id: "gift-" + Date.now(),
        guestName, type, amount, method, notes
      };

      giftLedgerState.unshift(newGift);
      closeGiftModal();
      renderGuestsAndGifts();
      showGlobalToast("هدیه با موفقیت در صندوق هدایا ثبت شد.");
    }

    function deleteGift(id) {
      if (confirm("آیا از حذف این رکورد هدیه اطمینان دارید؟")) {
        giftLedgerState = giftLedgerState.filter(g => g.id !== id);
        renderGuestsAndGifts();
        showToast("رکورد هدیه حذف گردید.", 'danger');
      }
    }

    function exportGuestsExcel() {
      showToast("خروجی کامل لیست مهمانان و هدایا در قالب Excel آماده گردید.", 'info');
    }

    // TAB SWITCHING FUNCTION
    function switchTab(tabId) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
      if (tabId === 'guests') renderGuestsAndGifts();
      if (tabId === 'directory') {
        if (typeof renderSidebarCategoryCheckboxes === 'function') renderSidebarCategoryCheckboxes();
        if (typeof renderMultiCategoryPills === 'function') renderMultiCategoryPills();
        if (typeof filterVendors === 'function') filterVendors();
      }
      const target = document.getElementById('tab-' + tabId);
      if (target) target.classList.remove('hidden');

      document.querySelectorAll('.demo-tab-btn').forEach(btn => {
        btn.className = "demo-tab-btn px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all bg-white/10 hover:bg-white/20 text-slate-200";
      });

      const activeDemoBtn = document.getElementById('demo-tab-' + tabId);
      if (activeDemoBtn) {
        activeDemoBtn.className = "demo-tab-btn px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all bg-primary text-white shadow-xs";
      }

      lucide.createIcons();
    }

    function startQuizRunner(quizId) {
      const quiz = quizState.quizzes.find(q => q.id === quizId);
      if (!quiz) return;

      quizState.currentQuiz = quiz;
      quizState.currentQuestionIndex = 0;
      quizState.userAnswers = {};
      quizState.quizCompleted = false;

      document.getElementById('quiz-catalog-view').classList.add('hidden');
      document.getElementById('quiz-result-view').classList.add('hidden');

      const runnerView = document.getElementById('quiz-runner-view');
      if (runnerView) {
        runnerView.classList.remove('hidden');
        renderQuizQuestion();
      }
    }

    function finishQuizRunner() {
      const quiz = quizState.currentQuiz;
      if (!quiz) return;

      quizState.quizCompleted = true;
      document.getElementById('quiz-runner-view').classList.add('hidden');

      const resultView = document.getElementById('quiz-result-view');
      if (resultView) {
        resultView.classList.remove('hidden');
        renderQuizResultDashboard();
      }
    }

    function renderQuizResultDashboard() {
      const resultView = document.getElementById('quiz-result-view');
      const quiz = quizState.currentQuiz;
      if (!resultView || !quiz) return;

      // Calculate scores
      const styleScores = {
        boho: 0,
        luxury: 0,
        modern: 0,
        classic: 0,
        vintage: 0,
        romantic: 0,
        compat: 0
      };

      let totalPoints = 0;

      Object.values(quizState.userAnswers).forEach(answer => {
        if (answer && answer.score) {
          Object.keys(answer.score).forEach(key => {
            styleScores[key] = (styleScores[key] || 0) + answer.score[key];
            totalPoints += answer.score[key];
          });
        }
      });

      let mainResultHTML = '';

      if (quiz.category !== 'psychology') {
        // Sort styles by highest score
        const sortedStyles = Object.keys(styleScores)
          .filter(k => k !== 'compat' && styleScores[k] > 0)
          .sort((a, b) => styleScores[b] - a[a]);

        const dominantKey = sortedStyles[0] || 'boho';
        const secondaryKey = sortedStyles[1] || 'romantic';

        const domPct = totalPoints > 0 ? Math.round((styleScores[dominantKey] / totalPoints) * 100) : 75;
        const secPct = totalPoints > 0 && secondaryKey ? Math.round((styleScores[secondaryKey] / totalPoints) * 100) : 25;

        const styleTitles = {
          boho: "بوهو و طبیعت‌گرا (Boho Chic)",
          luxury: "لوکس و باشکوه (VIP Royal)",
          modern: "مدرن و مینی‌مال (Modern Minimal)",
          classic: "کلاسیک و اصیل (Classic Regal)",
          vintage: "وینتیج و نوستالژیک (Vintage Warmth)",
          romantic: "رومانتیک و رویایی (Romantic Floral)"
        };

        const styleDescriptions = {
          boho: "استایل شما برپایه صمیمیت، المان‌های چوبی طبیعی، گل‌آرایی‌های آزاد وحشی و اتمسفر گرم طبیعت شکل گرفته است. لباس‌های سبک گیپور و سفره عقد با طاق برنجی بهترین مکمل زیبایی شماست.",
          luxury: "استایل شما جلوه‌گر شکوه، عمارت‌های ستون‌دار با نورپردازی کریستال، سفره عقد طبقاتی تمام سنگ و پذیرایی VIP شاهانه است.",
          modern: "استایل شما طرفدار خطوط پاک هندسی، تزئینات مینی‌مال، پالت‌های رنگی خنثی شیک و معماری مدرن با نورپردازی مهندسی شده است.",
          classic: "استایل شما وفادار به اصالت کلاسیـک، لباس پرنسسی، سفره عقد ترمه و آینه‌کاری‌های سنتی با اتمسفر وقار و متانت است.",
          vintage: "استایل شما دارای حس گرم نوستالژی، شمعدان‌های لاله‌عباسی، ظروف برنجی قدیمی و دکوراسیون گرم و دلنشین است.",
          romantic: "استایل شما سرشار از شکوفه‌های رز صورتی و پودری، طاق‌های گل‌آرایی شده، موزیک ملایم ویولن و لحظات عاطفی خاص است."
        };

        const palettes = {
          boho: [
            { name: "سبز زیتونی", hex: "#1B3B2B" },
            { name: "تراکوتا گرم", hex: "#D4A373" },
            { name: "کرم خاکی", hex: "#E9D8A6" },
            { name: "عاجی روشن", hex: "#FAEDCD" }
          ],
          luxury: [
            { name: "زمردی تیره", hex: "#1B3B2B" },
            { name: "طلایی شاهانه", hex: "#D4AF37" },
            { name: "شرابی VIP", hex: "#5C1325" },
            { name: "سفید کریستالی", hex: "#FFFFFF" }
          ],
          modern: [
            { name: "مشکی گرافیت", hex: "#111E16" },
            { name: "خاکستری فولادی", hex: "#8D99AE" },
            { name: "پلاتینیوم", hex: "#E0D8C8" },
            { name: "سفید یخچالی", hex: "#F5EFEB" }
          ],
          classic: [
            { name: "سرمه‌ای سلطنتی", hex: "#1A2E40" },
            { name: "طلایی مات", hex: "#C5A059" },
            { name: "کرم عاجی", hex: "#F5F0EB" },
            { name: "زرشکی کلاسیـک", hex: "#800020" }
          ],
          vintage: [
            { name: "قهوه‌ای بلوطی", hex: "#6B4226" },
            { name: "خردلی گرم", hex: "#E3A857" },
            { name: "بژ نوستالژیک", hex: "#D2B48C" },
            { name: "سبز کهن", hex: "#4A5D4E" }
          ],
          romantic: [
            { name: "صورتی پودری", hex: "#F4C2C2" },
            { name: "یاسی ملایم", hex: "#E6E6FA" },
            { name: "سفید مرواریدی", hex: "#FDFBF7" },
            { name: "سبز زیتونی روشن", hex: "#A8BBA2" }
          ]
        };

        const currentPalette = palettes[dominantKey] || palettes.boho;

        quizState.appliedStyleFilter = dominantKey;

        mainResultHTML = `
          <!-- MAIN MATCH BANNER -->
          <div class="bg-gradient-to-br from-primary/10 via-emerald-50 to-bgCustom border border-primary/20 rounded-3xl p-6 sm:p-8 space-y-6">
            <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-primary/20 pb-4">
              <div class="space-y-1">
                <span class="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">نتیجه محاسبات هوشمند استایل</span>
                <h3 class="text-2xl font-black text-graphite mt-1">${styleTitles[dominantKey]}</h3>
              </div>

              <div class="flex items-center gap-2 self-start sm:self-auto">
                <div class="text-left dir-ltr">
                  <span class="block text-2xl font-black text-primary">${domPct}٪</span>
                  <span class="text-[10px] font-bold text-secondary">درصد تطابق اصلی</span>
                </div>
              </div>
            </div>

            <!-- SCORE BREAKDOWN BARS -->
            <div class="space-y-3">
              <span class="block text-xs font-bold text-graphite">تفکیک تمایل استایل بصری شما:</span>

              <div class="space-y-2">
                <div class="flex justify-between items-center text-xs font-bold">
                  <span class="text-primary">${styleTitles[dominantKey]}</span>
                  <span class="text-primary">${domPct}٪</span>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div class="bg-primary h-full rounded-full" style="width: ${domPct}%"></div>
                </div>
              </div>

              ${secondaryKey ? `
                <div class="space-y-2">
                  <div class="flex justify-between items-center text-xs font-bold">
                    <span class="text-secondary">${styleTitles[secondaryKey]}</span>
                    <span class="text-secondary">${secPct}٪</span>
                  </div>
                  <div class="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                    <div class="bg-secondary h-full rounded-full" style="width: ${secPct}%"></div>
                  </div>
                </div>
              ` : ''}
            </div>

            <!-- AESTHETIC SUMMARY GUIDANCE -->
            <div class="p-4 bg-white rounded-2xl border border-accent/80 text-xs text-graphite leading-relaxed space-y-2">
              <span class="font-bold text-primary block text-sm">راهنمای بصری و دکوراسیون پیشنهادی:</span>
              <p>${styleDescriptions[dominantKey]}</p>
            </div>

            <!-- COLOR PALETTE SWATCHES -->
            <div class="space-y-2">
              <span class="block text-xs font-bold text-graphite">پالت رنگی پیشنهادی برای تزئینات و گل‌آرایی:</span>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                ${currentPalette.map(c => `
                  <div class="p-2.5 bg-white rounded-xl border border-accent flex items-center gap-2.5 shadow-xs">
                    <div class="w-8 h-8 rounded-lg border border-accent shadow-xs shrink-0" style="background-color: ${c.hex}"></div>
                    <div>
                      <span class="block text-xs font-bold text-graphite">${c.name}</span>
                      <span class="text-[10px] text-secondary font-mono dir-ltr block">${c.hex}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      } else {
        // Psychology Compatibility Result
        const compatScore = Math.min(98, Math.max(65, Math.round((styleScores.compat / (quiz.questions.length * 90)) * 100)));

        mainResultHTML = `
          <div class="bg-gradient-to-br from-rose-50 via-pink-50/30 to-bgCustom border border-rose-200 rounded-3xl p-6 sm:p-8 space-y-6">
            <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-rose-200 pb-4">
              <div>
                <span class="text-xs font-bold text-rose-700 bg-rose-100 px-3 py-1 rounded-full">نتیجه آنالیز روانشناسی</span>
                <h3 class="text-2xl font-black text-graphite mt-1">شاخص تفاهم و سازگاری در برنامه‌ریزی: عالی</h3>
              </div>

              <div class="text-left dir-ltr bg-white p-3 rounded-2xl border border-rose-200 shadow-xs">
                <span class="block text-3xl font-black text-rose-600">${compatScore}٪</span>
                <span class="text-[10px] font-bold text-secondary">میزان تفاهم مشترک</span>
              </div>
            </div>

            <div class="p-5 bg-white rounded-2xl border border-rose-100 text-xs text-graphite leading-relaxed space-y-3">
              <h4 class="font-bold text-rose-800 text-sm">توصیه‌های مشاوره خانواده برای روزهای برنامه‌ریزی:</h4>
              <p>الگوهای انتخابی شما نشان‌دهنده سطح بالای پختگی هیجانی، احترام متقابل به نظرات خانواده‌ها و توانایی گفتگو در شرایط پرچالش است. پیشنهاد می‌شود وظایف چک‌لیست را بر اساس علاقه‌مندی‌های شخصی تقسیم کنید.</p>
            </div>
          </div>
        `;
      }

      resultView.innerHTML = `
        <!-- HEADER ACTIONS -->
        <div class="flex justify-between items-center border-b border-accent pb-4">
          <div class="flex items-center gap-2">
            <i data-lucide="award" class="w-6 h-6 text-primary"></i>
            <h2 class="text-xl font-bold text-graphite">کارت تحلیل زنده و اختصاصی تست</h2>
          </div>

          <button onclick="exitQuizRunner()" class="text-xs font-bold text-secondary hover:text-graphite flex items-center gap-1">
            <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
            <span>تکرار یا شرکت در تست دیگر</span>
          </button>
        </div>

        <!-- MAIN RESULT RENDER -->
        ${mainResultHTML}

        <!-- INTEGRATED ACTION BUTTONS -->
        <div class="pt-4 border-t border-accent grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button onclick="applyStyleToDirectory()" class="bg-primary hover:bg-emerald-900 text-white font-bold py-3 px-4 rounded-2xl text-xs shadow-md transition-all flex items-center justify-center gap-2">
            <i data-lucide="filter" class="w-4 h-4"></i>
            <span>اعمال این استایل روی دایرکتوری و چک‌لیست</span>
          </button>

          <button onclick="showToast('کارت تحلیل خلاصه استایل با موفقیت جهت دانلود یا پرینت آماده شد.', 'info');" class="bg-bgCustom border border-accent hover:border-primary text-graphite font-bold py-3 px-4 rounded-2xl text-xs shadow-xs transition-all flex items-center justify-center gap-2">
            <i data-lucide="download" class="w-4 h-4 text-primary"></i>
            <span>دانلود کارت تحلیل استایل</span>
          </button>

          <button onclick="copyQuizResultLink()" class="bg-bgCustom border border-accent hover:border-primary text-graphite font-bold py-3 px-4 rounded-2xl text-xs shadow-xs transition-all flex items-center justify-center gap-2">
            <i data-lucide="share-2" class="w-4 h-4 text-primary"></i>
            <span>اشتراک‌گذاری با همسر / پارتنر</span>
          </button>
        </div>
      `;

      lucide.createIcons();
    }

    function applyStyleToDirectory() {
      switchTab('home');
      const vendorSection = document.getElementById('vendor-grid');
      if (vendorSection) vendorSection.scrollIntoView({ behavior: 'smooth' });
      showToast('استایل انتخابی شما روی دایرکتوری تامین‌کنندگان و پیشنهادات چک‌لیست اعمال گردید.', 'success');
    }

    function copyQuizResultLink() {
      const link = 'https://aroosito.com/quizzes/result?id=' + (quizState.currentQuiz ? quizState.currentQuiz.id : 'style');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(link);
        showToast('لینک خلاصه تحلیل استایل برای اشتراک‌گذاری کپی شد', 'info');
      } else {
        showToast('لینک تحلیل استایل: ' + link, 'info');
      }
    }

    function exitQuizRunner() {
      quizState.currentQuiz = null;
      quizState.currentQuestionIndex = 0;
      quizState.userAnswers = {};

      document.getElementById('quiz-runner-view').classList.add('hidden');
      document.getElementById('quiz-result-view').classList.add('hidden');
      document.getElementById('quiz-catalog-view').classList.remove('hidden');
    }

    function renderQuizQuestion() {
      const runnerView = document.getElementById('quiz-runner-view');
      const quiz = quizState.currentQuiz;
      if (!runnerView || !quiz) return;

      const totalQuestions = quiz.questions.length;
      const currentIndex = quizState.currentQuestionIndex;
      const question = quiz.questions[currentIndex];
      const selectedOption = quizState.userAnswers[question.id];

      const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

      let optionsHTML = '';

      if (question.options[0] && question.options[0].image) {
        // Render Image Choice Cards Grid
        optionsHTML = `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            ${question.options.map(opt => {
              const isSelected = selectedOption && selectedOption.id === opt.id;
              return `
                <div onclick="selectQuizOption('${question.id}', '${opt.id}')" class="p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  isSelected ? 'bg-primary/10 border-primary shadow-md' : 'bg-bgCustom border-accent hover:border-primary/50'
                }">
                  <div class="aspect-4/3 rounded-xl overflow-hidden bg-slate-900 border border-accent">
                    <img src="${opt.image}" alt="${opt.label}" class="w-full h-full object-cover">
                  </div>
                  <div class="flex items-center justify-between text-xs font-bold text-graphite">
                    <span class="leading-snug">${opt.label}</span>
                    <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-primary bg-primary text-white' : 'border-secondary/40'
                    }">
                      ${isSelected ? '✓' : ''}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      } else {
        // Render Text Choice Cards
        optionsHTML = `
          <div class="space-y-3 max-w-2xl mx-auto">
            ${question.options.map(opt => {
              const isSelected = selectedOption && selectedOption.id === opt.id;
              return `
                <div onclick="selectQuizOption('${question.id}', '${opt.id}')" class="p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isSelected ? 'bg-primary/10 border-primary shadow-md' : 'bg-bgCustom border-accent hover:border-primary/50'
                }">
                  <span class="text-xs sm:text-sm font-bold text-graphite leading-relaxed">${opt.label}</span>
                  <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    isSelected ? 'border-primary bg-primary text-white' : 'border-secondary/40'
                  }">
                    ${isSelected ? '✓' : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }

      runnerView.innerHTML = `
        <!-- HEADER & PROGRESS BAR -->
        <div class="border-b border-accent pb-6 space-y-4">
          <div class="flex justify-between items-center text-xs font-bold">
            <button onclick="exitQuizRunner()" class="text-secondary hover:text-graphite flex items-center gap-1">
              <i data-lucide="x" class="w-4 h-4"></i>
              <span>انصراف و خروج</span>
            </button>

            <span class="text-primary font-black bg-primary/10 px-3 py-1 rounded-full">
              سوال ${currentIndex + 1} از ${totalQuestions}
            </span>
          </div>

          <div class="space-y-1.5">
            <div class="flex justify-between text-[11px] font-bold text-secondary">
              <span>میزان پیشرفت تست</span>
              <span>${progressPercent}٪</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-accent/60">
              <div class="bg-primary h-full transition-all duration-300 rounded-full" style="width: ${progressPercent}%"></div>
            </div>
          </div>
        </div>

        <!-- QUESTION PROMPT -->
        <div class="text-center space-y-2 py-2">
          <h3 class="text-lg sm:text-xl font-black text-graphite leading-relaxed">${question.text}</h3>
          <p class="text-xs text-secondary font-medium">گزینه‌ای که بیشترین تطابق را با نظر و روحیات شما دارد انتخاب کنید</p>
        </div>

        <!-- OPTIONS GRID/LIST -->
        <div>
          ${optionsHTML}
        </div>

        <!-- NAVIGATION CONTROLS -->
        <div class="pt-6 border-t border-accent flex justify-between items-center">
          <button onclick="navigateQuizQuestion(-1)" class="px-5 py-2.5 rounded-xl border border-accent text-secondary hover:text-graphite font-bold text-xs transition-all ${
            currentIndex === 0 ? 'opacity-40 pointer-events-none' : ''
          }">
            سوال قبلی
          </button>

          ${currentIndex === totalQuestions - 1 ? `
            <button onclick="finishQuizRunner()" class="bg-primary hover:bg-emerald-900 text-white px-8 py-3 rounded-xl font-bold text-xs shadow-md transition-all flex items-center gap-1.5 ${
              !selectedOption ? 'opacity-50 pointer-events-none' : ''
            }">
              <i data-lucide="check-circle-2" class="w-4 h-4"></i>
              <span>مشاهده خروجی و تحلیل نهایی</span>
            </button>
          ` : `
            <button onclick="navigateQuizQuestion(1)" class="bg-primary hover:bg-emerald-900 text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center gap-1.5 ${
              !selectedOption ? 'opacity-50 pointer-events-none' : ''
            }">
              <span>سوال بعدی</span>
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
            </button>
          `}
        </div>
      `;

      lucide.createIcons();
    }

    function selectQuizOption(questionId, optionId) {
      const quiz = quizState.currentQuiz;
      if (!quiz) return;

      const question = quiz.questions.find(q => q.id === questionId);
      if (!question) return;

      const option = question.options.find(o => o.id === optionId);
      if (!option) return;

      quizState.userAnswers[questionId] = option;
      renderQuizQuestion();
    }

    function navigateQuizQuestion(dir) {
      const quiz = quizState.currentQuiz;
      if (!quiz) return;

      const newIndex = quizState.currentQuestionIndex + dir;
      if (newIndex >= 0 && newIndex < quiz.questions.length) {
        quizState.currentQuestionIndex = newIndex;
        renderQuizQuestion();
      }
    }

    // GALLERY LIGHTBOX

    // PORTFOLIO GALLERY CRUD STATE & HANDLERS
    let vendorPortfolio = [
      {
        id: 'port-1',
        title: 'دیزاین سفره عقد و گل‌آرایی سالن زمرد',
        category: 'مراسم عقد',
        image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'port-2',
        title: 'نورپردازی مدرن و دکوراسیون جایگاه عروس و داماد',
        category: 'جشن عروسی',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'port-3',
        title: 'چیدمان فضای باز و پذیرایی کوکتل فضا',
        category: 'فرمالیته',
        image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'port-4',
        title: 'گل‌آرایی اختصاصی ورود و ماشین عروس',
        category: 'دیزاین & گل‌آرایی',
        image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80'
      }
    ];

    function renderPortfolioUI() {
      const dashContainer = document.getElementById('vd-portfolio-grid');
      const publicContainer = document.getElementById('vp-gallery-grid');

      // 1. Render Dashboard Portfolio Grid
      if (dashContainer) {
        dashContainer.innerHTML = '';
        if (vendorPortfolio.length === 0) {
          dashContainer.innerHTML = `
            <div class="col-span-full border-2 border-dashed border-accent rounded-2xl p-8 text-center text-secondary space-y-2">
              <i data-lucide="image-off" class="w-10 h-10 mx-auto text-secondary/50"></i>
              <p class="text-xs font-bold">هیچ نمونه‌کاری ثبت نشده است.</p>
              <p class="text-[11px]">با استفاده از دکمه «افزودن نمونه‌کار جدید» اولین نمونه کار خود را قرار دهید.</p>
            </div>
          `;
        } else {
          vendorPortfolio.forEach(item => {
            const card = document.createElement('div');
            card.className = "bg-bgCustom border border-accent rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between";
            card.innerHTML = `
              <div>
                <div class="h-40 w-full relative bg-slate-100 overflow-hidden">
                  <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
                  <span class="absolute top-2.5 right-2.5 bg-graphite/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    ${item.category}
                  </span>
                </div>
                <div class="p-3 space-y-1">
                  <h4 class="text-xs font-bold text-graphite line-clamp-2 min-h-[2.25rem]">${item.title}</h4>
                </div>
              </div>
              <div class="p-3 pt-0 border-t border-accent/40 mt-2 flex items-center justify-between gap-2 text-xs font-bold">
                <button type="button" onclick="openPortfolioModal('${item.id}')" class="flex-1 bg-white hover:bg-slate-100 text-graphite border border-accent py-1.5 px-2 rounded-xl transition-colors flex items-center justify-center gap-1 text-[11px]">
                  <i data-lucide="edit-2" class="w-3.5 h-3.5 text-primary"></i>
                  <span>ویرایش</span>
                </button>
                <button type="button" onclick="deletePortfolioItem('${item.id}')" class="bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 py-1.5 px-2.5 rounded-xl transition-colors flex items-center justify-center gap-1 text-[11px]">
                  <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                  <span>حذف</span>
                </button>
              </div>
            `;
            dashContainer.appendChild(card);
          });
        }
      }

      // 2. Render Public Profile Gallery Grid
      if (publicContainer) {
        publicContainer.innerHTML = '';
        if (vendorPortfolio.length === 0) {
          publicContainer.innerHTML = `
            <div class="col-span-full border border-accent rounded-2xl p-8 text-center text-secondary text-xs font-bold">
              نمونه‌کاری برای نمایش وجود ندارد.
            </div>
          `;
        } else {
          vendorPortfolio.forEach((item, idx) => {
            const div = document.createElement('div');
            div.className = "aspect-square rounded-2xl overflow-hidden border border-accent relative group cursor-pointer shadow-xs";
            div.onclick = () => openLightbox(item.image);
            div.innerHTML = `
              <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
              <div class="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 text-white">
                <span class="self-end bg-white/20 backdrop-blur-xs text-[10px] font-bold px-2 py-0.5 rounded-full">${item.category}</span>
                <div>
                  <p class="text-xs font-bold line-clamp-1">${item.title}</p>
                  <p class="text-[10px] opacity-80 flex items-center gap-1 mt-1"><i data-lucide="maximize-2" class="w-3 h-3"></i> کلیک جهت مشاهده</p>
                </div>
              </div>
            `;
            publicContainer.appendChild(div);
          });
        }
      }

      lucide.createIcons();
    }

    let tempModalImageBase64 = null;

    function openPortfolioModal(id = null) {
      const modal = document.getElementById('portfolio-modal');
      const modalTitle = document.getElementById('portfolio-modal-title');
      const idInput = document.getElementById('port-id');
      const titleInput = document.getElementById('port-title');
      const catInput = document.getElementById('port-category');
      const urlInput = document.getElementById('port-img-url');
      const fileInput = document.getElementById('port-img-file');

      tempModalImageBase64 = null;
      if (fileInput) fileInput.value = '';

      if (id) {
        const item = vendorPortfolio.find(p => p.id === id);
        if (item) {
          modalTitle.innerText = 'ویرایش نمونه‌کار';
          idInput.value = item.id;
          titleInput.value = item.title;
          catInput.value = item.category || 'مراسم عقد';
          urlInput.value = item.image.startsWith('data:') ? '' : item.image;
          previewPortfolioModalImage(item.image);
        }
      } else {
        modalTitle.innerText = 'افزودن نمونه‌کار جدید';
        idInput.value = '';
        titleInput.value = '';
        catInput.value = 'مراسم عقد';
        urlInput.value = '';
        previewPortfolioModalImage('');
      }

      if (modal) modal.classList.remove('hidden');
    }

    function closePortfolioModal() {
      const modal = document.getElementById('portfolio-modal');
      if (modal) modal.classList.add('hidden');
    }

    function previewPortfolioModalImage(src) {
      const img = document.getElementById('port-img-preview');
      const placeholder = document.getElementById('port-img-placeholder');

      if (src && src.trim() !== '') {
        img.src = src;
        img.classList.remove('hidden');
        placeholder.classList.add('hidden');
      } else {
        img.src = '';
        img.classList.add('hidden');
        placeholder.classList.remove('hidden');
      }
    }

    function handlePortfolioFileSelect(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        tempModalImageBase64 = e.target.result;
        previewPortfolioModalImage(tempModalImageBase64);
        document.getElementById('port-img-url').value = '';
      };
      reader.readAsDataURL(file);
    }

    function handlePortfolioSubmit(e) {
      e.preventDefault();
      const id = document.getElementById('port-id').value;
      const title = document.getElementById('port-title').value.trim();
      const category = document.getElementById('port-category').value;
      const url = document.getElementById('port-img-url').value.trim();

      const finalImg = tempModalImageBase64 || url || 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80';

      if (id) {
        // Edit mode
        const index = vendorPortfolio.findIndex(p => p.id === id);
        if (index !== -1) {
          vendorPortfolio[index] = { id, title, category, image: finalImg };
        }
      } else {
        // Add mode
        const newItem = {
          id: 'port-' + Date.now(),
          title,
          category,
          image: finalImg
        };
        vendorPortfolio.push(newItem);

        // Sync into public Inspiration Hub ideas linked directly to creator vendor profile
        const activeVendor = vendors[0];
        const newIdea = {
          id: Date.now(),
          title,
          categoryKey: 'all',
          categoryName: category,
          vendorCategoryMatch: activeVendor ? activeVendor.category : 'تالار و باغ تشریفات',
          image: finalImg,
          viewsCount: '۱ (جدید)',
          vendor: {
            id: activeVendor ? activeVendor.id : 1,
            name: activeVendor ? activeVendor.name : 'تامین‌کننده',
            avatar: activeVendor ? activeVendor.image : finalImg,
            category: activeVendor ? activeVendor.category : category,
            district: activeVendor ? activeVendor.district : 'صفائیه یزد',
            rating: activeVendor ? activeVendor.rating : 4.9
          }
        };
        inspirationState.items.unshift(newIdea);
        renderInspirationGalleryGrid();
        showToast('نمونه‌کار و ایده جدید با موفقیت منتشر گردید', 'success');
      }

      renderPortfolioUI();
      closePortfolioModal();
    }

    function deletePortfolioItem(id) {
      if (confirm('آیا از حذف این نمونه‌کار مطمئن هستید؟')) {
        vendorPortfolio = vendorPortfolio.filter(p => p.id !== id);
        renderPortfolioUI();
      }
    }


    function renderGallery() {
      const container = document.getElementById('vp-gallery-grid');
      if (!container) return;
      container.innerHTML = '';

      galleryPhotos.forEach((img, idx) => {
        const div = document.createElement('div');
        div.className = "aspect-square rounded-2xl overflow-hidden border border-accent relative group cursor-pointer shadow-xs";
        div.onclick = () => openLightbox(img);
        div.innerHTML = `
          <img src="${img}" alt="نمونه کار ${idx + 1}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
          <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs">
            <i data-lucide="maximize-2" class="w-6 h-6"></i>
          </div>
        `;
        container.appendChild(div);
      });
      lucide.createIcons();
    }

    function openLightbox(src) {
      document.getElementById('lightbox-img').src = src;
      document.getElementById('lightbox-modal').classList.remove('hidden');
    }

    function closeLightbox() {
      document.getElementById('lightbox-modal').classList.add('hidden');
    }

    // VENDOR PACKAGES
    function renderVendorPackages() {
      const pubContainer = document.getElementById('vp-packages-container');
      const dashContainer = document.getElementById('vd-packages-list');

      if (pubContainer) {
        pubContainer.innerHTML = '';
        vendorPackages.forEach(pkg => {
          const card = document.createElement('div');
          card.className = "bg-bgCustom border border-accent rounded-2xl p-5 space-y-4 shadow-xs hover:border-primary transition-all flex flex-col justify-between";
          card.innerHTML = `
            <div class="space-y-2">
              <span class="text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">پکیج رسمی</span>
              <h4 class="text-base font-bold text-graphite">${pkg.name}</h4>
              <p class="text-sm font-black text-primary">${pkg.price}</p>

              <ul class="space-y-2 pt-2 border-t border-accent/60 text-xs text-graphite">
                ${pkg.features.map(f => `<li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-primary shrink-0"></i><span>${f}</span></li>`).join('')}
              </ul>
            </div>

            <button onclick="openInquiryModal(1, '${pkg.name}')" class="w-full bg-primary hover:bg-emerald-900 text-white font-bold py-2.5 rounded-xl text-xs transition-colors">
              استعلام و رزرو این پکیج
            </button>
          `;
          pubContainer.appendChild(card);
        });
      }

      if (dashContainer) {
        dashContainer.innerHTML = '';
        vendorPackages.forEach(pkg => {
          const card = document.createElement('div');
          card.className = "bg-bgCustom border border-accent rounded-2xl p-4 space-y-2 text-xs";
          card.innerHTML = `
            <div class="flex justify-between items-center font-bold text-graphite">
              <span>${pkg.name}</span>
              <button onclick="deletePackage('${pkg.id}')" class="text-rose-600 hover:underline text-[11px]">حذف</button>
            </div>
            <p class="text-primary font-bold">${pkg.price}</p>
            <p class="text-secondary text-[11px] truncate">${pkg.features.join(' ، ')}</p>
          `;
          dashContainer.appendChild(card);
        });
      }

      lucide.createIcons();
    }

    function toggleAddPackageModal(show) {
      const modal = document.getElementById('package-modal');
      if (modal) {
        if (show) modal.classList.remove('hidden');
        else modal.classList.add('hidden');
      }
    }

    function handleAddPackageSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('pkg-name').value.trim();
      const price = document.getElementById('pkg-price').value.trim();
      const featuresRaw = document.getElementById('pkg-features').value.trim();

      if (!name || !price) return;

      const features = featuresRaw ? featuresRaw.split(',').map(f => f.trim()) : ['خدمات با کیفیت کامل'];

      vendorPackages.push({ id: 'pkg-' + Date.now(), name, price, features });
      renderVendorPackages();
      toggleAddPackageModal(false);
      document.getElementById('pkg-name').value = '';
      document.getElementById('pkg-price').value = '';
      document.getElementById('pkg-features').value = '';
    }

    function deletePackage(id) {
      vendorPackages = vendorPackages.filter(p => p.id !== id);
      renderVendorPackages();
    }

    // HIERARCHICAL WEDDING SERVICE CATEGORIES SHOWCASE
    let categoriesExpanded = false;
    let expandedCategoryIds = new Set();

    const categoryGroups = [
      {
        id: "group-venue",
        title: "مکان، تشریفات و پذیرایی",
        badge: "تالار، خدمات غذا و پذیرایی",
        icon: "building",
        subcategories: [
          { title: "تالار و باغ تالار عروسی", icon: "building", tag: "تالار" },
          { title: "تشریفات عروسی", icon: "crown", tag: "تشریفات" },
          { title: "کیک و شیرینی‌فروشی", icon: "cake", tag: "شیرینی" },
          { title: "فینگرفود", icon: "utensils-crossed", tag: "پذیرایی" },
          { title: "گل و گل‌آرایی", icon: "flower-2", tag: "گل‌آرایی" }
        ]
      },
      {
        id: "group-media",
        title: "ثبت لحظات و موسیقی",
        badge: "عکاسی، فیلمبرداری و موزیک",
        icon: "camera",
        subcategories: [
          { title: "آتلیه عکاسی و فیلمبرداری", icon: "camera", tag: "عکاسی" },
          { title: "موزیک", icon: "music", tag: "موسیقی" },
          { title: "آتلیه کودک", icon: "baby", tag: "کودک" },
          { title: "سالن تولد", icon: "party-popper", tag: "جشن" }
        ]
      },
      {
        id: "group-beauty",
        title: "زیبایی و استایل زوجین",
        badge: "آرایشگاه، مزون و پوشاک",
        icon: "sparkles",
        subcategories: [
          { title: "سالن زیبایی و آرایشگاه عروس", icon: "sparkles", tag: "عروس" },
          { title: "مزون لباس عروس", icon: "shirt", tag: "لباس" },
          { title: "کت و شلوار داماد", icon: "user-check", tag: "داماد" },
          { title: "آرایشگاه داماد", icon: "scissors", tag: "پیرایش" },
          { title: "مانتو عقد", icon: "shirt", tag: "عقد" },
          { title: "لباس شب و نامزدی", icon: "shirt", tag: "نامزدی" }
        ]
      },
      {
        id: "group-jewelry",
        title: "طلا، خرید و خدمات جانبی",
        badge: "طلا، خودرو و خدمات مسافرتی",
        icon: "gem",
        subcategories: [
          { title: "طلافروشی و جواهرفروشی", icon: "gem", tag: "جواهرات" },
          { title: "اجاره ماشین عروس", icon: "car", tag: "خودرو" },
          { title: "اکسسوری جشن عروسی", icon: "gem", tag: "اکسسوری" },
          { title: "تور ماه عسل", icon: "plane", tag: "سفر" },
          { title: "آینه و شمعدان", icon: "sparkles", tag: "دکور" }
        ]
      },
      {
        id: "group-legal",
        title: "تشریفات قانونی، عقد و مشاوره",
        badge: "دفتر ثبت، مشاوره و سفره عقد",
        icon: "landmark",
        subcategories: [
          { title: "دفتر ازدواج و سالن عقد", icon: "landmark", tag: "دفتر عقد" },
          { title: "سفره عقد", icon: "utensils", tag: "سفره" },
          { title: "آزمایشگاه ازدواج", icon: "flask-conical", tag: "آزمایش" },
          { title: "مشاوره ازدواج", icon: "heart-handshake", tag: "مشاوره" },
          { title: "بادکنک‌آرایی و دکوراسیون", icon: "party-popper", tag: "دیزاین" }
        ]
      }
    ];

    function toggleCategoryAccordion(groupId) {
      if (expandedCategoryIds.has(groupId)) {
        expandedCategoryIds.delete(groupId);
      } else {
        expandedCategoryIds.add(groupId);
      }
      renderCategoryCards();
    }

    function renderCategoryCards() {
      const container = document.getElementById('category-hierarchical-container') || document.getElementById('category-cards-grid');
      if (!container) return;
      container.innerHTML = '';

      categoryGroups.forEach((group) => {
        // Calculate total vendors across subcategories
        let totalGroupVendors = 0;
        group.subcategories.forEach(sub => {
          const matchCount = vendors.filter(v => v.category.includes(sub.tag) || v.category.includes(sub.title) || sub.title.includes(v.category)).length;
          totalGroupVendors += matchCount;
        });
        if (totalGroupVendors === 0) totalGroupVendors = vendors.length;

        const card = document.createElement('div');
        card.onclick = () => openSubCategoryDrawer(group.id);
        card.className = "bg-[#F5EFEB] border-2 border-[#1B3B2B]/30 hover:border-[#D4AF37] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer p-5 rounded-3xl flex flex-col justify-between h-56 text-right relative overflow-hidden group shadow-xs";

        card.innerHTML = `
          <div>
            <!-- Top Header: Icon & Counter Badge -->
            <div class="flex items-center justify-between mb-3">
              <div class="w-12 h-12 rounded-2xl bg-[#1B3B2B] text-[#D4AF37] flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                <i data-lucide="${group.icon || 'grid'}" class="w-6 h-6"></i>
              </div>
              <span class="bg-[#1B3B2B]/10 text-[#1B3B2B] text-[11px] font-extrabold px-2.5 py-1 rounded-full border border-[#1B3B2B]/20">
                ${group.subcategories.length} زیرگروه
              </span>
            </div>

            <!-- Title & Subtitle -->
            <h3 class="font-black text-base text-[#1B3B2B] group-hover:text-[#1B3B2B] transition-colors leading-snug">
              ${group.title}
            </h3>
            <p class="text-[11px] text-secondary mt-1 line-clamp-1 font-medium">
              ${group.badge || 'خدمات و تشریفات اختصاصی'}
            </p>
          </div>

          <!-- Bottom CTA Action -->
          <div class="pt-3 border-t border-[#1B3B2B]/15 flex items-center justify-between text-xs font-bold text-[#1B3B2B]">
            <span class="flex items-center gap-1 group-hover:text-[#1B3B2B] transition-colors">
              <span>مشاهده زیرگروه‌ها</span>
              <span class="text-sm font-black transition-transform group-hover:-translate-x-1">←</span>
            </span>
            <span class="text-[10px] font-extrabold text-[#D4AF37] bg-[#1B3B2B] px-2 py-0.5 rounded-md">
              ${totalGroupVendors}+ کسب‌وکار
            </span>
          </div>
        `;

        container.appendChild(card);
      });

      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }

    function openSubCategoryDrawer(groupId) {
      const group = categoryGroups.find(g => g.id === groupId);
      if (!group) return;

      const modal = document.getElementById('sub-category-drawer-modal');
      const iconEl = document.getElementById('drawer-header-icon');
      const titleEl = document.getElementById('drawer-header-title');
      const badgeEl = document.getElementById('drawer-header-badge');
      const gridEl = document.getElementById('drawer-subcategories-grid');

      if (!modal || !gridEl) return;

      if (iconEl) iconEl.innerHTML = `<i data-lucide="${group.icon || 'grid'}" class="w-6 h-6"></i>`;
      if (titleEl) titleEl.innerText = group.title;
      if (badgeEl) badgeEl.innerText = `${group.subcategories.length} زیرگروه تخصصی`;

      gridEl.innerHTML = '';
      group.subcategories.forEach(sub => {
        const vendorCount = vendors.filter(v => v.category.includes(sub.tag) || v.category.includes(sub.title) || sub.title.includes(v.category)).length || 3;

        const subCard = document.createElement('div');
        subCard.onclick = () => {
          filterVendorsByCategoryTitle(sub.title);
          closeSubCategoryDrawer();
        };
        subCard.className = "bg-[#F5EFEB] border border-[#1B3B2B]/20 hover:border-[#D4AF37] hover:bg-white p-4 rounded-2xl cursor-pointer transition-all flex items-center justify-between gap-3 shadow-2xs group hover:shadow-md";

        subCard.innerHTML = `
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#1B3B2B] text-[#D4AF37] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <i data-lucide="${sub.icon || 'tag'}" class="w-5 h-5"></i>
            </div>
            <div>
              <div class="font-bold text-xs sm:text-sm text-[#1B3B2B] group-hover:text-primary transition-colors">${sub.title}</div>
              <div class="text-[11px] text-secondary mt-0.5 font-medium">${vendorCount} تأمین‌کننده فعال در یزد</div>
            </div>
          </div>
          <div class="w-7 h-7 rounded-lg bg-[#1B3B2B]/10 text-[#1B3B2B] flex items-center justify-center group-hover:bg-[#1B3B2B] group-hover:text-[#D4AF37] transition-colors shrink-0">
            <i data-lucide="chevron-left" class="w-4 h-4"></i>
          </div>
        `;

        gridEl.appendChild(subCard);
      });

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';

      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }

    function closeSubCategoryDrawer() {
      const modal = document.getElementById('sub-category-drawer-modal');
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    function toggleCategoriesExpand() {
      categoriesExpanded = !categoriesExpanded;
      if (categoriesExpanded) {
        categoryGroups.forEach(g => expandedCategoryIds.add(g.id));
      } else {
        expandedCategoryIds.clear();
      }
      renderCategoryCards();
    }

    function filterVendorsByCategoryTitle(title) {
      switchTab('directory');
      if (title) {
        if (typeof activeCategoryFilters !== 'undefined') {
          activeCategoryFilters.clear();
          activeCategoryFilters.add(title);
        }
      }
      if (typeof renderSidebarCategoryCheckboxes === 'function') renderSidebarCategoryCheckboxes();
      if (typeof renderMultiCategoryPills === 'function') renderMultiCategoryPills();
      filterVendors();
      const vendorSection = document.getElementById('tab-directory');
      if (vendorSection) vendorSection.scrollIntoView({ behavior: 'smooth' });
    }

    function filterVendorsFromMega(title) {
      switchTab('directory');
      filterVendorsByCategoryTitle(title);
    }

    // SUPER ADMIN CATEGORY & SUB-CATEGORY CRUD ENGINE
    function saveCategoryGroupsToStorage() {
      try {
        localStorage.setItem('aroosi_category_groups', JSON.stringify(categoryGroups));
      } catch (err) {
        console.error('Failed to save categories to localStorage:', err);
      }
    }

    function loadCategoryGroupsFromStorage() {
      try {
        const stored = localStorage.getItem('aroosi_category_groups');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            categoryGroups = parsed;
          }
        }
      } catch (err) {
        console.error('Failed to load categories from localStorage:', err);
      }
    }

    function syncCategoryStateAndRender() {
      saveCategoryGroupsToStorage();
      renderCategoryCards();
      renderAdminCategories();
    }

    function renderAdminCategories() {
      const container = document.getElementById('admin-category-groups-list');
      if (!container) return;
      container.innerHTML = '';

      categoryGroups.forEach((group) => {
        const card = document.createElement('div');
        card.className = "bg-bgCustom border border-accent rounded-2xl p-4 space-y-3";

        let subPillsHtml = '';
        group.subcategories.forEach((sub, idx) => {
          subPillsHtml += `
            <div class="inline-flex items-center gap-1.5 bg-white border border-accent rounded-lg px-2.5 py-1 text-xs font-medium text-graphite shadow-2xs">
              <i data-lucide="${sub.icon || 'tag'}" class="w-3 h-3 text-primary"></i>
              <span>${sub.title}</span>
              <button type="button" onclick="openSubCategoryModal('${group.id}', ${idx})" class="text-primary hover:text-emerald-900 ml-1 font-bold">
                <i data-lucide="edit-2" class="w-3 h-3"></i>
              </button>
              <button type="button" onclick="deleteSubCategory('${group.id}', ${idx})" class="text-rose-500 hover:text-rose-700 font-bold">
                <i data-lucide="trash-2" class="w-3 h-3"></i>
              </button>
            </div>
          `;
        });

        card.innerHTML = `
          <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-accent/60 pb-3">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                <i data-lucide="${group.icon}" class="w-4 h-4"></i>
              </div>
              <div>
                <h4 class="text-sm font-bold text-graphite">${group.title}</h4>
                <span class="text-[11px] text-secondary">${group.badge || 'بدون زیرعنوان'}</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button type="button" onclick="openSubCategoryModal('${group.id}')" class="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1">
                <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                <span>افزودن زیرگروه</span>
              </button>
              <button type="button" onclick="openParentCategoryModal('${group.id}')" class="bg-white border border-accent hover:border-primary px-3 py-1.5 rounded-xl text-xs font-bold text-graphite transition-all">
                ویرایش دسته
              </button>
              <button type="button" onclick="deleteParentCategory('${group.id}')" class="bg-rose-50 border border-rose-200 hover:bg-rose-100 text-rose-600 px-3 py-1.5 rounded-xl text-xs font-bold transition-all">
                حذف دسته
              </button>
            </div>
          </div>
          <div class="flex flex-wrap gap-2 pt-1">
            ${subPillsHtml || '<span class="text-xs text-secondary italic">هیچ زیرگروهی ثبت نشده است.</span>'}
          </div>
        `;

        container.appendChild(card);
      });

      lucide.createIcons();
    }

    // PARENT CATEGORY MODAL HANDLERS
    function openParentCategoryModal(id = null) {
      const modal = document.getElementById('parent-cat-modal');
      const titleInput = document.getElementById('parent-cat-title');
      const badgeInput = document.getElementById('parent-cat-badge');
      const iconInput = document.getElementById('parent-cat-icon');
      const editIdInput = document.getElementById('parent-cat-edit-id');
      const modalTitle = document.getElementById('parent-cat-modal-title');

      if (!modal) return;

      if (id) {
        const group = categoryGroups.find(g => g.id === id);
        if (group) {
          editIdInput.value = group.id;
          titleInput.value = group.title;
          badgeInput.value = group.badge || '';
          iconInput.value = group.icon;
          modalTitle.innerText = "ویرایش دسته اصلی";
        }
      } else {
        editIdInput.value = '';
        titleInput.value = '';
        badgeInput.value = '';
        iconInput.value = 'building';
        modalTitle.innerText = "افزودن دسته اصلی جدید";
      }

      modal.classList.remove('hidden');
    }

    function closeParentCatModal() {
      const modal = document.getElementById('parent-cat-modal');
      if (modal) modal.classList.add('hidden');
    }

    function handleSaveParentCategory(e) {
      e.preventDefault();
      const editId = document.getElementById('parent-cat-edit-id').value;
      const title = document.getElementById('parent-cat-title').value.trim();
      const badge = document.getElementById('parent-cat-badge').value.trim();
      const icon = document.getElementById('parent-cat-icon').value.trim();

      if (!title || !icon) return;

      if (editId) {
        const group = categoryGroups.find(g => g.id === editId);
        if (group) {
          group.title = title;
          group.badge = badge;
          group.icon = icon;
        }
      } else {
        categoryGroups.push({
          id: 'group-' + Date.now(),
          title,
          badge,
          icon,
          subcategories: []
        });
      }

      closeParentCatModal();
      syncCategoryStateAndRender();
      showToast('دسته اصلی با موفقیت ذخیره شد', 'success');
    }

    function deleteParentCategory(id) {
      if (!confirm('آیا از حذف این دسته اصلی و تمامی زیرگروه‌های آن اطمینان دارید؟')) return;
      categoryGroups = categoryGroups.filter(g => g.id !== id);
      syncCategoryStateAndRender();
      showToast('دسته اصلی با موفقیت حذف شد', 'info');
    }

    // SUB-CATEGORY MODAL HANDLERS
    function openSubCategoryModal(parentId, subIdx = null) {
      const modal = document.getElementById('sub-cat-modal');
      const parentIdInput = document.getElementById('sub-cat-parent-id');
      const indexInput = document.getElementById('sub-cat-index');
      const titleInput = document.getElementById('sub-cat-title');
      const iconInput = document.getElementById('sub-cat-icon');
      const modalTitle = document.getElementById('sub-cat-modal-title');

      if (!modal) return;

      parentIdInput.value = parentId;

      const group = categoryGroups.find(g => g.id === parentId);
      if (!group) return;

      if (subIdx !== null && subIdx !== undefined && group.subcategories[subIdx]) {
        const sub = group.subcategories[subIdx];
        indexInput.value = subIdx;
        titleInput.value = sub.title;
        iconInput.value = sub.icon || 'tag';
        modalTitle.innerText = "ویرایش زیرگروه";
      } else {
        indexInput.value = '';
        titleInput.value = '';
        iconInput.value = 'tag';
        modalTitle.innerText = "افزودن زیرگروه جدید";
      }

      modal.classList.remove('hidden');
    }

    function closeSubCatModal() {
      const modal = document.getElementById('sub-cat-modal');
      if (modal) modal.classList.add('hidden');
    }

    function handleSaveSubCategory(e) {
      e.preventDefault();
      const parentId = document.getElementById('sub-cat-parent-id').value;
      const subIdxStr = document.getElementById('sub-cat-index').value;
      const title = document.getElementById('sub-cat-title').value.trim();
      const icon = document.getElementById('sub-cat-icon').value.trim();

      if (!parentId || !title) return;

      const group = categoryGroups.find(g => g.id === parentId);
      if (!group) return;

      if (subIdxStr !== '') {
        const idx = parseInt(subIdxStr, 10);
        if (group.subcategories[idx]) {
          group.subcategories[idx].title = title;
          group.subcategories[idx].icon = icon;
        }
      } else {
        group.subcategories.push({
          title,
          icon,
          tag: title.substring(0, 8)
        });
      }

      closeSubCatModal();
      syncCategoryStateAndRender();
      showToast('زیرگروه با موفقیت ذخیره شد', 'success');
    }

    function deleteSubCategory(parentId, subIdx) {
      const group = categoryGroups.find(g => g.id === parentId);
      if (!group || !group.subcategories[subIdx]) return;
      group.subcategories.splice(subIdx, 1);
      syncCategoryStateAndRender();
      showToast('زیرگروه با موفقیت حذف شد', 'info');
    }


    // VENDOR AVATAR MANAGEMENT
    let defaultVendorAvatar = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80';
    let currentVendorAvatar = defaultVendorAvatar;

    function handleAvatarUpload(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        currentVendorAvatar = e.target.result;
        updateVendorAvatarUI();
      };
      reader.readAsDataURL(file);
    }

    function handleAvatarDelete() {
      if (confirm('آیا از حذف عکس پروفایل کسب‌وکار خود مطمئن هستید؟')) {
        currentVendorAvatar = null;
        updateVendorAvatarUI();
      }
    }

    function updateVendorAvatarUI() {
      const dashImg = document.getElementById('vd-avatar-img');
      const dashContainer = document.getElementById('vd-avatar-container');
      const publicImg = document.getElementById('vp-logo');

      if (currentVendorAvatar) {
        if (dashImg) {
          dashImg.src = currentVendorAvatar;
          dashImg.classList.remove('hidden');
        }
        if (publicImg) {
          publicImg.src = currentVendorAvatar;
          publicImg.classList.remove('hidden');
        }
        if (dashContainer) {
          const initialsDiv = dashContainer.querySelector('.avatar-initials');
          if (initialsDiv) initialsDiv.remove();
        }
      } else {
        if (dashImg) dashImg.classList.add('hidden');
        if (publicImg) publicImg.classList.add('hidden');

        if (dashContainer && !dashContainer.querySelector('.avatar-initials')) {
          const initials = document.createElement('div');
          initials.className = 'avatar-initials w-full h-full flex flex-col items-center justify-center bg-accent/30 text-primary font-black text-xl text-center p-2';
          initials.innerHTML = '<i data-lucide="store" class="w-8 h-8 mb-1 text-primary"></i><span>زمرد</span>';
          dashContainer.appendChild(initials);
        }

        if (publicImg && publicImg.parentElement && !publicImg.parentElement.querySelector('.avatar-initials')) {
          const initialsPub = document.createElement('div');
          initialsPub.className = 'avatar-initials w-full h-full flex flex-col items-center justify-center bg-accent/30 text-primary font-black text-2xl text-center p-2';
          initialsPub.innerHTML = '<i data-lucide="store" class="w-10 h-10 mb-1 text-primary"></i><span>زمرد</span>';
          publicImg.parentElement.appendChild(initialsPub);
        }
      }
      lucide.createIcons();
    }


    // FAVORITE / BOOKMARK SYSTEM STATE & LOGIC
    let favoriteVendorIds = [1, 2, 4];

    function loadFavoritesFromStorage() {
      try {
        const stored = localStorage.getItem('aroosi_favorite_vendor_ids');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            favoriteVendorIds = parsed;
          }
        }
      } catch (err) {
        console.error('Failed to load favorites from localStorage:', err);
      }
    }

    function saveFavoritesToStorage() {
      try {
        localStorage.setItem('aroosi_favorite_vendor_ids', JSON.stringify(favoriteVendorIds));
      } catch (err) {
        console.error('Failed to save favorites to localStorage:', err);
      }
    }

    function toggleFavoriteVendor(vendorId, event) {
      if (event) event.stopPropagation();
      let vId = vendorId;
      if (typeof vendorId === 'string' && !isNaN(parseInt(vendorId))) {
        vId = parseInt(vendorId);
      }

      const index = favoriteVendorIds.indexOf(vId);
      const vendor = vendors.find(v => v.id === vId);
      const vendorName = vendor ? vendor.name : 'تأمین‌کننده';

      if (index > -1) {
        favoriteVendorIds.splice(index, 1);
        showToast(`«${vendorName}» از لیست نشان‌شده‌ها حذف شد.`, 'info');
      } else {
        favoriteVendorIds.push(vId);
        showToast(`«${vendorName}» به لیست نشان‌شده‌های شما اضافه شد ❤️`, 'success');
      }

      saveFavoritesToStorage();
      filterVendors();
      renderFavoriteVendorsList();
    }

    function renderFavoriteVendorsList() {
      const container = document.getElementById('couple-favorites-grid');
      const badge = document.getElementById('couple-favorite-count-badge');
      if (badge) {
        badge.innerText = `${favoriteVendorIds.length} مجموعه`;
      }

      if (!container) return;
      container.innerHTML = '';

      const favVendors = vendors.filter(v => favoriteVendorIds.includes(v.id));

      if (favVendors.length === 0) {
        container.innerHTML = `
          <div class="col-span-full p-6 text-center text-secondary text-xs font-bold bg-bgCustom rounded-2xl border border-accent">
            هنوز هیچ تأمین‌کننده‌ای به لیست نشان‌شده‌های خود اضافه نکرده‌اید. روی آیکون قلب ❤️ کارت‌ها کلیک کنید.
          </div>
        `;
        return;
      }

      favVendors.forEach(v => {
        const card = document.createElement('div');
        card.className = "bg-white border border-accent rounded-2xl overflow-hidden shadow-2xs p-3 space-y-2.5 relative flex flex-col justify-between";
        card.innerHTML = `
          <div class="space-y-2">
            <div class="relative h-28 rounded-xl overflow-hidden bg-slate-100">
              <img src="${v.image}" alt="${v.name}" class="w-full h-full object-cover">
              <button type="button" onclick="toggleFavoriteVendor(${v.id}, event)" class="absolute top-2 left-2 w-7 h-7 rounded-lg bg-white/90 text-rose-500 flex items-center justify-center shadow-xs" title="حذف از نشان‌شده‌ها">
                <i data-lucide="x" class="w-4 h-4"></i>
              </button>
            </div>
            <div>
              <span class="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md inline-block mb-1">${v.category}</span>
              <h4 class="text-xs font-bold text-graphite truncate">${v.name}</h4>
              <span class="text-[11px] text-secondary font-medium block mt-0.5">${v.priceRange}</span>
            </div>
          </div>

          <div class="flex gap-1.5 pt-1">
            <button onclick="openVendorDetailModal(${v.id})" class="flex-1 bg-bgCustom hover:bg-slate-100 text-graphite border border-accent text-[11px] font-bold py-1.5 rounded-lg">
              اطلاعات
            </button>
            <button onclick="openInquiryModal(${v.id}, '${v.name}')" class="flex-1 bg-primary text-white text-[11px] font-bold py-1.5 rounded-lg shadow-2xs">
              چت & استعلام
            </button>
          </div>
        `;
        container.appendChild(card);
      });

      lucide.createIcons();
    }

    // VENDOR PROFILE EDIT FORM (VENDOR DASHBOARD)
    function handleVendorProfileUpdate(e) {
      e.preventDefault();
      const name = document.getElementById('vd-edit-name').value.trim();
      const hours = document.getElementById('vd-edit-hours').value.trim();
      const address = document.getElementById('vd-edit-address').value.trim();
      const insta = document.getElementById('vd-edit-insta').value.trim();

      document.getElementById('vp-name').innerText = name;
      document.getElementById('vp-hours').innerText = hours;
      document.getElementById('vp-address').innerText = address;
      document.getElementById('vp-instagram').innerText = insta;
      document.getElementById('vd-header-name').innerText = "کسب و کار: " + name;

      showToast('اطلاعات پروفایل عمومی کسب‌وکار شما با موفقیت به روزرسانی شد.', 'success');
    }

    // CALENDAR & INQUIRIES & DIRECTORY
    function renderCalendar() {
      const grid = document.getElementById('calendar-grid');
      if (!grid) return;
      grid.innerHTML = '';

      for (let i = 1; i <= 30; i++) {
        const isBooked = bookedDates.includes(i);
        const dayBtn = document.createElement('button');
        dayBtn.type = 'button';
        dayBtn.onclick = () => toggleDate(i);
        dayBtn.className = `p-3 rounded-xl text-xs font-bold transition-all ${
          isBooked
            ? 'bg-rose-500 text-white shadow-xs'
            : 'bg-primary text-white shadow-xs hover:bg-primary-hover'
        }`;
        dayBtn.innerText = i;
        grid.appendChild(dayBtn);
      }
    }

    function toggleDate(date) {
      if (bookedDates.includes(date)) {
        bookedDates = bookedDates.filter(d => d !== date);
      } else {
        bookedDates.push(date);
      }
      renderCalendar();
    }


    function getPrivateNote(vId) {
      try {
        const notes = JSON.parse(localStorage.getItem('aroosi_private_notes') || '{}');
        return notes[vId] || '';
      } catch(e) { return ''; }
    }

    function savePrivateNote(vId) {
      try {
        const input = document.getElementById('private-note-input-' + vId);
        if (!input) return;
        const notes = JSON.parse(localStorage.getItem('aroosi_private_notes') || '{}');
        notes[vId] = input.value.trim();
        localStorage.setItem('aroosi_private_notes', JSON.stringify(notes));
        showToast('یادداشت خصوصی زوجین با موفقیت ذخیره شد', 'success');
      } catch(e) {}
    }

    function renderVendors(list) {
      const grid = document.getElementById('vendor-grid');
      if (!grid) return;
      grid.innerHTML = '';

      list.forEach(v => {
        const card = document.createElement('div');
        card.className = "bg-white border border-accent rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1";

        const localTag = v.district || "استان یزد";
        const ratingVal = v.rating || 4.8;
        const reviewCount = v.reviewCount || 34;
        const isFav = favoriteVendorIds.includes(v.id);

        card.innerHTML = `
          <div>
            <div class="relative h-52 overflow-hidden bg-slate-100">
              <img src="${v.image}" alt="${v.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent opacity-80"></div>

              <div class="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
                ${v.verified ? `
                  <div class="bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md border border-white/20">
                    <i data-lucide="shield-check" class="w-3.5 h-3.5"></i>
                    <span>تاییدیه رسمی عروسی تو</span>
                  </div>
                ` : `
                  <div class="bg-slate-800/80 text-slate-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                    تأمین‌کننده مجاز
                  </div>
                `}
              </div>

              <div class="absolute top-3 left-3 flex items-center gap-2">
                <button type="button" onclick="toggleFavoriteVendor(${v.id}, event)" class="w-8 h-8 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-rose-500 shadow-sm transition-transform active:scale-95 hover:bg-white cursor-pointer" title="افزودن به نشان‌شده‌ها">
                  <i data-lucide="heart" class="w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : 'text-rose-500'}"></i>
                </button>
                <div class="bg-white/90 backdrop-blur-md text-amber-600 text-xs font-black px-2.5 py-1 rounded-xl shadow-xs flex items-center gap-1">
                  <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>
                  <span>${ratingVal}</span>
                  <span class="text-[10px] text-secondary font-normal">(${reviewCount})</span>
                </div>
              </div>

              <div class="absolute bottom-3 right-3 left-3 flex justify-between items-center text-white text-xs">
                <span class="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 font-bold flex items-center gap-1">
                  <i data-lucide="map-pin" class="w-3 h-3 text-emerald-400"></i>
                  <span>${localTag}</span>
                </span>
                <span class="bg-emerald-600/90 text-white font-bold px-2.5 py-1 rounded-lg text-[10px]">
                  💰💰 قیمت مناسب
                </span>
              </div>
            </div>

            <div class="p-5 space-y-3">
              <div>
                <span class="text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-md inline-block mb-1">${v.category}</span>
                <h3 class="text-base font-bold text-graphite leading-tight group-hover:text-primary transition-colors">${v.name}</h3>
                <span class="text-xs text-secondary flex items-center gap-1 mt-1 font-medium">
                  <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-primary"></i>
                  <span>${v.city}</span>
                </span>
              </div>

              <!-- Yazd Capability Tags -->
              <div class="flex flex-wrap gap-1 pt-1">
                ${(v.capabilityTags || ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"]).map(tag => `
                  <span class="bg-amber-50 text-amber-900 border border-amber-200/80 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                    <i data-lucide="check-circle" class="w-2.5 h-2.5 text-amber-600"></i>
                    <span>${tag}</span>
                  </span>
                `).join('')}
              </div>

              <div class="text-xs font-bold text-graphite bg-bgCustom p-3 rounded-2xl border border-accent flex justify-between items-center">
                <span class="text-secondary font-normal">قیمت پایه شروع از:</span>
                <span class="text-primary font-black text-sm">${v.priceRange}</span>
              </div>

              <!-- Private Note Block for Couple -->
              <div class="pt-2 border-t border-accent/60 space-y-1" onclick="event.stopPropagation()">
                <label class="block text-[10px] font-bold text-secondary flex items-center gap-1">
                  <i data-lucide="lock" class="w-3 h-3 text-primary"></i>
                  <span>یادداشت خصوصی زوجین (فقط شما می‌بینید):</span>
                </label>
                <div class="flex gap-1.5">
                  <input type="text" id="private-note-input-${v.id}" value="${getPrivateNote(v.id)}" placeholder="مثلا: هماهنگی جهت تخفیف ۱۰٪..." class="w-full bg-slate-50 border border-accent rounded-xl px-2.5 py-1 text-[11px] font-medium text-graphite focus:outline-none focus:border-primary">
                  <button onclick="savePrivateNote(${v.id})" class="bg-primary hover:bg-emerald-900 text-white font-bold text-[10px] px-2.5 py-1 rounded-xl shrink-0 transition-colors">ثبت</button>
                </div>
              </div>
            </div>
          </div>

          <div class="p-5 pt-0 flex gap-2">
            <button onclick="openVendorDetailModal(${v.id})" class="flex-1 bg-white hover:bg-slate-50 border border-accent text-graphite hover:border-primary py-2.5 rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-1">
              <i data-lucide="info" class="w-3.5 h-3.5 text-primary"></i>
              <span>نمونه‌کارها و اطلاعات</span>
            </button>
            <button onclick="openInquiryModal(${v.id}, '${v.name}')" class="flex-1 bg-primary hover:bg-emerald-900 text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1">
              <i data-lucide="message-square" class="w-3.5 h-3.5"></i>
              <span>استعلام & چت</span>
            </button>
          </div>
        `;
        grid.appendChild(card);
      });

      lucide.createIcons();
    }

    function openLocationModal() {
      const modal = document.getElementById('location-modal');
      if (modal) modal.classList.remove('hidden');
    }

    function closeLocationModal() {
      const modal = document.getElementById('location-modal');
      if (modal) modal.classList.add('hidden');
    }

    function selectLocationProvince(provinceName) {
      selectedProvince = provinceName || 'یزد';
      const label = document.getElementById('header-location-label');
      if (label) {
        label.innerText = `استان ${selectedProvince} 📍`;
      }
      closeLocationModal();
      showToast(`📍 موقعیت مکانی شما روی استان ${selectedProvince} تنظیم گردید`, 'info');
    }

    function selectLocationCity(cityName, districtKey) {
      const label = document.getElementById('header-location-label');
      if (label) {
        label.innerText = `استان یزد 📍`;
      }
      filterByYazdDistrict(districtKey || 'all');
      closeLocationModal();
      showToast(`📍 موقعیت مکانی فعال: استان یزد`, 'info');
    }

    function requestCityNotify(regionName) {
      closeLocationModal();
      showToast(`🔔 درخواست اطلاع‌رسانی برای توسعه ${regionName} با موفقیت ثبت گردید`, 'info');
    }

    function filterByYazdDistrict(districtKey) {
      selectedYazdDistrict = districtKey;
      const pills = document.querySelectorAll('.yazd-district-pill');
      pills.forEach(pill => {
        const d = pill.getAttribute('data-district');
        if (d === districtKey) {
          pill.className = "yazd-district-pill px-3 py-1.5 rounded-xl transition-all bg-primary text-white shadow-xs shrink-0";
        } else {
          pill.className = "yazd-district-pill px-3 py-1.5 rounded-xl transition-all bg-bgCustom border border-accent hover:border-primary text-graphite shrink-0";
        }
      });
      filterVendors();
    }

    function handleHeaderSearchFocus() {
      const input = document.getElementById('header-search-input');
      const dropdown = document.getElementById('search-suggestions-dropdown');
      if (!input || !dropdown) return;

      const query = input.value.trim().toLowerCase();
      if (!query) {
        // Show popular quick search tags
        dropdown.innerHTML = `
          <div class="p-3 bg-slate-50 border-b border-accent text-[11px] font-bold text-secondary flex items-center justify-between">
            <span>جستجوهای پرطرفدار یزد:</span>
            <span class="text-[10px] text-primary">پیشنهاد هوشمند</span>
          </div>
          <div class="p-3 grid grid-cols-2 gap-2 text-xs font-bold text-graphite">
            <div onclick="selectSearchSuggestion('عکاسی کویر', 'query');" class="p-2 rounded-xl bg-amber-50/60 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 cursor-pointer flex items-center gap-2 transition-colors">
              <i data-lucide="camera" class="w-3.5 h-3.5 text-[#1B3B2B]"></i>
              <span>عکاسی کویر</span>
            </div>
            <div onclick="selectSearchSuggestion('باغ تالار', 'query');" class="p-2 rounded-xl bg-amber-50/60 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 cursor-pointer flex items-center gap-2 transition-colors">
              <i data-lucide="building" class="w-3.5 h-3.5 text-[#1B3B2B]"></i>
              <span>باغ تالار</span>
            </div>
            <div onclick="selectSearchSuggestion('شیرینی حاج خلیفه', 'query');" class="p-2 rounded-xl bg-amber-50/60 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 cursor-pointer flex items-center gap-2 transition-colors">
              <i data-lucide="cake" class="w-3.5 h-3.5 text-[#1B3B2B]"></i>
              <span>شیرینی سنتی</span>
            </div>
            <div onclick="selectSearchSuggestion('مزون عروس', 'query');" class="p-2 rounded-xl bg-amber-50/60 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 cursor-pointer flex items-center gap-2 transition-colors">
              <i data-lucide="sparkles" class="w-3.5 h-3.5 text-[#1B3B2B]"></i>
              <span>مزون عروس</span>
            </div>
          </div>
        `;
        dropdown.classList.remove('hidden');
        if (typeof lucide !== 'undefined') lucide.createIcons();
        return;
      }
      handleHeaderSearchInput();
    }

    function handleHeaderSearchInput() {
      const input = document.getElementById('header-search-input');
      const dropdown = document.getElementById('search-suggestions-dropdown');
      if (!input || !dropdown) return;

      const query = input.value.trim().toLowerCase();
      if (!query) {
        handleHeaderSearchFocus();
        return;
      }

      switchTab('directory');

      // Sync with main search input
      const mainSearch = document.getElementById('search-input');
      if (mainSearch) {
        mainSearch.value = query;
      }

      // Match vendors and subcategories
      const matchedVendors = vendors.filter(v =>
        v.name.toLowerCase().includes(query) || v.category.toLowerCase().includes(query)
      ).slice(0, 4);

      let subCatMatches = [];
      categoryGroups.forEach(g => {
        const subList = g.subcategories || g.subCategories || [];
        subList.forEach(sub => {
          const matchTitle = sub.title && sub.title.toLowerCase().includes(query);
          const matchTag = sub.tag && sub.tag.toLowerCase().includes(query);
          if (matchTitle || matchTag) {
            subCatMatches.push(sub);
          }
        });
      });
      subCatMatches = subCatMatches.slice(0, 3);

      if (matchedVendors.length === 0 && subCatMatches.length === 0) {
        dropdown.innerHTML = `<div class="p-3 text-xs text-secondary font-medium text-center">هیچ نتیجه‌ای یافت نشد.</div>`;
      } else {
        let html = '';
        if (subCatMatches.length > 0) {
          html += `<div class="p-2 bg-slate-50 border-b border-accent text-[11px] font-bold text-secondary">دسته‌بندی‌های مرتبط:</div>`;
          subCatMatches.forEach(sub => {
            html += `
              <div onclick="selectSearchSuggestion('${sub.title}', 'sub');" class="p-2.5 hover:bg-primary/10 cursor-pointer flex items-center gap-2 text-xs font-bold text-graphite border-b border-accent/40">
                <i data-lucide="tag" class="w-3.5 h-3.5 text-primary shrink-0"></i>
                <span>${sub.title}</span>
              </div>
            `;
          });
        }

        if (matchedVendors.length > 0) {
          html += `<div class="p-2 bg-slate-50 border-b border-accent text-[11px] font-bold text-secondary">تأمین‌کنندگان:</div>`;
          matchedVendors.forEach(v => {
            html += `
              <div onclick="selectSearchSuggestion('${v.name}', 'vendor');" class="p-2.5 hover:bg-primary/10 cursor-pointer flex items-center justify-between text-xs font-bold text-graphite border-b border-accent/40">
                <div class="flex items-center gap-2">
                  <i data-lucide="store" class="w-3.5 h-3.5 text-primary shrink-0"></i>
                  <span>${v.name}</span>
                </div>
                <span class="text-[10px] text-secondary font-normal">${v.category}</span>
              </div>
            `;
          });
        }
        dropdown.innerHTML = html;
        if (window.lucide) lucide.createIcons();
      }

      dropdown.classList.remove('hidden');
      filterVendors();
    }

    function selectSearchSuggestion(value, type) {
      const input = document.getElementById('header-search-input');
      const dropdown = document.getElementById('search-suggestions-dropdown');
      if (input) input.value = value;
      if (dropdown) dropdown.classList.add('hidden');

      if (type === 'sub') {
        filterVendorsByCategoryTitle(value);
      } else {
        const mainSearch = document.getElementById('search-input');
        if (mainSearch) mainSearch.value = value;
        filterVendors();
      }
    }

    // Close suggestions dropdown when clicking outside
    document.addEventListener('click', (e) => {
      const dropdown = document.getElementById('search-suggestions-dropdown');
      const input = document.getElementById('header-search-input');
      if (dropdown && input && !dropdown.contains(e.target) && !input.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });

    let activeCategoryFilters = new Set();

    function renderSidebarCategoryCheckboxes() {
      const container = document.getElementById('sidebar-category-checkboxes');
      if (!container) return;
      const categories = [
        "تالار و باغ تالار عروسی",
        "آتلیه عکاسی و فیلمبرداری",
        "سالن زیبایی و آرایشگاه عروس",
        "کترینگ و تشریفات پذیرایی",
        "کیک و شیرینی عروسی",
        "گل‌آرایی و ماشین عروس",
        "موسیقی و دی‌جی",
        "دفتر ازدواج و سالن عقد",
        "مزون لباس عروس",
        "طلافروشی و جواهرفروشی"
      ];

      container.innerHTML = categories.map(cat => {
        const isChecked = activeCategoryFilters.has(cat);
        return `
          <label class="flex items-center justify-between p-2 rounded-xl border border-accent/60 hover:bg-slate-50 cursor-pointer transition-colors">
            <div class="flex items-center gap-2">
              <input type="checkbox" value="${cat}" ${isChecked ? 'checked' : ''} onchange="toggleCategoryFilter('${cat}')" class="rounded text-primary focus:ring-primary w-4 h-4">
              <span class="text-xs font-bold text-graphite">${cat}</span>
            </div>
          </label>
        `;
      }).join('');
    }

    function toggleCategoryFilter(category) {
      if (activeCategoryFilters.has(category)) {
        activeCategoryFilters.delete(category);
      } else {
        activeCategoryFilters.add(category);
      }
      switchTab('directory');
      renderSidebarCategoryCheckboxes();
      renderMultiCategoryPills();
      filterVendors();
    }

    function resetAllCategoryFilters() {
      activeCategoryFilters.clear();
      const searchInput = document.getElementById('search-input');
      if (searchInput) searchInput.value = '';
      const headerSearchInput = document.getElementById('header-search-input');
      if (headerSearchInput) headerSearchInput.value = '';
      const verifiedOnly = document.getElementById('verified-only');
      if (verifiedOnly) verifiedOnly.checked = false;

      const sidebarCitySelect = document.getElementById('sidebar-city-select');
      if (sidebarCitySelect) sidebarCitySelect.value = 'استان یزد';
      const headerCitySelect = document.getElementById('header-city-select');
      if (headerCitySelect) headerCitySelect.value = 'استان یزد';

      const sidebarPriceSelect = document.getElementById('sidebar-price-select');
      if (sidebarPriceSelect) sidebarPriceSelect.value = 'all';
      const headerPriceSelect = document.getElementById('header-price-select');
      if (headerPriceSelect) headerPriceSelect.value = 'all';

      renderSidebarCategoryCheckboxes();
      renderMultiCategoryPills();
      filterVendors();
    }

    function renderMultiCategoryPills() {
      const container = document.getElementById('active-category-pills');
      if (!container) return;

      if (activeCategoryFilters.size === 0) {
        container.innerHTML = `<span class="text-xs text-secondary font-medium bg-slate-100 px-3 py-1.5 rounded-xl border border-accent">نمایش تمامی تامین‌کنندگان</span>`;
        return;
      }

      container.innerHTML = Array.from(activeCategoryFilters).map(cat => `
        <span class="inline-flex items-center gap-1.5 bg-primary/10 text-primary border border-primary/20 text-xs font-bold px-3 py-1 rounded-xl">
          <span>${cat}</span>
          <button onclick="toggleCategoryFilter('${cat}')" class="hover:text-rose-600 transition-colors cursor-pointer">✕</button>
        </span>
      `).join('');
    }

    function syncAndFilterCity(val) {
      const headerCity = document.getElementById('header-city-select');
      if (headerCity) headerCity.value = val;
      filterVendors();
    }

    function syncAndFilterPrice(val) {
      const headerPrice = document.getElementById('header-price-select');
      if (headerPrice) headerPrice.value = val;
      filterVendors();
    }

    function filterVendors() {
      const searchInput = document.getElementById('search-input');
      const headerSearchInput = document.getElementById('header-search-input');

      let search = '';
      if (headerSearchInput && headerSearchInput.value.trim() !== '') {
        search = headerSearchInput.value.trim().toLowerCase();
      } else if (searchInput) {
        search = searchInput.value.trim().toLowerCase();
      }

      const verifiedOnly = document.getElementById('verified-only') ? document.getElementById('verified-only').checked : false;

      const sidebarCitySelect = document.getElementById('sidebar-city-select');
      const headerCitySelect = document.getElementById('header-city-select');
      const selectedCity = (sidebarCitySelect && sidebarCitySelect.value !== 'استان یزد')
        ? sidebarCitySelect.value
        : (headerCitySelect ? headerCitySelect.value : 'استان یزد');

      const sidebarPriceSelect = document.getElementById('sidebar-price-select');
      const headerPriceSelect = document.getElementById('header-price-select');
      const selectedPriceRange = (sidebarPriceSelect && sidebarPriceSelect.value !== 'all')
        ? sidebarPriceSelect.value
        : (headerPriceSelect ? headerPriceSelect.value : 'all');

      let filtered = vendors.filter(v => {
        const matchesSearch = !search ||
                              v.name.toLowerCase().includes(search) ||
                              v.category.toLowerCase().includes(search) ||
                              (v.district && v.district.toLowerCase().includes(search)) ||
                              (v.city && v.city.toLowerCase().includes(search));

        let matchesCat = true;
        if (activeCategoryFilters.size > 0) {
          matchesCat = Array.from(activeCategoryFilters).some(cat =>
            v.category.toLowerCase().includes(cat.toLowerCase()) ||
            (v.tags && v.tags.some(t => t.toLowerCase().includes(cat.toLowerCase())))
          );
        }

        const matchesVerified = !verifiedOnly || v.verified;

        let matchesCity = true;
        if (selectedCity && selectedCity !== 'استان یزد' && selectedCity !== 'سایر') {
          matchesCity = (v.cityName && v.cityName.includes(selectedCity)) ||
                        (v.province && v.province.includes(selectedCity)) ||
                        (v.city && v.city.includes(selectedCity)) ||
                        (v.district && v.district.includes(selectedCity));
        }

        let matchesPrice = true;
        if (selectedPriceRange !== 'all') {
          const rawPrice = parseInt((v.priceRange || '').replace(/[^\d]/g, ''), 10) || 0;
          if (selectedPriceRange === 'economic') {
            matchesPrice = rawPrice <= 35000000;
          } else if (selectedPriceRange === 'mid') {
            matchesPrice = rawPrice > 35000000 && rawPrice <= 80000000;
          } else if (selectedPriceRange === 'luxury') {
            matchesPrice = rawPrice > 80000000;
          }
        }

        return matchesSearch && matchesCat && matchesVerified && matchesCity && matchesPrice;
      });

      // Apply dynamic sorting
      const sortSelect = document.getElementById('vendor-sort-select');
      const sortMode = sortSelect ? sortSelect.value : 'popular';

      filtered.sort((a, b) => {
        const priceA = parseInt((a.priceRange || '').replace(/[^\d]/g, ''), 10) || 0;
        const priceB = parseInt((b.priceRange || '').replace(/[^\d]/g, ''), 10) || 0;

        if (sortMode === 'popular') {
          if ((b.rating || 0) !== (a.rating || 0)) {
            return (b.rating || 0) - (a.rating || 0);
          }
          return (b.reviewCount || 0) - (a.reviewCount || 0);
        } else if (sortMode === 'newest') {
          return (b.id || 0) - (a.id || 0);
        } else if (sortMode === 'price-asc') {
          return priceA - priceB;
        } else if (sortMode === 'price-desc') {
          return priceB - priceA;
        }
        return 0;
      });

      renderVendors(filtered);

      const countBadge = document.getElementById('directory-vendor-count-badge');
      if (countBadge) {
        countBadge.textContent = `${filtered.length} تامین‌کننده`;
      }
    }

    function renderChecklistTimeframeButtons() {
      const btnContainer = document.getElementById('checklist-timeframe-buttons');
      if (!btnContainer) return;

      btnContainer.innerHTML = '';

      timeframeList.forEach(tf => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.onclick = () => {
          activeChecklistFilter = tf;
          renderChecklistTimeline();
          renderChecklistTimeframeButtons();
        };
        const isActive = activeChecklistFilter === tf;
        btn.className = `px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
          isActive
            ? 'bg-primary text-white shadow-xs'
            : 'bg-bgCustom text-graphite border border-accent hover:border-primary'
        }`;
        btn.innerText = tf;
        btnContainer.appendChild(btn);
      });
    }

    function toggleChecklistTask(id) {
      const task = staticChecklist.find(t => t.id === id);
      if (task) {
        task.completed = !task.completed;
        renderChecklistTimeline();
        if (task.completed) {
          showToast(`تاسک «${task.title}» به انجام‌شده تغییر یافت.`, 'success');
        } else {
          showToast(`تاسک «${task.title}» به حالت معوقه بازگشت.`, 'info');
        }
      }
    }

    // PLANNER SUB-TAB SWITCHING
    let activePlannerSubTab = 'checklist';

    function switchPlannerSubTab(subTabKey) {
      activePlannerSubTab = subTabKey;

      ['checklist', 'vendors', 'budget'].forEach(key => {
        const btn = document.getElementById('planner-subtab-' + key);
        const panel = document.getElementById('planner-panel-' + key);
        if (btn) {
          if (key === subTabKey) {
            btn.className = "flex-1 py-3 px-4 rounded-xl transition-all bg-primary text-white text-center flex items-center justify-center gap-2 shadow-xs";
          } else {
            btn.className = "flex-1 py-3 px-4 rounded-xl transition-all text-secondary hover:text-graphite hover:bg-slate-50 text-center flex items-center justify-center gap-2";
          }
        }
        if (panel) {
          if (key === subTabKey) panel.classList.remove('hidden');
          else panel.classList.add('hidden');
        }
      });

      if (subTabKey === 'vendors') {
        renderPlannerAttachedVendors();
      } else if (subTabKey === 'budget') {
        renderPlannerBudgetSummary();
      }

      lucide.createIcons();
    }

    function renderPlannerAttachedVendors() {
      const container = document.getElementById('planner-attached-vendors-container');
      if (!container) return;
      container.innerHTML = '';

      const tasksWithVendors = staticChecklist.filter(t => t.attachedVendorId);

      if (tasksWithVendors.length === 0) {
        container.innerHTML = `
          <div class="col-span-full bg-bgCustom border-2 border-dashed border-accent rounded-3xl p-8 text-center text-secondary space-y-3">
            <i data-lucide="store" class="w-12 h-12 mx-auto text-secondary/50"></i>
            <h3 class="text-sm font-bold text-graphite">هیچ تأمین‌کننده‌ای هنوز متصل نشده است</h3>
            <p class="text-xs">شما می‌توانید از زبانه چک‌لیست، با کلیک روی «+ اتصال تأمین‌کننده»، خدمات مورد نظر را متصل نمایید.</p>
            <button onclick="switchPlannerSubTab('checklist')" class="bg-primary text-white text-xs font-bold px-4 py-2 rounded-xl">
              بازگشت به چک‌لیست
            </button>
          </div>
        `;
        lucide.createIcons();
        return;
      }

      tasksWithVendors.forEach(t => {
        const vendor = vendors.find(v => v.id === t.attachedVendorId);
        if (!vendor) return;

        let statusText = "پیش‌فاکتور دریافت شد";
        let statusBadgeClass = "bg-blue-100 text-blue-800 border-blue-200";

        if (t.vendorStatus === 'deposit_paid') {
          statusText = "بیعانه پرداخت شد";
          statusBadgeClass = "bg-amber-100 text-amber-800 border-amber-200";
        } else if (t.vendorStatus === 'finalized') {
          statusText = "نهایی و رزرو شد";
          statusBadgeClass = "bg-emerald-100 text-emerald-800 border-emerald-200";
        }

        const card = document.createElement('div');
        card.className = "bg-bgCustom border border-accent rounded-2xl overflow-hidden shadow-xs space-y-3 flex flex-col justify-between p-4";
        card.innerHTML = `
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-14 h-14 rounded-2xl overflow-hidden border border-accent shrink-0">
                <img src="${vendor.image}" alt="${vendor.name}" class="w-full h-full object-cover">
              </div>
              <div class="space-y-1">
                <h4 class="text-sm font-bold text-graphite">${vendor.name}</h4>
                <p class="text-xs text-secondary font-medium">${vendor.category}</p>
                <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${statusBadgeClass}">
                  ${statusText}
                </span>
              </div>
            </div>

            <div class="p-3 bg-white rounded-xl border border-accent/60 space-y-1 text-xs">
              <div class="flex justify-between items-center text-graphite">
                <span class="text-secondary font-medium">اقدام متصل:</span>
                <span class="font-bold text-primary truncate max-w-[160px]">${t.title}</span>
              </div>
              <div class="flex justify-between items-center text-graphite">
                <span class="text-secondary font-medium">حدود قیمت:</span>
                <span class="font-bold">${vendor.priceRange}</span>
              </div>
            </div>
          </div>

          <div class="pt-2 border-t border-accent/60 flex items-center justify-between gap-2">
            <button onclick="switchTab('vendor-profile')" class="flex-1 bg-white border border-accent hover:border-primary text-graphite py-2 rounded-xl text-xs font-bold transition-colors text-center">
              مشاهده پروفایل
            </button>
            <button onclick="openVendorSelectModal('${t.id}')" class="bg-primary hover:bg-emerald-900 text-white py-2 px-3 rounded-xl text-xs font-bold transition-colors">
              ویرایش وضعیت
            </button>
          </div>
        `;
        container.appendChild(card);
      });

      lucide.createIcons();
    }

    function renderPlannerBudgetSummary() {
      const container = document.getElementById('planner-budget-summary-container');
      if (!container) return;

      const attachedTasks = staticChecklist.filter(t => t.attachedVendorId);
      const totalTasks = staticChecklist.length;
      const completedTasks = staticChecklist.filter(t => t.completed).length;

      container.innerHTML = `
        <div class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="bg-bgCustom p-5 rounded-2xl border border-accent space-y-1">
              <span class="text-xs font-bold text-secondary">تعداد کل اقدامات برنامه:</span>
              <span class="block text-xl font-black text-graphite">${totalTasks} کار اصلی</span>
            </div>

            <div class="bg-bgCustom p-5 rounded-2xl border border-accent space-y-1">
              <span class="text-xs font-bold text-secondary">قراردادهای بسته‌شده:</span>
              <span class="block text-xl font-black text-primary">${attachedTasks.length} تامین‌کننده</span>
            </div>

            <div class="bg-bgCustom p-5 rounded-2xl border border-accent space-y-1">
              <span class="text-xs font-bold text-secondary">اقدامات نهایی شده:</span>
              <span class="block text-xl font-black text-emerald-700">${completedTasks} مورد (${Math.round((completedTasks/totalTasks)*100)}٪)</span>
            </div>
          </div>

          <div class="bg-primary/5 border border-primary/20 rounded-2xl p-6 space-y-3">
            <h3 class="text-sm font-bold text-primary flex items-center gap-2">
              <i data-lucide="sparkles" class="w-4 h-4"></i>
              <span>دستیار هوشمند بودجه عروسی تو</span>
            </h3>
            <p class="text-xs text-graphite leading-relaxed">
              جهت فرمولاسیون کامل و تقسیم‌بندی بودجه پیشنهادی بر اساس سبک تشریفات و شهر برگزاری مراسم، می‌توانید از موتور هوشمند تخمین بودجه استفاده نمایید.
            </p>
            <button onclick="switchTab('tools')" class="bg-primary text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-colors">
              محاسبه هوشمند سقف بودجه
            </button>
          </div>
        </div>
      `;

      lucide.createIcons();
    }

    function renderChecklistTimeline() {
      const container = document.getElementById('checklist-timeline-container');
      if (!container) return;

      // Update progress & stats
      const total = staticChecklist.length;
      const completedCount = staticChecklist.filter(t => t.completed).length;
      const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;

      const progressBar = document.getElementById('checklist-progress-bar');
      const progressText = document.getElementById('checklist-progress-text');
      const completedCountText = document.getElementById('checklist-completed-count-text');
      const urgentCountText = document.getElementById('checklist-urgent-count-text');
      const countdownText = document.getElementById('checklist-countdown-text');
      const plannerCountdownBadge = document.getElementById('planner-countdown-badge');

      if (progressBar) progressBar.style.width = percent + '%';
      if (progressText) progressText.innerText = percent + '٪ انجام شده';
      if (completedCountText) completedCountText.innerText = `${completedCount} از ${total} مورد`;

      const urgentUncompleted = staticChecklist.filter(t => (t.priority === 'urgent' || t.isUrgent) && !t.completed).length;
      if (urgentCountText) urgentCountText.innerText = `${urgentUncompleted} کار ضروری`;
      if (countdownText) countdownText.innerText = `${weddingDateDaysRemaining} روز باقی‌مانده`;
      if (plannerCountdownBadge) plannerCountdownBadge.innerText = `${weddingDateDaysRemaining} روز تا مراسم عروسی شما`;

      container.innerHTML = '';

      const itemsToRender = activeChecklistFilter === "همه"
        ? staticChecklist
        : staticChecklist.filter(t => t.timeframe === activeChecklistFilter || t.category === activeChecklistFilter);

      if (itemsToRender.length === 0) {
        container.innerHTML = '<div class="p-8 text-center text-secondary text-xs font-semibold bg-bgCustom rounded-2xl border border-accent">هیچ اقدامی برای این بازه زمانی یافت نشد.</div>';
        return;
      }

      itemsToRender.forEach(t => {
        const attachedVendor = t.attachedVendorId ? vendors.find(v => v.id === t.attachedVendorId) : null;

        let priorityBadge = '';
        if (t.priority === 'urgent' || t.isUrgent) {
          priorityBadge = `<span class="bg-rose-100 text-rose-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-rose-200">ضروری</span>`;
        } else if (t.priority === 'suggested') {
          priorityBadge = `<span class="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-amber-200">پیشنهادی</span>`;
        } else {
          priorityBadge = `<span class="bg-slate-100 text-slate-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-slate-200">اختیاری</span>`;
        }

        let vendorStatusBadge = '';
        if (t.vendorStatus === 'quote_received') {
          vendorStatusBadge = `<span class="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-blue-200">پیش‌فاکتور دریافت شد</span>`;
        } else if (t.vendorStatus === 'deposit_paid') {
          vendorStatusBadge = `<span class="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-amber-200">بیعانه پرداخت شد</span>`;
        } else if (t.vendorStatus === 'finalized') {
          vendorStatusBadge = `<span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200">نهایی شد</span>`;
        }

        const div = document.createElement('div');
        div.className = `p-5 rounded-2xl border transition-all space-y-4 ${
          t.completed ? 'bg-primary/5 border-primary/30 shadow-xs' : 'bg-white border-accent hover:border-primary/40 shadow-xs'
        }`;

        div.innerHTML = `
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-accent/40 pb-3">
            <div class="flex items-center gap-3">
              <button type="button" onclick="toggleChecklistTask('${t.id}')" class="w-6 h-6 rounded-lg border-2 flex items-center justify-center font-bold text-xs transition-colors shrink-0 ${
                t.completed ? 'bg-primary border-primary text-white' : 'border-secondary/40 text-transparent hover:border-primary'
              }">
                ✓
              </button>
              <div class="space-y-1">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="text-sm sm:text-base font-bold ${t.completed ? 'line-through text-graphite/60' : 'text-graphite'}">${t.title}</span>
                  ${priorityBadge}
                </div>
              </div>
            </div>

            <div class="flex items-center gap-2 self-start sm:self-auto">
              <span class="text-[11px] font-semibold text-secondary bg-bgCustom px-3 py-1 rounded-lg border border-accent/80">${t.dueDate || t.timeframe}</span>
              <span class="text-[11px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">${t.timeframe || t.category}</span>
            </div>
          </div>

          <!-- SELECTED VENDOR SECTION -->
          <div class="bg-bgCustom p-3.5 rounded-xl border border-accent/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            ${attachedVendor ? `
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl border border-accent overflow-hidden bg-white shrink-0">
                  <img src="${attachedVendor.image}" alt="${attachedVendor.name}" class="w-full h-full object-cover">
                </div>
                <div class="space-y-1">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-xs font-bold text-graphite">${attachedVendor.name}</span>
                    <span class="text-[10px] text-secondary font-medium">(${attachedVendor.category})</span>
                    ${vendorStatusBadge}
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-[11px] font-bold text-primary">${attachedVendor.priceRange}</span>
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-2 self-end sm:self-auto">
                <button onclick="openVendorSelectModal('${t.id}')" class="bg-white border border-accent hover:border-primary text-graphite text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors">
                  تغییر یا ویرایش وضعیت
                </button>
                <button onclick="detachVendorFromTask('${t.id}')" class="text-rose-600 hover:text-rose-800 text-[11px] font-bold px-2 py-1">
                  حذف
                </button>
              </div>
            ` : `
              <div class="flex items-center gap-2 text-xs font-medium text-secondary">
                <i data-lucide="store" class="w-4 h-4 text-secondary shrink-0"></i>
                <span>هنوز تأمین‌کننده‌ای به این اقدام متصل نشده است.</span>
              </div>
              <button onclick="openVendorSelectModal('${t.id}')" class="bg-primary hover:bg-emerald-900 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shadow-xs self-start sm:self-auto">
                <i data-lucide="plus-circle" class="w-3.5 h-3.5"></i>
                <span>+ اتصال تأمین‌کننده از دایرکتوری</span>
              </button>
            `}
          </div>
        `;
        container.appendChild(div);
      });

      lucide.createIcons();
    }

    function openVendorSelectModal(taskId) {
      const task = staticChecklist.find(t => t.id === taskId);
      if (!task) return;

      document.getElementById('vselect-task-id').value = task.id;
      document.getElementById('vselect-task-title').innerText = `اتصال تأمین‌کننده به اقدام: ${task.title}`;

      const vendorSelect = document.getElementById('vselect-vendor-id');
      if (vendorSelect) {
        vendorSelect.innerHTML = '';
        vendors.forEach(v => {
          const opt = document.createElement('option');
          opt.value = v.id;
          opt.innerText = `${v.name} (${v.category}) - ${v.priceRange}`;
          if (task.attachedVendorId === v.id) opt.selected = true;
          vendorSelect.appendChild(opt);
        });
      }

      const statusSelect = document.getElementById('vselect-status');
      if (statusSelect) {
        statusSelect.value = task.vendorStatus || 'quote_received';
      }

      document.getElementById('vendor-select-modal').classList.remove('hidden');
    }

    function closeVendorSelectModal() {
      document.getElementById('vendor-select-modal').classList.add('hidden');
    }

    function handleSaveVendorAttachment(e) {
      e.preventDefault();
      const taskId = document.getElementById('vselect-task-id').value;
      const vendorId = parseInt(document.getElementById('vselect-vendor-id').value);
      const status = document.getElementById('vselect-status').value;

      const task = staticChecklist.find(t => t.id === taskId);
      if (task) {
        task.attachedVendorId = vendorId;
        task.vendorStatus = status;
        renderChecklistTimeline();
      }

      closeVendorSelectModal();
    }

    function detachVendorFromTask(taskId) {
      const task = staticChecklist.find(t => t.id === taskId);
      if (task) {
        task.attachedVendorId = null;
        task.vendorStatus = null;
        renderChecklistTimeline();
      }
    }

    function toggleNewTaskModal(show) {
      const modal = document.getElementById('new-task-modal');
      if (modal) {
        if (show) modal.classList.remove('hidden');
        else modal.classList.add('hidden');
      }
    }

    function handleAddNewTaskSubmit(e) {
      e.preventDefault();
      const title = document.getElementById('task-title').value.trim();
      const timeframe = document.getElementById('task-cat').value;
      const priority = document.getElementById('task-priority').value;
      const dueDate = document.getElementById('task-date').value.trim() || 'به زودی';

      if (!title) return;

      staticChecklist.push({
        id: 'chk-' + Date.now(),
        title,
        timeframe,
        priority,
        category: 'عمومی',
        completed: false,
        dueDate,
        attachedVendorId: null,
        vendorStatus: null
      });

      renderChecklistTimeline();
      toggleNewTaskModal(false);
      document.getElementById('task-title').value = '';
      document.getElementById('task-date').value = '';
    }

    function renderAdminPendingApps() {
      const tbody = document.getElementById('admin-pending-apps-table');
      if (!tbody) return;
      tbody.innerHTML = '';

      const pending = staticVendorApplications.filter(a => a.status === 'pending');
      if (pending.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="p-4 text-center text-secondary">هیچ درخواست معلقی وجود ندارد.</td></tr>';
        return;
      }

      pending.forEach(app => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-50";
        tr.innerHTML = `
          <td class="p-3 font-bold text-graphite">${app.name}</td>
          <td class="p-3 text-primary">${app.category}</td>
          <td class="p-3 font-semibold text-graphite">${app.manager} (${app.phone})</td>
          <td class="p-3 text-secondary">${app.city}</td>
          <td class="p-3 text-center">
            <button onclick="approveVendorAppStatic('${app.id}')" class="bg-primary text-white font-bold text-xs px-3 py-1.5 rounded-lg hover:bg-emerald-900 transition-colors">
              تایید و اعطای پنل
            </button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    }

    function approveVendorAppStatic(appId) {
      const app = staticVendorApplications.find(a => a.id === appId);
      if (app) {
        app.status = 'approved';
        vendors.push({
          id: vendors.length + 1,
          name: app.name,
          category: app.category,
          city: app.city,
          rating: 5.0,
          verified: true,
          capabilityTags: ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"],
        priceRange: "استعلام قیمت",
          image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
        });
        renderVendors(vendors);
        renderAdminPendingApps();
        renderAdminTable();
      }
    }

    function renderAdminTable() {
      const tbody = document.getElementById('admin-vendor-table');
      if (!tbody) return;
      tbody.innerHTML = '';

      vendors.forEach(v => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-50";
        tr.innerHTML = `
          <td class="p-3 font-bold text-graphite">${v.name}</td>
          <td class="p-3 text-secondary">${v.category}</td>
          <td class="p-3 text-graphite" dir="ltr">۰۹۱۲۰۰۰۰۰۰۰</td>
          <td class="p-3">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
              v.verified ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-secondary'
            }">
              ${v.verified ? 'تایید شده' : 'در انتظار بررسی'}
            </span>
          </td>
          <td class="p-3 text-center">
            <button onclick="toggleVendorVerification(${v.id})" class="text-xs font-bold underline ${v.verified ? 'text-rose-600' : 'text-primary'}">
              ${v.verified ? 'لغو تاییدیه' : 'اعطای تاییدیه رسمی'}
            </button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    }

    function toggleVendorVerification(id) {
      vendors = vendors.map(v => v.id === id ? { ...v, verified: !v.verified } : v);
      renderVendors(vendors);
      renderAdminTable();
    }

    function renderInquiries() {
      const container = document.getElementById('inquiry-list');
      if (!container) return;
      container.innerHTML = '';

      inquiries.forEach(inq => {
        const card = document.createElement('div');
        card.className = "p-4 bg-bgCustom rounded-2xl border border-accent space-y-2";
        card.innerHTML = `
          <div class="flex justify-between items-center text-xs">
            <span class="font-bold text-graphite">${inq.name} (${inq.phone})</span>
            <span class="text-secondary font-medium">تاریخ: ${inq.date} | ${inq.guests} مهمان</span>
          </div>
          <p class="text-xs text-graphite/80">${inq.details}</p>
          <div class="pt-2 flex gap-2">
            <button onclick="showToast('پیش‌فاکتور ارسال شد.', 'success')" class="bg-primary text-white px-3 py-1.5 rounded-lg text-xs font-bold">ارسال پیشنهاد قیمت</button>
          </div>
        `;
        container.appendChild(card);
      });
    }

    function runAiAllocation() {
      const budget = parseInt(document.getElementById('ai-budget-input').value) || 300000000;
      document.getElementById('ai-res-venue').innerText = Math.round(budget * 0.40).toLocaleString('fa-IR') + ' تومان';
      document.getElementById('ai-res-photo').innerText = Math.round(budget * 0.20).toLocaleString('fa-IR') + ' تومان';
      document.getElementById('ai-res-attire').innerText = Math.round(budget * 0.15).toLocaleString('fa-IR') + ' تومان';
    }

    function toggleVendorModalStatic(show) {
      const modal = document.getElementById('vendor-onboarding-modal');
      if (modal) {
        if (show) modal.classList.remove('hidden');
        else modal.classList.add('hidden');
      }
    }

    function handleVendorModalSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('v-name').value.trim();
      const category = document.getElementById('v-cat').value;
      const city = document.getElementById('v-city').value.trim();
      const manager = document.getElementById('v-manager').value.trim();
      const phone = document.getElementById('v-phone').value.trim();

      if (!name || !phone) return;

      staticVendorApplications.push({
        id: 'app-' + Date.now(),
        name,
        category,
        city,
        manager,
        phone,
        status: 'pending'
      });

      document.getElementById('vendor-onboarding-form').classList.add('hidden');
      document.getElementById('v-modal-success').classList.remove('hidden');

      renderAdminPendingApps();
    }

    function setInquiryBudgetPill(rangeVal, customVal) {
      const rangeSel = document.getElementById('inquiry-budget-range');
      const customInp = document.getElementById('inquiry-budget-custom');
      if (rangeSel && rangeVal) {
        rangeSel.value = rangeVal;
      }
      if (customInp && customVal) {
        customInp.value = customVal;
      }
    }


    // VENDOR DETAIL MODAL CONTROLLER

    function handleSelectCalendarDay(dayNum, isAvailable) {
      if (!isAvailable) {
        showToast('این تاریخ توسط زوج دیگری رزرو شده است. لطفاً روز دیگری را انتخاب فرمایید.', 'warning');
      } else {
        showToast(`تاریخ ${dayNum} اردیبهشت جهت استعلام و رزرو اولیه انتخاب گردید.`, 'success');
      }
    }

    function openVendorDetailModal(vendorId) {
      let vId = vendorId;
      if (typeof vendorId === 'string' && !isNaN(parseInt(vendorId))) {
        vId = parseInt(vendorId);
      }
      const vendor = vendors.find(v => v.id === vId) || vendors[0];
      if (!vendor) return;

      const modal = document.getElementById('vendor-detail-modal');
      const titleEl = document.getElementById('vdm-title');
      const coverEl = document.getElementById('vdm-cover');
      const avatarEl = document.getElementById('vdm-avatar');
      const catEl = document.getElementById('vdm-category');
      const districtEl = document.getElementById('vdm-district');
      const bottomPriceEl = document.getElementById('vdm-bottom-price');
      const chatBtn = document.getElementById('vdm-chat-btn');

      if (titleEl) titleEl.innerText = vendor.name;
      if (coverEl) coverEl.src = vendor.image;
      if (avatarEl) avatarEl.src = vendor.image;
      if (catEl) catEl.innerText = vendor.category;
      if (districtEl) districtEl.innerText = vendor.city || vendor.district || "یزد";
      if (bottomPriceEl) bottomPriceEl.innerText = `شروع قیمت از ${vendor.priceRange}`;

      // Render Capability Tags Badges in Modal
      const tagsContainer = document.getElementById('vdm-capability-tags');
      if (tagsContainer) {
        const tags = vendor.capabilityTags || ["مجوز رسمی عکاسی کویر", "تجهیزات هلی‌شات & نور کویر", "سرو شیرینی‌های سنتی یزد (حاج خلیفه)", "فضای باز & سالن سرپوشیده"];
        tagsContainer.innerHTML = tags.map(t => `<span class="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><i data-lucide="check-circle" class="w-3 h-3 text-amber-600"></i>${t}</span>`).join('');
      }

      // 1. Populate Portfolio Tab
      const portfolioContainer = document.querySelector('#vdm-subpanel-portfolio .grid');
      if (portfolioContainer) {
        const portList = vendor.portfolio || [
          { url: vendor.image, tag: vendor.category }
        ];
        let portHtml = '';
        portList.forEach(p => {
          portHtml += `
            <div class="relative group h-36 rounded-2xl overflow-hidden border border-accent bg-slate-100 cursor-pointer" onclick="showToast('مشاهده تصویر ${p.tag || ''} در سایز بزرگ', 'info')">
              <img src="${p.url}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
              <span class="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-md font-bold">${p.tag || 'نمونه‌کار'}</span>
            </div>
          `;
        });
        portfolioContainer.innerHTML = portHtml;
      }

      // 2. Populate Packages Tab
      const packagesContainer = document.querySelector('#vdm-subpanel-packages .grid');
      if (packagesContainer) {
        const pkgList = vendor.packages || [
          { name: "پکیج اختصاصی", price: vendor.priceRange, items: ["ارائه خدمات کامل با کیفیت تضمینی", "مشاوره و پشتیبانی حضوری"] }
        ];
        let pkgHtml = '';
        pkgList.forEach((pkg, idx) => {
          const isFeatured = idx === 1;
          pkgHtml += `
            <div class="${isFeatured ? 'bg-emerald-50/60 border-2 border-primary shadow-xs' : 'bg-bgCustom border border-accent'} rounded-2xl p-4 space-y-3 relative">
              ${isFeatured ? '<span class="absolute -top-3 right-4 bg-primary text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">محبوب‌ترین</span>' : ''}
              <div class="border-b border-accent pb-2">
                <span class="text-graphite font-bold block">${pkg.name}</span>
                <span class="text-lg font-black text-primary">${pkg.price}</span>
              </div>
              <ul class="space-y-1.5 text-[11px] font-medium text-graphite">
                ${pkg.items.map(it => `<li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-primary"></i><span>${it}</span></li>`).join('')}
              </ul>
            </div>
          `;
        });
        packagesContainer.innerHTML = pkgHtml;
      }

      // 3. Populate Reviews Tab
      const reviewsContainer = document.getElementById('vdm-subpanel-reviews');
      if (reviewsContainer) {
        const revList = vendor.reviews || [
          { author: "زوج رضایت‌مند", text: "از خدمات و پاسخگویی منظم مجموعه کمال تشکر را داریم.", stars: "★★★★★", date: "۱۴۰۳" }
        ];
        let revHtml = '';
        revList.forEach(r => {
          revHtml += `
            <div class="p-3 bg-bgCustom rounded-2xl border border-accent space-y-1 text-xs font-bold text-graphite">
              <div class="flex justify-between items-center">
                <span>${r.author} (${r.date})</span>
                <span class="text-amber-500">${r.stars}</span>
              </div>
              <p class="text-secondary font-medium mt-1">${r.text}</p>
            </div>
          `;
        });
        reviewsContainer.innerHTML = revHtml;
      }

      // 4. Populate Contact Tab
      const phoneEl = document.getElementById('vdm-contact-phone');
      const addressEl = document.getElementById('vdm-contact-address');
      const hoursEl = document.getElementById('vdm-contact-hours');
      const instaEl = document.getElementById('vdm-contact-insta');

      if (phoneEl) phoneEl.innerText = vendor.phone || "۰۳۵-۳۸۲۴۰۰۰۰";
      if (addressEl) addressEl.innerText = vendor.address || `یزد، ${vendor.district || 'مرکز شهر'}`;
      if (hoursEl) hoursEl.innerText = vendor.hours || "همه روزه از ۱۰:۰۰ الی ۲۱:۰۰";
      if (instaEl) instaEl.innerText = vendor.instagram || "@yazd_wedding_studio";

      if (chatBtn) {
        chatBtn.onclick = () => {
          closeVendorDetailModal();
          openInquiryModal(vendor.id, vendor.name);
        };
      }

      if (modal) modal.classList.remove('hidden');
      switchVdmSubTab('portfolio');
    }

    function closeVendorDetailModal() {
      const modal = document.getElementById('vendor-detail-modal');
      if (modal) modal.classList.add('hidden');
    }

    function switchVdmSubTab(subTab) {
      const subTabs = ['portfolio', 'packages', 'calendar', 'reviews', 'contact'];
      subTabs.forEach(t => {
        const btn = document.getElementById('vdm-tab-btn-' + t);
        const panel = document.getElementById('vdm-subpanel-' + t);
        if (btn && panel) {
          if (t === subTab) {
            btn.className = "px-4 py-2 rounded-xl bg-primary text-white shadow-2xs transition-all flex items-center gap-1.5 shrink-0";
            panel.classList.remove('hidden');
          } else {
            btn.className = "px-4 py-2 rounded-xl bg-white border border-accent text-secondary hover:text-graphite transition-all flex items-center gap-1.5 shrink-0";
            panel.classList.add('hidden');
          }
        }
      });
      lucide.createIcons();
    }


    function openInquiryModal(vendorId, vendorName) {
      let vId = vendorId;
      if (typeof vendorId === 'string' && !isNaN(parseInt(vendorId))) {
        vId = parseInt(vendorId);
      }
      const vendor = vendors.find(v => v.id === vId) || vendors[0];
      const targetName = vendorName || (vendor ? vendor.name : "تامین‌کننده");

      document.getElementById('inquiry-vendor-id').value = vendor ? vendor.id : 1;
      document.getElementById('modal-vendor-name').innerText = targetName;

      // Dynamic Category Field Toggling (Guest count for venues vs package for others)
      const guestsContainer = document.getElementById('inquiry-guests-container');
      const nonVenueContainer = document.getElementById('inquiry-nonvenue-container');
      const cat = vendor ? (vendor.category || '') : '';
      const isVenue = cat.includes("تالار") || cat.includes("باغ") || cat.includes("سالن عقد") || cat.includes("پذیرایی");

      if (isVenue) {
        if (guestsContainer) guestsContainer.classList.remove('hidden');
        if (nonVenueContainer) nonVenueContainer.classList.add('hidden');
      } else {
        if (guestsContainer) guestsContainer.classList.add('hidden');
        if (nonVenueContainer) nonVenueContainer.classList.remove('hidden');
      }

      // Clear custom budget field on open
      const customBudgetInp = document.getElementById('inquiry-budget-custom');
      if (customBudgetInp) customBudgetInp.value = '';

      // Update checkboxes dynamically according to vendor category if available
      const container = document.getElementById('inquiry-services-checklist');
      if (container && vendor) {
        if (cat.includes("آتلیه") || cat.includes("عکاسی") || cat.includes("فیلمبرداری")) {
          container.innerHTML = `
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="عکاسی و فیلمبرداری روز عروسی" checked class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>عکاسی و فیلمبرداری روز عروسی</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="کلیپ فرمالیته شمال / کویر" checked class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>کلیپ فرمالیته شمال / کویر</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="آلبوم ایتالیایی 80x40" checked class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>آلبوم ایتالیایی 80x40</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="تصویربرداری هلی‌شات & کرین" class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>تصویربرداری هلی‌شات & کرین</span>
            </label>
          `;
        } else if (cat.includes("سالن زیبایی") || cat.includes("میکاپ") || cat.includes("آرایشگاه")) {
          container.innerHTML = `
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="میکاپ و گریم اختصاصی عروس" checked class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>میکاپ و گریم اختصاصی عروس</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="شینیون و استایل مو" checked class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>شینیون و استایل مو</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="خدمات ناخن و پاکسازی پوست" class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>خدمات ناخن و پاکسازی پوست</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="میکاپ همراهان" class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>میکاپ همراهان</span>
            </label>
          `;
        } else if (cat.includes("گل") || cat.includes("ماشین")) {
          container.innerHTML = `
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="دسته گل عروس (رز/ارکیده VIP)" checked class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>دسته گل عروس (رز/ارکیده VIP)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="گل‌آرایی کامل ماشین عروس" checked class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>گل‌آرایی کامل ماشین عروس</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="گل‌آرایی ورودی و جایگاه عروس‌وداماد" class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>گل‌آرایی ورودی و جایگاه عروس‌وداماد</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="گل‌آرایی میزهای مهمانان" class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>گل‌آرایی میزهای مهمانان</span>
            </label>
          `;
        } else if (cat.includes("کیک") || cat.includes("شیرینی")) {
          container.innerHTML = `
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="کیک چندطبقه فوندانت/خامه" checked class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>کیک چندطبقه فوندانت/خامه</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="مینی‌کیک و کندی‌بار پذیرایی" checked class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>مینی‌کیک و کندی‌بار پذیرایی</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="شیرینی مخصوص پذیرایی عروسی" class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>شیرینی مخصوص پذیرایی عروسی</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="گیفت و یادبود خوراکی مهمانان" class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>گیفت و یادبود خوراکی مهمانان</span>
            </label>
          `;
        } else if (cat.includes("مزون") || cat.includes("لباس")) {
          container.innerHTML = `
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="دوخت و اجاره لباس عروس VIP" checked class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>دوخت و اجاره لباس عروس VIP</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="تور و تاج عروس" checked class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>تور و تاج عروس</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="کت و شلوار دامادی" class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>کت و شلوار دامادی</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="اکسسوری و جواهرات" class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>اکسسوری و جواهرات</span>
            </label>
          `;
        } else {
          container.innerHTML = `
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="منوی شام VIP / سلف سرویس" checked class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>منوی شام VIP / سلف سرویس</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="ورودی باغ و سالن اصلی" checked class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>ورودی باغ و سالن اصلی</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="شمع‌آرایی & آتش‌بازی" checked class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>شمع‌آرایی & آتش‌بازی</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-white rounded-lg">
              <input type="checkbox" value="سفره عقد اختصاصی" class="rounded text-primary focus:ring-primary w-4 h-4">
              <span>سفره عقد اختصاصی</span>
            </label>
          `;
        }
      }

      document.getElementById('inquiry-modal').classList.remove('hidden');
    }

    function closeInquiryModal() {
      document.getElementById('inquiry-modal').classList.add('hidden');
    }

    function handleInquirySubmit(e) {
      e.preventDefault();
      const vendorIdVal = parseInt(document.getElementById('inquiry-vendor-id').value) || 1;
      const vendor = vendors.find(v => v.id === vendorIdVal) || vendors[0];
      const name = document.getElementById('inquiry-name').value.trim();
      const phone = document.getElementById('inquiry-phone').value.trim();
      const date = document.getElementById('inquiry-date').value.trim() || '۱۴۰۳/۰۶/۱۵';
      const guests = parseInt(document.getElementById('inquiry-guests').value) || 200;
      const budgetRange = document.getElementById('inquiry-budget-range').value;
      const customBudget = (document.getElementById('inquiry-budget-custom') ? document.getElementById('inquiry-budget-custom').value.trim() : '');
      const note = document.getElementById('inquiry-note').value.trim();

      const finalBudgetStr = customBudget ? `${budgetRange} (بودجه پیشنهادی: ${customBudget})` : budgetRange;

      const checkedServices = [];
      document.querySelectorAll('#inquiry-services-checklist input[type="checkbox"]:checked').forEach(cb => {
        checkedServices.push(cb.value);
      });

      inquiries.push({
        id: Date.now(),
        name,
        phone,
        date,
        guests,
        details: `استعلام ${vendor.name} - ${checkedServices.join('، ')}`
      });

      // Find or create active thread in chatState
      let thread = chatState.threads.find(t => t.vendorId === vendor.id);
      const currentTimeStr = new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });

      if (!thread) {
        thread = {
          id: "thread-" + Date.now(),
          vendorId: vendor.id,
          vendorName: vendor.name,
          vendorCategory: vendor.category,
          vendorLogo: vendor.image,
          verified: vendor.verified,
          phone: "۰۲۱-۴۴۵۵۶۶۷۷",
          statusBadge: "pending_quote",
          statusText: "در انتظار پاسخ استعلام",
          unreadCount: 0,
          lastMessage: `درخواست استعلام جدید برای ${date} ارسال گردید.`,
          lastTime: currentTimeStr,
          inquiryData: {
            date,
            guests,
            services: checkedServices,
            budget: finalBudgetStr,
            note
          },
          messages: []
        };
        chatState.threads.unshift(thread);
      } else {
        thread.statusBadge = "pending_quote";
        thread.statusText = "در انتظار پاسخ استعلام";
        thread.lastTime = currentTimeStr;
        thread.inquiryData = {
          date,
          guests,
          services: checkedServices,
          budget: finalBudgetStr,
          note
        };
      }

      const inquirySummaryText = `ارسال استعلام قیمت سریع:\n• دسته بندی: ${vendor.category}\n• تاریخ مراسم: ${date}\n• تعداد مهمانان: ${guests} نفر\n• خدمات درخواستی: ${checkedServices.join('، ')}\n• بودجه: ${finalBudgetStr}\n• توضیحات: ${note || '-'}`;

      thread.messages.push({
        id: "msg-" + Date.now(),
        sender: "user",
        text: inquirySummaryText,
        time: currentTimeStr,
        isInquirySummary: true
      });

      thread.lastMessage = `استعلام قیمت ارسال گردید (${date})`;
      chatState.activeThreadId = thread.id;

      renderInquiries();
      closeInquiryModal();

      showToast('استعلام قیمت با موفقیت برای تامین‌کننده ارسال شد. در حال انتقال به صفحه گفت‌وگوها...', 'success');
      switchTab('messages');
    }

    function openRsvpModal() {
      document.getElementById('rsvp-modal').classList.remove('hidden');
    }

    function closeRsvpModal() {
      document.getElementById('rsvp-modal').classList.add('hidden');
    }


    function handleRsvpSubmit(e) {
      e.preventDefault();
      const rsvpName = document.getElementById('rsvp-name')?.value.trim();
      if (rsvpName) {
        const existing = guestListState.find(g => g.name === rsvpName);
        if (existing) {
          existing.status = "CONFIRMED";
        } else {
          guestListState.unshift({
            id: "g-" + Date.now(),
            name: rsvpName,
            side: "دوستان مشترک",
            phone: "09120000000",
            companions: 1,
            table: "میز اختصاصی",
            status: "CONFIRMED"
          });
        }
        renderGuestsAndGifts();
      }
      closeRsvpModal();
      showGlobalToast("پاسخ RSVP شما با موفقیت ثبت و به سیستم مدیریت مهمانان اضافه شد.");
    }


    function sendSmsBroadcast() {
      const text = document.getElementById('sms-text').value.trim();
      if (!text) return showToast('لطفا متن پیامک را وارد کنید.', 'warning');
      const history = document.getElementById('sms-history');
      const item = document.createElement('div');
      item.className = "p-2 bg-white rounded-lg border border-accent/60";
      item.innerHTML = `<span class="text-primary font-bold">ارسال شد:</span> ${text}`;
      history.prepend(item);
      document.getElementById('sms-text').value = '';
      showToast('پیامک انبوه با موفقیت ارسال شد.', 'success');
    }

    // ==========================================
    // WEDDING BUDGET WIZARD STATE & LOGIC
    // ==========================================
    let bwState = {
      currentStep: 1,
      targetBudget: 350000000,
      province: "یزد",
      provinceMultiplier: 1.0,
      city: "یزد",
      style: "modern", // economic, modern, luxury, formalite
      guestCount: 250,
      services: [
        { id: "venue", title: "تالار، باغ و پذیرایی (Yazd Catering & Venue)", icon: "building", defaultWeight: 0.48, checked: true, isCustom: false },
        { id: "photo", title: "آتلیه و فرمالیته کویر یزد (Desert Photo & Video)", icon: "camera", defaultWeight: 0.18, checked: true, isCustom: false },
        { id: "bride_makeup", title: "سالن زیبایی عروس (Bride Makeup)", icon: "sparkles", defaultWeight: 0.07, checked: true, isCustom: false },
        { id: "groom_styling", title: "کت‌وشلوار و پیرایش داماد (Groom Styling)", icon: "scissors", defaultWeight: 0.04, checked: true, isCustom: false },
        { id: "bridal_dress", title: "مزون و لباس عروس (Bridal Dress)", icon: "shirt", defaultWeight: 0.07, checked: true, isCustom: false },
        { id: "sweets", title: "پذیرایی، کیک و دسر (Catering & Desserts)", icon: "cake", defaultWeight: 0.05, checked: true, isCustom: false },
        { id: "music", title: "موسیقی و نورپردازی سالن (Music & Lighting)", icon: "music", defaultWeight: 0.05, checked: true, isCustom: false },
        { id: "car_flower", title: "ماشین عروس و گل‌آرایی (Car & Floral)", icon: "flower-2", defaultWeight: 0.04, checked: true, isCustom: false },
        { id: "invitation", title: "کارت دعوت دیجیتال و گیفت (Invitations & Favors)", icon: "mail", defaultWeight: 0.02, checked: true, isCustom: false }
      ]
    };

    function updateBudgetFormattedDisplay() {
      const inputVal = parseInt(document.getElementById('bw-budget-input').value) || 0;
      bwState.targetBudget = inputVal;
      const formatted = inputVal.toLocaleString('fa-IR');
      document.getElementById('bw-budget-formatted').innerText = `${formatted} تومان`;
    }

        function applyYazdBudgetPreset(amount) {
      document.getElementById('bw-budget-input').value = amount;
      updateBudgetFormattedDisplay();
    }

    function handleProvinceChange() {
      const provSelect = document.getElementById('bw-province-select');
      bwState.province = provSelect.value;
      if (provSelect.value === 'تهران') bwState.provinceMultiplier = 1.2;
      else if (provSelect.value === 'البرز') bwState.provinceMultiplier = 1.05;
      else if (provSelect.value === 'آذربایجان شرقی' || provSelect.value === 'سایر استان‌ها') bwState.provinceMultiplier = 0.95;
      else bwState.provinceMultiplier = 1.0;
    }

    function selectBwStyle(styleKey) {
      bwState.style = styleKey;
      const cards = ['economic', 'modern', 'luxury', 'formalite'];
      cards.forEach(key => {
        const el = document.getElementById('style-card-' + key);
        if (!el) return;
        if (key === styleKey) {
          el.className = "bw-style-card bg-primary/5 border-2 border-primary rounded-2xl p-5 cursor-pointer transition-all space-y-3 shadow-xs";
          const iconBox = el.querySelector('div');
          if (iconBox) iconBox.className = "w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-xs";
          const h4 = el.querySelector('h4');
          if (h4) h4.className = "text-sm font-bold text-primary";
        } else {
          el.className = "bw-style-card bg-bgCustom border-2 border-accent rounded-2xl p-5 cursor-pointer hover:border-primary transition-all space-y-3";
          const iconBox = el.querySelector('div');
          if (iconBox) iconBox.className = "w-10 h-10 rounded-xl bg-slate-100 text-graphite flex items-center justify-center";
          const h4 = el.querySelector('h4');
          if (h4) h4.className = "text-sm font-bold text-graphite";
        }
      });
    }

    function setBwGuestCount(count) {
      bwState.guestCount = count;
      document.getElementById('bw-guest-input').value = count;
      updateGuestBtnStyles(count);
    }

    function handleGuestInputChange() {
      const val = parseInt(document.getElementById('bw-guest-input').value) || 200;
      bwState.guestCount = val;
      updateGuestBtnStyles(val);
    }

    function updateGuestBtnStyles(count) {
      const btns = document.querySelectorAll('.bw-guest-btn');
      btns.forEach(btn => {
        btn.className = "bw-guest-btn py-3 px-4 rounded-xl text-xs font-bold border border-accent bg-white hover:border-primary text-graphite transition-all";
      });

      let targetIdx = 1;
      if (count < 100) targetIdx = 0;
      else if (count >= 100 && count <= 250) targetIdx = 1;
      else if (count > 250 && count <= 500) targetIdx = 2;
      else if (count > 500) targetIdx = 3;

      if (btns[targetIdx]) {
        btns[targetIdx].className = "bw-guest-btn py-3 px-4 rounded-xl text-xs font-bold border-2 border-primary bg-primary text-white transition-all shadow-xs";
      }
    }

    function renderBwServicesChecklist() {
      const container = document.getElementById('bw-services-checklist');
      if (!container) return;
      container.innerHTML = '';

      bwState.services.forEach(srv => {
        const card = document.createElement('div');
        card.onclick = (e) => {
          if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'BUTTON') {
            toggleBwService(srv.id);
          }
        };
        card.className = `p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
          srv.checked ? 'bg-primary/5 border-primary' : 'bg-white border-accent hover:border-accent/80 opacity-75'
        }`;

        card.innerHTML = `
          <div class="flex items-center gap-3">
            <input type="checkbox" ${srv.checked ? 'checked' : ''} onchange="toggleBwService('${srv.id}')" class="rounded text-primary focus:ring-primary w-5 h-5 cursor-pointer">
            <div class="flex items-center gap-2">
              <i data-lucide="${srv.icon}" class="w-4 h-4 ${srv.checked ? 'text-primary' : 'text-secondary'}"></i>
              <span class="text-xs font-bold ${srv.checked ? 'text-graphite' : 'text-secondary'}">${srv.title}</span>
            </div>
          </div>
          ${srv.isCustom ? `<button onclick="deleteCustomBwService('${srv.id}')" class="text-rose-600 hover:text-rose-800 text-[11px] font-bold">حذف</button>` : ''}
        `;
        container.appendChild(card);
      });

      lucide.createIcons();
    }

    function toggleBwService(srvId) {
      const srv = bwState.services.find(s => s.id === srvId);
      if (srv) {
        srv.checked = !srv.checked;
        renderBwServicesChecklist();
      }
    }

    function handleAddCustomBwService() {
      const titleInput = document.getElementById('bw-custom-title');
      const priceInput = document.getElementById('bw-custom-price');
      const title = titleInput.value.trim();
      const price = parseInt(priceInput.value) || 0;

      if (!title) return showToast('لطفاً عنوان خدمت اختصاصی را وارد نمایید.', 'warning');

      const customId = 'custom-' + Date.now();
      bwState.services.push({
        id: customId,
        title: title + (price > 0 ? ` (برآورد: ${price.toLocaleString('fa-IR')} تومان)` : ''),
        icon: 'package-plus',
        defaultWeight: 0.05,
        fixedPrice: price > 0 ? price : null,
        checked: true,
        isCustom: true
      });

      titleInput.value = '';
      priceInput.value = '';
      renderBwServicesChecklist();
    }

    function deleteCustomBwService(srvId) {
      bwState.services = bwState.services.filter(s => s.id !== srvId);
      renderBwServicesChecklist();
    }

    function navigateBwStep(direction) {
      const newStep = bwState.currentStep + direction;
      if (newStep < 1 || newStep > 5) return;

      // Validate inputs before advancing
      if (direction > 0 && bwState.currentStep === 1) {
        if (!bwState.targetBudget || bwState.targetBudget < 10000000) {
          showToast('لطفاً سقف بودجه معتبر وارد نمایید (حداقل ۱۰ میلیون تومان).', 'warning');
          return;
        }
        bwState.city = document.getElementById('bw-city-input').value.trim() || 'تهران';
      }

      if (direction > 0 && bwState.currentStep === 4) {
        const activeCount = bwState.services.filter(s => s.checked).length;
        if (activeCount === 0) {
          showToast('لطفاً حداقل یک خدمت را جهت تخصیص بودجه فعال/تیک بزنید.', 'warning');
          return;
        }
      }

      bwState.currentStep = newStep;
      updateBwStepUI();
    }

    function updateBwStepUI() {
      // Hide all panels
      for (let i = 1; i <= 4; i++) {
        const panel = document.getElementById('bw-step-' + i);
        if (panel) panel.classList.add('hidden');
      }
      const resPanel = document.getElementById('bw-step-result');
      if (resPanel) resPanel.classList.add('hidden');

      // Show current panel
      if (bwState.currentStep <= 4) {
        const currentPanel = document.getElementById('bw-step-' + bwState.currentStep);
        if (currentPanel) currentPanel.classList.remove('hidden');
      } else {
        if (resPanel) resPanel.classList.remove('hidden');
        calculateAndRenderBwResults();
      }

      // Update Stepper Progress Bar & Badges
      const stepLabel = document.getElementById('wizard-step-label');
      const progressTitle = document.getElementById('wizard-progress-title');
      const progressPercent = document.getElementById('wizard-progress-percent');
      const progressBar = document.getElementById('wizard-progress-bar');
      const prevBtn = document.getElementById('bw-prev-btn');
      const nextBtn = document.getElementById('bw-next-btn');

      if (bwState.currentStep <= 4) {
        stepLabel.innerText = `گام ${bwState.currentStep} از ۴`;
        const percent = bwState.currentStep * 25;
        progressPercent.innerText = `${percent}٪ تکمیل شده`;
        progressBar.style.width = `${percent}%`;

        const titles = [
          "پایه مالی و موقعیت مکانی",
          "انتخاب سبک و سطح تشریفات",
          "تعداد مهمانان و مقیاس مراسم",
          "تکمیل چک‌لیست خدمات مورد نیاز"
        ];
        progressTitle.innerText = titles[bwState.currentStep - 1];

        prevBtn.classList.toggle('hidden', bwState.currentStep === 1);
        nextBtn.classList.remove('hidden');
        nextBtn.querySelector('span').innerText = bwState.currentStep === 4 ? "محاسبه نهایی و نمایش خروجی" : "گام بعدی";
      } else {
        stepLabel.innerText = "خروجی محاسبات هوشمند";
        progressPercent.innerText = "۱۰۰٪ تکمیل شده";
        progressBar.style.width = "100%";
        progressTitle.innerText = "جدول تخصیص هوشمند بودجه بر اساس خدمات انتخابی";

        prevBtn.classList.remove('hidden');
        nextBtn.classList.add('hidden');
      }

      if (bwState.currentStep === 4) {
        renderBwServicesChecklist();
      }

      lucide.createIcons();
    }


    let isHiddenCostsBufferActive = false;

    function toggleHiddenCostsBuffer(isActive) {
      isHiddenCostsBufferActive = isActive;
      if (typeof calculateAndRenderBwResults === 'function') {
        calculateAndRenderBwResults();
      }
      showToast(isActive ? 'بافر ۱۰٪ هزینه‌های پنهان به محاسبات اضافه شد' : 'بافر ۱۰٪ غیرفعال گردید', 'info');
    }

    function setSweetsGuests(cnt) {
      const input = document.getElementById('sweets-guest-count');
      if (input) {
        input.value = cnt;
        calculateYazdiSweets();
      }
    }

    function calculateYazdiSweets() {
      const guestCnt = parseInt(document.getElementById('sweets-guest-count')?.value) || 250;

      // Rates per guest in kg
      const ghotabKg = (guestCnt * 0.02).toFixed(1);
      const baklavaKg = (guestCnt * 0.025).toFixed(1);
      const lozKg = (guestCnt * 0.03).toFixed(1);

      // Prices per kg (Toman)
      const ghotabPricePerKg = 280000;
      const baklavaPricePerKg = 350000;
      const lozPricePerKg = 180000;

      const ghotabCost = Math.round(ghotabKg * ghotabPricePerKg);
      const baklavaCost = Math.round(baklavaKg * baklavaPricePerKg);
      const lozCost = Math.round(lozKg * lozPricePerKg);
      const totalCost = ghotabCost + baklavaCost + lozCost;
      const totalKg = (parseFloat(ghotabKg) + parseFloat(baklavaKg) + parseFloat(lozKg)).toFixed(1);

      if (document.getElementById('sweets-ghotab-kg')) document.getElementById('sweets-ghotab-kg').innerText = `${ghotabKg} کیلوگرم`;
      if (document.getElementById('sweets-ghotab-cost')) document.getElementById('sweets-ghotab-cost').innerText = `${ghotabCost.toLocaleString('fa-IR')} تومان`;

      if (document.getElementById('sweets-baklava-kg')) document.getElementById('sweets-baklava-kg').innerText = `${baklavaKg} کیلوگرم`;
      if (document.getElementById('sweets-baklava-cost')) document.getElementById('sweets-baklava-cost').innerText = `${baklavaCost.toLocaleString('fa-IR')} تومان`;

      if (document.getElementById('sweets-loz-kg')) document.getElementById('sweets-loz-kg').innerText = `${lozKg} کیلوگرم`;
      if (document.getElementById('sweets-loz-cost')) document.getElementById('sweets-loz-cost').innerText = `${lozCost.toLocaleString('fa-IR')} تومان`;

      if (document.getElementById('sweets-total-weight-text')) document.getElementById('sweets-total-weight-text').innerText = `${totalKg} کیلوگرم شیرینی سنتی یزد`;
      if (document.getElementById('sweets-total-cost-text')) document.getElementById('sweets-total-cost-text').innerText = `${totalCost.toLocaleString('fa-IR')} تومان`;
    }

    function calculateAndRenderBwResults() {
      const activeServices = bwState.services.filter(s => s.checked);
      const totalBudget = bwState.targetBudget;

      // Separate custom fixed price services from weighted percentage services
      let sumFixedPrices = 0;
      activeServices.forEach(s => {
        if (s.fixedPrice) sumFixedPrices += s.fixedPrice;
      });

      const remainingBudgetForWeighted = Math.max(0, totalBudget - sumFixedPrices);

      // Sum weights of active non-fixed services
      let totalWeight = 0;
      activeServices.forEach(s => {
        if (!s.fixedPrice) totalWeight += s.defaultWeight;
      });

      const tbody = document.getElementById('bw-result-table-body');
      if (!tbody) return;
      tbody.innerHTML = '';

      let effectiveTotal = totalBudget;
      if (isHiddenCostsBufferActive) {
        effectiveTotal = Math.round(totalBudget * 1.1);
      }
      document.getElementById('res-total-budget').innerText = isHiddenCostsBufferActive ? `${effectiveTotal.toLocaleString('fa-IR')} تومان (+۱۰٪ بافر پنهان)` : `${totalBudget.toLocaleString('fa-IR')} تومان`;
      const styleNames = {
        economic: "اقتصادی و ساده",
        modern: "مدرن و شیک",
        luxury: "لوکس و تشریفاتی (VIP)",
        formalite: "فرمالیته و خاص"
      };
      document.getElementById('res-style-city').innerText = `${styleNames[bwState.style] || 'مدرن'} • ${bwState.province} (${bwState.city})`;
      document.getElementById('res-active-services-count').innerText = `${activeServices.length} خدمت منتخب فعال`;

      activeServices.forEach(srv => {
        let calculatedAmount = 0;
        let percentageText = "";

        if (srv.fixedPrice) {
          calculatedAmount = srv.fixedPrice;
          const pct = Math.round((srv.fixedPrice / totalBudget) * 100);
          percentageText = `${pct}٪ (ثابت)`;
        } else {
          const serviceRatio = totalWeight > 0 ? (srv.defaultWeight / totalWeight) : 0;
          calculatedAmount = Math.round(remainingBudgetForWeighted * serviceRatio);
          const pct = Math.round((calculatedAmount / totalBudget) * 100);
          percentageText = `${pct}٪`;
        }

        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-50 transition-colors";
        tr.innerHTML = `
          <td class="p-3.5 font-bold text-graphite flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <i data-lucide="${srv.icon}" class="w-4 h-4"></i>
            </div>
            <span>${srv.title}</span>
          </td>
          <td class="p-3.5 font-bold text-primary">${percentageText}</td>
          <td class="p-3.5 font-black text-graphite">${calculatedAmount.toLocaleString('fa-IR')} تومان</td>
          <td class="p-3.5 text-secondary text-[11px] leading-relaxed">
            برآورد سهم استاندارد متناسب با ${bwState.guestCount} نفر مهمان و سبک ${styleNames[bwState.style]}
          </td>
        `;
        tbody.appendChild(tr);
      });

      lucide.createIcons();
    }

    function resetBwWizard() {
      bwState.currentStep = 1;
      updateBwStepUI();
    }

    // ==========================================
    // QUIZ HUB & ENGINE STATE & DATA STRUCTURES
    // ==========================================
    let quizState = {
      activeTab: "style", // style, psychology
      currentQuiz: null, // active quiz object
      currentQuestionIndex: 0,
      userAnswers: {}, // questionId: selectedOptionObject
      quizCompleted: false,
      appliedStyleFilter: null,
      quizzes: [
  {
    "id": "quiz-style-main",
    "category": "style",
    "title": "تست تعیین استایل اصلی عروسی",
    "description": "کلاسیک، بوهو، لاکچری، روستیک، مینی‌مال یا مدرن - کشف تم بصری متناسب با سلیقه شما",
    "image": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    "duration": "۴ دقیقه",
    "questionsCount": 4,
    "badge": "استایل اصلی",
    "questions": [
      {
        "id": "q1",
        "text": "کدام جوم و معماری چیدمان فضایی جشن عروسی را بیشتر می‌پسندید؟",
        "options": [
          {
            "id": "opt1",
            "label": "باغ عمارت باشکوه با ستون‌های کریستالی و گل‌آرایی سنقر",
            "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
            "styleKey": "luxury",
            "score": {
              "luxury": 90,
              "classic": 20
            }
          },
          {
            "id": "opt2",
            "label": "فضای باز در دل طبیعت با چیدمان چوبی، طاق پامپاس و حس آزاد بوهو",
            "image": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
            "styleKey": "boho",
            "score": {
              "boho": 90,
              "romantic": 15
            }
          },
          {
            "id": "opt3",
            "label": "سالن مدرن شیک با خطوط هندسی پاک، نورپردازی مهندسی و دکور مینی‌مال",
            "image": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
            "styleKey": "modern",
            "score": {
              "modern": 90
            }
          },
          {
            "id": "opt4",
            "label": "عمارت تاریخی با آینه‌کاری‌های سنتی اصیل و شمعدان‌های شاهانه",
            "image": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
            "styleKey": "classic",
            "score": {
              "classic": 90,
              "vintage": 20
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "پالت رنگی مطلوب شما برای تزئینات و دکوراسیون سالن چیست؟",
        "options": [
          {
            "id": "opt1",
            "label": "زمردی تیره، طلایی براق و سفید کریستالی",
            "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
            "styleKey": "luxury",
            "score": {
              "luxury": 85
            }
          },
          {
            "id": "opt2",
            "label": "رنگ‌های نود گرم، شنی، خاکی و سبز زیتونی",
            "image": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
            "styleKey": "boho",
            "score": {
              "boho": 85
            }
          },
          {
            "id": "opt3",
            "label": "سفید یخچالی، گرافیت، خاکستری پلاتینیوم و نقره‌ای",
            "image": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt4",
            "label": "صورتی پودری، یاسی ملایم و سفید مرواریدی",
            "image": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
            "styleKey": "romantic",
            "score": {
              "romantic": 85
            }
          }
        ]
      },
      {
        "id": "q3",
        "text": "طراحی سفره عقد مورد علاقه شما چه ویژگی‌هایی دارد؟",
        "options": [
          {
            "id": "opt1",
            "label": "سفره عقد تمام کریستال با آینه‌کاری و شمعدان‌های نقره",
            "styleKey": "luxury",
            "score": {
              "luxury": 85
            }
          },
          {
            "id": "opt2",
            "label": "سفره عقد روستیک روی کنده‌های چوب با گل‌آرایی طبیعی خشخاش و گندم",
            "styleKey": "boho",
            "score": {
              "boho": 85
            }
          },
          {
            "id": "opt3",
            "label": "سفره عقد مینی‌مال روی پایه‌های شیشه‌ای و گل سفید یکدست",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt4",
            "label": "سفره عقد اصیل پارچه‌ای ترمه با ظروف عتیقه قلم‌زنی",
            "styleKey": "classic",
            "score": {
              "classic": 85
            }
          }
        ]
      },
      {
        "id": "q4",
        "text": "کدام اتمسفر کلی در شب جشن هیجان بیشتری به شما می‌دهد؟",
        "options": [
          {
            "id": "opt1",
            "label": "شکوه شاهانه با تشریفات سنگین و ورودی آتش‌بازی طبقاتی",
            "styleKey": "luxury",
            "score": {
              "luxury": 90
            }
          },
          {
            "id": "opt2",
            "label": "اتمسفر صمیمی، دوستانه، پر از انرژی مثبت و رقص آزاد",
            "styleKey": "boho",
            "score": {
              "boho": 90
            }
          },
          {
            "id": "opt3",
            "label": "موزیک مدرن، نورپردازی لیزری ملایم و نظم دقیق زمان‌بندی",
            "styleKey": "modern",
            "score": {
              "modern": 90
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-style-location",
    "category": "style",
    "title": "تست انتخاب لوکیشن و سبک فرمالیته",
    "description": "کویر، جنگل، دریا، عمارت یا استودیو - انتخاب بهترین لوکیشن عکاسی کلیپ فرمالیته",
    "image": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    "duration": "۳ دقیقه",
    "questionsCount": 3,
    "badge": "عکاسی فرمالیته",
    "questions": [
      {
        "id": "q1",
        "text": "کدام تصویر طبیعت حس آرامش و زیبایی بیشتری برای ویدیوی کلیپ شما دارد؟",
        "options": [
          {
            "id": "opt1",
            "label": "کویر باشکوه با رمل‌های طلایی و غروب آفتاب گرم",
            "image": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
            "styleKey": "boho",
            "score": {
              "boho": 85,
              "modern": 15
            }
          },
          {
            "id": "opt2",
            "label": "جنگل‌های سرسبز شمال با مه صبحگاهی و درختان کهنسال",
            "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
            "styleKey": "romantic",
            "score": {
              "romantic": 85,
              "boho": 15
            }
          },
          {
            "id": "opt3",
            "label": "ساحل دریا با امواج خروشان و لباس‌های سبک سفید",
            "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
            "styleKey": "boho",
            "score": {
              "boho": 80,
              "romantic": 20
            }
          },
          {
            "id": "opt4",
            "label": "عمارت اروپایی با معمار کلاسیک، پله‌های سنگی و کالسکه",
            "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
            "styleKey": "luxury",
            "score": {
              "luxury": 90
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "سبک لباس مورد نظر شما برای روز عکاسی فرمالیته چیست؟",
        "options": [
          {
            "id": "opt1",
            "label": "لباس اسپرت شیک، کلاه حصیری و کتانی راحت",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt2",
            "label": "لباس تور سبک حریر با دامن دنباله‌دار در باد",
            "styleKey": "romantic",
            "score": {
              "romantic": 90
            }
          },
          {
            "id": "opt3",
            "label": "لباس رسمی فرمالیته با تاج و تور کارشده",
            "styleKey": "luxury",
            "score": {
              "luxury": 85
            }
          }
        ]
      },
      {
        "id": "q3",
        "text": "زمان‌بندی ایده‌آل شما برای عکاسی فرمالیته چیست؟",
        "options": [
          {
            "id": "opt1",
            "label": "سفر ۲ روزه به شمال یا جنوب قبل از عروسی",
            "styleKey": "boho",
            "score": {
              "boho": 85
            }
          },
          {
            "id": "opt2",
            "label": "عکاسی یک‌روزه در عمارت اطراف شهر",
            "styleKey": "luxury",
            "score": {
              "luxury": 85
            }
          },
          {
            "id": "opt3",
            "label": "عکاسی استودیویی مینی‌مال با نورپردازی حرفه‌ای",
            "styleKey": "modern",
            "score": {
              "modern": 90
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-style-palette",
    "category": "style",
    "title": "تست پالت رنگی و تم دکوراسیون جشن",
    "description": "رنگ‌های نود، زمردی/طلایی، پاستلی، دارک لوکس - کشف پالت رنگی اختصاصی گل‌آرایی",
    "image": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    "duration": "۳ دقیقه",
    "questionsCount": 3,
    "badge": "پالت رنگی",
    "questions": [
      {
        "id": "q1",
        "text": "کدام حس رنگی در نگاه اول چشم شما را می‌نوازد؟",
        "options": [
          {
            "id": "opt1",
            "label": "پالت دارک لوکس (مشکی گرافیت، زرشکی عمیق و طلایی)",
            "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
            "styleKey": "luxury",
            "score": {
              "luxury": 90
            }
          },
          {
            "id": "opt2",
            "label": "پالت نود و شنی (کرم گرم، خاکی، زیتونی و نسکافه‌ای)",
            "image": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
            "styleKey": "boho",
            "score": {
              "boho": 90
            }
          },
          {
            "id": "opt3",
            "label": "پالت پاستلی (صورتی روشن، یاسی ملایم، نعنایی و لیمویی)",
            "image": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
            "styleKey": "romantic",
            "score": {
              "romantic": 90
            }
          },
          {
            "id": "opt4",
            "label": "پالت تک‌رنگ مینی‌مال (سفید خالص، پلاتینیوم و نقره‌ای)",
            "image": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
            "styleKey": "modern",
            "score": {
              "modern": 90
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "ترجیح شما برای رنگ گل‌آرایی میزهای مهمانان چیست؟",
        "options": [
          {
            "id": "opt1",
            "label": "گل‌های ارکیده و رز سفید خالص",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt2",
            "label": "رزهای قرمز مخملی و گل‌های تیره‌رنگ باشکوه",
            "styleKey": "luxury",
            "score": {
              "luxury": 85
            }
          },
          {
            "id": "opt3",
            "label": "ترکیب گل‌های وحشی زرد، نارنجی و برگ‌های اکالیپتوس",
            "styleKey": "boho",
            "score": {
              "boho": 85
            }
          }
        ]
      },
      {
        "id": "q3",
        "text": "رنگ رانر و رومیزهای سالن پذیرایی چگونه باشد؟",
        "options": [
          {
            "id": "opt1",
            "label": "مخمل سرمه‌ای یا زرشکی",
            "styleKey": "classic",
            "score": {
              "classic": 85
            }
          },
          {
            "id": "opt2",
            "label": "کتان نود و شنی با بافت طبیعی",
            "styleKey": "boho",
            "score": {
              "boho": 85
            }
          },
          {
            "id": "opt3",
            "label": "ساتن سفید و براق",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-style-gown",
    "category": "style",
    "title": "تست مدل لباس عروس بر اساس اندام و روحیات",
    "description": "پرنسسی، ماهی، A-line، یا ساده مینی‌مال - پیشنهاد برش دامن و یقه متناسب",
    "image": "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80",
    "duration": "۳ دقیقه",
    "questionsCount": 3,
    "badge": "مدل لباس عروس",
    "questions": [
      {
        "id": "q1",
        "text": "کدام برش دامن احساس شیک بودن و اعتماد به نفس بیشتری به شما می‌دهد؟",
        "options": [
          {
            "id": "opt1",
            "label": "دامن پرنسسی اسکارلت پف‌دار با ژپون بزرگ",
            "image": "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=600&q=80",
            "styleKey": "luxury",
            "score": {
              "luxury": 90,
              "classic": 20
            }
          },
          {
            "id": "opt2",
            "label": "برش اندامی ماهی (Mermaid) با جذب کامل و دنباله شیک",
            "image": "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80",
            "styleKey": "modern",
            "score": {
              "modern": 90
            }
          },
          {
            "id": "opt3",
            "label": "دامن A-line کلاسیک با ریزش ملایم و راحتی بالا",
            "image": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
            "styleKey": "romantic",
            "score": {
              "romantic": 85,
              "classic": 15
            }
          },
          {
            "id": "opt4",
            "label": "لباس مستقیم ساده ساتن بدون پف و سنگ‌دوزی",
            "image": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
            "styleKey": "modern",
            "score": {
              "modern": 85,
              "boho": 15
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "سبک یقه مورد علاقه شما چیست؟",
        "options": [
          {
            "id": "opt1",
            "label": "یقه دلبری یا دکلته کلاسیک",
            "styleKey": "classic",
            "score": {
              "classic": 85
            }
          },
          {
            "id": "opt2",
            "label": "یقه قایقی یا آستین‌دار دانتل",
            "styleKey": "romantic",
            "score": {
              "romantic": 85
            }
          },
          {
            "id": "opt3",
            "label": "یقه خشتی یا رومی مدرن",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          }
        ]
      },
      {
        "id": "q3",
        "text": "میزان کاردست و سنگ‌دوزی روی پارچه چه مقدار باشد؟",
        "options": [
          {
            "id": "opt1",
            "label": "کریستال‌دوزی و ملیله‌دوزی متراکم و درخشان",
            "styleKey": "luxury",
            "score": {
              "luxury": 90
            }
          },
          {
            "id": "opt2",
            "label": "دانتل و گیپور ظریف برجسته",
            "styleKey": "romantic",
            "score": {
              "romantic": 85
            }
          },
          {
            "id": "opt3",
            "label": "پارچه مینی‌مال کاملاً بدون کاردست",
            "styleKey": "modern",
            "score": {
              "modern": 90
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-style-groom",
    "category": "style",
    "title": "تست سبک استایل و کت‌وشلوار داماد",
    "description": "تاکسیدو کلاسیک، اسپرت شیک یا مدرن - پیشنهاد رنگ، یقه و اکسسوری دامادی",
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    "duration": "۲ دقیقه",
    "questionsCount": 2,
    "badge": "استایل داماد",
    "questions": [
      {
        "id": "q1",
        "text": "کدام فرم کت و شلوار دامادی با روحیات شما سازگارتر است؟",
        "options": [
          {
            "id": "opt1",
            "label": "تاکسیدو مشکی با یقه آرشال ساتن و پاپیون مشکی رسمی",
            "styleKey": "luxury",
            "score": {
              "luxury": 90,
              "classic": 20
            }
          },
          {
            "id": "opt2",
            "label": "کت و شلوار سورمه‌ای یا طوسی با کراوات ابریشمی شیک",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt3",
            "label": "کت شش‌دکمه دوبل (Double Breasted) سرمه‌ای سلطنتی",
            "styleKey": "classic",
            "score": {
              "classic": 90
            }
          },
          {
            "id": "opt4",
            "label": "کت کتانی یا کرم روشن با ساسپندر و جلیقه بدون کراوات",
            "styleKey": "boho",
            "score": {
              "boho": 90
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "انتخاب شما برای کفش و ساعت دامادی چیست؟",
        "options": [
          {
            "id": "opt1",
            "label": "کفش ورنی مشکی براق با ساعت بند چرمی کلاسیک",
            "styleKey": "luxury",
            "score": {
              "luxury": 85
            }
          },
          {
            "id": "opt2",
            "label": "کفش چرم هشترک قهوه‌ای با ساعت استیل اسپرت",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt3",
            "label": "کفش کالج چرم شاموا نود",
            "styleKey": "boho",
            "score": {
              "boho": 85
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-psych-budget",
    "category": "psychology",
    "title": "تست سنجش تفاهم در مدیریت هزینه‌ها و بودجه",
    "description": "تحلیل هم‌نظری در اولویت‌بندی مالی، تقسیم هزینه‌ها و پیشگیری از چالش‌های بودجه",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    "duration": "۴ دقیقه",
    "questionsCount": 3,
    "badge": "مدیریت بودجه",
    "questions": [
      {
        "id": "q1",
        "text": "ما و همسرم درباره سقف بودجه کل عروسی و نحوه تقسیم آن توافق کامل داریم.",
        "options": [
          {
            "id": "lk1",
            "label": "کاملاً موافقم",
            "styleKey": "compat_high",
            "score": {
              "compat": 100,
              "budget_sync": 100
            }
          },
          {
            "id": "lk2",
            "label": "موافقم",
            "styleKey": "compat_mid",
            "score": {
              "compat": 80,
              "budget_sync": 80
            }
          },
          {
            "id": "lk3",
            "label": "نظری ندارم / خنثی",
            "styleKey": "compat_neutral",
            "score": {
              "compat": 50,
              "budget_sync": 50
            }
          },
          {
            "id": "lk4",
            "label": "مخالفم",
            "styleKey": "compat_low",
            "score": {
              "compat": 30,
              "budget_sync": 30
            }
          },
          {
            "id": "lk5",
            "label": "کاملاً مخالفم",
            "styleKey": "compat_vlow",
            "score": {
              "compat": 10,
              "budget_sync": 10
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "در صورت افزایش غیرمنتظره هزینه‌ها، می‌توانیم با آرامش و گفتگو آیتم‌های کم‌اهمیت‌تر را حذف کنیم.",
        "options": [
          {
            "id": "lk1",
            "label": "کاملاً موافقم",
            "styleKey": "compat_high",
            "score": {
              "compat": 100,
              "budget_sync": 100
            }
          },
          {
            "id": "lk2",
            "label": "موافقم",
            "styleKey": "compat_mid",
            "score": {
              "compat": 80,
              "budget_sync": 80
            }
          },
          {
            "id": "lk3",
            "label": "نظری ندارم / خنثی",
            "styleKey": "compat_neutral",
            "score": {
              "compat": 50,
              "budget_sync": 50
            }
          },
          {
            "id": "lk4",
            "label": "مخالفم",
            "styleKey": "compat_low",
            "score": {
              "compat": 30,
              "budget_sync": 30
            }
          },
          {
            "id": "lk5",
            "label": "کاملاً مخالفم",
            "styleKey": "compat_vlow",
            "score": {
              "compat": 10,
              "budget_sync": 10
            }
          }
        ]
      },
      {
        "id": "q3",
        "text": "اولویت‌های مالی ما (مثلاً بین کیفیت تالار در برابر عکاسی و فیلم‌برداری) کاملاً همسو است.",
        "options": [
          {
            "id": "lk1",
            "label": "کاملاً موافقم",
            "styleKey": "compat_high",
            "score": {
              "compat": 100,
              "budget_sync": 100
            }
          },
          {
            "id": "lk2",
            "label": "موافقم",
            "styleKey": "compat_mid",
            "score": {
              "compat": 80,
              "budget_sync": 80
            }
          },
          {
            "id": "lk3",
            "label": "نظری ندارم / خنثی",
            "styleKey": "compat_neutral",
            "score": {
              "compat": 50,
              "budget_sync": 50
            }
          },
          {
            "id": "lk4",
            "label": "مخالفم",
            "styleKey": "compat_low",
            "score": {
              "compat": 30,
              "budget_sync": 30
            }
          },
          {
            "id": "lk5",
            "label": "کاملاً مخالفم",
            "styleKey": "compat_vlow",
            "score": {
              "compat": 10,
              "budget_sync": 10
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-psych-stress",
    "category": "psychology",
    "title": "تست تحلیل سبک مدیریت استرس و بحران‌های قبل از عروسی",
    "description": "شناسایی نقاط محرک استرس، صبوری هیجانی و راهکارهای حفظ آرامش مشترک",
    "image": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    "duration": "۳ دقیقه",
    "questionsCount": 3,
    "badge": "مدیریت استرس",
    "questions": [
      {
        "id": "q1",
        "text": "هنگامی که برنامه‌ریزی‌ها طبق زمان‌بندی دقیق پیش نمی‌رود، می‌توانم خونسردی خود را حفظ کنم.",
        "options": [
          {
            "id": "lk1",
            "label": "کاملاً موافقم",
            "styleKey": "compat_high",
            "score": {
              "compat": 100,
              "budget_sync": 100
            }
          },
          {
            "id": "lk2",
            "label": "موافقم",
            "styleKey": "compat_mid",
            "score": {
              "compat": 80,
              "budget_sync": 80
            }
          },
          {
            "id": "lk3",
            "label": "نظری ندارم / خنثی",
            "styleKey": "compat_neutral",
            "score": {
              "compat": 50,
              "budget_sync": 50
            }
          },
          {
            "id": "lk4",
            "label": "مخالفم",
            "styleKey": "compat_low",
            "score": {
              "compat": 30,
              "budget_sync": 30
            }
          },
          {
            "id": "lk5",
            "label": "کاملاً مخالفم",
            "styleKey": "compat_vlow",
            "score": {
              "compat": 10,
              "budget_sync": 10
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "من و همسرم در روزهای پرفشار قبل از عروسی تکیه‌گاه عاطفی یکدیگر هستیم و استرس را منتقل نمی‌کنیم.",
        "options": [
          {
            "id": "lk1",
            "label": "کاملاً موافقم",
            "styleKey": "compat_high",
            "score": {
              "compat": 100,
              "budget_sync": 100
            }
          },
          {
            "id": "lk2",
            "label": "موافقم",
            "styleKey": "compat_mid",
            "score": {
              "compat": 80,
              "budget_sync": 80
            }
          },
          {
            "id": "lk3",
            "label": "نظری ندارم / خنثی",
            "styleKey": "compat_neutral",
            "score": {
              "compat": 50,
              "budget_sync": 50
            }
          },
          {
            "id": "lk4",
            "label": "مخالفم",
            "styleKey": "compat_low",
            "score": {
              "compat": 30,
              "budget_sync": 30
            }
          },
          {
            "id": "lk5",
            "label": "کاملاً مخالفم",
            "styleKey": "compat_vlow",
            "score": {
              "compat": 10,
              "budget_sync": 10
            }
          }
        ]
      },
      {
        "id": "q3",
        "text": "توانایی عبور از خطاهای جزئی تامین‌کنندگان در روز جشن بدون خراب کردن حالم را دارم.",
        "options": [
          {
            "id": "lk1",
            "label": "کاملاً موافقم",
            "styleKey": "compat_high",
            "score": {
              "compat": 100,
              "budget_sync": 100
            }
          },
          {
            "id": "lk2",
            "label": "موافقم",
            "styleKey": "compat_mid",
            "score": {
              "compat": 80,
              "budget_sync": 80
            }
          },
          {
            "id": "lk3",
            "label": "نظری ندارم / خنثی",
            "styleKey": "compat_neutral",
            "score": {
              "compat": 50,
              "budget_sync": 50
            }
          },
          {
            "id": "lk4",
            "label": "مخالفم",
            "styleKey": "compat_low",
            "score": {
              "compat": 30,
              "budget_sync": 30
            }
          },
          {
            "id": "lk5",
            "label": "کاملاً مخالفم",
            "styleKey": "compat_vlow",
            "score": {
              "compat": 10,
              "budget_sync": 10
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-psych-readiness",
    "category": "psychology",
    "title": "تست خودشناسی و آمادگی عاطفی ورود به زندگی مشترک",
    "description": "ارزیابی بلوغ ارتباطی، مسئولیت‌پذیری و آمادگی روحی برای شروع فصل جدید زندگی",
    "image": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    "duration": "۴ دقیقه",
    "questionsCount": 3,
    "badge": "خودشناسی ازدواج",
    "questions": [
      {
        "id": "q1",
        "text": "تصویر ذهنی من از زندگی مشترک متکی بر واقع‌گرایی، همدلی و پذیرش مسئولیت‌های جدید است.",
        "options": [
          {
            "id": "lk1",
            "label": "کاملاً موافقم",
            "styleKey": "compat_high",
            "score": {
              "compat": 100,
              "budget_sync": 100
            }
          },
          {
            "id": "lk2",
            "label": "موافقم",
            "styleKey": "compat_mid",
            "score": {
              "compat": 80,
              "budget_sync": 80
            }
          },
          {
            "id": "lk3",
            "label": "نظری ندارم / خنثی",
            "styleKey": "compat_neutral",
            "score": {
              "compat": 50,
              "budget_sync": 50
            }
          },
          {
            "id": "lk4",
            "label": "مخالفم",
            "styleKey": "compat_low",
            "score": {
              "compat": 30,
              "budget_sync": 30
            }
          },
          {
            "id": "lk5",
            "label": "کاملاً مخالفم",
            "styleKey": "compat_vlow",
            "score": {
              "compat": 10,
              "budget_sync": 10
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "توانایی گفتگو درباره نیازها و احساسات عمیق خود بدون ترس از قضاوت شدن را دارم.",
        "options": [
          {
            "id": "lk1",
            "label": "کاملاً موافقم",
            "styleKey": "compat_high",
            "score": {
              "compat": 100,
              "budget_sync": 100
            }
          },
          {
            "id": "lk2",
            "label": "موافقم",
            "styleKey": "compat_mid",
            "score": {
              "compat": 80,
              "budget_sync": 80
            }
          },
          {
            "id": "lk3",
            "label": "نظری ندارم / خنثی",
            "styleKey": "compat_neutral",
            "score": {
              "compat": 50,
              "budget_sync": 50
            }
          },
          {
            "id": "lk4",
            "label": "مخالفم",
            "styleKey": "compat_low",
            "score": {
              "compat": 30,
              "budget_sync": 30
            }
          },
          {
            "id": "lk5",
            "label": "کاملاً مخالفم",
            "styleKey": "compat_vlow",
            "score": {
              "compat": 10,
              "budget_sync": 10
            }
          }
        ]
      },
      {
        "id": "q3",
        "text": "آمادگی کافی برای اولویت دادن به تصمیمات دو نفره در برابر تمایلات فردی گذشته را احساس می‌کنم.",
        "options": [
          {
            "id": "lk1",
            "label": "کاملاً موافقم",
            "styleKey": "compat_high",
            "score": {
              "compat": 100,
              "budget_sync": 100
            }
          },
          {
            "id": "lk2",
            "label": "موافقم",
            "styleKey": "compat_mid",
            "score": {
              "compat": 80,
              "budget_sync": 80
            }
          },
          {
            "id": "lk3",
            "label": "نظری ندارم / خنثی",
            "styleKey": "compat_neutral",
            "score": {
              "compat": 50,
              "budget_sync": 50
            }
          },
          {
            "id": "lk4",
            "label": "مخالفم",
            "styleKey": "compat_low",
            "score": {
              "compat": 30,
              "budget_sync": 30
            }
          },
          {
            "id": "lk5",
            "label": "کاملاً مخالفم",
            "styleKey": "compat_vlow",
            "score": {
              "compat": 10,
              "budget_sync": 10
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-psych-family",
    "category": "psychology",
    "title": "تست میزان هم‌نظری در تصمیم‌گیری‌ها و مداخله اطرافیان",
    "description": "تحلیل مرزبندی سالم با اطرافیان، حفظ استقلال زوجین و مدیریت محترمانه نظرات خانواده",
    "image": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
    "duration": "۳ دقیقه",
    "questionsCount": 3,
    "badge": "مرزبندی خانواده",
    "questions": [
      {
        "id": "q1",
        "text": "من و همسرم مرز مشخصی برای حفظ استقلال تصمیم‌گیری‌های دو نفره خود تعیین کرده‌ایم.",
        "options": [
          {
            "id": "lk1",
            "label": "کاملاً موافقم",
            "styleKey": "compat_high",
            "score": {
              "compat": 100,
              "budget_sync": 100
            }
          },
          {
            "id": "lk2",
            "label": "موافقم",
            "styleKey": "compat_mid",
            "score": {
              "compat": 80,
              "budget_sync": 80
            }
          },
          {
            "id": "lk3",
            "label": "نظری ندارم / خنثی",
            "styleKey": "compat_neutral",
            "score": {
              "compat": 50,
              "budget_sync": 50
            }
          },
          {
            "id": "lk4",
            "label": "مخالفم",
            "styleKey": "compat_low",
            "score": {
              "compat": 30,
              "budget_sync": 30
            }
          },
          {
            "id": "lk5",
            "label": "کاملاً مخالفم",
            "styleKey": "compat_vlow",
            "score": {
              "compat": 10,
              "budget_sync": 10
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "توانایی شنیدن محترمانه نظرات اطرافیان بدون ایجاد تعارض در رابطه دونفره‌مان را داریم.",
        "options": [
          {
            "id": "lk1",
            "label": "کاملاً موافقم",
            "styleKey": "compat_high",
            "score": {
              "compat": 100,
              "budget_sync": 100
            }
          },
          {
            "id": "lk2",
            "label": "موافقم",
            "styleKey": "compat_mid",
            "score": {
              "compat": 80,
              "budget_sync": 80
            }
          },
          {
            "id": "lk3",
            "label": "نظری ندارم / خنثی",
            "styleKey": "compat_neutral",
            "score": {
              "compat": 50,
              "budget_sync": 50
            }
          },
          {
            "id": "lk4",
            "label": "مخالفم",
            "styleKey": "compat_low",
            "score": {
              "compat": 30,
              "budget_sync": 30
            }
          },
          {
            "id": "lk5",
            "label": "کاملاً مخالفم",
            "styleKey": "compat_vlow",
            "score": {
              "compat": 10,
              "budget_sync": 10
            }
          }
        ]
      },
      {
        "id": "q3",
        "text": "در صورت بروز اختلاف نظر میان خانواده‌ها، پشت یکدیگر ایستاده و حامی هم هستیم.",
        "options": [
          {
            "id": "lk1",
            "label": "کاملاً موافقم",
            "styleKey": "compat_high",
            "score": {
              "compat": 100,
              "budget_sync": 100
            }
          },
          {
            "id": "lk2",
            "label": "موافقم",
            "styleKey": "compat_mid",
            "score": {
              "compat": 80,
              "budget_sync": 80
            }
          },
          {
            "id": "lk3",
            "label": "نظری ندارم / خنثی",
            "styleKey": "compat_neutral",
            "score": {
              "compat": 50,
              "budget_sync": 50
            }
          },
          {
            "id": "lk4",
            "label": "مخالفم",
            "styleKey": "compat_low",
            "score": {
              "compat": 30,
              "budget_sync": 30
            }
          },
          {
            "id": "lk5",
            "label": "کاملاً مخالفم",
            "styleKey": "compat_vlow",
            "score": {
              "compat": 10,
              "budget_sync": 10
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-beauty-makeup",
    "category": "beauty",
    "title": "تست پیشنهاد میکاپ و شینیون عروس",
    "description": "اروپایی و نود، لایت شیک، کلاسیک، عربی/غلیظ - بهترین سبک آرایش چهره",
    "image": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    "duration": "۳ دقیقه",
    "questionsCount": 3,
    "badge": "میکاپ & شینیون",
    "questions": [
      {
        "id": "q1",
        "text": "کدام سبک آرایش چشم و غلظت سایه را ترجیح می‌دهید؟",
        "options": [
          {
            "id": "opt1",
            "label": "میکاپ نود و اروپایی (تاترا، کانتور لایت و سایه قهوه‌ای ملایم)",
            "image": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
            "styleKey": "modern",
            "score": {
              "modern": 90,
              "boho": 10
            }
          },
          {
            "id": "opt2",
            "label": "میکاپ لایت شیک و درخشان (گلیتر ملایم و خط چشم دقیق)",
            "image": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
            "styleKey": "romantic",
            "score": {
              "romantic": 90
            }
          },
          {
            "id": "opt3",
            "label": "میکاپ کلاسیـک هالیوودی (رژ لب قرمز یا زرشکی با خط چشم گربه‌ای)",
            "image": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
            "styleKey": "classic",
            "score": {
              "classic": 90
            }
          },
          {
            "id": "opt4",
            "label": "میکاپ غلیظ و عربی (اسموکی تیره، مژه پرحجم و کانتورینگ برجسته)",
            "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
            "styleKey": "luxury",
            "score": {
              "luxury": 90
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "مدل مو و شینیون دلخواه شما چیست؟",
        "options": [
          {
            "id": "opt1",
            "label": "شینیون بسته مینی‌مال خطی پایین گردن",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt2",
            "label": "موهای باز یا نیمه‌باز با فر درشت رومانتیک",
            "styleKey": "romantic",
            "score": {
              "romantic": 90
            }
          },
          {
            "id": "opt3",
            "label": "شینیون کلاسیک خلوج و جمع بالای سر",
            "styleKey": "classic",
            "score": {
              "classic": 85
            }
          }
        ]
      },
      {
        "id": "q3",
        "text": "انتخاب شما برای رژ لب چیست؟",
        "options": [
          {
            "id": "opt1",
            "label": "رژ لب گوشتی / کالباسی مات نود",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt2",
            "label": "رژ لب صورتی ملایم یا برق لب شاین",
            "styleKey": "romantic",
            "score": {
              "romantic": 85
            }
          },
          {
            "id": "opt3",
            "label": "رژ لب قرمز مخملی کلاسیک",
            "styleKey": "classic",
            "score": {
              "classic": 90
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-beauty-accessories",
    "category": "beauty",
    "title": "تست انتخاب تاج، تور و اکسسوری مناسب",
    "description": "تاج ملکه، ریسه زری، تور بلند حریر یا کلاه فرانسوی - تکمیل استایل زیبایی",
    "image": "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80",
    "duration": "۲ دقیقه",
    "questionsCount": 2,
    "badge": "تاج & اکسسوری",
    "questions": [
      {
        "id": "q1",
        "text": "کدام نوع تاج یا اکسسوری سر را برای شینیون خود می‌پسندید؟",
        "options": [
          {
            "id": "opt1",
            "label": "تاج فلزی بلند مروارید و کریستال طرح ملکه‌ای",
            "styleKey": "luxury",
            "score": {
              "luxury": 90,
              "classic": 20
            }
          },
          {
            "id": "opt2",
            "label": "ریسه ظریف کریستالی یا تل مینی‌مال شیشه‌ای",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt3",
            "label": "تاج گل طبیعی یا ریسه مروارید بوهمیان",
            "styleKey": "boho",
            "score": {
              "boho": 90
            }
          },
          {
            "id": "opt4",
            "label": "کلاه توردار فرانسوی کلاسیـک vintage",
            "styleKey": "vintage",
            "score": {
              "vintage": 90
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "قد تور سر عروس تا چه اندازه باشد؟",
        "options": [
          {
            "id": "opt1",
            "label": "تور سر خیلی بلند رویکف زمین با حاشیه دانتل",
            "styleKey": "classic",
            "score": {
              "classic": 90,
              "luxury": 20
            }
          },
          {
            "id": "opt2",
            "label": "تور سر متوسط تا کمر با اکلیل ملایم",
            "styleKey": "romantic",
            "score": {
              "romantic": 85
            }
          },
          {
            "id": "opt3",
            "label": "بدون تور سر یا تور کوتاه‌مینی‌مال",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-beauty-cinematography",
    "category": "beauty",
    "title": "تست سبک فیلم‌برداری و عکاسی عروسی",
    "description": "مستند داستانی، کلاسیک، سناریومحور یا هالیوودی - ساخت خاطره ماندگار تصویری",
    "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    "duration": "۳ دقیقه",
    "questionsCount": 2,
    "badge": "سبک تصویربرداری",
    "questions": [
      {
        "id": "q1",
        "text": "کدام سبک تدوین کلیپ عروسی با روحیات شما سازگارتر است؟",
        "options": [
          {
            "id": "opt1",
            "label": "سبک مستند داستانی (Documentary) با ضبط لحظات واقعی بدون ژست تصنعی",
            "styleKey": "boho",
            "score": {
              "boho": 90,
              "modern": 20
            }
          },
          {
            "id": "opt2",
            "label": "سبک سینمایی هالیوودی با تجهیزات کرین، هلی‌شات و نورپردازی سینمایی",
            "styleKey": "luxury",
            "score": {
              "luxury": 90
            }
          },
          {
            "id": "opt3",
            "label": "سبک کلاسیک با آهنگ‌های صمیمی و ژست‌های وقار عروسی",
            "styleKey": "classic",
            "score": {
              "classic": 85
            }
          },
          {
            "id": "opt4",
            "label": "کلیپ سناریومحور کوتاه با دیالوگ‌های عاشقانه زوج",
            "styleKey": "romantic",
            "score": {
              "romantic": 90
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "نوع چاپ آلبوم دیجیتال عکاسی چگونه باشد؟",
        "options": [
          {
            "id": "opt1",
            "label": "آلبوم جلد چرم با افکت‌های عکاسی سیاه و سفید کلاسیـک",
            "styleKey": "classic",
            "score": {
              "classic": 85
            }
          },
          {
            "id": "opt2",
            "label": "آلبوم جلد شیشه‌ای ژورنالی ایتالیایی با صفحه بزرگ",
            "styleKey": "luxury",
            "score": {
              "luxury": 85
            }
          },
          {
            "id": "opt3",
            "label": "آلبوم پارچه‌ای نود با کاغذ مات مینی‌مال",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-catering-menu",
    "category": "catering",
    "title": "تست انتخاب سبک پذیرایی و منوی غذایی",
    "description": "دیس‌پرس، سلف‌سرویس، فینگرفود یا کافه بار ویژه - طعم پذیرایی شام عروسی",
    "image": "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    "duration": "۳ دقیقه",
    "questionsCount": 2,
    "badge": "منو و پذیرایی",
    "questions": [
      {
        "id": "q1",
        "text": "کدام مدل سرو غذا برای مهمانان شما راحتی و جذابیت بیشتری ایجاد می‌کند؟",
        "options": [
          {
            "id": "opt1",
            "label": "سلف‌سرویس کامل با چندین مدل کباب، خورشت، سالادبار و دسر اختصاصی",
            "styleKey": "luxury",
            "score": {
              "luxury": 90,
              "classic": 15
            }
          },
          {
            "id": "opt2",
            "label": "سرو دیس‌پرس همزمان روی میزهای مهمانان بدون صف ایستادن",
            "styleKey": "classic",
            "score": {
              "classic": 90
            }
          },
          {
            "id": "opt3",
            "label": "ایستگاه‌های فینگرفود گرم، باربیکیو زنده و استیشن باریستا در فضای باز",
            "styleKey": "boho",
            "score": {
              "boho": 90,
              "modern": 20
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "کدام آیتم پذیرایی جانبی هیجان بیشتری برای مهمانان ایجاد می‌کند؟",
        "options": [
          {
            "id": "opt1",
            "label": "بار اختصاصی موکتیل و آبمیوه طبیعی تازه",
            "styleKey": "modern",
            "score": {
              "modern": 85
            }
          },
          {
            "id": "opt2",
            "label": "استیشن قهوه اسپرسو و وافل گرم",
            "styleKey": "romantic",
            "score": {
              "romantic": 85
            }
          },
          {
            "id": "opt3",
            "label": "میز شوکولات‌بار و آبشار شکلات فونتانا",
            "styleKey": "luxury",
            "score": {
              "luxury": 85
            }
          }
        ]
      }
    ]
  },
  {
    "id": "quiz-catering-music",
    "category": "catering",
    "title": "تست تم موسیقی و سبک دی‌جی / ارکستر زنده",
    "description": "سنتی تلفیقی، پاپ و شاد، الکترونیک/مدرن یا نوستالژیک - ساخت انرژی شب جشن",
    "image": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    "duration": "۳ دقیقه",
    "questionsCount": 2,
    "badge": "موسیقی & دی‌جی",
    "questions": [
      {
        "id": "q1",
        "text": "کدام ترکیب موسیقی برای سیستم صوتی و هیجان سالن رقص جشن شما عالی است؟",
        "options": [
          {
            "id": "opt1",
            "label": "دی‌جی حرفه‌ای با رمیکس‌های انرژی بالای پاپ، ریمیکس شاد و نورپردازی لیزری",
            "styleKey": "modern",
            "score": {
              "modern": 90
            }
          },
          {
            "id": "opt2",
            "label": "ارکستر زنده با خواننده مطرح، نوازندگان ساکسیفون و پرکاشن",
            "styleKey": "luxury",
            "score": {
              "luxury": 90
            }
          },
          {
            "id": "opt3",
            "label": "گروه موسیقی سنتی تلفیقی (کمانچه و تمبک) به همراه موزیک پاپ",
            "styleKey": "classic",
            "score": {
              "classic": 85,
              "vintage": 20
            }
          },
          {
            "id": "opt4",
            "label": "آهنگ‌های نوستالژیک قدیمی و خاطره‌انگیز دهه ۶۰ و ۷۰",
            "styleKey": "vintage",
            "score": {
              "vintage": 90
            }
          }
        ]
      },
      {
        "id": "q2",
        "text": "آهنگ تانگو و رقص دونفره ورودی عروس و داماد چه سبک ملودی داشته باشد؟",
        "options": [
          {
            "id": "opt1",
            "label": "موزیک بیکلام ویولن و پیانو کلاسیک شاهانه",
            "styleKey": "classic",
            "score": {
              "classic": 90
            }
          },
          {
            "id": "opt2",
            "label": "آهنگ عاشقانه پاپ ایرانی یا انگلیسی با صدای خواننده مورد علاقه",
            "styleKey": "romantic",
            "score": {
              "romantic": 90
            }
          },
          {
            "id": "opt3",
            "label": "تانگوی اصیل آکاردئون خنک و احساسی",
            "styleKey": "boho",
            "score": {
              "boho": 85
            }
          }
        ]
      }
    ]
  }
]
    };

    // ==========================================
    // DIGITAL INVITATION BUILDER STATE & LOGIC
    // ==========================================
    let invitationState = {
      theme: "emerald-gold", // emerald-gold, dark-minimal, royal-classic, boho-botanical, glassmorphism, pearl-white
      displayLang: "fa", // fa, en
      fontPersian: "vazirmatn", // nastaliq, vazirmatn, lalezar, shabnam, naskh
      fontEnglish: "great-vibes", // great-vibes, alex-brush, playfair, garamond, cinzel, bodoni
      envelopeOpened: false,
      isPlayingAudio: false,
      audioChoice: "lovers", // lovers, piano, custom
      customAudioUrl: "",
      mobileTab: "edit", // edit, preview
      groomName: "علی",
      brideName: "سارا",
      groomNameEn: "Ali",
      brideNameEn: "Sara",
      weddingDateJalali: "۱۴۰۳/۰۶/۱۵",
      ceremonyTime: "۱۸:۰۰ الی ۲۴:۰۰",
      welcomePoem: "در مکتب عشق، تو بهترین همسفری\nبا مقدم گرمتان در شب پیوند ما، محفل‌مان بهشت می‌گردد.",
      venueName: "باغ تالار تشریفاتی زمرد",
      venueAddress: "تهران، احمدآباد مستوفی، خیابان صنوبر، پلاک ۴۵",
      googleMapsUrl: "https://maps.google.com",
      neshanUrl: "https://neshan.org",
      baladUrl: "https://balad.ir",
      bankCardNumber: "۶۰۳۷-۹۹۷۹-۱۲۳۴-۵۶۷۸",
      bankCardHolder: "علی محمدی و سارا حسینی (صندوق شاباش و هدیه)",
      enableRsvp: true,
      enableShagoon: true,
      enableCountdown: true,
      enableGallery: true,
      galleryImages: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80"
      ],
      rsvps: [
        { id: 1, name: "رضا احمدی", status: "attending", guestsCount: 2, note: "با آرزوی خوشبخت‌ترین روزها" },
        { id: 2, name: "مریم کریمی", status: "attending", guestsCount: 1, note: "تبریک فراوان" },
        { id: 3, name: "امیرحسین کاظمی", status: "declined", guestsCount: 0, note: "متاسفانه مسافرت هستم" }
      ]
    };

    function setInvDisplayLang(lang) {
      invitationState.displayLang = lang;
      const btnFa = document.getElementById('btn-lang-fa');
      const btnEn = document.getElementById('btn-lang-en');
      if (btnFa && btnEn) {
        if (lang === 'fa') {
          btnFa.className = "px-3 py-1.5 rounded-lg bg-primary text-white transition-all shadow-xs";
          btnEn.className = "px-3 py-1.5 rounded-lg text-secondary hover:text-graphite transition-all";
        } else {
          btnEn.className = "px-3 py-1.5 rounded-lg bg-primary text-white transition-all shadow-xs";
          btnFa.className = "px-3 py-1.5 rounded-lg text-secondary hover:text-graphite transition-all";
        }
      }
      renderInvitationPreview();
    }

    function updateInvStateFromForm() {
      invitationState.groomName = document.getElementById('inv-input-groom')?.value.trim() || 'علی';
      invitationState.brideName = document.getElementById('inv-input-bride')?.value.trim() || 'سارا';
      invitationState.groomNameEn = document.getElementById('inv-input-groom-en')?.value.trim() || 'Ali';
      invitationState.brideNameEn = document.getElementById('inv-input-bride-en')?.value.trim() || 'Sara';
      invitationState.fontPersian = document.getElementById('inv-select-font-fa')?.value || 'vazirmatn';
      invitationState.fontEnglish = document.getElementById('inv-select-font-en')?.value || 'great-vibes';
      invitationState.weddingDateJalali = document.getElementById('inv-input-date')?.value.trim() || '۱۴۰۳/۰۶/۱۵';
      invitationState.ceremonyTime = document.getElementById('inv-input-time')?.value.trim() || '۱۸:۰۰ الی ۲۴:۰۰';
      invitationState.welcomePoem = document.getElementById('inv-input-poem')?.value.trim() || '';
      invitationState.venueName = document.getElementById('inv-input-venue')?.value.trim() || '';
      invitationState.venueAddress = document.getElementById('inv-input-address')?.value.trim() || '';
      invitationState.googleMapsUrl = document.getElementById('inv-input-gmaps')?.value.trim() || '#';
      invitationState.neshanUrl = document.getElementById('inv-input-neshan')?.value.trim() || '#';
      invitationState.baladUrl = document.getElementById('inv-input-balad')?.value.trim() || '#';
      invitationState.bankCardNumber = document.getElementById('inv-input-cardnum')?.value.trim() || '';
      invitationState.bankCardHolder = document.getElementById('inv-input-cardholder')?.value.trim() || '';
      invitationState.customAudioUrl = document.getElementById('inv-input-audio-url')?.value.trim() || '';

      renderInvitationPreview();
    }

    function setInvTheme(themeName) {
      invitationState.theme = themeName;
      document.querySelectorAll('.inv-theme-card').forEach(card => {
        card.className = "inv-theme-card p-3.5 rounded-2xl border border-accent bg-white hover:border-primary cursor-pointer transition-all space-y-2";
        const check = card.querySelector('.theme-check');
        if (check) check.classList.add('hidden');
      });

      const activeCard = document.getElementById('inv-theme-' + themeName);
      if (activeCard) {
        activeCard.className = "inv-theme-card p-3.5 rounded-2xl border-2 border-primary bg-emerald-50/50 cursor-pointer transition-all space-y-2";
        const check = activeCard.querySelector('.theme-check');
        if (check) check.classList.remove('hidden');
      }

      renderInvitationPreview();
    }

    function setInvAudioChoice(choice) {
      invitationState.audioChoice = choice;
      const customBox = document.getElementById('inv-custom-audio-box');
      if (customBox) {
        customBox.classList.toggle('hidden', choice !== 'custom');
      }
    }

    function toggleInvFeature(featureKey) {
      invitationState[featureKey] = !invitationState[featureKey];
      renderInvitationPreview();
    }

    function switchInvMobileTab(tab) {
      invitationState.mobileTab = tab;
      const editBtn = document.getElementById('inv-mobtab-edit');
      const prevBtn = document.getElementById('inv-mobtab-preview');
      const controlPanel = document.getElementById('inv-control-panel');
      const previewPanel = document.getElementById('inv-preview-panel');

      if (tab === 'edit') {
        editBtn.className = "flex-1 py-2.5 rounded-xl transition-all bg-primary text-white text-center";
        prevBtn.className = "flex-1 py-2.5 rounded-xl transition-all text-secondary hover:text-graphite text-center";
        controlPanel.classList.remove('hidden');
        previewPanel.classList.add('hidden');
      } else {
        prevBtn.className = "flex-1 py-2.5 rounded-xl transition-all bg-primary text-white text-center";
        editBtn.className = "flex-1 py-2.5 rounded-xl transition-all text-secondary hover:text-graphite text-center";
        controlPanel.classList.add('hidden');
        previewPanel.classList.remove('hidden');
      }
    }

    function openEnvelopeAnimation() {
      invitationState.envelopeOpened = true;
      const overlay = document.getElementById('inv-envelope-overlay');
      if (overlay) {
        overlay.classList.add('opacity-0', 'pointer-events-none', '-translate-y-full');
      }
    }

    function resetEnvelopeAnimation() {
      invitationState.envelopeOpened = false;
      const overlay = document.getElementById('inv-envelope-overlay');
      if (overlay) {
        overlay.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-full');
      }
    }

    function toggleInvMusic() {
      invitationState.isPlayingAudio = !invitationState.isPlayingAudio;
      const text = document.getElementById('inv-music-text');
      const icon = document.getElementById('inv-music-icon');
      if (invitationState.isPlayingAudio) {
        if (text) text.innerText = 'پخش موزیک...';
        if (icon) icon.className = "w-3 h-3 text-rose-400 animate-spin";
      } else {
        if (text) text.innerText = 'موزیک';
        if (icon) icon.className = "w-3 h-3 text-emerald-400";
      }
    }

    function getSelectedFontFamily() {
      if (invitationState.displayLang === 'en') {
        const fontMap = {
          'great-vibes': "'Great Vibes', cursive",
          'alex-brush': "'Alex Brush', cursive",
          'playfair': "'Playfair Display', serif",
          'garamond': "'Cormorant Garamond', serif",
          'cinzel': "'Cinzel', serif",
          'bodoni': "'Bodoni Moda', serif"
        };
        return fontMap[invitationState.fontEnglish] || "'Great Vibes', cursive";
      } else {
        const fontMap = {
          'nastaliq': "'Iran Nastaliq', 'Vazirmatn', cursive",
          'vazirmatn': "'Vazirmatn', sans-serif",
          'lalezar': "'Lalezar', cursive, sans-serif",
          'shabnam': "'Shabnam', 'Sahel', sans-serif",
          'naskh': "'Sahel', 'Vazirmatn', sans-serif"
        };
        return fontMap[invitationState.fontPersian] || "'Vazirmatn', sans-serif";
      }
    }

    function renderInvitationPreview() {
      const isEn = invitationState.displayLang === 'en';
      const groomStr = isEn ? (invitationState.groomNameEn || 'Ali') : invitationState.groomName;
      const brideStr = isEn ? (invitationState.brideNameEn || 'Sara') : invitationState.brideName;
      const fontCSS = getSelectedFontFamily();

      // 1. Header Title
      const headerTitle = document.getElementById('inv-header-title');
      if (headerTitle) {
        headerTitle.innerText = `کارت دعوت آنلاین: ${groomStr} و ${brideStr}`;
      }

      const envCoupleNames = document.getElementById('env-couple-names');
      if (envCoupleNames) {
        envCoupleNames.innerText = `${groomStr} & ${brideStr}`;
        envCoupleNames.style.fontFamily = fontCSS;
      }

      // 2. Monogram & Poem
      const monogram = document.getElementById('inv-monogram');
      if (monogram) {
        const gChar = groomStr.charAt(0) || 'A';
        const bChar = brideStr.charAt(0) || 'S';
        monogram.innerText = `${gChar} & ${bChar}`;
        monogram.style.fontFamily = fontCSS;
      }

      const previewPoem = document.getElementById('inv-preview-poem');
      if (previewPoem) previewPoem.innerText = invitationState.welcomePoem;

      const previewNames = document.getElementById('inv-preview-names');
      if (previewNames) {
        previewNames.style.fontFamily = fontCSS;
        previewNames.style.fontSize = isEn ? "2.2rem" : "1.8rem";
        previewNames.style.direction = isEn ? "ltr" : "rtl";
        previewNames.innerHTML = `
          <span>${groomStr}</span>
          <i data-lucide="heart" class="w-6 h-6 text-rose-500 fill-rose-500 inline shrink-0 mx-2"></i>
          <span>${brideStr}</span>
        `;
      }

      // 3. Date & Time
      const previewDate = document.getElementById('inv-preview-date');
      const previewTime = document.getElementById('inv-preview-time');
      if (previewDate) previewDate.innerText = invitationState.weddingDateJalali;
      if (previewTime) previewTime.innerText = `ساعت ${invitationState.ceremonyTime}`;

      // 4. Venue & Map Links
      const previewVenue = document.getElementById('inv-preview-venue');
      const previewAddress = document.getElementById('inv-preview-address');
      if (previewVenue) previewVenue.innerText = invitationState.venueName;
      if (previewAddress) previewAddress.innerText = invitationState.venueAddress;

      const linkGmaps = document.getElementById('inv-link-gmaps');
      const linkNeshan = document.getElementById('inv-link-neshan');
      const linkBalad = document.getElementById('inv-link-balad');
      if (linkGmaps) linkGmaps.href = invitationState.googleMapsUrl || "#";
      if (linkNeshan) linkNeshan.href = invitationState.neshanUrl || "#";
      if (linkBalad) linkBalad.href = invitationState.baladUrl || "#";

      // 5. Shagoon Card
      const previewCardnum = document.getElementById('inv-preview-cardnum');
      const previewCardholder = document.getElementById('inv-preview-cardholder');
      if (previewCardnum) previewCardnum.innerText = invitationState.bankCardNumber;
      if (previewCardholder) previewCardholder.innerText = invitationState.bankCardHolder;

      // 6. Toggles
      const modCountdown = document.getElementById('inv-mod-countdown');
      const modGallery = document.getElementById('inv-mod-gallery');
      const modShagoon = document.getElementById('inv-mod-shagoon');
      const modRsvp = document.getElementById('inv-mod-rsvp');

      if (modCountdown) modCountdown.classList.toggle('hidden', !invitationState.enableCountdown);
      if (modGallery) modGallery.classList.toggle('hidden', !invitationState.enableGallery);
      if (modShagoon) modShagoon.classList.toggle('hidden', !invitationState.enableShagoon);
      if (modRsvp) modRsvp.classList.toggle('hidden', !invitationState.enableRsvp);

      // 7. Theme Styling Application (6 Luxury Themes)
      const cardInner = document.getElementById('inv-card-inner');
      const themeEmblem = document.getElementById('inv-theme-emblem');
      const themeTagline = document.getElementById('inv-theme-tagline');

      if (cardInner) {
        if (invitationState.theme === 'emerald-gold') {
          cardInner.className = "p-6 space-y-6 flex-1 transition-all text-center bg-gradient-to-b from-[#1C3A27] via-[#1B3B2B] to-[#1C3A27] text-amber-100 border-2 border-amber-300/40 shadow-2xl rounded-3xl";
          if (themeEmblem) themeEmblem.className = "w-14 h-14 rounded-full mx-auto flex items-center justify-center border-2 border-amber-300 bg-amber-400/20 text-amber-200 text-xl font-black shadow-lg backdrop-blur-sm";
          if (themeTagline) themeTagline.className = "text-xs font-bold block tracking-widest text-amber-300 uppercase";
        } else if (invitationState.theme === 'dark-minimal') {
          cardInner.className = "p-6 space-y-6 flex-1 transition-all text-center bg-gradient-to-b from-[#121212] via-[#1A1A1A] to-[#121212] text-slate-100 border border-slate-700 shadow-2xl rounded-3xl";
          if (themeEmblem) themeEmblem.className = "w-14 h-14 rounded-full mx-auto flex items-center justify-center border border-amber-400/80 bg-slate-800 text-amber-300 text-xl font-black shadow-lg";
          if (themeTagline) themeTagline.className = "text-xs font-bold block tracking-widest text-amber-400 uppercase";
        } else if (invitationState.theme === 'royal-classic') {
          cardInner.className = "p-6 space-y-6 flex-1 transition-all text-center bg-gradient-to-b from-[#FDFBF7] via-[#F6F2EA] to-[#FDFBF7] text-amber-950 border-2 border-amber-300/80 shadow-2xl rounded-3xl";
          if (themeEmblem) themeEmblem.className = "w-14 h-14 rounded-full mx-auto flex items-center justify-center border-2 border-amber-500 bg-amber-100 text-amber-900 text-xl font-black shadow-md";
          if (themeTagline) themeTagline.className = "text-xs font-bold block tracking-widest text-amber-800 uppercase";
        } else if (invitationState.theme === 'boho-botanical') {
          cardInner.className = "p-6 space-y-6 flex-1 transition-all text-center bg-gradient-to-b from-[#E8EFE9] via-[#F4F0EA] to-[#E8EFE9] text-emerald-950 border border-emerald-200 shadow-2xl rounded-3xl";
          if (themeEmblem) themeEmblem.className = "w-14 h-14 rounded-full mx-auto flex items-center justify-center border-2 border-emerald-400 bg-emerald-100/80 text-emerald-900 text-xl font-black shadow-md";
          if (themeTagline) themeTagline.className = "text-xs font-bold block tracking-widest text-emerald-800 uppercase";
        } else if (invitationState.theme === 'glassmorphism') {
          cardInner.className = "p-6 space-y-6 flex-1 transition-all text-center bg-gradient-to-b from-purple-950/90 via-slate-900/90 to-indigo-950/90 text-cyan-100 border border-white/20 shadow-2xl rounded-3xl backdrop-blur-xl";
          if (themeEmblem) themeEmblem.className = "w-14 h-14 rounded-full mx-auto flex items-center justify-center border border-cyan-300/60 bg-white/10 text-cyan-200 text-xl font-black shadow-lg";
          if (themeTagline) themeTagline.className = "text-xs font-bold block tracking-widest text-cyan-300 uppercase";
        } else if (invitationState.theme === 'pearl-white') {
          cardInner.className = "p-6 space-y-6 flex-1 transition-all text-center bg-gradient-to-b from-[#FAFAFA] via-[#F4F4F5] to-[#FAFAFA] text-slate-900 border border-slate-200 shadow-2xl rounded-3xl";
          if (themeEmblem) themeEmblem.className = "w-14 h-14 rounded-full mx-auto flex items-center justify-center border border-slate-400 bg-white text-slate-800 text-xl font-black shadow-md";
          if (themeTagline) themeTagline.className = "text-xs font-bold block tracking-widest text-slate-700 uppercase";
        }
      }

      // 8. Admin RSVP Table Render
      renderInvAdminRsvpTable();

      lucide.createIcons();
    }

    function renderInvAdminRsvpTable() {
      const tbody = document.getElementById('inv-admin-rsvp-table');
      const badge = document.getElementById('inv-rsvp-summary-badge');
      if (!tbody) return;

      tbody.innerHTML = '';
      let totalAttendingGuests = 0;

      invitationState.rsvps.forEach(r => {
        if (r.status === 'attending') {
          totalAttendingGuests += (r.guestsCount || 1);
        }

        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-50 transition-colors";
        tr.innerHTML = `
          <td class="p-3 font-bold text-graphite">${r.name}</td>
          <td class="p-3">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
              r.status === 'attending' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
            }">
              ${r.status === 'attending' ? 'شرکت می‌کند' : 'عذرخواهی / عدم حضور'}
            </span>
          </td>
          <td class="p-3 font-bold text-primary">${r.status === 'attending' ? r.guestsCount + ' نفر' : '-'}</td>
          <td class="p-3 text-secondary text-[11px]">${r.note || '-'}</td>
        `;
        tbody.appendChild(tr);
      });

      if (badge) {
        badge.innerHTML = `<span>تعداد حاضرین قطعی: ${totalAttendingGuests} نفر</span>`;
      }
    }

    function handleGuestRsvpSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('guest-rsvp-name').value.trim();
      const status = document.querySelector('input[name="guest-rsvp-status"]:checked').value;
      const count = parseInt(document.getElementById('guest-rsvp-count').value) || 1;
      const menuPref = document.getElementById('guest-rsvp-menu')?.value || 'کباب و جوجه کلاسیک';
      const specialNeeds = document.getElementById('guest-rsvp-special-needs')?.value.trim() || '';
      const note = document.getElementById('guest-rsvp-note').value.trim();

      if (!name) return;

      const fullNote = [
        menuPref ? `منو: ${menuPref}` : '',
        specialNeeds ? `نیازمندی خاص: ${specialNeeds}` : '',
        note
      ].filter(Boolean).join(' | ');

      invitationState.rsvps.unshift({
        id: Date.now(),
        name,
        status,
        guestsCount: status === 'attending' ? count : 0,
        note: fullNote
      });

      renderInvAdminRsvpTable();
      document.getElementById('guest-rsvp-name').value = '';
      document.getElementById('guest-rsvp-note').value = '';

      showToast('پاسخ شما با موفقیت ثبت شد. با تشکر از اعلام حضور شما!', 'success');
    }

    function copyBankCardNumber() {
      if (navigator.clipboard && invitationState.bankCardNumber) {
        navigator.clipboard.writeText(invitationState.bankCardNumber);
        showToast('شماره کارت با موفقیت در حافظه کپی شد: ' + invitationState.bankCardNumber, 'info');
      } else {
        showToast('شماره کارت: ' + invitationState.bankCardNumber, 'info');
      }
    }

    function copyInvitationLink() {
      const link = 'https://aroosito.com/invitation/ali-and-sara';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(link);
        showToast('لینک اختصاصی کارت دعوت کپی شد', 'info');
      } else {
        showToast('لینک کارت دعوت: ' + link, 'info');
      }
    }

    function openQrModal() {
      const modal = document.getElementById('inv-qr-modal');
      if (modal) modal.classList.remove('hidden');
    }

    function closeQrModal() {
      const modal = document.getElementById('inv-qr-modal');
      if (modal) modal.classList.add('hidden');
    }

    function switchQuizCategoryTab(catKey) {
      quizState.activeTab = catKey;

      ['style', 'psychology', 'beauty', 'catering'].forEach(tab => {
        const btn = document.getElementById('quiz-tab-' + tab);
        if (btn) {
          if (tab === catKey) {
            btn.className = "flex-1 min-w-[140px] py-3 px-3 rounded-xl transition-all bg-primary text-white text-center flex items-center justify-center gap-1.5 shadow-xs";
          } else {
            btn.className = "flex-1 min-w-[140px] py-3 px-3 rounded-xl transition-all text-secondary hover:text-graphite text-center flex items-center justify-center gap-1.5";
          }
        }
      });

      renderQuizCatalogCards();
    }

    function renderQuizCatalogCards() {
      const grid = document.getElementById('quiz-cards-grid');
      if (!grid) return;
      grid.innerHTML = '';

      const filteredQuizzes = quizState.quizzes.filter(q => q.category === quizState.activeTab);

      filteredQuizzes.forEach(quiz => {
        const card = document.createElement('div');
        card.className = "bg-white border border-accent rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between";
        card.innerHTML = `
          <div>
            <div class="relative h-48 overflow-hidden bg-slate-900">
              <img src="${quiz.image}" alt="${quiz.title}" class="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-300">
              <div class="absolute top-3 right-3 bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                ${quiz.badge}
              </div>
            </div>

            <div class="p-6 space-y-3">
              <div class="flex items-center gap-3 text-xs font-bold text-secondary">
                <span class="flex items-center gap-1">
                  <i data-lucide="help-circle" class="w-4 h-4 text-primary"></i>
                  <span>${quiz.questionsCount} سوال</span>
                </span>
                <span>•</span>
                <span class="flex items-center gap-1">
                  <i data-lucide="clock" class="w-4 h-4 text-primary"></i>
                  <span>زمان: ${quiz.duration}</span>
                </span>
              </div>

              <h3 class="text-lg font-bold text-graphite leading-snug">${quiz.title}</h3>
              <p class="text-xs text-secondary leading-relaxed">${quiz.description}</p>
            </div>
          </div>

          <div class="p-6 pt-0">
            <button onclick="startQuizRunner('${quiz.id}')" class="w-full bg-primary hover:bg-emerald-900 text-white font-bold py-3 rounded-2xl text-xs shadow-md transition-all flex items-center justify-center gap-2">
              <span>شروع تست هوشمند</span>
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
            </button>
          </div>
        `;
        grid.appendChild(card);
      });

      lucide.createIcons();
    }

    // ==========================================
    // CHAT & DIRECT MESSAGING RENDER LOGIC
    // ==========================================
    function renderChatThreadsList() {
      const container = document.getElementById('chat-threads-list-container');
      const countBadge = document.getElementById('chat-total-threads-count');
      const navBadge = document.getElementById('nav-chat-unread-badge');
      if (!container) return;

      container.innerHTML = '';
      const threads = chatState.threads;

      if (countBadge) countBadge.innerText = `${threads.length} گفتگو`;

      let totalUnread = 0;
      threads.forEach(t => {
        totalUnread += (t.unreadCount || 0);
      });

      if (navBadge) {
        if (totalUnread > 0) {
          navBadge.innerText = totalUnread;
          navBadge.classList.remove('hidden');
        } else {
          navBadge.classList.add('hidden');
        }
      }

      if (threads.length === 0) {
        container.innerHTML = `<div class="p-6 text-center text-secondary text-xs font-medium">هیچ گفت‌وگویی یافت نشد.</div>`;
        return;
      }

      threads.forEach(t => {
        const isActive = t.id === chatState.activeThreadId;
        const item = document.createElement('div');
        item.onclick = () => selectChatThread(t.id);
        item.className = `p-4 cursor-pointer transition-all flex items-start gap-3 relative ${
          isActive ? 'bg-primary/10 border-r-4 border-primary shadow-xs' : 'hover:bg-slate-100 bg-white'
        }`;

        let badgeBg = "bg-blue-100 text-blue-800 border-blue-200";
        if (t.statusBadge === "quote_sent") badgeBg = "bg-emerald-100 text-emerald-800 border-emerald-200";
        if (t.statusBadge === "finalized") badgeBg = "bg-purple-100 text-purple-800 border-purple-200";

        item.innerHTML = `
          <div class="relative shrink-0">
            <div class="w-12 h-12 rounded-2xl overflow-hidden border border-accent bg-white">
              <img src="${t.vendorLogo}" alt="${t.vendorName}" class="w-full h-full object-cover">
            </div>
            ${t.unreadCount > 0 ? `
              <span class="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                ${t.unreadCount}
              </span>
            ` : ''}
          </div>

          <div class="flex-1 min-w-0 space-y-1">
            <div class="flex justify-between items-center">
              <h4 class="text-xs font-bold text-graphite truncate">${t.vendorName}</h4>
              <span class="text-[10px] text-secondary font-medium shrink-0 ml-1">${t.lastTime}</span>
            </div>

            <p class="text-[11px] text-secondary truncate font-medium">${t.lastMessage}</p>

            <div class="flex items-center gap-2 pt-0.5">
              <span class="text-[9px] font-bold px-2 py-0.5 rounded-full border ${badgeBg}">
                ${t.statusText}
              </span>
            </div>
          </div>
        `;

        container.appendChild(item);
      });

      lucide.createIcons();
    }

    function selectChatThread(threadId) {
      chatState.activeThreadId = threadId;
      const thread = chatState.threads.find(t => t.id === threadId);
      if (thread) {
        thread.unreadCount = 0;
      }
      renderChatThreadsList();
      renderChatActiveThread();
    }

    function filterChatThreads() {
      const query = document.getElementById('chat-thread-search')?.value.trim().toLowerCase() || '';
      const container = document.getElementById('chat-threads-list-container');
      if (!container) return;

      const filtered = chatState.threads.filter(t =>
        t.vendorName.toLowerCase().includes(query) ||
        t.vendorCategory.toLowerCase().includes(query) ||
        t.lastMessage.toLowerCase().includes(query)
      );

      container.innerHTML = '';
      if (filtered.length === 0) {
        container.innerHTML = `<div class="p-6 text-center text-secondary text-xs font-medium">نتیجه‌ای یافت نشد.</div>`;
        return;
      }

      filtered.forEach(t => {
        const isActive = t.id === chatState.activeThreadId;
        const item = document.createElement('div');
        item.onclick = () => selectChatThread(t.id);
        item.className = `p-4 cursor-pointer transition-all flex items-start gap-3 relative ${
          isActive ? 'bg-primary/10 border-r-4 border-primary shadow-xs' : 'hover:bg-slate-100 bg-white'
        }`;

        let badgeBg = "bg-blue-100 text-blue-800 border-blue-200";
        if (t.statusBadge === "quote_sent") badgeBg = "bg-emerald-100 text-emerald-800 border-emerald-200";
        if (t.statusBadge === "finalized") badgeBg = "bg-purple-100 text-purple-800 border-purple-200";

        item.innerHTML = `
          <div class="relative shrink-0">
            <div class="w-12 h-12 rounded-2xl overflow-hidden border border-accent bg-white">
              <img src="${t.vendorLogo}" alt="${t.vendorName}" class="w-full h-full object-cover">
            </div>
          </div>

          <div class="flex-1 min-w-0 space-y-1">
            <div class="flex justify-between items-center">
              <h4 class="text-xs font-bold text-graphite truncate">${t.vendorName}</h4>
              <span class="text-[10px] text-secondary font-medium shrink-0 ml-1">${t.lastTime}</span>
            </div>

            <p class="text-[11px] text-secondary truncate font-medium">${t.lastMessage}</p>

            <div class="flex items-center gap-2 pt-0.5">
              <span class="text-[9px] font-bold px-2 py-0.5 rounded-full border ${badgeBg}">
                ${t.statusText}
              </span>
            </div>
          </div>
        `;

        container.appendChild(item);
      });

      lucide.createIcons();
    }

    function renderChatActiveThread() {
      const activeThread = chatState.threads.find(t => t.id === chatState.activeThreadId) || chatState.threads[0];
      if (!activeThread) return;

      // 1. Top Bar Header
      const header = document.getElementById('chat-active-header');
      if (header) {
        header.innerHTML = `
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl overflow-hidden border border-accent bg-white shrink-0">
              <img src="${activeThread.vendorLogo}" alt="${activeThread.vendorName}" class="w-full h-full object-cover">
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-base font-bold text-graphite">${activeThread.vendorName}</h3>
                ${activeThread.verified ? `
                  <span class="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    <i data-lucide="shield-check" class="w-3 h-3"></i>
                    <span>تاییدیه رسمی</span>
                  </span>
                ` : ''}
              </div>
              <span class="text-xs text-secondary font-medium">${activeThread.vendorCategory} • آنلاین</span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="openPreInvoiceModal()" class="bg-primary hover:bg-emerald-900 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs shrink-0 cursor-pointer">
              <i data-lucide="file-plus" class="w-4 h-4"></i>
              <span>صدور / مشاهده پیش‌فاکتور</span>
            </button>
            <a href="tel:${activeThread.phone}" class="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5">
              <i data-lucide="phone" class="w-4 h-4"></i>
              <span class="hidden sm:inline">تماس: ${activeThread.phone}</span>
            </a>
          </div>
        `;
      }

      // 2. Status Bar & Inquiry Card
      const statusBar = document.getElementById('chat-active-status-bar');
      if (statusBar && activeThread.inquiryData) {
        let statusBadgeHTML = `<span class="bg-amber-100 text-amber-800 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold">در انتظار پاسخ تامین‌کننده</span>`;
        if (activeThread.statusBadge === 'quote_sent') {
          statusBadgeHTML = `<span class="bg-emerald-100 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold">پیش‌فاکتور صادر شد</span>`;
        } else if (activeThread.statusBadge === 'finalized') {
          statusBadgeHTML = `<span class="bg-purple-100 text-purple-800 border border-purple-200 px-3 py-1 rounded-full text-xs font-bold">رزرو نهایی شد</span>`;
        }

        const inq = activeThread.inquiryData;
        statusBar.innerHTML = `
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-primary font-black">اطلاعات استعلام قیمت ثبت شده:</span>
            <span class="bg-white px-2.5 py-1 rounded-lg border border-accent">تاریخ: ${inq.date}</span>
            <span class="bg-white px-2.5 py-1 rounded-lg border border-accent">مهمانان: ${inq.guests} نفر</span>
            <span class="bg-white px-2.5 py-1 rounded-lg border border-accent">خدمات: ${inq.services ? inq.services.join('، ') : 'ارائه شده'}</span>
          </div>
          <div>
            ${statusBadgeHTML}
          </div>
        `;
      }

      // 3. Message Stream
      const streamContainer = document.getElementById('chat-messages-stream-container');
      if (streamContainer) {
        streamContainer.innerHTML = '';

        activeThread.messages.forEach(msg => {
          const isUser = msg.sender === 'user';
          const msgBox = document.createElement('div');
          msgBox.className = `flex flex-col ${isUser ? 'items-start' : 'items-end'}`;

          let content = '';

          if (msg.isInquirySummary) {
            content = `
              <div class="max-w-md bg-primary text-white p-4 rounded-3xl rounded-tr-xs shadow-sm space-y-2 text-xs font-medium leading-relaxed">
                <div class="font-bold border-b border-white/20 pb-1.5 flex items-center gap-1.5">
                  <i data-lucide="send" class="w-3.5 h-3.5"></i>
                  <span>خلاصه استعلام قیمت ارسال شده</span>
                </div>
                <div class="whitespace-pre-line">${msg.text}</div>
                <span class="block text-[10px] text-emerald-200 text-left dir-ltr mt-1">${msg.time}</span>
              </div>
            `;
          } else if (msg.hasQuoteCard && msg.quoteDetails) {
            const q = msg.quoteDetails;
            let statusBadge = `<span class="bg-amber-100 text-amber-800 border border-amber-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full">در انتظار بررسی</span>`;
            if (q.status === 'accepted' || q.status === 'appointment_scheduled') {
              statusBadge = `<span class="bg-emerald-100 text-emerald-800 border border-emerald-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full">تایید اولیه و رزرو جلسه حضوری</span>`;
            } else if (q.status === 'finalized_in_person') {
              statusBadge = `<span class="bg-purple-100 text-purple-800 border border-purple-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full">نهایی‌شده حضوری</span>`;
            } else if (q.status === 'revision_requested') {
              statusBadge = `<span class="bg-rose-100 text-rose-800 border border-rose-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full">درخواست تغییرات</span>`;
            }

            let lineItemsHtml = '';
            if (q.items && q.items.length > 0) {
              q.items.forEach(it => {
                lineItemsHtml += `
                  <div class="flex justify-between items-center text-[11px] border-b border-accent/40 pb-1">
                    <span class="text-graphite font-medium">• ${it.name}</span>
                    <span class="text-primary font-bold">${Number(it.price).toLocaleString('fa-IR')} تومان</span>
                  </div>
                `;
              });
            } else if (q.servicesIncluded) {
              q.servicesIncluded.forEach(s => {
                lineItemsHtml += `<div class="text-[11px] font-medium text-graphite">• ${s}</div>`;
              });
            }

            content = `
              <div class="max-w-md w-full bg-white border-2 border-primary/40 p-4 rounded-3xl rounded-tl-xs shadow-lg space-y-3.5 text-xs font-bold text-graphite">
                <div class="flex justify-between items-center border-b border-accent pb-2">
                  <div class="flex items-center gap-1.5 text-primary">
                    <i data-lucide="file-check-2" class="w-4 h-4"></i>
                    <span class="font-black">${q.title}</span>
                  </div>
                  ${statusBadge}
                </div>

                <div class="grid grid-cols-2 gap-2 text-[10px] bg-bgCustom p-2 rounded-xl border border-accent">
                  <div>
                    <span class="text-secondary block">شماره فاکتور:</span>
                    <span class="font-mono text-graphite font-bold">${q.invoiceNumber || 'INV-1403-8821'}</span>
                  </div>
                  <div>
                    <span class="text-secondary block">اعتبار تا:</span>
                    <span class="text-rose-600 font-bold">${q.validityDays || 7} روز آینده</span>
                  </div>
                </div>

                <div class="space-y-1.5">
                  <span class="text-secondary text-[11px] block">ریز خدمات و صورت‌حساب:</span>
                  <div class="space-y-1">
                    ${lineItemsHtml}
                  </div>
                </div>

                <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1.5">
                  <div class="flex justify-between text-xs">
                    <span class="text-secondary">مبلغ کل فاکتور:</span>
                    <span class="font-black text-graphite">${q.amount}</span>
                  </div>
                  <div class="flex justify-between text-xs text-primary font-black border-t border-emerald-200/60 pt-1">
                    <span>مبلغ بیعانه (پیش‌پرداخت):</span>
                    <span>${q.depositAmount || '۳۵,۰۰۰,۰۰۰ تومان'}</span>
                  </div>
                </div>

                <div class="flex flex-col gap-2 pt-1">
                  <div class="flex gap-2">
                    <button onclick="acceptPreInvoiceAndPayDeposit('${activeThread.id}', '${msg.id}')" class="flex-1 bg-primary hover:bg-emerald-900 text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer">
                      <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i>
                      <span>تایید پیش‌فاکتور</span>
                    </button>
                    <button onclick="openRevisionModal('${activeThread.id}', '${msg.id}')" class="bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer">
                      <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                      <span>درخواست تغییرات</span>
                    </button>
                  </div>
                  <button onclick="window.print()" class="w-full bg-slate-50 hover:bg-slate-100 text-secondary border border-accent py-1.5 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1">
                    <i data-lucide="printer" class="w-3.5 h-3.5"></i>
                    <span>چاپ / خروجی رسمی PDF</span>
                  </button>
                </div>

                <div class="flex justify-between items-center text-[10px] text-secondary border-t border-accent/60 pt-2">
                  <span>نهایی‌سازی قرارداد و پرداخت بیعانه پس از مراجعه حضوری انجام می‌شود</span>
                  <span class="font-mono dir-ltr">${msg.time}</span>
                </div>
              </div>
            `;
          } else if (isUser) {
            content = `
              <div class="max-w-md bg-primary text-white p-3.5 rounded-2xl rounded-tr-xs shadow-xs text-xs font-medium leading-relaxed">
                <div>${msg.text}</div>
                <span class="block text-[10px] text-emerald-200 text-left dir-ltr mt-1">${msg.time}</span>
              </div>
            `;
          } else {
            content = `
              <div class="max-w-md bg-[#F4F6F8] border border-slate-200 text-graphite p-3.5 rounded-2xl rounded-tl-xs shadow-xs text-xs font-medium leading-relaxed">
                <div>${msg.text}</div>
                <span class="block text-[10px] text-secondary text-left dir-ltr mt-1">${msg.time}</span>
              </div>
            `;
          }

          msgBox.innerHTML = content;
          streamContainer.appendChild(msgBox);
        });

        // Auto-scroll to bottom of stream
        streamContainer.scrollTop = streamContainer.scrollHeight;
      }

      lucide.createIcons();
    }


    // CHAT STATE LOCALSTORAGE SYNC & PRE-INVOICE ACTIONS
    function saveChatStateToStorage() {
      try {
        localStorage.setItem('aroosi_chat_state', JSON.stringify(chatState));
      } catch (e) {
        console.error('Failed to save chatState to localStorage:', e);
      }
    }

    function loadChatStateFromStorage() {
      try {
        const stored = localStorage.getItem('aroosi_chat_state');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && Array.isArray(parsed.threads) && parsed.threads.length > 0) {
            chatState = parsed;
          }
        }
      } catch (e) {
        console.error('Failed to load chatState from localStorage:', e);
      }
    }

    function openPreInvoiceModal() {
      const modal = document.getElementById('modal-create-preinvoice');
      if (modal) modal.classList.remove('hidden');
    }

    function closePreInvoiceModal() {
      const modal = document.getElementById('modal-create-preinvoice');
      if (modal) modal.classList.add('hidden');
    }

    function addPreInvoiceLineItem() {
      const container = document.getElementById('pi-items-container');
      if (!container) return;
      const row = document.createElement('div');
      row.className = "flex items-center gap-2";
      row.innerHTML = `
        <input type="text" placeholder="عنوان خدمت یا آیتم..." class="pi-item-name flex-1 bg-bgCustom border border-accent rounded-xl p-2 text-xs font-medium">
        <input type="number" placeholder="قیمت (تومان)" class="pi-item-price w-32 bg-bgCustom border border-accent rounded-xl p-2 text-xs font-medium dir-ltr">
      `;
      container.appendChild(row);
    }

    function handleIssuePreInvoiceSubmit(e) {
      e.preventDefault();
      const activeThread = chatState.threads.find(t => t.id === chatState.activeThreadId);
      if (!activeThread) return;

      const title = document.getElementById('pi-title').value.trim();
      const invoiceNumber = document.getElementById('pi-number').value.trim();
      const depositVal = Number(document.getElementById('pi-deposit').value) || 0;
      const validityDays = document.getElementById('pi-validity').value;

      const itemNames = document.querySelectorAll('.pi-item-name');
      const itemPrices = document.querySelectorAll('.pi-item-price');

      let items = [];
      let totalSum = 0;

      itemNames.forEach((el, idx) => {
        const name = el.value.trim();
        const price = Number(itemPrices[idx]?.value) || 0;
        if (name) {
          items.push({ name, price });
          totalSum += price;
        }
      });

      if (items.length === 0) {
        showToast('لطفاً حداقل یک خدمت یا آیتم به پیش‌فاکتور اضافه کنید.', 'warning');
        return;
      }

      const timeStr = new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
      const formattedTotal = totalSum.toLocaleString('fa-IR') + " تومان";
      const formattedDeposit = depositVal.toLocaleString('fa-IR') + " تومان";

      const quoteMsg = {
        id: "msg-" + Date.now(),
        sender: "vendor",
        text: `پیش‌فاکتور جدید با عنوان "${title}" صادر گردید.`,
        time: timeStr,
        hasQuoteCard: true,
        quoteDetails: {
          title,
          invoiceNumber,
          amount: formattedTotal,
          depositAmount: formattedDeposit,
          validityDays,
          items,
          status: 'pending'
        }
      };

      activeThread.messages.push(quoteMsg);
      activeThread.lastMessage = `پیش‌فاکتور جدید صادر شد (${formattedTotal})`;
      activeThread.lastTime = timeStr;
      activeThread.statusBadge = "quote_sent";
      activeThread.statusText = "پیش‌فاکتور صادر شد";

      closePreInvoiceModal();
      saveChatStateToStorage();
      renderChatActiveThread();
      renderChatThreadsList();
      showToast('پیش‌فاکتور تعاملی با موفقیت به چت صادر شد.', 'success');
    }

    let activeRevisionTarget = { threadId: null, msgId: null };

    function openRevisionModal(threadId, msgId) {
      activeRevisionTarget = { threadId, msgId };
      const modal = document.getElementById('modal-preinvoice-revision');
      if (modal) modal.classList.remove('hidden');
    }

    function closeRevisionModal() {
      const modal = document.getElementById('modal-preinvoice-revision');
      if (modal) modal.classList.add('hidden');
    }

    function handleSubmitPreInvoiceRevision(e) {
      e.preventDefault();
      const note = document.getElementById('pi-revision-note').value.trim();
      if (!note) return;

      const thread = chatState.threads.find(t => t.id === activeRevisionTarget.threadId) || chatState.threads[0];
      if (!thread) return;

      const msg = thread.messages.find(m => m.id === activeRevisionTarget.msgId);
      if (msg && msg.quoteDetails) {
        msg.quoteDetails.status = 'revision_requested';
      }

      const timeStr = new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });

      thread.messages.push({
        id: "msg-" + Date.now(),
        sender: "user",
        text: `درخواست اصلاحات در پیش‌فاکتور: ${note}`,
        time: timeStr
      });

      thread.lastMessage = `درخواست اصلاح پیش‌فاکتور: ${note}`;
      thread.lastTime = timeStr;

      closeRevisionModal();
      document.getElementById('pi-revision-note').value = '';
      saveChatStateToStorage();
      renderChatActiveThread();
      renderChatThreadsList();
      showToast('درخواست تغییرات و اصلاح پیش‌فاکتور برای تامین‌کننده ارسال گردید.', 'info');
    }


    let activeAppointmentTarget = { threadId: null, msgId: null };

    function openAppointmentModal(threadId, msgId) {
      activeAppointmentTarget = { threadId, msgId };
      const modal = document.getElementById('modal-schedule-appointment');
      if (modal) modal.classList.remove('hidden');
    }

    function closeAppointmentModal() {
      const modal = document.getElementById('modal-schedule-appointment');
      if (modal) modal.classList.add('hidden');
    }

    function handleScheduleAppointmentSubmit(e) {
      e.preventDefault();
      const date = document.getElementById('appt-date').value.trim();
      const time = document.getElementById('appt-time').value;
      const note = document.getElementById('appt-note').value.trim();

      if (!date) return;

      const thread = chatState.threads.find(t => t.id === activeAppointmentTarget.threadId) || chatState.threads[0];
      if (!thread) return;

      const msg = thread.messages.find(m => m.id === activeAppointmentTarget.msgId);
      if (msg && msg.quoteDetails) {
        msg.quoteDetails.status = 'accepted';
      }

      thread.statusBadge = "finalized";
      thread.statusText = "تایید اولیه و رزرو جلسه حضوری";

      const timeStr = new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });

      thread.messages.push({
        id: "msg-" + Date.now(),
        sender: "user",
        text: `پیش‌فاکتور تایید اولیه شد. زمان جلسه حضوری پیشنهاد شد: تاریخ ${date} ساعت ${time}${note ? ` (یادداشت: ${note})` : ''}`,
        time: timeStr
      });

      thread.lastMessage = `جلسه حضوری ثبت شد: ${date} - ${time}`;
      thread.lastTime = timeStr;

      closeAppointmentModal();
      saveChatStateToStorage();
      renderChatActiveThread();
      renderChatThreadsList();
      showToast('زمان جلسه حضوری با موفقیت ثبت شد و پیام به تامین‌کننده ارسال گردید.', 'success');
    }

    function acceptPreInvoiceAndPayDeposit(threadId, msgId) {
      const thread = chatState.threads.find(t => t.id === threadId) || chatState.threads[0];
      if (!thread) return;

      const msg = thread.messages.find(m => m.id === msgId);
      if (msg && msg.quoteDetails) {
        msg.quoteDetails.status = 'accepted';
      }

      thread.statusBadge = "finalized";
      thread.statusText = "رزرو نهایی شد";

      const timeStr = new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });

      thread.messages.push({
        id: "msg-" + Date.now(),
        sender: "user",
        text: "پیش‌فاکتور توسط زوجین تایید شد و مبلغ بیعانه به درگاه صندوق امن واریز گردید.",
        time: timeStr
      });

      thread.lastMessage = "پیش‌فاکتور تایید شد و بیعانه واریز گردید.";
      thread.lastTime = timeStr;

      saveChatStateToStorage();
      renderChatActiveThread();
      renderChatThreadsList();
      showToast('پیش‌فاکتور تایید شد و بیعانه با موفقیت پرداخت گردید!', 'success');
    }


    function handleSendChatMessage(e) {
      e.preventDefault();
      const input = document.getElementById('chat-message-input');
      const text = input ? input.value.trim() : '';
      if (!text) return;

      const activeThread = chatState.threads.find(t => t.id === chatState.activeThreadId);
      if (!activeThread) return;

      const timeStr = new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });

      // Append user message
      activeThread.messages.push({
        id: "msg-" + Date.now(),
        sender: "user",
        text: text,
        time: timeStr
      });

      activeThread.lastMessage = text;
      activeThread.lastTime = timeStr;

      input.value = '';
      renderChatActiveThread();
      renderChatThreadsList();

      // Trigger simulated vendor response after 1 second delay
      setTimeout(() => {
        const autoReplyTimeStr = new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
        const sampleReplies = [
          "پیام شما دریافت شد. همکاران تشریفات ما به زودی جزئیات بیشتر را برای شما ارسال خواهند کرد.",
          "با تشکر از پیام شما، منوی پیشنهادی و شرایط رزرو سالن برای شما ارسال شد.",
          "جهت هماهنگی بازدید حضوری از باغ تالار، می‌توانید روزهای پنجشنبه و جمعه تشریف بیاورید."
        ];
        const randomReply = sampleReplies[Math.floor(Math.random() * sampleReplies.length)];

        activeThread.messages.push({
          id: "msg-" + (Date.now() + 1),
          sender: "vendor",
          text: randomReply,
          time: autoReplyTimeStr
        });

        activeThread.lastMessage = randomReply;
        activeThread.lastTime = autoReplyTimeStr;

        renderChatActiveThread();
        renderChatThreadsList();
      }, 1000);
    }

    window.addEventListener('DOMContentLoaded', () => {
      loadCategoryGroupsFromStorage();
      loadChatStateFromStorage();
      loadFavoritesFromStorage();
      renderFavoriteVendorsList();
      renderCategoryCards();
      renderSidebarCategoryCheckboxes();
      renderMultiCategoryPills();
      filterVendors();
      renderPortfolioUI();
      renderVendorPackages();
      renderAdminCategories();
      renderAdminPendingApps();
      renderAdminTable();
      renderCalendar();
      renderInquiries();
      renderChecklistTimeline();
      renderChecklistTimeframeButtons();

      // Initialize Budget Wizard
      updateBudgetFormattedDisplay();
      renderBwServicesChecklist();

      // Initialize Digital Invitation Builder
      renderInvitationPreview();

      // Initialize Quiz Hub
      renderQuizCatalogCards();

      // Initialize Messages & Chat System
      renderChatThreadsList();
      renderChatActiveThread();

      // Initialize Inspiration & Moodboard
      renderInspirationCategoryPills();
      renderInspirationGalleryGrid();
    });

    // ==========================================
    // INSPIRATION GALLERY & MOODBOARD HUB LOGIC
    // ==========================================
    let inspirationState = {
      activeSubTab: 'gallery', // 'gallery' | 'moodboard'
      selectedCategory: 'all',
      bookmarkedIds: [1, 4, 7],
      categories: [
        { key: 'all', title: 'همه ایده‌ها', icon: 'grid', categoryMatch: 'all' },
        { key: 'dress', title: 'لباس و تور عروس', icon: 'shirt', categoryMatch: 'مزون و لباس عروس' },
        { key: 'suit', title: 'کت‌وشلوار و اکسسوری', icon: 'user', categoryMatch: 'کت و شلوار و آرایشگاه داماد' },
        { key: 'decor', title: 'گل‌آرایی و دکور تالار', icon: 'flower-2', categoryMatch: 'گل‌آرایی و ماشین عروس' },
        { key: 'poses', title: 'ژست‌های عکاسی و فرمالیته', icon: 'camera', categoryMatch: 'آتلیه و عکاسی' },
        { key: 'cake', title: 'کیک و تشریفات', icon: 'cake', categoryMatch: 'کترینگ و تشریفات پذیرایی' },
        { key: 'rings', title: 'حلقه و سرویس طلا', icon: 'gem', categoryMatch: 'طلا، جواهر و حلقه ازدواج' }
      ],
      items: [
        {
          id: 1,
          title: 'لباس عروس پرنسسی با دانتل ایتالیایی و آستین تور',
          categoryKey: 'dress',
          categoryName: 'لباس و تور عروس',
          vendorCategoryMatch: 'مزون و لباس عروس',
          image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80',
          viewsCount: '۴.۲ هزار',
          vendor: {
            id: 5,
            name: 'مزون عروس ترمه & اسلیمی یزد',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
            category: 'مزون و لباس عروس',
            district: 'صفائیه یزد',
            rating: 4.8
          }
        },
        {
          id: 2,
          title: 'گل‌آرایی ورودی باغ عمارت با ارکیده سفید و شمع‌دان کریستال',
          categoryKey: 'decor',
          categoryName: 'گل‌آرایی و دکور تالار',
          vendorCategoryMatch: 'گل‌آرایی و ماشین عروس',
          image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
          viewsCount: '۶.۸ هزار',
          vendor: {
            id: 1,
            name: 'هتل باغ و تشریفات مشیرالممالک یزد',
            avatar: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=200&q=80',
            category: 'تالار و باغ تشریفات',
            district: 'خیابان انقلاب یزد',
            rating: 4.9
          }
        },
        {
          id: 3,
          title: 'ژست عکس فرمالیته کویر با رمل‌های طلایی هنگام غروب',
          categoryKey: 'poses',
          categoryName: 'ژست‌های عکاسی و فرمالیته',
          vendorCategoryMatch: 'آتلیه و عکاسی',
          image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
          viewsCount: '۸.۱ هزار',
          vendor: {
            id: 2,
            name: 'استودیو و آتلیه تخصصی کویر یزد',
            avatar: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=200&q=80',
            category: 'آتلیه و عکاسی',
            district: 'میدان اطلسی صفائیه',
            rating: 4.8
          }
        },
        {
          id: 4,
          title: 'تاکسیدو زغالی مشکی با یقه آرشال ساتن و پاپیون رسمی',
          categoryKey: 'suit',
          categoryName: 'کت‌وشلوار و اکسسوری',
          vendorCategoryMatch: 'کت و شلوار و آرایشگاه داماد',
          image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
          viewsCount: '۳.۵ هزار',
          vendor: {
            id: 4,
            name: 'مزون و کت‌وشلوار دامادی کلاسیک یزد',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
            category: 'کت و شلوار دامادی',
            district: 'خیابان کاشانی یزد',
            rating: 4.7
          }
        },
        {
          id: 5,
          title: 'کیک عروسی ۴ طبقه مینی‌مال با تزئین گل‌های طبیعی نود',
          categoryKey: 'cake',
          categoryName: 'کیک و تشریفات',
          vendorCategoryMatch: 'کترینگ و تشریفات پذیرایی',
          image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
          viewsCount: '۵.۳ هزار',
          vendor: {
            id: 3,
            name: 'عمارت و کترینگ تشریفات قصر یزد',
            avatar: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=200&q=80',
            category: 'کترینگ و تشریفات پذیرایی',
            district: 'بلوار جمهوری یزد',
            rating: 4.9
          }
        },
        {
          id: 6,
          title: 'حلقه ازدواج برلیان پلاتینیوم با طراحی ست جفت',
          categoryKey: 'rings',
          categoryName: 'حلقه و سرویس طلا',
          vendorCategoryMatch: 'طلا، جواهر و حلقه ازدواج',
          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
          viewsCount: '۹.۴ هزار',
          vendor: {
            id: 6,
            name: 'گالری طلا و جواهر برلیان یزد',
            avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
            category: 'طلا و جواهرات',
            district: 'بازار خان یزد',
            rating: 4.9
          }
        },
        {
          id: 7,
          title: 'لباس عروس ساتن مستقیم با یقه قایقی و دنباله ۲ متری',
          categoryKey: 'dress',
          categoryName: 'لباس و تور عروس',
          vendorCategoryMatch: 'مزون و لباس عروس',
          image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80',
          viewsCount: '۷.۶ هزار',
          vendor: {
            id: 5,
            name: 'مزون عروس ترمه & اسلیمی یزد',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
            category: 'مزون و لباس عروس',
            district: 'صفائیه یزد',
            rating: 4.8
          }
        },
        {
          id: 8,
          title: 'طراحی جایگاه عروس و داماد سبک بوهو با طاق پامپاس و چوب',
          categoryKey: 'decor',
          categoryName: 'گل‌آرایی و دکور تالار',
          vendorCategoryMatch: 'گل‌آرایی و ماشین عروس',
          image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
          viewsCount: '۶.۱ هزار',
          vendor: {
            id: 1,
            name: 'هتل باغ و تشریفات مشیرالممالک یزد',
            avatar: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=200&q=80',
            category: 'تالار و باغ تشریفات',
            district: 'خیابان انقلاب یزد',
            rating: 4.9
          }
        },
        {
          id: 9,
          title: 'عکاسی احساسی دو نفره دریا با انعکاس آب و پرتو خورشید',
          categoryKey: 'poses',
          categoryName: 'ژست‌های عکاسی و فرمالیته',
          vendorCategoryMatch: 'آتلیه و عکاسی',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
          viewsCount: '۱۰.۲ هزار',
          vendor: {
            id: 2,
            name: 'استودیو و آتلیه تخصصی کویر یزد',
            avatar: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=200&q=80',
            category: 'آتلیه و عکاسی',
            district: 'میدان اطلسی صفائیه',
            rating: 4.8
          }
        }
      ]
    };

    function switchInspirationSubTab(subTab) {
      inspirationState.activeSubTab = subTab;
      const btnGallery = document.getElementById('insp-subtab-gallery');
      const btnMoodboard = document.getElementById('insp-subtab-moodboard');
      const panelGallery = document.getElementById('insp-panel-gallery');
      const panelMoodboard = document.getElementById('insp-panel-moodboard');

      if (subTab === 'gallery') {
        if (btnGallery) btnGallery.className = "px-4 py-2.5 rounded-xl transition-all bg-primary text-white shadow-xs flex items-center gap-1.5";
        if (btnMoodboard) btnMoodboard.className = "px-4 py-2.5 rounded-xl transition-all text-secondary hover:text-graphite flex items-center gap-1.5";
        if (panelGallery) panelGallery.classList.remove('hidden');
        if (panelMoodboard) panelMoodboard.classList.add('hidden');
        renderInspirationCategoryPills();
        renderInspirationGalleryGrid();
      } else {
        if (btnMoodboard) btnMoodboard.className = "px-4 py-2.5 rounded-xl transition-all bg-primary text-white shadow-xs flex items-center gap-1.5";
        if (btnGallery) btnGallery.className = "px-4 py-2.5 rounded-xl transition-all text-secondary hover:text-graphite flex items-center gap-1.5";
        if (panelMoodboard) panelMoodboard.classList.remove('hidden');
        if (panelGallery) panelGallery.classList.add('hidden');
        renderMoodboardGrid();
      }
    }

    function renderInspirationCategoryPills() {
      const container = document.getElementById('insp-category-pills');
      if (!container) return;
      container.innerHTML = '';

      inspirationState.categories.forEach(cat => {
        const isSelected = inspirationState.selectedCategory === cat.key;
        const btn = document.createElement('button');
        btn.onclick = () => filterInspirationByCategory(cat.key);
        btn.className = `px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
          isSelected ? 'bg-primary text-white shadow-xs' : 'bg-bgCustom border border-accent hover:border-primary text-graphite'
        }`;
        btn.innerHTML = `
          <i data-lucide="${cat.icon}" class="w-4 h-4"></i>
          <span>${cat.title}</span>
        `;
        container.appendChild(btn);
      });

      lucide.createIcons();
    }

    function filterInspirationByCategory(catKey) {
      inspirationState.selectedCategory = catKey;
      renderInspirationCategoryPills();
      renderInspirationGalleryGrid();
    }

    function filterInspirationItems() {
      renderInspirationGalleryGrid();
    }

    function toggleBookmarkMoodboard(itemId, e) {
      if (e) e.stopPropagation();
      const idx = inspirationState.bookmarkedIds.indexOf(itemId);
      if (idx > -1) {
        inspirationState.bookmarkedIds.splice(idx, 1);
        showToast('از مودبورد شما حذف گردید', 'danger');
      } else {
        inspirationState.bookmarkedIds.push(itemId);
        showToast('❤️ به مودبورد اختصاصی شما اضافه شد', 'success');
      }

      updateMoodboardBadge();
      if (inspirationState.activeSubTab === 'gallery') {
        renderInspirationGalleryGrid();
      } else {
        renderMoodboardGrid();
      }
    }

    function updateMoodboardBadge() {
      const badge = document.getElementById('moodboard-badge-count');
      if (badge) badge.innerText = inspirationState.bookmarkedIds.length;
      const summaryText = document.getElementById('moodboard-summary-text');
      if (summaryText) summaryText.innerText = `${inspirationState.bookmarkedIds.length} ایده منتخب برای ارائه به همسر، طراح تشریفات یا آتلیه`;
    }

    function openIdeaDetailModal(ideaId) {
      const item = inspirationState.items.find(i => i.id === ideaId);
      if (!item) return;

      const modal = document.getElementById('idea-detail-modal');
      if (!modal) return;

      const imgEl = document.getElementById('modal-idea-img');
      if (imgEl) imgEl.src = item.image;

      const catEl = document.getElementById('modal-idea-category');
      if (catEl) catEl.innerText = item.categoryName || 'ایده عروسی';

      const titleEl = document.getElementById('modal-idea-title');
      if (titleEl) titleEl.innerText = item.title;

      const viewsEl = document.getElementById('modal-idea-views');
      if (viewsEl) viewsEl.innerHTML = `<i data-lucide="eye" class="w-3.5 h-3.5 text-primary"></i><span>تعداد بازدید: ${item.viewsCount || '۱.۲ هزار'}</span>`;

      const v = item.vendor || {
        id: 1,
        name: 'تامین‌کننده رسمی عروسی تو',
        avatar: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=200&q=80',
        category: item.vendorCategoryMatch || 'خدمات عروسی',
        district: 'استان یزد',
        rating: 4.8
      };

      const avatarEl = document.getElementById('modal-idea-vendor-avatar');
      if (avatarEl) avatarEl.src = v.avatar;

      const vNameEl = document.getElementById('modal-idea-vendor-name');
      if (vNameEl) vNameEl.innerText = v.name;

      const vCatEl = document.getElementById('modal-idea-vendor-cat');
      if (vCatEl) vCatEl.innerText = v.category;

      const vDistEl = document.getElementById('modal-idea-vendor-district-text');
      if (vDistEl) vDistEl.innerText = v.district || 'یزد';

      const vRatingEl = document.getElementById('modal-idea-vendor-rating');
      if (vRatingEl) vRatingEl.innerText = v.rating || '۴.۸';

      const inquiryBtn = document.getElementById('modal-idea-inquiry-btn');
      if (inquiryBtn) {
        inquiryBtn.onclick = function() {
          closeIdeaDetailModal();
          openInquiryModal(v.id, v.name);
        };
      }

      const profileBtn = document.getElementById('modal-idea-profile-btn');
      if (profileBtn) {
        profileBtn.onclick = function() {
          closeIdeaDetailModal();
          switchTab('vendor-profile');
        };
      }

      modal.classList.remove('hidden');
      lucide.createIcons();
    }

    function closeIdeaDetailModal() {
      const modal = document.getElementById('idea-detail-modal');
      if (modal) modal.classList.add('hidden');
    }

    function filterDirectoryByVendorCategory(vendorCategory) {
      switchTab('home');
      const select = document.getElementById('category-filter');
      if (select) {
        select.value = vendorCategory;
        filterVendors();
      }
      const vendorSection = document.getElementById('vendor-grid');
      if (vendorSection) {
        vendorSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function renderInspirationGalleryGrid() {
      const grid = document.getElementById('insp-gallery-grid');
      if (!grid) return;
      grid.innerHTML = '';

      const query = document.getElementById('insp-search-input')?.value.trim().toLowerCase() || '';

      let items = inspirationState.items;
      if (inspirationState.selectedCategory !== 'all') {
        items = items.filter(i => i.categoryKey === inspirationState.selectedCategory);
      }
      if (query) {
        items = items.filter(i => i.title.toLowerCase().includes(query) || i.categoryName.toLowerCase().includes(query));
      }

      if (items.length === 0) {
        grid.innerHTML = `<div class="col-span-full p-8 text-center text-secondary text-xs font-bold bg-white rounded-3xl border border-accent">هیچ ایده‌ای متناسب با جستجوی شما پیدا نشد.</div>`;
        return;
      }

      items.forEach(item => {
        const isBookmarked = inspirationState.bookmarkedIds.includes(item.id);
        const card = document.createElement('div');
        card.className = "bg-white border border-accent rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between";

        const vendorName = item.vendor ? item.vendor.name : 'تامین‌کننده';

        card.innerHTML = `
          <div>
            <div onclick="openIdeaDetailModal(${item.id})" class="relative aspect-4/5 overflow-hidden bg-slate-900 cursor-pointer">
              <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-graphite/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                <div class="flex justify-between items-center">
                  <span class="bg-white/90 backdrop-blur-xs text-graphite text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                    ${item.categoryName}
                  </span>
                  <button onclick="toggleBookmarkMoodboard(${item.id}, event)" class="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-rose-500 flex items-center justify-center shadow-md transition-transform active:scale-95" title="ذخیره در مودبورد">
                    <i data-lucide="heart" class="w-5 h-5 ${isBookmarked ? 'fill-rose-500 text-rose-500' : 'text-slate-600'}"></i>
                  </button>
                </div>

                <button onclick="event.stopPropagation(); openIdeaDetailModal(${item.id});" class="w-full bg-primary hover:bg-emerald-900 text-white font-bold text-xs py-2.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5">
                  <i data-lucide="eye" class="w-3.5 h-3.5"></i>
                  <span>مشاهده جزییات و استعلام</span>
                </button>
              </div>

              <!-- Top Overlay Badges (Always visible) -->
              <div class="absolute top-3 right-3 group-hover:opacity-0 transition-opacity">
                <span class="bg-graphite/70 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs">
                  ${item.categoryName}
                </span>
              </div>
              <div class="absolute top-3 left-3 group-hover:opacity-0 transition-opacity">
                <span class="bg-black/40 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs flex items-center gap-1">
                  <i data-lucide="eye" class="w-3 h-3 text-emerald-400"></i>
                  <span>${item.viewsCount}</span>
                </span>
              </div>
            </div>

            <div onclick="openIdeaDetailModal(${item.id})" class="p-4 space-y-2 cursor-pointer">
              <h4 class="text-xs font-bold text-graphite line-clamp-2 leading-relaxed hover:text-primary transition-colors">${item.title}</h4>
              <p class="text-[11px] text-secondary font-medium truncate flex items-center gap-1">
                <i data-lucide="store" class="w-3 h-3 text-primary"></i>
                <span>ارائه‌شده توسط: ${vendorName}</span>
              </p>
            </div>
          </div>

          <div class="px-4 pb-4 pt-1 flex items-center justify-between border-t border-accent/60">
            <button onclick="toggleBookmarkMoodboard(${item.id}, event)" class="text-xs font-bold flex items-center gap-1.5 ${isBookmarked ? 'text-rose-600' : 'text-secondary hover:text-rose-600'} transition-colors">
              <i data-lucide="heart" class="w-4 h-4 ${isBookmarked ? 'fill-rose-600' : ''}"></i>
              <span>${isBookmarked ? 'ذخیره شده در مودبورد' : 'ذخیره در مودبورد'}</span>
            </button>

            <button onclick="openIdeaDetailModal(${item.id})" class="text-[11px] font-bold text-primary hover:underline flex items-center gap-1">
              <span>استعلام ایده</span>
              <i data-lucide="chevron-left" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        `;
        grid.appendChild(card);
      });

      lucide.createIcons();
    }

    function renderMoodboardGrid() {
      const grid = document.getElementById('insp-moodboard-grid');
      if (!grid) return;
      grid.innerHTML = '';

      updateMoodboardBadge();

      const savedItems = inspirationState.items.filter(i => inspirationState.bookmarkedIds.includes(i.id));

      if (savedItems.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full p-12 text-center bg-white border border-accent rounded-3xl space-y-4">
            <div class="w-16 h-16 rounded-full bg-rose-50 text-rose-500 mx-auto flex items-center justify-center">
              <i data-lucide="heart" class="w-8 h-8"></i>
            </div>
            <div class="space-y-1">
              <h4 class="text-base font-bold text-graphite">مودبورد شما هنوز خالی است</h4>
              <p class="text-xs text-secondary">روی آیکون قلب در مجله ایده‌ها کلیک کنید تا ایده‌های محبوبتان اینجا قرار گیرند.</p>
            </div>
            <button onclick="switchInspirationSubTab('gallery')" class="bg-primary text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-xs transition-colors inline-flex items-center gap-1.5">
              <span>ورود به مجله ایده‌ها</span>
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
            </button>
          </div>
        `;
        lucide.createIcons();
        return;
      }

      savedItems.forEach(item => {
        const card = document.createElement('div');
        card.className = "bg-white border border-accent rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between";
        card.innerHTML = `
          <div>
            <div class="relative aspect-4/5 overflow-hidden bg-slate-900">
              <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
              <button onclick="toggleBookmarkMoodboard(${item.id}, event)" class="absolute top-3 left-3 bg-white/90 text-rose-600 hover:bg-white p-2 rounded-full shadow-md text-xs font-bold transition-transform active:scale-95" title="حذف از مودبورد">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>

            <div class="p-4 space-y-2">
              <span class="inline-block bg-primary/10 text-primary text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                ${item.categoryName}
              </span>
              <h4 class="text-xs font-bold text-graphite line-clamp-2 leading-relaxed">${item.title}</h4>
            </div>
          </div>

          <div class="p-4 pt-0 space-y-2">
            <button onclick="filterDirectoryByVendorCategory('${item.vendorCategoryMatch}')" class="w-full bg-primary/10 hover:bg-primary/20 text-primary font-bold text-xs py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5">
              <i data-lucide="store" class="w-3.5 h-3.5"></i>
              <span>جستجوی تامین‌کننده مرتبط</span>
            </button>
          </div>
        `;
        grid.appendChild(card);
      });

      lucide.createIcons();
    }

    function showToast(message, type = 'success', duration = 3000) {
      let container = document.getElementById('toast-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed bottom-6 left-6 z-[100] flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 md:px-0';
        document.body.appendChild(container);
      }

      const toast = document.createElement('div');

      let typeClasses = 'bg-primary border-emerald-400/30';
      let iconName = 'check-circle-2';

      if (type === 'info') {
        typeClasses = 'bg-slate-700 border-slate-500/30';
        iconName = 'info';
      } else if (type === 'warning') {
        typeClasses = 'bg-amber-600 border-amber-400/30';
        iconName = 'alert-triangle';
      } else if (type === 'danger') {
        typeClasses = 'bg-rose-600 border-rose-400/30';
        iconName = 'x-circle';
      }

      toast.className = `pointer-events-auto shadow-2xl rounded-2xl px-4 py-3 flex items-center justify-between gap-3 text-xs font-bold text-white transition-all duration-300 transform translate-y-4 opacity-0 border ${typeClasses}`;
      toast.innerHTML = `
        <div class="flex items-center gap-2.5">
          <i data-lucide="${iconName}" class="w-4 h-4 shrink-0 text-white"></i>
          <span>${message}</span>
        </div>
        <button onclick="dismissToast(this.parentElement)" class="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors shrink-0">
          <i data-lucide="x" class="w-3.5 h-3.5"></i>
        </button>
      `;

      container.appendChild(toast);
      if (window.lucide) lucide.createIcons();

      requestAnimationFrame(() => {
        toast.classList.remove('translate-y-4', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');
      });

      const timer = setTimeout(() => {
        dismissToast(toast);
      }, duration);

      toast.dataset.timer = timer;
    }

    function dismissToast(toast) {
      if (!toast || toast.classList.contains('dismissing')) return;
      toast.classList.add('dismissing');
      if (toast.dataset.timer) clearTimeout(parseInt(toast.dataset.timer));

      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('-translate-y-2', 'opacity-0');

      setTimeout(() => {
        if (toast.parentElement) toast.remove();
      }, 300);
    }

    function showToastNotification(message, type = 'success', duration = 3000) {
      showToast(message, type, duration);
    }

    function showGlobalToast(message, type = 'success', duration = 3000) {
      showToast(message, type, duration);
    }

    function shareMoodboardLink() {
      const link = 'https://aroosito.com/moodboard/shared-couple-102';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(link);
        showToast('🔗 لینک مودبورد شخصی کپی شد', 'info');
      } else {
        showToast('لینک مودبورد شما: ' + link, 'info');
      }
    }

    function exportMoodboardPdf() {
      showToast('فایل خلاصه مودبورد شما آماده دانلود گردید.', 'info');
    }

  // Super Admin Hero Logo update function
  function handleUpdateHeroLogo() {
    const input = document.getElementById('admin-hero-logo-url-input');
    const logoImg = document.getElementById('site-hero-logo');
    if (input && logoImg && input.value.trim() !== '') {
      logoImg.src = input.value.trim();
      if (typeof showToast === 'function') {
        showToast('لوگوی اصلی سایت با موفقیت بروزرسانی شد', 'success');
      }
    } else {
      if (typeof showToast === 'function') {
        showToast('لطفا یک آدرس معتبر برای تصویر وارد کنید', 'warning');
      }
    }
  }
