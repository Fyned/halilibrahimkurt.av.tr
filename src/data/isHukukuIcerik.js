// Bu içerik müşterinin sağladığı belgeden AYNEN alınmıştır
// HİÇBİR DEĞİŞİKLİK YAPILMADAN kullanılmalıdır

export const isHukukuGiris = "İş hukuku; işçi ile işveren arasındaki çalışma ilişkisinden doğan hak ve borçları düzenleyen hukuk dalıdır. Temel amacı, ekonomik ve sosyal olarak daha zayıf konumda bulunan işçinin korunmasıdır. Bu nedenle iş mevzuatı, işçi lehine yorum ilkesini benimsemiştir.\n\nTürkiye'de iş hukukunun temel kaynağı 4857 sayılı İş Kanunu olup, bunun yanında Borçlar Kanunu, Sendikalar ve Toplu İş Sözleşmesi Kanunu ile Yargıtay içtihatları uygulamada büyük önem taşır.";

export const isHukukuBolumler = [
  {
    id: 1,
    baslik: "İş Sözleşmesi",
    icerik: "İş sözleşmesi; işçinin bağımlı olarak iş görmeyi, işverenin ise ücret ödemeyi üstlendiği sözleşmedir."
  },
  {
    id: 2,
    baslik: "İş Sözleşmesinin Sona Ermesi",
    icerik: "İş sözleşmesi;\n\n• İşveren tarafından fesih\n• İşçi tarafından fesih\n• Kendiliğinden sona erme\n\nşekillerinde sona erebilir.\n\nFesihler haklı, geçerli veya haksız olabilir. Bu ayrım, işçinin tazminat haklarını doğrudan etkiler."
  },
  {
    id: 3,
    baslik: "Kıdem ve İhbar Tazminatı",
    icerik: "Kıdem Tazminatı\n\nİşçinin, aynı işverene bağlı olarak en az 1 yıl çalışmış olması ve sözleşmenin kanunda sayılan şekillerde sona ermesi halinde doğar.\n\nİhbar Tazminatı\n\nBelirsiz süreli iş sözleşmelerinde, taraflardan birinin bildirim süresine uymadan fesih yapması halinde gündeme gelir."
  },
  {
    id: 4,
    baslik: "İşe İade Davası",
    icerik: "Belirsiz süreli sözleşmeyle çalışan ve işyerinde en az 30 işçi bulunan işçiler, geçersiz nedenle fesih halinde işe iade davası açabilir.\n\nDavanın amacı:\n\n• İşçinin işe geri alınması veya\n• İşe başlatılmaması halinde işe başlatmama tazminatı (4-8 ay) ve boşta geçen süre ücretinin alınmasıdır."
  }
];

export const isHukukuHizmetler = [
  "Kıdem ve ihbar tazminatı talepleri",
  "İşe iade davaları",
  "Haksız ve geçersiz fesihlere ilişkin uyuşmazlıklar",
  "Fazla mesai, ücret, prim ve diğer işçilik alacakları",
  "Yıllık izin ve ulusal bayram – genel tatil alacakları",
  "Mobbing (psikolojik taciz) iddiaları",
  "Zorunlu arabuluculuk sürecinin yürütülmesi",
  "İş sözleşmelerinin hazırlanması ve incelenmesi"
];

export const isHukukuSSS = [
  {
    id: 1,
    soru: "Kıdem tazminatı nasıl alınır?",
    cevap: "Kıdem tazminatı alınabilmesi için işçinin, aynı işverene bağlı olarak en az 1 yıl çalışmış olması ve iş sözleşmesinin kanunda belirtilen şekillerde sona ermesi gerekir. İşveren tarafından haksız fesih, işçi tarafından haklı nedenle fesih veya emeklilik gibi hallerde kıdem tazminatı hakkı doğar.\n\nKıdem tazminatı ödenmezse, öncelikle zorunlu arabuluculuk yoluna başvurulmalı, anlaşma sağlanamaması halinde dava açılmalıdır."
  },
  {
    id: 2,
    soru: "İşe iade davası hangi şartlarda açılır?",
    cevap: "İşe iade davası açılabilmesi için;\n\n• İş sözleşmesinin belirsiz süreli olması\n• İşyerinde en az 30 işçi çalışıyor olması\n• İşçinin en az 6 ay kıdeminin bulunması\n• Feshin geçerli bir nedene dayanmaması\n\ngerekmektedir.\n\nDava açılmadan önce zorunlu arabuluculuğa başvurulması şarttır. Süreler kısa olduğundan, fesih bildiriminin tebliğinden itibaren sürecin dikkatle yürütülmesi gerekir."
  },
  {
    id: 3,
    soru: "Haksız fesih nedir?",
    cevap: "Haksız fesih; iş sözleşmesinin, kanunda öngörülen haklı veya geçerli bir neden olmaksızın sona erdirilmesidir. Haksız fesih halinde işçi;\n\n• Kıdem tazminatı\n• İhbar tazminatı\n• Varsa diğer işçilik alacaklarını\n\ntalep edebilir. Ayrıca şartları varsa işe iade davası da gündeme gelebilir."
  },
  {
    id: 4,
    soru: "Mobbing nedeniyle işçi tarafından iş sözleşmesi haklı olarak feshedilebilir mi?",
    cevap: "Mobbing; işçinin işyerinde sistematik, sürekli ve kasıtlı şekilde psikolojik baskıya maruz kalmasıdır. Mobbing iddiasının kabul edilebilmesi için olayların süreklilik göstermesi ve işçinin kişilik haklarının ihlal edilmesi gerekir.\n\nMobbing nedeniyle işçi tarafından sözleşmenin feshedilmesi durumunda açılacak kıdem tazminatı davalarında;\n\n• Tanık beyanları\n• Yazışmalar\n• Çalışma ortamına ilişkin deliller\n\nönem taşır."
  },
  {
    id: 5,
    soru: "Fazla mesai ücreti nasıl ispatlanır?",
    cevap: "Fazla mesai, haftalık 45 saati aşan çalışmalar için söz konusu olur. Fazla mesai ücreti;\n\n• Tanık anlatımları\n• Bordrolar\n• Giriş–çıkış kayıtları\n• Fiili çalışma düzeni\n\nile ispatlanabilir. Bordroların imzalı olması tek başına yeterli kabul edilmez; fiili çalışma her zaman araştırılır."
  },
  {
    id: 6,
    soru: "İşveren tazminat ödemezse ne olur?",
    cevap: "İşverenin kıdem, ihbar veya diğer işçilik alacaklarını ödememesi halinde, işçi öncelikle arabulucuya başvurmak zorundadır. Arabuluculuk sürecinde anlaşma sağlanamazsa, iş mahkemesinde dava açılarak alacakların tahsili sağlanabilir.\n\nSürecin doğru yürütülmemesi, hak kaybına yol açabileceğinden hukuki destek alınması önemlidir."
  },
  {
    id: 7,
    soru: "İşten çıkarıldım, ne yapmalıyım?",
    cevap: "İşten çıkarılan işçi, fesih bildiriminin yazılı olup olmadığını ve fesih nedenini kontrol etmelidir. Hak kaybı yaşanmaması için mümkün olan en kısa sürede hukuki destek alınmalı ve gerekiyorsa zorunlu arabuluculuk sürecine başvurulmalıdır."
  },
  {
    id: 8,
    soru: "İstifa edersem tazminat alabilir miyim?",
    cevap: "Genel kural olarak, istifa eden işçi kıdem tazminatı alamaz. Ancak işçinin;\n\n• Ücretinin ödenmemesi\n• Fazla mesailerin karşılıksız kalması\n• Mobbing uygulanması\n• İş koşullarının ağırlaştırılması\n\ngibi haklı fesih nedenleri varsa, istifa etmesine rağmen kıdem tazminatı hakkı doğabilir."
  },
  {
    id: 9,
    soru: "Sigortasız çalıştım, haklarımı alabilir miyim?",
    cevap: "Sigortasız çalıştırılmak hukuka aykırıdır. İşçi, sigortasız çalıştığını tanık, yazışma ve fiili çalışma düzeni ile ispatlayabilir. Sigortasız çalışılan süreler için hizmet tespit davası açılabilir ve bu sürelerin sigortalılık süresine eklenmesi sağlanabilir."
  },
  {
    id: 10,
    soru: "Maaşım elden ödeniyordu, ispat edebilir miyim?",
    cevap: "Ücretin elden ödenmesi, işçinin haklarını ortadan kaldırmaz. Gerçek ücret;\n\n• Tanık beyanları\n• Meslek ve pozisyona göre emsal ücret araştırmaları\n• Yazışmalar\n\nile tespit edilebilir."
  },
  {
    id: 11,
    soru: "İş kazası geçirdim, ne yapmalıyım?",
    cevap: "İş kazası halinde;\n\n• Olay derhal kayıt altına alınmalı\n• Sağlık raporları muhafaza edilmeli\n• Gerekirse tanıklar belirlenmelidir\n\nİş kazasına bağlı olarak maddi ve manevi tazminat talepleri haklarının kullanılabilmesi için bu durum son derece önemlidir."
  },
  {
    id: 12,
    soru: "Yıllık izin kullanmadım, ücretini alabilir miyim?",
    cevap: "Kullanılmayan yıllık izinler, iş sözleşmesinin sona ermesi halinde ücrete dönüşür. İşveren, yıllık izinlerin kullandırıldığını ispatlamakla yükümlüdür. Aksi halde işçi izin ücreti talep edebilir."
  }
];
