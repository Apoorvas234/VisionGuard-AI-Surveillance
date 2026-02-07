const card = document.getElementById("alertCard");
const alertText = document.getElementById("alertText");
const riskLevel = document.getElementById("riskLevel");
const aiStatus = document.getElementById("aiStatus");
const timeStamp = document.getElementById("timeStamp");

function updateTime() {
    const now = new Date();
    timeStamp.innerText =
        "Detected at: " + now.toLocaleTimeString();
}

// Initial state
card.classList.add("low-risk");

// After 3 seconds → MEDIUM
setTimeout(() => {
    alertText.innerText = "Unusual movement detected";
    riskLevel.innerText = "Risk Level: MEDIUM";
    aiStatus.innerText = "AI Status: Analyzing behavior...";
    updateTime();

    card.classList.remove("low-risk");
    card.classList.add("medium-risk");
}, 3000);

// After 6 seconds → HIGH
setTimeout(() => {
    alertText.innerText = "Suspicious behavior detected by AI!";
    riskLevel.innerText = "Risk Level: HIGH";
    aiStatus.innerText = "AI Status: Threat Detected!";
    updateTime();

    card.classList.remove("medium-risk");
    card.classList.add("high-risk");
}, 6000);
