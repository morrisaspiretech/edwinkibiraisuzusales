const fs = require('fs');

function updateVehiclesTs() {
    const path = 'apps/website/src/data/vehicles.ts';
    let content = fs.readFileSync(path, 'utf8');

    function generateGallery(batch, count) {
        let arr = [];
        for(let i=1; i<=count; i++) {
            arr.push(`'/vehicles/grouped/${batch}/${i}.jpeg'`);
        }
        return `[${arr.join(', ')}]`;
    }

    const updates = [
        { id: 'tfr87-4x2', batch: 'batch1', count: 6 },
        { id: 'tfs87-4x4-manual', batch: 'batch2', count: 11 },
        { id: 'tfs87-4x4-auto', batch: 'batch2', count: 11 },
        { id: 'tfs87-double-manual', batch: 'batch3', count: 28 },
        { id: 'tfs87-double-auto', batch: 'batch4', count: 16 },
    ];

    for(let u of updates) {
        const heroRegex = new RegExp(`(id:\\s*"${u.id}"[\\s\\S]*?heroImage:\\s*")[^"]+(")`);
        content = content.replace(heroRegex, `$1/vehicles/grouped/${u.batch}/1.jpeg$2`);
        
        const galleryRegex = new RegExp(`(id:\\s*"${u.id}"[\\s\\S]*?gallery:\\s*\\[)[^\\]]+(\\])`);
        content = content.replace(galleryRegex, `$1${generateGallery(u.batch, u.count).slice(1, -1)}$2`);
    }

    fs.writeFileSync(path, content);
}

function updatePageTsx() {
    const path = 'apps/website/src/app/page.tsx';
    let content = fs.readFileSync(path, 'utf8');

    const updates = [
        { id: 'tfr87-4x2', batch: 'batch1' },
        { id: 'tfs87-4x4-manual', batch: 'batch2' },
        { id: 'tfs87-4x4-auto', batch: 'batch2' },
        { id: 'tfs87-double-manual', batch: 'batch3' },
        { id: 'tfs87-double-auto', batch: 'batch4' },
    ];

    for(let u of updates) {
        const regex = new RegExp(`(id:\\s*'${u.id}',[\\s\\S]*?img:\\s*')[^']+(\')`);
        content = content.replace(regex, `$1/vehicles/grouped/${u.batch}/1.jpeg$2`);
    }
    
    fs.writeFileSync(path, content);
}

updateVehiclesTs();
updatePageTsx();
console.log('Fixed mappings in both files!');
