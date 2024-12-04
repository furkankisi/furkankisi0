alert(`The Witcher 3: Ciri'nin Kaderi ve Geralt’ın Seçimleri
    Bu hikaye witcher olan Geralt'ın yaptığı seçimlerinin kaderine sebep olan bir seçimlere dayalı hikayedir. 
    HAZIR MISINIZ!`);

    alert(`Geralt, Kaer Morhen'de yalnız başına bir alkolün etkisi altında geçmişi düşünürken Vesemir’den gelen bir mesajla çok sevdiği kızı gibi gördüğü
         Ciri'nin kaybolduğunu öğrenir. Hemen yola koyulur. Ancak, Ciri'nin kaybolduğuna dair aldığı haberin kaynağı hakkında şüpheleri vardır. Bu noktada Geralt şüphelerini gidermek için bir dostundan yardım almalıdır. Peki bu kim olmalı? 1-Yennefer 2-Triss
3-Kendi başına devam etsin`);
let choose = prompt("Lütfen bir seçenek giriniz;1, 2 veya 3");
choose;
if (choose === "1"){;
   
    alert("Yennefer'i Seçtiniz.");
    
    alert(`Yennefer ile beraber Ciri'nin izinden Novigrad'a gitmeye karar verirsiniz. Ciri'nin burada daha önce bir grup asker tarafından görüldüğü hakkında bilgi vardır. Geralt ve Yennefer Novigrad'a gittiğinde bir uçan yaratık olan 2 tane basilisk ile karşılaşır. Geralt kılıcını çeker ve ilk basilisk'e ciddi bir hasar verirken Yennefer büyüsünü kullanıp bir ateş büyüsü fırlatır.Ancak Yennefer'in büyüsü etkili olmaz ve Basilisk Yennefer'e karşı saldırıya geçer. Geralt burada ne yapmalı?"
        "1-İlk Basilisk'in işini bitirmeli"
    "2-Yennefer'e yardım etmeli` );
    
    let choose1 = prompt("Lütfen bir seçenek giriniz;1, 2");
    choose1;    
            if (choose1 === "1"){
            alert(`Geralt ilk Basilisk'in işini bitirdi fakat tam Yennefer'e giderken Basilisk güçlü bir darbe indirdi Yennefer'e. Yennefer ağır yaralandı. Geralt diğer Basilisk'in de işini bitirdi ve Yennefer'e yetişti. Yennefer'in yarası için bir bitki bulup hemen yarasını iyileştirdi ve tekrardan yola koyuldular. Novigrad'a ulaştılar ve orada Ciri hakkında bilgisi olan kişilerle görüştüler. Sonrasında ise Ciri'nin peşinde olan Empire Emyhr'in bilgisi olduğunu öğrenmişlerdir. Doğruca Nilfgard'a doğru yola çıktılar. Empire Emhyr'in yanına gittiklerinde ise yardım karşılığında Ciri'yi kendisine teslim etme karşılığı bilgi vereceğini söylemiştir.Geralt bu fikirden hoşlanmasa da kabul etmiştir. Empire Emhyr Ciri'nin peşinde Wild Hunt'ın olduğunu söylemiştir. Ciri'nin nereye giderse gitsin sürekli peşinden takip ettiğini Ciri'nin varolan özel güçlerini elde etmeye çalıştıklarını ve Skellige ve Velen'de en son görüldüğünü söylemiştir. Geralt şimdi bir seçim yapmalı: 
             1-Skellige
             2-Velen`);
            }
            let choose2 = prompt("Lütfen bir seçenek giriniz;1, 2");
            choose2;
            if (choose2 === "1"){
                alert(`Skellige'yi seçtiniz.`);
                
                alert(`Skellige, zorlu coğrafyası ve savaşçı kültürü ile ünlüdür. Geralt, Ciri'nin Skellige'de bir süre kaldığını öğrenir.Geralt, Yennefer ile birlikte Skellige'deki bir grup kabile lideriyle ittifak kurar. Bu ittifak, ona Ciri'yi bulma konusunda yardımcı olur, ancak aynı zamanda bazı kabileler arasında savaşları da tetikler. Geralt'la daha önceden dostluğu olan bir kabile bu kabileye düşman olduğu için Geralt'ın onlara ihanet ettiğini düşünür ve kabileler birbirine girer. Bu durumda birçok insan hayatını kaybetmiştir ve Geralt bunu önleyememiştir ancak Ciri'nin de peşinden gitmesi gerektiği için Ciri'nin en son görüldüğü yere Velen'e doğru yola çıktılar.Velen'e oğru giderken bir insanın etrafında kurtlar olduğunu gören Geralt ne yapmalı? 
                    1-Yolda durup insana yardım etmeli
                    2- Umursamadan Yoluna devam etmeli`);
                    }
                    let choose3 = prompt("Lütfen bir seçenek giriniz;1, 2");
                    choose3;
                        if (choose3 === "1"){
                            alert("İnsana yardım etmeyi seçtiniz.");
                            alert(`Kurtları öldürüp insanın hayatını kurtardınız ve bunu karşılığında insan size en değerli olan eşyası ulu kılıç'ı hediye etti bu her türlü canavarda tek bir darbeyle öldürebilen bir silah. Kılıcı alıp Velen'e doğru yola çıktınız. Velen'e geldiğinde ise Velen'in kralı ile tanıştılar.Velen kralı Ciri'nin yerini bildiğini ancak bu bilgi karşılığında kaybolan karısını bulmak istediğini söylemiştir.Geralt kabul edip witcher güçleriyle kadının izlerini takip edip bulmuştur. Velen Kralı ise teşekkür edip Ciri'nin birkaç gün önce burada olduğunu Wild Hunt'ın buraya gelerek onlara saldırdıklarını ardından Ciri'yi bir ata bindirip ormandaki gizli yerine göndermiştir. Bunu duyan Yennefer ve Geralt hemen yola çıkıp bu yeri bulurlar ve karşılarında Ciri Wild Hunt ile savaşmaktadır. Bunu gören Geralt hemen saldırıya geçer ve Wild Hunt lideri o sırada Yennefer'i yakalar. Bunun yanında Ciri'de o an boşluğa düşüp Wild Hunt tarafından yakalanır. Geralt'ın burada ciddi bir seçim yapması gerek:
                                1-Ciri
                                2-Yennefer`);
                                }
                                else if (choose3 = "2"){
                                    alert(`Geralt insanı ölüme mahkum etti ve Velen'e doğru yola çıktınız. Velen'e geldiğinde ise Velen'in kralı ile tanıştılar.Velen kralı Ciri'nin yerini bildiğini ancak bu bilgi karşılığında kaybolan karısını bulmak istediğini söylemiştir.Geralt kabul edip witcher güçleriyle kadının izlerini takip edip bulmuştur. Velen Kralı ise teşekkür edip Ciri'nin birkaç gün önce burada olduğunu Wild Hunt'ın buraya gelerek onlara saldırdıklarını ardından Ciri'yi bir ata bindirip ormandaki gizli yerine göndermiştir. Bunu duyan Yennefer ve Geralt hemen yola çıkıp bu yeri bulurlar ve karşılarında Ciri Wild Hunt ile savaşmaktadır. Bunu gören Geralt hemen saldırıya geçer ve Wild Hunt lideri o sırada Yennefer'i yakalar. Bunun yanında Ciri'de o an boşluğa düşüp Wild Hunt tarafından yakalanır. Geralt'ın burada ciddi bir seçim yapması gerek:
                                1-Ciri
                                2-Yennefer`)
                                }
                                let choose5 = prompt("Lütfen bir seçenek giriniz;1, 2")
                                choose5;
                                    if (choose5 === "1"){
                                        alert("Ciri'yi kurtarmayı seçtiniz.")
                                        alert("Geralt Ciri'yi yakalayan kralı güçlü bir hamleyle indirir fakat bu Yennefer'i yani hayattaki ilk aşkı olan kadının ölmesine sebep olmuştur.Ciri ile beraber Wild Hunt'ı ortadan kaldırmıştır fakat sevdiği kadının ölümünden kendini suçlu bulmuştur.Buna dayanamayan Geralt hayatına son vermiştir.SON!")
                                    }
                                    
                                    else if (choose5 === "2"){
                                        alert("Yennefer'i kurtarmayı seçtiniz.")
                                        alert("Geralt Yennefer'i yakalayanı güçlü bir hamleyle indirir fakat bu sırada Wild Hunt Kralı tek seferde Ciri'yi öldürmüştür. Wild Hunt'ı ortadan kaldırdıktan sonra manevi kızı olarak gördüğü Ciri'nin ölümünden kendini suçlu bulup hayatına son vermiştir.SON!");
                                        
                                    }
                                    
                                else if(choose3 === "1" || choose5 === "1"){
                                     alert("Ciri'yi kurtarmayı seçtiniz.");
                                     alert(`Ciri'yi yakalayanı ulu kılıçla tek seferde indirip elindeki kılıcı Yennefer'i yakalayan Kral'a atıp tek hamlede ikisinide kurtarmıştır.Sonrasında ise 3'ü bir araya gelip Wild Hunt'ı yenip Ciri'yi kurtarmıştır. Ve hayatlarına artık 3'ü beraber yaşayarak devam etmişlerdir. SON!`)
                                    
                                }
                                else if (choose3 === "2" || choose5 === "2"){;
                                     alert("Yennefer'i kurtarmayı seçtiniz.");
                                    alert(`Yennefer'i yakalayanı ulu kılıçla tek seferde indirip elindeki kılıcı Ciri'yi yakalayana atıp tek hamlede ikisinide kurtarmıştır.Sonrasında ise 3'ü bir araya gelip Wild Hunt'ı yenip Ciri'yi kurtarmıştır. Ve hayatlarına artık 3'ü beraber yaşayarak devam etmişlerdir. SON!`)
                }              
                        
            }
