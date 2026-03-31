// Bu içerik müşterinin sağladığı belgeden AYNEN alınmıştır
// HİÇBİR DEĞİŞİKLİK YAPILMADAN kullanılmalıdır

// ===== ANA SAYFA İÇERİĞİ =====

export const tazminatGenelGiris = "Tazminat hukuku; hukuka aykırı bir fiil, sözleşmeye aykırılık veya kusurlu davranış sonucu kişilerin uğradığı maddi ve manevi zararların giderilmesini konu alan hukuk dalıdır. Tazminat talepleri, somut olaya göre farklılık göstermekle birlikte, zarar görenin zararının eksiksiz şekilde giderilmesi temel ilkedir.\n\nTürk Borçlar Kanunu başta olmak üzere ilgili mevzuat ve yerleşik yargı içtihatları doğrultusunda, zararın giderilmesi amacıyla açılan davalar tazminat hukukunun kapsamını oluşturur.";

export const tazminatHizmetler = [
  "Trafik kazalarından kaynaklanan maddi ve manevi tazminat davaları",
  "İş kazası ve meslek hastalığından doğan tazminat talepleri",
  "Destekten yoksun kalma tazminatı",
  "Cismani zarar ve sürekli iş göremezlik tazminatı",
  "Ölüm ve ağır bedensel zarar nedeniyle açılan tazminat davaları",
  "Manevi tazminat talepleri"
];

export const tazminatGenelBolumler = [
  {
    id: 1,
    baslik: "Maddi Tazminat Nedir?",
    icerik: "Maddi tazminat; haksız fiil veya hukuka aykırı bir davranış sonucunda kişinin malvarlığında meydana gelen eksilmenin giderilmesi amacını taşır. Tedavi giderleri, çalışma gücü kaybı, kazanç kaybı ve bakım giderleri gibi kalemler maddi tazminatın kapsamına girer.\n\nMaddi tazminatın kapsamı, olayın niteliği ve zarar görenin kişisel durumu dikkate alınarak belirlenir."
  },
  {
    id: 2,
    baslik: "Manevi Tazminat Nedir?",
    icerik: "Manevi tazminat; kişinin yaşadığı acı, elem ve ızdırabın bir nebze olsun giderilmesi amacıyla hükmedilen tazminattır. Manevi tazminat, bir zenginleşme aracı olmayıp hakkaniyet ilkesine göre takdir edilir."
  },
  {
    id: 3,
    baslik: "Tazminat Davalarında Hukuki Destek",
    icerik: "Tazminat davaları; teknik hesaplamalar, bilirkişi raporları ve kusur değerlendirmeleri içeren, uzmanlık gerektiren dava türlerindendir. Yapılacak hatalar, telafisi güç hak kayıplarına yol açabilir.\n\nBu nedenle tazminat taleplerinin, sürecin başından itibaren hukuki destek alınarak yürütülmesi büyük önem arz etmektedir."
  }
];

// Alt alan kartları (ana sayfada gösterilecek, tıklanınca alt sayfaya gidecek)
export const tazminatAltAlanlar = [
  {
    id: "trafik-kazasi-tazminat",
    baslik: "Trafik Kazasından Kaynaklı Maddi Manevi Tazminat Davası Talepleri",
    kisaAciklama: "Trafik kazaları sonucunda meydana gelen bedensel zararlar veya ölümler nedeniyle, kusurlu taraflara karşı maddi ve manevi tazminat talepleri.",
    link: "/faaliyet-alanlari/tazminat-hukuku/trafik-kazasi-tazminat"
  },
  {
    id: "is-kazasi-tazminat",
    baslik: "İş Kazasından Kaynaklı Maddi Manevi Tazminat Talepleri",
    kisaAciklama: "İş kazası veya meslek hastalığı nedeniyle zarar gören işçi ya da yakınlarının, işverene karşı maddi ve manevi tazminat talepleri.",
    link: "/faaliyet-alanlari/tazminat-hukuku/is-kazasi-tazminat"
  }
];

// ===== TRAFİK KAZASI TAZMİNAT ALT SAYFASI =====

export const trafikKazasiGiris = "Trafik kazaları sonucunda meydana gelen bedensel zararlar veya ölümler nedeniyle, kusurlu taraflara karşı maddi ve manevi tazminat talepleri ileri sürülebilir. Bu tür davalarda kusur oranları, maluliyet durumu ve zarar kalemleri büyük önem taşır.\n\nAyrıca, sigorta şirketlerine karşı da tazminat taleplerinin yöneltilmesi mümkündür.";

export const trafikKazasiBolumler = [
  {
    id: 1,
    baslik: "Trafik Kazalarına Bağlı Tazminat Talepleri Nelerdir?",
    icerik: "• Kişinin yaralanması ve ölümüne bağlı maddi/manevi tazminat talepleri\n• Araçtaki zarardan kaynaklı maddi tazminat talepleri\n\nBu zararlar, ilgililerden (araç sürücüsü, sahibi, işleteni ve sigorta şirketinden, güvence hesabından) istenebilmektedir."
  },
  {
    id: 2,
    baslik: "Maddi Tazminat Talepleri",
    icerik: "Trafik kazası nedeniyle uğranılan ekonomik zararların giderilmesi amacıyla maddi tazminat talep edilebilir. Maddi tazminat kapsamına giren başlıca kalemler şunlardır:\n\n• Tedavi giderleri\n• Geçici iş göremezlik nedeniyle gelir kaybı\n• Sürekli iş göremezlik (maluliyet) tazminatı\n• Bakıcı ve bakım giderleri\n• Ölüm halinde destekten yoksun kalma tazminatı\n\nMaddi tazminatın hesaplanmasında; kusur oranları, zarar görenin yaşı, mesleği, gelir durumu ve maluliyet oranı gibi unsurlar dikkate alınır. Hesaplama, çoğu zaman bilirkişi raporları aracılığıyla yapılır."
  },
  {
    id: 3,
    baslik: "Manevi Tazminat Talepleri",
    icerik: "Trafik kazası nedeniyle bedensel bütünlüğü zarar gören kişilerin veya hayatını kaybedenlerin yakınlarının, yaşadıkları acı ve elem nedeniyle manevi tazminat talep etme hakları bulunmaktadır.\n\nManevi tazminat, zarar görenin yaşadığı manevi yıkımın tamamen giderilmesini değil, hakkaniyete uygun bir telafi sağlanmasını amaçlar. Bu nedenle manevi tazminat miktarı, olayın ağırlığı ve tarafların durumuna göre belirlenir."
  },
  {
    id: 4,
    baslik: "Sigorta Şirketlerine Karşı Açılan Tazminat Talepleri",
    icerik: "Zorunlu mali sorumluluk sigortası (trafik sigortası) kapsamında, kazaya karışan aracın sigorta şirketine karşı doğrudan tazminat talebinde bulunulması mümkündür. Sigorta şirketlerinin sorumluluğu, poliçe limitleri ile sınırlıdır.\n\nSigorta başvurularının usulüne uygun yapılmaması veya eksik belge sunulması, tazminatın reddine ya da eksik ödenmesine yol açabilmektedir."
  },
  {
    id: 5,
    baslik: "Araçta Oluşan Hasardan Doğan Tazminat",
    icerik: "Trafik kazası sonucunda araçta meydana gelen maddi hasar nedeniyle, zarar gören araç sahibi tarafından araç hasar tazminatı talep edilmesi mümkündür. Bu tazminat, kazaya kusuruyla sebebiyet veren sürücüden, araç sahibinden, işletenden veya sigorta şirketinden talep edilebilir.\n\nAraç hasarından doğan tazminat talepleri, başta Karayolları Trafik Kanunu ve Türk Borçlar Kanunu hükümleri çerçevesinde değerlendirilir."
  },
  {
    id: 6,
    baslik: "Araç Hasar Tazminatının Kapsamı",
    icerik: "Araçta meydana gelen hasar nedeniyle talep edilebilecek tazminat kalemleri, somut olayın özelliklerine göre değişiklik göstermekle birlikte başlıca şu unsurlardan oluşur:\n\n• Onarım (tamir) giderleri\n• Araç perte ayrılmışsa araç bedeli\n• Araç değer kaybı\n• Kullanım mahrumiyeti (araçtan yoksun kalma) zararı\n\nBu zarar kalemleri, kusur oranları dikkate alınarak talep edilebilir."
  },
  {
    id: 7,
    baslik: "Onarım Giderleri ve Pert Araç Bedeli",
    icerik: "Kaza sonucu araçta meydana gelen hasarın onarım yoluyla giderilmesi mümkün ise, onarım giderleri maddi tazminat kapsamında talep edilebilir. Aracın ekonomik olarak onarılamayacak durumda olması halinde ise araç bedeli talep edilir.\n\nOnarım bedelleri ve pert değerlendirmeleri, genellikle ekspertiz raporları ile tespit edilmektedir."
  },
  {
    id: 8,
    baslik: "Araç Değer Kaybı Tazminatı",
    icerik: "Araç değer kaybı; aracın kaza sonrası onarılmış olsa dahi, ikinci el piyasasındaki değerinde meydana gelen kalıcı düşüşü ifade eder. Kusursuz veya daha az kusurlu olan araç sahibi, araç değer kaybını tazminat olarak talep edebilir.\n\nDeğer kaybı hesaplamasında;\n\n• Aracın yaşı\n• Kilometresi\n• Hasarın niteliği\n• Değişen ve boyanan parçalar\n\ngibi unsurlar dikkate alınır."
  },
  {
    id: 9,
    baslik: "Kullanım Mahrumiyeti (Araçtan Yoksun Kalma) Zararı",
    icerik: "Kaza nedeniyle aracın kullanılamadığı süre boyunca, araç sahibinin uğradığı kullanım mahrumiyeti zararı da tazminat kapsamındadır. Bu zarar, aracın onarım süresi veya pert olması halinde yeni araç temin süresine göre belirlenir.\n\nKullanım mahrumiyeti zararı, özellikle ticari araçlar bakımından önemli bir tazminat kalemidir."
  }
];

// ===== İŞ KAZASI TAZMİNAT ALT SAYFASI =====

export const isKazasiGiris = "İş kazası veya meslek hastalığı nedeniyle zarar gören işçi ya da yakınları, işverene karşı maddi ve manevi tazminat davası açabilir. Bu davalarda, işverenin iş sağlığı ve güvenliği yükümlülükleri ayrıntılı şekilde incelenir.\n\nTazminat hesaplamaları, maluliyet oranı ve çalışma gücü kaybı dikkate alınarak yapılır.";

export const isKazasiBolumler = [
  {
    id: 1,
    baslik: "İş Kazası Nedir?",
    icerik: "İş kazası, kişinin çalışma hayatında 5510 sayılı Kanunda sayılan hallerden birinde meydana gelen ve sigortalıyı bedenen veya ruhen engelli hale getiren olaydır.\n\n5510 sayılı Kanunda sayılan iş kazası halleri ise şunlardır:\n\n• Sigortalının işyerinde bulunduğu sırada\n• İşveren tarafından yürütülmekte olan iş nedeniyle\n• Bir işverene bağlı olarak çalışan sigortalının, görevli olarak işyeri dışında başka bir yere gönderilmesi nedeniyle asıl işini yapmaksızın geçen zamanlarda\n• Emziren kadın sigortalının çocuğuna süt vermek için ayrılan zamanlarda\n• Sigortalıların işverence sağlanan bir taşıtla işin yapıldığı yere gidiş gelişi sırasında meydana gelen kazalar"
  },
  {
    id: 2,
    baslik: "İş Kazası Sigortası Kapsamında Bulunan Sigortalılar Kimlerdir?",
    icerik: "• Hizmet akdi ile çalışanlar (4/a)\n• Kendi adına ve hesabına bağımsız çalışanlar ile köy ve mahalle muhtarları (4/b)\n• Ceza İnfaz Kurumları ile Tutukevlerinde çalışanlar\n• Aday çırak, çırak ve stajyerler\n• Ek 9 uncu maddede belirtilen şartlarda ev hizmetlerinde çalışan sigortalılar"
  },
  {
    id: 3,
    baslik: "Bir Olayın İş Kazası Sayılabilmesi için Hangi Unsurları Taşıması Gerekmektedir?",
    icerik: "Kurumumuzca bir olayın iş kazası olup olmadığının değerlendirilebilmesi için öncelikle iş kazası geçiren kişinin,\n\n• Sigortalı olması,\n• Mutlaka bir olay ile karşılaşmış olması,\n• Meydana gelen olay nedeniyle bedenen veya ruhen engelli hale gelmesi,\n\nhallerinin bir arada bulunması gerekmektedir."
  },
  {
    id: 4,
    baslik: "Maddi Tazminat Talepleri",
    icerik: "İş kazası nedeniyle uğranılan ekonomik zararlar, maddi tazminat kapsamında talep edilebilir. Maddi tazminat kalemleri şunlardır:\n\n• Tedavi giderleri\n• Geçici iş göremezlik nedeniyle gelir kaybı\n• Sürekli iş göremezlik (maluliyet) tazminatı\n• Bakıcı ve bakım giderleri\n• Ölüm halinde destekten yoksun kalma tazminatı\n\nMaddi tazminatın hesaplanmasında; işçinin yaşı, mesleği, kazanç durumu, kusur oranı ve maluliyet oranı esas alınır. Bu hesaplamalar çoğu zaman bilirkişi raporlarıyla yapılmaktadır."
  },
  {
    id: 5,
    baslik: "Manevi Tazminat Talepleri",
    icerik: "İş kazası sonucu bedensel bütünlüğü zarar gören işçi veya hayatını kaybeden işçinin yakınları, yaşanan acı ve elem nedeniyle manevi tazminat talep edebilir.\n\nManevi tazminat, zarar görenin yaşadığı manevi yıkımı tamamen ortadan kaldırmayı değil, hakkaniyete uygun bir tatmin sağlamayı amaçlar. Manevi tazminat miktarı, olayın ağırlığı ve tarafların durumuna göre takdir edilir."
  },
  {
    id: 6,
    baslik: "İşverenin Sorumluluğu",
    icerik: "İşveren, iş sağlığı ve güvenliği önlemlerini almakla yükümlüdür. Gerekli önlemlerin alınmaması veya denetim eksikliği nedeniyle meydana gelen iş kazalarında, işveren kusurlu kabul edilir ve tazminat sorumluluğu doğar.\n\nİşverenin kusur oranı, tazminat miktarının belirlenmesinde doğrudan etkilidir."
  },
  {
    id: 7,
    baslik: "Geçici İş Göremezlik Ödeneği Nedir?",
    icerik: "Geçici iş göremezlik; sigortalının iş kazası, meslek hastalığı, hastalık ve analık hallerinde Kurumca yetkilendirilen hekim veya sağlık kurulu raporlarında belirtilen istirahat süresince geçici olarak çalışamama halidir.\n\nGeçici iş göremezlik ödeneği; sosyal sigortacılık bakımından, iş kazası, meslek hastalığı, hastalık ve analık sigorta kollarından istirahatli bulunan sigortalıya işten kaldığı günler için Kurumca ödenen parasal yardımdır."
  },
  {
    id: 8,
    baslik: "Geçici İş Göremezlik Ödeneğinden Faydalanmak İçin Şartlar Nelerdir?",
    icerik: "İş kazası sonucu ödenen geçici iş göremezlik ödeneğinden yararlanma koşulları arasında belli bir sigortalılık süresi, prim ödeme gün sayısı ve yaş gibi faktörler yer almaz. Sigortalılık niteliği devam eden herkes bu haktan yararlanabilir.\n\nAncak, 4/b sigortalıları ile tarım ve orman işlerinde hizmet akdiyle süreksiz olarak çalışan sigortalılarının geçici iş göremezlik ödeneği hakkından yararlanabilmeleri için genel sağlık sigortası dahil prim ve prime ilişkin her türlü borçlarının ödenmiş olması gerekmektedir."
  },
  {
    id: 9,
    baslik: "Sürekli İş Göremezlik Geliri Nedir?",
    icerik: "Sürekli iş göremezlik geliri, iş kazası veya meslek hastalığı sonucu oluşan hastalık ve engellilik nedeniyle Kurumca yetkilendirilen sağlık hizmeti sunucularının sağlık kurulları tarafından verilen raporlara istinaden meslekte kazanma gücü en az %10 oranında azalmış bulunan sigortalıya bağlanan gelirdir.\n\nSürekli iş göremezlik geliri sigortalının;\n\n• Tam iş göremezliği halinde; Günlük kazanç x 30 x %70\n• Kısmi iş göremezliği halinde ise Günlük kazanç x 30 x %70 x SİD (sürekli iş göremezlik derecesi)\n\nformüllerine göre hesaplanmaktadır.\n\nKanuna göre bağlanacak sürekli iş göremezlik geliri;\n\n- Geçici iş göremezlik ödeneğinin sona erdiği tarihi,\n- Geçici iş göremezlik tespit edilemeden sürekli iş göremezlik durumuna girilmişse, buna ait Kurumca yetkilendirilen sağlık hizmeti sunucularının sağlık kurulları tarafından verilen raporun tarihini,\n\ntakip eden ay başından başlatılmaktadır."
  }
];
