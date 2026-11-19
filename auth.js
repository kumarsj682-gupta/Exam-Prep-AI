// =========================================
// 1. STRICT STEP-BY-STEP ROUTE GUARD
// =========================================
(function enforceLoginFirst() {
    const loggedInUser = sessionStorage.getItem("examprep_activeSession");
    const currentFile = window.location.pathname.split("/").pop().toLowerCase();

    const isLoginPage = currentFile === "login.html";
    const isSignupPage = currentFile === "signup.html";

    // If NOT logged in and trying to view index.html (or root "/") -> go to login.html
    if (!loggedInUser && !isLoginPage && !isSignupPage) {
        window.location.replace("./login.html");
        return;
    }

    // If ALREADY logged in and on login/signup -> go to index.html
    if (loggedInUser && (isLoginPage || isSignupPage)) {
        window.location.replace("./index.html");
    }
})();

function showAlert(message, type) {
    const alertBox = document.getElementById("authAlert");
    if (!alertBox) return;
    alertBox.textContent = message;
    alertBox.className = `alert-msg ${type === "error" ? "alert-error" : "alert-success"}`;
    alertBox.style.display = "block";
}

// =========================================
// 2. HANDLE SIGN UP FORM (signup.html)
// =========================================
document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("signupName").value.trim();
            const email = document.getElementById("signupEmail").value.trim().toLowerCase();
            const stream = document.getElementById("signupStream").value;
            const password = document.getElementById("signupPassword").value;

            const users = JSON.parse(localStorage.getItem("examprep_users") || "[]");

            if (users.some(u => u.email === email)) {
                showAlert("Account already exists with this email. Please log in.", "error");
                return;
            }

            const newUser = { name, email, stream, password };
            users.push(newUser);
            localStorage.setItem("examprep_users", JSON.stringify(users));

            sessionStorage.setItem("examprep_activeSession", JSON.stringify(newUser));
            showAlert("Account created! Opening Exam Dashboard...", "success");

            setTimeout(() => {
                window.location.replace("./index.html");
            }, 700);
        });
    }

    // =========================================
    // 3. HANDLE LOGIN FORM (login.html)
    // =========================================
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value.trim().toLowerCase();
            const password = document.getElementById("loginPassword").value;

            const users = JSON.parse(localStorage.getItem("examprep_users") || "[]");
            const matchedUser = users.find(u => u.email === email && u.password === password);

            if (!matchedUser) {
                showAlert("Account not found or wrong password. Click 'Sign Up' below to create an account first.", "error");
                return;
            }

            sessionStorage.setItem("examprep_activeSession", JSON.stringify(matchedUser));
            showAlert("Login successful! Opening Exam Dashboard...", "success");

            setTimeout(() => {
                window.location.replace("./index.html");
            }, 700);
        });
    }

    // =========================================
    // 4. UPDATE DASHBOARD NAVBAR & LOGOUT
    // =========================================
    const activeUser = JSON.parse(sessionStorage.getItem("examprep_activeSession"));
    const greeting = document.getElementById("userGreeting");
    const logoutBtn = document.getElementById("logoutBtn");

    if (activeUser && greeting) {
        greeting.textContent = `👋 Hi, ${activeUser.name}`;
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            sessionStorage.removeItem("examprep_activeSession");
            window.location.replace("./login.html");
        });
    }
});