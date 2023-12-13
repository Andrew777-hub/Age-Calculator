function age() {
    // Отримання значення та перетворення їх у числовий формат
    let d1 = parseInt(document.getElementById("date").value);
    let m1 = parseInt(document.getElementById("month").value);
    let y1 = parseInt(document.getElementById("year").value);

    // Перевірка значення на правильність
    let currentYear = new Date().getFullYear();
    if (d1 > 31 || m1 > 12 || d1 <= 0 || m1 <= 0 || y1 > currentYear || y1 < 0) {
        alert("Invalid date or month or year");
        return; 
    }

    // Отримання поточної дати
    let date = new Date();
    let d2 = date.getDate();
    let m2 = date.getMonth() + 1;
    let y2 = date.getFullYear();

    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }

    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
і
    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

    document.getElementById("age").innerHTML =
        "Your Age is " + y + " Years " + m + " Month " + d + " Days";
}
