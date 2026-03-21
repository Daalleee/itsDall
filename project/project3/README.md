# Dapur Roti - Aplikasi E-Commerce Toko Roti

<p align="center">
  <img src="https://img.shields.io/badge/Laravel-11-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel 11">
  <img src="https://img.shields.io/badge/PHP-8.2+-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP 8.2+">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS 4">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License MIT">
</p>

---


## Galeri Screenshot

### Public Pages

#### Homepage
![Homepage](docs/screenshots/01-homepage.png)

#### Produk
![Produk](docs/screenshots/02-homepage-products.png)

#### Kategori
![Kategori](docs/screenshots/03-kategori.png)

#### Login
![Login](docs/screenshots/04-login.png)

### Admin Panel

#### Dashboard Admin
![Dashboard Admin](docs/screenshots/05-admin-dashboard.png)

#### Manajemen Pesanan
![Daftar Pesanan](docs/screenshots/06-admin-orders.png)

#### Tambah Produk
![Tambah Produk](docs/screenshots/07-admin-add-product.png)

#### Tambah Kategori
![Tambah Kategori](docs/screenshots/08-admin-add-category.png)

#### Laporan
![Laporan Admin](docs/screenshots/09-admin-reports.png)

---

## Tentang Aplikasi

**Dapur Roti** adalah aplikasi e-commerce berbasis web yang dirancang khusus untuk toko roti. Aplikasi ini menyediakan platform lengkap untuk manajemen produk, pemesanan online, dan pelacakan pesanan dengan sistem status yang terintegrasi.

Aplikasi ini memiliki dua jenis pengguna:
- **Pelanggan** - Dapat browsing produk, melakukan pemesanan, dan melacak status pesanan
- **Admin** - Mengelola produk, kategori, pesanan, dan menghasilkan laporan penjualan

---

## Fitur Utama

### Untuk Pelanggan

| Fitur | Deskripsi |
|-------|-----------|
| **Browse Produk** | Melihat katalog produk roti dengan foto, harga, dan deskripsi lengkap |
| **Filter by Kategori** | Mencari produk berdasarkan kategori (roti, kue, pastry, dll) |
| **Detail Produk** | Melihat informasi lengkap produk termasuk harga diskon dan stok |
| **Registrasi & Login** | Sistem autentikasi untuk melakukan pemesanan |
| **Checkout** | Proses pemesanan dengan input jumlah dan alamat pengiriman |
| **Upload Bukti Pembayaran** | Upload foto/file bukti transfer bank |
| **Riwayat Pesanan** | Melacak status pesanan secara real-time |

### Untuk Admin

| Fitur | Deskripsi |
|-------|-----------|
| **Dashboard** | Statistik penjualan, produk terlaris, total revenue, dan jumlah pelanggan |
| **Manajemen Produk** | CRUD produk dengan dukungan upload multiple images |
| **Manajemen Kategori** | CRUD kategori produk dengan validasi |
| **Manajemen Pesanan** | Update status pesanan pelanggan (Menunggu -> Diproses -> Dikirim -> Selesai) |
| **Laporan Penjualan** | Generate laporan dengan filter tanggal dan produk |
| **Export Data** | Download laporan dalam format Excel (.xls) atau CSV |

---

## Teknologi

| Kategori | Teknologi | Versi |
|----------|-----------|-------|
| **Framework** | Laravel | 11.x |
| **Bahasa** | PHP | 8.2+ |
| **Frontend** | Blade Templates + Tailwind CSS | 4.x |
| **Database** | SQLite / MySQL | - |
| **Build Tool** | Vite | 7.x |
| **API Documentation** | Dedoc/Scramble | 0.13.x |
| **Testing** | PHPUnit | 10.5+ |
| **Development Tools** | Laravel Sail, Laravel Pint | - |

---

## Cara Instalasi

### Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

- PHP 8.2 atau lebih baru
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/) & npm
- SQLite (bawaan PHP) atau MySQL

### Langkah Instalasi

#### 1. Clone Repository

```bash
cd /home/dalemasan/Documents/Project\ PHP/dapurroti
```

#### 2. Install Dependencies PHP

```bash
composer install
```

#### 3. Setup Environment

```bash
cp .env.example .env
php artisan key:generate
```

#### 4. Setup Database

**Untuk SQLite (Default):**
```bash
touch database/database.sqlite
```

**Untuk MySQL:**
Edit file `.env`:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=dapurroti
DB_USERNAME=root
DB_PASSWORD=your_password
```

#### 5. Jalankan Migrasi

```bash
php artisan migrate
```

#### 6. Install Dependencies Node.js

```bash
npm install
```

#### 7. Build Assets Frontend

```bash
npm run build
```

#### 8. (Opsional) Seed Data Dummy

Jika tersedia seeder:
```bash
php artisan db:seed
```

---

## Cara Menjalankan

### Development Mode (Recommended)

Jalankan semua service sekaligus (server, queue, logs, vite):

```bash
composer dev
```

### Manual Mode

**Terminal 1 - Laravel Server:**
```bash
php artisan serve
```

**Terminal 2 - Vite Dev Server:**
```bash
npm run dev
```

**Terminal 3 - Queue Worker (Opsional):**
```bash
php artisan queue:work
```

### Akses Aplikasi

- **Frontend:** http://localhost:8000
- **Admin Panel:** http://localhost:8000/admin

---

## Akun Default

Setelah instalasi, buat akun admin pertama menggunakan **Laravel Tinker**:

```bash
php artisan tinker
```

```php
use App\Models\User;
use Illuminate\Support\Facades\Hash;

User::create([
    'nama' => 'Admin Dapur Roti',
    'email' => 'admin@dapurroti.com',
    'password' => Hash::make('admin123'),
    'no_hp' => '081234567890',
    'alamat' => 'Jl. Roti Manis No. 1, Jakarta',
    'role' => 'admin'
]);
```

**Login Admin:**
- Email: `admin@dapurroti.com`
- Password: `admin123`

---

## Testing

Jalankan test suite:

```bash
# Jalankan semua test
php artisan test

# Atau dengan composer script
composer test
```

---

## Lisensi

Aplikasi ini dibuat dengan **Laravel Framework** yang berlisensi [MIT](https://opensource.org/licenses/MIT).

---

<p align="center">
  <strong>Dibuat menggunakan Laravel</strong>
</p>
