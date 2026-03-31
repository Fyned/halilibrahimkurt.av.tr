export const faaliyetAlanlari = [
  {
    id: "bosanma-hukuku",
    baslik: "Boşanma Hukuku",
    kisaAciklama: "Anlaşmalı ve çekişmeli boşanma davaları, nafaka, velayet, mal paylaşımı ve tazminat talepleri",
    detayliAciklama: "Boşanma evlilik bağının yasal olarak sona ermesidir. Türk Medeni Kanunu çerçevesinde boşanma sebepleri, nafaka ve tazminat talepleri hakkında hukuki destek.",
    link: "/faaliyet-alanlari/bosanma-hukuku",
    ikon: "heart"
  },
  {
    id: "tazminat-hukuku",
    baslik: "Tazminat Hukuku",
    kisaAciklama: "Trafik kazası, iş kazası, destekten yoksun kalma ve manevi tazminat davaları",
    detayliAciklama: "Tazminat hukuku; hukuka aykırı bir fiil veya kusurlu davranış sonucu kişilerin uğradığı maddi ve manevi zararların giderilmesini konu alan hukuk dalıdır.",
    link: "/faaliyet-alanlari/tazminat-hukuku",
    ikon: "shield"
  },
  {
    id: "is-hukuku",
    baslik: "İş Hukuku",
    kisaAciklama: "Kıdem ve ihbar tazminatı, işe iade davaları, haksız fesih, fazla mesai ve işçilik alacakları",
    detayliAciklama: "İş hukuku; işçi ile işveren arasındaki çalışma ilişkisinden doğan hak ve borçları düzenleyen hukuk dalıdır.",
    link: "/faaliyet-alanlari/is-hukuku",
    ikon: "briefcase"
  },
  {
    id: "icra-iflas-hukuku",
    baslik: "İcra ve İflas Hukuku",
    kisaAciklama: "İcra takibi, haciz işlemleri, itirazın iptali, menfi tespit ve alacak tahsili davaları",
    detayliAciklama: "İcra ve iflas hukuku; borçlunun borcunu rızaen yerine getirmemesi halinde, alacaklının alacağını devletin cebri icra organları aracılığıyla tahsil etmesini düzenleyen hukuk dalıdır.",
    link: "/faaliyet-alanlari/icra-iflas-hukuku",
    ikon: "scale"
  },
  {
    id: "kira-hukuku",
    baslik: "Kira Hukuku",
    kisaAciklama: "Konut ve işyeri kiralarından doğan uyuşmazlıklar, tahliye davaları, kira tespit ve uyarlama davaları",
    detayliAciklama: "Kira hukuku; kiraya veren ile kiracı arasındaki konut ve işyeri kiralarından doğan uyuşmazlıkları düzenleyen ve karşılıklı olarak hak ve yükümlülükleri gösteren hukuk dalıdır.",
    link: "/faaliyet-alanlari/kira-hukuku",
    ikon: "home"
  },
  {
    id: "miras-hukuku",
    baslik: "Miras Hukuku",
    kisaAciklama: "Miras paylaşımı, veraset, vasiyetname, tenkis davası, muris muvazaası ve mirasın reddi",
    detayliAciklama: "Miras hukuku, bir kişinin vefatıyla birlikte malvarlığının kimlere ve hangi oranlarda geçeceğini düzenleyen hukuk dalıdır.",
    link: "/faaliyet-alanlari/miras-hukuku",
    ikon: "document"
  }
];

export const navigasyon = [
  { baslik: "Ana Sayfa", link: "/" },
  { baslik: "Hakkımızda", link: "/hakkimizda" },
  {
    baslik: "Faaliyet Alanları",
    link: "/faaliyet-alanlari",
    altMenu: [
      { baslik: "Boşanma Hukuku", link: "/faaliyet-alanlari/bosanma-hukuku" },
      { baslik: "Tazminat Hukuku", link: "/faaliyet-alanlari/tazminat-hukuku" },
      { baslik: "İş Hukuku", link: "/faaliyet-alanlari/is-hukuku" },
      { baslik: "İcra ve İflas Hukuku", link: "/faaliyet-alanlari/icra-iflas-hukuku" },
      { baslik: "Kira Hukuku", link: "/faaliyet-alanlari/kira-hukuku" },
      { baslik: "Miras Hukuku", link: "/faaliyet-alanlari/miras-hukuku" }
    ]
  },
  { baslik: "Makaleler", link: "/makaleler" },
  { baslik: "İletişim", link: "/iletisim" }
];
