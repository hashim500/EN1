# EN1
موقع الانجليزية السهله تعلم معنا
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes">
    <title>🎯 20 درساً للمحادثة – من الصفر إلى التحدث</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Segoe UI', Tahoma, sans-serif;
            background: #f0f4f8;
            padding: 8px;
            direction: rtl;
            min-height: 100vh;
        }
        .app {
            max-width: 700px;
            margin: 0 auto;
            background: white;
            border-radius: 28px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.08);
            padding: 16px 14px 20px;
        }
        h1 {
            font-size: 22px;
            color: #0f172a;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-bottom: 2px;
        }
        .subtitle {
            text-align: center;
            color: #64748b;
            font-size: 13px;
            margin-bottom: 12px;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 10px;
        }
        .progress-bar {
            background: #e2e8f0;
            border-radius: 20px;
            height: 8px;
            margin-bottom: 12px;
            overflow: hidden;
        }
        .progress-bar .fill {
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            height: 100%;
            width: 0%;
            transition: width 0.6s ease;
            border-radius: 20px;
        }
        .stats {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #64748b;
            margin-bottom: 12px;
            flex-wrap: wrap;
            gap: 4px;
        }
        .stats span {
            background: #f1f5f9;
            padding: 3px 10px;
            border-radius: 20px;
        }
        .lesson-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
            gap: 5px;
            margin-bottom: 12px;
        }
        .lesson-btn {
            background: #f1f5f9;
            border: none;
            border-radius: 12px;
            padding: 6px 4px;
            font-size: 11px;
            font-weight: 600;
            color: #1e293b;
            cursor: pointer;
            transition: 0.2s;
            text-align: center;
        }
        .lesson-btn .num {
            display: block;
            font-size: 16px;
            font-weight: 700;
        }
        .lesson-btn.active {
            background: #1e293b;
            color: white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .lesson-btn.done {
            border: 2px solid #22c55e;
        }
        .lesson-btn:active {
            transform: scale(0.95);
        }
        .content {
            min-height: 280px;
        }
        .card {
            background: #f8fafc;
            border-radius: 16px;
            padding: 14px;
            border: 1px solid #e2e8f0;
            margin-bottom: 8px;
        }
        .card-title {
            font-size: 17px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 6px;
        }
        .card-en {
            font-size: 22px;
            font-weight: 700;
            color: #1e293b;
            direction: ltr;
            text-align: left;
        }
        .card-ar {
            font-size: 17px;
            color: #475569;
            margin-top: 2px;
        }
        .card-example {
            margin-top: 8px;
            padding: 8px 12px;
            background: white;
            border-radius: 10px;
            direction: ltr;
            text-align: left;
            font-size: 16px;
            border-right: 3px solid #3b82f6;
        }
        .card-example small {
            display: block;
            direction: rtl;
            text-align: right;
            font-size: 13px;
            color: #64748b;
            margin-top: 3px;
        }
        .btn-sound {
            background: #dbeafe;
            border: none;
            border-radius: 30px;
            padding: 4px 14px;
            font-size: 13px;
            font-weight: 600;
            color: #1e4b7a;
            cursor: pointer;
            transition: 0.15s;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            margin-top: 6px;
        }
        .btn-sound:active { transform: scale(0.95); }
        .btn-sound.green { background: #d1fae5; color: #065f46; }
        .btn-sound.purple { background: #ede9fe; color: #5b21b6; }
        .btn-sound.pink { background: #fce7f3; color: #9d174d; }

        .conversation {
            background: #f1f5f9;
            border-radius: 12px;
            padding: 10px 12px;
            margin: 4px 0;
            cursor: pointer;
            transition: 0.15s;
        }
        .conversation:active { background: #e2e8f0; }
        .conversation .speaker {
            font-weight: 700;
            color: #1e293b;
            display: inline-block;
            min-width: 60px;
        }
        .conversation .text {
            color: #0f172a;
            direction: ltr;
            text-align: left;
        }
        .conversation .ar {
            direction: rtl;
            text-align: right;
            font-size: 14px;
            color: #64748b;
            margin-top: 2px;
        }
        .conversation .sound-icon {
            float: left;
            font-size: 18px;
            color: #3b82f6;
        }

        .quiz-option {
            display: block;
            width: 100%;
            padding: 10px 14px;
            margin: 4px 0;
            background: white;
            border: 2px solid #e2e8f0;
            border-radius: 10px;
            font-size: 15px;
            text-align: right;
            cursor: pointer;
            transition: 0.15s;
        }
        .quiz-option:active { transform: scale(0.97); }
        .quiz-option.correct { border-color: #22c55e; background: #dcfce7; }
        .quiz-option.wrong { border-color: #ef4444; background: #fee2e2; }
        .quiz-option.disabled { pointer-events: none; opacity: 0.7; }

        .feedback {
            margin-top: 8px;
            padding: 10px 14px;
            border-radius: 10px;
            font-weight: 600;
            display: none;
        }
        .feedback.show { display: block; }
        .feedback.correct { background: #dcfce7; color: #166534; }
        .feedback.wrong { background: #fee2e2; color: #991b1b; }

        .btn-next {
            background: #1e293b;
            color: white;
            border: none;
            border-radius: 30px;
            padding: 8px 24px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.15s;
            margin-top: 10px;
            display: none;
        }
        .btn-next:active { transform: scale(0.95); }
        .btn-next.show { display: inline-block; }

        .footer-note {
            margin-top: 14px;
            text-align: center;
            font-size: 11px;
            color: #94a3b8;
            border-top: 1px solid #e2e8f0;
            padding-top: 10px;
        }
        .badge-level {
            display: inline-block;
            padding: 2px 10px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 600;
            margin-bottom: 6px;
        }
        .level-beginner { background: #dbeafe; color: #1e4b7a; }
        .level-intermediate { background: #d1fae5; color: #065f46; }

        @media (max-width: 480px) {
            .lesson-grid { grid-template-columns: repeat(auto-fill, minmax(60px, 1fr)); }
            .card-en { font-size: 19px; }
            .conversation .speaker { min-width: 45px; font-size: 14px; }
        }
        .hidden { display: none; }
    </style>
</head>
<body>

<div class="app">
    <h1>🎯 20 درساً للمحادثة</h1>
    <div class="subtitle">🗣️ من الصفر → إلى التحدث بثقة</div>

    <div class="progress-bar">
        <div class="fill" id="progressFill"></div>
    </div>
    <div class="stats">
        <span>⭐ <span id="scoreDisplay">0</span></span>
        <span>📖 الدرس <span id="lessonDisplay">1</span>/20</span>
        <span>✅ <span id="correctDisplay">0</span></span>
        <span>🔥 <span id="streakDisplay">0</span></span>
    </div>

    <div class="lesson-grid" id="lessonGrid"></div>

    <div class="content" id="contentArea"></div>

    <div class="footer-note">🔊 اضغط على أي محادثة أو كلمة للاستماع • 20 درساً متدرجة</div>
</div>

<script>
    // ============================================================
    // 1. البيانات: 20 درساً متكاملاً للمحادثة
    // ============================================================
    const lessons = [
        // ===== المستوى 1: المبتدئ (الدروس 1-5) =====
        {
            id: 1,
            title: '👋 التحيات',
            level: 'beginner',
            type: 'conversation',
            vocab: [
                { en: 'Hello', ar: 'مرحباً' },
                { en: 'Hi', ar: 'أهلاً' },
                { en: 'Good morning', ar: 'صباح الخير' },
                { en: 'Good evening', ar: 'مساء الخير' },
                { en: 'Goodbye', ar: 'وداعاً' },
                { en: 'See you later', ar: 'أراك لاحقاً' }
            ],
            dialogs: [
                { speaker: 'A', text: 'Hello!', ar: 'مرحباً!' },
                { speaker: 'B', text: 'Hi! How are you?', ar: 'أهلاً! كيف حالك؟' },
                { speaker: 'A', text: 'I am fine, thank you.', ar: 'أنا بخير، شكراً لك.' },
                { speaker: 'B', text: 'Goodbye!', ar: 'وداعاً!' },
                { speaker: 'A', text: 'See you later!', ar: 'أراك لاحقاً!' }
            ]
        },
        {
            id: 2,
            title: '👤 التعريف بالنفس',
            level: 'beginner',
            type: 'conversation',
            vocab: [
                { en: 'Name', ar: 'اسم' },
                { en: 'My name is...', ar: 'اسمي...' },
                { en: 'I am from...', ar: 'أنا من...' },
                { en: 'I am a student', ar: 'أنا طالب' },
                { en: 'Nice to meet you', ar: 'سررت بلقائك' }
            ],
            dialogs: [
                { speaker: 'A', text: 'What is your name?', ar: 'ما اسمك؟' },
                { speaker: 'B', text: 'My name is Ahmed.', ar: 'اسمي أحمد.' },
                { speaker: 'A', text: 'Where are you from?', ar: 'من أين أنت؟' },
                { speaker: 'B', text: 'I am from Egypt.', ar: 'أنا من مصر.' },
                { speaker: 'A', text: 'Nice to meet you!', ar: 'سررت بلقائك!' },
                { speaker: 'B', text: 'Nice to meet you too!', ar: 'سررت بلقائك أيضاً!' }
            ]
        },
        {
            id: 3,
            title: '🔢 الأرقام والعمر',
            level: 'beginner',
            type: 'conversation',
            vocab: [
                { en: 'One', ar: 'واحد' },
                { en: 'Two', ar: 'اثنان' },
                { en: 'Three', ar: 'ثلاثة' },
                { en: 'Four', ar: 'أربعة' },
                { en: 'Five', ar: 'خمسة' },
                { en: 'How old are you?', ar: 'كم عمرك؟' }
            ],
            dialogs: [
                { speaker: 'A', text: 'How old are you?', ar: 'كم عمرك؟' },
                { speaker: 'B', text: 'I am twenty years old.', ar: 'عمري عشرون سنة.' },
                { speaker: 'A', text: 'I am twenty-five.', ar: 'عمري خمسة وعشرون.' },
                { speaker: 'B', text: 'I have one brother and two sisters.', ar: 'لدي أخ واحد وأختان.' },
                { speaker: 'A', text: 'I have three cats.', ar: 'لدي ثلاث قطط.' }
            ]
        },
        {
            id: 4,
            title: '👨‍👩‍👧‍👦 العائلة',
            level: 'beginner',
            type: 'conversation',
            vocab: [
                { en: 'Father', ar: 'أب' },
                { en: 'Mother', ar: 'أم' },
                { en: 'Brother', ar: 'أخ' },
                { en: 'Sister', ar: 'أخت' },
                { en: 'Family', ar: 'عائلة' },
                { en: 'I love my family', ar: 'أحب عائلتي' }
            ],
            dialogs: [
                { speaker: 'A', text: 'Do you have a family?', ar: 'هل لديك عائلة؟' },
                { speaker: 'B', text: 'Yes, I have a big family.', ar: 'نعم، لدي عائلة كبيرة.' },
                { speaker: 'A', text: 'How many brothers do you have?', ar: 'كم عدد إخوتك؟' },
                { speaker: 'B', text: 'I have one brother and one sister.', ar: 'لدي أخ واحد وأخت واحدة.' },
                { speaker: 'A', text: 'What does your father do?', ar: 'ماذا يعمل والدك؟' },
                { speaker: 'B', text: 'My father is a teacher.', ar: 'والدي معلم.' }
            ]
        },
        {
            id: 5,
            title: '🎨 الألوان',
            level: 'beginner',
            type: 'conversation',
            vocab: [
                { en: 'Red', ar: 'أحمر' },
                { en: 'Blue', ar: 'أزرق' },
                { en: 'Green', ar: 'أخضر' },
                { en: 'Yellow', ar: 'أصفر' },
                { en: 'White', ar: 'أبيض' },
                { en: 'Black', ar: 'أسود' }
            ],
            dialogs: [
                { speaker: 'A', text: 'What is your favorite color?', ar: 'ما هو لونك المفضل؟' },
                { speaker: 'B', text: 'My favorite color is blue.', ar: 'لوني المفضل هو الأزرق.' },
                { speaker: 'A', text: 'What color is your car?', ar: 'ما لون سيارتك؟' },
                { speaker: 'B', text: 'My car is red.', ar: 'سيارتي حمراء.' },
                { speaker: 'A', text: 'I like green and yellow.', ar: 'أحب الأخضر والأصفر.' }
            ]
        },

        // ===== المستوى 2: المبتدئ المتقدم (الدروس 6-10) =====
        {
            id: 6,
            title: '🍕 الطعام والشراب',
            level: 'beginner',
            type: 'conversation',
            vocab: [
                { en: 'Food', ar: 'طعام' },
                { en: 'Water', ar: 'ماء' },
                { en: 'Bread', ar: 'خبز' },
                { en: 'Milk', ar: 'حليب' },
                { en: 'I am hungry', ar: 'أنا جائع' },
                { en: 'I am thirsty', ar: 'أنا عطشان' }
            ],
            dialogs: [
                { speaker: 'A', text: 'Are you hungry?', ar: 'هل أنت جائع؟' },
                { speaker: 'B', text: 'Yes, I am very hungry.', ar: 'نعم، أنا جائع جداً.' },
                { speaker: 'A', text: 'What do you want to eat?', ar: 'ماذا تريد أن تأكل؟' },
                { speaker: 'B', text: 'I want bread and cheese.', ar: 'أريد خبزاً وجبناً.' },
                { speaker: 'A', text: 'Do you want a drink?', ar: 'هل تريد مشروباً؟' },
                { speaker: 'B', text: 'Yes, I want water, please.', ar: 'نعم، أريد ماءً من فضلك.' }
            ]
        },
        {
            id: 7,
            title: '👕 الملابس',
            level: 'beginner',
            type: 'conversation',
            vocab: [
                { en: 'Shirt', ar: 'قميص' },
                { en: 'Pants', ar: 'بنطلون' },
                { en: 'Shoes', ar: 'أحذية' },
                { en: 'Jacket', ar: 'سترة' },
                { en: 'I wear...', ar: 'أرتدي...' }
            ],
            dialogs: [
                { speaker: 'A', text: 'What are you wearing?', ar: 'ماذا ترتدي؟' },
                { speaker: 'B', text: 'I am wearing a blue shirt.', ar: 'أرتدي قميصاً أزرق.' },
                { speaker: 'A', text: 'I like your shoes!', ar: 'أعجبني حذاؤك!' },
                { speaker: 'B', text: 'Thank you! They are new.', ar: 'شكراً! إنها جديدة.' },
                { speaker: 'A', text: 'I wear a jacket because it is cold.', ar: 'أرتدي سترة لأن الجو بارد.' }
            ]
        },
        {
            id: 8,
            title: '⏰ الوقت',
            level: 'beginner',
            type: 'conversation',
            vocab: [
                { en: 'What time is it?', ar: 'كم الساعة؟' },
                { en: 'Morning', ar: 'صباح' },
                { en: 'Afternoon', ar: 'بعد الظهر' },
                { en: 'Evening', ar: 'مساء' },
                { en: 'Night', ar: 'ليل' }
            ],
            dialogs: [
                { speaker: 'A', text: 'What time is it?', ar: 'كم الساعة؟' },
                { speaker: 'B', text: 'It is eight o\'clock.', ar: 'الساعة الثامنة.' },
                { speaker: 'A', text: 'I wake up at seven in the morning.', ar: 'أستيقظ السابعة صباحاً.' },
                { speaker: 'B', text: 'I eat lunch at one o\'clock.', ar: 'أتناول الغداء الواحدة.' },
                { speaker: 'A', text: 'I sleep at eleven at night.', ar: 'أنام الحادية عشرة ليلاً.' }
            ]
        },
        {
            id: 9,
            title: '🌤️ الطقس',
            level: 'beginner',
            type: 'conversation',
            vocab: [
                { en: 'Weather', ar: 'طقس' },
                { en: 'Hot', ar: 'حار' },
                { en: 'Cold', ar: 'بارد' },
                { en: 'Rainy', ar: 'ممطر' },
                { en: 'Sunny', ar: 'مشمس' }
            ],
            dialogs: [
                { speaker: 'A', text: 'How is the weather today?', ar: 'كيف الطقس اليوم؟' },
                { speaker: 'B', text: 'It is very hot today.', ar: 'الجو حار جداً اليوم.' },
                { speaker: 'A', text: 'Do you like the rain?', ar: 'هل تحب المطر؟' },
                { speaker: 'B', text: 'Yes, I love rainy days.', ar: 'نعم، أحب الأيام الممطرة.' },
                { speaker: 'A', text: 'It is sunny and warm.', ar: 'الجو مشمس ودافئ.' }
            ]
        },
        {
            id: 10,
            title: '📅 الروتين اليومي',
            level: 'beginner',
            type: 'conversation',
            vocab: [
                { en: 'Wake up', ar: 'يستيقظ' },
                { en: 'Breakfast', ar: 'فطور' },
                { en: 'School', ar: 'مدرسة' },
                { en: 'Work', ar: 'عمل' },
                { en: 'Dinner', ar: 'عشاء' }
            ],
            dialogs: [
                { speaker: 'A', text: 'What do you do every day?', ar: 'ماذا تفعل كل يوم؟' },
                { speaker: 'B', text: 'I wake up at 7 AM and eat breakfast.', ar: 'أستيقظ السابعة صباحاً وأتناول الفطور.' },
                { speaker: 'A', text: 'What time do you go to school?', ar: 'متى تذهب إلى المدرسة؟' },
                { speaker: 'B', text: 'I go to school at 8 AM.', ar: 'أذهب إلى المدرسة الثامنة صباحاً.' },
                { speaker: 'A', text: 'I eat dinner at 7 PM.', ar: 'أتناول العشاء السابعة مساءً.' }
            ]
        },

        // ===== المستوى 3: المتوسط (الدروس 11-15) =====
        {
            id: 11,
            title: '🛒 التسوق',
            level: 'intermediate',
            type: 'conversation',
            vocab: [
                { en: 'Shop', ar: 'متجر' },
                { en: 'Buy', ar: 'يشتري' },
                { en: 'Sell', ar: 'يبيع' },
                { en: 'Price', ar: 'سعر' },
                { en: 'Expensive', ar: 'غالي' },
                { en: 'Cheap', ar: 'رخيص' }
            ],
            dialogs: [
                { speaker: 'A', text: 'Where is the shop?', ar: 'أين المتجر؟' },
                { speaker: 'B', text: 'It is near the school.', ar: 'إنه بالقرب من المدرسة.' },
                { speaker: 'A', text: 'How much is this shirt?', ar: 'كم سعر هذا القميص؟' },
                { speaker: 'B', text: 'It is twenty dollars.', ar: 'سعره عشرون دولاراً.' },
                { speaker: 'A', text: 'That is expensive. Do you have a cheaper one?', ar: 'هذا غالي. هل لديك واحد أرخص؟' },
                { speaker: 'B', text: 'Yes, this one is fifteen dollars.', ar: 'نعم، هذا بخمسة عشر دولاراً.' }
            ]
        },
        {
            id: 12,
            title: '✈️ السفر',
            level: 'intermediate',
            type: 'conversation',
            vocab: [
                { en: 'Travel', ar: 'يسافر' },
                { en: 'Airport', ar: 'مطار' },
                { en: 'Plane', ar: 'طائرة' },
                { en: 'Ticket', ar: 'تذكرة' },
                { en: 'Hotel', ar: 'فندق' }
            ],
            dialogs: [
                { speaker: 'A', text: 'Where do you want to travel?', ar: 'أين تريد أن تسافر؟' },
                { speaker: 'B', text: 'I want to travel to London.', ar: 'أريد السفر إلى لندن.' },
                { speaker: 'A', text: 'Do you have a ticket?', ar: 'هل لديك تذكرة؟' },
                { speaker: 'B', text: 'Yes, I bought a ticket yesterday.', ar: 'نعم، اشتريت تذكرة أمس.' },
                { speaker: 'A', text: 'I will stay in a hotel near the airport.', ar: 'سأبقى في فندق قريب من المطار.' }
            ]
        },
        {
            id: 13,
            title: '🏥 الصحة',
            level: 'intermediate',
            type: 'conversation',
            vocab: [
                { en: 'Doctor', ar: 'طبيب' },
                { en: 'Medicine', ar: 'دواء' },
                { en: 'Sick', ar: 'مريض' },
                { en: 'Headache', ar: 'صداع' },
                { en: 'Hospital', ar: 'مستشفى' }
            ],
            dialogs: [
                { speaker: 'A', text: 'I am not feeling well.', ar: 'أنا لا أشعر بحالة جيدة.' },
                { speaker: 'B', text: 'Do you have a headache?', ar: 'هل لديك صداع؟' },
                { speaker: 'A', text: 'Yes, and I am very tired.', ar: 'نعم، وأنا متعب جداً.' },
                { speaker: 'B', text: 'You should see a doctor.', ar: 'يجب أن تذهب إلى طبيب.' },
                { speaker: 'A', text: 'I will go to the hospital.', ar: 'سأذهب إلى المستشفى.' }
            ]
        },
        {
            id: 14,
            title: '🏫 المدرسة',
            level: 'intermediate',
            type: 'conversation',
            vocab: [
                { en: 'Teacher', ar: 'معلم' },
                { en: 'Student', ar: 'طالب' },
                { en: 'Subject', ar: 'مادة' },
                { en: 'Exam', ar: 'امتحان' },
                { en: 'Homework', ar: 'واجب' }
            ],
            dialogs: [
                { speaker: 'A', text: 'What is your favorite subject?', ar: 'ما هي مادتك المفضلة؟' },
                { speaker: 'B', text: 'I love English and Science.', ar: 'أحب الإنجليزية والعلوم.' },
                { speaker: 'A', text: 'Do you have an exam tomorrow?', ar: 'هل لديك امتحان غداً؟' },
                { speaker: 'B', text: 'Yes, I have a math exam.', ar: 'نعم، لدي امتحان رياضيات.' },
                { speaker: 'A', text: 'I need to do my homework.', ar: 'أحتاج أن أنجز واجبي.' }
            ]
        },
        {
            id: 15,
            title: '🎨 الهوايات',
            level: 'intermediate',
            type: 'conversation',
            vocab: [
                { en: 'Hobby', ar: 'هواية' },
                { en: 'Music', ar: 'موسيقى' },
                { en: 'Sports', ar: 'رياضة' },
                { en: 'Reading', ar: 'قراءة' },
                { en: 'Painting', ar: 'رسم' }
            ],
            dialogs: [
                { speaker: 'A', text: 'What are your hobbies?', ar: 'ما هي هواياتك؟' },
                { speaker: 'B', text: 'I like playing football.', ar: 'أحب لعب كرة القدم.' },
                { speaker: 'A', text: 'Do you like music?', ar: 'هل تحب الموسيقى؟' },
                { speaker: 'B', text: 'Yes, I love pop music.', ar: 'نعم، أحب موسيقى البوب.' },
                { speaker: 'A', text: 'I enjoy painting in my free time.', ar: 'أستمتع بالرسم في وقت فراغي.' }
            ]
        },

        // ===== المستوى 4: المتوسط المتقدم (الدروس 16-20) =====
        {
            id: 16,
            title: '💼 العمل',
            level: 'intermediate',
            type: 'conversation',
            vocab: [
                { en: 'Job', ar: 'وظيفة' },
                { en: 'Colleague', ar: 'زميل عمل' },
                { en: 'Office', ar: 'مكتب' },
                { en: 'Meeting', ar: 'اجتماع' },
                { en: 'Salary', ar: 'راتب' }
            ],
            dialogs: [
                { speaker: 'A', text: 'What is your job?', ar: 'ما هي وظيفتك؟' },
                { speaker: 'B', text: 'I am an engineer.', ar: 'أنا مهندس.' },
                { speaker: 'A', text: 'Where do you work?', ar: 'أين تعمل؟' },
                { speaker: 'B', text: 'I work in a big company.', ar: 'أعمل في شركة كبيرة.' },
                { speaker: 'A', text: 'I have a meeting at 10 AM.', ar: 'لدي اجتماع الساعة العاشرة صباحاً.' }
            ]
        },
        {
            id: 17,
            title: '🚀 المستقبل',
            level: 'intermediate',
            type: 'conversation',
            vocab: [
                { en: 'Future', ar: 'مستقبل' },
                { en: 'Dream', ar: 'حلم' },
                { en: 'Plan', ar: 'خطة' },
                { en: 'Hope', ar: 'أمل' },
                { en: 'Success', ar: 'نجاح' }
            ],
            dialogs: [
                { speaker: 'A', text: 'What are your plans for the future?', ar: 'ما هي خططك للمستقبل؟' },
                { speaker: 'B', text: 'I want to become a doctor.', ar: 'أريد أن أصبح طبيباً.' },
                { speaker: 'A', text: 'I hope to travel around the world.', ar: 'آمل أن أسافر حول العالم.' },
                { speaker: 'B', text: 'My dream is to be successful.', ar: 'حلمي أن أكون ناجحاً.' }
            ]
        },
        {
            id: 18,
            title: '💻 التكنولوجيا',
            level: 'intermediate',
            type: 'conversation',
            vocab: [
                { en: 'Computer', ar: 'كمبيوتر' },
                { en: 'Phone', ar: 'هاتف' },
                { en: 'Internet', ar: 'إنترنت' },
                { en: 'Application', ar: 'تطبيق' },
                { en: 'Social media', ar: 'وسائل التواصل' }
            ],
            dialogs: [
                { speaker: 'A', text: 'Do you have a computer?', ar: 'هل لديك كمبيوتر؟' },
                { speaker: 'B', text: 'Yes, I have a laptop.', ar: 'نعم، لدي حاسوب محمول.' },
                { speaker: 'A', text: 'I use the internet every day.', ar: 'أستخدم الإنترنت كل يوم.' },
                { speaker: 'B', text: 'I spend time on social media.', ar: 'أقضي وقتاً على وسائل التواصل.' }
            ]
        },
        {
            id: 19,
            title: '🌍 البيئة',
            level: 'intermediate',
            type: 'conversation',
            vocab: [
                { en: 'Environment', ar: 'بيئة' },
                { en: 'Recycle', ar: 'يعيد تدوير' },
                { en: 'Clean', ar: 'نظيف' },
                { en: 'Pollution', ar: 'تلوث' },
                { en: 'Green', ar: 'أخضر' }
            ],
            dialogs: [
                { speaker: 'A', text: 'We need to protect the environment.', ar: 'نحن بحاجة لحماية البيئة.' },
                { speaker: 'B', text: 'I always recycle plastic.', ar: 'أنا دائماً أعيد تدوير البلاستيك.' },
                { speaker: 'A', text: 'The city is very clean now.', ar: 'المدينة نظيفة جداً الآن.' },
                { speaker: 'B', text: 'We need less pollution.', ar: 'نحتاج إلى تلوث أقل.' }
            ]
        },
        {
            id: 20,
            title: '🌟 الأحلام والأهداف',
            level: 'intermediate',
            type: 'conversation',
            vocab: [
                { en: 'Goal', ar: 'هدف' },
                { en: 'Dream', ar: 'حلم' },
                { en: 'Inspire', ar: 'يلهم' },
                { en: 'Achieve', ar: 'يحقق' },
                { en: 'Motivate', ar: 'يحفز' }
            ],
            dialogs: [
                { speaker: 'A', text: 'What is your biggest goal?', ar: 'ما هو هدفك الأكبر؟' },
                { speaker: 'B', text: 'My goal is to speak English fluently.', ar: 'هدفي هو التحدث بالإنجليزية بطلاقة.' },
                { speaker: 'A', text: 'You can achieve your dreams.', ar: 'يمكنك تحقيق أحلامك.' },
                { speaker: 'B', text: 'Thank you for the motivation!', ar: 'شكراً لك على التحفيز!' }
            ]
        }
    ];

    // ============================================================
    // 2. حالة التطبيق
    // ============================================================
    let currentLesson = 0;
    let currentStep = 0;
    let score = 0;
    let correctAnswers = 0;
    let streak = 0;
    let quizAnswered = false;
    let completedLessons = new Set();

    // ============================================================
    // 3. عناصر DOM
    // ============================================================
    const contentArea = document.getElementById('contentArea');
    const lessonGrid = document.getElementById('lessonGrid');
    const progressFill = document.getElementById('progressFill');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const lessonDisplay = document.getElementById('lessonDisplay');
    const correctDisplay = document.getElementById('correctDisplay');
    const streakDisplay = document.getElementById('streakDisplay');

    // ============================================================
    // 4. وظائف النطق
    // ============================================================
    function speak(text, lang = 'en-US') {
        if (!window.speechSynthesis) {
            alert('متصفحك لا يدعم النطق الصوتي. حاول استخدام Chrome.');
            return;
        }
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.85;
        utterance.pitch = 1;
        utterance.volume = 1;
        window.speechSynthesis.speak(utterance);
    }

    // ============================================================
    // 5. بناء شبكة الدروس
    // ============================================================
    function buildLessonGrid() {
        lessonGrid.innerHTML = '';
        lessons.forEach((lesson, index) => {
            const btn = document.createElement('button');
            btn.className = 'lesson-btn';
            if (index === currentLesson) btn.classList.add('active');
            if (completedLessons.has(index)) btn.classList.add('done');
            const levelEmoji = lesson.level === 'beginner' ? '🟢' : '🟠';
            btn.innerHTML = `<span class="num">${index + 1}</span> ${levelEmoji}`;
            btn.title = lesson.title;
            btn.addEventListener('click', () => {
                currentLesson = index;
                currentStep = 0;
                quizAnswered = false;
                buildLessonGrid();
                renderLesson(index);
                updateStats();
            });
            lessonGrid.appendChild(btn);
        });
    }

    // ============================================================
    // 6. عرض الدرس
    // ============================================================
    function renderLesson(index) {
        const lesson = lessons[index];
        if (!lesson) return;
        contentArea.innerHTML = '';
        currentStep = 0;
        quizAnswered = false;

        const header = document.createElement('div');
        header.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:6px;';
        header.innerHTML = `
            <div>
                <span class="badge-level ${lesson.level === 'beginner' ? 'level-beginner' : 'level-intermediate'}">
                    ${lesson.level === 'beginner' ? '🟢 مبتدئ' : '🟠 متوسط'}
                </span>
                <span style="font-size:20px;font-weight:700;color:#0f172a;margin-right:6px;">${lesson.title}</span>
            </div>
            <span style="font-size:13px;color:#64748b;">الدرس ${index+1}/20</span>
        `;
        contentArea.appendChild(header);

        // عرض المفردات
        if (lesson.vocab && lesson.vocab.length > 0) {
            const vocabCard = document.createElement('div');
            vocabCard.className = 'card';
            vocabCard.innerHTML = `<div style="font-weight:700;color:#0f172a;margin-bottom:6px;">📖 مفردات الدرس:</div>`;
            lesson.vocab.forEach(v => {
                const div = document.createElement('div');
                div.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:4px 0;border-bottom:1px solid #e2e8f0;';
                div.innerHTML = `
                    <span style="direction:ltr;font-weight:600;">${v.en}</span>
                    <span style="color:#475569;">${v.ar}</span>
                    <button class="btn-sound" onclick="speak('${v.en}')" style="padding:2px 10px;font-size:12px;">🔊</button>
                `;
                vocabCard.appendChild(div);
            });
            contentArea.appendChild(vocabCard);
        }

        // عرض المحادثات
        if (lesson.dialogs && lesson.dialogs.length > 0) {
            const dialogCard = document.createElement('div');
            dialogCard.className = 'card';
            dialogCard.innerHTML = `<div style="font-weight:700;color:#0f172a;margin-bottom:6px;">💬 المحادثة:</div>`;
            lesson.dialogs.forEach((d, i) => {
                const div = document.createElement('div');
                div.className = 'conversation';
                div.innerHTML = `
                    <div>
                        <span class="speaker">${d.speaker}:</span>
                        <span class="text">${d.text}</span>
                        <span class="sound-icon">🔊</span>
                    </div>
                    <div class="ar">${d.ar}</div>
                `;
                div.addEventListener('click', () => speak(d.text));
                dialogCard.appendChild(div);
            });
            contentArea.appendChild(dialogCard);

            // زر استماع للمحادثة كاملة
            const fullBtn = document.createElement('button');
            fullBtn.className = 'btn-sound purple';
            fullBtn.textContent = '🔊 استمع للمحادثة كاملة';
            fullBtn.addEventListener('click', () => {
                lesson.dialogs.forEach((d, i) => {
                    setTimeout(() => speak(d.text), i * 1500);
                });
            });
            dialogCard.appendChild(fullBtn);
        }

        // زر إكمال الدرس
        if (!completedLessons.has(index)) {
            const completeBtn = document.createElement('button');
            completeBtn.className = 'btn-sound green';
            completeBtn.textContent = '✅ إكمال الدرس';
            completeBtn.style.cssText = 'margin-top:10px;width:100%;justify-content:center;padding:10px;font-size:16px;';
            completeBtn.addEventListener('click', () => {
                completedLessons.add(index);
                score += 20;
                streak++;
                buildLessonGrid();
                updateStats();
                completeBtn.textContent = '✅ تم الإكمال!';
                completeBtn.disabled = true;
                completeBtn.style.opacity = '0.7';
                // تشغيل صوت تشجيعي
                speak('Great job! You completed the lesson!');
            });
            contentArea.appendChild(completeBtn);
        } else {
            const doneMsg = document.createElement('div');
            doneMsg.className = 'card';
            doneMsg.style.cssText = 'text-align:center;background:#dcfce7;border-color:#22c55e;';
            doneMsg.innerHTML = '✅ <strong>تم إكمال هذا الدرس!</strong> 🎉';
            contentArea.appendChild(doneMsg);
        }

        // أزرار التنقل بين الدروس
        const navDiv = document.createElement('div');
        navDiv.style.cssText = 'display:flex;gap:8px;margin-top:12px;flex-wrap:wrap;';
        if (index > 0) {
            const prevBtn = document.createElement('button');
            prevBtn.className = 'btn-sound';
            prevBtn.textContent = '⬅️ الدرس السابق';
            prevBtn.addEventListener('click', () => {
                currentLesson = index - 1;
                currentStep = 0;
                renderLesson(currentLesson);
                buildLessonGrid();
                updateStats();
            });
            navDiv.appendChild(prevBtn);
        }
        if (index < lessons.length - 1) {
            const nextBtn = document.createElement('button');
            nextBtn.className = 'btn-sound green';
            nextBtn.textContent = 'الدرس التالي ➡️';
            nextBtn.addEventListener('click', () => {
                currentLesson = index + 1;
                currentStep = 0;
                renderLesson(currentLesson);
                buildLessonGrid();
                updateStats();
            });
            navDiv.appendChild(nextBtn);
        }
        contentArea.appendChild(navDiv);

        updateStats();
    }

    // ============================================================
    // 7. تحديث الإحصائيات
    // ============================================================
    function updateStats() {
        scoreDisplay.textContent = score;
        lessonDisplay.textContent = currentLesson + 1;
        correctDisplay.textContent = completedLessons.size;
        streakDisplay.textContent = streak;
        const progress = (completedLessons.size / lessons.length) * 100;
        progressFill.style.width = progress + '%';
    }

    // ============================================================
    // 8. بدء التطبيق
    // ============================================================
    function init() {
        buildLessonGrid();
        renderLesson(currentLesson);
        updateStats();
        window.speak = speak;
        console.log('✅ 20 درساً للمحادثة جاهز!');
    }

    init();
</script>
</body>
</html>