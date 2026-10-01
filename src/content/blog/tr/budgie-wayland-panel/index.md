---
title: "Ubuntu Budgie 26.04 (Wayland) Çoklu Monitör Panel Genişlik Hatası ve Çözümü"   
description: "Ubuntu Budgie 26.04 Wayland oturumunda çift monitör kullanırken üst panelin yanlış boyutlanma sorununu ve geçici bash çözümünü inceliyorum."
pubDate: 2026-10-01
tags: ["wayland", "linux", "budgie"]
translationKey: "budgie-panel"
---

## Neden Budgie?
Linux serüvenime Ağustos 2024'te Xubuntu ile başlamış, Linux'a yeni geçen herkesin yaptığı gibi hemen ardından da distrolar arasında dolaşmaya başlamıştım. Xubuntu'da 1 ay kaldıktan sonra denediğim dağıtım Solus Budgie olmuştu ve Budgie'ye gerçekten bayılmıştım. Geçen süre içerisinde Solus repolarının yeterince geniş olmayışı ve **Mutter** altyapısının sistemimde oldukça ağır kalmasından dolayı yine distro değiştirmiş ve Debian tabanına **tiling window manager**'lar ile dönmüştüm. 

Yaklaşık 2 yıllık bu süreçte **i3wm, xfce, bspwm, kde** gibi bir çok WM ve DE kullanmış olmama rağmen hiçbirinde Budgie'de bulduğum sadeliği bulamadım ve geçtiğimiz haftalarda **Ubuntu Budgie**'ye geçtim. İlk izlenimlerime göre sanırım son distrom olacak gibi duruyor.

## İlk Açılış
Budgie masaüstü Xorg Wayland geçişinde Mutter'i geride bırakıp Labwc'ye geçti. Bunu ilk kez Ubuntu Budgie'de deneyimledim ve açıkçası hafiflik ve modern görünümü bir arada sunuyor oluşu oldukça hoşuma gitti. Altta yer alan Crystal Dock sürekli kullandığım uygulamaları tutmak için süperdi, üstteki alışık olduğum budgie panelde ise bir tersik vardı. Panel genel görünüm olarak kusursuz duruyor olsa da 1920px genişliğindeki monitörümün tam ortasında devasa bir dock gibi duruyordu. İşin garibi bu dock laptop ekranımın genişliğiyle (1366px) boyutlanmıştı.

![Sahte Dock](featured.png)

O günlerde panelle uğraşacak vaktim olmadığı ve panelin boyutu dışında herhangi bir kusuru/çalışmama engel olan herhangi bir başka hatası olmadığı için bu sahte dock ile bir süre kullandım. Bugün boş vaktimde bunu düzeltme vaktinin geldiğine karar verdim ve birkaç temel yöntem denedim.

## Neler Denedim, Neler Oldu
İşe ilk olarak paneli kaldırıp yeniden oluşturarak başladım. İşe yaramadığını anlamam uzun sürmedi. Yine aynı boyutta oluşuyordu. Ardından AI'dan da yardım alarak labwc `environment` dosyasını güncelledim, AI açıklarken çok mantıklı gelmişti ama sistemim pek beğenmedi bu çözümü. Sonra yine aslında çok basit bir mantıkla hareket ettim ve şu soruyu sordum: "Laptop ekranı hiç olmazsa panel boyutu ne olacak?" Sistem ayarlarından laptop ekranımı devre dışı bıraktım ve sistemi yeniden başlattım. Sonuç... İşe yaramıştı. Panel 1920px genişliğinde tüm ekranı kaplıyordu. Laptop ekranını tekrardan aktif ettim, hala sorun yoktu. Sonra bir reboot ve başladığımız yere döndük.

Temel düzeyde Bash biliyor olsam da detaylı scriptler yazacak düzeyde bilgiye sahip değilim henüz ve bu yaptığım ufak çaplı deneyi Gemini ile paylaştım. Sorun aslında oldukça basitti. Sistem açılışında laptop ekranı doğal olarak harici monitörden milisaniye farkla daha erken açılıyordu, panel burada bir kez çiziliyordu ve ardından çizildiği boyutla aktif olan harici monitöre taşınıyordu. Yani laptop ekranını aradan çıkarabilirsem panel direkt harici monitörde çizilebilirdi. Gemini derdimi anladı ve şu basit script'i hazırladı:
```bash
#!/bin/bash

# Wayland soketi ve ekranlar hazır olana kadar bekle (maksimum 5 saniye)
for i in {1..50}; do
    if wlr-randr >/dev/null 2>&1; then
        break
    fi
    sleep 0.1
done

# Harici monitör bağlıysa işlemi uygula
if wlr-randr | grep -q "HDMI-A-1"; then
    # Dahili ekranı anlık kapat
    wlr-randr --output eDP-1 --off
    budgie-panel --replace &
    
    # Panelin layer-shell bağını kurması için bekle
    sleep 0.8
    
    # Dahili ekranı eski yerine ve frekansına getir
    wlr-randr --output eDP-1 --on --pos 1920,312 --mode 1366x768@60.012001Hz
fi
```

Ek olarak bu script'i sistem açılışında başlatmak için bir autostart dosyasına ihtiyacımız vardı:

```INI
[Desktop Entry]
Type=Application
Name=Budgie Panel Multi-Monitor Fix
Exec=/bin/bash /home/oguzhan/.local/bin/fix-panel.sh
Hidden=false
NoDisplay=false
X-GNOME-Autostart-enabled=true
```

> **Önemli Not:** Eğer yukarıdaki script'i ve desktop dosyasını sisteminize aynen kopyalayacaksanız `username` ve monitör isimlerini düzenlemeyi unutmayın.

## Sonuç
Panelim artık sahte bir dock değil, gerçekten panel. Yukarıdaki çözüm de mükemmel bir mühendislik çalışması değil, biraz kaba kuvvet. Ama çalışıyor. Budgie geliştiricileri bu sorunu çözene kadar sistemin kafasına vura vura bir şeyleri düzeltmek gerekebiliyor.

Eğer yukarıdaki çözümü denemek isterseniz scriptin otomatik olarak sisteminizdeki monitörleri tanıyan halini [Github Profilime](https://github.com/kuscadev/budgie-wayland-panel-fix) ekledim. Scriptler bir yapay zeka tarafından yazıldığı için ana sisteminizde çalıştırmadan önce gerekli kontrolleri yapmanızı öneririm.