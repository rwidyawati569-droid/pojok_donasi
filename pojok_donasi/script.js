function filterBarang(kategori){
  let rows = document.querySelectorAll('#tabelDonasi tr[data-kategori]');
  rows.forEach(row => {
    if(kategori === 'semua' || row.dataset.kategori === kategori){
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}
function mintaBarang(){
  alert('Permintaan terkirim! Hubungi Admin Pojok Donasi via WA untuk jadwal pengambilan di Sekretariat BEM.');
}