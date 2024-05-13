# Jobs Scraper Mobile Application

Aplikasi Jobs Scraper Mobile ini dikembangkan menggunakan React Native untuk memungkinkan pengguna mencari dan melihat lowongan pekerjaan dari berbagai situs job portal terkemuka di Indonesia.

## Teknologi yang Digunakan

- **Bahasa Pemrograman:**
  - JavaScript/TypeScript
- **Framework:**
  - React Native dengan Expo untuk pengembangan lintas platform (Android dan iOS)
- **API:**
  - Menggunakan FastAPI yang telah dikembangkan untuk backend
- **State Management:**
  - Redux

## Fitur Utama

1. **Job Scraping:**
   - Mengumpulkan data lowongan pekerjaan dari berbagai job portal seperti jobstreet.co.id, karir.com, kalibrr.com, dan linkedin.com.
   - Data disimpan dalam MongoDB dan diakses melalui API yang dibuat melalui FastAPI.

2. **API Server:**
   - Menyediakan endpoint untuk mengakses data lowongan pekerjaan.

3. **Mobile Client:**
   - Menampilkan data lowongan pekerjaan dari API.
   - Fitur pencarian dan filter lowongan pekerjaan.

## Instalasi dan Menjalankan Aplikasi

### Prasyarat
Pastikan Anda telah menginstal Node.js, npm atau yarn, dan Expo CLI.

1. **Clone Repository:**
   ```sh
   git clone https://github.com/ahmadrafidev/jobs-scraper-mobile
   cd jobs-scraper-mobile
   ```

2. **Run the application:**
    ```sh
    npx expo start
    ```

**Note:**

1. Service backend dan juga scraper yang merupakan salah satu fitur aplikasi ini bisa dibaca di repository: [Jobs Scraper Backend](https://github.com/ahmadrafidev/jobs-scraper-backend)
2. Service web client yang menghandle interaksi pengguna lewat website dapat diakses melalui repository: [Jobs Scraper Web](https://github.com/ahmadrafidev/jobs-scraper-web)