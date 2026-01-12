document.addEventListener('DOMContentLoaded', () => {

    // --- DATA (Tiada Perubahan) ---
    const hurufJawi = [
        { jawi: 'ا', rumi: 'Alif', contoh: 'Ayam', gambar: 'images/ayam.svg' },
        { jawi: 'ب', rumi: 'Ba', contoh: 'Basikal', gambar: 'images/basikal.svg' },
        { jawi: 'ت', rumi: 'Ta', contoh: 'Tapir', gambar: 'images/tapir.svg' },
        { jawi: 'ث', rumi: 'Sa', contoh: 'Sampan', gambar: 'images/sampan.svg' },
        { jawi: 'ج', rumi: 'Jim', contoh: 'Jam', gambar: 'images/jam.svg' },
        { jawi: 'ح', rumi: 'Ha', contoh: 'Harimau', gambar: 'images/harimau.svg' },
        { jawi: 'خ', rumi: 'Kha', contoh: 'Kereta', gambar: 'images/kereta.svg' },
        { jawi: 'د', rumi: 'Dal', contoh: 'Dubuk', gambar: 'images/gajah.svg' }, 
        { jawi: 'ذ', rumi: 'Zal', contoh: 'Zirafah', gambar: 'images/gajah.svg' }, 
        { jawi: 'ر', rumi: 'Ra', contoh: 'Rusa', gambar: 'images/monyet.svg' }, 
        { jawi: 'ز', rumi: 'Za', contoh: 'Zebra', gambar: 'images/monyet.svg' }, 
        { jawi: 'س', rumi: 'Sin', contoh: 'Singa', gambar: 'images/harimau.svg' }, 
        { jawi: 'ش', rumi: 'Syin', contoh: 'Syarikat', gambar: 'images/kereta.svg' }, 
        { jawi: 'ص', rumi: 'Sad', contoh: 'Sotong', gambar: 'images/sampan.svg' }, 
        { jawi: 'ض', rumi: 'Dhad', contoh: 'Landak', gambar: 'images/monyet.svg' }, 
        { jawi: 'ط', rumi: 'Ta', contoh: 'Tomyam', gambar: 'images/sampan.svg' }, 
        { jawi: 'ظ', rumi: 'Zha', contoh: 'Unta', gambar: 'images/lembu.svg' }, 
        { jawi: 'ع', rumi: 'Ain', contoh: 'Arnab', gambar: 'images/monyet.svg' }, 
        { jawi: 'غ', rumi: 'Ghain', contoh: 'Gajah', gambar: 'images/gajah.svg' },
        { jawi: 'ف', rumi: 'Fa', contoh: 'Filipina', gambar: 'images/wau.svg' }, 
        { jawi: 'ق', rumi: 'Qaf', contoh: 'Qari', gambar: 'images/jam.svg' }, 
        { jawi: 'ك', rumi: 'Kaf', contoh: 'Kambing', gambar: 'images/lembu.svg' }, 
        { jawi: 'ل', rumi: 'Lam', contoh: 'Lembu', gambar: 'images/lembu.svg' },
        { jawi: 'م', rumi: 'Mim', contoh: 'Monyet', gambar: 'images/monyet.svg' },
        { jawi: 'ن', rumi: 'Nun', contoh: 'Nuri', gambar: 'images/nuri.svg' },
        { jawi: 'و', rumi: 'Wau', contoh: 'Wau', gambar: 'images/wau.svg' },
        { jawi: 'ه', rumi: 'Ha', contoh: 'Helikopter', gambar: 'images/helikopter.svg' },
        { jawi: 'ي', rumi: 'Ya', contoh: 'Yoyo', gambar: 'images/jam.svg' }, 
        { jawi: 'ڠ', rumi: 'Nga', contoh: 'Naga', gambar: 'images/naga.svg' },
        { jawi: 'ڤ', rumi: 'Pa', contoh: 'Papan', gambar: 'images/wau.svg' }, 
        { jawi: 'چ', rumi: 'Cha', contoh: 'Cakar', gambar: 'images/harimau.svg' }, 
    ];

    const soalanQuiz = {
        easy: [
            { jawi: 'بابو', rumi: 'bapa' }, { jawi: 'ايبو', rumi: 'ibu' }, { jawi: 'ماسakan', rumi: 'masakan' },
            { jawi: 'رمان', rumi: 'rumah' }, { jawi: 'سكوله', rumi: 'sekolah' }
        ],
        medium: [
            { jawi: 'اورڠ دالم بس', rumi: 'orang dalam bas' }, { jawi: 'كنيڠ اسو امڤو', rumi: 'kucing ayam kampung' },
            { jawi: 'ساي سوك مكن ناسي ليماق', rumi: 'saya suka makan nasi lemak' },
            { jawi: 'دي كمنن ايتادا بنيق بيسق', rumi: 'di kampong itu ada pokok pisang' },
            { jawi: 'موريد موريد دسن سواء بلجار', rumi: 'murid murid duduk sambil belajar' }
        ],
        hard: [
            { jawi: 'برسلتن کبڠساءن مليسيا', rumi: 'pertubuhan kebangsaan malaysia' },
            { jawi: 'صاحاب صاحاب ممباڠون کتمجواهن نڬارا', rumi: 'sahabat sahabat membangun ketamadunan negara' },
            { jawi: 'کمنترين ڤلجراءن مليسيا', rumi: 'kementerian pelajaran malaysia' },
            { jawi: 'تڠکو عبدالرحمن', rumi: 'tunku abdul rahman' },
            { jawi: 'برسيدان نڬارا برساتو', rumi: 'persidangan negara negara bersatu' }
        ]
    };

    // --- DOM ELEMENTS ---
    const homeSection = document.getElementById('homeSection');
    const belajarBtn = document.getElementById('belajarBtn');
    const quizBtn = document.getElementById('quizBtn');
    const belajarModal = document.getElementById('belajarModal');
    const closeModalBtn = document.querySelector('.close-btn');
    const hurufGrid = document.getElementById('hurufGrid');
    const quizSection = document.getElementById('quizSection');
    const diffBtns = document.querySelectorAll('.diff-btn');
    const quizArea = document.getElementById('quizArea');
    const questionText = document.getElementById('questionText');
    const answerInput = document.getElementById('answerInput');
    const submitBtn = document.getElementById('submitBtn');
    const feedback = document.getElementById('feedback');
    const nextBtn = document.getElementById('nextBtn');
    const cancelBtn = document.getElementById('cancelBtn'); // BUTANG BATAL BARU
    const scoreDisplay = document.getElementById('score');
    const currentQuestionDisplay = document.getElementById('currentQuestion');
    const totalQuestionsDisplay = document.getElementById('totalQuestions');

    // --- STATE ---
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;

    // --- EVENT LISTENERS ---
    belajarBtn.addEventListener('click', tampilkanModalBelajar);
    closeModalBtn.addEventListener('click', tutupModalBelajar);
    quizBtn.addEventListener('click', mulakanKuiz);
    window.addEventListener('click', (event) => { if (event.target == belajarModal) tutupModalBelajar(); });
    diffBtns.forEach(btn => { btn.addEventListener('click', () => pilihTahap(btn.dataset.level)); });
    submitBtn.addEventListener('click', semakJawapan);
    answerInput.addEventListener('keyup', (event) => { if (event.key === 'Enter') semakJawapan(); });
    nextBtn.addEventListener('click', soalanSeterusnya);
    cancelBtn.addEventListener('click', resetQuiz); // EVENT LISTENER BARU

    // --- FUNCTIONS ---
    function tampilkanModalBelajar() {
        hurufGrid.innerHTML = '';
        hurufJawi.forEach((huruf, index) => {
            const card = document.createElement('div');
            card.className = 'huruf-card';
            card.style.animationDelay = `${index * 0.05}s`;
            card.innerHTML = `
                <div class="jawi">${huruf.jawi}</div>
                <div class="rumi">${huruf.rumi}</div>
                <div class="contoh">${huruf.contoh}</div>
                <img src="${huruf.gambar}" alt="${huruf.contoh}" loading="lazy">
            `;
            hurufGrid.appendChild(card);
        });
        belajarModal.style.display = 'block';
    }

    function tutupModalBelajar() {
        belajarModal.style.display = 'none';
    }

    function mulakanKuiz() {
        homeSection.classList.add('hidden');
        quizSection.classList.remove('hidden');
        quizArea.classList.add('hidden');
    }

    function pilihTahap(level) {
        diffBtns.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        currentQuestions = [...soalanQuiz[level]];
        currentQuestionIndex = 0;
        score = 0;
        scoreDisplay.textContent = score;
        
        document.querySelector('.difficulty-buttons').style.display = 'none';
        quizSection.querySelector('h2').style.display = 'none';
        quizArea.classList.remove('hidden');

        totalQuestionsDisplay.textContent = currentQuestions.length;
        paparSoalan();
    }

    function paparSoalan() {
        if (currentQuestionIndex < currentQuestions.length) {
            const soalan = currentQuestions[currentQuestionIndex];
            questionText.textContent = soalan.jawi;
            answerInput.value = '';
            feedback.textContent = '';
            feedback.className = 'feedback-text';
            currentQuestionDisplay.textContent = currentQuestionIndex + 1;
            nextBtn.classList.add('hidden');
            submitBtn.disabled = false;
            answerInput.disabled = false;
            answerInput.focus();
        } else {
            // Tamat Kuiz
            questionText.textContent = 'Kuiz Tamat!';
            answerInput.style.display = 'none';
            submitBtn.style.display = 'none';
            feedback.innerHTML = `Skor Akhir Anda: <strong>${score} / ${currentQuestions.length}</strong>`;
            feedback.className = 'feedback-text correct';
            nextBtn.textContent = 'Main Semula';
            nextBtn.classList.remove('hidden');
            // Guna resetQuiz untuk butang "Main Semula"
            nextBtn.onclick = resetQuiz; 
        }
    }

    function semakJawapan() {
        const jawapanPengguna = answerInput.value.toLowerCase().trim();
        const jawapanBetul = currentQuestions[currentQuestionIndex].rumi.toLowerCase().trim();

        if (jawapanPengguna === jawapanBetul) {
            feedback.textContent = 'Betul! 🎉';
            feedback.className = 'feedback-text correct';
            score++;
            scoreDisplay.textContent = score;
        } else {
            feedback.textContent = `Salah. Jawapan betul: ${currentQuestions[currentQuestionIndex].rumi}`;
            feedback.className = 'feedback-text incorrect';
        }

        submitBtn.disabled = true;
        answerInput.disabled = true;
        nextBtn.classList.remove('hidden');
    }

    function soalanSeterusnya() {
        currentQuestionIndex++;
        quizArea.style.animation = 'none';
        setTimeout(() => {
            quizArea.style.animation = 'fadeIn 0.5s';
            paparSoalan();
        }, 10);
    }

    // FUNGSI BARU: Untuk reset kuiz dan kembali ke homepage
    function resetQuiz() {
        // Reset UI
        homeSection.classList.remove('hidden');
        quizSection.classList.add('hidden');
        
        // Reset state
        currentQuestions = [];
        currentQuestionIndex = 0;
        score = 0;
        scoreDisplay.textContent = '0';
        
        // Reset quiz UI elements to initial state
        feedback.textContent = '';
        feedback.className = 'feedback-text';
        answerInput.value = '';
        answerInput.style.display = 'block'; // Pastikan input field kelihatan
        submitBtn.style.display = 'block';   // Pastikan butang hantar kelihatan
        answerInput.disabled = false;
        submitBtn.disabled = false;
        nextBtn.classList.add('hidden');
        nextBtn.onclick = soalanSeterusnya; // Kembalikan fungsi asal butang next

        // Reset difficulty selection
        diffBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.difficulty-buttons').style.display = 'flex';
        quizSection.querySelector('h2').style.display = 'block';
        quizArea.classList.add('hidden');
    }
});
