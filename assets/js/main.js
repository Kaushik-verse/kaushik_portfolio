/*!
 * Chunduri Kaushik — Portfolio
 * Copyright (c) 2026 Chunduri Sai Kaushik. All rights reserved.
 * Unauthorized copying, reuse or redistribution of this file is prohibited. See LICENSE.
 */

'use strict';

// ── DATA ──────────────────────────────────────────────────────────────
const projectData = {
    'hr-assist': { scene: 'hr',
        title: 'Vidura — Agentic HR Assistant', badge: 'AGENTIC AI · MCP',
        technologies: ['Python', 'LangChain', 'Groq gpt-oss-120b', 'FastMCP', 'Pydantic', 'Streamlit', 'SQLite', 'pytest', 'GitHub Actions'],
        description: 'An agentic HR assistant that turns plain-language requests into validated, permission-checked actions for leave, tickets, onboarding, hiring and analytics, through a chat agent, a dashboard or the Model Context Protocol.',
        problem: 'HR teams lose hours to repetitive leave, onboarding, ticket and scheduling work, and naive LLM agents are unsafe for it: permissions written only into a prompt can be talked around.',
        architecture: 'A Streamlit UI, a LangChain tool-calling agent on Groq and a FastMCP server all share one service layer that enforces role-based access, Pydantic validation, business rules and an audit log over SQLite. Agent tools are bound to the signed-in user, so the model can never choose who it acts as.',
        features: ['Role-based access enforced in code; prompt-injection attempts to call admin tools are refused.', 'Leave balances, overlap checks and department-aware team-coverage warnings.', 'One-step onboarding that opens IT, payroll and orientation tickets in a single transaction.', 'Same 19 tools exposed over MCP; 36 tests and CI on every push.'],
        github: 'https://github.com/Kaushik-verse/vidura-agentic-hr-assistant'
    },
    'opspilot': { scene: 'ops',
        title: 'OpsPilot — AI On-Call Engineer', badge: 'AIOPS · AGENTS',
        technologies: ['Python 3.11', 'Kubernetes', 'kubectl / kind', 'Groq gpt-oss-20b / 120b', 'ReAct', 'pytest', 'Docker', 'GitHub Actions'],
        description: 'An AI on-call engineer that finds and fixes broken Kubernetes apps safely, running entirely on free-tier models. Evaluated on the Detection / Localization / Mitigation tasks used by Microsoft\'s AIOpsLab benchmark.',
        problem: 'When one of 14 microservices breaks at 3 a.m., an engineer has to wake up, find which service is the root cause and patch it. Handing an LLM the keys to production is risky and calling a large model for every step is expensive.',
        architecture: 'A ReAct loop (think → act → observe) issues one kubectl command at a time. A safety guard allow-lists read-only and targeted-fix commands and blocks chaining, bulk deletes and scale-to-zero. A model cascade starts on a small model and escalates to the large one only when stuck, and a verification gate re-checks cluster health before the agent may finish.',
        features: ['94% of incidents solved (15/16) across detect, localize and fix tasks.', '69% fewer large-model tokens than a large-model-only baseline (≈4.5k vs 14.6k per incident).', '0 unsafe commands executed: every dangerous command attempt was blocked.', 'Scripted expert solves 16/16 faults on a real kind cluster, validating faults and scorer.', '76 passing tests, CI on GitHub Actions, ₹0 to run.'],
        github: 'https://github.com/Kaushik-verse/opspilot'
    },
    'satyori': { scene: 'rag',
        title: 'Satyori — Hybrid RAG Lab', badge: 'HYBRID RAG · RETRIEVAL',
        technologies: ['Python', 'BM25', 'bge-small embeddings', 'SPLADE++', 'Cross-encoder rerank', 'Groq gpt-oss-120b', 'fastembed (ONNX)', 'Streamlit', 'pytest', 'GitHub Actions'],
        description: 'Satyori (Satya, Sanskrit for truth + Satori, Japanese for insight) is a hybrid RAG assistant for Indian property due diligence and a lab for testing retrieval techniques against each other. Ask about a sale agreement, RERA certificate or title search and it answers with citations, flags documents that contradict each other, and says so when the answer is not there.',
        problem: 'Property papers mix exact identifiers (case numbers, survey numbers, RERA IDs) with plain-language questions like "can I knock it down?". Keyword search misses paraphrases, embeddings miss IDs, and a brochure can quietly contradict the signed agreement.',
        architecture: 'Three retrieval channels (BM25, dense embeddings, SPLADE learned sparse) are fused with z-score fusion weighted per query by a router. A cross-encoder rereads the top 20 and its score is blended 50/50 with the fusion score, then MMR adds diversity. A confidence gate abstains on weak evidence; answers are checked sentence by sentence and figure by figure against their sources. Twelve techniques can be compared in a built-in Arena and Benchmark.',
        features: ['0.744 nDCG@10 on BEIR SciFact, +11% over BM25 and above the published BM25 + reranker (0.688).', '1.00 MRR on a held-out property question set written before any tuning.', 'Found that a web-trained reranker hurts on unfamiliar text (0.742 → 0.687); a 50/50 score blend keeps the gain without the loss.', 'Conflict radar (brochure vs agreement), abstains instead of guessing, three-model council mode.', '49 offline tests, CI on Python 3.11 and 3.13, reproducible benchmarks.'],
        github: 'https://github.com/Kaushik-verse/satyori-hybrid-rag',
        demo: 'https://hybrid-rag-assistant-dxrpvnpurkiwixnbsntq3c.streamlit.app/'
    },
    'pos-system': { scene: 'pos',
        title: 'Fullstack POS System', badge: 'FULL STACK',
        technologies: ['React', 'Spring Boot', 'MySQL'],
        description: 'A full-stack point-of-sale system for inventory management, billing, sales tracking, and business analytics.',
        problem: 'Retail businesses require a unified platform to efficiently manage inventory and sales operations.',
        architecture: 'Built with a React frontend and Spring Boot backend integrated with a relational database for inventory, billing, and transaction management.',
        features: ['Inventory management system.', 'Sales and billing module.', 'Business analytics dashboard.'],
        github: 'https://github.com/Kaushik-verse/Fullstack-pos-system'
    }
};


// ── STATE ─────────────────────────────────────────────────────────────
let mobileOpen = false;
const mouse = { x: typeof window !== 'undefined' ? window.innerWidth/2 : 0, y: typeof window !== 'undefined' ? window.innerHeight/2 : 0 };
const cursor = { x: mouse.x, y: mouse.y, rx: mouse.x, ry: mouse.y };

// ── INIT ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initNavScroll();
    initReveal();
    initLoader();
    initHero();
    initParticleName();
    initNavClock();
    initFluid();
    initAudio();
    initMobileMenu();
    initAnchorLinks();
    initIso();
    initScrollProgress();
    initScramble();
    initCardSpotlight();
    initMagnetic();
    initPostcard();
    initPostcardActions();

    document.querySelectorAll('.project-card').forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.addEventListener('click', () => openModal(card.dataset.project));
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card.dataset.project); } });
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});

// ── CURSOR ────────────────────────────────────────────────────────────
function initCursor() {
    // A crosshair that tracks the pointer exactly, four brackets that trail it,
    // and a coordinate readout. Over anything usable the brackets lock onto its
    // edges and the readout names the action.
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const root = document.getElementById('cur'), cross = document.getElementById('cur-cross'), read = document.getElementById('cur-read');
    const corners = [...root.querySelectorAll('.cur-c')];
    document.documentElement.classList.add('has-cursor');
    const pos = corners.map(() => ({ x: mouse.x, y: mouse.y }));
    const rd = { x: mouse.x, y: mouse.y };
    let target = null, label = '', down = false, shown = false;
    const TARGETS = 'a, button, [role="button"], .project-card, .contact-row, .article-row';
    const labelFor = el =>
        el.dataset.cursor ||
        (el.classList.contains('project-card') ? 'Inspect' :
         el.id === 'postcard-el' ? 'Flip it' :
         el.matches('a[target="_blank"]') ? 'Open ↗' :
         el.matches('a[href^="#"]') ? 'Go to' :
         el.matches('button') ? 'Press' : 'Select');
    window.addEventListener('pointermove', e => {
        mouse.x = e.clientX; mouse.y = e.clientY;
        if (!shown) { shown = true; pos.forEach(p => { p.x = mouse.x; p.y = mouse.y; }); rd.x = mouse.x; rd.y = mouse.y; root.style.opacity = '1'; }
    }, { passive: true });
    document.addEventListener('pointerover', e => {
        const t = e.target instanceof Element ? e.target.closest(TARGETS) : null;
        target = t; label = t ? labelFor(t) : '';
        root.classList.toggle('locked', !!t);
    });
    document.documentElement.addEventListener('pointerleave', () => { root.style.opacity = '0'; shown = false; });
    window.addEventListener('pointerdown', () => { down = true; });
    window.addEventListener('pointerup', () => { down = false; });

    let lastRead = '';
    (function tick() {
        const mx = mouse.x, my = mouse.y;
        cross.style.transform = `translate3d(${mx}px,${my}px,0)`;
        let goals, ease;
        if (target && target.isConnected) {
            const r = target.getBoundingClientRect(), pad = down ? 2 : 7;
            goals = [[r.left - pad, r.top - pad], [r.right + pad, r.top - pad], [r.left - pad, r.bottom + pad], [r.right + pad, r.bottom + pad]];
            ease = 0.24;
        } else {
            const g = down ? 7 : 15;
            goals = [[mx - g, my - g], [mx + g, my - g], [mx - g, my + g], [mx + g, my + g]];
            ease = 0.2;
        }
        corners.forEach((c, i) => {
            const p = pos[i];
            p.x += (goals[i][0] - p.x) * (ease - i * 0.018);
            p.y += (goals[i][1] - p.y) * (ease - i * 0.018);
            c.style.transform = `translate3d(${p.x.toFixed(1)}px,${p.y.toFixed(1)}px,0)`;
        });
        const br = pos[3];
        rd.x += (br.x + 10 - rd.x) * 0.5; rd.y += (br.y + 6 - rd.y) * 0.5;
        read.style.transform = `translate3d(${rd.x.toFixed(1)}px,${rd.y.toFixed(1)}px,0)`;
        const txt = target ? label : `${String(Math.round(mx)).padStart(4, '0')} · ${String(Math.round(my)).padStart(4, '0')}`;
        if (txt !== lastRead) { read.textContent = txt; lastRead = txt; }
        requestAnimationFrame(tick);
    })();
}

// ── NAV SCROLL ────────────────────────────────────────────────────────
function initNavScroll() {
    const nav = document.getElementById('navbar');
    const links = [...document.querySelectorAll('.nav-link')];
    let sections = [], ticking = false, scrolled = null, lastActive = null;
    const measure = () => { sections = [...document.querySelectorAll('section[id]')].map(s => [s.id, s.offsetTop]); };
    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('load', measure);
    function update() {
        ticking = false;
        const y = window.scrollY;
        const isScrolled = y > 80;
        if (isScrolled !== scrolled) {
            scrolled = isScrolled;
            nav.style.cssText = isScrolled
                ? 'background:rgba(0,0,0,0.9); padding-top:0.9rem; padding-bottom:0.9rem; backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-bottom:1px solid #0a0a0a;'
                : 'background:transparent; padding-top:1.25rem; padding-bottom:1.25rem; backdrop-filter:none; border-bottom:none;';
        }
        let activeId = '';
        for (const [id, top] of sections) if (y >= top - 220) activeId = id;
        if (activeId !== lastActive) {
            lastActive = activeId;
            links.forEach(l => {
                const on = l.getAttribute('href') === '#' + activeId;
                l.classList.toggle('active', on);
                l.style.color = on ? 'var(--orange-glow)' : '';
            });
        }
    }
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
}

// ── HERO REVEAL ───────────────────────────────────────────────────────
function initHero() {
    ['hs1', 'hs2'].forEach(id => {
        const el = document.getElementById(id); if (!el) return;
        const txt = el.textContent; el.setAttribute('aria-label', txt);
        el.innerHTML = [...txt].map((c, i) => `<span class="ch" aria-hidden="true" style="--i:${i + (id === 'hs2' ? 6 : 0)}">${c}</span>`).join('');
    });
    const reveal = () => ['hs0', 'hs1', 'hs2'].forEach((id, i) => setTimeout(() => document.getElementById(id)?.classList.add('revealed'), i * 180));
    if (document.documentElement.classList.contains('loading')) window.addEventListener('ck:reveal', reveal, { once: true });
    else setTimeout(reveal, 150);
}

// ── LOADER: pixel monogram + real progress, exits with a pixel wipe ───
function initLoader() {
    const root = document.documentElement, loader = document.getElementById('loader');
    if (!loader) return;
    if (!root.classList.contains('loading')) { loader.remove(); return; }
    const cv = document.getElementById('ld-canvas'), ctx = cv.getContext('2d');
    const pct = document.getElementById('ld-pct'), rail = document.getElementById('ld-rail');
    const W = innerWidth, H = innerHeight, dpr = Math.min(devicePixelRatio || 1, 2);
    cv.width = W * dpr; cv.height = H * dpr; ctx.scale(dpr, dpr);

    // Sample "CK" into a coarse grid → blocks.
    const GW = 44, GH = 22;
    let cells = [];
    const sample = () => {
        const off = document.createElement('canvas'); off.width = GW; off.height = GH;
        const o = off.getContext('2d'); o.fillStyle = '#fff'; o.font = '800 21px Syne, sans-serif'; o.textBaseline = 'middle'; o.textAlign = 'center';
        o.fillText('CK', GW / 2, GH / 2 + 1);
        const data = o.getImageData(0, 0, GW, GH).data, next = [];
        for (let y = 0; y < GH; y++) for (let x = 0; x < GW; x++) if (data[(y * GW + x) * 4 + 3] > 110) next.push([x, y]);
        for (let i = next.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [next[i], next[j]] = [next[j], next[i]]; }
        cells = next;
    };
    sample();
    if (document.fonts) document.fonts.load('800 21px Syne').then(sample).catch(() => {});
    const cs = Math.max(5, Math.min(14, Math.floor(Math.min(W * 0.55, H * 0.5 * 2) / GW)));
    const ox = (W - GW * cs) / 2, oy = (H - GH * cs) / 2;
    const isOrange = (x, y) => ((x * 7 + y * 13) % 12) === 0;
    let strays = Array.from({ length: 22 }, () => [Math.random() * W, Math.random() * H]);

    // Pixel-wipe cells for the exit
    const grid = document.getElementById('ld-cells'), size = W < 700 ? 56 : 84;
    const cols = Math.ceil(W / size), rows = Math.ceil(H / size);
    grid.style.gridTemplateColumns = `repeat(${cols},1fr)`; grid.style.gridTemplateRows = `repeat(${rows},1fr)`;
    let html = '';
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
        const d = ((c / cols) * 0.45 + (r / rows) * 0.2 + Math.random() * 0.28).toFixed(3);
        html += `<i style="--d:${d}s"></i>`;
    }
    grid.innerHTML = html;

    let loaded = document.readyState === 'complete';
    window.addEventListener('load', () => { loaded = true; });
    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
    const t0 = performance.now(), MIN = 1700, MAX = 4500;
    let shown = 0, done = false, lastStray = 0;
    function draw(p, now) {
        ctx.clearRect(0, 0, W, H);
        const n = Math.floor(cells.length * p);
        for (let i = 0; i < n; i++) {
            const [x, y] = cells[i];
            ctx.fillStyle = isOrange(x, y) ? '#ff6b2b' : '#f2ede4';
            ctx.fillRect(ox + x * cs, oy + y * cs, cs - 1, cs - 1);
        }
        if (now - lastStray > 110) { lastStray = now; strays = strays.map(s => Math.random() < 0.35 ? [Math.random() * W, Math.random() * H] : s); }
        ctx.fillStyle = 'rgba(242,237,228,.85)';
        const k = Math.round(strays.length * (1 - p * 0.8));
        for (let i = 0; i < k; i++) ctx.fillRect(Math.round(strays[i][0] / cs) * cs, Math.round(strays[i][1] / cs) * cs, cs - 1, cs - 1);
    }
    function finish() {
        if (done) return; done = true;
        draw(1, performance.now());
        pct.textContent = '100'; rail.style.transform = 'scaleY(1)';
        setTimeout(() => {
            loader.classList.add('out');
            root.classList.remove('loading');
            window.dispatchEvent(new Event('ck:reveal'));
            setTimeout(() => loader.remove(), 1100);
        }, 260);
    }
    let fontsOk = false; fontsReady.then(() => { fontsOk = true; });
    (function tick(now) {
        if (done) return;
        const time = Math.min(1, (now - t0) / MIN);
        const cap = (loaded && fontsOk) ? 1 : 0.92;
        const target = Math.min(time, cap);
        shown += (target - shown) * 0.12;
        if (now - t0 > MAX) shown = 1;
        const p = Math.min(1, shown + 0.001);
        draw(p, now);
        pct.textContent = String(Math.min(99, Math.floor(p * 100))).padStart(2, '0');
        rail.style.transform = `scaleY(${p.toFixed(3)})`;
        if (p >= 0.995) finish(); else requestAnimationFrame(tick);
    })(t0);
    document.getElementById('ld-skip').addEventListener('click', finish);
    loader.addEventListener('click', finish);
    window.addEventListener('keydown', finish, { once: true });
}

// ── PARTICLE NAME: the name is a field of points that assembles, then
//    scatters away from the cursor and settles back. Points pushed off home glow orange.
function initParticleName() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const home = document.getElementById('home'), cv = document.getElementById('hero-particles');
    const l1 = document.getElementById('hs1'), l2 = document.getElementById('hs2');
    if (!cv || !l1 || !l2) return;
    const ctx = cv.getContext('2d');
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    let N = 0, X, Y, VX, VY, HX, HY, C, W = 0, H = 0, dpr = 1, gap = 3, dot = 2, radius = 120;
    let k = 0.012, raf = 0, visible = true, started = false, active = 0;
    const ptr = { x: -9999, y: -9999, on: false };

    function build() {
        const r = home.getBoundingClientRect();
        W = r.width; H = r.height; dpr = Math.min(devicePixelRatio || 1, 2);
        cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const off = document.createElement('canvas'); off.width = Math.ceil(W); off.height = Math.ceil(H);
        const o = off.getContext('2d');
        const cs = getComputedStyle(l1), fs = parseFloat(cs.fontSize);
        o.font = `${cs.fontWeight} ${fs}px ${cs.fontFamily}`; o.textBaseline = 'middle';
        const place = (el, color) => {
            const b = el.getBoundingClientRect();
            o.fillStyle = color;
            o.fillText(el.getAttribute('aria-label') || el.textContent, b.left - r.left, b.top - r.top + b.height / 2 + fs * 0.04);
        };
        place(l1, '#ff0000'); place(l2, '#00ff00');
        gap = Math.max(2, Math.min(5, Math.round(fs / (fine ? 34 : 22))));
        dot = Math.max(1.2, gap * 0.62);
        radius = Math.max(60, fs * 0.95);
        const d = o.getImageData(0, 0, off.width, off.height).data, pts = [];
        for (let y = 0; y < off.height; y += gap) for (let x = 0; x < off.width; x += gap) {
            const i = (y * off.width + x) * 4;
            if (d[i + 3] > 140) pts.push(x, y, d[i] > d[i + 1] ? 0 : 1);
        }
        const prevN = N, pX = X, pY = Y;
        N = pts.length / 3;
        X = new Float32Array(N); Y = new Float32Array(N); VX = new Float32Array(N); VY = new Float32Array(N);
        HX = new Float32Array(N); HY = new Float32Array(N); C = new Uint8Array(N);
        for (let i = 0; i < N; i++) {
            HX[i] = pts[i * 3]; HY[i] = pts[i * 3 + 1];
            C[i] = Math.random() < 0.035 ? 2 : pts[i * 3 + 2];
            if (prevN && i < prevN) { X[i] = pX[i]; Y[i] = pY[i]; }
            else { X[i] = Math.random() * W; Y[i] = Math.random() * H; }
        }
        if (!started) for (let i = 0; i < N; i++) { X[i] = HX[i]; Y[i] = HY[i]; }
    }

    const COLORS = ['#f5f5f5', '#bdbdbd', '#ff6b2b'];
    function frame() {
        raf = 0;
        if (!visible) return;
        k += (0.07 - k) * 0.03;
        const R = radius, R2 = R * R;
        let moving = 0;
        for (let i = 0; i < N; i++) {
            let vx = VX[i], vy = VY[i];
            if (ptr.on) {
                const dx = X[i] - ptr.x, dy = Y[i] - ptr.y, d2 = dx * dx + dy * dy;
                if (d2 < R2 && d2 > 0.01) { const d = Math.sqrt(d2), f = (1 - d / R) * 2.6; vx += dx / d * f; vy += dy / d * f; }
            }
            vx = (vx + (HX[i] - X[i]) * k) * 0.84; vy = (vy + (HY[i] - Y[i]) * k) * 0.84;
            X[i] += vx; Y[i] += vy; VX[i] = vx; VY[i] = vy;
            const ex = HX[i] - X[i], ey = HY[i] - Y[i];
            if (vx * vx + vy * vy > 0.002 || ex * ex + ey * ey > 0.5) moving++;
        }
        ctx.clearRect(0, 0, W, H);
        for (let c = 0; c < 3; c++) {
            ctx.fillStyle = COLORS[c];
            ctx.beginPath();
            for (let i = 0; i < N; i++) {
                const dx = X[i] - HX[i], dy = Y[i] - HY[i], hot = dx * dx + dy * dy > 30;
                if ((hot ? 2 : C[i]) !== c) continue;
                ctx.rect(X[i], Y[i], dot, dot);
            }
            ctx.fill();
        }
        active = moving;
        if (moving > 0 || ptr.on || k < 0.068) raf = requestAnimationFrame(frame);
    }
    const kick = () => { if (!raf && started) raf = requestAnimationFrame(frame); };

    function start() {
        if (started) return;
        started = true; k = 0.012;
        for (let i = 0; i < N; i++) { X[i] = Math.random() * W; Y[i] = HY[i] + (Math.random() - 0.5) * H * 0.9; VX[i] = VY[i] = 0; }
        home.classList.add('particles-on');
        kick();
    }
    const ready = (document.fonts ? document.fonts.load(`800 64px Syne`) : Promise.resolve()).catch(() => {});
    ready.then(() => {
        build();
        if (document.documentElement.classList.contains('loading')) window.addEventListener('ck:reveal', () => setTimeout(start, 120), { once: true });
        else start();
    });

    let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { build(); kick(); }, 150); });
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) kick(); }).observe(home);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) kick(); });

    if (fine) {
        home.addEventListener('pointermove', e => { const r = cv.getBoundingClientRect(); ptr.x = e.clientX - r.left; ptr.y = e.clientY - r.top; ptr.on = true; kick(); }, { passive: true });
        home.addEventListener('pointerleave', () => { ptr.on = false; kick(); });
    } else {
        // Touch: drag through the name, and a soft pulse runs through it now and then.
        home.addEventListener('touchmove', e => { const t = e.touches[0], r = cv.getBoundingClientRect(); ptr.x = t.clientX - r.left; ptr.y = t.clientY - r.top; ptr.on = true; kick(); }, { passive: true });
        home.addEventListener('touchend', () => { ptr.on = false; kick(); });
        setInterval(() => {
            if (!visible || ptr.on || !started || !N) return;
            const i = (Math.random() * N) | 0, cx = HX[i], cy = HY[i], R = radius * 1.4;
            for (let j = 0; j < N; j++) { const dx = X[j] - cx, dy = Y[j] - cy, d = Math.hypot(dx, dy); if (d < R && d > 0.1) { const f = (1 - d / R) * 9; VX[j] += dx / d * f; VY[j] += dy / d * f; } }
            kick();
        }, 4200);
    }
}

// ── NAV CLOCK (India time) ────────────────────────────────────────────
function initNavClock() {
    const el = document.getElementById('nav-clock');
    if (!el) return;
    const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    const mm = document.getElementById('mm-clock');
    const tick = () => { const t = fmt.format(new Date()); el.textContent = t; if (mm) mm.textContent = t; };
    tick(); setInterval(tick, 1000);
}

// ── SCROLL REVEALS ────────────────────────────────────────────────────
function initReveal() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal-element').forEach(el => obs.observe(el));
}

// ── FLUID BACKGROUND ──────────────────────────────────────────────────
function initFluid() {
    const canvas = document.getElementById('fluid-canvas');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' });
    const isMobile = window.innerWidth < 768;
    renderer.setPixelRatio(isMobile ? 0.8 : Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1);

    const vert = `varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position,1.0); }`;
    const frag = `
        uniform vec2 u_res; uniform vec2 u_mouse; uniform float u_time;
        varying vec2 vUv;
        vec3 permute(vec3 x){return mod(((x*34.)+1.)*x,289.);}
        float snoise(vec2 v){
            const vec4 C=vec4(.211324865,.366025404,-.577350269,.024390244);
            vec2 i=floor(v+dot(v,C.yy)), x0=v-i+dot(i,C.xx), i1=(x0.x>x0.y)?vec2(1,0):vec2(0,1);
            vec4 x12=x0.xyxy+C.xxzz; x12.xy-=i1;
            i=mod(i,289.); vec3 p=permute(permute(i.y+vec3(0,i1.y,1))+i.x+vec3(0,i1.x,1));
            vec3 m=max(.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.);
            m=m*m; m=m*m;
            vec3 x=2.*fract(p*C.www)-1., h=abs(x)-.5, a0=x-floor(x+.5);
            vec3 g; g.x=a0.x*x0.x+h.x*x0.y; g.yz=a0.yz*x12.xz+h.yz*x12.yw;
            return 130.*dot(m,g);
        }
        void main(){
            vec2 st=gl_FragCoord.xy/u_res.xy; st.x*=u_res.x/u_res.y;
            vec2 mn=u_mouse/u_res.xy; mn.x*=u_res.x/u_res.y;
            float dist=distance(st,mn);
            vec2 q=vec2(snoise(st+u_time*.03), snoise(st+vec2(1.5,3.2)+u_time*.04));
            vec2 r=vec2(snoise(st+1.2*q+vec2(5.2,1.3)+u_time*.022), snoise(st+1.2*q+vec2(8.1,9.4)+u_time*.014));
            float fd=smoothstep(.4,0.,dist)*.18;
            float val=snoise(st+r*1.4+fd);
            float v01=clamp(val*.5+.5,0.,1.);
            
            vec3 base=vec3(.018,.014,.010);
            vec3 mid=vec3(.13,.10,.07);
            vec3 warmOrange=vec3(.20,.08,.02);
            
            vec3 col=mix(base, mid, v01);
            col=mix(col, warmOrange, clamp(v01*v01*.6,0.,1.));
            
            float mg=smoothstep(.3,0.,dist);
            col+=vec3(.10,.04,.01)*mg;
            
            gl_FragColor=vec4(col,1.);
        }
    `;

    const uniforms = {
        u_res: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        u_mouse: { value: new THREE.Vector2(window.innerWidth/2, window.innerHeight/2) },
        u_time: { value: 0 }
    };
    const mat = new THREE.ShaderMaterial({ vertexShader:vert, fragmentShader:frag, uniforms, depthWrite:false, depthTest:false });
    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2), mat));

    let trackedX = window.innerWidth/2, trackedY = window.innerHeight/2;
    if (!isMobile) {
        window.addEventListener('mousemove', e => { trackedX=e.clientX; trackedY=window.innerHeight-e.clientY; });
    }
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        uniforms.u_res.value.set(window.innerWidth, window.innerHeight);
    });

    const clock = new THREE.Clock();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const frameGap = isMobile ? 1000 / 30 : 0;
    let last = 0, raf = 0;
    function anim(now) {
        raf = requestAnimationFrame(anim);
        if (frameGap && now - last < frameGap) return;
        last = now;
        uniforms.u_mouse.value.x += (trackedX - uniforms.u_mouse.value.x) * 0.04;
        uniforms.u_mouse.value.y += (trackedY - uniforms.u_mouse.value.y) * 0.04;
        uniforms.u_time.value = clock.getElapsedTime();
        renderer.render(scene, camera);
    }
    if (reduce) { uniforms.u_time.value = 12.0; renderer.render(scene, camera); return; }
    raf = requestAnimationFrame(anim);
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) { cancelAnimationFrame(raf); clock.stop(); }
        else { clock.start(); raf = requestAnimationFrame(anim); }
    });
}

// ── AUDIO ─────────────────────────────────────────────────────────────
function initAudio() {
    const audio = document.getElementById('ambient-audio');
    const btn = document.getElementById('sound-toggle');
    const state = document.getElementById('sound-state');
    const bars = document.querySelectorAll('.eq-bar');
    let playing = false;
    btn.addEventListener('click', () => {
        if (playing) { audio.pause(); state.textContent='OFF'; bars.forEach(b=>b.classList.remove('active')); }
        else { audio.play().catch(()=>{}); state.textContent='ON'; bars.forEach(b=>b.classList.add('active')); }
        playing = !playing;
    });
}

// ── MOBILE MENU ───────────────────────────────────────────────────────
function setMenu(open) {
    const menu = document.getElementById('mobile-menu'), btn = document.getElementById('mob-trigger');
    mobileOpen = open;
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', String(!open));
    btn.setAttribute('aria-expanded', String(open));
    document.documentElement.classList.toggle('menu-open', open);
    document.getElementById('mm-word').textContent = open ? 'Close' : 'Menu';
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
        let current = '';
        document.querySelectorAll('section[id]').forEach(sec => { if (window.scrollY >= sec.offsetTop - 220) current = sec.id; });
        document.querySelectorAll('.mob-link').forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
    }
}
function initMobileMenu() {
    document.getElementById('mob-trigger').addEventListener('click', () => setMenu(!mobileOpen));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && mobileOpen) setMenu(false); });
}

// ── ANCHOR LINKS ──────────────────────────────────────────────────────
function initAnchorLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            if (mobileOpen) {
                setMenu(false);
                setTimeout(() => target.scrollIntoView({ behavior:'smooth', block:'start' }), 420);
            } else {
                target.scrollIntoView({ behavior:'smooth', block:'start' });
            }
        });
    });
}

// ── MODAL ─────────────────────────────────────────────────────────────
function openModal(id) {
    const d = projectData[id]; if (!d) return;
    const feats = d.features.map(f => `<li class="flex gap-2.5 items-start"><span style="color:var(--orange-glow)">▪</span><span class="text-neutral-400 text-xs leading-relaxed">${f}</span></li>`).join('');
    const techs = d.technologies.map(t => `<span class="text-[9px] font-mono border border-neutral-800 px-2.5 py-1 bg-black text-neutral-300">${t}</span>`).join('');
    document.getElementById('modal-content').innerHTML = `
        <div class="border-b border-neutral-900 pb-6 space-y-2">
            <span class="text-[9px] font-bold px-2.5 py-1 tracking-widest uppercase font-mono inline-block" style="background:var(--orange-glow);color:#000;">${d.badge}</span>
            <div class="iso iso-modal" aria-hidden="true">${ISO_SCENES[d.scene] ? ISO_SCENES[d.scene]() : ''}</div>
            <h3 class="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight mt-3 leading-tight">${d.title}</h3>
            <p class="text-neutral-300 text-sm font-light leading-relaxed">${d.description}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div class="space-y-5">
                <div>
                    <h4 class="text-[9px] uppercase tracking-widest text-neutral-400 font-mono mb-2">[ 01. PROBLEM ]</h4>
                    <p class="text-neutral-400 text-xs leading-relaxed">${d.problem}</p>
                </div>
                <div>
                    <h4 class="text-[9px] uppercase tracking-widest text-neutral-400 font-mono mb-2">[ 02. ARCHITECTURE ]</h4>
                    <p class="text-neutral-400 text-xs leading-relaxed">${d.architecture}</p>
                </div>
            </div>
            <div>
                <h4 class="text-[9px] uppercase tracking-widest text-neutral-400 font-mono mb-2">[ 03. MILESTONES ]</h4>
                <ul class="space-y-2">${feats}</ul>
            </div>
        </div>
        <div class="space-y-3 pt-6 border-t border-neutral-900">
            <h4 class="text-[9px] uppercase tracking-widest text-neutral-400 font-mono">[ STACK ]</h4>
            <div class="flex flex-wrap gap-2">${techs}</div>
        </div>
        <div class="flex flex-col sm:flex-row gap-3 pt-8">
            <a href="${d.github}" target="_blank" class="px-6 py-3.5 text-[9px] font-bold tracking-widest uppercase text-center transition-all duration-200" style="background:var(--orange-glow);color:#000;" onmouseover="this.style.background='#000';this.style.color='var(--orange-glow)';this.style.border='1px solid var(--orange-glow)';" onmouseout="this.style.background='var(--orange-glow)';this.style.color='#000';this.style.border='none';">NAVIGATE CODEBASE ↗</a>
            ${d.demo ? `<a href="${d.demo}" target="_blank" rel="noopener" class="px-6 py-3.5 border border-neutral-700 text-white text-[9px] font-bold tracking-widest uppercase text-center hover:border-white transition-all duration-200">LIVE DEMO ↗</a>` : ''}
            <button onclick="closeModal()" class="px-6 py-3.5 border border-neutral-700 text-white text-[9px] font-bold tracking-widest uppercase hover:border-white transition-all duration-200">DISMISS</button>
        </div>
    `;
    const ov = document.getElementById('modal-overlay');
    const box = document.getElementById('modal-box');
    ov.classList.remove('pointer-events-none');
    ov.style.opacity = '1';
    ov.style.pointerEvents = 'auto';
    box.style.transform = 'scale(1)';
    box.style.opacity = '1';
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    const ov = document.getElementById('modal-overlay');
    const box = document.getElementById('modal-box');
    ov.style.opacity = '0';
    ov.style.pointerEvents = 'none';
    box.style.transform = 'scale(0.95)';
    box.style.opacity = '0';
    document.body.style.overflow = '';
}

// ── POSTCARD ──────────────────────────────────────────────────────────


// ── ISOMETRIC ENGINE ──────────────────────────────────────────────────
// Tiny SVG generator: (x, y, z) world units → 2:1 isometric screen space.
// Scenes animate only transform/opacity (plus a few dash offsets) and are
// paused while off-screen, so they cost nothing when you are not looking.
function isoScene(S) {
    const b = [1e9, 1e9, -1e9, -1e9];
    const ext = (X, Y) => { if (X < b[0]) b[0] = X; if (Y < b[1]) b[1] = Y; if (X > b[2]) b[2] = X; if (Y > b[3]) b[3] = Y; };
    const pt = (x, y, z) => { const X = (x - y) * 0.8660254 * S, Y = (x + y) * 0.5 * S - z * S; ext(X, Y); return [X, Y]; };
    const f = v => v.toFixed(1);
    const ps = a => a.map(p => f(p[0]) + ',' + f(p[1])).join(' ');
    const strokeOf = c => c.s ? ` stroke="${c.s}" stroke-width="${c.sw || 0.7}" stroke-linejoin="round"` : '';
    return {
        S, pt,
        poly: (pts, attrs = '') => `<polygon points="${ps(pts)}" ${attrs}/>`,
        box(x, y, z, w, d, h, c, attrs = '') {
            const top = [pt(x, y, z + h), pt(x + w, y, z + h), pt(x + w, y + d, z + h), pt(x, y + d, z + h)];
            const l = [pt(x, y + d, z), pt(x + w, y + d, z), pt(x + w, y + d, z + h), pt(x, y + d, z + h)];
            const r = [pt(x + w, y, z), pt(x + w, y + d, z), pt(x + w, y + d, z + h), pt(x + w, y, z + h)];
            const st = strokeOf(c);
            return `<g ${attrs}><polygon points="${ps(l)}" fill="${c.l}"${st}/><polygon points="${ps(r)}" fill="${c.r}"${st}/><polygon points="${ps(top)}" fill="${c.t}"${st}/></g>`;
        },
        faceX: (x, y, z, d, h) => [pt(x, y, z), pt(x, y + d, z), pt(x, y + d, z + h), pt(x, y, z + h)],
        faceY: (x, y, z, w, h) => [pt(x, y, z), pt(x + w, y, z), pt(x + w, y, z + h), pt(x, y, z + h)],
        tile: (x, y, z, w, d) => [pt(x, y, z), pt(x + w, y, z), pt(x + w, y + d, z), pt(x, y + d, z)],
        line(a, c, attrs) { const p = pt(...a), q = pt(...c); return `<line x1="${f(p[0])}" y1="${f(p[1])}" x2="${f(q[0])}" y2="${f(q[1])}" ${attrs}/>`; },
        vec(a, c) { const p = pt(...a), q = pt(...c); return [f(q[0] - p[0]), f(q[1] - p[1])]; },
        ell(cx, cy, z, r, attrs) {
            const p = pt(cx, cy, z), rx = 1.2247 * r * S, ry = 0.7071 * r * S;
            ext(p[0] - rx, p[1] - ry); ext(p[0] + rx, p[1] + ry);
            return `<ellipse cx="${f(p[0])}" cy="${f(p[1])}" rx="${f(rx)}" ry="${f(ry)}" ${attrs}/>`;
        },
        cyl(cx, cy, z, r, h, c, attrs = '') {
            const t = pt(cx, cy, z + h), o = pt(cx, cy, z), rx = 1.2247 * r * S, ry = 0.7071 * r * S;
            ext(o[0] - rx, o[1] + ry); ext(t[0] + rx, t[1] - ry);
            return `<g ${attrs}><path d="M${f(o[0] - rx)},${f(o[1])} A${f(rx)},${f(ry)} 0 0 0 ${f(o[0] + rx)},${f(o[1])} L${f(t[0] + rx)},${f(t[1])} A${f(rx)},${f(ry)} 0 0 1 ${f(t[0] - rx)},${f(t[1])} Z" fill="${c.l}"/><ellipse cx="${f(t[0])}" cy="${f(t[1])}" rx="${f(rx)}" ry="${f(ry)}" fill="${c.t}"${strokeOf(c)}/></g>`;
        },
        text(x, y, z, str, attrs = '') { const p = pt(x, y, z); return `<text x="${f(p[0])}" y="${f(p[1])}" ${attrs}>${str}</text>`; },
        svg(body, pad = 10) {
            const vb = [b[0] - pad, b[1] - pad, b[2] - b[0] + pad * 2, b[3] - b[1] + pad * 2].map(v => v.toFixed(0)).join(' ');
            return `<svg viewBox="${vb}" preserveAspectRatio="xMidYMid meet" focusable="false">${body}</svg>`;
        }
    };
}
const shadeHex = (hex, k) => { const n = parseInt(hex.slice(1), 16); return `rgb(${Math.round((n >> 16) * k)},${Math.round((n >> 8 & 255) * k)},${Math.round((n & 255) * k)})`; };
const tone = (hex, s) => ({ t: hex, l: shadeHex(hex, 0.58), r: shadeHex(hex, 0.78), s });
const C = {
    slab:  { t: '#0e0e0e', l: '#050505', r: '#090909', s: 'rgba(255,107,43,.28)' },
    dark:  { t: '#222', l: '#0c0c0c', r: '#151515', s: 'rgba(255,255,255,.07)' },
    hot:   { t: '#ff8a50', l: '#a8441a', r: '#d9561f', s: 'rgba(255,214,190,.35)' },
    paper: { t: '#ece4d3', l: '#8a8377', r: '#b5ad9e', s: 'rgba(0,0,0,.15)' }
};
const LBL = 'font-size="7.5" letter-spacing="1.4" fill="#8f8f8f" text-anchor="middle"';
const GRID = 'stroke="rgba(255,255,255,.045)" stroke-width=".6"';

const ISO_SCENES = {
    hr() {
        const g = isoScene(14); let o = '';
        o += g.box(0, 0, -0.3, 8, 8, 0.3, C.slab);
        for (let i = 1; i < 8; i++) { o += g.line([i, 0, 0], [i, 8, 0], GRID) + g.line([0, i, 0], [8, i, 0], GRID); }
        const tools = [[0.6, 0.6, 'HIRE'], [5.4, 0.6, 'CAL'], [0.6, 5.4, 'TICKET'], [5.4, 5.4, 'LEAVE']];
        tools.forEach(([x, y], i) => {
            const a = [4, 4, 0.05], c = [x + 1, y + 1, 0.05];
            o += g.line(a, c, 'class="flow" stroke="#ff6b2b" stroke-width="1" opacity=".7"');
            const [dx, dy] = g.vec(a, c);
            o += `<g class="move" style="--dx:${dx}px;--dy:${dy}px;--t:2.2s;--dl:${(-i * 0.55).toFixed(2)}s">${g.box(3.82, 3.82, 0.08, 0.36, 0.36, 0.36, C.hot)}</g>`;
        });
        const tool = ([x, y, n], i) => g.box(x, y, 0, 2, 2, 0.7, C.dark) + g.poly(g.tile(x + 0.4, y + 0.4, 0.71, 1.2, 0.25), `class="blink" style="--dl:${i * 0.4}s" fill="#ff6b2b"`) + g.poly(g.tile(x + 0.4, y + 0.9, 0.71, 0.8, 0.2), 'fill="#3a3a3a"') + g.text(x + 1, y + 1, 1.7, n, LBL);
        o += tool(tools[0], 0) + tool(tools[1], 1) + tool(tools[2], 2);
        o += g.box(3.2, 3.2, 0, 1.6, 1.6, 0.3, { t: '#1a1a1a', l: '#0a0a0a', r: '#121212', s: 'rgba(255,107,43,.3)' });
        o += g.ell(4, 4, 0.31, 0.6, 'class="shadow-pulse" fill="rgba(255,107,43,.3)"');
        o += `<g class="bob">${g.box(3.45, 3.45, 1.0, 1.1, 1.1, 1.1, C.hot)}</g>`;
        o += g.ell(4, 4, 1.6, 1.25, 'class="spin-dash" fill="none" stroke="#ff6b2b" stroke-width="1"');
        o += tool(tools[3], 3);
        return g.svg(o);
    },
    ops() {
        const g = isoScene(14); let o = '';
        o += g.box(0, 0, -0.3, 10, 7, 0.3, C.slab);
        for (let i = 1; i < 10; i++) o += g.line([i, 0, 0], [i, 7, 0], GRID);
        for (let i = 1; i < 7; i++) o += g.line([0, i, 0], [10, i, 0], GRID);
        // command packets: agent → guard → broken pod; one bounces at the guard
        const a = [1.6, 3.5, 0.55], pod = [7.3, 3.5, 0.55], wall = [3.6, 3.5, 0.55];
        o += g.line([1.6, 3.5, 0.05], [7.3, 3.5, 0.05], 'class="flow" stroke="#ff6b2b" stroke-width="1" opacity=".6"');
        const [dx, dy] = g.vec(a, pod), [bx, by] = g.vec(a, wall);
        o += `<g class="move" style="--dx:${dx}px;--dy:${dy}px;--t:2.4s">${g.box(1.42, 3.32, 0.4, 0.36, 0.36, 0.36, C.hot)}</g>`;
        o += `<g class="move" style="--dx:${bx}px;--dy:${by}px;--t:1.2s;--dl:-.6s">${g.box(1.42, 3.32, 0.4, 0.36, 0.36, 0.36, { t: '#ff4040', l: '#7a1414', r: '#a81d1d' })}</g>`;
        // agent
        o += g.box(0.6, 2.6, 0, 1.8, 1.8, 0.3, C.dark);
        o += `<g class="bob">${g.box(0.9, 2.9, 0.8, 1.2, 1.2, 1.2, C.hot)}</g>`;
        o += g.text(1.5, 3.5, 2.6, 'AGENT', LBL.replace('#8f8f8f', '#ff8a50'));
        // pods (k8s cluster)
        const pods = [[5.6, 0.7], [7.6, 0.7], [5.6, 2.7], [7.6, 2.7], [5.6, 4.7], [7.6, 4.7]];
        pods.forEach(([x, y], i) => {
            o += g.box(x, y, 0, 1.4, 1.4, 0.9, i === 3 ? { t: '#2fbf71', l: '#14532d', r: '#1f7a46' } : C.dark);
            if (i === 3) o += `<g class="heal">${g.box(x, y, 0, 1.4, 1.4, 0.9, { t: '#ff4b4b', l: '#7a1414', r: '#b52020' })}</g>`;
            else o += g.poly(g.tile(x + 0.45, y + 0.45, 0.91, 0.5, 0.5), `class="blink" style="--dl:${i * 0.3}s" fill="#2fbf71"`);
        });
        o += g.text(8.3, 3.4, 1.9, 'geo ✓', 'class="heal-ok" font-size="7.5" fill="#2fbf71" text-anchor="middle"');
        // guard: translucent shield wall
        o += g.box(3.5, 1.4, 0, 0.18, 4.2, 1.7, { t: 'rgba(255,107,43,.55)', l: 'rgba(255,107,43,.22)', r: 'rgba(255,107,43,.32)', s: 'rgba(255,107,43,.6)' });
        o += g.text(3.6, 1.2, 2.2, 'GUARD', LBL);
        return g.svg(o);
    },
    rag() {
        const g = isoScene(14); let o = '';
        o += g.box(0, 0, -0.3, 9, 7.5, 0.3, C.slab);
        for (let i = 1; i < 9; i++) o += g.line([i, 0, 0], [i, 7.5, 0], GRID);
        for (let i = 1; i < 7.5; i++) o += g.line([0, i, 0], [9, i, 0], GRID);
        for (let i = 0; i < 5; i++) o += g.box(0.8, 0.8, i * 0.24, 2.2, 2.8, 0.18, C.paper);
        for (let k = 0; k < 4; k++) o += g.poly(g.tile(1.1, 1.1 + k * 0.55, 1.19, 1.5 - (k % 2) * 0.5, 0.12), 'fill="#9b9384"');
        const [dx, dy] = g.vec([0.8, 0.8, 1.3], [5.2, 1.0, 1.9]);
        o += `<g class="chunk" style="--dx:${dx}px;--dy:${dy}px">${g.box(0.9, 1.0, 1.25, 1.6, 1.2, 0.14, { t: '#ffd0b5', l: '#a8441a', r: '#d9561f' })}</g>`;
        o += `<g class="chunk" style="--dx:${dx}px;--dy:${dy}px;--dl:-1.9s">${g.box(0.9, 1.0, 1.25, 1.6, 1.2, 0.14, { t: '#ffd0b5', l: '#a8441a', r: '#d9561f' })}</g>`;
        const hs = [1.3, 0.7, 1.7, 0.9, 1.5, 0.6, 1.1, 1.9, 0.8];
        hs.forEach((h, i) => { const x = 4.8 + (i % 3), y = 0.6 + Math.floor(i / 3); o += g.box(x, y, 0, 0.7, 0.7, h, i % 4 === 1 ? C.hot : C.dark, i % 4 === 1 ? `class="blink" style="--dl:${i * 0.3}s"` : ''); });
        o += g.text(6.1, 1.8, 2.9, 'VECTORS', LBL);
        o += g.line([2.4, 5.6, 1.4], [5.9, 3.2, 1.2], 'class="flow" stroke="#ff6b2b" stroke-width="1"');
        const house = (x, y, w, d, h, rh, col) => {
            const c = tone(col);
            return g.box(x, y, 0, w, d, h, c) +
                g.poly([g.pt(x, y, h), g.pt(x + w, y, h), g.pt(x + w, y + d / 2, h + rh), g.pt(x, y + d / 2, h + rh)], `fill="${shadeHex(col, 0.9)}"`) +
                g.poly([g.pt(x + w, y, h), g.pt(x + w, y + d, h), g.pt(x + w, y + d / 2, h + rh)], `fill="${c.r}"`) +
                g.poly([g.pt(x, y + d, h), g.pt(x + w, y + d, h), g.pt(x + w, y + d / 2, h + rh), g.pt(x, y + d / 2, h + rh)], `fill="${shadeHex(col, 0.66)}"`) +
                g.poly(g.faceY(x + w * 0.4, y + d + 0.01, 0, w * 0.22, h * 0.6), 'fill="#0b0b0b"');
        };
        o += house(1.0, 4.6, 1.6, 1.6, 1.0, 0.8, '#3a3a3a') + house(3.2, 5.2, 1.4, 1.4, 0.8, 0.7, '#2a2a2a');
        o += g.text(2.3, 5.6, 2.8, 'QUERY', LBL.replace('#8f8f8f', '#ff8a50'));
        return g.svg(o);
    },
    pos() {
        const g = isoScene(14); let o = '';
        o += g.box(0, 0, -0.3, 9.5, 7, 0.3, C.slab);
        for (let i = 1; i < 9.5; i++) o += g.line([i, 0, 0], [i, 7, 0], GRID);
        for (let i = 1; i < 7; i++) o += g.line([0, i, 0], [9.5, i, 0], GRID);
        const bars = [1.0, 1.7, 1.3, 2.4];
        bars.forEach((h, i) => { o += `<g class="grow" style="--dl:${i * 0.18}s">${g.box(5.6 + i * 0.85, 0.9, 0, 0.55, 0.55, h, i === 3 ? C.hot : C.dark)}</g>`; });
        o += g.text(7.0, 1.2, 3.3, 'SALES +24%', LBL.replace('#8f8f8f', '#ff8a50'));
        o += g.box(0.8, 1.4, 0, 3.8, 3.0, 1.0, C.dark);
        o += g.box(1.4, 1.9, 1.0, 1.6, 0.18, 1.3, C.dark);
        o += g.poly(g.faceY(1.5, 2.09, 1.1, 1.4, 1.1), 'fill="#2a1408"');
        for (let k = 0; k < 3; k++) o += g.poly(g.faceY(1.65, 2.1, 1.75 - k * 0.25, 0.6 + (k % 2) * 0.5, 0.1), `class="blink" style="--dl:${k * 0.35}s" fill="#ff8a50"`);
        o += g.box(1.4, 2.6, 1.0, 1.6, 1.1, 0.18, { t: '#2c2c2c', l: '#111', r: '#191919' });
        o += g.box(3.3, 2.4, 1.0, 0.9, 0.8, 0.35, C.dark);
        o += `<g class="print">${g.box(3.5, 2.55, 1.35, 0.5, 0.04, 1.1, { t: '#f4f4f4', l: '#e6e6e6', r: '#cfcfcf' })}</g>`;
        [0, 1, 2].forEach(i => { o += g.cyl(6.6, 5.0, i * 0.18, 0.45, 0.16, { t: '#ffb37f', l: '#a8441a', s: 'rgba(0,0,0,.25)' }); });
        [0, 1].forEach(i => { o += g.cyl(7.8, 5.4, i * 0.18, 0.45, 0.16, { t: '#ffb37f', l: '#a8441a', s: 'rgba(0,0,0,.25)' }); });
        return g.svg(o);
    },
    city() {
        const g = isoScene(12); let o = '';
        const NIGHT = { t: '#1d1d22', l: '#0b0b0e', r: '#131317', s: 'rgba(255,140,80,.12)' };
        o += g.box(0, 0, -0.5, 13, 10, 0.5, { t: '#121216', l: '#050507', r: '#0a0a0d', s: 'rgba(255,107,43,.25)' });
        o += g.poly(g.tile(0, 4.3, 0.001, 13, 1.4), 'fill="#08080a"');
        for (let x = 0.4; x < 13; x += 1.3) o += g.poly(g.tile(x, 4.95, 0.002, 0.6, 0.08), 'fill="rgba(255,138,80,.55)"');
        let wn = 0;
        const bld = (x, y, w, d, h, opt = {}) => {
            let r = g.box(x, y, 0, w, d, h, opt.c || NIGHT);
            for (let z = 0.4; z < h - 0.3; z += 0.55) {
                for (let j = 0.22; j < w - 0.2; j += 0.45) {
                    const k = wn++, lit = (k * 7) % 5 !== 0;
                    r += g.poly(g.faceY(x + j, y + d + 0.01, z, 0.22, 0.26), lit
                        ? `class="blink" style="--dl:${((k * 0.53) % 4).toFixed(2)}s;animation-duration:${(3 + (k % 5)).toFixed(1)}s" fill="${k % 6 ? '#ffb36b' : '#ff6b2b'}"`
                        : 'fill="#1f1f25"');
                }
                for (let j = 0.22; j < d - 0.2; j += 0.45) r += g.poly(g.faceX(x + w + 0.01, y + j, z, 0.22, 0.26), `fill="${(wn++ % 3) ? 'rgba(255,179,107,.5)' : '#26262c'}"`);
            }
            if (opt.antenna) { r += g.line([x + w / 2, y + d / 2, h], [x + w / 2, y + d / 2, h + 1.5], 'stroke="#3a3a40" stroke-width="1.2"'); const p = g.pt(x + w / 2, y + d / 2, h + 1.55); r += `<circle class="blink" style="animation-duration:1.4s" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="2" fill="#ff3b30"/>`; }
            if (opt.crown) { r += g.ell(x + w / 2, y + d / 2, h + 0.02, Math.min(w, d) * 0.42, 'class="spin-dash" fill="none" stroke="#ff6b2b" stroke-width="1.2"'); r += g.poly(g.tile(x + 0.15, y + 0.15, h + 0.01, w - 0.3, d - 0.3), 'fill="rgba(255,107,43,.10)"'); }
            if (opt.rack) { for (let z = 0.3; z < h - 0.2; z += 0.35) r += g.poly(g.faceY(x + 0.2, y + d + 0.01, z, w - 0.4, 0.06), `class="blink" style="--dl:${(z * 0.7).toFixed(2)}s;animation-duration:1.1s" fill="#ff6b2b"`); }
            return r;
        };
        const lamp = (x, y) => { const p = g.pt(x, y, 1.1); return g.line([x, y, 0], [x, y, 1.1], 'stroke="#2a2a30" stroke-width="1"') + `<circle class="blink" style="animation-duration:5s" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="5" fill="rgba(255,150,80,.22)"/><circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="1.4" fill="#ffd2a8"/>` + g.ell(x, y, 0.01, 0.55, 'fill="rgba(255,140,70,.16)"'); };
        o += bld(0.8, 0.7, 2.2, 2.2, 3.6);
        o += bld(3.6, 0.6, 1.8, 2.2, 2.4, { rack: true });
        o += bld(6.2, 0.8, 2.4, 2.4, 5.4, { antenna: true, crown: true });
        o += bld(9.4, 1.0, 2.0, 2.0, 2.8);
        [1.5, 4.4, 7.4, 10.4].forEach(x => { o += lamp(x, 4.15); });
        const car = (y, col, dir) => {
            const fx = dir > 0 ? 1.4 : 0.2;
            const beam = dir > 0 ? g.poly([g.pt(1.4, y + 0.08, 0.12), g.pt(3.6, y - 0.25, 0.05), g.pt(3.6, y + 0.85, 0.05), g.pt(1.4, y + 0.52, 0.12)], 'fill="rgba(255,214,170,.18)"')
                                 : g.poly([g.pt(0.2, y + 0.08, 0.12), g.pt(-2.0, y - 0.25, 0.05), g.pt(-2.0, y + 0.85, 0.05), g.pt(0.2, y + 0.52, 0.12)], 'fill="rgba(255,214,170,.18)"');
            return beam + g.box(0.2, y, 0.05, 1.2, 0.6, 0.38, col) + g.box(0.45, y + 0.05, 0.43, 0.6, 0.5, 0.24, NIGHT) +
                g.poly(g.faceX(fx + (dir > 0 ? 0.001 : -0.001), y + 0.06, 0.15, 0.14, 0.1), 'fill="#fff1dc"') + g.poly(g.faceX(fx, y + 0.42, 0.15, 0.14, 0.1), 'fill="#fff1dc"');
        };
        const [dx, dy] = g.vec([0, 0, 0], [12, 0, 0]);
        o += `<g class="move" style="--dx:${dx}px;--dy:${dy}px;--t:6s">${car(4.45, { t: '#ff6b2b', l: '#7a3010', r: '#c8511a' }, 1)}</g>`;
        o += `<g class="move" style="--dx:${dx}px;--dy:${dy}px;--t:6s;--dl:-3.1s">${car(4.45, { t: '#e5e5e5', l: '#5a5a5a', r: '#8a8a8a' }, 1)}</g>`;
        const shift = g.vec([0, 0, 0], [11.4, 0, 0]);
        o += `<g class="move" style="--dx:${-shift[0]}px;--dy:${-shift[1]}px;--t:8s;--dl:-2s"><g transform="translate(${shift[0]} ${shift[1]})">${car(5.05, { t: '#2f2f36', l: '#111', r: '#1c1c22' }, -1)}</g></g>`;
        o += bld(2.2, 6.4, 2.0, 2.2, 1.8);
        o += bld(6.4, 6.3, 2.2, 2.0, 2.9, { c: { t: '#26262c', l: '#0e0e11', r: '#17171b', s: 'rgba(255,140,80,.12)' } });
        o += bld(10.2, 7.4, 1.8, 1.8, 1.4, { rack: true });
        [[1.0, 6.2], [5.2, 6.4], [9.2, 6.5]].forEach(([x, y]) => { o += lamp(x, y); });
        return g.svg(o, 4);
    },
    stamp() {
        const g = isoScene(10); let o = '';
        o += g.box(0, 0, 0, 3, 3, 0.3, { t: '#2a7077', l: '#0e3438', r: '#164a50' });
        o += g.ell(1.5, 1.5, 0.31, 0.8, 'class="shadow-pulse" fill="rgba(0,0,0,.25)"');
        o += `<g class="bob">${g.box(0.9, 0.9, 1.1, 1.2, 1.2, 1.2, { t: '#ffb37f', l: '#b8481a', r: '#e0632b' })}</g>`;
        return g.svg(o, 3);
    }
};

function initIso() {
    const els = document.querySelectorAll('[data-iso]');
    els.forEach(el => {
        const fn = ISO_SCENES[el.dataset.iso];
        if (!fn) return;
        const mount = el.querySelector('.iso-mount') || el;
        mount.insertAdjacentHTML('afterbegin', fn());
    });
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => e.target.classList.toggle('paused', !e.isIntersecting));
    }, { rootMargin: '80px 0px' });
    document.querySelectorAll('.iso.paused').forEach(el => io.observe(el));
}

// ── SCROLL PROGRESS ───────────────────────────────────────────────────
function initScrollProgress() {
    const bar = document.getElementById('scroll-prog');
    let ticking = false;
    const update = () => {
        ticking = false;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
}

// ── LABEL SCRAMBLE + STAGGER ──────────────────────────────────────────
function initScramble() {
    document.querySelectorAll('.stagger').forEach(el => [...el.children].forEach((c, i) => c.style.setProperty('--i', i)));
    const io = new IntersectionObserver(entries => entries.forEach(e => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        e.target.classList.add('revealed');
    }), { threshold: 0.3 });
    document.querySelectorAll('.stagger').forEach(el => io.observe(el));
}

// ── PROJECT CARD SPOTLIGHT ────────────────────────────────────────────
function initCardSpotlight() {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('pointermove', e => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
            card.style.setProperty('--my', (e.clientY - r.top) + 'px');
        });
    });
}

// ── MAGNETIC ROUND BUTTONS ────────────────────────────────────────────
function initMagnetic() {
    if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('#home a.group > span:first-child').forEach(el => {
        const host = el.parentElement;
        el.style.transition = 'transform .45s cubic-bezier(.16,1,.3,1), background-color .25s, color .25s, border-color .25s';
        host.addEventListener('pointermove', e => {
            const r = el.getBoundingClientRect();
            const x = (e.clientX - (r.left + r.width / 2)) * 0.35, y = (e.clientY - (r.top + r.height / 2)) * 0.35;
            el.style.transform = `translate(${x}px,${y}px)`;
        });
        host.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
}

// ── POSTCARD ──────────────────────────────────────────────────────────
function initPostcard() {
    const stage = document.getElementById('pc-stage');
    const card = document.getElementById('postcard-el');
    if (!stage) return;
    const stars = document.getElementById('pc-stars');
    if (stars) { let h = ''; for (let k = 0; k < 46; k++) { const r = (n) => ((Math.sin(k * 127.1 + n * 311.7) * 43758.5453) % 1 + 1) % 1; h += `<i style="left:${(r(1) * 100).toFixed(1)}%;top:${(r(2) * 100).toFixed(1)}%;--d:${(2 + r(3) * 4).toFixed(1)}s;--dl:${(-r(4) * 5).toFixed(1)}s;${r(5) > .8 ? 'width:3px;height:3px;' : ''}"></i>`; } stars.innerHTML = h; }

    const now = new Date();
    const day = document.getElementById('pm-day'), yr = document.getElementById('pm-year');
    if (day) day.textContent = now.getDate() + ' ' + now.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    if (yr) yr.textContent = now.getFullYear();

    const flip = () => {
        const on = card.classList.toggle('flipped');
        card.setAttribute('aria-pressed', String(on));
        stage.classList.remove('hop'); void stage.offsetWidth; stage.classList.add('hop');
    };
    card.addEventListener('click', flip);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } });

}

// ── POSTCARD: address it, save it as an image, send it ─────────────────
function initPostcardActions() {
    const card = document.getElementById('postcard-el'), stage = document.getElementById('pc-stage');
    const name = document.getElementById('pc-name'), dear = document.getElementById('pc-dear'), toLine = document.getElementById('pc-to-line');
    const save = document.getElementById('pc-save'), send = document.getElementById('pc-share');
    if (!card || !save) return;
    const clean = v => v.replace(/\s+/g, ' ').trim().slice(0, 22);
    name.addEventListener('input', () => {
        const v = clean(name.value);
        dear.textContent = v || 'reader';
        toLine.textContent = v || 'You, the reader';
    });
    name.addEventListener('change', () => { if (clean(name.value) && !card.classList.contains('flipped')) card.click(); });

    let lib;
    const loadLib = () => lib || (lib = new Promise((res, rej) => {
        const sc = document.createElement('script');
        sc.src = 'https://cdn.jsdelivr.net/npm/html-to-image@1.11.11/dist/html-to-image.js';
        sc.onload = () => res(window.htmlToImage); sc.onerror = rej;
        document.head.appendChild(sc);
    }));

    // Inline the latin subsets of the Google Fonts the card uses, so the export keeps its type.
    let fontCSS;
    const getFontCSS = () => fontCSS || (fontCSS = (async () => {
        const link = [...document.querySelectorAll('link[rel="stylesheet"]')].find(l => l.href.includes('fonts.googleapis.com'));
        if (!link) return '';
        const css = await (await fetch(link.href)).text();
        const blocks = css.split('/*').slice(1).map(b => '/*' + b).filter(b => b.startsWith('/* latin */'));
        const toData = blob => new Promise(r => { const fr = new FileReader(); fr.onload = () => r(fr.result); fr.readAsDataURL(blob); });
        return (await Promise.all(blocks.map(async b => {
            const m = b.match(/url\((https:[^)]+)\)/);
            if (!m) return b;
            return b.replace(m[1], await toData(await (await fetch(m[1])).blob()));
        }))).join('\n');
    })().catch(() => ''));

    async function render() {
        const [h2i, fontEmbedCSS] = await Promise.all([loadLib(), getFontCSS()]);
        await (document.fonts ? document.fonts.ready : Promise.resolve());
        card.classList.add('pc-capture');
        const opts = { pixelRatio: 2, fontEmbedCSS, style: { transform: 'none' }, filter: n => !(n.classList && (n.classList.contains('pc-turn') || n.classList.contains('pc-sheen') || n.classList.contains('pc-grain'))) };
        try {
            const [front, back] = await Promise.all([h2i.toCanvas(card.querySelector('.pc-front'), opts), h2i.toCanvas(card.querySelector('.pc-back'), opts)]);
            const landscape = front.width >= front.height, pad = 80, gap = 56, foot = 90;
            const W = landscape ? front.width + pad * 2 : front.width * 2 + gap + pad * 2;
            const H = landscape ? front.height * 2 + gap + pad * 2 + foot : front.height + pad * 2 + foot;
            const out = document.createElement('canvas'); out.width = W; out.height = H;
            const g = out.getContext('2d');
            g.fillStyle = '#070707'; g.fillRect(0, 0, W, H);
            const draw = (c, x, y, rot) => { g.save(); g.translate(x + c.width / 2, y + c.height / 2); g.rotate(rot); g.shadowColor = 'rgba(0,0,0,.6)'; g.shadowBlur = 40; g.shadowOffsetY = 18; g.drawImage(c, -c.width / 2, -c.height / 2); g.restore(); };
            if (landscape) { draw(front, pad, pad, -0.012); draw(back, pad, pad + front.height + gap, 0.01); }
            else { draw(front, pad, pad, -0.015); draw(back, pad + front.width + gap, pad, 0.012); }
            g.fillStyle = '#8f8f8f'; g.font = '500 26px ui-monospace, Menlo, monospace';
            g.fillText('A POSTCARD FROM CHUNDURI KAUSHIK', pad, H - pad / 2 - 6);
            g.fillStyle = '#ff6b2b'; g.textAlign = 'right';
            g.fillText(location.host || 'portfolio', W - pad, H - pad / 2 - 6);
            return await new Promise(r => out.toBlob(r, 'image/png'));
        } finally { card.classList.remove('pc-capture'); }
    }
    const busy = (b, on, label) => { b.disabled = on; if (label) b.lastChild.textContent = label; };
    const fileName = () => `postcard-from-kaushik${clean(name.value) ? '-to-' + clean(name.value).toLowerCase().replace(/[^a-z0-9]+/g, '-') : ''}.png`;

    save.addEventListener('click', async () => {
        busy(save, true, 'Printing…');
        try {
            const blob = await render();
            const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = fileName();
            document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
            stage.classList.remove('hop'); void stage.offsetWidth; stage.classList.add('hop');
            showToast('✓ Saved. Stick it on your fridge');
        } catch (e) { showToast('Could not print it. Try again'); }
        busy(save, false, 'Save');
    });

    send.addEventListener('click', async () => {
        const url = location.origin + location.pathname + '#note';
        const who = clean(name.value);
        const text = who ? `${who}, you've got a postcard from Chunduri Kaushik.` : 'A postcard from Chunduri Kaushik.';
        busy(send, true, 'Stamping…');
        stage.classList.remove('mailed'); void stage.offsetWidth; stage.classList.add('mailed');
        try {
            if (navigator.share) {
                let shared = false;
                try {
                    const blob = await render(), file = new File([blob], fileName(), { type: 'image/png' });
                    if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: 'A postcard', text, url }); shared = true; }
                } catch (e) { if (e && e.name === 'AbortError') { busy(send, false, 'Send'); return; } }
                if (!shared) await navigator.share({ title: 'A postcard', text, url });
                showToast('✓ Sent. The mail carrier thanks you');
            } else {
                copyToClipboard(`${text} ${url}`, '✓ Link copied. Paste it to a friend');
            }
        } catch (e) {
            if (!(e && e.name === 'AbortError')) copyToClipboard(`${text} ${url}`, '✓ Link copied. Paste it to a friend');
        }
        busy(send, false, 'Send');
    });
}

// ── CLIPBOARD ─────────────────────────────────────────────────────────
function copyToClipboard(text, msg) {
    navigator.clipboard ? navigator.clipboard.writeText(text) : (() => { const i=document.createElement('input'); i.value=text; document.body.appendChild(i); i.select(); document.execCommand('copy'); document.body.removeChild(i); })();
    showToast(msg || '✓ Email copied');
}
let toastTimer;
function showToast(msg) {
    const t = document.getElementById('toast');
    document.getElementById('toast-msg').textContent = msg;
    clearTimeout(toastTimer);
    t.classList.remove('hidden');
    requestAnimationFrame(() => { t.style.opacity='1'; t.style.transform='translateX(-50%) translateY(0)'; });
    toastTimer = setTimeout(() => {
        t.style.opacity='0'; t.style.transform='translateX(-50%) translateY(-20px)';
        setTimeout(() => t.classList.add('hidden'), 500);
    }, 2800);
}
