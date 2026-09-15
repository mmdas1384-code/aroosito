// App State
let appData = {
  vendors: [...initialVendors],
  checklist: [...initialChecklist],
  budgetItems: [...initialBudgetItems],
  totalBudget: 500000000,
  guests: [...initialGuests],
  activeFilter: 'all',
  activeToolTab: 'budget'
};

// Render Header Navigation
function renderHeader() {
  const container = document.getElementById('header-container');
  if (!container) return;
  container.innerHTML = `
    <div class="container">
      <nav class="navbar">
        <a href="#" class="logo-brand">
          <span>💍</span>
          <span>بزمینه</span>
        </a>
        <ul class="nav-links">
          <li><a href="#" class="active" onclick="scrollToSection('hero-container')">صفحه اصلی</a></li>
          <li><a href="#vendors" onclick="scrollToSection('vendors-container')">تالار و خدمات</a></li>
          <li><a href="#tools" onclick="switchToolTab('budget'); scrollToSection('tools-container')">بودجه‌بندی</a></li>
          <li><a href="#tools" onclick="switchToolTab('checklist'); scrollToSection('tools-container')">چک‌لیست عروسی</a></li>
          <li><a href="#tools" onclick="switchToolTab('guests'); scrollToSection('tools-container')">مدیریت مهمانان</a></li>
          <li><a href="#articles" onclick="scrollToSection('articles-container')">مجله ایده‌ها</a></li>
        </ul>
        <div class="nav-actions">
          <button class="btn btn-outline" onclick="openContactModal()">تماس با ما</button>
          <button class="btn btn-primary" onclick="openLoginModal()">ورود / ثبت‌نام</button>
        </div>
      </nav>
    </div>
  `;
}

// Render Footer
function renderFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;
  container.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">💍 بزمینه</div>
          <p style="line-height: 1.8; opacity: 0.85;">
            بزمینه نخستین پلتفرم جامع برنامه‌ریزی عروسی و معرفی بهترین تالارها، باغ‌تالارها و تامین‌کنندگان خدمات عروسی در ایران است. با ابزارهای هوشمند بزمینه، بی‌دغدغه و خاطره‌انگیزترین روز زندگی خود را بسازید.
          </p>
        </div>
        <div>
          <h4 class="footer-title">دسترسی سریع</h4>
          <ul class="footer-links">
            <li><a href="#hero" onclick="scrollToSection('hero-container')">صفحه اصلی</a></li>
            <li><a href="#vendors" onclick="scrollToSection('vendors-container')">لیست تالارها</a></li>
            <li><a href="#tools" onclick="scrollToSection('tools-container')">حسابگر بودجه</a></li>
            <li><a href="#articles" onclick="scrollToSection('articles-container')">مجله عروسی</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-title">خدمات محبوب</h4>
          <ul class="footer-links">
            <li><a href="#" onclick="filterVendors('venue')">باغ تالار و تشریفات</a></li>
            <li><a href="#" onclick="filterVendors('atelier')">آتلیه و عکاسی</a></li>
            <li><a href="#" onclick="filterVendors('beauty')">آرایشگاه عروس</a></li>
            <li><a href="#" onclick="filterVendors('dress')">مزون لباس عروس</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-title">ارتباط با ما</h4>
          <p style="margin-bottom: 10px;">📍 تهران، خیابان ولیعصر، بالاتر از پارک وی</p>
          <p style="margin-bottom: 10px;">📞 پشتیبانی: ۰۲۱-۸۸۷۷۶۶۵۵</p>
          <p style="margin-bottom: 10px;">✉️ ایمیل: info@bazmineh.com</p>
        </div>
      </div>
      <div class="footer-bottom">
        تمامی حقوق مادی و معنوی این وب‌سایت متعلق به <strong>بزمینه</strong> می‌باشد. © ۱۴۰۳
      </div>
    </div>
  `;
}

// Global Scroll Helper
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// Render Hero Section
function renderHero() {
  const container = document.getElementById('hero-container');
  if (!container) return;
  container.innerHTML = `
    <div class="container">
      <h1 class="hero-title">برنامه‌ریزی رویایی‌ترین روز زندگی‌تان با بزمینه</h1>
      <p class="hero-subtitle">کشف بهترین تالارها، آتلیه‌ها، آرایشگاه‌ها و مدیریت هوشمند هزینه‌ها و کارهای عروسی</p>

      <div class="search-box">
        <div class="search-field">
          <label>خدمت مورد نظر</label>
          <select id="search-category">
            <option value="all">همه خدمات عروسی</option>
            ${categories.map(c => `<option value="${c.id}">${c.title}</option>`).join('')}
          </select>
        </div>
        <div class="search-field">
          <label>شهر</label>
          <select id="search-city">
            <option value="all">همه شهرها</option>
            <option value="تهران">تهران</option>
            <option value="کرج">کرج</option>
            <option value="اصفهان">اصفهان</option>
            <option value="شیراز">شیراز</option>
            <option value="مشهد">مشهد</option>
          </select>
        </div>
        <div class="search-field">
          <label>محدوده قیمت / ظرفیت</label>
          <input type="text" id="search-keyword" placeholder="مثلا: گرمدره، VIP...">
        </div>
        <button class="btn btn-primary" onclick="handleSearch()">🔍 جستجو</button>
      </div>
    </div>
  `;
}

// Render Categories Grid
function renderCategories() {
  const container = document.getElementById('categories-container');
  if (!container) return;
  container.innerHTML = `
    <h2 class="section-title">دسته‌بندی خدمات عروسی</h2>
    <p class="section-subtitle">برترین تامین‌کنندگان خدمات عروسی را به تفکیک بررسی کنید</p>
    <div class="categories-grid">
      ${categories.map(cat => `
        <div class="category-card" onclick="filterVendors('${cat.id}')">
          <div class="category-icon">${cat.icon}</div>
          <h3 class="category-title">${cat.title}</h3>
          <span class="category-count">${cat.count}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// Render Featured Vendors Section Setup
function renderVendorsSection() {
  const container = document.getElementById('vendors-container');
  if (!container) return;
  container.innerHTML = `
    <h2 class="section-title">تالارها و کسب‌وکارهای منتخب</h2>
    <p class="section-subtitle">بهترین گزینه‌ها بر اساس امتیاز و رضایت زوج‌های بزمینه</p>

    <div class="filter-bar">
      <button class="filter-btn active" onclick="filterVendors('all', this)">همه خدمات</button>
      ${categories.map(cat => `
        <button class="filter-btn" onclick="filterVendors('${cat.id}', this)">${cat.title}</button>
      `).join('')}
    </div>

    <div class="vendors-grid" id="vendors-grid-list"></div>
  `;
  renderVendorsList();
}

// Render Vendors Cards
function renderVendorsList(filteredList = null) {
  const listContainer = document.getElementById('vendors-grid-list');
  if (!listContainer) return;

  const listToRender = filteredList || (appData.activeFilter === 'all'
    ? appData.vendors
    : appData.vendors.filter(v => v.category === appData.activeFilter));

  if (listToRender.length === 0) {
    listContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; font-size: 1.1rem; color: #888;">هیچ موردی با این مشخصات یافت نشد.</div>`;
    return;
  }

  listContainer.innerHTML = listToRender.map(vendor => `
    <div class="vendor-card">
      <div class="vendor-img-wrapper">
        <img src="${vendor.image}" alt="${vendor.name}" class="vendor-img">
        <span class="vendor-tag">${vendor.city} • ${vendor.location}</span>
      </div>
      <div class="vendor-body">
        <h3 class="vendor-name">${vendor.name}</h3>
        <div class="vendor-location">📍 ${vendor.address}</div>
        <p style="font-size: 0.88rem; color: #666; margin-bottom: 15px; flex: 1;">${vendor.description}</p>
        <div class="vendor-info-meta">
          <div class="vendor-rating">⭐ ${vendor.rating} <span style="font-size:0.8rem; color:#888;">(${vendor.reviewsCount} نظر)</span></div>
          <div class="vendor-price">${vendor.priceRange}</div>
        </div>
        <button class="btn btn-outline" style="width: 100%; margin-top: 15px;" onclick="openVendorDetailModal(${vendor.id})">مشاهده جزئیات & دریافت قیمت</button>
      </div>
    </div>
  `).join('');
}

function filterVendors(catId, btnElement = null) {
  appData.activeFilter = catId;
  if (btnElement) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
  }
  renderVendorsList();
  scrollToSection('vendors-container');
}

function handleSearch() {
  const cat = document.getElementById('search-category').value;
  const city = document.getElementById('search-city').value;
  const keyword = document.getElementById('search-keyword').value.trim().toLowerCase();

  let filtered = appData.vendors.filter(v => {
    const matchCat = (cat === 'all' || v.category === cat);
    const matchCity = (city === 'all' || v.city === city);
    const matchKeyword = !keyword || v.name.toLowerCase().includes(keyword) || v.location.toLowerCase().includes(keyword) || v.description.toLowerCase().includes(keyword);
    return matchCat && matchCity && matchKeyword;
  });

  appData.activeFilter = cat;
  renderVendorsList(filtered);
  scrollToSection('vendors-container');
}

// Modal Helpers
function openModal(htmlContent) {
  const modal = document.getElementById('app-modal');
  const modalBody = document.getElementById('modal-body-content');
  if (modal && modalBody) {
    modalBody.innerHTML = htmlContent;
    modal.classList.add('active');
  }
}

function closeModal() {
  const modal = document.getElementById('app-modal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function setupModalEvents() {
  const closeBtn = document.getElementById('close-modal-btn');
  const modal = document.getElementById('app-modal');
  if (closeBtn) closeBtn.onclick = closeModal;
  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal) closeModal();
    };
  }
}

// Vendor Detail Modal
function openVendorDetailModal(vendorId) {
  const vendor = appData.vendors.find(v => v.id === vendorId);
  if (!vendor) return;

  const html = `
    <div style="text-align: right;">
      <img src="${vendor.image}" alt="${vendor.name}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 16px; margin-bottom: 20px;">
      <h2 style="font-size: 1.5rem; color: var(--dark-color); margin-bottom: 10px;">${vendor.name}</h2>
      <p style="color: #777; margin-bottom: 15px;">📍 ${vendor.city} - ${vendor.address}</p>

      <div style="display: flex; gap: 20px; background: #f8fafc; padding: 15px; border-radius: 12px; margin-bottom: 20px;">
        <div><strong>امتیاز:</strong> ⭐ ${vendor.rating} (${vendor.reviewsCount} نظر)</div>
        <div><strong>محدوده قیمت:</strong> ${vendor.priceRange}</div>
        <div><strong>ظرفیت / مشخصات:</strong> ${vendor.capacity}</div>
      </div>

      <h4 style="font-size: 1.1rem; margin-bottom: 8px;">درباره مجموعه:</h4>
      <p style="color: #555; line-height: 1.8; margin-bottom: 25px;">${vendor.description}</p>

      <hr style="border: none; border-top: 1px solid #eee; margin-bottom: 20px;">

      <h3 style="font-size: 1.2rem; margin-bottom: 15px;">درخواست استعلام قیمت و مشاوره رایگان</h3>
      <form onsubmit="handleInquirySubmit(event, '${vendor.name}')" style="display: flex; flex-direction: column; gap: 12px;">
        <input type="text" placeholder="نام و نام خانوادگی" required style="padding: 12px; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;">
        <input type="tel" placeholder="شماره تماس (همراه)" required style="padding: 12px; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;">
        <input type="date" placeholder="تاریخ تقریبی مراسم" style="padding: 12px; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;">
        <textarea placeholder="توضیحات تکمیلی یا سوال شما..." rows="3" style="padding: 12px; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;"></textarea>
        <button type="submit" class="btn btn-primary" style="margin-top: 10px;">ارسال درخواست برای ${vendor.name}</button>
      </form>
    </div>
  `;
  openModal(html);
}

function handleInquirySubmit(e, vendorName) {
  e.preventDefault();
  alert(`درخواست استعلام قیمت شما برای "${vendorName}" با موفقیت ثبت شد. مدیریت مجموعه به زودی با شما تماس خواهد گرفت.`);
  closeModal();
}

// Helper to format currency numbers to Persian Toman
function formatCurrency(amount) {
  return amount.toLocaleString('fa-IR') + ' تومان';
}

// Render Tools Suite Section Setup
function renderToolsSection() {
  const container = document.getElementById('tools-container');
  if (!container) return;
  container.innerHTML = `
    <h2 class="section-title">ابزارهای هوشمند برنامه‌ریزی عروسی</h2>
    <p class="section-subtitle">مدیریت مالی، چک‌لیست زمان‌بندی‌شده و مدیریت مهمانان در یک مکان</p>

    <div class="tools-tabs">
      <button class="tool-tab-btn ${appData.activeToolTab === 'budget' ? 'active' : ''}" onclick="switchToolTab('budget')">💰 حسابگر و مدیریت بودجه</button>
      <button class="tool-tab-btn ${appData.activeToolTab === 'checklist' ? 'active' : ''}" onclick="switchToolTab('checklist')">✅ چک‌لیست عروسی</button>
      <button class="tool-tab-btn ${appData.activeToolTab === 'guests' ? 'active' : ''}" onclick="switchToolTab('guests')">👥 مدیریت لیست مهمانان</button>
    </div>

    <div class="tool-card-box" id="active-tool-content"></div>
  `;
  renderActiveToolContent();
}

function switchToolTab(tabName) {
  appData.activeToolTab = tabName;
  document.querySelectorAll('.tool-tab-btn').forEach(btn => btn.classList.remove('active'));
  const btn = Array.from(document.querySelectorAll('.tool-tab-btn')).find(b => {
    if (tabName === 'budget') return b.textContent.includes('بودجه');
    if (tabName === 'checklist') return b.textContent.includes('چک‌لیست');
    if (tabName === 'guests') return b.textContent.includes('مهمانان');
    return false;
  });
  if (btn) btn.classList.add('active');
  renderActiveToolContent();
}

function renderActiveToolContent() {
  const contentContainer = document.getElementById('active-tool-content');
  if (!contentContainer) return;

  if (appData.activeToolTab === 'budget') {
    renderBudgetCalculatorTool(contentContainer);
  } else if (appData.activeToolTab === 'checklist') {
    renderChecklistTool(contentContainer);
  } else if (appData.activeToolTab === 'guests') {
    renderGuestListTool(contentContainer);
  }
}

// 1. Budget Calculator Tool
function renderBudgetCalculatorTool(container) {
  const totalActual = appData.budgetItems.reduce((acc, item) => acc + item.actualAmount, 0);
  const remainingBudget = appData.totalBudget - totalActual;

  container.innerHTML = `
    <div class="budget-overview">
      <div class="stat-box">
        <div class="stat-label">بودجه کل برنامه‌ریزی‌شده</div>
        <div class="stat-value highlight">${formatCurrency(appData.totalBudget)}</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">مجموع هزینه‌های ثبت‌شده</div>
        <div class="stat-value" style="color: ${totalActual > appData.totalBudget ? '#e53e3e' : '#2b6cb0'}">${formatCurrency(totalActual)}</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">باقیمانده بودجه</div>
        <div class="stat-value" style="color: ${remainingBudget < 0 ? '#e53e3e' : '#38a169'}">${formatCurrency(remainingBudget)}</div>
      </div>
    </div>

    <div style="background: #f8fafc; padding: 20px; border-radius: 16px; margin-bottom: 30px;">
      <h3 style="font-size: 1.1rem; margin-bottom: 12px; color: var(--dark-color);">تنظیم بودجه کل مراسم</h3>
      <div class="budget-input-group">
        <input type="number" id="total-budget-input" value="${appData.totalBudget}" step="10000000" placeholder="مثلا ۵۰۰۰۰۰۰۰۰">
        <button class="btn btn-primary" onclick="updateTotalBudget()">به‌روزرسانی بودجه کل</button>
      </div>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
      <h3 style="font-size: 1.2rem; color: var(--dark-color);">جزئیات هزینه‌ها به تفکیک دسته‌بندی</h3>
      <button class="btn btn-outline" style="padding: 6px 16px; font-size: 0.85rem;" onclick="openAddBudgetItemModal()">+ افزودن هزینه جدید</button>
    </div>

    <table class="budget-table">
      <thead>
        <tr>
          <th>عنوان هزینه</th>
          <th>درصد پیشنهادی</th>
          <th>برآورد اولیه</th>
          <th>هزینه واقعی / نهایی</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        ${appData.budgetItems.map(item => `
          <tr>
            <td><strong>${item.title}</strong></td>
            <td>${item.estimatedPercent}%</td>
            <td>${formatCurrency(item.estimatedAmount)}</td>
            <td>
              <input type="number" value="${item.actualAmount}" step="1000000" style="width: 140px; padding: 6px 10px; border-radius: 8px; border: 1px solid #cbd5e1; font-family: inherit;" onchange="updateItemActualAmount(${item.id}, this.value)">
            </td>
            <td>
              <button style="background: transparent; border: none; color: #e53e3e; cursor: pointer; font-weight: bold;" onclick="deleteBudgetItem(${item.id})">حذف</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function updateTotalBudget() {
  const input = document.getElementById('total-budget-input');
  if (!input) return;
  const val = parseFloat(input.value);
  if (isNaN(val) || val <= 0) {
    alert('لطفا مبلغ معتبری وارد کنید.');
    return;
  }
  appData.totalBudget = val;
  // Recalculate estimated amounts
  appData.budgetItems.forEach(item => {
    item.estimatedAmount = Math.round((appData.totalBudget * item.estimatedPercent) / 100);
  });
  renderActiveToolContent();
}

function updateItemActualAmount(id, val) {
  const item = appData.budgetItems.find(b => b.id === id);
  if (item) {
    item.actualAmount = parseFloat(val) || 0;
    renderActiveToolContent();
  }
}

function deleteBudgetItem(id) {
  appData.budgetItems = appData.budgetItems.filter(b => b.id !== id);
  renderActiveToolContent();
}

function openAddBudgetItemModal() {
  const html = `
    <div style="text-align: right;">
      <h3 style="margin-bottom: 20px;">افزودن هزینه جدید</h3>
      <form onsubmit="handleAddBudgetItemSubmit(event)" style="display: flex; flex-direction: column; gap: 12px;">
        <input type="text" id="new-item-title" placeholder="عنوان هزینه (مثلا: گل‌آرایی خاص)" required style="padding: 12px; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;">
        <input type="number" id="new-item-percent" placeholder="درصد تقریبی از بودجه کل (مثلا: 5)" min="1" max="100" style="padding: 12px; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;">
        <input type="number" id="new-item-actual" placeholder="مبلغ واقعی یا فاکتور پرداختی (تومان)" required style="padding: 12px; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;">
        <button type="submit" class="btn btn-primary" style="margin-top: 10px;">افزودن به جدول</button>
      </form>
    </div>
  `;
  openModal(html);
}

function handleAddBudgetItemSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('new-item-title').value.trim();
  const percent = parseFloat(document.getElementById('new-item-percent').value) || 0;
  const actual = parseFloat(document.getElementById('new-item-actual').value) || 0;

  const newItem = {
    id: Date.now(),
    title,
    category: 'custom',
    estimatedPercent: percent,
    estimatedAmount: Math.round((appData.totalBudget * percent) / 100),
    actualAmount: actual
  };

  appData.budgetItems.push(newItem);
  closeModal();
  renderActiveToolContent();
}

// 2. Interactive Checklist Tool
const timeframeLabels = {
  '12_months': '📅 ۱۲ تا ۹ ماه قبل از عروسی',
  '9_months': '📅 ۹ تا ۶ ماه قبل از عروسی',
  '6_months': '📅 ۶ تا ۳ ماه قبل از عروسی',
  '3_months': '📅 ۳ تا ۱ ماه قبل از عروسی',
  '1_month': '📅 ۱ ماه قبل از عروسی',
  '1_week': '⏰ هفته پایانی و روز مراسم'
};

function renderChecklistTool(container) {
  const totalItems = appData.checklist.length;
  const completedItems = appData.checklist.filter(i => i.completed).length;
  const progressPercent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  // Group items
  const grouped = {};
  Object.keys(timeframeLabels).forEach(tf => grouped[tf] = []);
  appData.checklist.forEach(item => {
    if (!grouped[item.timeframe]) grouped[item.timeframe] = [];
    grouped[item.timeframe].push(item);
  });

  container.innerHTML = `
    <div style="background: linear-gradient(135deg, var(--primary-light), #fff); padding: 25px; border-radius: 20px; margin-bottom: 30px; border: 1px solid var(--primary-light);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <h3 style="font-size: 1.2rem; color: var(--dark-color);">پیشرفت برنامه‌ریزی کارهای عروسی</h3>
        <span style="font-weight: 800; color: var(--primary-color); font-size: 1.1rem;">${completedItems} از ${totalItems} کار انجام شده (${progressPercent}%)</span>
      </div>
      <div style="width: 100%; height: 12px; background: #e2e8f0; border-radius: 10px; overflow: hidden;">
        <div style="width: ${progressPercent}%; height: 100%; background: linear-gradient(90deg, var(--primary-color), var(--secondary-color)); border-radius: 10px; transition: var(--transition);"></div>
      </div>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
      <h3 style="font-size: 1.25rem; color: var(--dark-color);">لیست کارها به تفکیک زمان‌بندی</h3>
      <button class="btn btn-outline" style="padding: 8px 18px; font-size: 0.9rem;" onclick="openAddChecklistModal()">+ افزودن کار جدید</button>
    </div>

    <div class="checklist-groups">
      ${Object.keys(timeframeLabels).map(tf => {
        const items = grouped[tf] || [];
        if (items.length === 0) return '';
        return `
          <div style="margin-bottom: 25px;">
            <div class="checklist-group-title">${timeframeLabels[tf]}</div>
            ${items.map(item => `
              <div class="checklist-item ${item.completed ? 'done' : ''}">
                <input type="checkbox" ${item.completed ? 'checked' : ''} onchange="toggleChecklistItem(${item.id})">
                <span style="flex: 1; font-weight: 500;">${item.title}</span>
                <button style="background: transparent; border: none; color: #cbd5e1; cursor: pointer;" onclick="deleteChecklistItem(${item.id})">🗑️</button>
              </div>
            `).join('')}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function toggleChecklistItem(id) {
  const item = appData.checklist.find(i => i.id === id);
  if (item) {
    item.completed = !item.completed;
    renderActiveToolContent();
  }
}

function deleteChecklistItem(id) {
  appData.checklist = appData.checklist.filter(i => i.id !== id);
  renderActiveToolContent();
}

function openAddChecklistModal() {
  const html = `
    <div style="text-align: right;">
      <h3 style="margin-bottom: 20px;">افزودن کار جدید به چک‌لیست</h3>
      <form onsubmit="handleAddChecklistSubmit(event)" style="display: flex; flex-direction: column; gap: 12px;">
        <input type="text" id="new-task-title" placeholder="عنوان کار (مثلا: رزرو ماشین عروسی)" required style="padding: 12px; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;">
        <select id="new-task-timeframe" style="padding: 12px; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;">
          <option value="12_months">۱۲ تا ۹ ماه قبل از عروسی</option>
          <option value="9_months">۹ تا ۶ ماه قبل از عروسی</option>
          <option value="6_months">۶ تا ۳ ماه قبل از عروسی</option>
          <option value="3_months">۳ تا ۱ ماه قبل از عروسی</option>
          <option value="1_month">۱ ماه قبل از عروسی</option>
          <option value="1_week">هفته پایانی و روز مراسم</option>
        </select>
        <button type="submit" class="btn btn-primary" style="margin-top: 10px;">افزودن به چک‌لیست</button>
      </form>
    </div>
  `;
  openModal(html);
}

function handleAddChecklistSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('new-task-title').value.trim();
  const timeframe = document.getElementById('new-task-timeframe').value;

  const newItem = {
    id: Date.now(),
    timeframe,
    title,
    completed: false
  };

  appData.checklist.push(newItem);
  closeModal();
  renderActiveToolContent();
}

// 3. Guest List Manager Tool
const groupLabels = {
  'family_bride': 'فامیل عروس',
  'family_groom': 'فامیل داماد',
  'friends': 'دوستان',
  'colleagues': 'همکاران'
};

const statusLabels = {
  'confirmed': '✅ تایید شده',
  'pending': '⏳ در انتظار پاسخ',
  'declined': '❌ عدم حضور'
};

function renderGuestListTool(container) {
  const totalGuestsCount = appData.guests.reduce((acc, g) => acc + 1 + (parseInt(g.plusOnes) || 0), 0);
  const confirmedGuestsCount = appData.guests
    .filter(g => g.status === 'confirmed')
    .reduce((acc, g) => acc + 1 + (parseInt(g.plusOnes) || 0), 0);
  const pendingGuestsCount = appData.guests
    .filter(g => g.status === 'pending')
    .reduce((acc, g) => acc + 1 + (parseInt(g.plusOnes) || 0), 0);

  container.innerHTML = `
    <div class="budget-overview">
      <div class="stat-box">
        <div class="stat-label">مجموع مهمانان دعوت شده</div>
        <div class="stat-value highlight">${totalGuestsCount} نفر</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">تعداد قطعی (تایید شده)</div>
        <div class="stat-value" style="color: #38a169;">${confirmedGuestsCount} نفر</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">در انتظار پاسخ</div>
        <div class="stat-value" style="color: #d69e2e;">${pendingGuestsCount} نفر</div>
      </div>
    </div>

    <div style="background: #f8fafc; padding: 25px; border-radius: 20px; margin-bottom: 30px;">
      <h3 style="font-size: 1.15rem; margin-bottom: 15px; color: var(--dark-color);">افزودن مهمان جدید</h3>
      <form class="guest-form" onsubmit="handleAddGuestSubmit(event)">
        <input type="text" id="guest-name" placeholder="نام و نام خانوادگی مهمان" required>
        <input type="number" id="guest-plusones" placeholder="تعداد همراهان (مثلا 2)" min="0" value="0">
        <select id="guest-group">
          <option value="family_bride">فامیل عروس</option>
          <option value="family_groom">فامیل داماد</option>
          <option value="friends">دوستان</option>
          <option value="colleagues">همکاران</option>
        </select>
        <button type="submit" class="btn btn-primary">افزودن مهمان</button>
      </form>
    </div>

    <h3 style="font-size: 1.2rem; color: var(--dark-color); margin-bottom: 15px;">لیست مهمانان ثبت‌شده</h3>
    <table class="budget-table">
      <thead>
        <tr>
          <th>نام مهمان</th>
          <th>گروه</th>
          <th>تعداد کل نفرات (با همراه)</th>
          <th>وضعیت دعوت</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        ${appData.guests.length === 0
          ? `<tr><td colspan="5" style="text-align: center; color: #888; padding: 30px;">هنوز مهمانی اضافه نشده است.</td></tr>`
          : appData.guests.map(guest => `
            <tr>
              <td><strong>${guest.name}</strong></td>
              <td>${groupLabels[guest.group] || guest.group}</td>
              <td>${1 + (parseInt(guest.plusOnes) || 0)} نفر (${guest.plusOnes} همراه)</td>
              <td>
                <select onchange="updateGuestStatus(${guest.id}, this.value)" style="padding: 6px 10px; border-radius: 8px; border: 1px solid #cbd5e1; font-family: inherit;">
                  <option value="confirmed" ${guest.status === 'confirmed' ? 'selected' : ''}>✅ تایید شده</option>
                  <option value="pending" ${guest.status === 'pending' ? 'selected' : ''}>⏳ در انتظار پاسخ</option>
                  <option value="declined" ${guest.status === 'declined' ? 'selected' : ''}>❌ عدم حضور</option>
                </select>
              </td>
              <td>
                <button style="background: transparent; border: none; color: #e53e3e; cursor: pointer; font-weight: bold;" onclick="deleteGuest(${guest.id})">حذف</button>
              </td>
            </tr>
          `).join('')}
      </tbody>
    </table>
  `;
}

function handleAddGuestSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('guest-name').value.trim();
  const plusOnes = parseInt(document.getElementById('guest-plusones').value) || 0;
  const group = document.getElementById('guest-group').value;

  const newGuest = {
    id: Date.now(),
    name,
    plusOnes,
    group,
    status: 'pending'
  };

  appData.guests.push(newGuest);
  renderActiveToolContent();
}

function updateGuestStatus(id, newStatus) {
  const guest = appData.guests.find(g => g.id === id);
  if (guest) {
    guest.status = newStatus;
    renderActiveToolContent();
  }
}

function deleteGuest(id) {
  appData.guests = appData.guests.filter(g => g.id !== id);
  renderActiveToolContent();
}

// Articles & Magazine Section
function renderArticlesSection() {
  const container = document.getElementById('articles-container');
  if (!container) return;
  container.innerHTML = `
    <h2 class="section-title">مجله و ایده‌های عروسی بزمینه</h2>
    <p class="section-subtitle">جدیدترین راهنماها، ایده‌های دیزاین و توصیه‌های متخصصین تشریفات</p>

    <div class="articles-grid">
      ${articles.map(article => `
        <div class="article-card">
          <img src="${article.image}" alt="${article.title}" class="article-img">
          <div class="article-body">
            <span class="article-tag">${article.category} • زمان مطالعه ${article.readTime}</span>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-summary">${article.summary}</p>
            <button class="btn btn-outline" style="width: 100%; margin-top: 10px;" onclick="openArticleModal(${article.id})">ادامه مطلب</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function openArticleModal(articleId) {
  const article = articles.find(a => a.id === articleId);
  if (!article) return;

  const html = `
    <div style="text-align: right;">
      <img src="${article.image}" alt="${article.title}" style="width: 100%; height: 260px; object-fit: cover; border-radius: 16px; margin-bottom: 20px;">
      <span style="color: var(--secondary-color); font-weight: bold; font-size: 0.9rem;">${article.category} • ${article.readTime}</span>
      <h2 style="font-size: 1.5rem; color: var(--dark-color); margin: 10px 0 15px;">${article.title}</h2>
      <p style="font-size: 1.05rem; line-height: 1.9; color: #444; margin-bottom: 20px;">${article.summary}</p>
      <p style="line-height: 1.9; color: #666;">
        برنامه‌ریزی عروسی نیازمند دقت به جزئیات است. با مدیریت زمان، انتخاب تیم تشریفات مجرب و استفاده از ابزارهای هوشمند بزمینه می‌توانید هزینه‌های اضافی را مدیریت کنید و بهترین خاطره را برای خود و مهمانانتان رقم بزنید.
      </p>
    </div>
  `;
  openModal(html);
}

// Contact Modal
function openContactModal() {
  const html = `
    <div style="text-align: right;">
      <h2 style="font-size: 1.4rem; color: var(--dark-color); margin-bottom: 10px;">ارتباط با کارشناسان بزمینه</h2>
      <p style="color: #666; margin-bottom: 20px;">جهت دریافت مشاوره رایگان برنامه‌ریزی عروسی یا معرفی تالار، فرم زیر را تکمیل کنید.</p>

      <form onsubmit="handleContactSubmit(event)" style="display: flex; flex-direction: column; gap: 12px;">
        <input type="text" placeholder="نام و نام خانوادگی" required style="padding: 12px; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;">
        <input type="tel" placeholder="شماره تماس (همراه)" required style="padding: 12px; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;">
        <input type="email" placeholder="آدرس ایمیل (اختیاری)" style="padding: 12px; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;">
        <textarea placeholder="پیام یا درخواست شما..." rows="4" required style="padding: 12px; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;"></textarea>
        <button type="submit" class="btn btn-primary" style="margin-top: 10px;">ارسال پیام</button>
      </form>
    </div>
  `;
  openModal(html);
}

function handleContactSubmit(e) {
  e.preventDefault();
  alert('پیام شما با موفقیت دریافت شد. کارشناسان بزمینه به زودی با شما تماس خواهند گرفت.');
  closeModal();
}

// Login/Register Modal
function openLoginModal() {
  const html = `
    <div style="text-align: right;">
      <h2 style="font-size: 1.4rem; color: var(--dark-color); margin-bottom: 10px;">ورود / ثبت‌نام در بزمینه</h2>
      <p style="color: #666; margin-bottom: 20px;">برای ذخیره پروژه‌های عروسی و بودجه‌بندی خود وارد حساب شوید.</p>

      <form onsubmit="handleLoginSubmit(event)" style="display: flex; flex-direction: column; gap: 12px;">
        <input type="tel" placeholder="شماره تلفن همراه (مثلا 09121112233)" required style="padding: 12px; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;">
        <input type="password" placeholder="رمز عبور" required style="padding: 12px; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;">
        <button type="submit" class="btn btn-primary" style="margin-top: 10px;">ورود به حساب کاربری</button>
      </form>
    </div>
  `;
  openModal(html);
}

function handleLoginSubmit(e) {
  e.preventDefault();
  alert('ورود موفقیت‌آمیز بود! خوش آمدید.');
  closeModal();
}

// Initial DOM Load
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderHero();
  renderCategories();
  renderVendorsSection();
  renderToolsSection();
  renderArticlesSection();
  renderFooter();
  setupModalEvents();
});
