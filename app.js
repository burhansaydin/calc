const calc = (num1, num2, operator) => {
    let sonuc;
    let hata = [];
    if (typeof(num1) != "number" || typeof(num2) != "number") {
        hata.push("ilk iki parametre sayi degildir.");
        if (operator != "+", "-", "/", "*")
            hata.push("girilen operator '+,-,*,/' olmalidir..");
    } else if (operator == "+") {
        sonuc = num1 + num2;
    } else if (operator == "-") {
        sonuc = num1 - num2;
    } else if (operator == "*") {
        sonuc = num1 * num2;
    } else if (operator == "/" && num2 === 0) {
        hata += "Sifira bolunme hatasi";
    } else if (operator == "/") {
        sonuc = num1 / num2;
    } else {
        hata.push("girilen operator '+,-,*,/' olmalidir..")
    }
    return {
        islemsonucu: sonuc == 0 || sonuc ? sonuc : "hatali",
        hata: hata.length > 0 ? hata : ["Hata Yok"]
    }


}

console.log(calc(4, 0, "/"))