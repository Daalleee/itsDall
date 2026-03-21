# BarangBekas.id - Marketplace Barang Bekas

[![Laravel Version](https://img.shields.io/badge/Laravel-12.x-FF2D20?style=flat-square&logo=laravel)](https://laravel.com)
[![PHP Version](https://img.shields.io/badge/PHP-8.3+-777BB4?style=flat-square&logo=php)](https://php.net)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

**BarangBekas.id** adalah platform marketplace modern untuk jual beli barang bekas yang dirancang khusus untuk anak kos dan masyarakat umum. Aplikasi ini memungkinkan pengguna untuk menjual, membeli, dan berinteraksi dengan mudah dalam satu platform yang terintegrasi dengan sistem pembayaran online menggunakan Midtrans.

---

## Daftar Isi

- [Tentang Aplikasi](#tentang-aplikasi)
- [Screenshot Aplikasi](#screenshot-aplikasi)
- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Instalasi](#instalasi)
- [Setup Midtrans & Ngrok](#setup-midtrans--ngrok)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

---

## Tentang Aplikasi

BarangBekas.id adalah solusi lengkap untuk kebutuhan jual beli barang bekas online. Aplikasi ini dibangun menggunakan **Laravel 12** dengan fitur-fitur modern seperti:

- E-commerce lengkap - Dari browsing hingga checkout
- Pembayaran online - Integrasi Midtrans (QRIS, VA, E-Wallet, Credit Card)
- Chat system - Komunikasi langsung antara pembeli dan penjual
- Review & Rating - Sistem ulasan produk terverifikasi
- Manajemen stok - Auto update stok saat pembelian
- Keamanan terjamin - Session-based authentication dengan Laravel

---

## Screenshot Aplikasi

**Catatan:** Screenshot dengan angka (1, 2, 3) adalah lanjutan dari halaman yang sama karena halaman terlalu panjang untuk diambil dalam satu screenshot.

### Authentication

#### Login Page
![Login](screenshots/01-authentication/login.png)

#### Register Page
![Register](screenshots/01-authentication/register.png)

---

### Homepage & Marketplace

#### Homepage - Belum Login (Landing Page)
![Homepage 1](screenshots/02-homepage-marketplace/homepage-1.png)
![Homepage 2](screenshots/02-homepage-marketplace/homepage-2.png)
![Homepage 3](screenshots/02-homepage-marketplace/homepage-3.png)

#### Marketplace - Katalog Produk
![Marketplace](screenshots/02-homepage-marketplace/marketplace.png)

---

### User Dashboard

#### Form Jual Barang (Upload Multiple Images)
![Sell Form](screenshots/03-user-dashboard/sell-form.png)
![Sell Form 2](screenshots/03-user-dashboard/sell-form-2.png)

---

### Shopping & Checkout

#### Keranjang Belanja
![Cart](screenshots/04-shopping-checkout/cart.png)

---

### Order Management

#### Riwayat Pesanan
![Orders](screenshots/05-order-management/orders.png)

---

### Communication

#### Daftar Pesan
![Messages](screenshots/06-communication/messages.png)

---

## Fitur Utama

### Autentikasi & Profil
- Registrasi & Login - Sistem autentikasi lengkap dengan Laravel UI
- Profil Pengguna - Edit profil, avatar, nomor telepon, alamat
- Session Management - Session berbasis database untuk keamanan lebih baik
- Password Reset - Fitur lupa password via email

### Marketplace
- Katalog Produk - Tampilan grid produk dengan pagination
- Pencarian & Filter - Cari produk berdasarkan nama, kategori, rentang harga
- Detail Produk - Informasi lengkap produk dengan carousel galeri foto
- Produk Sejenis - Rekomendasi produk dalam kategori yang sama
- Lazy Loading Images - Optimasi loading gambar untuk performa lebih baik
- Foto Full Card - Tampilan foto produk full tanpa space putih

### Keranjang Belanja
- Add to Cart - Tambah produk ke keranjang dengan validasi stok
- Update Quantity - Ubah jumlah produk di keranjang
- Remove Item - Hapus produk dari keranjang
- Stock Validation - Validasi stok real-time saat menambah/edit keranjang
- Cart Summary - Ringkasan total item dan harga otomatis

### Checkout & Pembayaran
- Checkout Process - Proses checkout dari keranjang
- Order Summary - Ringkasan pesanan sebelum pembayaran
- Payment Gateway - Integrasi dengan Midtrans untuk pembayaran online
- Multiple Payment Methods - Support QRIS, VA, E-Wallet, Credit Card
- Order Status Tracking - Lacak status pesanan (Pending, Waiting Payment, Paid, Shipped, Delivered, Cancelled)
- Auto Stock Update - Stok berkurang otomatis saat checkout

### Manajemen Pesanan
- Order History - Riwayat semua pesanan dengan filter status
- Order Detail - Detail lengkap setiap pesanan dengan item
- Status Updates - Update status otomatis dari payment gateway webhook
- Payment Page - Halaman pembayaran dengan Snap Midtrans popup
- Rollback Stock - Stok dikembalikan jika pembayaran gagal

### Chat & Komunikasi
- Messaging System - Chat real-time antara pembeli dan penjual
- Unread Counter - Notifikasi pesan belum dibaca di navbar
- Chat History - Riwayat percakapan tersimpan per user
- Auto Message - Pesan otomatis ke penjual saat order berhasil

### Review & Rating
- Product Reviews - Beri rating 1-5 bintang dan ulasan produk
- Average Rating - Tampilan rating rata-rata produk
- Verified Reviews - Review hanya dari pengguna yang pernah membeli
- Review Management - Update review jika sudah pernah memberi ulasan

### Jual Barang
- Create Product - Form lengkap untuk menambah produk
- Product Categories - Pilih kategori yang ada atau buat kategori baru
- Multiple Image Upload - Upload 1 gambar utama + galeri (max 5 foto)
- Stock Management - Kelola stok produk dengan update otomatis
- Condition Selection - Pilih kondisi: Baru, Bekas Baik, Bekas Sedang, Bekas Kurang
- Location Setting - Tentukan lokasi produk untuk informasi pembeli
- Edit/Delete - Edit atau hapus produk yang sudah ditambahkan
- Product Dashboard - Lihat semua produk yang dijual di bagian "Produk Saya"

### Dashboard Penjual
- My Products - List semua produk yang dijual dengan status (Aktif/Terjual/Stok Habis)
- Quick Actions - Edit dan Hapus produk langsung dari dashboard
- Sales Statistics - Lihat statistik penjualan dan performa produk
- Order Management - Kelola pesanan masuk dari pembeli

---

## Teknologi yang Digunakan

### Backend
| Teknologi | Versi | Deskripsi |
|-----------|-------|-----------|
| PHP | 8.3+ | Bahasa pemrograman utama |
| Laravel | 12.x | Framework PHP dengan fitur lengkap |
| MySQL/SQLite | - | Database management system |
| Eloquent ORM | - | Object-relational mapping Laravel |

### Frontend
| Teknologi | Versi | Deskripsi |
|-----------|-------|-----------|
| Bootstrap | 5.3.x | CSS framework untuk UI responsive |
| Font Awesome | 6.x | Icon library untuk UI elements |
| Vite | 5.x | Build tool untuk assets modern |
| JavaScript | ES6+ | Interaktivitas frontend dan validation |

### Payment & Third-Party
| Layanan | Deskripsi |
|---------|-----------|
| Midtrans | Payment gateway untuk pembayaran online (QRIS, VA, E-Wallet, Credit Card) |
| Laravel UI | Authentication scaffolding (Login, Register, Password Reset) |
| Ngrok | Tunneling untuk webhook Midtrans saat development |

### Development Tools
| Tool | Deskripsi |
|------|-----------|
| Composer | PHP dependency management |
| npm | Node.js package management untuk frontend |
| PHPUnit | Testing framework untuk unit tests |
| Laravel Pail | Log monitoring real-time |

---

## Instalasi

### Prasyarat
Pastikan sistem Anda telah terinstall:
- PHP >= 8.3 dengan ekstensi: mbstring, xml, curl, mysql/pdo_sqlite
- Composer - PHP package manager
- Node.js & npm - Untuk frontend assets
- MySQL atau SQLite - Database
- Git - Version control

### Langkah Instalasi

#### 1. Clone Repository
```bash
git clone https://github.com/your-username/marketplace.git
cd marketplace
```

#### 2. Install Dependencies
```bash
# Install PHP dependencies
composer install

# Install Node.js dependencies
npm install
```

#### 3. Setup Environment
```bash
# Copy file environment
cp .env.example .env

# Generate application key
php artisan key:generate
```

#### 4. Konfigurasi Database
Edit file `.env` dan sesuaikan konfigurasi database:

**Opsi 1: SQLite (Recommended untuk development)**
```env
DB_CONNECTION=sqlite
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=laravel
# DB_USERNAME=root
# DB_PASSWORD=
```

```bash
# Buat file database SQLite
touch database/database.sqlite
```

**Opsi 2: MySQL/MariaDB**
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=marketplace_db
DB_USERNAME=root
DB_PASSWORD=your_password
```

#### 5. Migrasi Database
```bash
# Jalankan migrasi untuk membuat tabel
php artisan migrate
```

#### 6. Build Assets
```bash
# Build frontend assets untuk production
npm run build

# Atau untuk development dengan hot reload
npm run dev
```

#### 7. Storage Link
```bash
# Buat symbolic link untuk storage (gambar produk)
php artisan storage:link
```

---

## Setup Midtrans & Ngrok

### PENTING: Mengapa Perlu Ngrok?

Saat development, aplikasi berjalan di **localhost:8000** yang **tidak bisa diakses dari internet**. 

**Midtrans memerlukan webhook URL** yang **publicly accessible** untuk mengirim notifikasi pembayaran otomatis. 

**Ngrok** membuat tunnel dari internet ke localhost Anda, sehingga Midtrans bisa mengirim webhook.

---

### Langkah Setup Ngrok untuk Midtrans

#### 1. Install Ngrok

Download dari: https://ngrok.com/download

Atau install via package manager:
```bash
# macOS
brew install ngrok

# Windows (Chocolatey)
choco install ngrok

# Linux
snap install ngrok
```

#### 2. Jalankan Laravel Development Server

Buka terminal pertama dan jalankan:
```bash
php artisan serve --port=8000
```

Aplikasi akan berjalan di: **http://127.0.0.1:8000**

#### 3. Jalankan Ngrok

Buka **terminal baru** (jangan tutup terminal Laravel) dan jalankan:
```bash
ngrok http 8000
```

Output akan menampilkan URL seperti ini:
```
Forwarding: https://abc123-def456.ngrok.io -> http://localhost:8000
```

**PENTING: Copy URL tersebut!** (contoh: `https://abc123-def456.ngrok.io`)

> URL Ngrok berubah setiap restart! Setiap kali restart ngrok, URL akan berubah. Anda harus update webhook URL di Midtrans Dashboard.

#### 4. Setup Webhook di Midtrans Dashboard

1. Login ke [Midtrans Dashboard](https://dashboard.midtrans.com/)

2. Masuk ke menu **Settings** → **Configuration**

3. Scroll ke bagian **Payment Notification URL**

4. Masukkan URL Ngrok + endpoint webhook:
   ```
   https://abc123-def456.ngrok.io/midtrans/callback
   ```
   *(Ganti `abc123-def456` dengan URL Ngrok Anda)*

5. Klik **Save**

#### 5. Test Webhook

1. Buat order di aplikasi lokal Anda (http://127.0.0.1:8000)
2. Lakukan pembayaran test di Midtrans Snap
3. Midtrans akan mengirim webhook ke URL Ngrok
4. Order status akan terupdate otomatis di aplikasi

---

### Troubleshooting

#### Webhook tidak diterima oleh aplikasi:
- Pastikan ngrok berjalan dan URL benar
- Cek log Midtrans Dashboard → Transactions → Logs
- Cek firewall tidak memblokir ngrok
- Pastikan endpoint `/midtrans/callback` ada di `routes/web.php`

#### Order status tidak update:
- Cek webhook endpoint di `routes/web.php`
- Pastikan `MidtransController@handleNotification` berfungsi
- Cek log Laravel: `storage/logs/laravel.log`
- Pastikan URL webhook di Midtrans Dashboard sudah benar

#### URL Ngrok berubah-ubah:
- Gunakan **Ngrok Auth Token** untuk URL lebih stabil:
  ```bash
  ngrok config add-authtoken YOUR_TOKEN
  ```
- Atau upgrade ke **Ngrok Paid Plan** untuk static domain

---

### Catatan Penting

| Development | Production |
|-------------|------------|
| Gunakan Ngrok untuk webhook | Gunakan domain asli (https://yourdomain.com) |
| URL berubah setiap restart | URL tetap (static) |
| Midtrans Sandbox Mode | Midtrans Production Mode |
| MIDTRANS_IS_PRODUCTION=false | MIDTRANS_IS_PRODUCTION=true |

---


## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

**Dibuat dengan Laravel**

