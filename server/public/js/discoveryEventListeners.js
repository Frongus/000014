document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (prevBtn) {
        console.log("called")
        prevBtn.addEventListener('click', prevStep);
    }

    if (nextBtn) {
        console.log("called")
        nextBtn.addEventListener('click', nextStep);
    }
});
