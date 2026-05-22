let currentQuestion = 0;
let answers = [];

const scaleLabels = ['非常不同意', '不同意', '有点不同意', '中立', '有点同意', '同意', '非常同意'];

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function startTest() {
    currentQuestion = 0;
    answers = new Array(questions.length).fill(null);
    showPage('test-page');
    displayQuestion();
}

function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-text').textContent = question.text;
    document.getElementById('question-number').textContent =
        `${currentQuestion + 1} / ${questions.length}`;

    const scaleContainer = document.getElementById('scale-options');
    scaleContainer.innerHTML = '';

    for (let i = 1; i <= 7; i++) {
        const btn = document.createElement('button');
        btn.className = 'scale-btn' + (answers[currentQuestion] === i ? ' selected' : '');
        btn.textContent = i;
        btn.onclick = () => selectScale(i);
        scaleContainer.appendChild(btn);
    }

    document.getElementById('scale-label-left').textContent = '非常不同意';
    document.getElementById('scale-label-right').textContent = '非常同意';
    updateProgress();
    updateNavigation();
}

function selectScale(value) {
    answers[currentQuestion] = value;
    document.querySelectorAll('.scale-btn').forEach((btn, idx) => {
        btn.classList.toggle('selected', idx + 1 === value);
    });
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

function updateNavigation() {
    document.getElementById('prev-btn').disabled = currentQuestion === 0;
    const nextBtn = document.getElementById('next-btn');
    if (currentQuestion === questions.length - 1) {
        nextBtn.textContent = '查看结果';
        nextBtn.onclick = showResult;
    } else {
        nextBtn.textContent = '下一题';
        nextBtn.onclick = nextQuestion;
    }
}

function nextQuestion() {
    if (answers[currentQuestion] === null) {
        alert('请选择一个选项');
        return;
    }
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function calculateResult() {
    const dims = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    questions.forEach((q, idx) => {
        const val = answers[idx];
        if (val === null) return;
        dims[q.direction] += val;
        const opposite = { E:'I', I:'E', S:'N', N:'S', T:'F', F:'T', J:'P', P:'J' };
        dims[opposite[q.direction]] += (8 - val);
    });

    const type = (dims.E >= dims.I ? 'E' : 'I')
        + (dims.S >= dims.N ? 'S' : 'N')
        + (dims.T >= dims.F ? 'T' : 'F')
        + (dims.J >= dims.P ? 'J' : 'P');

    return monsters.find(m => m.type === type) || monsters[0];
}

function showResult() {
    if (answers[currentQuestion] === null) {
        alert('请选择一个选项');
        return;
    }
    const result = calculateResult();

    document.getElementById('monster-image').innerHTML =
        `<img src="${result.image}" alt="${result.name}">`;
    document.getElementById('monster-name').textContent = result.name;
    document.getElementById('monster-desc').textContent = result.description;

    const traitsContainer = document.getElementById('monster-traits');
    traitsContainer.innerHTML = '';
    result.traits.forEach(trait => {
        const span = document.createElement('span');
        span.className = 'trait';
        span.textContent = trait;
        traitsContainer.appendChild(span);
    });

    showPage('result-page');
}

function restartTest() {
    showPage('start-page');
}
