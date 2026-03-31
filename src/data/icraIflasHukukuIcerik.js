// Bu içerik müşterinin sağladığı belgeden AYNEN alınmıştır
// HİÇBİR DEĞİŞİKLİK YAPILMADAN kullanılmalıdır

export const icraIflasGiris = "İcra ve iflas hukuku; borçlunun borcunu rızaen yerine getirmemesi halinde, alacaklının alacağını devletin cebri icra organları aracılığıyla tahsil etmesini düzenleyen hukuk dalıdır. Bu alandaki uyuşmazlıklar, alacaklı ve borçlu arasındaki hukuki süreçlerin doğru yürütülmesini gerektirir.\n\nİcra hukuku uygulaması, sıkı şekil şartlarına ve hak düşürücü sürelere tabi olup, yapılacak işlemlerin usulüne uygun şekilde yürütülmesi alacağın tahsili bakımından belirleyici niteliktedir.";

export const icraIflasHizmetler = [
  "İlamsız icra takibi",
  "İlâmlı icra takibi",
  "Kambiyo senetlerine özgü haciz yolu ile takip",
  "Haciz, muhafaza ve satış işlemleri",
  "İtirazın kaldırılması ve itirazın iptali davaları",
  "Menfi tespit ve istirdat davaları",
  "Tahliye talepli icra takipleri",
  "Alacakların yapılandırılması ve icra sürecinin takibi"
];

export const icraIflasBolumler = [
  {
    id: 1,
    baslik: "İlamsız İcra Takibi",
    icerik: "İlamsız icra takibi, herhangi bir mahkeme kararına dayanmaksızın para ve teminat alacaklarının icra yoluyla tahsil edilmesine imkân tanıyan takip yoludur. Borçlu, ödeme emrine yasal süresi içerisinde itiraz etmezse takip kesinleşir ve haciz aşamasına geçilir.\n\nTakip sürecinin usulüne uygun yürütülmemesi halinde, alacaklının tahsil imkânı ortadan kalkabileceğinden sürecin titizlikle yürütülmesi gerekmektedir."
  },
  {
    id: 2,
    baslik: "Haciz ve Satış İşlemleri",
    icerik: "Borçlunun borcunu süresinde ödememesi halinde, alacağın tahsili amacıyla haciz işlemleri uygulanabilir. Bu kapsamda borçlunun;\n\n• Maaş ve ücret alacakları\n• Banka hesapları\n• Taşınır ve taşınmaz malları\n\nüzerinde haciz tesis edilebilir. Haczedilen malların satış süreci, kanunda öngörülen usul ve esaslar çerçevesinde gerçekleştirilir."
  },
  {
    id: 3,
    baslik: "İtirazın İptali Davası",
    icerik: "Borçlunun icra takibine itiraz etmesi halinde, alacaklı tarafından itirazın iptali davası açılabilir. Davanın kabulü halinde takip kesinleşir ve borçlu, koşulları oluşmuşsa icra inkâr tazminatına da mahkûm edilebilir.\n\nBu dava, alacağın tahsili bakımından icra sürecinin en önemli aşamalarından biridir."
  },
  {
    id: 4,
    baslik: "Menfi Tespit ve İstirdat Davaları",
    icerik: "Borçlu olmadığını ileri süren kişiler, haksız veya yersiz icra takiplerine karşı menfi tespit davası açabilir. Borcun icra tehdidi altında ödenmiş olması halinde ise istirdat davası yoluyla ödemenin geri alınması talep edilebilir.\n\nBu davalar, borçlu taraf açısından telafisi güç hak kayıplarının önlenmesi bakımından önem taşımaktadır."
  },
  {
    id: 5,
    baslik: "İcra Hukukunda Hukuki Destek",
    icerik: "İcra ve iflas hukuku, teknik bilgi ve uygulama tecrübesi gerektiren bir alandır. Sürelere riayet edilmemesi veya usul hataları, alacaklının tahsil hakkını ortadan kaldırabileceği gibi borçlu açısından da telafisi güç zararlara yol açabilir.\n\nBu nedenle icra ve iflas hukukuna ilişkin süreçlerin, başlangıç aşamasından itibaren hukuki destek alınarak yürütülmesi büyük önem arz etmektedir."
  }
];

export const icraIflasSSS = [
  {
    id: 1,
    soru: "Ödeme emri tebliğ edildi, ne yapmalıyım?",
    cevap: "İcra takibine konu ödeme emri tebliğ edildiği andan itibaren yasal süreler işlemeye başlar. Öncelikle tebligat içeriği dikkatle incelenmeli, borcun dayanağı ve tutarı kontrol edilmelidir. Süresi içinde itiraz edilmemesi halinde takip kesinleşir ve haciz aşamasına geçilir."
  },
  {
    id: 2,
    soru: "Borcum yok ama hakkımda icra takibi başlatıldı, ne yapabilirim?",
    cevap: "Borçlu olmadığını düşünen kişiler, icra takibine yasal süresi içinde itiraz edebilir. Ayrıca haksız takiplere karşı menfi tespit davası açılarak borçlu olunmadığının tespiti talep edilebilir. Sürelerin kaçırılması halinde hak kaybı doğabileceğinden derhal hukuki destek alınması önemlidir."
  },
  {
    id: 3,
    soru: "İcra takibine itiraz edersem ne olur?",
    cevap: "İcra takibine süresi içinde yapılan itiraz, takibi kendiliğinden durdurur. Bu durumda alacaklı, itirazın kaldırılması veya itirazın iptali yoluna başvurabilir. İtirazın haksız bulunması halinde borçlu aleyhine icra inkâr tazminatına hükmedilmesi söz konusu olabilir."
  },
  {
    id: 4,
    soru: "Maaşıma icra gelir mi?",
    cevap: "Maaş üzerine icra haczi konulması mümkündür. Ancak maaşın tamamı haczedilemez. Yasal kesinti oranları uygulanır ve borçlunun geçimini tamamen ortadan kaldıracak şekilde işlem yapılamaz. Birden fazla icra dosyası olması halinde kesinti oranları ayrıca değerlendirilmelidir."
  },
  {
    id: 5,
    soru: "Banka hesabıma haciz konulabilir mi?",
    cevap: "Evet. İcra takibinin kesinleşmesi halinde borçlunun banka hesaplarına haciz konulabilir. Hesapta bulunan tutar, borç miktarıyla sınırlı olmak üzere haczedilir. Haciz işlemlerinin hukuka uygunluğu her zaman denetlenebilir."
  },
  {
    id: 6,
    soru: "Eve haciz gelir mi?",
    cevap: "Borçlunun borcunu ödememesi halinde, kanunda öngörülen şartlar dahilinde haciz işlemi yapılabilir. Ancak temel yaşam eşyaları haczedilemez. Hangi malların haczedilebileceği ve haczin nasıl yapılacağı kanunla belirlenmiştir."
  },
  {
    id: 7,
    soru: "Borcu ödersem icra dosyası kapanır mı?",
    cevap: "Borç, faiz ve masraflarıyla birlikte ödendiğinde icra dosyası kapanır. Ödeme sonrasında dosyanın kapatılması ve hacizlerin kaldırılması için gerekli işlemlerin yapılması gerekir. Bu işlemlerin eksiksiyle dosya açık kalabilir."
  },
  {
    id: 8,
    soru: "İcra borcunu taksitle ödeme imkânı var mı?",
    cevap: "Tarafların anlaşması halinde borç, taksitlendirilerek ödenebilir. Bu durumda ödeme planının açık ve net şekilde belirlenmesi ve icra dosyasına uygun şekilde yansıtılması gerekir. Aksi halde takip devam edebilir."
  },
  {
    id: 9,
    soru: "Borcu ödedim ama icra dosyası hâlâ açık, ne yapmalıyım?",
    cevap: "Borç ödendiği halde dosya kapatılmamışsa, ödemenin icra dosyasına işlenip işlenmediği kontrol edilmelidir. Gerekli işlemler yapılmazsa hacizler devam edebilir. Bu nedenle sürecin takip edilmesi gerekir."
  },
  {
    id: 10,
    soru: "İcra sürecinde avukatla çalışmak zorunlu mu?",
    cevap: "İcra takibi ve davalarda avukatla çalışmak zorunlu değildir. Ancak icra hukuku teknik ve süreye bağlı bir alan olduğundan, yapılacak hatalar ciddi hak kayıplarına yol açabilir. Bu nedenle hukuki destek alınması önerilmektedir."
  }
];
