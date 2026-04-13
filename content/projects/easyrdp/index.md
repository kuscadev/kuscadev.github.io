---
title: "easyrdp"   
description: "Üşengeçler için geliştirilmiş bir RDP aracı."
date: 2026-04-13
draft: false    
tags: ["python", "rdp", "linux", "open-source", "uzak masaüstü"]
categories: ["Araçlar"]
---
# Easy RDP
**Üşengeçler için bir RDP aracı.**

Easy RDP, `xfreerdp` için geliştirilmiş Python tabanlı, hafif bir sarmalayıcıdır (wrapper). Uzun ve karmaşık komut parametrelerini manuel olarak yazma ihtiyacını ortadan kaldırarak, temiz ve etkileşimli bir komut istemi üzerinden uzak masaüstü bağlantılarını basitleştirmek için tasarlanmıştır.

## Özellikler
- Hedef IP, Alan Adı (Domain), Kullanıcı Adı ve Şifre için etkileşimli istemler.
- Yaygın kullanılan parametreler için otomatik yönetim:
  - Dinamik çözünürlük (Dynamic resolution)
  - Pano paylaşımı (Clipboard sharing)
  - Sertifika yoksayma (Certificate ignoring)
- Kolay kurulum ve küresel (global) komut erişimi.

## Gereksinimler
- Python 3.x
- FreeRDP (`xfreerdp`)

## Kurulum
Aracı Debian tabanlı sistemlere kurmak için sağlanan `install.sh` betiğini kullanabilirsiniz. Bu betik, bağımlılıkları yükler, gerekli izinleri ayarlar ve aracı yerel dizininize kopyalar.

```bash
chmod +x install.sh
./install.sh
```

Not: ~/.local/bin dizininin sisteminizin PATH yolunda ekli olduğundan emin olun.

## Kullanım
Kurulum tamamlandıktan sonra, herhangi bir terminalden komutu çalıştırmanız yeterlidir:

```bash
easyrdp
```

Bağlantıyı kurmak için ekrandaki yönergeleri takip edin.