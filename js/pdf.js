pdfjsLib.getDocument('.PDF/DeveloperResume.pdf').then(doc => {
    console.log("This file has" + doc._pdfInfo.numPages + "pages";
    
    doc.getPage(1).then(page => {
        const myCanvas = document.getElementById('my_canvas');
        const context = myCanvas.getContext("2d");

        const viewport = page.getViewport(1);
        myCanvas.width = viewport.width;
        myCanvas.height = viewport.height;

        page.render({
            canvasContext: context,
            viewport: viewport
       });
   }));
});