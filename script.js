const download = document.getElementById('downloadCv');
const web = document.getElementById('DevWeb');
const contraireDiv = document.querySelector('.contraire');

web.addEventListener('click', () => {
    window.location.href = 'https://devtunisian.netlify.app/';
});

var url = new URL(window.location.href);
var dValue = url.searchParams.get('d');

if (dValue !== null && dValue === 't') {
    // Use HTML2Canvas to capture the content of the "contraire" div
    html2canvas(contraireDiv).then((canvas) => {
        // Create a data URL for the captured image
        const imgDataUrl = canvas.toDataURL('image/png');

        // Create an anchor element to trigger the download
        const downloadLink = document.createElement('a');
        downloadLink.href = imgDataUrl;
        downloadLink.download = 'contraire_image.png'; // Set the desired download filename

        // Append the anchor element to the document
        document.body.appendChild(downloadLink);

        // Trigger a click event on the anchor element to initiate the download
        downloadLink.click();

        // Remove the anchor element from the document
        document.body.removeChild(downloadLink);
    });
} else {
    download.style.display = 'none';
}
