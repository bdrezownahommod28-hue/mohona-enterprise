
Action: file_editor create /app/mohona-enterprise/readme.txt --file-text "মোহনা এন্টারপ্রাইজ — Static Website
==================================================

প্রোজেক্ট: পানি বিশুদ্ধকরণ ও নলকূপ স্থাপন সংক্রান্ত ব্যবসার ওয়েবসাইট
টেকনোলজি: HTML5, CSS3, Vanilla JS, Swiper.js, ScrollReveal, Remix Icon

ফাইল স্ট্রাকচার
---------------
mohona-enterprise/
├── images/          (ঐচ্ছিক — বর্তমানে Unsplash CDN থেকে ছবি লোড হচ্ছে)
├── index.html       (প্রধান পেজ)
├── style.css        (স্টাইলশিট)
├── script.js        (ইন্টারঅ্যাকশন)
└── readme.txt       (এই ফাইল)

সেকশনসমূহ
-----------
1. Navbar (sticky, scroll-effect, mobile hamburger)
2. Hero — Tagline, Title, CTA, Image card with floating chips
3. Destination — তিনটি জনপ্রিয় সেবা কার্ড (rating সহ)
4. Journey — ৩ ধাপের কীভাবে কাজ করে (dark section)
5. Showcase — About + image + stickers
6. Banner — পরিসংখ্যান (১০+ বছর, ৫০০+ গ্রাহক, ৪.৯ রেটিং, ২৪/৭)
7. Discover — প্যাকেজ ৩টি কার্ড (মূল্যসহ)
8. Reviews — Swiper স্লাইডার (অটোপ্লে, পেজিনেশন)
9. Booking — ফর্ম (নাম, ফোন, সেবা, ঠিকানা, বার্তা) — client-side validation
10. Footer — লোগো, সোশ্যাল লিংক, দ্রুত লিংক, যোগাযোগ, নিউজলেটার

বৈশিষ্ট্য
-----------
- সম্পূর্ণ রেস্পন্সিভ (mobile / tablet / desktop)
- হলুদ মার্ক করা বানান ভুল ঠিক করা হয়েছে (যেমন: সম্পরক → সম্পর্কে, পায়কজ → প্যাকেজ ইত্যাদি)
- বাংলা ফন্ট: Hind Siliguri (Google Fonts) + system fallback (SolaimanLipi, Nikosh, Segoe UI)
- কালার প্যালেট: deep teal + warm cream + amber accent (water/trust theme)
- ScrollReveal এনিমেশন সব সেকশনে
- ফর্ম ভ্যালিডেশন (Booking + Newsletter)
- বছর স্বয়ংক্রিয়ভাবে বাংলা সংখ্যায় দেখা যায়

ব্যবহার
---------
1. ফোল্ডারটি ডাউনলোড করুন এবং Windows-এ G:\usefull file\antigravity\pj web\mohona-enterprise তে রাখুন।
2. index.html ফাইলটি ডাবল-ক্লিক করে যেকোনো ব্রাউজারে খুলুন।
   (অথবা VS Code-এ Live Server এক্সটেনশন দিয়ে চালান)

ছবি কাস্টমাইজেশন
-----------------
বর্তমানে ছবিগুলো Unsplash CDN থেকে লোড হচ্ছে। চাইলে আপনার নিজের ছবি images/ ফোল্ডারে রেখে
index.html-এ <img src=\"...\"> পরিবর্তন করতে পারেন। সাজেস্ট করা ফাইল নাম:
- images/hero-bg.jpg
- images/tube-well.png
- images/water-filter.png
- images/pipeline.png
- images/water-treatment.png
- images/client-1.jpg, client-2.jpg, client-3.jpg

মেনু আইটেম
-----------
হোম | সম্পর্কে | সেবা | প্যাকেজ | রিভিউ | যোগাযোগ
+ \"বুক করুন\" CTA বাটন

লাইসেন্স: ফ্রি ব্যবহারের জন্য — মোহনা এন্টারপ্রাইজ
"
Observation: Create successful: /app/mohona-enterprise/readme.txt