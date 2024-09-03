function uploadWallpaper() {
    const fileInput = document.getElementById('fileInput');
    const gallery = document.getElementById('gallery');
    
    if (fileInput.files.length === 0) {
        alert('Please select an image file to upload.');
        return;
    }
    
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.alt = 'Wallpaper';
        gallery.appendChild(img);
    };

    reader.readAsDataURL(file);
    fileInput.value = ''; // Reset file input
}
