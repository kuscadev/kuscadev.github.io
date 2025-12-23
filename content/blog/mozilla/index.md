---
title: "Tarayıcı mı, Teknoloji Vitrini mi? Mozilla Odağını Nasıl Kaybetti?"   
description: "Firefox neden kan kaybediyor? Mozilla'nın Google bağımlılığı, tartışmalı PPA kararı ve bir özgürlük simgesinden 'abonelik vitrinine' dönüşen kimlik krizine dair derinlemesine bir analiz."
date: 2025-12-24
draft: true
tags: ["mozilla", "firefox", "fikir", "gizlilik"]
categories: ["fikir"]
---
Firefox’un çöküşü, teknik bir başarısızlık değil; kurumsal bir kimlik krizidir.

Bir zamanlar “insanlar için internet” iddiasıyla yola çıkan Firefox, bugün tarayıcıdan çok; VPN’ler, AI entegrasyonları ve abonelik servislerinin sergilendiği bir teknoloji vitrini gibi konumlanıyor. Bu dönüşüm, sadece ürün stratejisinde değil; kullanıcıyla kurulan güven ilişkisinde de derin bir kırılmaya işaret ediyor.

Bu yazı, Firefox’un neden pazar payı kaybettiğini değil; **Mozilla’nın odağını nasıl kaybettiğini** anlamaya çalışıyor. Gelir bağımlılığı, tartışmalı PPA kararları, yönetim teşvikleri ve yapay zeka stratejisi üzerinden, bir tarayıcının değil, bir teknoloji kurumunun kimlik krizini inceliyor.

Günümüzde tarayıcıları incelemek istediğimizde önümüze iki farklı yaklaşım çıkıyor. Blink motorunu kullanan tarayıcılar ve Gecko motorunu kullanan tarayıcılar. Bu iki motordan farklı olarak, Apple ekosisteminin temeli olan **Webkit** gibi motorlar olsa da ana akım olarak bu iki motoru kullanan tarayıcıları örnek gösterebiliriz.

Blink motorunu kullanan tarayıcılara pazar payının çok büyük bir kısmını domine eden Chrome, Brave, Opera, Vivaldi, Edge örnek gösterilebilirken her geçen yıl pazar payını kaybeden gecko motorunu kullanan tarayıcıların başını Mozilla Firefox çekiyor.

{{< chart >}}
type: 'bar',
data: {
  labels: ['Chrome', 'Safari', 'Edge', 'Firefox', 'Samsung Internet', 'Opera', 'Diğerleri'],
  datasets: [{
    label: '2025 Tarayıcı Kullanım Oranları (%)',
    data: [68.51, 16.35, 5.01, 2.42, 2.08, 1.95, 1.57],
    backgroundColor: ['#4285F4', '#34A853', '#FBBC05', '#EA4335']
  }]
}
{{< /chart >}}

Firefox’un kökeni, 1990’ların sonunda tarayıcı pazarını domine eden Netscape’e dayanır. Netscape’in Internet Explorer karşısında kaybettiği savaşın ardından, 1998’de kaynak kodlarının açılmasıyla Mozilla projesi doğdu. Amaç; tarayıcı pazarını tekelleşmeden kurtarmak ve açık interneti topluluk gücüyle savunmaktı.

Bu vizyonun ürünü olan Firefox, 2004’te Internet Explorer’a karşı gerçek bir alternatif olarak ortaya çıktı. Bir yıl sonra kurulan Mozilla Vakfı ise Firefox’u sadece bir yazılım değil; açıklık, gizlilik ve kullanıcı odaklılık ilkelerinin taşıyıcısı olarak konumlandırdı.

{{< chart >}}
type: 'line',
data: {
  labels: [
    '2000/Q1', '2000/Q2', '2000/Q3', '2000/Q4', '2001/Q1', '2001/Q2', '2001/Q3', '2001/Q4',
    '2002/Q1', '2002/Q2', '2002/Q3', '2002/Q4', '2003/Q1', '2003/Q2', '2003/Q3', '2003/Q4',
    '2004/Q1', '2004/Q2', '2004/Q3', '2004/Q4', '2005/Q1', '2005/Q2', '2005/Q3', '2005/Q4',
    '2006/Q1', '2006/Q2', '2006/Q3', '2006/Q4', '2007/Q1', '2007/Q2', '2007/Q3', '2007/Q4',
    '2008/Q1', '2008/Q2', '2008/Q3', '2008/Q4', '2009/Q1', '2009/Q2', '2009/Q3', '2009/Q4'
  ],
  datasets: [
    {
      label: 'Netscape',
      data: [19.53, 15.97, 13.27, 11.67, 10.61, 9.13, 7.20, 6.16, 5.10, 4.56, 3.91, 2.92, 2.24, 1.74, 1.41, 0.97, 0.69, 0.35, 0.15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      fill: false, // Alanı doldurma
      borderColor: 'rgb(95, 182, 193)', // Turkuaz
      tension: 0.3
    },
    {
      label: 'Internet Explorer',
      data: [77.77, 79.49, 81.12, 83.16, 85.20, 87.38, 87.25, 89.51, 91.20, 92.41, 92.64, 93.42, 93.97, 94.21, 94.46, 94.68, 94.49, 94.30, 95.04, 92.70, 90.98, 90.78, 90.89, 87.92, 87.29, 89.55, 86.94, 84.79, 84.17, 83.77, 83.11, 81.94, 81.27, 79.50, 78.47, 77.00, 73.11, 67.55, 63.73, 61.09],
      fill: false, // Alanı doldurma
      borderColor: 'rgb(68, 114, 196)', // Mavi
      tension: 0.3
    },
    {
      label: 'Firefox',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0.76, 0.97, 1.18, 1.41, 1.73, 2.16, 2.25, 2.51, 2.60, 2.69, 2.37, 2.66, 4.06, 4.92, 6.63, 7.74, 8.09, 8.76, 8.98, 9.79, 10.82, 12.60, 15.40, 19.45, 22.62, 25.08, 26.03, 26.05, 26.63, 27.02, 28.13, 29.86],
      fill: false, // Alanı doldurma
      borderColor: 'rgb(237, 125, 49)', // Turuncu
      tension: 0.3
    }
  ]
},
options: {
  elements: { point: { radius: 0 } },
  scales: {
    y: {
      // stacked: true,
      beginAtZero: true,
      max: 100,
      title: { display: true, text: 'Pazar Payı (%)' }
    },
    x: {
      ticks: {
        autoSkip: true,
        maxTicksLimit: 10
      },
      grid: { display: false }
    }
  },
  plugins: {
    legend: { position: 'right' }
  }
}
{{< /chart >}}

Ancak 2005’te Mozilla Corporation’ın kurulmasıyla birlikte, bu kamusal misyon ile ticari zorunluluklar arasında kalıcı bir gerilim de başlamış oldu. Bugün Firefox’un yaşadığı kriz, tam olarak bu gerilimin sonucudur.

> *Orijinal Metin:*
> 3 Ağustos 2005 tarihinde, kar amacı gütmeyen bir kamu yararı yazılım geliştirme kuruluşu olan Mozilla Vakfı, tamamen kendisine ait bir yan kuruluş olan Mozilla Corporation'ı kurdu. Mozilla Corporation, ana kuruluşu olan Mozilla Vakfı'nın kar amacı gütmeyen, kamu yararına olan hedeflerine hizmet eden, vergilendirilebilir bir yan kuruluştur ve Mozilla ürünlerinin ürün geliştirme, pazarlama ve dağıtımından sorumlu olacaktır.

Yine bu süreç içinde *"Internet, By The People, For The People (İnsanlar tarafından insanlar için internet)"* gibi sloganlarla internetin özgür bir mecra olduğunu ve ana amacının insanlara hizmet etmek olduğunu ifade eden manifestolarını yayınladılar. Bu manifestoda can alıcı noktalar şunlardı:

- İnternet, açık ve erişilebilir kalması gereken küresel bir kamu kaynağıdır.
- İnternet, bireysel insanların hayatlarını zenginleştirmelidir.
- Bireylerin İnternet’teki güvenliği temeldir ve isteğe bağlı olarak ele alınamaz.
- Şeffaf topluluk temelli süreçler katılımı, hesap verebilirliği ve güveni teşvik eder.
- İnternetin gelişimine ticari katılım birçok fayda sağlar; ticari hedefler ve kamu yararı arasındaki bir denge kritik öneme sahiptir.

Ancak günümüze gelindiğinde, Mozilla’nın aldığı kararların ağırlık merkezinin, Vakfın kamusal misyonundan ziyade Mozilla Corporation’un ticari önceliklerine doğru kaydığına dair güçlü işaretler görüyoruz.

## Mozilla’nın Gelir Gerçeği: Google Bağımlılığı

Mozilla’nın finansal geleceği üzerindeki en büyük belirsizlik, ABD Adalet Bakanlığı’nın (DOJ) Google’a karşı yürüttüğü antitröst davasından kaynaklanıyor. Google’ın varsayılan arama motoru olmak için yaptığı ödemeleri doğrudan hedef alan bu dava, Mozilla’nın ana gelir kaynağının sürdürülebilirliğini ciddi biçimde tartışmalı hale getiriyor. Böyle bir senaryoda ortaya çıkacak finansal açığın, mevcut gelir modeliyle kısa vadede telafi edilmesi oldukça güç.

Bu tablo, Mozilla yönetimini “gelir çeşitlendirme” (revenue diversification) arayışına itmiş görünüyor. Reklam endüstrisine, gizlilik ilkelerinden ödün vermeden ölçüm verisi sunma iddiasıyla geliştirilen PPA (Privacy Preserving Attribution) yaklaşımı, bu finansal sıkışmışlığın doğal bir sonucu olarak okunabilir. Ancak reklam gelirlerine yönelik bu yönelim, vakfın yıllardır savunduğu kullanıcı merkezli yaklaşım ile gerilim yaratarak, topluluk nezdinde belirgin bir güven kaybına yol açtı.


## Kullanıcıya 'Rağmen' Geliştirme: Firefox'un PPA Kararı

Mozilla’nın bu hamlesini ve gelen tepkileri doğru analiz edebilmek için önce PPA’nın (Privacy Preserving Attribution) teknik olarak ne vadettiğine bakmak gerekir.

Geleneksel reklamcılıkta, bir reklamın işe yarayıp yaramadığını (Attribution) anlamak için kullanıcılar web siteleri arasında köşe bucak takip edilir. Üçüncü taraf çerezler (3rd party cookies) ve izleme pikselleri, kullanıcının hangi reklama tıkladığını ve gidip ürünü satın alıp almadığını bireysel düzeyde kayıt altına alır. Bu, tam anlamıyla bir "dijital gözetleme" modelidir.

Mozilla, PPA ile bu modeli değiştirmeyi hedeflediğini iddia ediyor. Bu yeni protokolde, izleme işini reklam şirketlerinin sunucuları değil, **tarayıcı (Firefox)** üstleniyor.

Sistem özetle şöyle çalışıyor:

1. **Yerel Kayıt:** Firefox, görüntülediğiniz reklamları ve bu reklamlar sonucunda yaptığınız işlemleri (satın alma vb.) kendi hafızasında tutuyor.
2. **İstemci Taraflı Eşleşme:** Reklam ve dönüşüm eşleşmesi, veriler cihazdan dışarı çıkmadan, tarayıcı içinde yapılıyor.
3. **DAP Protokolü:** Elde edilen sonuçlar, **DAP (Distributed Aggregation Protocol)** adı verilen bir yöntemle şifreleniyor.
4. **Gürültü Ekleme (Noise):** Veriler reklam verene gönderilmeden önce, içine rastgele veriler (gürültü) eklenerek anonimleştiriliyor ve bireysel kimlik tespiti imkansız hale getiriliyor.

Kağıt üzerinde bakıldığında bu sistem, reklam endüstrisinin veri açlığı ile kullanıcının gizlilik ihtiyacı arasında "orta yol" bulmaya çalışan teknik bir çözüm gibi duruyor. Mozilla’nın savunması da bu temele dayanıyor: "Reklamcılık ölmeyecek, o zaman onu daha az zararlı hale getirelim."

Ancak kriz, teknolojinin _ne olduğuyla_ değil, _nasıl sunulduğuyla_ ve _kimin için_ geliştirildiğiyle ilgili patlak verdi.

Gizlilik odaklı bir yazılımın en temel ilkesi "kullanıcı onayı" (consent) olmalıdır. Fakat Mozilla, Firefox 128 sürümüyle entegre ettiği bu özelliği, kullanıcılara sorarak (opt-in) değil, **varsayılan olarak açık (opt-out)** şekilde kullanıma sundu. Bu durum, yıllardır "Beni izlemeyin" diyerek Firefox'u tercih eden sadık kullanıcı kitlesi için tam bir soğuk duş etkisi yarattı.

Topluluğun tepkisi sert ve haklıydı: Kullanıcılar, Firefox'u reklam endüstrisine "daha etik veri" sağlasın diye değil, kendilerini o endüstriden tamamen yalıtsın diye kullanıyordu. Mozilla’nın "Biz veriyi satmıyoruz, sadece sonuçları ölçüyoruz" savunması, teknik olarak doğru olsa da, ilkesel olarak kullanıcı tabanında karşılık bulmadı.

Bu stratejik hata, aslında yönetimin içinde bulunduğu paniği de gözler önüne seriyor. Eğer PPA özelliği "isteğe bağlı" sunulsaydı, muhtemelen çok az kullanıcı bunu aktif edecekti. Mozilla, reklam verenlere anlamlı büyüklükte bir veri havuzu sunabilmek ve bu yeni gelir modelini işler kılabilmek adına, kullanıcı güvenini riske atmayı göze aldı. Sonuç ise beklenen gelirden ziyade, onarılması güç bir prestij kaybı oldu.

## Başarısızlığın Ödüllendirilmesi

Normal şartlarda pazar payını kaybeden bir teknoloji şirketinde fatura yönetime kesilirken, Mozilla’da süreç tersine işledi. 2020 ve 2024 yıllarında yapılan toplu işten çıkarmalarda fatura, tarayıcı motorunu ve geliştirici araçlarını inşa eden mühendislere kesildi. Maliyet gerekçesiyle teknik kadrolar tasfiye edilirken, üst yönetimin büyüme ve gelir baskısı altında aldığı kararların ödüllendirilmesi, Vakfın "kamu yararı" misyonuyla derin bir tezat oluşturuyor. Bu tablo, PPA gibi kullanıcı tepkisi çeken kararların bireysel hatalardan değil, "ne pahasına olursa olsun gelir" baskısından doğduğunun en net kanıtıdır.

{{< chart >}}
type: 'line',
data: {
  labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
  datasets: [
    {
      label: 'Yönetici Maaşı (Milyon $)',
      data: [0.5, 0.58, 0.57, 0.71, 0.8, 1.03, 1.02, 1.11, 2.35, 2.48, null],
      borderColor: 'rgba(175, 26, 26, 1)', // Kırmızı
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
      yAxisID: 'y_pay', // Sol eksene bağla
      tension: 0.1
    },
    {
      label: 'Firefox Kullanım Oranı (%)',
      data: [30.2, 30.4, 26.5, 21.2, 16.5, 13.1, 10.4, 8.0, 6.2, 5.2, 4.5],
      borderColor: 'rgba(31, 31, 175, 1)', // Mavi
      backgroundColor: 'rgba(0, 0, 255, 0.1)',
      yAxisID: 'y_usage', // Sağ eksene bağla
      tension: 0.1
    }
  ]
},
options: {
  responsive: true,
  scales: {
    y_pay: {
      type: 'linear',
      display: true,
      position: 'left',
      title: { display: true, text: 'Maaş (Milyon $)' },
      min: 0,
      max: 3,
      ticks: {
        callback: function(value) { return '$' + value + 'm'; }
      }
    },
    y_usage: {
      type: 'linear',
      display: true,
      position: 'right',
      title: { display: true, text: 'Pazar Payı (%)' },
      min: 0,
      max: 35,
      grid: { drawOnChartArea: false }, // Sağ eksenin çizgileri solla karışmasın
      ticks: {
        callback: function(value) { return value + '%'; }
      }
    }
  }
}
{{< /chart >}}

## Tarayıcıdan Ürün Portföyüne: VPN, Relay ve Diğer Yan Servisler

Mozilla yönetiminin, Google gelirlerine olan bağımlılığı azaltmak (revenue diversification) amacıyla attığı en somut adım, iş modelini "sadece tarayıcı" olmaktan çıkarıp bir "abonelik ekosistemine" dönüştürmek oldu. Mozilla VPN, Firefox Relay Premium ve Firefox Monitor gibi servisler bu stratejinin birer ürünü.

Kağıt üzerinde mantıklı görünen bu strateji –yani bir gizlilik markasının, gizlilik odaklı ücretli servisler satması– uygulamada ciddi bir kaynak bölünmesine yol açtı. Mozilla, kısıtlı mühendislik gücünü Gecko motorunu modernize etmeye ve tarayıcı performansını artırmaya odaklamak yerine; piyasada zaten onlarca alternatifi bulunan VPN veya e-posta maskeleme servisleriyle rekabet etmeye harcadı.

Kullanıcı cephesindeki eleştiri çok netti: "Biz sizden dünyanın en iyi VPN'ini değil, Chrome karşısında ezilmeyen bir tarayıcı istiyoruz." Ancak Mozilla, tarayıcıyı ana ürün (core product) olarak görmek yerine, bu yan servislerin pazarlandığı bir vitrin (distribution channel) olarak konumlandırmaya başladı. Tarayıcı içindeki "öneriler", Pocket entegrasyonları ve VPN reklamları, bu ticari kaygının kullanıcı deneyimine yansımasıydı.

## Mozilla'nın Yeni Rotası ve AI Çıkmazı: "Bizi Yanlış Anladınız"

Mozilla'nın odak kaybı sadece yan ürünlerle sınırlı kalmadı; teknoloji dünyasını kasıp kavuran her "hype" (popüler akım), Firefox'un yol haritasında kendine bir yer buldu. Bir dönem kripto paralar ve Web3 üzerine yapılan tartışmalı hamleler, bugün yerini Yapay Zeka (AI) stratejisine bıraktı.

Mozilla, son dönemde "Güvenilir AI" (Trustworthy AI) söylemiyle tarayıcıya yapay zeka entegrasyonları (örneğin kenar çubuğuna eklenen chatbotlar veya Fakespot satın alımıyla gelen alışveriş asistanları) eklemeye başladı. Ancak burada devasa bir doktrin çelişkisi yatıyor.

Mevcut yapay zeka modelleri, doğaları gereği devasa veri setlerine ihtiyaç duyar ve "işleme" üzerine kuruludur. Firefox'un varoluş sebebi ise "daha az veri toplamak" ve "gizlilik"tir. Mozilla'nın "Gizliliğe saygılı AI" söylemi, teknik olarak mümkün olsa da, kullanıcı tabanının beklentisiyle örtüşmüyor.

Sadık Firefox kullanıcısı, tarayıcısının onun adına alışveriş listesi yapmasını veya özet çıkarmasını beklemiyor; sayfaları hızlı yüklemesini, kaynak tüketmemesini ve takip edilmeyi engellemesini bekliyor. Mozilla'nın tarayıcıyı bir "AI Asistanı"na dönüştürme çabası, kullanıcılar tarafından modern bir inovasyon hamlesinden ziyade, kurumsal bir kimlik krizi olarak okunuyor. Şirket, kendi kitlesinin ne istediğini dinlemek yerine, Silikon Vadisi'nin trendlerini takip etmeyi seçmiş görünüyor.

## Sonuç: Gecko'nun Yalnızlığı ve İnternetin Geleceği

Firefox’un hikayesi, sadece bir yazılımın pazar payı savaşı değildir; bu, internetin "kimin için" var olacağı sorusunun cevabıdır.

Bugün geldiğimiz noktada, tarayıcı pazarının %90’ından fazlası Chromium tabanlı (Blink motorlu) tarayıcıların kontrolü altında. Bu, web standartlarının nasıl belirleneceğinden, hangi teknolojilerin destekleneceğine kadar her şeyin, fiilen tek bir şirketin (Google) veya tek bir kod tabanının inisiyatifine kalması demektir. Gecko motoru, bu monokültüre karşı duran, biyolojik çeşitliliği sağlayan son kaledir.

Ancak kaleler, sadece duvarlarının kalınlığıyla değil, içindeki garnizonun inancıyla ayakta kalır.

Mozilla’nın son on yılda çizdiği tablo; finansal olarak Google’a bağımlı, yönetimsel olarak odak kaybı yaşayan ve topluluğuyla arasındaki güven bağını zayıflatan bir yapıya işaret ediyor. PPA krizi, işten çıkarmalar ve yönetim zafiyetleri, bu yapının çatırdadığını gösteren uyarı işaretleridir.

Eğer Mozilla, kuruluş manifestosundaki o "radikal" şeffaflığa ve kullanıcı odaklılığa geri dönemezse, Firefox’u bekleyen son, Netscape’in kaderinden farklı olmayacaktır. Ve eğer Firefox kaybederse, kaybeden sadece Mozilla Corporation olmayacaktır. Kaybeden; reklamsız, izlenmeden ve manipüle edilmeden bilgiye erişme hakkını savunan "açık internet" ideali olacaktır.

Firefox hâlâ çok iyi bir tarayıcı olabilir. Ama Mozilla’nın acilen hatırlaması gereken bir şey var: Firefox'u yaşatan şey Google'ın dolarları değil, onu bir "seçenek" değil, bir "duruş" olarak gören kullanıcılarıdır.

Mozilla’nın bugün yapması gereken şey yeni bir özellik eklemek değil; **neyi asla yapmayacağını yeniden ilan etmek**.