(function () {
    const languageOptions = [
        ["en", "English"],
        ["ur", "اردو"],
        ["sd", "سنڌي"],
        ["ar", "العربية"],
        ["zh-CN", "中文（普通话）"],
        ["hi", "हिन्दी"],
        ["bn", "বাংলা"],
        ["id", "Bahasa Indonesia"],
        ["ja", "日本語"],
        ["tr", "Türkçe"],
        ["fa", "فارسی"],
        ["ko", "한국어"],
        ["vi", "Tiếng Việt"],
        ["th", "ไทย"]
    ];
    const localTranslations = {
        ur: {
            Theme: "تھیم", Language: "زبان", System: "سسٹم", Light: "روشن", Dark: "تاریک",
            About: "تعارف", Activities: "سرگرمیاں", Specialties: "خصوصیات", Committee: "کمیٹی",
            President: "صدر", "SFSDC App": "SFSDC ایپ", "Contact Us": "رابطہ کریں",
            "About SFSDC": "SFSDC کا تعارف", "Core Activities & Events": "بنیادی سرگرمیاں اور تقریبات",
            "Our Specialties": "ہماری خصوصیات", "Our Leadership": "ہماری قیادت",
            "Official mobile app": "سرکاری موبائل ایپ", "Get it on Google Play": "Google Play سے حاصل کریں",
            "App details": "ایپ کی تفصیلات", "App name": "ایپ کا نام", Platform: "پلیٹ فارم",
            "Google Play package ID": "Google Play پیکیج آئی ڈی", "Download the SFSDC App": "SFSDC ایپ ڈاؤن لوڈ کریں",
            "Privacy Policy": "رازداری کی پالیسی", "Terms & Conditions": "شرائط و ضوابط",
            Cookies: "کوکیز", Sitemap: "سائٹ کا نقشہ", "Share this page": "یہ صفحہ شیئر کریں",
            "Contact SFSDC on WhatsApp": "WhatsApp پر SFSDC سے رابطہ کریں"
        },
        sd: {
            Theme: "ٿيم", Language: "ٻولي", System: "سسٽم", Light: "هلڪو", Dark: "اونداهو",
            About: "تعارف", Activities: "سرگرميون", Specialties: "خاصيتون", Committee: "ڪميٽي",
            President: "صدر", "SFSDC App": "SFSDC ايپ", "Contact Us": "اسان سان رابطو ڪريو",
            "About SFSDC": "SFSDC بابت", "Core Activities & Events": "بنيادي سرگرميون ۽ تقريبون",
            "Our Specialties": "اسان جون خاصيتون", "Our Leadership": "اسان جي قيادت",
            "Official mobile app": "سرڪاري موبائل ايپ", "Get it on Google Play": "Google Play تان حاصل ڪريو",
            "App details": "ايپ جا تفصيل", "App name": "ايپ جو نالو", Platform: "پليٽفارم",
            "Google Play package ID": "Google Play پيڪيج آءِ ڊي", "Download the SFSDC App": "SFSDC ايپ ڊائون لوڊ ڪريو",
            "Privacy Policy": "رازداري پاليسي", "Terms & Conditions": "شرطون ۽ ضابطا",
            Cookies: "ڪوڪيز", Sitemap: "سائيٽ جو نقشو", "Share this page": "هي صفحو شيئر ڪريو",
            "Contact SFSDC on WhatsApp": "WhatsApp تي SFSDC سان رابطو ڪريو"
        },
        ar: {
            Theme: "المظهر", Language: "اللغة", System: "النظام", Light: "فاتح", Dark: "داكن",
            About: "من نحن", Activities: "الأنشطة", Specialties: "التخصصات", Committee: "اللجنة",
            President: "الرئيس", "SFSDC App": "تطبيق SFSDC", "Contact Us": "اتصل بنا",
            "About SFSDC": "نبذة عن SFSDC", "Core Activities & Events": "الأنشطة والفعاليات الرئيسية",
            "Our Specialties": "تخصصاتنا", "Our Leadership": "قيادتنا",
            "Official mobile app": "التطبيق الرسمي", "Get it on Google Play": "احصل عليه من Google Play",
            "App details": "تفاصيل التطبيق", "App name": "اسم التطبيق", Platform: "المنصة",
            "Google Play package ID": "معرّف حزمة Google Play", "Download the SFSDC App": "نزّل تطبيق SFSDC",
            "Privacy Policy": "سياسة الخصوصية", "Terms & Conditions": "الشروط والأحكام",
            Cookies: "ملفات تعريف الارتباط", Sitemap: "خريطة الموقع", "Share this page": "شارك هذه الصفحة",
            "Contact SFSDC on WhatsApp": "تواصل مع SFSDC عبر WhatsApp"
        },
        "zh-CN": {
            Theme: "主题", Language: "语言", System: "跟随系统", Light: "浅色", Dark: "深色",
            About: "关于", Activities: "活动", Specialties: "专长", Committee: "委员会",
            President: "主席", "SFSDC App": "SFSDC 应用", "Contact Us": "联系我们",
            "About SFSDC": "关于 SFSDC", "Core Activities & Events": "核心活动与赛事",
            "Our Specialties": "我们的专长", "Our Leadership": "我们的领导团队",
            "Official mobile app": "官方移动应用", "Get it on Google Play": "前往 Google Play 获取",
            "App details": "应用详情", "App name": "应用名称", Platform: "平台",
            "Google Play package ID": "Google Play 软件包 ID", "Download the SFSDC App": "下载 SFSDC 应用",
            "Privacy Policy": "隐私政策", "Terms & Conditions": "条款与条件",
            Cookies: "Cookie", Sitemap: "网站地图", "Share this page": "分享此页面",
            "Contact SFSDC on WhatsApp": "通过 WhatsApp 联系 SFSDC"
        },
        hi: {
            Theme: "थीम", Language: "भाषा", System: "सिस्टम", Light: "लाइट", Dark: "डार्क",
            About: "परिचय", Activities: "गतिविधियाँ", Specialties: "विशेषताएँ", Committee: "समिति",
            President: "अध्यक्ष", "SFSDC App": "SFSDC ऐप", "Contact Us": "संपर्क करें",
            "About SFSDC": "SFSDC के बारे में", "Core Activities & Events": "मुख्य गतिविधियाँ और कार्यक्रम",
            "Our Specialties": "हमारी विशेषताएँ", "Our Leadership": "हमारा नेतृत्व",
            "Official mobile app": "आधिकारिक मोबाइल ऐप", "Get it on Google Play": "Google Play से प्राप्त करें",
            "App details": "ऐप का विवरण", "App name": "ऐप का नाम", Platform: "प्लेटफ़ॉर्म",
            "Google Play package ID": "Google Play पैकेज आईडी", "Download the SFSDC App": "SFSDC ऐप डाउनलोड करें",
            "Privacy Policy": "गोपनीयता नीति", "Terms & Conditions": "नियम और शर्तें",
            Cookies: "कुकीज़", Sitemap: "साइटमैप", "Share this page": "यह पेज साझा करें",
            "Contact SFSDC on WhatsApp": "WhatsApp पर SFSDC से संपर्क करें"
        },
        bn: {
            Theme: "থিম", Language: "ভাষা", System: "সিস্টেম", Light: "লাইট", Dark: "ডার্ক",
            About: "পরিচিতি", Activities: "কার্যক্রম", Specialties: "বিশেষত্ব", Committee: "কমিটি",
            President: "সভাপতি", "SFSDC App": "SFSDC অ্যাপ", "Contact Us": "যোগাযোগ করুন",
            "About SFSDC": "SFSDC সম্পর্কে", "Core Activities & Events": "মূল কার্যক্রম ও অনুষ্ঠান",
            "Our Specialties": "আমাদের বিশেষত্ব", "Our Leadership": "আমাদের নেতৃত্ব",
            "Official mobile app": "অফিশিয়াল মোবাইল অ্যাপ", "Get it on Google Play": "Google Play থেকে নিন",
            "App details": "অ্যাপের বিবরণ", "App name": "অ্যাপের নাম", Platform: "প্ল্যাটফর্ম",
            "Google Play package ID": "Google Play প্যাকেজ আইডি", "Download the SFSDC App": "SFSDC অ্যাপ ডাউনলোড করুন",
            "Privacy Policy": "গোপনীয়তা নীতি", "Terms & Conditions": "শর্তাবলি",
            Cookies: "কুকি", Sitemap: "সাইটম্যাপ", "Share this page": "এই পৃষ্ঠাটি শেয়ার করুন",
            "Contact SFSDC on WhatsApp": "WhatsApp-এ SFSDC-এর সঙ্গে যোগাযোগ করুন"
        },
        id: {
            Theme: "Tema", Language: "Bahasa", System: "Sistem", Light: "Terang", Dark: "Gelap",
            About: "Tentang", Activities: "Kegiatan", Specialties: "Keahlian", Committee: "Komite",
            President: "Presiden", "SFSDC App": "Aplikasi SFSDC", "Contact Us": "Hubungi Kami",
            "About SFSDC": "Tentang SFSDC", "Core Activities & Events": "Kegiatan & Acara Utama",
            "Our Specialties": "Keahlian Kami", "Our Leadership": "Kepemimpinan Kami",
            "Official mobile app": "Aplikasi seluler resmi", "Get it on Google Play": "Dapatkan di Google Play",
            "App details": "Detail aplikasi", "App name": "Nama aplikasi", Platform: "Platform",
            "Google Play package ID": "ID paket Google Play", "Download the SFSDC App": "Unduh Aplikasi SFSDC",
            "Privacy Policy": "Kebijakan Privasi", "Terms & Conditions": "Syarat & Ketentuan",
            Cookies: "Cookie", Sitemap: "Peta Situs", "Share this page": "Bagikan halaman ini",
            "Contact SFSDC on WhatsApp": "Hubungi SFSDC melalui WhatsApp"
        },
        ja: {
            Theme: "テーマ", Language: "言語", System: "システム", Light: "ライト", Dark: "ダーク",
            About: "SFSDCについて", Activities: "活動", Specialties: "専門分野", Committee: "委員会",
            President: "会長", "SFSDC App": "SFSDCアプリ", "Contact Us": "お問い合わせ",
            "About SFSDC": "SFSDCについて", "Core Activities & Events": "主な活動とイベント",
            "Our Specialties": "私たちの専門分野", "Our Leadership": "リーダーシップ",
            "Official mobile app": "公式モバイルアプリ", "Get it on Google Play": "Google Playで入手",
            "App details": "アプリの詳細", "App name": "アプリ名", Platform: "プラットフォーム",
            "Google Play package ID": "Google PlayパッケージID", "Download the SFSDC App": "SFSDCアプリをダウンロード",
            "Privacy Policy": "プライバシーポリシー", "Terms & Conditions": "利用規約",
            Cookies: "Cookieについて", Sitemap: "サイトマップ", "Share this page": "このページを共有",
            "Contact SFSDC on WhatsApp": "WhatsAppでSFSDCに連絡"
        },
        tr: {
            Theme: "Tema", Language: "Dil", System: "Sistem", Light: "Açık", Dark: "Koyu",
            About: "Hakkımızda", Activities: "Etkinlikler", Specialties: "Uzmanlıklar", Committee: "Komite",
            President: "Başkan", "SFSDC App": "SFSDC Uygulaması", "Contact Us": "İletişim",
            "About SFSDC": "SFSDC Hakkında", "Core Activities & Events": "Temel Faaliyetler ve Etkinlikler",
            "Our Specialties": "Uzmanlıklarımız", "Our Leadership": "Liderlerimiz",
            "Official mobile app": "Resmî mobil uygulama", "Get it on Google Play": "Google Play'den edinin",
            "App details": "Uygulama ayrıntıları", "App name": "Uygulama adı", Platform: "Platform",
            "Google Play package ID": "Google Play paket kimliği", "Download the SFSDC App": "SFSDC Uygulamasını İndir",
            "Privacy Policy": "Gizlilik Politikası", "Terms & Conditions": "Şartlar ve Koşullar",
            Cookies: "Çerezler", Sitemap: "Site Haritası", "Share this page": "Bu sayfayı paylaş",
            "Contact SFSDC on WhatsApp": "WhatsApp üzerinden SFSDC ile iletişime geçin"
        },
        fa: {
            Theme: "پوسته", Language: "زبان", System: "سیستم", Light: "روشن", Dark: "تیره",
            About: "درباره", Activities: "فعالیت‌ها", Specialties: "تخصص‌ها", Committee: "کمیته",
            President: "رئیس", "SFSDC App": "برنامه SFSDC", "Contact Us": "تماس با ما",
            "About SFSDC": "درباره SFSDC", "Core Activities & Events": "فعالیت‌ها و رویدادهای اصلی",
            "Our Specialties": "تخصص‌های ما", "Our Leadership": "تیم رهبری ما",
            "Official mobile app": "برنامه رسمی موبایل", "Get it on Google Play": "دریافت از Google Play",
            "App details": "جزئیات برنامه", "App name": "نام برنامه", Platform: "پلتفرم",
            "Google Play package ID": "شناسه بسته Google Play", "Download the SFSDC App": "دانلود برنامه SFSDC",
            "Privacy Policy": "سیاست حفظ حریم خصوصی", "Terms & Conditions": "شرایط و ضوابط",
            Cookies: "کوکی‌ها", Sitemap: "نقشه سایت", "Share this page": "اشتراک‌گذاری این صفحه",
            "Contact SFSDC on WhatsApp": "تماس با SFSDC در WhatsApp"
        },
        ko: {
            Theme: "테마", Language: "언어", System: "시스템", Light: "라이트", Dark: "다크",
            About: "소개", Activities: "활동", Specialties: "전문 분야", Committee: "위원회",
            President: "회장", "SFSDC App": "SFSDC 앱", "Contact Us": "문의하기",
            "About SFSDC": "SFSDC 소개", "Core Activities & Events": "주요 활동 및 행사",
            "Our Specialties": "전문 분야", "Our Leadership": "리더십",
            "Official mobile app": "공식 모바일 앱", "Get it on Google Play": "Google Play에서 다운로드",
            "App details": "앱 세부정보", "App name": "앱 이름", Platform: "플랫폼",
            "Google Play package ID": "Google Play 패키지 ID", "Download the SFSDC App": "SFSDC 앱 다운로드",
            "Privacy Policy": "개인정보 처리방침", "Terms & Conditions": "이용약관",
            Cookies: "쿠키", Sitemap: "사이트맵", "Share this page": "이 페이지 공유",
            "Contact SFSDC on WhatsApp": "WhatsApp으로 SFSDC에 문의"
        },
        vi: {
            Theme: "Giao diện", Language: "Ngôn ngữ", System: "Theo hệ thống", Light: "Sáng", Dark: "Tối",
            About: "Giới thiệu", Activities: "Hoạt động", Specialties: "Chuyên môn", Committee: "Ban điều hành",
            President: "Chủ tịch", "SFSDC App": "Ứng dụng SFSDC", "Contact Us": "Liên hệ",
            "About SFSDC": "Giới thiệu về SFSDC", "Core Activities & Events": "Hoạt động và sự kiện chính",
            "Our Specialties": "Chuyên môn của chúng tôi", "Our Leadership": "Ban lãnh đạo",
            "Official mobile app": "Ứng dụng di động chính thức", "Get it on Google Play": "Tải trên Google Play",
            "App details": "Thông tin ứng dụng", "App name": "Tên ứng dụng", Platform: "Nền tảng",
            "Google Play package ID": "Mã gói Google Play", "Download the SFSDC App": "Tải ứng dụng SFSDC",
            "Privacy Policy": "Chính sách quyền riêng tư", "Terms & Conditions": "Điều khoản và điều kiện",
            Cookies: "Cookie", Sitemap: "Sơ đồ trang web", "Share this page": "Chia sẻ trang này",
            "Contact SFSDC on WhatsApp": "Liên hệ SFSDC qua WhatsApp"
        },
        th: {
            Theme: "ธีม", Language: "ภาษา", System: "ตามระบบ", Light: "สว่าง", Dark: "มืด",
            About: "เกี่ยวกับ", Activities: "กิจกรรม", Specialties: "ความเชี่ยวชาญ", Committee: "คณะกรรมการ",
            President: "ประธาน", "SFSDC App": "แอป SFSDC", "Contact Us": "ติดต่อเรา",
            "About SFSDC": "เกี่ยวกับ SFSDC", "Core Activities & Events": "กิจกรรมและงานหลัก",
            "Our Specialties": "ความเชี่ยวชาญของเรา", "Our Leadership": "ทีมผู้นำของเรา",
            "Official mobile app": "แอปมือถืออย่างเป็นทางการ", "Get it on Google Play": "ดาวน์โหลดบน Google Play",
            "App details": "รายละเอียดแอป", "App name": "ชื่อแอป", Platform: "แพลตฟอร์ม",
            "Google Play package ID": "รหัสแพ็กเกจ Google Play", "Download the SFSDC App": "ดาวน์โหลดแอป SFSDC",
            "Privacy Policy": "นโยบายความเป็นส่วนตัว", "Terms & Conditions": "ข้อกำหนดและเงื่อนไข",
            Cookies: "คุกกี้", Sitemap: "แผนผังเว็บไซต์", "Share this page": "แชร์หน้านี้",
            "Contact SFSDC on WhatsApp": "ติดต่อ SFSDC ทาง WhatsApp"
        }
    };
    const additionalPhrases = {
        "SFSDC | SZABIST Future Software Developers Club": [
            "SFSDC | کلب SZABIST کے مستقبل کے سافٹ ویئر ڈویلپرز",
            "SFSDC | SZABIST جي مستقبل جي سافٽ ويئر ڊولپرز ڪلب",
            "SFSDC | نادي مطوري البرمجيات المستقبليين في SZABIST",
            "SFSDC | SZABIST未来软件开发者俱乐部",
            "SFSDC | SZABIST भावी सॉफ्टवेयर डेवलपर्स क्लब",
            "SFSDC | SZABIST ভবিষ্যৎ সফটওয়্যার ডেভেলপার্স ক্লাব",
            "SFSDC | Klub Pengembang Perangkat Lunak Masa Depan SZABIST",
            "SFSDC | SZABIST未来ソフトウェア開発者クラブ",
            "SFSDC | SZABIST Geleceğin Yazılım Geliştiricileri Kulübü",
            "SFSDC | باشگاه توسعه‌دهندگان نرم‌افزار آینده SZABIST",
            "SFSDC | SZABIST 미래 소프트웨어 개발자 클럽",
            "SFSDC | Câu lạc bộ Nhà phát triển Phần mềm Tương lai SZABIST",
            "SFSDC | ชมรมนักพัฒนาซอฟต์แวร์แห่งอนาคต SZABIST"
        ],
        "SFSDC App | SZABIST Future Software Developers Club": [
            "ایپ SFSDC | کلب SZABIST کے مستقبل کے سافٹ ویئر ڈویلپرز",
            "SFSDC ايپ | SZABIST جي مستقبل جي سافٽ ويئر ڊولپرز ڪلب",
            "تطبيق SFSDC | نادي مطوري البرمجيات المستقبليين في SZABIST",
            "SFSDC 应用 | SZABIST未来软件开发者俱乐部",
            "SFSDC ऐप | SZABIST भावी सॉफ्टवेयर डेवलपर्स क्लब",
            "SFSDC অ্যাপ | SZABIST ভবিষ্যৎ সফটওয়্যার ডেভেলপার্স ক্লাব",
            "Aplikasi SFSDC | Klub Pengembang Perangkat Lunak Masa Depan SZABIST",
            "SFSDCアプリ | SZABIST未来ソフトウェア開発者クラブ",
            "SFSDC Uygulaması | SZABIST Geleceğin Yazılım Geliştiricileri Kulübü",
            "برنامه SFSDC | باشگاه توسعه‌دهندگان نرم‌افزار آینده SZABIST",
            "SFSDC 앱 | SZABIST 미래 소프트웨어 개발자 클럽",
            "Ứng dụng SFSDC | Câu lạc bộ Nhà phát triển Phần mềm Tương lai SZABIST",
            "แอป SFSDC | ชมรมนักพัฒนาซอฟต์แวร์แห่งอนาคต SZABIST"
        ],
        "Privacy Policy | SFSDC": ["رازداری کی پالیسی | SFSDC", "رازداري پاليسي | SFSDC", "سياسة الخصوصية | SFSDC", "隐私政策 | SFSDC", "गोपनीयता नीति | SFSDC", "গোপনীয়তা নীতি | SFSDC", "Kebijakan Privasi | SFSDC", "プライバシーポリシー | SFSDC", "Gizlilik Politikası | SFSDC", "سیاست حفظ حریم خصوصی | SFSDC", "개인정보 처리방침 | SFSDC", "Chính sách quyền riêng tư | SFSDC", "นโยบายความเป็นส่วนตัว | SFSDC"],
        "Terms & Conditions | SFSDC": ["شرائط و ضوابط | SFSDC", "شرطون ۽ ضابطا | SFSDC", "الشروط والأحكام | SFSDC", "条款与条件 | SFSDC", "नियम और शर्तें | SFSDC", "শর্তাবলি | SFSDC", "Syarat & Ketentuan | SFSDC", "利用規約 | SFSDC", "Şartlar ve Koşullar | SFSDC", "شرایط و ضوابط | SFSDC", "이용약관 | SFSDC", "Điều khoản và điều kiện | SFSDC", "ข้อกำหนดและเงื่อนไข | SFSDC"],
        "Cookies | SFSDC": ["کوکیز | SFSDC", "ڪوڪيز | SFSDC", "ملفات تعريف الارتباط | SFSDC", "Cookie | SFSDC", "कुकीज़ | SFSDC", "কুকি | SFSDC", "Cookie | SFSDC", "Cookieについて | SFSDC", "Çerezler | SFSDC", "کوکی‌ها | SFSDC", "쿠키 | SFSDC", "Cookie | SFSDC", "คุกกี้ | SFSDC"],
        "Sitemap | SFSDC": ["سائٹ کا نقشہ | SFSDC", "سائيٽ جو نقشو | SFSDC", "خريطة الموقع | SFSDC", "网站地图 | SFSDC", "साइटमैप | SFSDC", "সাইটম্যাপ | SFSDC", "Peta Situs | SFSDC", "サイトマップ | SFSDC", "Site Haritası | SFSDC", "نقشه سایت | SFSDC", "사이트맵 | SFSDC", "Sơ đồ trang web | SFSDC", "แผนผังเว็บไซต์ | SFSDC"],
        "Cookies & browser storage": ["کوکیز اور براؤزر اسٹوریج", "ڪوڪيز ۽ برائوزر اسٽوريج", "ملفات تعريف الارتباط والتخزين في المتصفح", "Cookie 与浏览器存储", "कुकीज़ और ब्राउज़र संग्रहण", "কুকি ও ব্রাউজার স্টোরেজ", "Cookie & penyimpanan browser", "Cookieとブラウザーのストレージ", "Çerezler ve tarayıcı depolaması", "کوکی‌ها و فضای ذخیره‌سازی مرورگر", "쿠키 및 브라우저 저장소", "Cookie và bộ nhớ trình duyệt", "คุกกี้และพื้นที่จัดเก็บของเบราว์เซอร์"],
        "Website": ["ویب سائٹ", "ويب سائيٽ", "الموقع الإلكتروني", "网站", "वेबसाइट", "ওয়েবসাইট", "Situs web", "ウェブサイト", "Web sitesi", "وب‌سایت", "웹사이트", "Trang web", "เว็บไซต์"],
        "Last updated: October 19, 2026": ["آخری تازہ کاری: 19 اکتوبر 2026", "آخري ڀيرو اپڊيٽ: 19 آڪٽوبر 2026", "آخر تحديث: 19 أكتوبر 2026", "最后更新：2026年10月19日", "अंतिम अपडेट: 19 अक्टूबर 2026", "সর্বশেষ হালনাগাদ: ১৯ অক্টোবর ২০২৬", "Terakhir diperbarui: 19 Oktober 2026", "最終更新日：2026年10月19日", "Son güncelleme: 19 Ekim 2026", "آخرین به‌روزرسانی: ۱۹ اکتبر ۲۰۲۶", "최종 업데이트: 2026년 10월 19일", "Cập nhật lần cuối: 19 tháng 10, 2026", "อัปเดตล่าสุด: 19 ตุลาคม 2026"],
        "Our Vision": ["ہمارا وژن", "اسان جو خواب", "رؤيتنا", "我们的愿景", "हमारा दृष्टिकोण", "আমাদের লক্ষ্য", "Visi Kami", "私たちのビジョン", "Vizyonumuz", "چشم‌انداز ما", "우리의 비전", "Tầm nhìn của chúng tôi", "วิสัยทัศน์ของเรา"],
        "Our Mission & Objectives": ["ہمارا مشن اور مقاصد", "اسان جو مقصد ۽ هدف", "مهمتنا وأهدافنا", "我们的使命与目标", "हमारा मिशन और उद्देश्य", "আমাদের লক্ষ্য ও উদ্দেশ্য", "Misi & Tujuan Kami", "私たちの使命と目標", "Misyonumuz ve Hedeflerimiz", "ماموریت و اهداف ما", "우리의 사명과 목표", "Sứ mệnh và mục tiêu", "พันธกิจและเป้าหมายของเรา"],
        "Register Now": ["ابھی رجسٹر کریں", "هاڻي رجسٽر ڪريو", "سجّل الآن", "立即注册", "अभी पंजीकरण करें", "এখনই নিবন্ধন করুন", "Daftar Sekarang", "今すぐ登録", "Hemen Kaydol", "همین حالا ثبت‌نام کنید", "지금 등록", "Đăng ký ngay", "สมัครตอนนี้"],
        "Book Interview Slot": ["انٹرویو کا وقت بک کریں", "انٽرويو جو وقت بڪ ڪريو", "احجز موعد المقابلة", "预约面试时段", "इंटरव्यू का समय बुक करें", "সাক্ষাতের সময় বুক করুন", "Pesan Jadwal Wawancara", "面接枠を予約", "Görüşme Saati Ayırtın", "زمان مصاحبه را رزرو کنید", "면접 시간 예약", "Đặt lịch phỏng vấn", "จองเวลาสัมภาษณ์"]
    };
    const translationLanguages = languageOptions.slice(1).map(function (option) {
        return option[0];
    });
    Object.keys(additionalPhrases).forEach(function (phrase) {
        additionalPhrases[phrase].forEach(function (translation, index) {
            localTranslations[translationLanguages[index]][phrase] = translation;
        });
    });
    const themeKey = "sfsdc-theme";
    const languageKey = "sfsdc-language";
    const themeLabels = {
        system: "System",
        light: "Light",
        dark: "Dark"
    };
    const englishTitle = document.title;
    const savedTheme = localStorage.getItem(themeKey) || "system";
    const savedLanguage = localStorage.getItem(languageKey) || "en";

    document.documentElement.dataset.theme = savedTheme;
    document.documentElement.lang = savedLanguage;
    document.documentElement.dir = ["ur", "sd", "ar", "fa"].includes(savedLanguage) ? "rtl" : "ltr";

    document.querySelectorAll("#mobile-menu-btn").forEach(function (button) {
        const menu = document.getElementById(button.getAttribute("aria-controls"));
        if (!menu) {
            return;
        }
        button.addEventListener("click", function () {
            const isOpen = !menu.classList.contains("hidden");
            menu.classList.toggle("hidden", isOpen);
            button.setAttribute("aria-expanded", String(!isOpen));
        });
        menu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                menu.classList.add("hidden");
                button.setAttribute("aria-expanded", "false");
            });
        });
    });

    document.querySelectorAll(".current-year").forEach(function (year) {
        year.textContent = String(new Date().getFullYear());
    });

    function makeSelect(id, label, options, selectedValue) {
        const wrapper = document.createElement("label");
        wrapper.className = "site-control";
        wrapper.htmlFor = id;

        const labelText = document.createElement("span");
        labelText.textContent = label;
        wrapper.appendChild(labelText);

        const select = document.createElement("select");
        select.id = id;
        select.setAttribute("aria-label", label);
        options.forEach(function (option) {
            const item = document.createElement("option");
            item.value = option[0];
            item.textContent = option[1];
            item.selected = option[0] === selectedValue;
            select.appendChild(item);
        });
        wrapper.appendChild(select);
        return { wrapper: wrapper, select: select };
    }

    document.querySelectorAll("#site-controls, #mobile-site-controls").forEach(function (container, index) {
        const prefix = index === 0 ? "desktop" : "mobile";
        container.classList.add("site-controls");

        const theme = makeSelect(prefix + "-theme", "Theme", Object.keys(themeLabels).map(function (key) {
            return [key, themeLabels[key]];
        }), savedTheme);
        theme.select.addEventListener("change", function () {
            document.documentElement.dataset.theme = theme.select.value;
            localStorage.setItem(themeKey, theme.select.value);
            document.querySelectorAll("#desktop-theme, #mobile-theme").forEach(function (other) {
                other.value = theme.select.value;
            });
        });
        container.appendChild(theme.wrapper);

        const language = makeSelect(prefix + "-language", "Language", languageOptions, savedLanguage);
        language.select.addEventListener("change", function () {
            document.documentElement.lang = language.select.value;
            document.documentElement.dir = ["ur", "sd", "ar", "fa"].includes(language.select.value) ? "rtl" : "ltr";
            localStorage.setItem(languageKey, language.select.value);
            document.querySelectorAll("#desktop-language, #mobile-language").forEach(function (other) {
                other.value = language.select.value;
            });
            applyLocalTranslation(language.select.value);
        });
        container.appendChild(language.wrapper);

        const shareButton = document.createElement("button");
        shareButton.type = "button";
        shareButton.className = "share-page-button site-share-link";
        shareButton.setAttribute("aria-label", "Share this page");
        shareButton.title = "Share this page";
        shareButton.innerHTML = '<i class="fas fa-share-alt" aria-hidden="true"></i>';
        container.appendChild(shareButton);

        const facebook = document.createElement("a");
        facebook.className = "site-share-link";
        facebook.href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
        facebook.target = "_blank";
        facebook.rel = "noopener noreferrer";
        facebook.setAttribute("aria-label", "Share this page on Facebook");
        facebook.title = "Share on Facebook";
        facebook.innerHTML = '<i class="fab fa-facebook-f" aria-hidden="true"></i>';
        container.appendChild(facebook);

        const whatsapp = document.createElement("a");
        whatsapp.className = "site-share-link";
        whatsapp.href = "https://wa.me/?text=" + encodeURIComponent(document.title + " " + window.location.href);
        whatsapp.target = "_blank";
        whatsapp.rel = "noopener noreferrer";
        whatsapp.setAttribute("aria-label", "Share this page on WhatsApp");
        whatsapp.title = "Share on WhatsApp";
        whatsapp.innerHTML = '<i class="fab fa-whatsapp" aria-hidden="true"></i>';
        container.appendChild(whatsapp);
    });

    document.querySelectorAll(".share-page-button").forEach(function (button) {
        button.addEventListener("click", function () {
            if (navigator.share) {
                navigator.share({ title: document.title, url: window.location.href }).catch(function (error) {
                    if (error.name !== "AbortError") {
                        console.error("Unable to share this page:", error);
                    }
                });
                return;
            }
            window.open(
                "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
                "_blank",
                "noopener,noreferrer"
            );
        });
    });

    function applyLocalTranslation(language) {
        const dictionary = localTranslations[language] || {};
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let textNode;

        while ((textNode = walker.nextNode())) {
            if (textNode.parentElement.closest("script, style")) {
                continue;
            }
            if (typeof textNode.originalEnglish === "undefined") {
                textNode.originalEnglish = textNode.nodeValue;
            }
            const original = textNode.originalEnglish;
            const trimmed = original.trim();
            if (!trimmed) {
                continue;
            }
            const translated = dictionary[trimmed];
            if (translated) {
                const start = original.indexOf(trimmed);
                const end = start + trimmed.length;
                textNode.nodeValue = original.slice(0, start) + translated + original.slice(end);
            } else {
                textNode.nodeValue = original;
            }
        }

        document.title = dictionary[englishTitle] || englishTitle;
    }

    applyLocalTranslation(savedLanguage);
})();
