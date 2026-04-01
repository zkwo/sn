function proses(isLulus) {
    const nama = document.getElementById('nama').value;
    const nomor = document.getElementById('nomor').value;

    if (!nama || !nomor) {
        alert("Isi nama dan nomor peserta dulu!");
        return;
    }

    document.getElementById('input-form').classList.add('hidden');
    document.getElementById('result-card').classList.remove('hidden');

    document.getElementById('res-nama').innerText = nama.toUpperCase();
    document.getElementById('res-nomor').innerText = nomor;

    const header = document.getElementById('status-header');
    const detail = document.getElementById('res-detail');

    if (isLulus) {
        header.innerHTML = `<div class="status-tag" style="background: #2ecc71;">SELAMAT! ANDA DINYATAKAN LULUS</div>`;
        detail.innerText = "Anda diterima di INSTITUT TEKNOLOGI BANDUNG - TEKNIK INFORMATIKA.";
    } else {
        header.innerHTML = `<div class="status-tag" style="background: #e74c3c;">MOHON MAAF, ANDA TIDAK LULUS</div>`;
        detail.innerText = "Jangan menyerah, masih ada jalur UTBK-SNBT dan Mandiri. Tetap semangat!";
    }
}
