// بيانات الروابط
        const linksData = [
            { id: 'link1', category: 'My library', target: '_blank', url: 'window.html' }
        ];

        // التأكد من تحميل DOM قبل تنفيذ السكربت
        document.addEventListener('DOMContentLoaded', () => {
            // إضافة البيانات إلى العناصر
            linksData.forEach(link => {
                const label = document.getElementById(link.id);
                if (label) { // التأكد من وجود العنصر
                    label.setAttribute('data-category', link.category);
                    label.setAttribute('data-target', link.target);
                    label.setAttribute('data-url', link.url);
                    
                    // إضافة حدث click لتوجيه المستخدم إلى الرابط وعرض البيانات في الـ console
                    label.addEventListener('click', (e) => {
                        console.log(`تم النقر على العنصر: ${label.textContent}`);
                        console.log(`الفئة: ${link.category}`);
                        console.log(`الرابط: ${link.url}`);
                        
                        // توجيه المستخدم إلى الرابط بناءً على القيمة في data-target
                        if (link.target === '_blank') {
                            window.open(link.url, '_blank');
                        } else {
                            window.location.href = link.url;
                        }
                    });
                } else {
                    console.error(`العنصر ذو المعرف ${link.id} غير موجود`);
                }
            });
        });




document.addEventListener('DOMContentLoaded', function() {
    // تعريف الكائن الذي يحتوي على الكلاسات ونصوص الـ title المقابلة
    const titleMap = {
        't1': 'Close',
        't2': 'Save',
        't3': 'Share',
        't4': 'Remove information',
        't5': 'Search box data'
    };

    // البحث عن جميع العناصر التي تحتوي على الكلاسات المحددة
    for (const [className, titleText] of Object.entries(titleMap)) {
        const elements = document.getElementsByClassName(className);
        // إضافة الـ title لكل عنصر
        Array.from(elements).forEach(element => {
            element.setAttribute('title', titleText);
        });
    }
});