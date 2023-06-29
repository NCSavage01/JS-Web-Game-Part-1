function newImage(url,left,bottom){
let img = document.createElement('img')
img.src=url;
img.style.position="fixed";
img.style.left= left + 'px';
img.style.bottom= bottom +'px';
document.body.append(img);
return img
}

newImage("assets/green-character.gif", 100, 100);
newImage("assets/pine-tree.png", 450, 200);
newImage("assets/tree.png", 200, 300);
newImage("assets/pillar.png", 350, 100);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);

function newItems(url,left,bottom){
    let newItems = document.createElement('img')
    newItems.src=url;
    newItems.style.position="fixed";
    newItems.style.left= left + 'px'; 
    newItems.style.bottom= bottom + 'px';
    document.body.append(newItems);

newItems.addEventListener("dblclick", () =>{newItems.remove()});

    }
    newItems("assets/sword.png", 500, 405);
    newItems("assets/staff.png", 600, 100);