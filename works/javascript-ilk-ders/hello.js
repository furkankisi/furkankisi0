//console.log("Hello World")
//console.log("Furkan")
//console.log("Furkan"+" "+"Büşra")
//const isim1 = "furkan"
//const isim2 = "büşra"
//console.log(isim1+" "+isim2)
//let name = false
//console.log(name)
//let isim = "Büşra"
//console.log(isim)
//let a = 5
//let b = 4
//let c = 8
//let d = 22
//console.log(a * b + c - d)
//let e = "a * b + c - d" 
//let x = 1.2222
//console.log(e == x)
//console.log(e > x)
//const yas1 = d + a - b
//const yas2 = d + c - a
//let ortalama = (yas1 + yas2) / 2 //sonuç 35.5 çıkıyor neden?
//console.log(ortalama)
//const degisken1 = 20.6
//const degisken2 = 39
//const degisken3 = degisken1 + degisken2
//console.log(typeof degisken3)
//console.log(500 * 2)
//console.log(5 > 6)

//const score = 49.99

// const ad = prompt("Adınız?")
// const soyad = prompt("Soyisminiz?")
// const age1 = prompt("Hangi yıl doğdunuz?")
// const age2 = 2024 - Number(age1)



// const message = "Hello " + ad + " " + soyad + " " + ",Yaşınız " + " " + age2

// alert(message)
// let not1 = prompt("İlk notunuz kaçtır?")
// let not2 = prompt("İkinci notunuz kaçtır?")
// let not3 = prompt("Üçüncü notunuz kaçtır?")
// if (not1, not2, not3 > 100){
// alert ("Notunuz 100'den fazla olamaz")
// }


// }
// let ortal = (not1 + not2 + not3)/ 3

// if (ortal => 90){
// alert ("Notunuz AA")
// }
// else if (ortal => 70){
//     alert ("Notunuz BB")

// }

// else if ( ortal => 50){
//     alert("Notunuz CC")

// }
//|| bu veya demek
// && bu ve demek

// Kullanıcıdan kaç sayı gireceğini soruyoruz
// let sayiAdedi = prompt("Kaç sayı gireceksiniz?");


// let toplam = 0;


// for (let i = 0; i < sayiAdedi; i++) {
  
//   let sayi = prompt((i + 1) + ". sayıyı girin:");

 
//   sayi = Number(sayi);

 
//   if (isNaN(sayi)) {
//     alert("Geçersiz bir sayı girdiniz. Lütfen geçerli bir sayı girin.");
//     i--; 
//     continue;
//   }

  
//   toplam += sayi;


//   if (toplam > 100) {
//     alert("Toplam 100'ü geçti!");
//     break; 
//   }
// }


// alert("Toplam: " + toplam);


let metin = prompt("Lütfen Metni Giriniz.");
let karakter = prompt("Lütfen karakteri tuşlayınız.");

// Eğer kullanıcı sadece bir karakter girerse işlemi yapalım
if (karakter.length !== 1) {
    alert("Lütfen yalnızca bir karakter giriniz.");
} else {
    let sayac = 0;

    // Metindeki her karakteri kontrol et
    for (let index = 0; index < metin.length; index++) {
        if (metin[index] === karakter) {
            sayac++;
        }
    }

    // Sonucu bir kez göster
    alert(`'${karakter}' karakteri metinde ${sayac} kez geçiyor.`);
}

        
        
        
    
        
    
        
    

    


    










//console.log(2024 - Number(dogumYili))

//const merhaba = "Merhaba Dünya";
//const merhaba1 = merhaba.toUpperCase();
//console.log(merhaba1);
