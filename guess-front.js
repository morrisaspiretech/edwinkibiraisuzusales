const fs = require('fs');

function updateVehiclesTs() {
    const path = 'apps/website/src/data/vehicles.ts';
    let content = fs.readFileSync(path, 'utf8');

    // Change batch2 hero to 4.jpeg (guessing it's the front)
    content = content.replace(/(id:\s*"tfs87-4x4-manual"[\s\S]*?heroImage:\s*")[^"]+(")/, `$1/vehicles/grouped/batch2/4.jpeg$2`);
    content = content.replace(/(id:\s*"tfs87-4x4-auto"[\s\S]*?heroImage:\s*")[^"]+(")/, `$1/vehicles/grouped/batch2/4.jpeg$2`);
    
    // Change batch1 hero to 3.jpeg (guessing it's the front)
    content = content.replace(/(id:\s*"tfr87-4x2"[\s\S]*?heroImage:\s*")[^"]+(")/, `$1/vehicles/grouped/batch1/3.jpeg$2`);
    
    // Change batch3 hero to 5.jpeg (guessing it's the front)
    content = content.replace(/(id:\s*"tfs87-double-manual"[\s\S]*?heroImage:\s*")[^"]+(")/, `$1/vehicles/grouped/batch3/5.jpeg$2`);

    fs.writeFileSync(path, content);
}

function updatePageTsx() {
    const path = 'apps/website/src/app/page.tsx';
    let content = fs.readFileSync(path, 'utf8');

    content = content.replace(/(id:\s*'tfs87-4x4-manual',[\s\S]*?img:\s*')[^']+(\')/, `$1/vehicles/grouped/batch2/4.jpeg$2`);
    content = content.replace(/(id:\s*'tfs87-4x4-auto',[\s\S]*?img:\s*')[^']+(\')/, `$1/vehicles/grouped/batch2/4.jpeg$2`);
    
    content = content.replace(/(id:\s*'tfr87-4x2',[\s\S]*?img:\s*')[^']+(\')/, `$1/vehicles/grouped/batch1/3.jpeg$2`);
    
    content = content.replace(/(id:\s*'tfs87-double-manual',[\s\S]*?img:\s*')[^']+(\')/, `$1/vehicles/grouped/batch3/5.jpeg$2`);

    fs.writeFileSync(path, content);
}

updateVehiclesTs();
updatePageTsx();
console.log('Guessed front photos');
