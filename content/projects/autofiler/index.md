---
title: "AutoFiler"
description: "Karışık dizinleri uzantılarına göre anında düzenleyen, Python tabanlı hafif ve verimli bir otomasyon aracı."
date: 2025-12-08
draft: false
tags: ["python", "automation", "linux", "open-source"]
categories: ["Araçlar"]
---

# AutoFiler

**AutoFiler**, dağınık dizinleri anında düzenlemek için tasarlanmış hafif ve verimli bir Python otomasyon betiğidir. `İndirilenler` klasörünüzü (veya belirlediğiniz herhangi bir dizini) tarar ve dosyaları uzantılarına göre alt klasörlere ayırır.

> "Tek bir komutla kaosu düzene dönüştürün."

---

## Özellikler

* **Dinamik Yol Tespiti:** Kullanıcının ana dizinini otomatik olarak algılar ve Linux, Windows ve macOS üzerinde `İndirilenler` klasörünü bulur.
* **Akıllı Kategorizasyon:** Dosyaları belirli kategorilere (Resimler, Belgeler, Arşivler vb.) ayırmak için sözlük tabanlı bir eşleme sistemi kullanır.
* **Güvenli Çalışma:**
    * Gizli dosyaları (nokta dosyaları) ve mevcut dizinleri atlar.
    * İzin hatalarını veya dosya çakışmalarını sorunsuzca yönetmek için `try-except` blokları içerir.
    * İşlemlere başlamadan önce hedef klasörün varlığını kontrol eder.
* **Evrensel Uyumluluk:** Platformlar arası uyumluluk için `os.path.join` yapısını kullanır.

---

## Nasıl Çalışır?

**Öncesi:**
```text
İndirilenler/
├── odev.docx
├── tatil.jpg
├── kurulum.exe
├── sarki.mp3
└── arsiv.zip

```

**AutoFiler Çalıştıktan Sonra:**

```text
İndirilenler/
├── Documents/
│   └── odev.docx
├── Images/
│   └── tatil.jpg
├── Setup_Files/
│   └── kurulum.exe
├── Music/
│   └── sarki.mp3
├── Archives/
    └── arsiv.zip

```

---

## Kurulum ve Kullanım

### 1. Depoyu Klonlayın

```bash
git clone [https://github.com/kuscadev/autofiler.git](https://github.com/kuscadev/autofiler.git)
cd autofiler

```

* **(Linux İçin) Yükleyiciyi çalıştırın:**

```bash
chmod +x install.sh
./install.sh

```

Artık herhangi bir dizinde sadece `autofiler` yazarak aracı çalıştırabilirsiniz.

### 2. Betiği Çalıştırın

Harici bir kütüphane gerektirmez! Standart Python 3 kütüphaneleriyle (`os`, `shutil`) çalışır.

```bash
python3 autofiler.py

```

### 3. Özelleştirme (İsteğe Bağlı)

Yeni uzantılar eklemek veya klasör isimlerini değiştirmek için `autofiler.py` içindeki `DIR_TYPES` sözlüğünü düzenleyebilirsiniz:

```python
DIR_TYPES = {
    "Resimler": (".jpg", ".png", ".gif"),
    "Proje_Dosyalarim": (".blend", ".psd") # Kendi kurallarınızı ekleyin!
}

```
