// =========================================
// SUBJECT DATABASE (Web Dev + Core Subjects)
// =========================================
const SUBJECT_DATA = {
    "Web Development": [
        {
            title: "1. Internet & Web Technologies",
            summary: [
                "HTTP vs HTTPS: HTTPS encrypts data using SSL/TLS on port 443; HTTP uses port 80.",
                "Architectures: Client-Server (centralized), Peer-to-Peer (decentralized), and 3-Tier (Presentation, Logic, Data).",
                "Core Components: Client-side (HTML/CSS/JS), Server-side (Node/Python/PHP), and Protocols (TCP/IP, DNS, HTTP)."
            ],
            code: "https://www.example.com:443/courses/index.html?id=10#top",
            flashcards: [
                { q: "What port does HTTPS use by default?", a: "Port 443 (with SSL/TLS encryption)." },
                { q: "What are the 3 tiers in a 3-Tier Architecture?", a: "1. Presentation Tier (UI), 2. Application/Logic Tier, 3. Data Tier (Database)." }
            ],
            quiz: [
                { q: "Which protocol translates domain names into IP addresses?", options: ["HTTP", "DNS", "FTP", "SMTP"], answer: 1 },
                { q: "Which tier handles database storage in a 3-tier model?", options: ["Presentation", "Logic", "Data Tier", "Client Tier"], answer: 2 }
            ]
        },
        {
            title: "2. HTML Fundamentals & Structure",
            summary: [
                "Document Structure: <!DOCTYPE html>, <html>, <head> (metadata, viewport, favicon), and <body>.",
                "Paired vs Unpaired: Paired tags have closing tags (<p></p>); Unpaired/void tags are self-closing (<br>, <hr>, <img>, <meta>).",
                "Block vs Inline: Block elements (<div>, <h1>, <p>) start on a new line; Inline elements (<span>, <a>, <b>) flow within text."
            ],
            code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<link rel="icon" type="image/png" href="favicon.png">`,
            flashcards: [
                { q: "Difference between <div> and <span>?", a: "<div> is a block-level container; <span> is an inline container." },
                { q: "Name three unpaired (self-closing) HTML tags.", a: "<br>, <hr>, <img>, <input>, <meta>" }
            ],
            quiz: [
                { q: "Which tag is an inline element?", options: ["<div>", "<p>", "<span>", "<h1>"], answer: 2 },
                { q: "Where are <meta> tags and <title> placed?", options: ["<body>", "<head>", "<footer>", "<nav>"], answer: 1 }
            ]
        },
        {
            title: "3. HTML Text Formatting & Semantics",
            summary: [
                "Semantic vs Visual: <strong> and <em> convey meaning to screen readers; <b> and <i> are purely visual.",
                "Quotations & Abbreviations: Use <q> for inline quotes, <blockquote> for block quotes, and <abbr title='...'> for acronyms.",
                "Semantic Layout: <header>, <nav>, <main>, <article>, <section>, <aside>, <figure>, <figcaption>, and <footer>."
            ],
            code: `<article>\n  <h2>News Title</h2>\n  <p>Water is H<sub>2</sub>O and E = mc<sup>2</sup>.</p>\n</article>`,
            flashcards: [
                { q: "Which tag is better for accessibility: <b> or <strong>?", a: "<strong>, because screen readers emphasize it semantically." },
                { q: "Which tag pairs with <figure> to provide an image caption?", a: "<figcaption>" }
            ],
            quiz: [
                { q: "Which tag defines subscript text (like H2O)?", options: ["<sup>", "<sub>", "<small>", "<ins>"], answer: 1 },
                { q: "Which semantic tag is used for main navigation links?", options: ["<aside>", "<nav>", "<section>", "<header>"], answer: 1 }
            ]
        },
        {
            title: "4. HTML Lists & Tables",
            summary: [
                "Lists: Ordered (<ol type='A' start='3' reversed>), Unordered (<ul>), and Description (<dl>, <dt>, <dd>).",
                "Table Structure: <table>, <thead>, <tbody>, <tfoot>, <tr> (row), <th> (header), and <td> (data cell).",
                "Cell Merging: Use colspan='2' to merge columns horizontally and rowspan='2' to merge rows vertically."
            ],
            code: `<table border="1">\n  <tr><th colspan="2">Student Marks</th></tr>\n  <tr><td>Math</td><td>95</td></tr>\n</table>`,
            flashcards: [
                { q: "What are the 3 tags used in a Description List?", a: "<dl> (list), <dt> (term), and <dd> (description)." },
                { q: "Which attribute merges two cells horizontally across columns?", a: "colspan='2'" }
            ],
            quiz: [
                { q: "Which <ol> attribute reverses the numbering order?", options: ["invert", "backward", "reversed", "desc"], answer: 2 },
                { q: "Which tag defines a table header cell?", options: ["<td>", "<tr>", "<th>", "<thead>"], answer: 2 }
            ]
        },
        {
            title: "5. HTML Hyperlinks & Multimedia",
            summary: [
                "Anchor Tags: <a href='...' target='_blank' title='Tooltip' download>. Supports mailto:, tel:, and #bookmark jumps.",
                "URLs: Absolute URLs include full domain (https://...); Relative URLs point to local files (./about.html).",
                "Multimedia: <img>, <svg> (scalable vector graphics), <audio controls>, <video controls>, and <iframe> for YouTube embeds."
            ],
            code: `<a href="mailto:help@examprep.com">Email Us</a>\n<a href="#section2">Jump to Section 2</a>`,
            flashcards: [
                { q: "Which attribute opens a link in a new browser tab?", a: "target='_blank'" },
                { q: "What prefix creates a clickable phone link in href?", a: "tel: (e.g., href='tel:+911234567890')" }
            ],
            quiz: [
                { q: "Which attribute forces a browser to download a linked file?", options: ["save", "download", "target", "href"], answer: 1 },
                { q: "Which tag embeds an external webpage or YouTube video?", options: ["<embed>", "<video>", "<iframe>", "<object>"], answer: 2 }
            ]
        },
        {
            title: "6. HTML Forms & Validation",
            summary: [
                "Form Methods: GET appends form data to the URL (for searches); POST sends data securely in the request body.",
                "Controls: <input> (text, password, radio, checkbox, file, date, submit, reset), <textarea>, <select>/<option>, <fieldset>.",
                "Restrictions: required, readonly (submitted with form), disabled (not submitted), maxlength, and autofocus."
            ],
            code: `<form action="/submit" method="POST">\n  <label for="u">User:</label>\n  <input id="u" type="text" maxlength="20" required>\n</form>`,
            flashcards: [
                { q: "Difference between readonly and disabled inputs?", a: "readonly values are submitted with the form; disabled inputs are ignored on submit." },
                { q: "When should you use method='POST' over GET?", a: "When sending sensitive data (like passwords) or uploading files." }
            ],
            quiz: [
                { q: "Which input type allows selecting only ONE option from a group?", options: ["checkbox", "radio", "select", "text"], answer: 1 },
                { q: "Which tag groups related elements inside a form with a box?", options: ["<group>", "<fieldset>", "<section>", "<label>"], answer: 1 }
            ]
        },
        {
            title: "7. CSS Fundamentals & Selectors",
            summary: [
                "Integration & Cascade: Inline > Internal (<style>) > External (<link rel='stylesheet'>), unless !important is used.",
                "Selectors: Universal (*), Element (p), Class (.box), ID (#header), Grouping (h1, h2), and Pseudo-classes (:hover, :focus, :first-child).",
                "CSS Variables: Defined in :root (--primary: #4f46e5;) and accessed using var(--primary)."
            ],
            code: `:root { --main-color: #4f46e5; }\n.btn:hover { background: var(--main-color); }`,
            flashcards: [
                { q: "What is the priority order of CSS styles (highest to lowest)?", a: "Inline styles > Internal CSS > External CSS > Browser default." },
                { q: "How do you reference a CSS custom variable named --bg?", a: "var(--bg)" }
            ],
            quiz: [
                { q: "Which selector has the highest specificity?", options: ["Class (.nav)", "Element (div)", "ID (#nav)", "Universal (*)"], answer: 2 },
                { q: "Which pseudo-class activates when a user clicks inside an input?", options: [":hover", ":focus", ":active", ":first-child"], answer: 1 }
            ]
        },
        {
            title: "8. CSS Colors & Backgrounds",
            summary: [
                "Color Formats: HEX (#ff5733), RGB/RGBA (rgba(255, 0, 0, 0.5)), and HSL/HSLA (hue, saturation, lightness, alpha).",
                "Background Properties: background-color, background-image, background-repeat, background-position, background-attachment (fixed/scroll), and background-size (cover/contain)."
            ],
            code: `.hero {\n  background: #0f172a url('banner.jpg') no-repeat center/cover;\n}`,
            flashcards: [
                { q: "What does the 'A' in RGBA and HSLA stand for?", a: "Alpha (opacity from 0.0 transparent to 1.0 opaque)." },
                { q: "Difference between background-size: cover and contain?", a: "cover fills the entire container (may crop); contain fits the whole image inside." }
            ],
            quiz: [
                { q: "Which background-attachment keeps the image fixed during scrolling?", options: ["scroll", "local", "fixed", "sticky"], answer: 2 },
                { q: "In HSL(120, 100%, 50%), what does 120 represent?", options: ["Lightness", "Hue (Green)", "Saturation", "Opacity"], answer: 1 }
            ]
        },
        {
            title: "9. CSS Box Model, Positioning & Layouts",
            summary: [
                "Box Model: Content -> Padding -> Border -> Margin. box-sizing: border-box includes padding and border inside width/height.",
                "Positioning: static (default), relative (offset from self), absolute (relative to nearest positioned ancestor), fixed (viewport), sticky.",
                "Modern Layouts: Flexbox (1D row/column alignment) and CSS Grid (2D rows and columns), plus <picture> for responsive images."
            ],
            code: `* { box-sizing: border-box; }\n.flex-center { display: flex; justify-content: center; align-items: center; }`,
            flashcards: [
                { q: "Why is box-sizing: border-box preferred?", a: "It keeps total element width fixed even when padding and borders are added." },
                { q: "What is Margin Collapse?", a: "When top and bottom margins of adjacent block elements combine into a single margin equal to the larger one." }
            ],
            quiz: [
                { q: "Which position value keeps an element fixed relative to the browser window?", options: ["absolute", "relative", "fixed", "static"], answer: 2 },
                { q: "Which layout system is best for two-dimensional (rows + columns) design?", options: ["Flexbox", "CSS Grid", "Float", "Inline-block"], answer: 1 }
            ]
        },
        {
            title: "10. CSS Typography",
            summary: [
                "Font Properties: font-family (Serif, Sans-serif, Monospace), font-style (italic), font-weight (400/700), font-size (px, rem, em), font-variant (small-caps).",
                "Text Formatting: text-align, text-decoration, text-transform (uppercase), text-indent, letter-spacing, word-spacing, and text-shadow."
            ],
            code: `h1 {\n  font-family: 'Segoe UI', sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n}`,
            flashcards: [
                { q: "Name the 3 primary generic font families in CSS.", a: "Serif, Sans-serif, and Monospace." },
                { q: "Which property capitalizes every letter of text?", a: "text-transform: uppercase;" }
            ],
            quiz: [
                { q: "Which property removes the default underline from <a> links?", options: ["text-style: none", "text-decoration: none", "font-variant: normal", "text-align: left"], answer: 1 },
                { q: "Which generic font family has equal-width characters (used for code)?", options: ["Serif", "Sans-serif", "Monospace", "Cursive"], answer: 2 }
            ]
        },
        {
            title: "11. CSS Table & Form Styling",
            summary: [
                "Tables: border-collapse: collapse merges double cell borders; tr:nth-child(even) creates zebra striping; tr:hover highlights rows.",
                "Forms: Style inputs with padding, border-radius, :focus outlines, resize: vertical on <textarea>, and smooth CSS transitions."
            ],
            code: `table { border-collapse: collapse; }\ntr:nth-child(even) { background-color: #f1f5f9; }`,
            flashcards: [
                { q: "How do you create zebra-striped table rows in CSS?", a: "Use tr:nth-child(even) or tr:nth-child(odd) with a background-color." },
                { q: "How do you prevent users from resizing a textarea horizontally?", a: "resize: vertical; (or resize: none;)" }
            ],
            quiz: [
                { q: "Which property removes double borders between table cells?", options: ["border-spacing: 0", "border-collapse: collapse", "border-style: single", "table-layout: fixed"], answer: 1 },
                { q: "Which CSS property animates input border changes smoothly on focus?", options: ["transform", "transition", "animation-delay", "display"], answer: 1 }
            ]
        },
        {
            title: "12. JavaScript Fundamentals",
            summary: [
                "Variables: var (function-scoped, hoisted as undefined), let & const (block-scoped, exist in Temporal Dead Zone before declaration).",
                "Data Types: Primitives (String, Number, Boolean, Undefined, Null, Symbol, BigInt) vs Reference (Object, Array, Function).",
                "Operators: Arithmetic, Assignment, Strict Comparison (=== vs ==), Logical (&&, ||, !), Ternary (? :), and Bitwise (&, |, ^)."
            ],
            code: `const age = 20;\nconst status = age >= 18 ? "Adult" : "Minor";`,
            flashcards: [
                { q: "What is the Temporal Dead Zone (TDZ)?", a: "The time between entering a block scope and the actual declaration of a let/const variable where accessing it throws a ReferenceError." },
                { q: "Difference between == and === in JavaScript?", a: "== performs type coercion; === checks both value and data type strictly." }
            ],
            quiz: [
                { q: "Which keyword creates a block-scoped constant variable?", options: ["var", "let", "const", "static"], answer: 2 },
                { q: "What does typeof null return in JavaScript?", options: ["'null'", "'undefined'", "'object'", "'boolean'"], answer: 2 }
            ]
        },
        {
            title: "13. JavaScript Objects & Control Flow",
            summary: [
                "Objects: Key-value pairs accessed via dot (obj.name) or bracket (obj['name']) notation; methods use 'this' to refer to the owner object.",
                "Control Flow: if / else if / else, switch statements, loops (for, while, do-while, for...in), break, continue, and labeled loops.",
                "Popup Boxes: alert('Msg'), confirm('OK/Cancel?'), and prompt('Enter input:')."
            ],
            code: `const user = { name: "Riya", greet() { return "Hi " + this.name; } };\nfor (let key in user) { console.log(key); }`,
            flashcards: [
                { q: "Which loop is guaranteed to execute at least once?", a: "do...while loop." },
                { q: "Which popup box returns a boolean (true/false)?", a: "confirm()" }
            ],
            quiz: [
                { q: "Which loop iterates over the enumerable keys of an object?", options: ["for...of", "for...in", "while", "forEach"], answer: 1 },
                { q: "Inside an object method, what does the 'this' keyword refer to?", options: ["The global window", "The object owning the method", "The function parameters", "Undefined"], answer: 1 }
            ]
        }
    ],
    "Mathematics": [
        {
            title: "1. Quadratic Equations & Algebra",
            summary: [
                "Standard Form: ax² + bx + c = 0 (where a ≠ 0).",
                "Quadratic Formula: x = (-b ± √(b² - 4ac)) / 2a.",
                "Discriminant (D = b² - 4ac): D > 0 gives two distinct real roots; D = 0 gives equal real roots; D < 0 gives complex roots."
            ],
            code: "Sum of roots (α + β) = -b/a | Product of roots (αβ) = c/a",
            flashcards: [
                { q: "What is the discriminant of ax² + bx + c = 0?", a: "D = b² - 4ac" },
                { q: "If D = 0, what is the nature of the roots?", a: "Two real and equal roots." }
            ],
            quiz: [
                { q: "If x² - 5x + 6 = 0, what are the roots?", options: ["2 and 3", "-2 and -3", "1 and 6", "5 and 1"], answer: 0 },
                { q: "What is the product of roots for 2x² + 4x - 8 = 0?", options: ["4", "-4", "2", "-2"], answer: 1 }
            ]
        },
        {
            title: "2. Calculus: Limits & Derivatives",
            summary: [
                "Power Rule: d/dx(xⁿ) = n·xⁿ⁻¹.",
                "Product Rule: (uv)' = u'v + uv'. Quotient Rule: (u/v)' = (u'v - uv') / v².",
                "Standard Limits: lim(x→0) (sin x)/x = 1 and lim(x→0) (eˣ - 1)/x = 1."
            ],
            code: "d/dx(sin x) = cos x | d/dx(eˣ) = eˣ | d/dx(ln x) = 1/x",
            flashcards: [
                { q: "What is the derivative of sin(x)?", a: "cos(x)" },
                { q: "What is lim(x→0) (sin x)/x?", a: "1" }
            ],
            quiz: [
                { q: "Find d/dx (3x⁴):", options: ["12x³", "3x³", "12x⁴", "4x³"], answer: 0 },
                { q: "What is the derivative of a constant c?", options: ["1", "c", "0", "x"], answer: 2 }
            ]
        }
    ],
    "Physics": [
        {
            title: "1. Newton's Laws of Motion",
            summary: [
                "First Law (Inertia): A body remains at rest or uniform motion unless acted upon by an external unbalanced force.",
                "Second Law: Force equals rate of change of momentum (F = ma).",
                "Third Law: Every action has an equal and opposite reaction acting on two different bodies."
            ],
            code: "F = m × a | Impulse (J) = F × Δt = Δp",
            flashcards: [
                { q: "What is the SI unit of Force?", a: "Newton (N) = 1 kg·m/s²" },
                { q: "Which law defines inertia?", a: "Newton's First Law of Motion." }
            ],
            quiz: [
                { q: "A 5 kg mass accelerates at 3 m/s². What is the net force?", options: ["8 N", "15 N", "1.6 N", "45 N"], answer: 1 },
                { q: "Action and reaction forces always act on:", options: ["The same body", "Two different bodies", "Only stationary objects", "Frictionless surfaces"], answer: 1 }
            ]
        },
        {
            title: "2. Electrostatics & Current Electricity",
            summary: [
                "Coulomb's Law: F = k·|q₁q₂| / r² where k = 9 × 10⁹ N·m²/C².",
                "Ohm's Law: V = I × R (Voltage = Current × Resistance).",
                "Resistors: Series Req = R₁ + R₂; Parallel 1/Req = 1/R₁ + 1/R₂."
            ],
            code: "Power (P) = V × I = I²R = V²/R",
            flashcards: [
                { q: "State Ohm's Law formula.", a: "V = I × R" },
                { q: "What is the SI unit of electric charge?", a: "Coulomb (C)" }
            ],
            quiz: [
                { q: "Two 4Ω resistors connected in parallel give an equivalent resistance of:", options: ["8Ω", "4Ω", "2Ω", "1Ω"], answer: 2 },
                { q: "Which instrument measures electric current in a circuit?", options: ["Voltmeter", "Ammeter", "Ohmmeter", "Barometer"], answer: 1 }
            ]
        }
    ],
    "Chemistry": [
        {
            title: "1. Atomic Structure & Periodic Trends",
            summary: [
                "Quantum Numbers: Principal (n), Azimuthal (l), Magnetic (mₗ), and Spin (mₛ).",
                "Aufbau Principle: Electrons fill lowest energy orbitals first (1s, 2s, 2p, 3s, 3p, 4s, 3d...).",
                "Periodic Trends: Across a period (left to right), atomic radius decreases while electronegativity increases."
            ],
            code: "Max electrons in a shell = 2n² | Max in an orbital = 2",
            flashcards: [
                { q: "Which element has the highest electronegativity?", a: "Fluorine (F)" },
                { q: "How many electrons can the 'd' subshell hold?", a: "10 electrons (across 5 orbitals)." }
            ],
            quiz: [
                { q: "What is the maximum number of electrons in the n=3 shell?", options: ["8", "18", "32", "2"], answer: 1 },
                { q: "Atomic radius generally _____ moving down a group.", options: ["Decreases", "Increases", "Stays constant", "Becomes zero"], answer: 1 }
            ]
        }
    ],
    "Biology": [
        {
            title: "1. Cell Structure & Genetics",
            summary: [
                "Organelles: Mitochondria (ATP powerhouse), Ribosomes (protein synthesis), Lysosomes (intracellular digestion).",
                "Mitosis vs Meiosis: Mitosis produces 2 identical diploid cells; Meiosis produces 4 haploid gametes.",
                "DNA Base Pairing: Adenine pairs with Thymine (A=T); Guanine pairs with Cytosine (G≡C)."
            ],
            code: "Central Dogma: DNA --(Transcription)--> mRNA --(Translation)--> Protein",
            flashcards: [
                { q: "Which organelle synthesizes proteins?", a: "Ribosomes" },
                { q: "What base replaces Thymine in RNA?", a: "Uracil (U)" }
            ],
            quiz: [
                { q: "Which organelle is known as the powerhouse of the cell?", options: ["Golgi body", "Mitochondria", "Nucleolus", "Vacuole"], answer: 1 },
                { q: "In DNA, Adenine always pairs with:", options: ["Cytosine", "Guanine", "Thymine", "Uracil"], answer: 2 }
            ]
        }
    ]
};

// =========================================
// STATE MANAGEMENT & UI RENDERING
// =========================================
let currentSubject = "Web Development";
let currentTopicIndex = 0;
let currentMode = "summary";
let flashcardIndex = 0;
let quizScore = 0;
let answeredQuestions = new Set();

const subjectBar = document.getElementById("subjectBar");
const topicList = document.getElementById("topicList");
const workspace = document.getElementById("workspace");

// Initialize App
function initApp() {
    renderSubjectBar();
    renderSidebar();
    renderWorkspace();
    setupEventListeners();
}

// Render Subject Pills
function renderSubjectBar() {
    subjectBar.innerHTML = Object.keys(SUBJECT_DATA).map(subj => `
        <button class="subject-pill ${subj === currentSubject ? 'active' : ''}" data-subject="${subj}">
            ${subj}
        </button>
    `).join("");
}

// Render Chapter List
function renderSidebar() {
    const topics = SUBJECT_DATA[currentSubject];
    document.getElementById("sidebarTitle").textContent = `${currentSubject} Chapters (${topics.length})`;
    document.getElementById("currentSubjectBadge").textContent = currentSubject;

    topicList.innerHTML = topics.map((topic, index) => `
        <button class="topic-btn ${index === currentTopicIndex ? 'active' : ''}" data-index="${index}">
            ${topic.title}
        </button>
    `).join("");
}

// Render Active Mode Content
function renderWorkspace() {
    const topic = SUBJECT_DATA[currentSubject][currentTopicIndex];
    document.getElementById("topicHeading").textContent = topic.title;

    if (currentMode === "summary") {
        workspace.innerHTML = `
            <h2 style="margin-bottom: 1rem;">📌 High-Yield Exam Notes</h2>
            <ul style="padding-left: 1.3rem; margin-bottom: 1.2rem;">
                ${topic.summary.map(point => `<li style="margin-bottom: 10px;">${point}</li>`).join("")}
            </ul>
            <h3>💡 Key Formula / Code Syntax</h3>
            <pre class="code-box">${topic.code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
        `;
    } else if (currentMode === "flashcards") {
        const cards = topic.flashcards;
        const card = cards[flashcardIndex % cards.length];
        workspace.innerHTML = `
            <div style="text-align: center;">
                <p style="color: var(--text-muted);">Card ${(flashcardIndex % cards.length) + 1} of ${cards.length} (Click card to flip)</p>
                <div class="flashcard-scene" onclick="this.querySelector('.flashcard').classList.toggle('flipped')">
                    <div class="flashcard">
                        <div class="flashcard-face flashcard-front">
                            <span class="user-pill" style="margin-bottom: 12px;">QUESTION</span>
                            <h3>${card.q}</h3>
                        </div>
                        <div class="flashcard-face flashcard-back">
                            <span class="user-pill" style="background: rgba(255,255,255,0.2); color: #fff; margin-bottom: 12px;">ANSWER</span>
                            <h3>${card.a}</h3>
                        </div>
                    </div>
                </div>
                <div style="display: flex; justify-content: center; gap: 12px;">
                    <button class="btn btn-outline" onclick="changeCard(-1)">← Previous</button>
                    <button class="btn" onclick="changeCard(1)">Next Card →</button>
                </div>
            </div>
        `;
    } else if (currentMode === "quiz") {
        quizScore = 0;
        answeredQuestions.clear();
        workspace.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem;">
                <h2>📝 Chapter Self-Assessment</h2>
                <span id="scoreDisplay" class="user-pill">Score: 0 / ${topic.quiz.length}</span>
            </div>
            ${topic.quiz.map((item, qIdx) => `
                <div style="margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border);">
                    <p style="font-weight: 600; margin-bottom: 10px;">Q${qIdx + 1}. ${item.q}</p>
                    ${item.options.map((opt, oIdx) => `
                        <button class="quiz-option" onclick="checkQuizAnswer(this, ${qIdx}, ${oIdx}, ${item.answer})">
                            ${opt}
                        </button>
                    `).join("")}
                </div>
            `).join("")}
        `;
    } else if (currentMode === "planner") {
        workspace.innerHTML = `
            <h2>📅 AI Personalized Study Plan Generator</h2>
            <p style="color: var(--text-muted); margin-bottom: 1.2rem;">Generate a day-by-day revision schedule for <strong>${currentSubject}</strong>.</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-bottom: 1rem;">
                <div class="form-group">
                    <label>Days Until Exam</label>
                    <input type="number" id="examDays" value="7" min="1" max="60">
                </div>
                <div class="form-group">
                    <label>Daily Study Hours</label>
                    <input type="number" id="dailyHours" value="2" min="1" max="12">
                </div>
                <div class="form-group" style="display: flex; align-items: flex-end;">
                    <button class="btn" style="width: 100%;" onclick="generateStudyPlan()">Generate Schedule</button>
                </div>
            </div>
            <div id="planOutput"></div>
        `;
    }
}

// Helper Functions
window.changeCard = (step) => {
    const total = SUBJECT_DATA[currentSubject][currentTopicIndex].flashcards.length;
    flashcardIndex = (flashcardIndex + step + total) % total;
    renderWorkspace();
};

window.checkQuizAnswer = (btn, qIdx, selected, correct) => {
    if (answeredQuestions.has(qIdx)) return;
    answeredQuestions.add(qIdx);

    const parent = btn.parentElement;
    const buttons = parent.querySelectorAll(".quiz-option");
    buttons.forEach(b => b.disabled = true);

    if (selected === correct) {
        btn.classList.add("correct");
        quizScore++;
    } else {
        btn.classList.add("wrong");
        buttons[correct].classList.add("correct");
    }

    const total = SUBJECT_DATA[currentSubject][currentTopicIndex].quiz.length;
    document.getElementById("scoreDisplay").textContent = `Score: ${quizScore} / ${total}`;
};

window.generateStudyPlan = () => {
    const days = Math.max(1, parseInt(document.getElementById("examDays").value) || 7);
    const hours = Math.max(1, parseInt(document.getElementById("dailyHours").value) || 2);
    const topics = SUBJECT_DATA[currentSubject];

    let rows = "";
    for (let d = 1; d <= days; d++) {
        const topic = topics[(d - 1) % topics.length];
        const taskType = d === days ? "Full Mock Test & Final Revision" : `${topic.title} (Notes + Quiz)`;
        rows += `
            <tr>
                <td><strong>Day ${d}</strong></td>
                <td>${taskType}</td>
                <td>${hours} hrs</td>
                <td><input type="checkbox" style="width: auto;"></td>
            </tr>
        `;
    }

    document.getElementById("planOutput").innerHTML = `
        <table class="plan-table">
            <thead>
                <tr><th>Day</th><th>Focus Topic</th><th>Duration</th><th>Done</th></tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
    `;
};

// Event Listeners
function setupEventListeners() {
    subjectBar.addEventListener("click", (e) => {
        if (e.target.classList.contains("subject-pill")) {
            currentSubject = e.target.dataset.subject;
            currentTopicIndex = 0;
            flashcardIndex = 0;
            renderSubjectBar();
            renderSidebar();
            renderWorkspace();
        }
    });

    topicList.addEventListener("click", (e) => {
        if (e.target.classList.contains("topic-btn")) {
            currentTopicIndex = parseInt(e.target.dataset.index);
            flashcardIndex = 0;
            renderSidebar();
            renderWorkspace();
        }
    });

    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentMode = btn.dataset.mode;
            renderWorkspace();
        });
    });

    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }
}

initApp();