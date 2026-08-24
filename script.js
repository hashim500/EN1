const lessons = [
    { title: { ar: 'التحيات', en: 'Greetings' }, vocab: [['Hello', 'مرحبًا'], ['Good morning', 'صباح الخير'], ['Goodbye', 'وداعًا']], dialogs: [['A', 'Hello! How are you?', 'مرحبًا! كيف حالك؟'], ['B', 'I am fine, thank you.', 'أنا بخير، شكرًا لك.']] },
    { title: { ar: 'التعريف بالنفس', en: 'Introducing yourself' }, vocab: [['My name is...', 'اسمي...'], ['I am from...', 'أنا من...'], ['Nice to meet you', 'سررت بلقائك']], dialogs: [['A', 'What is your name?', 'ما اسمك؟'], ['B', 'My name is Sara.', 'اسمي سارة.']] },
    { title: { ar: 'الطعام والشراب', en: 'Food and drinks' }, vocab: [['Water', 'ماء'], ['Bread', 'خبز'], ['I am hungry', 'أنا جائع']], dialogs: [['A', 'Are you hungry?', 'هل أنت جائع؟'], ['B', 'Yes, I want some food.', 'نعم، أريد بعض الطعام.']] },
    { title: { ar: 'الوقت والروتين', en: 'Time and routine' }, vocab: [['Morning', 'صباح'], ['Wake up', 'يستيقظ'], ['Every day', 'كل يوم']], dialogs: [['A', 'What time do you wake up?', 'متى تستيقظ؟'], ['B', 'I wake up at seven.', 'أستيقظ في السابعة.']] },
    { title: { ar: 'التسوق', en: 'Shopping' }, vocab: [['Price', 'سعر'], ['Cheap', 'رخيص'], ['I would like...', 'أود...']], dialogs: [['A', 'How much is this?', 'كم سعر هذا؟'], ['B', 'It is ten dollars.', 'سعره عشرة دولارات.']] },
    { title: { ar: 'السفر', en: 'Travel' }, vocab: [['Airport', 'مطار'], ['Ticket', 'تذكرة'], ['Hotel', 'فندق']], dialogs: [['A', 'Where is the airport?', 'أين المطار؟'], ['B', 'It is near the hotel.', 'إنه بالقرب من الفندق.']] },
    { title: { ar: 'العمل', en: 'Work' }, vocab: [['Job', 'وظيفة'], ['Office', 'مكتب'], ['Meeting', 'اجتماع']], dialogs: [['A', 'Where do you work?', 'أين تعمل؟'], ['B', 'I work in an office.', 'أعمل في مكتب.']] },
    { title: { ar: 'الهوايات', en: 'Hobbies' }, vocab: [['Music', 'موسيقى'], ['Reading', 'قراءة'], ['Sports', 'رياضة']], dialogs: [['A', 'What are your hobbies?', 'ما هواياتك؟'], ['B', 'I like reading.', 'أحب القراءة.']] },
    { title: { ar: 'الصحة', en: 'Health' }, vocab: [['Doctor', 'طبيب'], ['Medicine', 'دواء'], ['Tired', 'متعب']], dialogs: [['A', 'I do not feel well.', 'لا أشعر أنني بخير.'], ['B', 'You should see a doctor.', 'يجب أن تذهب إلى طبيب.']] },
    { title: { ar: 'الأهداف والأحلام', en: 'Goals and dreams' }, vocab: [['Goal', 'هدف'], ['Dream', 'حلم'], ['Success', 'نجاح']], dialogs: [['A', 'What is your goal?', 'ما هدفك؟'], ['B', 'My goal is to speak English.', 'هدفي أن أتحدث الإنجليزية.']] },
    { title: { ar: 'العائلة', en: 'Family' }, vocab: [['Father', 'أب'], ['Mother', 'أم'], ['Sister', 'أخت']], dialogs: [['A', 'Do you have a big family?', 'هل لديك عائلة كبيرة؟'], ['B', 'Yes, I have one sister.', 'نعم، لدي أخت واحدة.']] },
    { title: { ar: 'الألوان', en: 'Colors' }, vocab: [['Red', 'أحمر'], ['Blue', 'أزرق'], ['Green', 'أخضر']], dialogs: [['A', 'What is your favorite color?', 'ما لونك المفضل؟'], ['B', 'My favorite color is blue.', 'لوني المفضل هو الأزرق.']] },
    { title: { ar: 'الملابس', en: 'Clothes' }, vocab: [['Shirt', 'قميص'], ['Shoes', 'أحذية'], ['Jacket', 'سترة']], dialogs: [['A', 'What are you wearing?', 'ماذا ترتدي؟'], ['B', 'I am wearing a blue shirt.', 'أرتدي قميصًا أزرق.']] },
    { title: { ar: 'الطقس', en: 'Weather' }, vocab: [['Sunny', 'مشمس'], ['Rainy', 'ممطر'], ['Cold', 'بارد']], dialogs: [['A', 'How is the weather today?', 'كيف الطقس اليوم؟'], ['B', 'It is sunny and warm.', 'الجو مشمس ودافئ.']] },
    { title: { ar: 'المدرسة', en: 'School' }, vocab: [['Teacher', 'معلم'], ['Student', 'طالب'], ['Homework', 'واجب']], dialogs: [['A', 'What is your favorite subject?', 'ما مادتك المفضلة؟'], ['B', 'I love English.', 'أحب الإنجليزية.']] },
    { title: { ar: 'التكنولوجيا', en: 'Technology' }, vocab: [['Computer', 'حاسوب'], ['Phone', 'هاتف'], ['Internet', 'إنترنت']], dialogs: [['A', 'Do you use the internet every day?', 'هل تستخدم الإنترنت كل يوم؟'], ['B', 'Yes, I use it for learning.', 'نعم، أستخدمه للتعلم.']] },
    { title: { ar: 'البيئة', en: 'The environment' }, vocab: [['Clean', 'نظيف'], ['Recycle', 'يعيد التدوير'], ['Pollution', 'تلوث']], dialogs: [['A', 'How can we help the environment?', 'كيف نساعد البيئة؟'], ['B', 'We can recycle plastic.', 'يمكننا إعادة تدوير البلاستيك.']] },
    { title: { ar: 'المستقبل', en: 'The future' }, vocab: [['Future', 'مستقبل'], ['Plan', 'خطة'], ['Hope', 'أمل']], dialogs: [['A', 'What are your plans for the future?', 'ما خططك للمستقبل؟'], ['B', 'I hope to travel and learn.', 'آمل أن أسافر وأتعلم.']] },
    { title: { ar: 'النجاح والتحفيز', en: 'Success and motivation' }, vocab: [['Inspire', 'يلهم'], ['Achieve', 'يحقق'], ['Motivate', 'يحفز']], dialogs: [['A', 'Can I achieve my dreams?', 'هل أستطيع تحقيق أحلامي؟'], ['B', 'Yes, keep practicing every day.', 'نعم، واصل التدريب كل يوم.']] },
    { title: { ar: 'المحادثة اليومية', en: 'Daily conversation' }, vocab: [['Please', 'من فضلك'], ['Thank you', 'شكرًا لك'], ['You are welcome', 'على الرحب والسعة']], dialogs: [['A', 'Can you help me, please?', 'هل يمكنك مساعدتي من فضلك؟'], ['B', 'Of course. You are welcome.', 'بالطبع. على الرحب والسعة.']] }
];

const magicLists = [
    { title: { ar: '🏠 عالمي الصغير', en: '🏠 My little world' }, words: [['House', 'منزل', 'I live in a house.'], ['Room', 'غرفة', 'My room is clean.'], ['Door', 'باب', 'Close the door, please.'], ['Window', 'نافذة', 'Open the window.'], ['Book', 'كتاب', 'I read a book.'], ['Water', 'ماء', 'I drink water.']] },
    { title: { ar: '👨‍👩‍👧‍👦 أبطال قصتي', en: '👨‍👩‍👧‍👦 My family' }, words: [['Mother', 'أم', 'My mother is kind.'], ['Father', 'أب', 'My father works hard.'], ['Brother', 'أخ', 'I play with my brother.'], ['Sister', 'أخت', 'My sister is young.'], ['Friend', 'صديق', 'He is my friend.'], ['Family', 'عائلة', 'I love my family.']] },
    { title: { ar: '🏃 الحركة والحياة', en: '🏃 Action and life' }, words: [['Go', 'يذهب', 'I go to work.'], ['Come', 'يأتي', 'Come here, please.'], ['Take', 'يأخذ', 'I take a pen.'], ['Give', 'يعطي', 'Give me the book.'], ['Eat', 'يأكل', 'I eat bread.'], ['Sleep', 'ينام', 'I sleep at night.']] },
    { title: { ar: '🌡️ صفاتي ومشاعري', en: '🌡️ Feelings and qualities' }, words: [['Good', 'جيد', 'The food is good.'], ['Big', 'كبير', 'The house is big.'], ['Hot', 'ساخن', 'The water is hot.'], ['Cold', 'بارد', 'The milk is cold.'], ['Happy', 'سعيد', 'I am happy today.'], ['Tired', 'متعب', 'I am tired tonight.']] },
    { title: { ar: '🕰️ الزمان والمكان', en: '🕰️ Time and place' }, words: [['Today', 'اليوم', 'I am happy today.'], ['Tomorrow', 'غدًا', 'I will work tomorrow.'], ['Morning', 'صباح', 'Good morning!'], ['Night', 'ليل', 'I sleep at night.'], ['Here', 'هنا', 'Come here, please.'], ['There', 'هناك', 'The book is there.']] },
    { title: { ar: '🔗 أدوات الربط', en: '🔗 Connectors' }, words: [['And', 'و', 'I eat bread and milk.'], ['But', 'لكن', 'I am tired, but I work.'], ['Because', 'لأن', 'I eat because I am hungry.'], ['If', 'إذا', 'If you come, I am happy.'], ['When', 'عندما', 'I eat when I am hungry.'], ['With', 'مع', 'I go with my friend.']] },
    { title: { ar: '🧠 الضمائر والمحددات', en: '🧠 Pronouns and determiners' }, words: [['I', 'أنا', 'I am here.'], ['You', 'أنت / أنتم', 'You are my friend.'], ['He', 'هو', 'He is a man.'], ['She', 'هي', 'She is a girl.'], ['We', 'نحن', 'We are happy.'], ['They', 'هم', 'They are my friends.']] }
];

const translations = {
    ar: { eyebrow: 'تعلم خطوة بخطوة', title: 'الإنجليزية السهلة', subtitle: 'دروس محادثة عملية من الصفر إلى التحدث بثقة', progress: 'تقدمك', completed: 'دروس مكتملة', points: 'نقطة', footer: 'اضغط على زر السماعة لسماع النطق الإنجليزي', vocabulary: 'مفردات الدرس', conversation: 'محادثة قصيرة', listen: 'استمع', complete: 'إكمال الدرس', completedLesson: 'تم إكمال هذا الدرس', previous: 'الدرس السابق', next: 'الدرس التالي', beginner: 'مبتدئ', lesson: 'الدرس', magicEyebrow: 'مفردات أساسية', magicTitle: '🧙 المفتاح السحري', magicNote: 'كلمة إنجليزية مع جملة بسيطة وترجمة عربية ونطق صوتي', word: 'كلمة', sentence: 'جملة', meaning: 'معنى الجملة', lessonsTitle: 'دروس المحادثة' },
    en: { eyebrow: 'Learn step by step', title: 'Easy English', subtitle: 'Practical conversation lessons from zero to confidence', progress: 'Your progress', completed: 'lessons complete', points: 'points', footer: 'Press the speaker button to hear English pronunciation', vocabulary: 'Lesson vocabulary', conversation: 'Short conversation', listen: 'Listen', complete: 'Complete lesson', completedLesson: 'This lesson is complete', previous: 'Previous lesson', next: 'Next lesson', beginner: 'Beginner', lesson: 'Lesson', magicEyebrow: 'Essential vocabulary', magicTitle: '🧙 The Magic Key', magicNote: 'An English word with a simple sentence, Arabic translation, and audio', word: 'Word', sentence: 'Sentence', meaning: 'Sentence meaning', lessonsTitle: 'Conversation lessons' }
};

let language = localStorage.getItem('en1-language') || 'ar';
let currentLesson = 0;
let completed = new Set(JSON.parse(localStorage.getItem('en1-completed') || '[]'));

const $ = (id) => document.getElementById(id);

function speak(text) {
    if (!text || !('speechSynthesis' in window)) return;
    text = String(text || '').trim();
    if (!text) return;
    
    // إيقاف أي كلام جاري
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    // معالجة الأخطاء
    utterance.onerror = (event) => {
        console.warn('Speech error:', event.error);
    };
    
    utterance.onstart = () => {
        console.log('Speaking:', text);
    };
    
    utterance.onend = () => {
        console.log('Speech complete');
    };
    
    try {
        // إعطاء الأولوية لصوت إنجليزي محلي إن أمكن
        const voices = window.speechSynthesis.getVoices();
        const englishVoice = voices.find(voice => voice.lang.startsWith('en'));
        if (englishVoice) {
            utterance.voice = englishVoice;
        }
        
        window.speechSynthesis.speak(utterance);
    } catch (error) {
        console.error('Speech synthesis error:', error);
    }
}

function renderMagic() {
    const t = translations[language];
    const activeList = magicLists[renderMagic.activeIndex || 0];
    $('wordTotal').textContent = `${activeList.words.length} ${language === 'ar' ? 'كلمة' : 'words'}`;
    $('magicTabs').innerHTML = magicLists.map((list, index) => `<button class="magic-tab ${index === (renderMagic.activeIndex || 0) ? 'active' : ''}" data-magic-list="${index}" type="button" role="tab">${list.title[language]} <span class="count">${list.words.length}</span></button>`).join('');
    
    $('wordList').innerHTML = activeList.words.map(([en, ar, sentence]) => {
        en = String(en || '').trim();
        ar = String(ar || '').trim();
        sentence = String(sentence || '').trim();
        return `<article class="word-card"><div class="word-row"><span class="word-en">${en}</span><span class="word-ar">${language === 'ar' ? ar : en}</span><div class="word-actions"><button class="sound-btn word-sound" type="button" data-speak="${en}">🔊 ${t.word}</button><button class="sound-btn word-sound" type="button" data-speak="${sentence}">🔊 ${t.sentence}</button></div></div><div class="sentence-row"><span class="sentence-text">📖 ${sentence}<small>(${t.meaning}: ${ar})</small></span></div></article>`;
    }).join('');
    
    document.querySelectorAll('[data-magic-list]').forEach((button) => button.addEventListener('click', () => { renderMagic.activeIndex = Number(button.dataset.magicList); renderMagic(); }));
    document.querySelectorAll('#wordList [data-speak]').forEach((button) => button.addEventListener('click', () => speak(button.dataset.speak)));
}

function applyLanguage() {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach((element) => { element.textContent = translations[language][element.dataset.i18n]; });
    $('languageToggle').textContent = language === 'ar' ? 'English' : 'العربية';
    renderMagic();
    renderLessons();
    renderLesson();
}

function renderLessons() {
    $('lessonGrid').innerHTML = lessons.map((lesson, index) => `<button class="lesson-btn ${index === currentLesson ? 'active' : ''} ${completed.has(index) ? 'done' : ''}" data-lesson="${index}" type="button"><span class="num">${index + 1}</span><span class="mark">${completed.has(index) ? '✓' : translations[language].beginner}</span></button>`).join('');
    document.querySelectorAll('[data-lesson]').forEach((button) => button.addEventListener('click', () => { currentLesson = Number(button.dataset.lesson); renderLessons(); renderLesson(); }));
}

function renderLesson() {
    const lesson = lessons[currentLesson];
    const t = translations[language];
    
    // معالجة vocab بشكل آمن
    const vocabHTML = lesson.vocab.map(([en, ar]) => {
        en = String(en || '').trim();
        ar = String(ar || '').trim();
        return `<div class="vocab-row"><span class="english">${en}</span><span class="translation">${language === 'ar' ? ar : en}</span><button class="sound-btn" type="button" data-speak="${en}" aria-label="${t.listen}">🔊</button></div>`;
    }).join('');
    
    // معالجة dialogs بشكل آمن
    const dialogsHTML = lesson.dialogs.map(([speaker, text, ar]) => {
        speaker = String(speaker || '').trim();
        text = String(text || '').trim();
        ar = String(ar || '').trim();
        return `<button class="dialog" type="button" data-speak="${text}"><span class="speaker">${speaker}:</span> <span class="text">${text}</span><span class="ar">${language === 'ar' ? ar : text}</span></button>`;
    }).join('');
    
    $('contentArea').innerHTML = `<div class="lesson-header"><div><span class="badge">${t.beginner}</span><h2 class="lesson-title">${lesson.title[language]}</h2></div><span class="lesson-count">${t.lesson} ${currentLesson + 1}/${lessons.length}</span></div><div class="card"><h2>${t.vocabulary}</h2>${vocabHTML}</div><div class="card"><h2>${t.conversation}</h2>${dialogsHTML}</div>${completed.has(currentLesson) ? `<div class="done-message">✓ ${t.completedLesson}</div>` : `<button class="action-btn complete" id="completeLesson" type="button">✓ ${t.complete}</button>`}<div class="nav-row">${currentLesson ? `<button class="action-btn" id="previousLesson" type="button">← ${t.previous}</button>` : '<span></span>'}${currentLesson < lessons.length - 1 ? `<button class="action-btn" id="nextLesson" type="button">${t.next} →</button>` : '<span></span>'}</div>`;
    
    document.querySelectorAll('[data-speak]').forEach((button) => button.addEventListener('click', () => speak(button.dataset.speak)));
    $('completeLesson')?.addEventListener('click', () => { completed.add(currentLesson); localStorage.setItem('en1-completed', JSON.stringify([...completed])); renderLessons(); renderLesson(); });
    $('previousLesson')?.addEventListener('click', () => { currentLesson -= 1; renderLessons(); renderLesson(); });
    $('nextLesson')?.addEventListener('click', () => { currentLesson += 1; renderLessons(); renderLesson(); });
    updateProgress();
}

function updateProgress() {
    const percent = Math.round((completed.size / lessons.length) * 100);
    $('progressFill').style.width = `${percent}%`;
    $('progressText').textContent = `${percent}%`;
    $('completedDisplay').textContent = completed.size;
    $('scoreDisplay').textContent = completed.size * 20;
    document.querySelector('.progress-bar').setAttribute('aria-valuenow', percent);
}

$('languageToggle').addEventListener('click', () => { language = language === 'ar' ? 'en' : 'ar'; localStorage.setItem('en1-language', language); applyLanguage(); });

// تحميل الأصوات المتاحة
if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = () => {
        console.log('Voices loaded:', speechSynthesis.getVoices().length);
    };
    // في Firefox قد نحتاج إلى طلب الأصوات مسبقاً
    speechSynthesis.getVoices();
}

applyLanguage();