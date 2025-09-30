document.addEventListener("DOMContentLoaded", function () {
    console.log("JS Loaded");

    // ===============================
    // LOTTIE HERO ANIMATION
    // ===============================
    const LOTTIE_URL = "https://lottie.host/8026cc33-8a3d-4c38-8ff6-7b4476007b5a/Yw4zV8K3rC.json";
    const lottieContainer = document.getElementById("lottie-hero");

    if (window.lottie && lottieContainer) {
        lottie.loadAnimation({
            container: lottieContainer,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: LOTTIE_URL,
        });
    } else {
        console.warn("Lottie not loaded or container missing.");
    }

    // ===============================
    // ANIMATE ON SCROLL (AOS)
    // ===============================
    if (typeof AOS !== "undefined") {
        AOS.init({ once: true });
    } else {
        console.warn("AOS library not found.");
    }

    // ===============================
    // HERO NUMBER COUNT-UP
    // ===============================
    const heroNums = document.querySelectorAll(".hero-num");

    if (heroNums.length > 0) {
        heroNums.forEach(function (el) {
            const max = +el.dataset.amount || 0;
            let current = 0;
            const speed = 12;
            const step = Math.ceil(max / 40);

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && current === 0) {
                            function update() {
                                current += step;
                                if (current > max) current = max;

                                el.textContent = current.toLocaleString("en-IN");

                                if (current < max) {
                                    setTimeout(update, speed);
                                } else {
                                    observer.unobserve(el);
                                }
                            }
                            update();
                        }
                    });
                },
                { threshold: 0.5 }
            );

            observer.observe(el);
        });
    }

    // ===============================
    // PRICING TOGGLE (Monthly / Yearly)
    // ===============================
    const monthBtn = document.getElementById("billing-month");
    const yearBtn = document.getElementById("billing-year");
    const priceBusiness = document.querySelector(".price-business");

    if (monthBtn && yearBtn && priceBusiness) {
        monthBtn.addEventListener("click", () => {
            priceBusiness.innerHTML = '₹499<span class="fs-6 fw-normal">/mo</span>';
            monthBtn.classList.add("active");
            yearBtn.classList.remove("active");
        });

        yearBtn.addEventListener("click", () => {
            priceBusiness.innerHTML = '₹409<span class="fs-6 fw-normal">/mo</span> <span class="text-success fs-6 fw-normal">(billed yearly)</span>';
            yearBtn.classList.add("active");
            monthBtn.classList.remove("active");
        });
    }

    // ===============================
    // Generic Button Test
    // ===============================
    const buttons = document.querySelectorAll(".btn-modern");
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            console.log("Button clicked:", btn.textContent);
        });
    });
});
