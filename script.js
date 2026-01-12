document.addEventListener('DOMContentLoaded', () => {

    // --- DATA (Tiada Perubahan) ---
    const hurufJawi = [
        { jawi: 'ا', rumi: 'Alif', contoh: 'Ayam', gambar: 'https://images.icon-icons.com/1446/PNG/512/22266chicken_98785.png' },
        { jawi: 'ب', rumi: 'Ba', contoh: 'Basikal', gambar: 'https://i.imgur.com/kP52l2C.png' },
        { jawi: 'ت', rumi: 'Ta', contoh: 'Tapir', gambar: 'https://i.imgur.com/KzWfB5V.png' },
        { jawi: 'ث', rumi: 'Sa', contoh: 'Sampan', gambar: 'https://i.imgur.com/y1J0p4U.png' },
        { jawi: 'ج', rumi: 'Jim', contoh: 'Jam', gambar: 'https://i.imgur.com/G5gK2qS.png' },
        { jawi: 'ح', rumi: 'Ha', contoh: 'Harimau', gambar: 'https://i.imgur.com/o3k9pT8.png' },
        { jawi: 'خ', rumi: 'Kha', contoh: 'Kereta', gambar: 'https://i.imgur.com/j3Qe3gD.png' },
        { jawi: 'د', rumi: 'Dal', contoh: 'Dubuk', gambar: 'https://i.imgur.com/vH4f5rI.png' },
        { jawi: 'ذ', rumi: 'Zal', contoh: 'Zirafah', gambar: 'https://i.imgur.com/X1t2JkL.png' },
        { jawi: 'ر', rumi: 'Ra', contoh: 'Rusa', gambar: 'https://i.imgur.com/Wx4tL9m.png' },
        { jawi: 'ز', rumi: 'Za', contoh: 'Zebra', gambar: 'https://images.icon-icons.com/1446/PNG/96/22229zebra_98835.png' },
        { jawi: 'س', rumi: 'Sin', contoh: 'Singa', gambar: 'https://i.imgur.com/m5n4qoR.png' },
        { jawi: 'ش', rumi: 'Syin', contoh: 'Syarikat', gambar: 'https://i.imgur.com/g7K8l3s.png' },
        { jawi: 'ص', rumi: 'Sad', contoh: 'Sotong', gambar: 'https://i.imgur.com/p0Q9rT2.png' },
        { jawi: 'ض', rumi: 'Dhad', contoh: 'Dhab', gambar: 'https://i.imgur.com/n1L8oUv.png' }, 
        { jawi: 'ط', rumi: 'Ta', contoh: 'Tomyam', gambar: 'https://i.imgur.com/q2R9wX1.png' },
        { jawi: 'ظ', rumi: 'Zha', contoh: 'Zhol', gambar: 'https://i.imgur.com/r3S8yY2.png' }, 
        { jawi: 'ع', rumi: 'Ain', contoh: 'Arnab', gambar: 'https://i.imgur.com/s4T9zZ3.png' },
        { jawi: 'غ', rumi: 'Ghain', contoh: 'Gajah', gambar: 'https://i.imgur.com/t5U0aA4.png' },
        { jawi: 'ف', rumi: 'Fa', contoh: 'Filipina', gambar: 'https://i.imgur.com/u6V1bB5.png' },
        { jawi: 'ق', rumi: 'Qaf', contoh: 'Qari', gambar: 'https://i.imgur.com/v7W2cC6.png' },
        { jawi: 'ك', rumi: 'Kaf', contoh: 'Kambing', gambar: 'https://i.imgur.com/w8X3dD7.png' },
        { jawi: 'ل', rumi: 'Lam', contoh: 'Lembu', gambar: 'https://i.imgur.com/x9Y4eE8.png' },
        { jawi: 'م', rumi: 'Mim', contoh: 'Monyet', gambar: 'https://i.imgur.com/y0Z5fF9.png' },
        { jawi: 'ن', rumi: 'Nun', contoh: 'Nuri', gambar: 'https://i.imgur.com/z1A6gG0.png' },
        { jawi: 'و', rumi: 'Wau', contoh: 'Wau', gambar: 'https://i.imgur.com/a2B7hH1.png' },
        { jawi: 'ه', rumi: 'Ha', contoh: 'Helikopter', gambar: 'https://i.imgur.com/b3C8iI2.png' },
        { jawi: 'ي', rumi: 'Ya', contoh: 'Yoyo', gambar: 'https://i.imgur.com/c4D9jJ3.png' },
        { jawi: 'ڠ', rumi: 'Nga', contoh: 'Naga', gambar: 'https://images.icon-icons.com/1446/PNG/96/22287dragon_98813.png' },
        { jawi: 'ڤ', rumi: 'Pa', contoh: 'Papan', gambar: 'https://img.freepik.com/free-vector/colorful-cosmos-flowers-terracotta-pot_1308-181734.jpg?semt=ais_hybrid&w=740&q=80' },
        { jawi: 'چ', rumi: 'Cha', contoh: 'Cakar', gambar: 'https://i.imgur.com/f7G2mM6.png' },
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

    // --- FUNCTIONS ---
    function tampilkanModalBelajar() {
        hurufGrid.innerHTML = '';
        hurufJawi.forEach((huruf, index) => {
            const card = document.createElement('div');
            card.className = 'huruf-card';
            card.style.animationDelay = `${index * 0.05}s`; // Staggered animation
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
            questionText.textContent = 'Kuiz Tamat!';
            answerInput.style.display = 'none';
            submitBtn.style.display = 'none';
            feedback.innerHTML = `Skor Akhir Anda: <strong>${score} / ${currentQuestions.length}</strong>`;
            feedback.className = 'feedback-text correct';
            nextBtn.textContent = 'Main Semula';
            nextBtn.classList.remove('hidden');
            nextBtn.onclick = () => location.reload();
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
        // Add a fade effect for question transition
        quizArea.style.animation = 'none';
        setTimeout(() => {
            quizArea.style.animation = 'fadeIn 0.5s';
            paparSoalan();
        }, 10);
    }
});
