document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.myElement');
    
    // عند مرور المؤشر على أي عنصر
    elements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });
        
        // منع النقر داخل العنصر
        element.addEventListener('mousedown', function(event) {
            event.stopPropagation();
        });
    });
    
    // عند النقر على الصفحة
    document.addEventListener('mousedown', function(event) {
        elements.forEach(function(element) {
            if (!element.contains(event.target)) {
                element.classList.remove('hovered');
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("darkModeToggle");
    const body = document.body;

    // 🔄 استرجاع الحالة المحفوظة
    const isDark = localStorage.getItem("darkMode") === "true";
    checkbox.checked = isDark;
    body.classList.toggle("dark-body", isDark);

    // 🎯 عند تغيير حالة الـ checkbox
    checkbox.addEventListener("change", () => {
        const enabled = checkbox.checked;
        body.classList.toggle("dark-body", enabled);
        localStorage.setItem("darkMode", enabled);
    });
});





















// Application state
const state = {
    projects: JSON.parse(localStorage.getItem('textEditorProjects')) || [],
    currentProject: null,
    currentFile: 'New file',
    files: {},
    isSidebarOpen: true,
    editingDescriptionId: null,
    editingProjectNameId: null,
    searchQuery: '',
    // تخزين القيم السابقة للرجوع عن التغييرات
    previousTextColor: '#000000',
    previousHighlightColor: '#ffffff',
    previousImageSize: '100%',
    // تخزين المعلومات الخاصة بآخر صورة تم تعديلها
    lastModifiedImage: null,
    originalImageSize: null
};

// تهيئة currentFile من localStorage إذا كانت موجودة
const savedCurrentFile = localStorage.getItem('textEditorCurrentFile');
if (savedCurrentFile) {
    state.currentFile = savedCurrentFile;
}

// متغيرات السحب والإفلات
let draggedItem = null;
let dragStartIndex = -1;

// العناصر الأساسية
const projectsPage = document.getElementById('projects-page');
const editorPage = document.getElementById('editor-page');
const projectsGrid = document.getElementById('projects-grid');
const projectCount = document.getElementById('project-count');
const editorArea = document.getElementById('editor-area');
const fileNameInput = document.getElementById('file-name');
const editorProjectName = document.getElementById('editor-project-name');
const toggleSidebarBtn = document.getElementById('toggle-sidebar');
const closeSidebarBtn = document.getElementById('close-sidebar');
const editorSidebar = document.getElementById('editor-sidebar');

// عناصر البحث
const projectSearchInput = document.getElementById('project-search');
const clearSearchButton = document.getElementById('clear-search');

// أزرار التنقل
document.getElementById('new-project-btn').addEventListener('click', () => {
    openModal('new-project-modal');
});

document.getElementById('create-first-project').addEventListener('click', () => {
    openModal('new-project-modal');
});

document.getElementById('back-to-projects').addEventListener('click', () => {
    saveCurrentFile();
    editorPage.classList.remove('active');
    projectsPage.classList.add('active');
    loadProjects();
});

// وظيفة البحث
projectSearchInput.addEventListener('input', function() {
    state.searchQuery = this.value.trim().toLowerCase();
    loadProjects();
    
    // إظهار/إخفاء زر المسح
    if (state.searchQuery) {
        clearSearchButton.style.display = 'block';
    } else {
        clearSearchButton.style.display = 'none';
    }
});

clearSearchButton.addEventListener('click', function() {
    projectSearchInput.value = '';
    state.searchQuery = '';
    loadProjects();
    clearSearchButton.style.display = 'none';
    projectSearchInput.focus();
});

// نافذة إنشاء مشروع جديد
const newProjectModal = document.getElementById('new-project-modal');
const closeNewProjectModal = document.getElementById('close-new-project-modal');
const cancelProjectBtn = document.getElementById('cancel-project');
const createProjectBtn = document.getElementById('create-project');

closeNewProjectModal.addEventListener('click', () => {
    closeModal('new-project-modal');
});

cancelProjectBtn.addEventListener('click', () => {
    closeModal('new-project-modal');
});

createProjectBtn.addEventListener('click', () => {
    const projectName = document.getElementById('project-name').value;
    const projectDescription = document.getElementById('project-description').value;
    
    if (!projectName.trim()) {
        alert('Please enter a project name');
        return;
    }
    
    const newProject = {
        id: Date.now().toString(),
        name: projectName,
        description: projectDescription,
        createdAt: new Date().toLocaleString('en-US'),
        updatedAt: new Date().toLocaleString('en-US'),
        files: {
            'New file': ''
        }
    };
    
    state.projects.push(newProject);
    saveProjectsToStorage();
    
    document.getElementById('project-name').value = '';
    document.getElementById('project-description').value = '';
    
    closeModal('new-project-modal');
    openEditor(newProject);
});

// نافذة إدراج رابط
const linkModal = document.getElementById('link-modal');
const closeLinkModal = document.getElementById('close-link-modal');
const cancelLinkBtn = document.getElementById('cancel-link');
const insertLinkBtn = document.getElementById('insert-link-btn');
const insertLinkButton = document.getElementById('insert-link');

insertLinkButton.addEventListener('click', () => {
    openModal('link-modal');
});

closeLinkModal.addEventListener('click', () => {
    closeModal('link-modal');
});

cancelLinkBtn.addEventListener('click', () => {
    closeModal('link-modal');
});

insertLinkBtn.addEventListener('click', () => {
    const url = document.getElementById('link-url').value;
    const text = document.getElementById('link-text').value || url;
    
    if (!url.trim()) {
        alert('Please enter a valid link');
        return;
    }
    
    const linkHTML = `<a href="${url}" target="_blank">${text}</a>`;
    insertHTML(linkHTML);
    
    document.getElementById('link-url').value = '';
    document.getElementById('link-text').value = '';
    
    closeModal('link-modal');
});

// فتح وإغلاق النوافذ
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// تحميل المشاريع مع عامل التصفية
function loadProjects() {
    projectsGrid.innerHTML = '';
    
    // تصفية المشاريع بناءً على استعلام البحث
    let filteredProjects = state.projects;
    if (state.searchQuery) {
        filteredProjects = state.projects.filter(project => {
            const nameMatch = project.name.toLowerCase().includes(state.searchQuery);
            const descMatch = project.description && project.description.toLowerCase().includes(state.searchQuery);
            return nameMatch || descMatch;
        });
    }
    
    projectCount.textContent = `${filteredProjects.length} Projects ${state.searchQuery ? '(Filtered)' : ''}`;
    
    if (filteredProjects.length === 0) {
        projectsGrid.innerHTML = `
            <div class="empty-projects">
                <i class="fas fa-folder-open"></i>
                <h3>${state.searchQuery ? 'No projects found' : 'No projects yet'}</h3>
                <p>${state.searchQuery ? 'Try different search terms' : 'Start by creating a new project to edit text files'}</p>
                ${!state.searchQuery ? `
                <button id="create-first-project" class="btn btn-primary" style="margin-top: 15px;">
                    <i class="fas fa-plus"></i> Create New Project
                </button>
                ` : ''}
            </div>
        `;
        
        if (!state.searchQuery) {
            document.getElementById('create-first-project').addEventListener('click', () => {
                openModal('new-project-modal');
            });
        }
        return;
    }
    
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div id="menu-div-e">
                <a id="sswe" class="sswe Wave-center" title="More"><icon>menu2</icon></a>
                <div id="menu-123" class="Wave-all" style="display: none;">
                    <a class="download-project-btn" data-id="${project.id}">Download project</a>
                    <a class="share-project-btn" data-id="${project.id}">Share file</a>
                </div>
            </div>

            <div class="project-header">
                <div class="project-name-container" data-id="${project.id}">
                    <h3 class="project-name">${project.name}</h3>
                    <div class="project-name-edit" style="display: none;">
                        <input type="text" class="project-name-editor" value="${project.name}" />
                        <div class="edit-actions" style="margin-top: 5px;">
                            <button class="btn btn-sm btn-primary save-project-name" data-id="${project.id}">Save</button>
                            <button class="btn btn-sm btn-secondary cancel-project-name-edit" data-id="${project.id}">Cancel</button>
                        </div>
                    </div>
                </div>
                <div class="project-date">Last Modified: ${project.updatedAt}</div>
            </div>
            <div class="project-content">
                <div class="description-view" data-id="${project.id}">
                    <p>${project.description || 'No description'}</p>
                </div>
                <div class="description-edit" data-id="${project.id}" style="display: none;">
                    <textarea class="description-editor">${project.description || ''}</textarea>
                    <div class="edit-actions" style="margin-top: 10px;">
                        <button class="btn btn-sm btn-primary save-description" data-id="${project.id}">Save</button>
                        <button class="btn btn-sm btn-secondary cancel-edit" data-id="${project.id}">Cancel</button>
                    </div>
                </div>
            </div>
            <div class="project-actions Wave-all-center" id="project-action7s">
                <button class="btn btn-primary open-project" title="Edit" data-id="${project.id}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-danger delete-project" title="Delete" data-id="${project.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // إضافة مستمعي الأحداث للأزرار
    document.querySelectorAll('.open-project').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const projectId = e.target.closest('.open-project').dataset.id;
            const project = state.projects.find(p => p.id === projectId);
            openEditor(project);
        });
    });
    
    document.querySelectorAll('.delete-project').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const projectId = e.target.closest('.delete-project').dataset.id;
            if (confirm('Are you sure you want to delete this project?')) {
                deleteProject(projectId);
            }
        });
    });
    
    // إضافة مستمعي الأحداث لأزرار القائمة
    document.querySelectorAll('#sswe').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const menuDiv = btn.nextElementSibling;
            
            // إغلاق جميع القوائم الأخرى
            document.querySelectorAll('#menu-123').forEach(menu => {
                if (menu !== menuDiv) {
                    menu.style.display = 'none';
                }
            });
            
            // تبديل القائمة الحالية
            menuDiv.style.display = menuDiv.style.display === 'none' ? 'block' : 'none';
        });
    });
    
    // إضافة مستمعي الأحداث لأزرار تحميل المشروع
    document.querySelectorAll('.download-project-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const projectId = btn.dataset.id;
            const project = state.projects.find(p => p.id === projectId);
            
            // عرض نافذة التحميل بدلاً من مربع الحوار التأكيدي
            showDownloadModal(project);
            
            // إغلاق القائمة
            btn.parentElement.style.display = 'none';
        });
    });
    
    // إضافة مستمعي الأحداث لأزرار مشاركة المشروع
    document.querySelectorAll('.share-project-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const projectId = btn.dataset.id;
            const project = state.projects.find(p => p.id === projectId);
            
            showShareModal(project);
            
            // إغلاق القائمة
            btn.parentElement.style.display = 'none';
        });
    });
    
    // إضافة حدث النقر المزدوج لتحرير الوصف
    document.querySelectorAll('.description-view').forEach(descriptionView => {
        descriptionView.addEventListener('dblclick', function(e) {
            e.stopPropagation();
            const projectId = this.dataset.id;
            enableDescriptionEditing(projectId);
        });
    });
    
    // إضافة مستمعي الأحداث لأزرار الحفظ والإلغاء
    document.querySelectorAll('.save-description').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const projectId = this.dataset.id;
            saveDescriptionEdit(projectId);
        });
    });
    
    document.querySelectorAll('.cancel-edit').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const projectId = this.dataset.id;
            cancelDescriptionEdit(projectId);
        });
    });
    
    // السماح بالحفظ باستخدام مفتاح Enter والإلغاء باستخدام Escape
    document.querySelectorAll('.description-editor').forEach(textarea => {
        textarea.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && e.ctrlKey) {
                e.preventDefault();
                const projectId = this.closest('.description-edit').dataset.id;
                saveDescriptionEdit(projectId);
            } else if (e.key === 'Escape') {
                e.preventDefault();
                const projectId = this.closest('.description-edit').dataset.id;
                cancelDescriptionEdit(projectId);
            }
        });
        
        // منع النقر على textarea من إغلاق وضع التحرير
        textarea.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
    
    // إضافة حدث النقر المزدوج لتحرير اسم المشروع
    document.querySelectorAll('.project-name').forEach(projectName => {
        projectName.addEventListener('dblclick', function(e) {
            e.stopPropagation();
            const projectId = this.closest('.project-name-container').dataset.id;
            enableProjectNameEditing(projectId);
        });
    });
    
    // إضافة مستمعي الأحداث لحفظ وإلغاء اسم المشروع
    document.querySelectorAll('.save-project-name').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const projectId = this.dataset.id;
            saveProjectNameEdit(projectId);
        });
    });
    
    document.querySelectorAll('.cancel-project-name-edit').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const projectId = this.dataset.id;
            cancelProjectNameEdit(projectId);
        });
    });
    
    // السماح بالحفظ باستخدام مفتاح Enter والإلغاء باستخدام Escape لاسم المشروع
    document.querySelectorAll('.project-name-editor').forEach(input => {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const projectId = this.closest('.project-name-container').dataset.id;
                saveProjectNameEdit(projectId);
            } else if (e.key === 'Escape') {
                e.preventDefault();
                const projectId = this.closest('.project-name-container').dataset.id;
                cancelProjectNameEdit(projectId);
            }
        });
        
        // منع النقر على input من إغلاق وضع التحرير
        input.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
    
    // إضافة مستمع حدث للنقر خارج المحررين
    document.addEventListener('click', handleClickOutsideEditors);
}

// دالة لحساب حجم الملف
function calculateFileSize(content) {
    // تحويل HTML إلى نص عادي لحساب الحجم
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    
    // حساب الحجم بالبايت
    const bytes = new Blob([textContent]).size;
    
    // التحويل إلى تنسيق مقروء للإنسان
    if (bytes < 1024) {
        return bytes + ' B';
    } else if (bytes < 1024 * 1024) {
        return (bytes / 1024).toFixed(2) + ' KB';
    } else {
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    }
}

// دالة لعرض نافذة التحميل المعدلة
function showDownloadModal(project) {
    // إنشاء النافذة إذا لم تكن موجودة
    let downloadModal = document.getElementById('download-modal');
    if (!downloadModal) {
        downloadModal = document.createElement('div');
        downloadModal.id = 'download-modal';
        downloadModal.className = 'modal';
        downloadModal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Download Project</h3>
                    <span class="close-modal modal-close" title="Close"><i class="fas fa-times"></i></span>
                </div>
                <div class="modal-body">
                    <div class="project-info">
                        <h4 id="download-project-name">${project.name}</h4>
                        <p id="project-size">Calculating size...</p>
                    </div>
                    <div class="download-options">
                        <h4>Select download format:</h4>
                        <div class="download-select-container">
                            <select id="download-format" class="download-select">
                                <option value="pdf">Download as PDF</option>
                                <option value="zip">Download as ZIP</option>
                                <option value="html">Download as HTML</option>
                            </select>
                            <button id="start-download" class="download-btn btn">Download</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(downloadModal);
        
        // إضافة مستمع حدث لإغلاق النافذة
        downloadModal.querySelector('.close-modal').addEventListener('click', () => {
            downloadModal.classList.remove('active');
        });
    }
    
    // تحديث اسم المشروع
    downloadModal.querySelector('#download-project-name').textContent = project.name;
    
    // حساب حجم المشروع
    let totalSize = 0;
    const fileNames = Object.keys(project.files);
    fileNames.forEach(fileName => {
        const content = project.files[fileName];
        // تحويل HTML إلى نص عادي لحساب الحجم
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        const textContent = tempDiv.textContent || tempDiv.innerText || '';
        totalSize += new Blob([textContent]).size;
    });
    
    // التحويل إلى تنسيق مقروء للإنسان
    let sizeText;
    if (totalSize < 1024) {
        sizeText = totalSize + ' B';
    } else if (totalSize < 1024 * 1024) {
        sizeText = (totalSize / 1024).toFixed(2) + ' KB';
    } else {
        sizeText = (totalSize / (1024 * 1024)).toFixed(2) + ' MB';
    }
    
    // تحديث حجم المشروع
    downloadModal.querySelector('#project-size').textContent = `Size: ${sizeText}`;
    
    // إزالة مستمعي الأحداث الحاليين وإضافة جدد
    const startDownloadBtn = downloadModal.querySelector('#start-download');
    const formatSelect = downloadModal.querySelector('#download-format');
    
    // إزالة مستمعي الأحداث السابقين
    const newStartDownloadBtn = startDownloadBtn.cloneNode(true);
    const newFormatSelect = formatSelect.cloneNode(true);
    startDownloadBtn.replaceWith(newStartDownloadBtn);
    formatSelect.replaceWith(newFormatSelect);
    
    // إضافة مستمع حدث جديد لزر التحميل
    downloadModal.querySelector('#start-download').addEventListener('click', () => {
        const format = downloadModal.querySelector('#download-format').value;
        
        switch (format) {
            case 'pdf':
                downloadProjectAsPDF(project);
                break;
            case 'zip':
                downloadProjectAsZip(project);
                break;
            case 'html':
                downloadProjectAsHTML(project);
                break;
            default:
                alert('Please select a valid format');
                return;
        }
        
        downloadModal.classList.remove('active');
    });
    
    // إضافة مستمع حدث للاختيار من القائمة
    downloadModal.querySelector('#download-format').addEventListener('change', function() {
        // يمكنك إضافة أي تحديثات إضافية هنا بناءً على التنسيق المختار
        console.log('Selected format:', this.value);
    });
    
    // عرض النافذة
    downloadModal.classList.add('active');
    
    // إضافة حدث لإغلاق النافذة بالنقر خارجها
    downloadModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
}

// دالة لتحميل المشروع كملف PDF مع دعم الصور
async function downloadProjectAsPDF(project) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // إضافة اسم المشروع كعنوان
    doc.setFontSize(18);
    doc.text(project.name, 15, 15);
    
    let yPosition = 30;
    const fileNames = Object.keys(project.files);
    
    for (let i = 0; i < fileNames.length; i++) {
        const fileName = fileNames[i];
        
        // إضافة اسم الملف كعنوان فرعي
        doc.setFontSize(14);
        doc.text(`File: ${fileName}`, 15, yPosition);
        yPosition += 10;
        
        const content = project.files[fileName];
        
        // التحقق مما إذا كان المحتوى يحتوي على صور
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        const images = tempDiv.querySelectorAll('img');
        
        if (images.length > 0) {
            // إذا كان المحتوى يحتوي على صور، استخدم html2canvas للتحويل إلى صورة
            try {
                // إنشاء حاوية مؤقتة للمحتوى
                const container = document.createElement('div');
                container.style.position = 'absolute';
                container.style.left = '-9999px';
                container.style.width = '600px'; // تعيين عرض ثابت لعرض PDF متسق
                container.style.backgroundColor = 'white';
                container.style.padding = '10px';
                container.innerHTML = content;
                document.body.appendChild(container);
                
                // استخدام html2canvas لالتقاط المحتوى كصورة
                const canvas = await html2canvas(container, {
                    scale: 2, // مقياس أعلى لجودة أفضل
                    useCORS: true, // تمكين الصور عبر المصدر
                    logging: false,
                    width: 600,
                    height: container.scrollHeight
                });
                
                // إزالة الحاوية المؤقتة
                document.body.removeChild(container);
                
                // تحويل canvas إلى بيانات صورة
                const imgData = canvas.toDataURL('image/png');
                
                // التحقق مما إذا كنا بحاجة إلى صفحة جديدة
                if (yPosition > 180) {
                    doc.addPage();
                    yPosition = 20;
                }
                
                // إضافة الصورة إلى PDF
                const imgWidth = 180;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                
                if (yPosition + imgHeight > 280) {
                    doc.addPage();
                    yPosition = 20;
                }
                
                doc.addImage(imgData, 'PNG', 15, yPosition, imgWidth, imgHeight);
                yPosition += imgHeight + 10;
                
            } catch (error) {
                console.error('Error converting content to image:', error);
                
                // التراجع إلى وضع النص فقط إذا فشل تحويل الصورة
                const textContent = tempDiv.textContent || tempDiv.innerText || '';
                const lines = doc.splitTextToSize(textContent, 180);
                
                // التحقق مما إذا كنا بحاجة إلى صفحة جديدة
                if (yPosition + (lines.length * 5) > 280) {
                    doc.addPage();
                    yPosition = 20;
                }
                
                // إضافة المحتوى
                lines.forEach(line => {
                    doc.text(line, 15, yPosition);
                    yPosition += 5;
                });
            }
        } else {
            // إذا لم تكن هناك صور، استخدم وضع النص فقط
            const textContent = tempDiv.textContent || tempDiv.innerText || '';
            
            // تقسيم النص إلى سطور لتناسب الصفحة
            const lines = doc.splitTextToSize(textContent, 180);
            
            // التحقق مما إذا كنا بحاجة إلى صفحة جديدة
            if (yPosition + (lines.length * 5) > 280) {
                doc.addPage();
                yPosition = 20;
            }
            
            // إضافة المحتوى
            lines.forEach(line => {
                doc.text(line, 15, yPosition);
                yPosition += 5;
            });
        }
        
        // إضافة تباعد بين الملفات
        yPosition += 10;
        
        // التحقق مما إذا كنا بحاجة إلى صفحة جديدة للملف التالي
        if (yPosition > 270 && i < fileNames.length - 1) {
            doc.addPage();
            yPosition = 20;
        }
    }
    
    // حفظ ملف PDF
    doc.save(`${project.name}.pdf`);
}

// دالة لتحميل المشروع كملف HTML مع الحفاظ على التنسيق
function downloadProjectAsHTML(project) {
    const fileNames = Object.keys(project.files);
    
    // إنشاء محتوى HTML كامل
    let htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${project.name}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .project-header {
            border-bottom: 2px solid #007bff;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .file-section {
            margin-bottom: 30px;
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 5px;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 10px 0;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        img {
            max-width: 100%;
            height: auto;
        }
        .content-area {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 3px;
            border: 1px solid #eee;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="project-header">
            <h1>${project.name}</h1>
            ${project.description ? `<p>${project.description}</p>` : ''}
            <p><strong>Created:</strong> ${project.createdAt}</p>
            <p><strong>Last Modified:</strong> ${project.updatedAt}</p>
        </div>
`;
    
    fileNames.forEach((fileName, index) => {
        const content = project.files[fileName];
        htmlContent += `
        <div class="file-section">
            <h2>File: ${fileName}</h2>
            <div class="content-area">
                ${content || '<p>Empty file</p>'}
            </div>
        </div>`;
    });
    
    htmlContent += `
    </div>
</body>
</html>`;
    
    // إنشاء رابط تحميل
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.name}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// دالة لتحميل المشروع كملف ZIP
function downloadProjectAsZip(project) {
    // إنشاء مثيل JSZip جديد
    const zip = new JSZip();
    
    // إضافة الملفات إلى ملف ZIP
    const fileNames = Object.keys(project.files);
    fileNames.forEach(fileName => {
        const content = project.files[fileName];
        
        // إنشاء محتوى HTML كامل لكل ملف
        const fileContent = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${fileName} - ${project.name}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 10px 0;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
        img {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    ${content || '<p>Empty file</p>'}
</body>
</html>`;
        
        // إضافة الملف إلى ملف ZIP
        zip.file(`${fileName}.html`, fileContent);
    });
    
    // إنشاء ملف ZIP
    zip.generateAsync({ type: 'blob' })
        .then(function(content) {
            // إنشاء رابط تحميل
            const url = URL.createObjectURL(content);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${project.name}.zip`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
}

// دالة لعرض نافذة المشاركة
function showShareModal(project) {
    // إنشاء النافذة إذا لم تكن موجودة
    let shareModal = document.getElementById('share-modal');
    if (!shareModal) {
        shareModal = document.createElement('div');
        shareModal.id = 'share-modal';
        shareModal.className = 'modal';
        shareModal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header sddddss">
                    <h3>Share Project Files</h3>
                    <span class="close-modal modal-close" title="Close"><i class="fas fa-times"></i></span>
                </div>
                <div class="modal-body">
                    <h4>Select files to share:</h4>
                    <div id="files-list"></div>
                    <button id="share-via-whatsapp" class="btn btn-primary">Share via WhatsApp</button>
                </div>
            </div>
        `;
        document.body.appendChild(shareModal);
        
        // إضافة مستمع حدث لإغلاق النافذة
        shareModal.querySelector('.close-modal').addEventListener('click', () => {
            shareModal.classList.remove('active');
        });
    }
    
    // تعبئة قائمة الملفات
    const filesList = shareModal.querySelector('#files-list');
    filesList.innerHTML = '';
    
    const fileNames = Object.keys(project.files);
    fileNames.forEach(fileName => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-share-item';
        
        // حساب حجم الملف
        const fileSize = calculateFileSize(project.files[fileName]);
        
        fileItem.innerHTML = `
            <label>
                <input type="checkbox" value="${fileName}" checked>
                <span>${fileName}</span>
                <a>${fileSize}</a>
            </label>
        `;
        filesList.appendChild(fileItem);
    });
    
    // إضافة مستمع حدث لزر المشاركة
    const shareButton = shareModal.querySelector('#share-via-whatsapp');
    shareButton.onclick = function() {
        const selectedFiles = [];
        const checkboxes = filesList.querySelectorAll('input[type="checkbox"]:checked');
        
        checkboxes.forEach(checkbox => {
            const fileName = checkbox.value;
            const content = project.files[fileName];
            
            // تحويل HTML إلى نص عادي للمشاركة
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = content;
            const textContent = tempDiv.textContent || tempDiv.innerText || '';
            
            selectedFiles.push({
                name: fileName,
                content: textContent
            });
        });
        
        if (selectedFiles.length === 0) {
            alert('Please select at least one file to share');
            return;
        }
        
        // إنشاء رسالة بمحتوى الملفات
        let message = `*${project.name}*\n\n`;
        selectedFiles.forEach(file => {
            message += `*${file.name}:*\n${file.content}\n\n`;
        });
        
        // فتح واتساب مع الرسالة
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        // إغلاق النافذة
        shareModal.classList.remove('active');
    };
    
    // عرض النافذة
    shareModal.classList.add('active');
}

// إضافة مستمع حدث لإغلاق القوائم عند النقر خارجها
document.addEventListener('click', function(e) {
    // إغلاق جميع القوائم إذا تم النقر خارجها
    if (!e.target.closest('#menu-div-e')) {
        document.querySelectorAll('#menu-123').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});

// تمكين وضع تحرير اسم المشروع
function enableProjectNameEditing(projectId) {
    // الخروج من أي وضع تحرير آخر أولاً
    if (state.editingDescriptionId && state.editingDescriptionId !== projectId) {
        cancelDescriptionEdit(state.editingDescriptionId);
    }
    
    if (state.editingProjectNameId && state.editingProjectNameId !== projectId) {
        cancelProjectNameEdit(state.editingProjectNameId);
    }
    
    const projectNameContainer = document.querySelector(`.project-name-container[data-id="${projectId}"]`);
    const projectNameView = projectNameContainer.querySelector('.project-name');
    const projectNameEdit = projectNameContainer.querySelector('.project-name-edit');
    const input = projectNameEdit.querySelector('.project-name-editor');
    
    if (projectNameView && projectNameEdit) {
        projectNameView.style.display = 'none';
        projectNameEdit.style.display = 'block';
        input.focus();
        input.select();
        
        state.editingProjectNameId = projectId;
        
        // إضافة مستمع للنقرات الخارجية
        setTimeout(() => {
            document.addEventListener('click', handleClickOutsideEditors);
        }, 0);
    }
}

// حفظ تحرير اسم المشروع
function saveProjectNameEdit(projectId) {
    const projectNameContainer = document.querySelector(`.project-name-container[data-id="${projectId}"]`);
    const projectNameEdit = projectNameContainer.querySelector('.project-name-edit');
    const input = projectNameEdit.querySelector('.project-name-editor');
    const newProjectName = input.value.trim();
    
    if (!newProjectName) {
        alert('Project name cannot be empty');
        input.focus();
        return;
    }
    
    // التحقق مما إذا كان اسم المشروع موجودًا بالفعل (باستثناء المشروع الحالي)
    const existingProject = state.projects.find(p => p.id !== projectId && p.name === newProjectName);
    if (existingProject) {
        alert('A project with the same name already exists');
        input.focus();
        return;
    }
    
    // تحديث المشروع في الحالة
    const projectIndex = state.projects.findIndex(p => p.id === projectId);
    if (projectIndex !== -1) {
        state.projects[projectIndex].name = newProjectName;
        state.projects[projectIndex].updatedAt = new Date().toLocaleString('en-US');
        saveProjectsToStorage();
        
        // تحديث العرض
        const projectNameView = projectNameContainer.querySelector('.project-name');
        projectNameView.textContent = newProjectName;
        
        // إذا كان هذا هو المشروع الحالي، قم بتحديث رأس المحرر
        if (state.currentProject && state.currentProject.id === projectId) {
            state.currentProject.name = newProjectName;
            editorProjectName.textContent = newProjectName;
        }
        
        projectNameEdit.style.display = 'none';
        projectNameView.style.display = 'block';
        
        state.editingProjectNameId = null;
        
        // إزالة مستمع حدث النقر الخارجي
        document.removeEventListener('click', handleClickOutsideEditors);
    }
}

// إلغاء تحرير اسم المشروع
function cancelProjectNameEdit(projectId) {
    const projectNameContainer = document.querySelector(`.project-name-container[data-id="${projectId}"]`);
    const projectNameView = projectNameContainer.querySelector('.project-name');
    const projectNameEdit = projectNameContainer.querySelector('.project-name-edit');
    
    if (projectNameView && projectNameEdit) {
        // إعادة تعيين الإدخال إلى القيمة الأصلية
        const project = state.projects.find(p => p.id === projectId);
        const input = projectNameEdit.querySelector('.project-name-editor');
        if (project) {
            input.value = project.name;
        }
        
        projectNameEdit.style.display = 'none';
        projectNameView.style.display = 'block';
        
        state.editingProjectNameId = null;
        
        // إزالة مستمع حدث النقر الخارجي
        document.removeEventListener('click', handleClickOutsideEditors);
    }
}

// تمكين وضع تحرير الوصف
function enableDescriptionEditing(projectId) {
    // الخروج من أي وضع تحرير آخر أولاً
    if (state.editingDescriptionId && state.editingDescriptionId !== projectId) {
        cancelDescriptionEdit(state.editingDescriptionId);
    }
    
    if (state.editingProjectNameId && state.editingProjectNameId !== projectId) {
        cancelProjectNameEdit(state.editingProjectNameId);
    }
    
    const descriptionView = document.querySelector(`.description-view[data-id="${projectId}"]`);
    const descriptionEdit = document.querySelector(`.description-edit[data-id="${projectId}"]`);
    const textarea = descriptionEdit.querySelector('.description-editor');
    
    if (descriptionView && descriptionEdit) {
        descriptionView.style.display = 'none';
        descriptionEdit.style.display = 'block';
        textarea.focus();
        textarea.select();
        
        state.editingDescriptionId = projectId;
        
        // إضافة مستمع للنقرات الخارجية
        setTimeout(() => {
            document.addEventListener('click', handleClickOutsideEditors);
        }, 0);
    }
}

// حفظ تحرير الوصف
function saveDescriptionEdit(projectId) {
    const descriptionEdit = document.querySelector(`.description-edit[data-id="${projectId}"]`);
    const textarea = descriptionEdit.querySelector('.description-editor');
    const newDescription = textarea.value.trim();
    
    // تحديث المشروع في الحالة
    const projectIndex = state.projects.findIndex(p => p.id === projectId);
    if (projectIndex !== -1) {
        state.projects[projectIndex].description = newDescription;
        state.projects[projectIndex].updatedAt = new Date().toLocaleString('en-US');
        saveProjectsToStorage();
        
        // تحديث العرض
        const descriptionView = document.querySelector(`.description-view[data-id="${projectId}"]`);
        descriptionView.querySelector('p').textContent = newDescription || 'No description';
        
        descriptionEdit.style.display = 'none';
        descriptionView.style.display = 'block';
        
        state.editingDescriptionId = null;
        
        // إزالة مستمع حدث النقر الخارجي
        document.removeEventListener('click', handleClickOutsideEditors);
    }
}

// إلغاء تحرير الوصف
function cancelDescriptionEdit(projectId) {
    const descriptionView = document.querySelector(`.description-view[data-id="${projectId}"]`);
    const descriptionEdit = document.querySelector(`.description-edit[data-id="${projectId}"]`);
    
    if (descriptionView && descriptionEdit) {
        // إعادة تعيين textarea إلى القيمة الأصلية
        const project = state.projects.find(p => p.id === projectId);
        const textarea = descriptionEdit.querySelector('.description-editor');
        if (project) {
            textarea.value = project.description || '';
        }
        
        descriptionEdit.style.display = 'none';
        descriptionView.style.display = 'block';
        
        state.editingDescriptionId = null;
        
        // إزالة مستمع حدث النقر الخارجي
        document.removeEventListener('click', handleClickOutsideEditors);
    }
}

// معالجة النقر خارج المحررين
function handleClickOutsideEditors(e) {
    // معالجة محرر اسم المشروع
    if (state.editingProjectNameId) {
        const projectNameContainer = document.querySelector(`.project-name-container[data-id="${state.editingProjectNameId}"]`);
        const projectNameEdit = projectNameContainer.querySelector('.project-name-edit');
        const saveButton = projectNameEdit.querySelector('.save-project-name');
        const cancelButton = projectNameContainer.querySelector('.cancel-project-name-edit');
        
        if (projectNameEdit && 
            !projectNameEdit.contains(e.target) && 
            e.target !== saveButton && 
            e.target !== cancelButton) {
            
            // حفظ التغييرات تلقائيًا عند النقر خارج المحرر
            saveProjectNameEdit(state.editingProjectNameId);
        }
    }
    
    // معالجة محرر الوصف
    if (state.editingDescriptionId) {
        const descriptionEdit = document.querySelector(`.description-edit[data-id="${state.editingDescriptionId}"]`);
        const saveButton = descriptionEdit.querySelector('.save-description');
        const cancelButton = descriptionEdit.querySelector('.cancel-edit');
        
        if (descriptionEdit && 
            !descriptionEdit.contains(e.target) && 
            e.target !== saveButton && 
            e.target !== cancelButton) {
            
            // حفظ التغييرات تلقائيًا عند النقر خارج المحرر
            saveDescriptionEdit(state.editingDescriptionId);
        }
    }
}

// دالة لتحميل وعرض ملفات المشروع
function loadProjectFiles() {
    const filesContainer = document.getElementById('duvfiles');
    filesContainer.innerHTML = '';
    
    const fileNames = Object.keys(state.files);
    
    if (fileNames.length === 0) {
        filesContainer.innerHTML = '<div class="no-files">No files</div>';
        return;
    }
    
    fileNames.forEach((fileName, index) => {
        const fileItem = document.createElement('div');
        fileItem.className = `file-item ${fileName === state.currentFile ? 'check' : ''}`;
        fileItem.dataset.fileName = fileName;
        fileItem.dataset.index = index;
        fileItem.draggable = true;
        
        const fileNameSpan = document.createElement('span');
        fileNameSpan.className = 'file-name';
        fileNameSpan.textContent = fileName;
        fileNameSpan.title = fileName;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-file-btn Wave-center';
        deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
        deleteBtn.title = 'Delete File';
        
        fileItem.appendChild(fileNameSpan);
        fileItem.appendChild(deleteBtn);
        filesContainer.appendChild(fileItem);
        
        // إضافة حدث النقر لفتح الملف
        fileNameSpan.addEventListener('click', () => {
            switchToFile(fileName);
        });
        
        // إضافة حدث النقر لحذف الملف
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteFile(fileName);
        });
        
        // إضافة أحداث السحب والإفلات
        setupDragAndDrop(fileItem);
    });
}

// إعداد أحداث السحب والإفلات لعنصر الملف
function setupDragAndDrop(fileItem) {
    // بدء السحب
    fileItem.addEventListener('dragstart', handleDragStart);
    
    // السماح بالسحب فوق العنصر
    fileItem.addEventListener('dragover', handleDragOver);
    
    // دخول منطقة السحب
    fileItem.addEventListener('dragenter', handleDragEnter);
    
    // مغادرة منطقة السحب
    fileItem.addEventListener('dragleave', handleDragLeave);
    
    // إفلات العنصر
    fileItem.addEventListener('drop', handleDrop);
    
    // إنهاء السحب
    fileItem.addEventListener('dragend', handleDragEnd);
}

// بدء السحب
function handleDragStart(e) {
    draggedItem = e.target;
    dragStartIndex = parseInt(draggedItem.dataset.index);
    
    // إضافة تأثير السحب
    draggedItem.style.opacity = '0.5';
    
    // إضافة مهلة لتأخير تأثير السحب
    setTimeout(() => {
        draggedItem.classList.add('dragging');
    }, 0);
    
    // تعيين تأثير السحب
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', draggedItem.dataset.fileName);
}

// السماح بالسحب فوق العنصر
function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    // إضافة تأثير السحب النشط
    const afterElement = getDragAfterElement(e.clientX);
    const draggableElements = [...document.querySelectorAll('.file-item:not(.dragging)')];
    
    if (afterElement == null) {
        document.getElementById('duvfiles').appendChild(draggedItem);
    } else {
        document.getElementById('duvfiles').insertBefore(draggedItem, afterElement);
    }
}

// دخول منطقة السحب
function handleDragEnter(e) {
    e.preventDefault();
    if (e.target.classList.contains('file-item') && e.target !== draggedItem) {
        e.target.classList.add('drag-over');
    }
}

// مغادرة منطقة السحب
function handleDragLeave(e) {
    e.preventDefault();
    if (e.target.classList.contains('file-item')) {
        e.target.classList.remove('drag-over');
    }
}

// إفلات العنصر
function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.target.classList.contains('file-item') || e.target.closest('.file-item')) {
        const dropTarget = e.target.closest('.file-item');
        
        // إعادة ترتيب الملفات في الحالة
        reorderFiles(draggedItem.dataset.fileName, dropTarget.dataset.fileName);
        
        // إزالة تأثير السحب
        dropTarget.classList.remove('drag-over');
    }
}

// إنهاء السحب
function handleDragEnd(e) {
    // إزالة تأثيرات السحب من جميع العناصر
    document.querySelectorAll('.file-item').forEach(item => {
        item.classList.remove('drag-over');
        item.classList.remove('dragging');
        item.style.opacity = '1';
    });
    
    draggedItem = null;
    dragStartIndex = -1;
}

// دالة للحصول على العنصر لوضعه بعده
function getDragAfterElement(x) {
    const draggableElements = [...document.querySelectorAll('.file-item:not(.dragging)')];
    
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = x - box.left - box.width / 2;
        
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// دالة لإعادة ترتيب الملفات
function reorderFiles(draggedFileName, droppedOnFileName) {
    if (draggedFileName === droppedOnFileName) return;
    
    // الحصول على أسماء الملفات الحالية
    const fileNames = Object.keys(state.files);
    
    // العثور على مؤشرات الملفات
    const draggedIndex = fileNames.indexOf(draggedFileName);
    const droppedIndex = fileNames.indexOf(droppedOnFileName);
    
    if (draggedIndex === -1 || droppedIndex === -1) return;
    
    // إنشاء مصفوفة جديدة مع الملفات المعادة ترتيبها
    const newFileNames = [...fileNames];
    
    // إزالة الملف المسحوب من موضعه
    newFileNames.splice(draggedIndex, 1);
    
    // إدراج الملف في الموضع الجديد
    newFileNames.splice(droppedIndex, 0, draggedFileName);
    
    // إنشاء كائن ملفات جديد بالترتيب الجديد
    const newFiles = {};
    newFileNames.forEach(fileName => {
        newFiles[fileName] = state.files[fileName];
    });
    
    // تحديث الحالة
    state.files = newFiles;
    
    // حفظ المشروع
    saveProjectToState();
    
    // تحديث عرض الملفات
    loadProjectFiles();
    
    console.log('Files reordered:', newFileNames);
}

// دالة للتبديل إلى ملف آخر
function switchToFile(fileName) {
    if (fileName === state.currentFile) return;
    
    // حفظ الملف الحالي أولاً
    saveCurrentFile();
    
    // التبديل إلى الملف الجديد
    state.currentFile = fileName;
    fileNameInput.value = fileName;
    
    // تحميل المحتوى أو عرض العنصر النائب
    const content = state.files[fileName];
    if (content && content.trim() !== '') {
        editorArea.innerHTML = content;
        editorArea.classList.remove('show-placeholder');
    } else {
        showPlaceholder();
    }
    
    // حفظ الملف الحالي في localStorage
    saveCurrentFileToLocalStorage();
    
    // تحديث العرض
    updateActiveFileHighlight();
}

// دالة لعرض العنصر النائب في المحرر
function showPlaceholder() {
    editorArea.innerHTML = '<p class="placeholder-text"><h2 style="color: #333;margin: 0;">New project</h2>Start writing here...</p>';
    editorArea.classList.add('show-placeholder');
}

// دالة للتحقق مما إذا كان المحتوى فارغًا أو مجرد عنصر نائب
function isEmptyContent(content) {
    if (!content || content.trim() === '') return true;
    
    // التحقق مما إذا كان المحتوى مجرد عنصر نائب
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const hasPlaceholderClass = tempDiv.querySelector('.placeholder-text');
    const text = tempDiv.textContent || tempDiv.innerText || '';
    
    return hasPlaceholderClass || text.trim() === 'New projectStart writing here...';
}

// دالة لتحديد تمييز الملف النشط
function updateActiveFileHighlight() {
    document.querySelectorAll('.file-item').forEach(item => {
        if (item.dataset.fileName === state.currentFile) {
            item.classList.add('check');
        } else {
            item.classList.remove('check');
        }
    });
}

// دالة لحفظ الملف الحالي في localStorage
function saveCurrentFileToLocalStorage() {
    localStorage.setItem('textEditorCurrentFile', state.currentFile);
}

// دالة لحذف الملف
function deleteFile(fileName) {
    // إذا كان هناك ملف واحد فقط، لا يمكن حذفه
    if (Object.keys(state.files).length <= 1) {
        alert('Cannot delete the last file in the project');
        return;
    }
    
    // تأكيد الحذف
    if (confirm(`Are you sure you want to delete the file "${fileName}"?`)) {
        // إذا كان الملف المحذوف هو الملف الحالي، التبديل إلى ملف آخر
        if (fileName === state.currentFile) {
            const fileNames = Object.keys(state.files);
            const currentIndex = fileNames.indexOf(fileName);
            const nextFileIndex = currentIndex > 0 ? currentIndex - 1 : 1;
            state.currentFile = fileNames[nextFileIndex];
            fileNameInput.value = state.currentFile;
            
            const content = state.files[state.currentFile];
            if (content && content.trim() !== '') {
                editorArea.innerHTML = content;
                editorArea.classList.remove('show-placeholder');
            } else {
                showPlaceholder();
            }
            
            // حفظ الملف الحالي الجديد في localStorage
            saveCurrentFileToLocalStorage();
        }
        
        // حذف الملف من الحالة
        delete state.files[fileName];
        
        // حفظ المشروع
        saveProjectToState();
        
        // تحديث عرض الملفات
        loadProjectFiles();
        
        // تحديث تمييز الملف النشط
        updateActiveFileHighlight();
        
        console.log(`File deleted: ${fileName}`);
    }
}

// دالة لحفظ المشروع في الحالة
function saveProjectToState() {
    if (!state.currentProject) return;
    
    const projectIndex = state.projects.findIndex(p => p.id === state.currentProject.id);
    if (projectIndex !== -1) {
        // عدم حفظ محتوى العنصر النائب
        if (editorArea.classList.contains('show-placeholder')) {
            state.files[state.currentFile] = '';
        } else {
            state.files[state.currentFile] = editorArea.innerHTML;
        }
        
        state.projects[projectIndex].files = state.files;
        state.projects[projectIndex].updatedAt = new Date().toLocaleString('en-US');
        state.currentProject = state.projects[projectIndex];
        saveProjectsToStorage();
    }
}

// دالة للتعامل مع تغيير اسم الملف
function handleFileNameChange() {
    const newFileName = fileNameInput.value.trim();
    const oldFileName = state.currentFile;
    
    if (!newFileName || newFileName === oldFileName) {
        return;
    }
    
    // التحقق مما إذا كان الملف بنفس الاسم موجودًا بالفعل
    if (state.files[newFileName]) {
        alert('A file with the same name already exists!');
        fileNameInput.value = oldFileName;
        return;
    }
    
    // تغيير اسم الملف
    state.files[newFileName] = state.files[oldFileName];
    delete state.files[oldFileName];
    state.currentFile = newFileName;
    
    // حفظ الملف الحالي في localStorage
    saveCurrentFileToLocalStorage();
    
    // حفظ المشروع
    saveProjectToState();
    
    // تحديث عرض الملفات
    loadProjectFiles();
}

// تحديث دالة openEditor لتحميل الملفات
function openEditor(project) {
    state.currentProject = project;
    state.files = JSON.parse(JSON.stringify(project.files)) || { 'New file': '' };
    
    // التحقق مما إذا كان الملف الحالي المحفوظ موجود في المشروع الحالي
    const savedCurrentFile = localStorage.getItem('textEditorCurrentFile');
    if (savedCurrentFile && state.files[savedCurrentFile]) {
        state.currentFile = savedCurrentFile;
    } else {
        // إذا كان الملف المحفوظ غير موجود، استخدم أول ملف
        state.currentFile = Object.keys(state.files)[0];
    }
    
    editorProjectName.textContent = project.name;
    fileNameInput.value = state.currentFile;
    
    // تحميل المحتوى أو عرض العنصر النائب
    const content = state.files[state.currentFile];
    if (content && content.trim() !== '') {
        editorArea.innerHTML = content;
        editorArea.classList.remove('show-placeholder');
    } else {
        showPlaceholder();
    }
    
    projectsPage.classList.remove('active');
    editorPage.classList.add('active');
    
    // تحميل عرض الملفات
    loadProjectFiles();
    
    // إضافة مستمع حدث لحقل اسم الملف لتغيير اسم الملف الحالي
    fileNameInput.addEventListener('change', handleFileNameChange);
    
    // إضافة مستمعي الأحداث لأدوات التنسيق
    setupFormattingTools();
}

// حذف المشروع
function deleteProject(projectId) {
    state.projects = state.projects.filter(p => p.id !== projectId);
    saveProjectsToStorage();
    loadProjects();
}

// حفظ المشاريع في التخزين المحلي
function saveProjectsToStorage() {
    localStorage.setItem('textEditorProjects', JSON.stringify(state.projects));
}

// حفظ الملف الحالي
function saveCurrentFile() {
    if (!state.currentProject) {
        alert('No project is currently open. Please open or create a project first.');
        return false;
    }
    
    const fileName = fileNameInput.value || 'Untitled file';
    
    // عدم حفظ محتوى العنصر النائب
    if (editorArea.classList.contains('show-placeholder')) {
        state.files[state.currentFile] = '';
    } else {
        state.files[state.currentFile] = editorArea.innerHTML;
    }
    
    // إذا تغير اسم الملف، قم بتحديثه
    if (fileName !== state.currentFile && !state.files[fileName]) {
        state.files[fileName] = state.files[state.currentFile];
        delete state.files[state.currentFile];
        state.currentFile = fileName;
        
        // حفظ الملف الحالي في localStorage
        saveCurrentFileToLocalStorage();
        
        // حفظ المشروع
        saveProjectToState();
        
        // تحديث عرض الملفات
        loadProjectFiles();
    } else {
        // إذا لم يتغير الاسم، فقط احفظ المشروع
        saveProjectToState();
    }
    
    console.log('Project saved successfully!');
    return true;
}

// دالة للتحقق مما إذا كان المؤشر داخل جدول
function isCursorInsideTable() {
    const selection = window.getSelection();
    if (!selection.rangeCount) return false;
    
    const range = selection.getRangeAt(0);
    const container = range.commonAncestorContainer;
    
    // التحقق من أن المؤشر ليس داخل خلية جدول
    let currentNode = container.nodeType === Node.ELEMENT_NODE ? container : container.parentElement;
    
    while (currentNode) {
        if (currentNode.tagName === 'TD' || currentNode.tagName === 'TH' || currentNode.tagName === 'TABLE') {
            return true;
        }
        currentNode = currentNode.parentElement;
    }
    
    return false;
}

// إعداد أدوات التنسيق
function setupFormattingTools() {
    // الأزرار الأساسية للتنسيق
    document.querySelectorAll('.tool-btn[data-command]').forEach(btn => {
        btn.addEventListener('click', () => {
            const command = btn.dataset.command;
            
            // التحقق مما إذا كان المؤشر داخل جدول بالنسبة لأمر إدراج الجدول
            if (command === 'insertTable' && isCursorInsideTable()) {
                alert('Cannot create a table inside another table!');
                return;
            }
            
            // إذا كان المحرر يعرض عنصرًا نائبًا، امسحه أولاً
            if (editorArea.classList.contains('show-placeholder')) {
                editorArea.innerHTML = '';
                editorArea.classList.remove('show-placeholder');
            }
            
            if (command === 'insertTable') {
                // استخدام الوظيفة المخصصة لإدراج الجدول
                openTableModal();
            } else {
                document.execCommand(command, false, null);
            }
            editorArea.focus();
        });
    });
    
    // تغيير لون النص
    document.getElementById('text-color').addEventListener('input', (e) => {
        const color = e.target.value;
        
        // إذا كان المحرر يعرض عنصرًا نائبًا، امسحه أولاً
        if (editorArea.classList.contains('show-placeholder')) {
            editorArea.innerHTML = '';
            editorArea.classList.remove('show-placeholder');
        }
        
        // تخزين اللون السابق قبل التغيير
        const previousColor = document.queryCommandValue('foreColor') || '#000000';
        state.previousTextColor = previousColor;
        
        document.execCommand('foreColor', false, color);
        editorArea.focus();
    });
    
    // تغيير لون الخلفية
    document.getElementById('highlight-color').addEventListener('input', (e) => {
        const color = e.target.value;
        
        // إذا كان المحرر يعرض عنصرًا نائبًا، امسحه أولاً
        if (editorArea.classList.contains('show-placeholder')) {
            editorArea.innerHTML = '';
            editorArea.classList.remove('show-placeholder');
        }
        
        // تخزين اللون السابق قبل التغيير
        const previousColor = document.queryCommandValue('backColor') || '#ffffff';
        state.previousHighlightColor = previousColor;
        
        document.execCommand('backColor', false, color);
        editorArea.focus();
    });
    
    // تغيير نوع الخط
    document.getElementById('font-family').addEventListener('change', (e) => {
        const font = e.target.value;
        
        // إذا كان المحرر يعرض عنصرًا نائبًا، امسحه أولاً
        if (editorArea.classList.contains('show-placeholder')) {
            editorArea.innerHTML = '';
            editorArea.classList.remove('show-placeholder');
        }
        
        document.execCommand('fontName', false, font);
        editorArea.focus();
    });
    
    // تغيير حجم الخط - النسخة المصححة
    document.getElementById('font-size').addEventListener('change', (e) => {
        const size = e.target.value;
        
        // إذا كان المحرر يعرض عنصرًا نائبًا، امسحه أولاً
        if (editorArea.classList.contains('show-placeholder')) {
            editorArea.innerHTML = '';
            editorArea.classList.remove('show-placeholder');
        }
        
        // الحصول على القيمة العددية من الحجم
        const sizeValue = parseInt(size);
        if (!isNaN(sizeValue)) {
            // استخدام أمر fontSize مع القيم 1-7 بدلاً من px
            // تحويل px إلى قيم fontSize
            let fontSizeNumber;
            if (sizeValue <= 12) fontSizeNumber = 1;
            else if (sizeValue <= 14) fontSizeNumber = 2;
            else if (sizeValue <= 16) fontSizeNumber = 3;
            else if (sizeValue <= 18) fontSizeNumber = 4;
            else if (sizeValue <= 24) fontSizeNumber = 5;
            else if (sizeValue <= 32) fontSizeNumber = 6;
            else fontSizeNumber = 7;
            
            document.execCommand('fontSize', false, fontSizeNumber);
        }
        
        editorArea.focus();
    });
    
    // تحكم في حجم الصورة - النسخة المصححة
    document.getElementById('image-size').addEventListener('change', (e) => {
        const size = e.target.value;
        const selectedImage = getSelectedImage();
        
        if (selectedImage) {
            // تخزين الحجم الأصلي للصورة (إذا لم يتم تخزينه من قبل)
            if (!state.originalImageSize && selectedImage.naturalWidth) {
                state.originalImageSize = {
                    width: selectedImage.naturalWidth,
                    height: selectedImage.naturalHeight
                };
            }
            
            // تخزين الحجم الحالي قبل التغيير
            const currentWidth = selectedImage.style.width || '100%';
            const currentHeight = selectedImage.style.height || 'auto';
            state.previousImageSize = {
                width: currentWidth,
                height: currentHeight
            };
            
            // تطبيق الحديد الجديد
            if (size === '100%') {
                // إعادة التعيين إلى الحجم الأصلي
                selectedImage.style.width = '';
                selectedImage.style.height = '';
                
                // إذا كنا نعرف الحجم الأصلي، استخدمه
                if (state.originalImageSize) {
                    selectedImage.style.width = state.originalImageSize.width + 'px';
                    selectedImage.style.height = state.originalImageSize.height + 'px';
                }
            } else {
                // تطبيق الحجم بالنسبة المئوية
                if (size.endsWith('%')) {
                    const percentage = parseInt(size);
                    
                    // حساب الحجم الجديد بناءً على الحجم الأصلي
                    if (state.originalImageSize) {
                        const newWidth = (state.originalImageSize.width * percentage) / 100;
                        const newHeight = (state.originalImageSize.height * percentage) / 100;
                        
                        selectedImage.style.width = newWidth + 'px';
                        selectedImage.style.height = newHeight + 'px';
                    } else {
                        // إذا لم يكن الحجم الأصلي معروفًا، استخدم النسبة المئوية مباشرة
                        selectedImage.style.width = size;
                        selectedImage.style.height = 'auto';
                    }
                } else {
                    // إذا كان الحجم بالبكسل
                    selectedImage.style.width = size + 'px';
                    selectedImage.style.height = 'auto';
                }
            }
            
            // تخزين معلومات آخر صورة تم تعديلها
            state.lastModifiedImage = selectedImage;
        }
        
        editorArea.focus();
    });
    
    // الحصول على الصورة المحددة
    function getSelectedImage() {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const container = range.commonAncestorContainer;
            
            // التحقق مما إذا كان التحديد داخل صورة
            if (container.nodeType === Node.ELEMENT_NODE && container.tagName === 'IMG') {
                return container;
            }
            
            // التحقق مما إذا كان التحديد يحتوي على صورة
            const images = container.querySelectorAll('img');
            if (images.length > 0) {
                return images[0];
            }
            
            // التحقق مما إذا كان التحديد بجوار صورة
            const prevElement = container.previousElementSibling;
            if (prevElement && prevElement.tagName === 'IMG') {
                return prevElement;
            }
        }
        
        // إذا لم يتم تحديد صورة، ابحث عن آخر صورة في المحرر
        const allImages = editorArea.querySelectorAll('img');
        if (allImages.length > 0) {
            return allImages[allImages.length - 1];
        }
        
        return null;
    }
    
    // إدراج صورة
    document.getElementById('insert-image').addEventListener('click', () => {
        // التحقق مما إذا كان المؤشر داخل جدول
        if (isCursorInsideTable()) {
            alert('Cannot insert image inside a table cell!');
            return;
        }
        
        const url = prompt('Enter image URL:');
        if (url) {
            // إذا كان المحرر يعرض عنصرًا نائبًا، امسحه أولاً
            if (editorArea.classList.contains('show-placeholder')) {
                editorArea.innerHTML = '';
                editorArea.classList.remove('show-placeholder');
            }
            
            document.execCommand('insertImage', false, url);
            editorArea.focus();
        }
    });
    
    // تحديث دالة إنشاء ملف جديد
    document.getElementById('new-file').addEventListener('click', () => {
        saveCurrentFile();
        const fileName = prompt('Enter new file name:', `File ${Object.keys(state.files).length + 1}`);
        if (fileName) {
            if (state.files[fileName]) {
                alert('A file with the same name already exists!');
                return;
            }
            state.files[fileName] = '';
            state.currentFile = fileName;
            fileNameInput.value = fileName;
            showPlaceholder();
            
            // حفظ الملف الحالي في localStorage
            saveCurrentFileToLocalStorage();
            
            // حفظ المشروع
            saveProjectToState();
            
            // تحديث عرض الملفات
            loadProjectFiles();
        }
    });
    
    // تحديث دالة تحميل الملف
    document.getElementById('upload-file').addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.txt,.html,.css,.js';
        
        input.onchange = e => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = function(e) {
                const content = e.target.result;
                const fileName = file.name;
                
                // التحقق مما إذا كان الملف بنفس الاسم موجودًا بالفعل
                if (state.files[fileName]) {
                    if (!confirm('A file with the same name already exists. Do you want to replace it?')) {
                        return;
                    }
                }
                
                state.files[fileName] = `<pre>${content}</pre>`;
                state.currentFile = fileName;
                fileNameInput.value = fileName;
                editorArea.innerHTML = state.files[fileName];
                editorArea.classList.remove('show-placeholder');
                
                // حفظ الملف الحالي في localStorage
                saveCurrentFileToLocalStorage();
                
                // حفظ المشروع
                saveProjectToState();
                
                // تحديث عرض الملفات
                loadProjectFiles();
            };
            reader.readAsText(file);
        };
        
        input.click();
    });
    
    // تحميل الملف - النسخة المحسنة
    document.getElementById('download-file').addEventListener('click', () => {
        saveCurrentFile();
        
        // الحصول على المحتوى، والتعامل مع حالة العنصر النائب
        let content;
        if (editorArea.classList.contains('show-placeholder')) {
            content = '';
        } else {
            content = editorArea.innerHTML;
        }
        
        const fileName = fileNameInput.value || 'file';
        
        // إنشاء محتوى HTML كامل مع الحفاظ على التنسيق والجدول
        const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${fileName}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f5f5f5;
        }
        .content {
            max-width: 1200px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 10px 0;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        img {
            max-width: 100%;
            height: auto;
        }
        pre {
            background-color: #f8f8f8;
            padding: 10px;
            border-radius: 3px;
            overflow-x: auto;
        }
        code {
            font-family: 'Courier New', monospace;
        }
    </style>
</head>
<body>
    <div class="content">
        ${content || '<p>Empty file</p>'}
    </div>
</body>
</html>`;
        
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `${fileName}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
    
    // إضافة ميزة لتنشيط وضع التحرير في المحرر
    editorArea.addEventListener('focus', () => {
        editorArea.style.minHeight = '300px';
        
        // إذا كان يعرض عنصرًا نائبًا، امسحه عند التركيز
        if (editorArea.classList.contains('show-placeholder')) {
            editorArea.innerHTML = '';
            editorArea.classList.remove('show-placeholder');
        }
    });
    
    editorArea.addEventListener('blur', () => {
        // التحقق مما إذا كان المحتوى فارغًا وعرض العنصر النائب إذا لزم الأمر
        const content = editorArea.innerHTML.trim();
        if (content === '' || content === '<br>' || content === '<div><br></div>') {
            showPlaceholder();
        }
    });
}

// دالة حجم الخط البديلة باستخدام تنسيق CSS
function setFontSize(size) {
    // توفر هذه الدالة طريقة بديلة لتعيين حجم الخط
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('fontSize', false, size);
    editorArea.focus();
}

// إدراج HTML في المحرر
function insertHTML(html) {
    // إذا كان المحرر يعرض عنصرًا نائبًا، امسحه أولاً
    if (editorArea.classList.contains('show-placeholder')) {
        editorArea.innerHTML = '';
        editorArea.classList.remove('show-placeholder');
    }
    
    document.execCommand('insertHTML', false, html);
    editorArea.focus();
}

// إدارة الشريط الجانبي
toggleSidebarBtn.addEventListener('click', () => {
    editorSidebar.classList.toggle('active');
    closeSidebarBtn.style.display = editorSidebar.classList.contains('active') ? 'block' : 'none';
});

closeSidebarBtn.addEventListener('click', () => {
    editorSidebar.classList.remove('active');
    closeSidebarBtn.style.display = 'none';
});

// الحفظ التلقائي
editorArea.addEventListener('input', () => {
    if (state.currentProject) {
        // حفظ مؤقت كل 5 ثوانٍ
        clearTimeout(window.autoSaveTimeout);
        window.autoSaveTimeout = setTimeout(() => {
            saveCurrentFile();
        }, 5000);
    }
});

// دالة لإدراج الجدول (بدون استخدام زر معين في HTML)
function openTableModal() {
    // التحقق مما إذا كان المؤشر داخل جدول
    if (isCursorInsideTable()) {
        alert('Cannot create a table inside another table!');
        return;
    }
    
    // إزالة النافذة السابقة إذا كانت موجودة
    const existingModal = document.getElementById('table-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // إنشاء النافذة الجديدة
    const tableModalHTML = `
        <div id="table-modal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Insert Table</h3>
                    <span id="close-table-modal" class="close-modal modal-close" title="Close"><i class="fas fa-times"></i></span>
                </div>
                <div class="modal-body">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="table-rows">Rows:</label>
                            <input type="number" id="table-rows" min="1" max="20" value="3">
                        </div>
                        <div class="form-group">
                            <label for="table-columns">Columns:</label>
                            <input type="number" id="table-columns" min="1" max="20" value="3">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="table-border">Border Size:</label>
                            <input type="number" id="table-border" min="0" max="10" value="1">
                        </div>
                        <div class="form-group">
                            <label for="table-cell-padding">Cell Padding:</label>
                            <input type="number" id="table-cell-padding" min="0" max="20" value="5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="table-width">Table Width:</label>
                        <input type="text" id="table-width" value="100%">
                    </div>
                    <div class="form-group">
                        <label for="table-bg-color">Background Color:</label>
                        <input type="color" id="table-bg-color" value="#ffffff">
                    </div>
                    <div class="modal-actions">
                        <button id="insert-table-btn" class="btn btn-primary">Insert Table</button>
                        <button id="cancel-table" class="btn btn-secondary">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // إضافة النافذة إلى body
    document.body.insertAdjacentHTML('beforeend', tableModalHTML);
    
    // فتح النافذة
    openModal('table-modal');
    
    // إضافة أحداث للنافذة الجديدة
    const closeTableModal = document.getElementById('close-table-modal');
    const cancelTableBtn = document.getElementById('cancel-table');
    const insertTableBtn = document.getElementById('insert-table-btn');
    
    if (closeTableModal) {
        closeTableModal.addEventListener('click', () => {
            closeModal('table-modal');
            // إزالة النافذة بعد إغلاقها
            setTimeout(() => {
                const modal = document.getElementById('table-modal');
                if (modal) modal.remove();
            }, 300);
        });
    }
    
    if (cancelTableBtn) {
        cancelTableBtn.addEventListener('click', () => {
            closeModal('table-modal');
            // إزالة النافذة بعد إغلاقها
            setTimeout(() => {
                const modal = document.getElementById('table-modal');
                if (modal) modal.remove();
            }, 300);
        });
    }
    
    if (insertTableBtn) {
        insertTableBtn.addEventListener('click', () => {
            const rows = parseInt(document.getElementById('table-rows').value) || 3;
            const cols = parseInt(document.getElementById('table-columns').value) || 3;
            const border = parseInt(document.getElementById('table-border').value) || 1;
            const cellPadding = parseInt(document.getElementById('table-cell-padding').value) || 5;
            const width = document.getElementById('table-width').value || '100%';
            const bgColor = document.getElementById('table-bg-color').value || '#ffffff';
            
            if (rows < 1 || cols < 1) {
                alert('Rows and columns must be at least 1');
                return;
            }
            
            // إنشاء جدول
            let tableHTML = `<table border="${border}" style="border-collapse: collapse; width: ${width}; background-color: ${bgColor}; margin: 10px 0;">`;
            for (let i = 0; i < rows; i++) {
                tableHTML += '<tr>';
                for (let j = 0; j < cols; j++) {
                    tableHTML += `<td style="padding: ${cellPadding}px; border: ${border}px solid #ddd;">&nbsp;</td>`;
                }
                tableHTML += '</tr>';
            }
            tableHTML += '</table>';
            
            // إدراج الجدول
            insertHTML(tableHTML);
            
            // إغلاق النافذة
            closeModal('table-modal');
            
            // إزالة النافذة من DOM
            setTimeout(() => {
                const modal = document.getElementById('table-modal');
                if (modal) {
                    modal.remove();
                }
            }, 300);
        });
    }
    
    // إضافة حدث لإغلاق النافذة بالنقر خارجها
    const modal = document.getElementById('table-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal('table-modal');
                // إزالة النافذة بعد إغلاقها
                setTimeout(() => {
                    if (modal && modal.parentNode) {
                        modal.remove();
                    }
                }, 300);
            }
        });
    }
}

// تحديث حالة التطبيق عند تحميل الصفحة
window.addEventListener('load', () => {
    loadProjects();
    
    // إضافة CSS للعنصر النائب
    const style = document.createElement('style');
    style.textContent = `
        .show-placeholder .placeholder-text {
            color: #888;
            font-style: italic;
            font-size: 18px;
            line-height: 1.6;
        }
        
        /* أنماط لنافذة المشاركة */
        #share-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
        }
        
        #share-modal.active {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        #share-modal .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            width: 500px;
            max-width: 90%;
            max-height: 80vh;
            overflow-y: auto;
        }
        
        #share-modal .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        #share-modal .close-modal {
            cursor: pointer;
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        #files-list {
            margin: 15px 0;
            max-height: 300px;
            overflow-y: auto;
        }
        
        .file-share-item {
            position: relative;
            margin: 10px 0;
        }
        .file-share-item a {
            position: absolute;
            right: 0;
            opacity: .4;
        }
        
        .file-share-item label {
            display: flex;
            align-items: center;
            cursor: pointer;
        }
        
        .file-share-item input {
            margin-right: 10px;
        }
        
        /* أنماط لنافذة التحميل */
        #download-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
        }
        
        #download-modal.active {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        #download-modal .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            width: 400px;
            max-width: 90%;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            overflow: initial;
        }

        #download-modal .modal-content .custom-select {
            margin: auto !important;
            width: 100% !important;
        }
        
        #download-modal .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
        }
        
        #download-modal .close-modal {
            cursor: pointer;
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        #download-modal .project-info {
            margin-bottom: 20px;
            text-align: center;
        }
        
        #download-modal .project-info h4 {
            margin: 0 0 10px 0;
            color: #333;
        }
        
        #download-modal .project-info p {
            margin: 0;
            color: #666;
        }
        
        #download-modal .download-options h4 {
            margin: 0 0 15px 0;
            color: #333;
        }
        
        #download-modal .format-options {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        #download-modal .format-options button {
            flex: 1;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s;
        }
        
        #download-modal .format-options button:hover {
            opacity: 0.9;
        }
        
        /* أنماط إضافية للجدول في المحرر */
        #editor-area table {
            border-collapse: collapse;
            width: 100%;
            margin: 10px 0;
        }
        
        #editor-area table, #editor-area th, #editor-area td {
            border: 1px solid #ddd;
        }
        
        #editor-area th, #editor-area td {
            padding: 8px;
            text-align: left;
            min-width: 50px;
        }
        
        #editor-area th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        
        #editor-area tr:hover {
            background-color: #f9f9f9;
        }
        
        /* أنماط لنافذة إدراج الجدول */
        .form-row {
            display: flex;
            gap: 10px;
            margin-bottom: 15px;
        }
        
        .form-group {
            flex: 1;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        .form-group input {
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        
        .modal-actions {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }
        
        .modal-actions button {
            flex: 1;
        }
        
        /* أنماط إضافية لمحدد التحميل */
        .download-select-container {
            margin-top: 15px;
        }
        
        .download-select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: white;
            font-size: 14px;
            cursor: pointer;
        }
        
        .download-select:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        }
        
        .download-btn {
            width: 100%;
            margin-top: 10px;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s;
        }
        
        .download-btn:hover {
            background-color: #0056b3;
        }
        
        .download-btn:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
    `;
    document.head.appendChild(style);
    
    // إضافة مكتبة JSZip لإنشاء ملفات zip
    const jsZipScript = document.createElement('script');
    jsZipScript.src = 'jszip.min.js';
    document.head.appendChild(jsZipScript);
    
    // إضافة مكتبة jsPDF لإنشاء ملفات PDF
    const jsPdfScript = document.createElement('script');
    jsPdfScript.src = 'jspdf.umd.min.js';
    document.head.appendChild(jsPdfScript);
    
    // إضافة مكتبة html2canvas لتحويل HTML إلى canvas
    const html2canvasScript = document.createElement('script');
    html2canvasScript.src = 'html2canvas.min.js';
    document.head.appendChild(html2canvasScript);
    
    // إضافة المزيد من الخطوط إلى القائمة
    const fontSelect = document.getElementById('font-family');
    const additionalFonts = [
        "Arial Black, sans-serif",
        "Comic Sans MS, cursive",
        "Impact, sans-serif",
        "Lucida Console, monospace",
        "Lucida Sans Unicode, sans-serif",
        "Palatino Linotype, serif",
        "Symbol, sans-serif",
        "Webdings, sans-serif",
        "Wingdings, sans-serif",
        "MS Sans Serif, sans-serif",
        "MS Serif, serif",
        "Andalus, serif",
        "Arabic Typesetting, serif",
        "Sakkal Majalla, sans-serif",
        "Simplified Arabic, sans-serif",
        "Traditional Arabic, serif",
        "Dubai, sans-serif",
        "Almarai, sans-serif",
        "Tajawal, sans-serif",
        "Lateef, serif",
        "Amiri, serif",
        "Scheherazade, serif",
        "Noto Kufi Arabic, sans-serif",
        "Lemonada, cursive",
        "Mirza, cursive",
        "Rakkas, cursive",
        "Reem Kufi, sans-serif",
        "Harmattan, sans-serif",
        "Aref Ruqaa, serif",
        "Changa, sans-serif",
        "Mada, sans-serif",
        "Markazi Text, serif",
        "El Messiri, sans-serif",
        "Cairo, sans-serif",
        "Jomhuria, cursive",
        "Katibeh, cursive",
        "Ruthie, cursive",
        "Sree Krushnadevaraya, serif",
        "Akatab, sans-serif",
        "Al Qalam Quran, serif",
        "Al Qalam Quran 2, serif"
    ];
    
    additionalFonts.forEach(font => {
        const option = document.createElement('option');
        option.value = font;
        option.textContent = font.split(',')[0].replace(/'/g, '');
        fontSelect.appendChild(option);
    });
    
    // تهيئة حجم الخط الافتراضي
    const fontSizeSelect = document.getElementById('font-size');
    if (fontSizeSelect) {
        fontSizeSelect.value = '16px'; // القيمة الافتراضية
    }
    
    // دالة للرجوع عن حجم الصورة
    function revertImageSize() {
        const selectedImage = getSelectedImage() || state.lastModifiedImage;
        
        if (selectedImage) {
            // إذا كان لدينا حجم سابق مخزن
            if (state.previousImageSize) {
                // تطبيق الحجم السابق
                selectedImage.style.width = state.previousImageSize.width;
                selectedImage.style.height = state.previousImageSize.height;
                
                // تحديث محدد حجم الصورة
                const imageSizeSelect = document.getElementById('image-size');
                if (state.previousImageSize.width === '' || state.previousImageSize.width === '100%') {
                    imageSizeSelect.value = '100%';
                } else {
                    // محاولة استخراج النسبة المئوية من الحجم السابق
                    if (typeof state.previousImageSize.width === 'string' && state.previousImageSize.width.includes('%')) {
                        imageSizeSelect.value = state.previousImageSize.width;
                    }
                }
                
                console.log('Image size reverted to:', state.previousImageSize);
            } else if (state.originalImageSize) {
                // إذا لم يكن هناك حجم سابق، استخدم الحجم الأصلي
                selectedImage.style.width = '';
                selectedImage.style.height = '';
                document.getElementById('image-size').value = '100%';
                
                console.log('Image size reset to original');
            }
        }
    }
    
    // إضافة اختصارات لوحة المفاتيح للرجوع عن تغييرات الألوان وحجم الصورة
    document.addEventListener('keydown', (e) => {
        // الرجوع عن لون النص مع Ctrl+Shift+T
        if (e.ctrlKey && e.shiftKey && e.key === 'T') {
            e.preventDefault();
            
            // تطبيق اللون السابق
            const textColorInput = document.getElementById('text-color');
            textColorInput.value = state.previousTextColor;
            document.execCommand('foreColor', false, state.previousTextColor);
            
            // إعادة التركيز على المحرر
            editorArea.focus();
            console.log('Text color reverted to:', state.previousTextColor);
        }
        
        // الرجوع عن لون الخلفية مع Ctrl+Shift+H
        if (e.ctrlKey && e.shiftKey && e.key === 'H') {
            e.preventDefault();
            
            // تطبيق اللون السابق
            const highlightColorInput = document.getElementById('highlight-color');
            highlightColorInput.value = state.previousHighlightColor;
            document.execCommand('backColor', false, state.previousHighlightColor);
            
            // إعادة التركيز على المحرر
            editorArea.focus();
            console.log('Highlight color reverted to:', state.previousHighlightColor);
        }
        
        // الرجوع عن حجم الصورة مع Ctrl+Shift+I
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            revertImageSize();
            editorArea.focus();
        }
        
        // حفظ المشروع مع Ctrl+S
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            saveCurrentFile();
            alert('Project saved successfully!');
        }
        
        // إدراج جدول سريع مع Ctrl+T
        if ((e.ctrlKey || e.metaKey) && e.key === 't' && !e.shiftKey) {
            e.preventDefault();
            
            // التحقق مما إذا كان المؤشر داخل جدول
            if (isCursorInsideTable()) {
                alert('Cannot create a table inside another table!');
                return;
            }
            
            // إذا كان المحرر يعرض عنصرًا نائبًا، امسحه أولاً
            if (editorArea.classList.contains('show-placeholder')) {
                editorArea.innerHTML = '';
                editorArea.classList.remove('show-placeholder');
            }
            
            // إنشاء جدول بسيط مع id
            const tableHTML = `<table border="1" style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                <tr>
                    <td style="padding: 8px;">&nbsp;</td>
                    <td style="padding: 8px;">&nbsp;</td>
                </tr>
                <tr>
                    <td style="padding: 8px;">&nbsp;</td>
                    <td style="padding: 8px;">&nbsp;</td>
                </tr>
            </table>`;
            
            insertHTML(tableHTML);
            editorArea.focus();
        }
    });
    
    // إضافة عناصر تحكم ارتفاع السطر
    const increaseLineHeightBtn = document.getElementById('increase-line-height');
    const decreaseLineHeightBtn = document.getElementById('decrease-line-height');
    
    if (increaseLineHeightBtn) {
        increaseLineHeightBtn.addEventListener('click', () => {
            // إذا كان المحرر يعرض عنصرًا نائبًا، امسحه أولاً
            if (editorArea.classList.contains('show-placeholder')) {
                editorArea.innerHTML = '';
                editorArea.classList.remove('show-placeholder');
            }
            
            // الحصول على ارتفاع السطر الحالي
            const currentLineHeight = parseFloat(editorArea.style.lineHeight) || 1.2;
            
            // الزيادة بمقدار 0.2
            const newLineHeight = currentLineHeight + 0.2;
            
            // تطبيق ارتفاع السطر الجديد
            editorArea.style.lineHeight = newLineHeight;
            
            editorArea.focus();
        });
    }
    
    if (decreaseLineHeightBtn) {
        decreaseLineHeightBtn.addEventListener('click', () => {
            // إذا كان المحرر يعرض عنصرًا نائبًا، امسحه أولاً
            if (editorArea.classList.contains('show-placeholder')) {
                editorArea.innerHTML = '';
                editorArea.classList.remove('show-placeholder');
            }
            
            // الحصول على ارتفاع السطر الحالي
            const currentLineHeight = parseFloat(editorArea.style.lineHeight) || 1.2;
            
            // النقصان بمقدار 0.2، ولكن ليس أقل من 0.8
            const newLineHeight = Math.max(0.8, currentLineHeight - 0.2);
            
            // تطبيق ارتفاع السطر الجديد
            editorArea.style.lineHeight = newLineHeight;
            
            editorArea.focus();
        });
    }
    
    // إضافة اختصارات لوحة المفاتيح لارتفاع السطر
    document.addEventListener('keydown', (e) => {
        // زيادة ارتفاع السطر مع Ctrl+Alt+Up
        if (e.ctrlKey && e.altKey && e.key === 'ArrowUp') {
            e.preventDefault();
            
            // إذا كان المحرر يعرض عنصرًا نائبًا، امسحه أولاً
            if (editorArea.classList.contains('show-placeholder')) {
                editorArea.innerHTML = '';
                editorArea.classList.remove('show-placeholder');
            }
            
            // الحصول على ارتفاع السطر الحالي
            const currentLineHeight = parseFloat(editorArea.style.lineHeight) || 1.2;
            
            // الزيادة بمقدار 0.2
            const newLineHeight = currentLineHeight + 0.2;
            
            // تطبيق ارتفاع السطر الجديد
            editorArea.style.lineHeight = newLineHeight;
            
            editorArea.focus();
        }
        
        // نقصان ارتفاع السطر مع Ctrl+Alt+Down
        if (e.ctrlKey && e.altKey && e.key === 'ArrowDown') {
            e.preventDefault();
            
            // إذا كان المحرر يعرض عنصرًا نائبًا، امسحه أولاً
            if (editorArea.classList.contains('show-placeholder')) {
                editorArea.innerHTML = '';
                editorArea.classList.remove('show-placeholder');
            }
            
            // الحصول على ارتفاع السطر الحالي
            const currentLineHeight = parseFloat(editorArea.style.lineHeight) || 1.2;
            
            // النقصان بمقدار 0.2، ولكن ليس أقل من 0.8
            const newLineHeight = Math.max(0.8, currentLineHeight - 0.2);
            
            // تطبيق ارتفاع السطر الجديد
            editorArea.style.lineHeight = newLineHeight;
            
            editorArea.focus();
        }
    });
    
    // إضافة زر إدراج الجدول يدويًا إذا لم يكن موجودًا في HTML
    const insertTableButton = document.getElementById('insert-table');
    if (insertTableButton) {
        insertTableButton.addEventListener('click', openTableModal);
    }
});

// منع سلوك السحب الافتراضي
editorArea.addEventListener('dragover', (e) => {
    e.preventDefault();
});

editorArea.addEventListener('drop', (e) => {
    e.preventDefault();
});

// مستمع حدث زر الحفظ - تم نقله خارج setupFormattingTools لضمان ارتباطه دائمًا
document.getElementById('save-project').addEventListener('click', () => {
    const saveResult = saveCurrentFile();
    if (saveResult) {
        alert('Project saved successfully!');
    }
});

// إغلاق وضع التحرير عند الضغط على Escape في أي مكان على الصفحة
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (state.editingDescriptionId) {
            cancelDescriptionEdit(state.editingDescriptionId);
        }
        if (state.editingProjectNameId) {
            cancelProjectNameEdit(state.editingProjectNameId);
        }
    }
});