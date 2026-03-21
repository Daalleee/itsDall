# PlayStation Rental Management System

<p align="center">
  <img src="https://img.shields.io/badge/Laravel-12-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel 12">
  <img src="https://img.shields.io/badge/PHP-8.2-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP 8.2">
  <img src="https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS 4">
  <img src="https://img.shields.io/badge/Midtrans-Enabled-00A8E0?style=for-the-badge&logo=midtrans&logoColor=white" alt="Midtrans">
</p>

---

## 1. Tentang Aplikasi

**PlayStation Rental Management System** adalah aplikasi berbasis web yang dirancang untuk mengelola bisnis penyewaan konsol PlayStation, game, dan aksesoris secara terintegrasi. Aplikasi ini menyediakan platform lengkap untuk manajemen rental dengan multi-role user (Admin, Kasir, Pelanggan, dan Owner) serta integrasi payment gateway Midtrans untuk transaksi yang aman dan mudah.

### Tujuan Aplikasi
- Mengelola inventaris unit PlayStation, game, dan aksesoris
- Memproses transaksi rental dengan sistem status yang jelas
- Menyediakan dashboard real-time untuk monitoring bisnis
- Mendukung pembayaran digital melalui Midtrans
- Memberikan pengalaman booking yang mudah bagi pelanggan

---

## 2. Screenshots

Semua screenshot interface aplikasi tersimpan di folder:

```
docs/screenshots/
```

> **Note:** Jika gambar tidak muncul, pastikan Anda sudah menjalankan `php artisan storage:link` dan file screenshot sudah ada di folder `docs/screenshots/`.

---

### Authentication

#### Login Page
![Login Page](docs/screenshots/halaman-login.png)

#### Register Page
![Register Page 1](docs/screenshots/halaman-register1.png)
![Register Page 2](docs/screenshots/halaman-register2.png)

---

### Public / Landing

#### Landing Page
![Landing Page](docs/screenshots/h.png)

---

### Admin

#### Dashboard Admin
![Dashboard Admin](docs/screenshots/dashboard-admin.png)

#### Laporan Admin
![Laporan Admin](docs/screenshots/laporan-admin.png)

#### Manajemen Unit PS
![Tambah Unit PS Admin](docs/screenshots/tambah-unit-ps-admin.png)

#### Manajemen Game
![Tambah Game Admin](docs/screenshots/tambah-game-admin.png)

#### Manajemen Aksesoris
![Tambah Aksesoris Admin](docs/screenshots/tambah-aksesoris-admin.png)

#### Manajemen User
![Tambah Admin](docs/screenshots/tambah-akun admin.png)
![Tambah Kasir](docs/screenshots/tambah-kasir-admin.png)
![Tambah Pelanggan](docs/screenshots/tambah-pelanggan-admin.png)
![Tambah Pemilik](docs/screenshots/tambah-pemilik-admin.png)

---

### Kasir

#### Dashboard Kasir
![Dashboard Kasir](docs/screenshots/halaman-dashboard-kasir.png)

#### Transaksi Rental
![Transaksi Kasir](docs/screenshots/halaman-transaksi-kasir.png)

#### Daftar Sewa
![Daftar Sewa Kasir](docs/screenshots/halaman-daftar-sewa-kasir.png)

---

### Pelanggan

#### Dashboard / Beranda Pelanggan
![Beranda Pelanggan 1](docs/screenshots/halaman-beranda-pelanggan.png)
![Beranda Pelanggan 2](docs/screenshots/halaman-beranda-pelanggan2.png)
![Beranda Pelanggan 3](docs/screenshots/halaman-beranda-pelanggan3.png)
![Beranda Pelanggan 4](docs/screenshots/halaman-beranda-pelanggan4.png)

#### Sewa PlayStation
![Sewa PS Pelanggan](docs/screenshots/halaman-sewa-ps-pelanggan.png)
![Sewa PS2 Pelanggan](docs/screenshots/halaman-sewa-ps2-pelanggan.png)

#### Sewa Game
![Sewa Game Pelanggan](docs/screenshots/halaman-sewa-game-pelanggan.png)
![Sewa Game 2 Pelanggan](docs/screenshots/halaman-sewa-game2-pelanggan.png)

#### Sewa Aksesoris
![Sewa Aksesoris Pelanggan](docs/screenshots/halaman-sewa -aksesoris-pelanggan.png)
![Sewa Aksesoris 2 Pelanggan](docs/screenshots/halaman-sewa -aksesoris2-pelanggan.png)

#### Keranjang Belanja
![Keranjang Pelanggan](docs/screenshots/halaman-keranjang-pelanggan.png)

#### Riwayat Sewa
![Riwayat Sewa Pelanggan](docs/screenshots/halaman-riwayat-sewa-pelanggan.png)

#### Profil
![Profil Saya Pelanggan](docs/screenshots/profil saya-pelanggan.png)

---

### Owner / Pemilik

#### Dashboard Pemilik
![Dashboard Pemilik](docs/screenshots/halaman-beranda-pemilik.png)

#### Laporan Pendapatan
![Laporan Pendapatan Pemilik](docs/screenshots/halaman-laporan-pendapatan-pemilik.png)

#### Laporan Transaksi
![Laporan Transaksi Pemilik](docs/screenshots/halaman-laporan transasksi-pemilik.png)

#### Status Unit
![Status Unit Pemilik](docs/screenshots/halaman-status-unit-pemilik.png)

---

## Fitur Utama

### Manajemen Katalog
- **Unit PlayStation**: CRUD unit PS dengan nomor seri, status ketersediaan, dan kondisi
- **Game Library**: Manajemen koleksi game dengan kategori, stok, dan nomor seri
- **Aksesoris**: Pengelolaan aksesoris (controller, headset, dll) dengan tracking stok

### Sistem Rental
- **Booking Online**: Pelanggan dapat melakukan booking unit dan game secara mandiri
- **Multi-item Rental**: Satu transaksi rental dapat mencakup unit, game, dan aksesoris
- **Status Tracking**: Status rental (pending, active, returned, cancelled) dengan notifikasi
- **Durasi Fleksibel**: Sistem perhitungan harga berdasarkan durasi penyewaan

### Payment Gateway
- **Midtrans Integration**: Integrasi dengan Midtrans untuk pembayaran digital
- **Multiple Payment Methods**: Support credit card, e-wallet, bank transfer
- **Snap Token**: Generate token pembayaran otomatis
- **Payment Status**: Tracking status pembayaran real-time

### Multi-Role System
- **Admin**: Full access untuk manajemen seluruh aspek aplikasi
- **Kasir**: Handle transaksi, pembayaran, dan return unit
- **Pelanggan**: Booking rental, lihat riwayat, kelola profil
- **Owner**: Dashboard analytics dan laporan bisnis

### Dashboard & Reporting
- **Real-time Analytics**: Statistik rental, revenue, dan okupansi unit
- **Laporan Transaksi**: History lengkap semua transaksi
- **Export Data**: Export laporan ke Excel (menggunakan Maatwebsite Excel)

### Authentication & Authorization
- **Google OAuth**: Login menggunakan akun Google (Laravel Socialite)
- **Role-based Access**: Permission system berdasarkan role user
- **Profile Management**: Kelola profil user dengan avatar upload

### Shopping Cart
- **Cart System**: Tambah item ke keranjang sebelum checkout
- **Quick Checkout**: Proses rental dari cart dengan mudah

---

## Teknologi

### Backend
| Teknologi | Versi | Deskripsi |
|-----------|-------|-----------|
| **PHP** | ^8.2 | Bahasa pemrograman utama |
| **Laravel** | ^12.0 | Web application framework |
| **Eloquent ORM** | - | Database ORM Laravel |
| **Laravel Socialite** | ^5.23 | OAuth authentication (Google) |
| **Maatwebsite Excel** | ^3.1 | Export/import Excel |
| **Midtrans PHP** | ^2.6 | Payment gateway integration |

### Frontend
| Teknologi | Versi | Deskripsi |
|-----------|-------|-----------|
| **Blade Templates** | - | Laravel templating engine |
| **Tailwind CSS** | ^4.0 | Utility-first CSS framework |
| **Vite** | ^7.0.7 | Build tool & dev server |
| **Axios** | ^1.11.0 | HTTP client untuk AJAX |

### Database
| Teknologi | Deskripsi |
|-----------|-----------|
| **MySQL / MariaDB** | Database utama |
| **SQLite** | Database development/testing |

### Development Tools
| Tools | Deskripsi |
|-------|-----------|
| **Composer** | PHP dependency manager |
| **npm** | JavaScript package manager |
| **Laravel Sail** | Docker development environment |
| **Laravel Pail** | Log viewer |
| **PHPUnit** | Testing framework |
| **Laravel Pint** | Code style fixer |

---

## Instalasi

### Prerequisites
- PHP >= 8.2
- Composer
- Node.js & npm
- MySQL/MariaDB atau SQLite
- Git

### Langkah Instalasi

#### 1. Clone Repository
```bash
git clone <repository-url>
cd ProjectPI_Playstation
```

#### 2. Install Dependencies
```bash
# Install PHP dependencies
composer install

# Install Node.js dependencies
npm install
```

#### 3. Environment Setup
```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate
```

#### 4. Database Configuration
Edit file `.env` dan sesuaikan konfigurasi database:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=playstation_rental
DB_USERNAME=root
DB_PASSWORD=your_password
```

#### 5. Run Migrations & Seeders
```bash
# Run migrations
php artisan migrate

# (Optional) Seed database dengan data awal
php artisan db:seed
```

#### 6. Storage Link
```bash
# Create symbolic link untuk storage
php artisan storage:link
```

#### 7. Build Assets
```bash
# Build untuk production
npm run build

# Atau jalankan development server
npm run dev
```

#### 8. Jalankan Aplikasi
```bash
# Development mode (menjalankan server, queue, logs, dan vite secara bersamaan)
composer dev

# Atau jalankan server Laravel secara manual
php artisan serve
```

Aplikasi akan berjalan di: `http://localhost:8000`

---

## Instalasi Ngrok untuk Webhook

Ngrok diperlukan untuk expose aplikasi lokal ke internet agar webhook Midtrans dapat mengirim callback ke aplikasi Anda.

### Langkah Instalasi Ngrok

#### 1. Download & Install Ngrok
- Kunjungi [https://ngrok.com/download](https://ngrok/download)
- Download sesuai sistem operasi Anda
- Extract dan pindahkan ke folder yang mudah diakses

#### 2. Setup Authtoken
```bash
# Daftar akun gratis di https://ngrok.com
# Dapatkan authtoken dari dashboard
ngrok config add-authtoken YOUR_AUTHTOKEN
```

#### 3. Jalankan Ngrok
```bash
# Jalankan ngrok ke port 8000 (port default Laravel)
ngrok http 8000
```

#### 4. Dapatkan URL Ngrok
Setelah dijalankan, ngrok akan menampilkan URL seperti:
```
Forwarding: https://abc123.ngrok.io -> http://localhost:8000
```

#### 5. Konfigurasi Webhook Midtrans
1. Login ke Midtrans Dashboard
2. Masuk ke **Settings > Configuration**
3. Di bagian **Payment Notification URL**, masukkan:
   ```
   https://abc123.ngrok.io/api/midtrans/callback
   ```
4. Di bagian **Finish Redirect URL**, masukkan:
   ```
   https://abc123.ngrok.io/payment/success
   ```
5. Simpan konfigurasi

#### 6. Update Environment File
Edit `.env` dan update URL aplikasi:
```env
APP_URL=https://abc123.ngrok.io
```

#### 7. Test Webhook
```bash
# Test webhook callback
curl -X POST https://abc123.ngrok.io/api/midtrans/callback \
  -H "Content-Type: application/json" \
  -d '{"order_id":"TEST-001","transaction_status":"capture"}'
```

### Tips Ngrok
- **URL Berubah**: URL ngrok gratis akan berubah setiap restart. Gunakan ngrok premium untuk URL tetap.
- **Logs**: Cek logs ngrok di `http://127.0.0.1:4040` untuk melihat request yang masuk
- **Auto-restart**: Gunakan `ngrok http 8000 --log=stdout` untuk logging

---

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).


<p align="center">
  Made with love using Laravel
</p>
